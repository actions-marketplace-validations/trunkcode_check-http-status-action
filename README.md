# Check HTTP Status action

Check HTTP Status of the URL and create a list of the URL with HTTP status code. You can exclude URLs that are working fine (Status code `200`) to cut down the long list and only check the URLs that are having issues.

## Inputs

### `skip200`

**Optional** Whether to list down the `200` URLs or not. Default `false`.

### `sitemap`

**Optional** Sitemap URLs from which page URLs needs to be fetched for checking HTTP status.

### `urls`

**Optional** URLs for which HTTP status needs to be checked.

**NOTE:** Either `sitemap` or `urls` is required. If defined both, then the `sitemap` is used and `urls` variable gets ignored.

## Example Usage

```yml
uses: trunkcode/check-http-status-action@v1.0.0
with:
  skip200: true # recommended
  # Either sitemap or urls is required. If defined both, then the
  # sitemap is used and urls variable gets ignored.
  sitemap: '[
    "https://www.trunkcode.com/page-sitemap.xml",
    "https://www.trunkcode.com/post-sitemap.xml"
  ]'
  urls: '[
    "http://trunkcode.com/",
    "https://example.com/",
    "https://example1234.com/",
    "https://www.trunkcode.com/",
    "https://www.trunkcode.com/test/"
  ]'
```
