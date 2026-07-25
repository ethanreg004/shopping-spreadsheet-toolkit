# Field reference

## `name`

Use a short human-readable label. Do not claim a product is official, verified, authentic, in stock, or available at a particular price unless the spreadsheet has a current auditable source for that statement.

## `category`

Use a browsing category that helps a reader narrow the list. Keep category names consistent rather than creating several near-duplicates such as `bag`, `bags`, and `handbags` without a documented taxonomy.

## `url`

Use a direct HTTP or HTTPS destination. Avoid shortened links, tracking-only redirects, login pages, and internal planning URLs. A valid URL format does not prove that a page is safe, current, or reachable.

## `status`

- `active`: the link passed the most recent documented review;
- `review`: the record needs a new manual check;
- `broken`: the destination failed or no longer contains the expected resource;
- `archived`: the record is retained for history but should not be promoted as current.

## `last_checked`

Use an ISO date in `YYYY-MM-DD` format and update it only after a real review. Automatically replacing the date without checking the destination creates a misleading freshness signal.
