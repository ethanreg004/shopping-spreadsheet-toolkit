export const requiredColumns = Object.freeze([
  "name",
  "category",
  "url",
  "status",
  "last_checked"
]);

export const allowedStatuses = Object.freeze([
  "active",
  "review",
  "broken",
  "archived"
]);

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function daysBetween(earlier, later) {
  return Math.floor((later.getTime() - earlier.getTime()) / 86_400_000);
}

function normalizeUrl(value) {
  try {
    const parsed = new URL(value);
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return null;
  }
}

export function auditSpreadsheet({ headers, records }, options = {}) {
  const now = options.now instanceof Date ? options.now : new Date();
  const staleAfterDays = Number.isFinite(options.staleAfterDays)
    ? options.staleAfterDays
    : 90;
  const errors = [];
  const warnings = [];
  const seenUrls = new Map();

  for (const column of requiredColumns) {
    if (!headers.includes(column)) {
      errors.push({ type: "missing_column", column });
    }
  }

  for (const record of records) {
    for (const column of requiredColumns) {
      if (!record.values[column]) {
        errors.push({ type: "missing_value", row: record.rowNumber, column });
      }
    }

    const normalizedUrl = normalizeUrl(record.values.url);
    if (record.values.url && !normalizedUrl) {
      errors.push({ type: "invalid_url", row: record.rowNumber, value: record.values.url });
    } else if (normalizedUrl) {
      const firstRow = seenUrls.get(normalizedUrl);
      if (firstRow) {
        errors.push({
          type: "duplicate_url",
          row: record.rowNumber,
          firstRow,
          value: normalizedUrl
        });
      } else {
        seenUrls.set(normalizedUrl, record.rowNumber);
      }
    }

    if (record.values.status && !allowedStatuses.includes(record.values.status)) {
      errors.push({
        type: "invalid_status",
        row: record.rowNumber,
        value: record.values.status,
        allowed: allowedStatuses
      });
    }

    if (record.values.last_checked) {
      if (!isIsoDate(record.values.last_checked)) {
        errors.push({
          type: "invalid_date",
          row: record.rowNumber,
          value: record.values.last_checked
        });
      } else {
        const checkedAt = new Date(`${record.values.last_checked}T00:00:00Z`);
        const ageDays = daysBetween(checkedAt, now);
        if (ageDays > staleAfterDays) {
          warnings.push({
            type: "stale_review",
            row: record.rowNumber,
            ageDays,
            thresholdDays: staleAfterDays
          });
        }
      }
    }
  }

  return {
    summary: {
      rowCount: records.length,
      errorCount: errors.length,
      warningCount: warnings.length
    },
    errors,
    warnings
  };
}
