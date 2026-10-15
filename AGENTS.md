# Project Guidelines & Routing Rules

## URL Conventions

Always strictly follow the flat `service-location` naming convention for all service and location pages.

### Correct URL Patterns
- **Primary Service Pages (Must include main location `zachary-la`):** `/<service-slug>-zachary-la`
  - Example: `/electrical-installation-zachary-la`
  - Example: `/electrical-repairs-zachary-la`
  - Example: `/wiring-rewiring-zachary-la`
- **Other Location / Service Area Pages:** `/<service-slug>-<location-slug>`
  - Example: `/electrical-installation-baton-rouge-la`
  - Example: `/electrical-panel-services-baker-la`

### Prohibited / Incorrect URL Patterns (Never create these)
- ❌ Do **not** create bare service pages without location name (e.g. `never create /electrical-installation` or `/electrical-repairs`).
- ❌ Do **not** nest service pages under `/services/` (e.g. `never create /services/electrical-installation-zachary-la`).
- ❌ Do **not** nest service area pages under `/service-areas/` (e.g. `never create /service-areas/baton-rouge-la`).
