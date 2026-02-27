// Generic Demo Data for m1NT "Ask Your Binder" - Prospect-Facing
// Facility: Heritage Valley Foods (fictional)
// Certification: BRCGS Issue 9
// Products: Artisan Sourdough Bread, Multigrain Sandwich Loaf, Cinnamon Raisin Swirl
// This data is 100% fictional. No real companies, people, or incidents.

const demoData = {
  'TRACKING-SHEETS': {
    'Shipping Temperature Log': [
      'Lot 2847 | Product: Artisan Sourdough Bread | Ship Date: 2026-02-15 | Destination: Northeast Distribution Center',
      'Trailer #: TRL-4419 | Pre-cool temp: 38.2F | Load temp: 39.1F | Seal #: 881204',
      'Lot 2848 | Product: Multigrain Sandwich Loaf | Ship Date: 2026-02-15 | Destination: Metro Fresh Markets',
      'Trailer #: TRL-4421 | Pre-cool temp: 37.8F | Load temp: 38.5F | Seal #: 881207',
      'Lot 2849 | Product: Cinnamon Raisin Swirl | Ship Date: 2026-02-16 | Destination: Coastal Grocers Co-op',
      'Trailer #: TRL-4425 | Pre-cool temp: 38.0F | Load temp: 38.9F | Seal #: 881215'
    ].join('\n'),
    'CCP Monitoring Log': [
      '2026-02-15 | CCP-001 (Metal Detection) | Product: Artisan Sourdough | Result: PASS | Fe 2.0mm, NFe 2.5mm, SS 3.0mm | Operator: M. Santos',
      '2026-02-15 | CCP-001 (Metal Detection) | Product: Multigrain Sandwich | Result: PASS | Fe 2.0mm, NFe 2.5mm, SS 3.0mm | Operator: M. Santos',
      '2026-02-16 | CCP-001 (Metal Detection) | Product: Cinnamon Raisin | Result: PASS | Fe 2.0mm, NFe 2.5mm, SS 3.0mm | Operator: J. Park',
      '2026-02-16 | CCP-002 (Baking Temperature) | Product: Artisan Sourdough | Target: 410F min | Actual: 418F | Result: PASS | Operator: R. Okafor',
      '2026-02-17 | CCP-001 (Metal Detection) | Product: Artisan Sourdough | Result: DEVIATION | SS test piece not detected on 3rd pass | Corrective action initiated | Operator: M. Santos'
    ].join('\n'),
  },
  'EVIDENCE-PACKAGES': {
    '2026-02-COASTAL-MOLD-COMPLAINT': [
      'CAPA-2026-0042 | Opened: 2026-02-10 | Source: Customer Complaint | Priority: High',
      'Customer: Coastal Grocers Co-op | Product: Artisan Sourdough Bread | Lot: 2831',
      'Complaint: Visible mold on 3 units received 2026-02-09. Photos provided by customer.',
      'Root Cause Investigation: Packaging seal integrity failure on Line 2 (heat seal bar worn).',
      'Immediate Action: Quarantined remaining Lot 2831 inventory (47 units). Notified customer.',
      'Corrective Action: Replaced heat seal bar on Line 2. Added visual seal check to packaging SOP.',
      'Verification: 100% seal check on next 3 production runs. No recurrence observed.',
      'Status: CLOSED 2026-02-18 | Verified by: QA Lead'
    ].join('\n'),
  },
  'HACCP-FOOD-SAFETY-PLAN': {
    'CCP Summary': [
      'CCP-001: Metal Detection - All finished products scanned before case packing.',
      '  Limits: Fe 2.0mm, Non-Ferrous 2.5mm, Stainless Steel 3.0mm',
      '  Monitoring: Every production run, 3 test pieces per startup + hourly verification',
      '  Corrective Action: Hold product, recalibrate, rescan from last good check',
      'CCP-002: Baking Temperature - Internal product temperature verification.',
      '  Limits: Minimum 400F for 18 minutes (sourdough), 380F for 22 minutes (multigrain)',
      '  Monitoring: Continuous oven temp recording + spot checks every 30 min',
      '  Corrective Action: Extend bake time, verify internal temp, hold if below limit'
    ].join('\n'),
    'Annual Review': [
      'Last Annual Review: 2025-11-20 | Next Due: 2026-11-20',
      'HACCP Team: QA Lead, Production Manager, Maintenance Supervisor, Sanitation Lead',
      'Review Findings: No changes to process flow. Added CCP-002 monitoring frequency.',
      'Allergen review: Cinnamon Raisin Swirl contains wheat, milk, eggs. No new allergens.',
      'Updated prerequisite programs: Environmental monitoring expanded to include flour storage area.'
    ].join('\n'),
  },
  'SOPs': {
    'SOP-MD-001 Metal Detector Calibration Failure': [
      '1. STOP production line immediately.',
      '2. Notify QA Lead and Production Supervisor.',
      '3. Quarantine all product from last successful calibration check.',
      '4. Troubleshoot detector (power cycle, clean aperture, check test pieces).',
      '5. If detector passes recalibration: rescan all held product, release if clear.',
      '6. If detector fails recalibration: contact equipment vendor, do not resume until repaired.',
      '7. Document in CCP Monitoring Log: time of failure, product held, resolution, restart time.',
      '8. QA Lead signs off before production resumes.',
      'Last Reviewed: 2026-01-15 | Next Review: 2026-07-15 | Rev: 3.1'
    ].join('\n'),
    'SOP-SAN-003 Allergen Cleaning Verification': [
      '1. Complete allergen changeover cleaning per line-specific procedure.',
      '2. Visually inspect all product contact surfaces for residue.',
      '3. Conduct ATP swab on 3 designated test points per line.',
      '4. Acceptable limit: <10 RLU on all test points.',
      '5. If any point fails: re-clean, re-swab. Do not start production.',
      '6. Record all results on Allergen Changeover Log.',
      '7. QA or trained designee must approve before allergen-free production begins.',
      'Last Reviewed: 2026-01-08 | Next Review: 2026-07-08 | Rev: 2.4'
    ].join('\n'),
  },
  'CAPA-AND-NONCONFORMANCE': {
    'CAPA Tracker': [
      'CAPA-2026-0042 | Opened: 2026-02-10 | Type: Customer Complaint | Status: CLOSED 2026-02-18',
      '  Issue: Mold on Artisan Sourdough (Lot 2831). Root cause: worn heat seal bar.',
      '  Action: Replaced seal bar, added visual check to SOP. Verified over 3 runs.',
      'CAPA-2026-0039 | Opened: 2026-01-28 | Type: Internal Audit | Status: OPEN',
      '  Issue: Training records for 2 new hires incomplete (allergen awareness module missing).',
      '  Action: Scheduled allergen training for week of 2026-02-24. Due: 2026-02-28.',
      'CAPA-2026-0035 | Opened: 2026-01-15 | Type: Environmental Monitoring | Status: CLOSED 2026-01-30',
      '  Issue: Elevated Listeria indicator on drain #7 (packaging area).',
      '  Action: Deep clean, reseal drain, 3 consecutive negative results. Verified.',
    ].join('\n'),
  },
  'ALLERGEN-MANAGEMENT': {
    'Allergen Matrix': [
      'Product | Wheat | Milk | Eggs | Soy | Tree Nuts | Peanuts',
      'Artisan Sourdough Bread | YES | no | no | no | no | no',
      'Multigrain Sandwich Loaf | YES | no | no | YES (soy flour) | no | no',
      'Cinnamon Raisin Swirl | YES | YES (butter) | YES (egg wash) | no | no | no',
      '',
      'Shared equipment: Lines 1-2 run all products. Full allergen clean between Cinnamon Raisin and other products.',
      'Supplier verification: All flour suppliers provide allergen-free certificates quarterly.',
      'Last updated: 2026-02-01 | Next review: 2026-05-01'
    ].join('\n'),
  },
  'TRAINING-RECORDS': {
    'Training Log Q1 2026': [
      'M. Santos | Allergen Awareness | 2026-01-10 | PASS | Cert valid through 2027-01-10',
      'M. Santos | Metal Detector Operation | 2026-01-12 | PASS | Annual recert',
      'J. Park | GMP Refresher | 2026-01-15 | PASS | Annual requirement',
      'J. Park | Metal Detector Operation | 2026-01-15 | PASS | New operator qualification',
      'R. Okafor | HACCP Principles | 2026-02-05 | PASS | HACCP team member requirement',
      'A. Reeves | Allergen Awareness | PENDING | Scheduled 2026-02-24 | New hire',
      'T. Nguyen | Allergen Awareness | PENDING | Scheduled 2026-02-24 | New hire',
    ].join('\n'),
  },
};
