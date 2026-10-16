export interface LocationData {
  city: string;
  stateAbbr: string;
  slug: string;
  serviceSlug: string;
  serviceTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localContext: string;
  parish: string;
  dispatchInfo: string;
  utilityProviders: string[];
  localElectricalChallenges: { title: string; description: string }[];
  popularServicesInArea: string[];
  image: string;
  imageAlt: string;
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
}

export const locations: LocationData[] = [
  {
    city: 'Zachary',
    stateAbbr: 'LA',
    slug: 'zachary-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Zachary, LA | Nobles Electrical Services',
    metaDescription: 'Headquartered in Zachary, LA. Nobles Electrical Services provides prompt residential & commercial electrical repairs, panel upgrades, and lighting. Call 225-545-1284.',
    h1: 'Electrician in Zachary, LA',
    parish: 'East Baton Rouge Parish',
    dispatchInfo: 'Primary Headquarters & Dispatch Hub. Average technician response time: under 30 minutes for urgent issues.',
    utilityProviders: ['Entergy Louisiana', 'DEMCO (Dixie Electric Membership Corp)'],
    intro: 'Zachary is our home city and central operations base. From established residences near downtown and Old Scenic Highway to newer master-planned communities like Americana and Copper Mill, Nobles Electrical Services delivers dependable, licensed electrical craftsmanship directly to our neighbors.',
    localContext: 'As a rapidly growing city in northern East Baton Rouge Parish, Zachary homes range from mid-century ranch properties that frequently require 200-amp service upgrades and breaker replacements to contemporary custom homes with high electrical loads for EV chargers and outdoor kitchens.',
    localElectricalChallenges: [
      {
        title: 'Aging 100A Service Panels in Established Neighborhoods',
        description: 'Many homes built prior to 1995 along Old Scenic Highway and rural Zachary still operate on 100-amp service panels. Modern appliances, dual HVAC units, and electronics frequently cause breaker tripping or heat buildup, requiring a safe upgrade to 200A service.'
      },
      {
        title: 'Frequent Thunderstorm Surges & Lightning Protection',
        description: 'Northern East Baton Rouge Parish experiences intense summer thunderstorms. Whole-home surge protection installed directly at the main panel protects expensive HVAC equipment, computers, and appliances from utility line voltage spikes.'
      },
      {
        title: 'Dedicated Circuits for Suburban Expansions & EV Chargers',
        description: 'With rapid new home construction in communities like Americana, homeowners frequently request dedicated 240V Level 2 EV charging circuits, workshop subpanels, and pool/hot tub wiring.'
      }
    ],
    popularServicesInArea: [
      '200-Amp Electrical Panel Upgrades',
      'Whole-Home Surge Protection',
      'EV Charger Circuit Installation',
      'Indoor Recessed & Outdoor Security Lighting',
      'Troubleshooting Tripped Breakers & Dead Outlets'
    ],
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrician repairing a circuit breaker panel for a Zachary, LA customer',
    nearbyAreas: ['Baker', 'Central', 'Baton Rouge', 'St. Francisville', 'Clinton'],
    faqs: [
      {
        q: 'Is Nobles Electrical Services physically located in Zachary, LA?',
        a: 'Yes. Zachary is our official hometown and operations headquarters. Because our service trucks are based right here in town, we offer the fastest response times for Zachary homeowners and businesses.'
      },
      {
        q: 'How fast can you respond to an electrical emergency in Zachary?',
        a: 'For urgent safety hazards such as burning odors, sparking outlets, buzzing panels, or sudden partial power loss, we prioritize Zachary calls for same-day, often within-the-hour dispatch. Call 225-545-1284 immediately.'
      },
      {
        q: 'Do you coordinate electrical permits with the City of Zachary Inspection Department?',
        a: 'Yes. We pull all required permits with the City of Zachary Building Department for panel replacements, service changes, and major renovations, and coordinate final municipal code inspections.'
      },
      {
        q: 'Which electric utilities do you work with in Zachary?',
        a: 'Zachary is served by both Entergy Louisiana and DEMCO depending on your specific neighborhood. We regularly coordinate meter pull/reconnect orders with both utilities for panel upgrades.'
      }
    ],
  },
  {
    city: 'Baton Rouge',
    stateAbbr: 'LA',
    slug: 'baton-rouge-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Baton Rouge, LA | Nobles Electrical Services',
    metaDescription: 'Licensed electrician serving Baton Rouge, LA. Dispatched from Zachary. Expert panel upgrades, older home rewiring, lighting & commercial service. Call 225-545-1284.',
    h1: 'Electrician in Baton Rouge, LA',
    parish: 'East Baton Rouge Parish',
    dispatchInfo: 'Mobile dispatch from our Zachary shop via US-61 / I-110 (approx. 20-25 minutes travel time).',
    utilityProviders: ['Entergy Louisiana'],
    intro: 'We provide licensed residential and light-commercial electrical services across Baton Rouge. From historic homes in the Garden District, Mid City, and Southdowns to bustling commercial properties along Siegen Lane and Florida Boulevard, we deliver code-compliant solutions built for long-term safety.',
    localContext: 'As Louisiana’s capital city, Baton Rouge encompasses an expansive mix of architectural eras. Older neighborhoods often present cloth-insulated wiring, ungrounded two-prong outlets, and obsolete fuse boxes, while modern commercial spaces demand reliable power distribution with zero operational downtime.',
    localElectricalChallenges: [
      {
        title: 'Historic & Mid-Century Cloth Wiring in Urban Neighborhoods',
        description: 'Homes in Mid City, Capital Heights, and the Garden District often feature brittle 1940s–1960s cloth wiring, two-prong receptacles, or outdated junction boxes that pose fire hazards when modern electronics are plugged in.'
      },
      {
        title: 'Zinsco and Federal Pacific Electric (FPE) Panel Replacements',
        description: 'Many mid-century Baton Rouge subdivisions still have hazardous Federal Pacific Stab-Lok or Zinsco panels that are prone to failing to trip during overloads, representing an urgent replacement need.'
      },
      {
        title: 'Commercial Power Distribution & Tenant Improvements',
        description: 'Offices, retail suites, and restaurants across Baton Rouge require dedicated commercial circuits, high-efficiency LED retrofits, and emergency lighting compliance.'
      }
    ],
    popularServicesInArea: [
      'Older Home Grounding & Safety Rewiring',
      'Federal Pacific / Zinsco Panel Replacements',
      'Commercial Electrical Buildouts & Lighting',
      'Kitchen & Bath Remodel Circuit Installation',
      'Real Estate Pre-Purchase Electrical Inspections'
    ],
    image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrical wiring installation for a Baton Rouge, LA home renovation',
    nearbyAreas: ['Zachary', 'Baker', 'Central', 'Port Allen', 'Denham Springs', 'Prairieville'],
    faqs: [
      {
        q: 'Where are your technicians dispatched from when serving Baton Rouge?',
        a: 'We are based in neighboring Zachary and dispatch our mobile service trucks south into Baton Rouge daily via US-61 and I-110. Most Baton Rouge locations are reached within 20 to 30 minutes.'
      },
      {
        q: 'Do you charge extra travel fees to service Baton Rouge homes?',
        a: 'No. Baton Rouge is within our core East Baton Rouge Parish service territory. We provide standard transparent, upfront quotes without hidden long-distance travel markups.'
      },
      {
        q: 'Can you work with the East Baton Rouge City-Parish Permit Office?',
        a: 'Yes. We are licensed and insured in Louisiana and handle all permit applications and inspections required by the City of Baton Rouge / Parish of East Baton Rouge Department of Development.'
      },
      {
        q: 'Can you rewire older homes in Mid City or the Garden District without destroying plaster walls?',
        a: 'Yes. We use specialized fish tape techniques, crawlspace/attic access runs, and careful routing to minimize drywall or historic plaster disruption during rewiring and fixture installation.'
      }
    ],
  },
  {
    city: 'Baker',
    stateAbbr: 'LA',
    slug: 'baker-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Baker, LA | Nobles Electrical Services',
    metaDescription: 'Trusted electrician serving Baker, LA. Based just north in Zachary. Electrical panel replacement, breaker repairs, wiring & inspections. Call 225-545-1284.',
    h1: 'Electrician in Baker, LA',
    parish: 'East Baton Rouge Parish',
    dispatchInfo: 'Directly adjacent to our Zachary headquarters (approx. 8-12 minutes travel time via Hwy 19 / Groom Rd).',
    utilityProviders: ['Entergy Louisiana'],
    intro: 'Baker homeowners and small business owners trust Nobles Electrical Services for fast, dependable electrical repairs and panel replacements. Located just minutes south of our Zachary base, Baker receives prompt, attentive local service for any electrical need.',
    localContext: 'Baker features primarily established post-war and 1960s–1980s residential subdivisions. Many homes here have aging electrical service entrances, corroded exterior meter bases, and breaker panels that have reached the end of their operational lifespan.',
    localElectricalChallenges: [
      {
        title: 'Aging 60A/100A Breaker Boxes Overwhelmed by Modern Demand',
        description: 'Original breaker boxes installed decades ago were never engineered to power central air conditioning, microwave ovens, clothes dryers, and home electronics simultaneously, resulting in nuisance breaker trips.'
      },
      {
        title: 'Ungrounded Outlets in Living Spaces and Bedrooms',
        description: 'Older homes throughout Baker often have two-prong outlets lacking equipment grounding conductors, leaving sensitive electronics unprotected and increasing shock risks.'
      },
      {
        title: 'Weatherhead & Exterior Service Entrance Cable Deterioration',
        description: 'Louisiana humidity and intense UV exposure break down old fabric-jacketed or cracked service cables entering the meter can, requiring exterior service mast upgrades.'
      }
    ],
    popularServicesInArea: [
      'Main Breaker Panel Replacement (100A to 200A)',
      'GFCI Outlet Installation in Kitchens & Baths',
      'Meter Base & Service Mast Weatherhead Repairs',
      'Ceiling Fan & Indoor Lighting Installation',
      'Appliance Dedicated 120V & 240V Circuits'
    ],
    image: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Organized circuit breaker panel installed for a Baker, LA homeowner',
    nearbyAreas: ['Zachary', 'Baton Rouge', 'Central', 'Port Allen'],
    faqs: [
      {
        q: 'How quickly can an electrician arrive at my Baker home?',
        a: 'Because our shop is in Zachary right on the northern border of Baker, we can often arrive at Baker addresses in 10 to 15 minutes, making us the quickest local option for electrical troubleshooting.'
      },
      {
        q: 'My Baker home still has a fuse box or very old panel. Is it safe?',
        a: 'Fuses and panels over 30 years old often lack modern safety protections like AFCIs and have loose busbar connections that create fire hazards. We can inspect your panel and provide a straightforward estimate for a safe 200-amp panel upgrade.'
      },
      {
        q: 'Do you offer electrical inspections for home buyers in Baker?',
        a: 'Yes. We conduct thorough pre-purchase electrical evaluations checking panels, grounding, attic wiring condition, and GFCI compliance to ensure peace of mind before closing.'
      }
    ],
  },
  {
    city: 'Central',
    stateAbbr: 'LA',
    slug: 'central-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Central, LA | Nobles Electrical Services',
    metaDescription: 'Licensed electrician serving Central, LA. Dispatched from Zachary via LA-64. Circuit repairs, panel upgrades, surge protection & generator switches. Call 225-545-1284.',
    h1: 'Electrician in Central, LA',
    parish: 'East Baton Rouge Parish',
    dispatchInfo: 'Fast east-west dispatch from Zachary via LA-64 (approx. 12-18 minutes travel time).',
    utilityProviders: ['DEMCO (Dixie Electric Membership Corp)'],
    intro: 'Nobles Electrical Services provides Central, Louisiana homeowners and businesses with licensed electrical solutions. Whether you live in established subdivisions along Sullivan Road, newer developments off Hooper Road, or properties near the Amite River, we deliver reliable, code-compliant craftsmanship.',
    localContext: 'Central is an independent incorporated city in East Baton Rouge Parish characterized by sprawling residential neighborhoods, custom acreage homes, and local commercial centers. Central properties rely heavily on DEMCO electric cooperative service and face frequent weather-related power challenges.',
    localElectricalChallenges: [
      {
        title: 'Frequent Severe Weather Outages & Generator Hookups',
        description: 'Thunderstorms and hurricanes frequently impact overhead utility feeds in Central. Many residents install manual generator transfer switches or interlock kits to safely power essential home circuits during outages.'
      },
      {
        title: 'Detached Garages, Workshops & Barn Subpanels',
        description: 'Acreage properties throughout Central frequently require trenching underground feeder cables to power detached workshops, pool equipment, outdoor kitchens, and pole barns.'
      },
      {
        title: 'Modern High-Amp Demand & EV Charger Additions',
        description: 'Families expanding their Central homes or purchasing electric vehicles need dedicated 240V Level 2 charger circuits and panel capacity evaluations to prevent overload trips.'
      }
    ],
    popularServicesInArea: [
      'Manual Generator Transfer Switch & Interlock Installation',
      'Detached Workshop & Barn Subpanel Wiring',
      'Whole-Home Surge Protective Devices (SPD)',
      'Circuit Breaker Troubleshooting & Arc-Fault Protection',
      'Outdoor Landscape & Security Floodlight Wiring'
    ],
    image: 'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Circuit breaker panel showing breakers and wiring for a Central, LA home',
    nearbyAreas: ['Zachary', 'Baker', 'Baton Rouge', 'Denham Springs'],
    faqs: [
      {
        q: 'Do you work with DEMCO for power reconnections in Central, LA?',
        a: 'Yes. DEMCO provides electric power to the vast majority of Central homes. We have extensive experience coordinating service upgrades, disconnects, and reconnects directly with DEMCO crews.'
      },
      {
        q: 'Can you install a generator interlock kit on my Central breaker panel?',
        a: 'Yes. A mechanical interlock kit paired with an exterior generator inlet box is a safe, code-compliant, and budget-friendly alternative to a whole-house transfer switch, letting you power select circuits from your portable generator.'
      },
      {
        q: 'How far is your shop from Central?',
        a: 'We are located just west in Zachary. We take LA-64 straight into Central in about 15 minutes, allowing us to schedule prompt visits and respond quickly to safety emergencies.'
      }
    ],
  },
  {
    city: 'St. Francisville',
    stateAbbr: 'LA',
    slug: 'st-francisville-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in St. Francisville, LA | Nobles Electrical Services',
    metaDescription: 'Professional electrician serving St. Francisville, LA. Dispatched from Zachary. Historic home wiring, panel upgrades, lighting & rural acreage service. Call 225-545-1284.',
    h1: 'Electrician in St. Francisville, LA',
    parish: 'West Feliciana Parish',
    dispatchInfo: 'Northwest mobile dispatch from Zachary via US-61 (approx. 20-25 minutes travel time).',
    utilityProviders: ['Entergy Louisiana', 'DEMCO'],
    intro: 'Nobles Electrical Services is proud to serve St. Francisville and West Feliciana Parish. From historic downtown residences and bed-and-breakfasts to wooded acreage properties along the rolling hills of the Tunica Trace, we provide respectful, high-integrity electrical repairs and installations.',
    localContext: 'St. Francisville is famed for its antebellum architecture, historic preservation guidelines, and rural setting. Working on electrical systems here requires specialized care to protect historic building fabrics while bringing wiring, grounding, and panels up to modern NEC safety codes.',
    localElectricalChallenges: [
      {
        title: 'Preserving Historic Architecture During Rewiring',
        description: 'Older homes along Ferdinand Street and Royal Street feature heart-pine timbers, lath-and-plaster walls, and unique construction. Running new wiring requires non-invasive techniques and artisan-level care.'
      },
      {
        title: 'Outdated Wiring Methods (Knob-and-Tube / Early Armored Cable)',
        description: 'Some historical properties retain decommissioned or active remnants of early wiring systems that lack grounding and cannot safely handle modern appliances or insulation contact.'
      },
      {
        title: 'Rural Acreage Feeds & Tree-Canopy Surge Exposure',
        description: 'Heavy tree canopies along winding rural roads mean overhead service lines are vulnerable to limb strikes and lightning spikes, making utility surge protection essential.'
      }
    ],
    popularServicesInArea: [
      'Historic Property Electrical Modernization',
      'Careful Fishing of New Romex in Plaster/Timber Walls',
      'Exterior Landscape, Porch & Architectural Lighting',
      'Whole-Home Surge Protection & Grounding Rod Upgrades',
      'Panel Upgrades for Renovations and Restorations'
    ],
    image: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Light fixture installation for a St. Francisville, LA home',
    nearbyAreas: ['Zachary', 'Clinton', 'Baton Rouge', 'New Roads'],
    faqs: [
      {
        q: 'Do you travel to St. Francisville for residential and commercial electrical work?',
        a: 'Yes! St. Francisville is a regular part of our service route. Our technicians travel up US-61 from Zachary in about 20 to 25 minutes to service homes and businesses throughout West Feliciana Parish.'
      },
      {
        q: 'How do you handle electrical work in historic St. Francisville homes?',
        a: 'We respect the historical integrity of your home. We fish wires behind baseboards, through crawlspaces, or down existing chases rather than cutting into antique plaster or historic millwork wherever possible.'
      },
      {
        q: 'Can you install period-appropriate or custom reproduction lighting?',
        a: 'Yes. We install period-style chandeliers, gas-lantern-style electric sconces, and recessed LED accents that provide modern illumination while enhancing your home’s architectural charm.'
      }
    ],
  },
  {
    city: 'Clinton',
    stateAbbr: 'LA',
    slug: 'clinton-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Clinton, LA | Nobles Electrical Services',
    metaDescription: 'Licensed electrician serving Clinton, LA and East Feliciana Parish. Dispatched from Zachary. Panel replacements, farm subpanels, rewiring & repairs. Call 225-545-1284.',
    h1: 'Electrician in Clinton, LA',
    parish: 'East Feliciana Parish',
    dispatchInfo: 'Northeast dispatch from Zachary via LA-67 (Plank Rd) — approx. 20-25 minutes travel time.',
    utilityProviders: ['DEMCO (Dixie Electric Membership Corp)'],
    intro: 'Nobles Electrical Services provides licensed residential and light-commercial electrical services to Clinton and throughout East Feliciana Parish. From town center residences around the historic Courthouse Square to expansive farms, ranches, and homesteads, we handle your electrical needs with dependability.',
    localContext: 'As the parish seat of East Feliciana, Clinton blends historic small-town residential properties with vast rural acreage. Properties often have long overhead or underground service runs, well water pump circuits, and older electrical configurations that benefit from safety modernization.',
    localElectricalChallenges: [
      {
        title: 'Rural Outage Vulnerability & Long Service Lateral Runs',
        description: 'East Feliciana homes frequently experience extended power flickers and line drops during storms. Proper grounding electrode systems and panel surge suppressors prevent equipment burnout.'
      },
      {
        title: 'Agricultural Equipment, Well Pumps & Barn Wiring',
        description: 'Rural Clinton homesteads require reliable 240V circuits for deep-well water pumps, livestock heating, tractor sheds, and workshop machinery.'
      },
      {
        title: 'Ungrounded Wiring & Defective Outlets in Older Town Homes',
        description: 'Many classic homes in Clinton still feature ungrounded two-wire branch circuits that need GFCI retrofit protection or dedicated grounding runs to meet current safety standards.'
      }
    ],
    popularServicesInArea: [
      'Well Pump & Pressure Switch Electrical Wiring',
      'Farm Shed & Outbuilding Subpanel Installation',
      'Whole-Home Panel Upgrades & Grounding Rod Testing',
      'Generator Hookups & Transfer Switches',
      'Two-Prong to Grounded Three-Prong Outlet Upgrades'
    ],
    image: 'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrician installing a power outlet for a Clinton, LA homeowner',
    nearbyAreas: ['Zachary', 'St. Francisville', 'Jackson', 'Baton Rouge'],
    faqs: [
      {
        q: 'Do you service rural properties and farms outside the Clinton town limits?',
        a: 'Yes. We routinely service rural acreage, farms, and homes throughout East Feliciana Parish. Travel from our Zachary shop up LA-67 (Plank Road) is direct and fast.'
      },
      {
        q: 'Can you wire power to a new water well or workshop in Clinton?',
        a: 'Yes. We handle complete trenching conduit installation, subpanel wiring, and dedicated 240V hookups for water wells, agricultural pumps, and metal workshop buildings.'
      },
      {
        q: 'Who provides power in Clinton, and do you coordinate with them?',
        a: 'Most of Clinton and East Feliciana Parish is served by DEMCO. We coordinate directly with DEMCO’s engineering and metering teams for any service upgrades or meter relocations.'
      }
    ],
  },
  {
    city: 'Port Allen',
    stateAbbr: 'LA',
    slug: 'port-allen-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Port Allen, LA | Nobles Electrical Services',
    metaDescription: 'Licensed electrician serving Port Allen, LA. Dispatched from Zachary via US-190. Panel replacements, troubleshooting, commercial wiring & inspections. Call 225-545-1284.',
    h1: 'Electrician in Port Allen, LA',
    parish: 'West Baton Rouge Parish',
    dispatchInfo: 'Southwest mobile dispatch from Zachary across the US-190 Mississippi River Bridge (approx. 25-30 minutes travel time).',
    utilityProviders: ['Entergy Louisiana'],
    intro: 'Nobles Electrical Services delivers licensed residential and light-commercial electrical work to Port Allen and West Baton Rouge Parish. Located right across the Mississippi River from Baton Rouge, Port Allen properties rely on our transparent pricing and meticulous attention to electrical safety.',
    localContext: 'Port Allen features a diverse blend of older residential riverfront neighborhoods, commercial shipping/transport logistics corridors, and industrial service providers. River humidity and industrial atmospheres accelerate the corrosion of outdoor electrical hardware and meter bases.',
    localElectricalChallenges: [
      {
        title: 'Corrosion on Exterior Meter Sockets & Disconnect Enclosures',
        description: 'Riverfront humidity and industrial atmospheres cause faster corrosion on outdoor electrical disconnects and breaker enclosures in Port Allen, creating hot spots and loose lugs.'
      },
      {
        title: 'Mid-Century Home Panel Upgrades & Rewiring',
        description: 'Homes built between 1950 and 1980 require panel replacements to phase out obsolete breaker designs and handle modern HVAC units and appliances.'
      },
      {
        title: 'Light-Commercial & Warehouse Electrical Repairs',
        description: 'Warehouses, repair shops, and commercial offices in Port Allen frequently require 208V/240V machinery circuits, commercial LED high-bay lighting, and emergency exit lighting compliance.'
      }
    ],
    popularServicesInArea: [
      'Outdoor Weather-Resistant Panel & Disconnect Replacement',
      'Commercial Warehouse & Office Lighting Retrofits',
      'Electrical Safety Inspections & Code Corrections',
      'Troubleshooting Flickering Lights & Intermittent Outages',
      'Appliance & HVAC Dedicated Circuit Runs'
    ],
    image: 'https://images.pexels.com/photos/8293640/pexels-photo-8293640.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrical safety inspection of an outlet for a Port Allen, LA home',
    nearbyAreas: ['Baton Rouge', 'Brusly', 'Zachary', 'Addis'],
    faqs: [
      {
        q: 'Do you cross the river to perform electrical work in Port Allen?',
        a: 'Yes, regularly. Our service trucks cross the US-190 (Old Mississippi River Bridge) directly from Zachary into West Baton Rouge Parish in approximately 25 to 30 minutes.'
      },
      {
        q: 'Do you offer commercial electrical service for Port Allen businesses?',
        a: 'Yes. We provide light-commercial electrical troubleshooting, commercial service upgrades, LED conversions, and machinery circuits for businesses across West Baton Rouge Parish.'
      },
      {
        q: 'Can you inspect an older home before purchase in Port Allen?',
        a: 'Yes. We provide detailed pre-purchase electrical inspections evaluating service panels, grounding, wire condition, and safety compliance for home buyers and realtors.'
      }
    ],
  },
  {
    city: 'Brusly',
    stateAbbr: 'LA',
    slug: 'brusly-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Brusly, LA | Nobles Electrical Services',
    metaDescription: 'Expert electrician serving Brusly, LA. Dispatched from Zachary. Rewiring, 200A panel upgrades, grounding & lighting for West Baton Rouge homes. Call 225-545-1284.',
    h1: 'Electrician in Brusly, LA',
    parish: 'West Baton Rouge Parish',
    dispatchInfo: 'Dispatched from Zachary via US-190 and LA-1 South through Port Allen (approx. 30-35 minutes travel time).',
    utilityProviders: ['Entergy Louisiana'],
    intro: 'Nobles Electrical Services serves homeowners and businesses in the peaceful riverfront community of Brusly, Louisiana. Whether you reside in historic neighborhoods near the Mississippi River levee or newer subdivisions off LA-1, we provide safe, code-compliant electrical solutions.',
    localContext: 'Brusly is a close-knit town in West Baton Rouge Parish with deep agricultural and river heritage. Many homes in Brusly have been in families for generations and require electrical modernization, grounding electrode updates, and GFCI safety protection.',
    localElectricalChallenges: [
      {
        title: 'Substandard or Missing Grounding Systems in Older Homes',
        description: 'Older homes in Brusly often lack modern dual-ground-rod earthing systems, leaving electrical panels and home appliances vulnerable to voltage fluctuations.'
      },
      {
        title: 'Outdoor & Riverbank Moisture Protection',
        description: 'High humidity along the levee requires weather-resistant (WR) GFCI outlets, in-use bubble covers, and sealed conduit for all outdoor lighting, sheds, and patios.'
      },
      {
        title: 'Panel Capacity Upgrades for Home Modernizations',
        description: 'Homeowners adding central AC, tankless electric water heaters, or kitchen additions need comprehensive panel replacements to ensure adequate amperage.'
      }
    ],
    popularServicesInArea: [
      'Grounding System & Dual Ground Rod Installation',
      'Whole-Home Panel Replacement (100A to 200A)',
      'Outdoor Weather-Resistant GFCI Outlets & Sconces',
      'Kitchen & Bathroom Rewiring to NEC Standards',
      'Ceiling Fan & Recessed Lighting Installation'
    ],
    image: 'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrical wiring installation in a wall for a Brusly, LA home',
    nearbyAreas: ['Port Allen', 'Addis', 'Baton Rouge', 'Plaquemine', 'Zachary'],
    faqs: [
      {
        q: 'Does Nobles Electrical Services provide full electrical services in Brusly, LA?',
        a: 'Yes. We serve Brusly and all of West Baton Rouge Parish for residential repairs, panel replacements, rewiring, and lighting installations.'
      },
      {
        q: 'My Brusly home does not have three-prong grounded outlets. How do you fix that?',
        a: 'Depending on your budget and home construction, we can either install code-compliant GFCI receptacles at the start of each circuit (which provide personal shock protection) or run new grounded copper branch circuits.'
      },
      {
        q: 'How do I schedule an electrical estimate in Brusly?',
        a: 'Simply call us at 225-545-1284. We will discuss your project details and book a convenient appointment time.'
      }
    ],
  },
  {
    city: 'Denham Springs',
    stateAbbr: 'LA',
    slug: 'denham-springs-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Denham Springs, LA | Nobles Electrical Services',
    metaDescription: 'Licensed electrician serving Denham Springs, LA. Dispatched from Zachary via LA-64/I-12. Panel upgrades, EV chargers, rewiring & repairs. Call 225-545-1284.',
    h1: 'Electrician in Denham Springs, LA',
    parish: 'Livingston Parish',
    dispatchInfo: 'Eastbound dispatch from Zachary via LA-64 through Central or I-12 (approx. 25-30 minutes travel time).',
    utilityProviders: ['Entergy Louisiana', 'DEMCO'],
    intro: 'Nobles Electrical Services provides expert electrical repair and installation services to Denham Springs and Livingston Parish. From the historic Antique Village district to bustling residential neighborhoods off Range Avenue and 4-H Club Road, we deliver top-quality electrical work.',
    localContext: 'Denham Springs is Livingston Parish’s commercial and residential epicenter. Having experienced significant rebuilding and rapid new residential expansion over the past decade, Denham Springs properties require modern 200-amp service, EV charger circuits, and rigorous code compliance.',
    localElectricalChallenges: [
      {
        title: 'Post-Flood Wiring Remediation & Corrosion Checks',
        description: 'Homes in flood-impacted areas benefit from thorough inspections of lower wall wiring, junction boxes, and panel interiors to verify that moisture corrosion has not degraded terminal connections.'
      },
      {
        title: 'EV Charger Circuits & Panel Load Calculations',
        description: 'Denham Springs commuters traveling into Baton Rouge frequently install Level 2 EV charging stations. We calculate existing electrical loads to ensure the panel can handle the 40A to 50A continuous draw safely.'
      },
      {
        title: 'Commercial Retail & Restaurant Electrical Maintenance',
        description: 'Busy businesses along Range Avenue and Florida Blvd need fast troubleshooting for tripped branch circuits, sign wiring, and efficient LED lighting conversions.'
      }
    ],
    popularServicesInArea: [
      'Level 2 EV Charging Station Dedicated Circuits',
      '200-Amp Main Panel Replacements & Load Balances',
      'Whole-House Surge Suppression Protection',
      'Commercial Lighting Maintenance & Retrofits',
      'Remodel & Addition Electrical Wiring'
    ],
    image: 'https://images.pexels.com/photos/5667685/pexels-photo-5667685.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Electrical panel upgrade and dedicated circuit installation in Denham Springs, LA',
    nearbyAreas: ['Central', 'Baton Rouge', 'Zachary', 'Walker', 'Prairieville'],
    faqs: [
      {
        q: 'Do you service Livingston Parish / Denham Springs regularly?',
        a: 'Yes. Denham Springs is an easy 25-to-30-minute drive from our Zachary location via LA-64 or the I-12 corridor. We regularly service residential and commercial clients across the area.'
      },
      {
        q: 'Can you verify if my Denham Springs home panel can support a Level 2 EV charger?',
        a: 'Yes. We perform a complete NEC demand load calculation on your existing breaker box. If your panel has adequate amperage, we run the dedicated 240V circuit; if not, we can upgrade your panel to 200 amps.'
      },
      {
        q: 'Do you handle commercial electrical work in Denham Springs?',
        a: 'Yes. We serve retail shops, offices, and commercial facilities with lighting upgrades, circuit installations, and preventive electrical maintenance.'
      }
    ],
  },
  {
    city: 'Prairieville',
    stateAbbr: 'LA',
    slug: 'prairieville-la',
    serviceSlug: 'electrician',
    serviceTitle: 'Electrician',
    metaTitle: 'Electrician in Prairieville, LA | Nobles Electrical Services',
    metaDescription: 'Professional electrician serving Prairieville, LA. Dispatched from Zachary. Panel upgrades, EV chargers, new circuits & lighting for Ascension homes. Call 225-545-1284.',
    h1: 'Electrician in Prairieville, LA',
    parish: 'Ascension Parish',
    dispatchInfo: 'Southeast dispatch from Zachary via I-110 and Airline Hwy / I-10 (approx. 35-40 minutes travel time).',
    utilityProviders: ['Entergy Louisiana', 'DEMCO'],
    intro: 'Nobles Electrical Services provides premium residential and light-commercial electrical installations in Prairieville and northern Ascension Parish. Whether you own an executive home in one of the new master-planned subdivisions along Highway 73 or run a business along Airline Highway, we deliver licensed excellence.',
    localContext: 'Prairieville is one of the fastest-growing communities in Louisiana. High-square-footage homes, modern high-draw appliances, smart home technology, and commercial strip centers create intense demand for skilled panel expansions, subpanels, and dedicated equipment circuits.',
    localElectricalChallenges: [
      {
        title: 'Subpanel Installations for Outdoor Kitchens & Pools',
        description: 'Prairieville homeowners frequently add swimming pools, detached workshops, and elaborate covered outdoor kitchens that require dedicated 60A to 100A exterior subpanels.'
      },
      {
        title: 'Panel Capacity Limitations in Growing Executive Homes',
        description: 'Multi-zone HVAC systems, induction ranges, electric vehicle chargers, and multiple entertainment systems can quickly max out a standard 150A or 200A panel, requiring load balancing or a 400A service upgrade.'
      },
      {
        title: 'Whole-Home Surge Protection for Expensive Smart Tech',
        description: 'Modern Prairieville homes packed with smart appliances, home automation, and security equipment require multi-stage surge protection at the main distribution panel.'
      }
    ],
    popularServicesInArea: [
      'Outdoor Kitchen, Patio & Pool Equipment Subpanels',
      'Level 2 EV Charging Station Installation',
      'Whole-Home Panel Expansions & Service Upgrades',
      'High-End Recessed LED & Architectural Chandelier Wiring',
      'Commercial Buildouts for Offices & Retail Spaces'
    ],
    image: 'https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&w=1920',
    imageAlt: 'Commercial electrical panel and wiring for a Prairieville, LA business',
    nearbyAreas: ['Baton Rouge', 'Gonzales', 'Denham Springs', 'Zachary'],
    faqs: [
      {
        q: 'Do you take on electrical projects in Prairieville and Ascension Parish?',
        a: 'Yes. We regularly travel to Prairieville for major residential installations, panel upgrades, pool/patio wiring, and commercial electrical work.'
      },
      {
        q: 'Can you install power for my new pool pump and outdoor patio in Prairieville?',
        a: 'Yes. We install dedicated weatherproof subpanels, trench underground conduits, and wire pool pumps, heaters, salt systems, and outdoor kitchen outlets according to strict NEC wet-location safety codes.'
      },
      {
        q: 'How do you schedule appointments in Prairieville?',
        a: 'call us at 225-545-1284. We schedule convenient arrival windows and confirm travel timing in advance so you know exactly when to expect your electrician.'
      }
    ],
  },
];
