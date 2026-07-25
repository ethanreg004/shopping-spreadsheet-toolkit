# Shopping Spreadsheet Toolkit

A small, dependency-free toolkit for reviewing community-maintained shopping spreadsheets before publishing or sharing them.

It checks the parts that are easy to miss during manual spreadsheet maintenance:

- required columns;
- malformed HTTP or HTTPS URLs;
- duplicate links;
- unsupported status values;
- missing review dates;
- records that have not been checked recently.

The toolkit does not verify product authenticity, price, stock, seller reliability, warehouse handling, or shipping outcomes. Those details remain controlled by the linked marketplaces, agents, and sellers.

## Quick start

Requirements: Node.js 20 or newer.

```bash
npm test
npm run audit:example
```

Audit another file:

```bash
node tools/audit-csv.mjs path/to/links.csv
```

The command prints a JSON report and returns a non-zero exit code when it finds structural errors.

## Expected columns

| Column | Purpose |
|---|---|
| `name` | Human-readable item or resource name |
| `category` | A practical browsing group such as shoes, bags, or accessories |
| `url` | Direct HTTP or HTTPS destination |
| `status` | One of `active`, `review`, `broken`, or `archived` |
| `last_checked` | ISO date in `YYYY-MM-DD` format |

See [the field reference](docs/field-reference.md) for details, [the JSON Schema](docs/schema/shopping-link.schema.json) for machine-readable validation, and [the review checklist](docs/review-checklist.md) for a manual publishing pass.

## Example

The repository includes a fictional dataset at [`examples/sample-links.csv`](examples/sample-links.csv). It intentionally uses `example.com` URLs and does not claim that any products, prices, QC photos, or stock records are real.

## Related public example

For an example of how a public shopping spreadsheet guide can organize category notes and user-facing checks, see the <a href="https://lovego.org/" rel="nofollow sponsored">LoveGoBuy Spreadsheet web guide</a>. Always recheck current price, stock, product photos, agent terms, and shipping details on the destination platform before ordering.

## Project scope

This project focuses on data hygiene and review workflow. It is not an official marketplace tool, does not sell products, and does not automate purchases.

## License

MIT. See [LICENSE](LICENSE).
