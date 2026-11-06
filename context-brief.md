# Brief: Business context folder for Dubai Travel Agent

## Goal
Build a `context/` folder about the owner and the business (dubaitravelagent.com), pull out social proof and results usable in ads, and add them to `competitor-ads-dashboard.html` (the "Your business" tab, payload fields `business` and `proof`).

## Sources
1. **Google Drive:** connect the Drive connector in claude.ai settings.
2. **Gmail:** connect the Gmail connector in claude.ai settings.
3. **dubaitravelagent.com:** scrape with Apify (the session network blocks direct fetch). Token is in `.env.local`.
4. **Computer folders (Documents, Downloads, Desktop):** share them through the Claude desktop app → Settings → Claude Code → Remote Control.

## What to extract
- Reviews and ratings (Google, Tripadvisor, testimonials)
- Numbers: customers served, years in business, tours run, repeat rate
- Awards, licences (DTCM), partnerships, press mentions
- Real offers: prices, discounts, guarantees, speed promises

## Output
- `context/*.md`: one file per source, with a source link for every claim
- Dashboard payload:
  - `business: {name, domain, summary:[tagline, line2]}`
  - `proof: [{title, items:[{claim, source}]}]`
- Republish the artifact at the same URL, then commit and push to `claude/zen-johnson-08m2e0`
