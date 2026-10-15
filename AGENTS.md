# Project Guidelines & Routing Rules

## URL Conventions

Always strictly follow the flat `service-location` naming convention for all service and location pages.

### Correct URL Patterns
- **Service Area Pages (Must use `electrician` as the single service):** `/electrician-<location-slug>`
  - Example: `/electrician-zachary-la`
  - Example: `/electrician-baton-rouge-la`
  - Example: `/electrician-baker-la`
  - Example: `/electrician-central-la`
  - Example: `/electrician-st-francisville-la`
  - Example: `/electrician-clinton-la`
  - Example: `/electrician-port-allen-la`
  - Example: `/electrician-brusly-la`
  - Example: `/electrician-denham-springs-la`
  - Example: `/electrician-prairieville-la`
- **Specific Service Pages (Must include main location `zachary-la`):** `/<service-slug>-zachary-la`
  - Example: `/electrical-installation-zachary-la`
  - Example: `/electrical-repairs-zachary-la`
  - Example: `/wiring-rewiring-zachary-la`
  - Example: `/electrical-panel-services-zachary-la`
  - Example: `/circuit-breaker-services-zachary-la`

### Prohibited / Incorrect URL Patterns (Never create these)
- ❌ Do **not** assign arbitrary different services to service areas (e.g. `never create /electrical-panel-services-baker-la` or `/circuit-breaker-services-central-la`; always use `/electrician-<location>`).
- ❌ Do **not** create bare service pages without location name (e.g. `never create /electrical-installation` or `/electrical-repairs`).
- ❌ Do **not** nest service pages under `/services/` (e.g. `never create /services/electrical-installation-zachary-la`).
- ❌ Do **not** nest service area pages under `/service-areas/` (e.g. `never create /service-areas/baton-rouge-la`).
