import test from "node:test";
import assert from "node:assert/strict";
import { parseCsv } from "../lib/csv.mjs";
import { auditSpreadsheet } from "../lib/audit.mjs";

test("accepts a valid spreadsheet row", () => {
  const data = parseCsv([
    "name,category,url,status,last_checked",
    "Canvas tote,bags,https://example.com/items/canvas-tote,active,2026-07-20"
  ].join("\n"));
  const report = auditSpreadsheet(data, { now: new Date("2026-07-25T00:00:00Z") });

  assert.equal(report.summary.errorCount, 0);
  assert.equal(report.summary.warningCount, 0);
});

test("reports duplicate URLs and invalid status values", () => {
  const data = parseCsv([
    "name,category,url,status,last_checked",
    "Canvas tote,bags,https://example.com/items/canvas-tote,active,2026-07-20",
    "Second tote,bags,https://example.com/items/canvas-tote,published,2026-07-20"
  ].join("\n"));
  const report = auditSpreadsheet(data, { now: new Date("2026-07-25T00:00:00Z") });

  assert.deepEqual(
    report.errors.map((error) => error.type).sort(),
    ["duplicate_url", "invalid_status"]
  );
});

test("warns when a review date is stale", () => {
  const data = parseCsv([
    "name,category,url,status,last_checked",
    "Canvas tote,bags,https://example.com/items/canvas-tote,review,2026-01-01"
  ].join("\n"));
  const report = auditSpreadsheet(data, { now: new Date("2026-07-25T00:00:00Z") });

  assert.equal(report.summary.errorCount, 0);
  assert.equal(report.warnings[0].type, "stale_review");
});

test("parses quoted commas", () => {
  const data = parseCsv([
    "name,category,url,status,last_checked",
    '"Tote, large",bags,https://example.com/items/large-tote,active,2026-07-20'
  ].join("\n"));

  assert.equal(data.records[0].values.name, "Tote, large");
});
