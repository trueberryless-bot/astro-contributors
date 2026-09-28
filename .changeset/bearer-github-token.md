---
"astro-contributors": patch
---

Fixes the `PUBLIC_GITHUB_TOKEN` environment variable being ignored by GitHub when it contains a plain personal access token. Tokens in the `username:token` format are still sent using Basic authentication.
