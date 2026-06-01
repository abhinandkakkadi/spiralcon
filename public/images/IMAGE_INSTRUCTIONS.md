# Image Folder Instructions

Replace all placeholders by adding images to these folders. The website will automatically display them once the files are present.

---

## `/public/images/hero/` — Hero Slideshow Images

| File | Slide | Recommended Size | Content |
|------|-------|------------------|---------|
| `hero-1.jpg` | Slide 1 — "Work For Environment Sustaiability" | 1920×1080px | Drilling rig in the field / site investigation |
| `hero-2.jpg` | Slide 2 — "Protecting Land & Water" | 1920×1080px | Environmental sampling / monitoring wells |
| `hero-3.jpg` | Slide 3 — "Infrastructure Revolution" | 1920×1080px | Large infrastructure project (metro, highway, airport) |

---

## `/public/images/services/` — Service Page Hero Images

| File | Service |
|------|---------|
| `geotechnical-drilling.jpg` | Geotechnical Drilling |
| `environmental-drilling.jpg` | Environmental Drilling |
| `monitoring-wells.jpg` | Monitoring Well Services |
| `gpr-toc-survey.jpg` | GPR & TOC Survey |
| `ground-investigation.jpg` | Ground Investigation |
| `contaminated-land.jpg` | Contaminated Land Remediation |

**Recommended size:** 1920×600px landscape
**Tip:** Each image should show the relevant service in action (e.g. drilling rig, GPR unit, monitoring well installation)

---

## `/public/images/projects/` — Project Images

| File | Project |
|------|---------|
| `metro-rail.jpg` | Metro Rail Corridor |
| `metro-rail-2.jpg` | Metro Rail (gallery) |
| `industrial-contamination.jpg` | Industrial Site Contamination |
| `coastal-highway.jpg` | Coastal Highway |
| `brownfield-mumbai.jpg` | Brownfield Mumbai |
| `solar-farm.jpg` | Solar Farm |
| `landfill-monitoring.jpg` | Landfill Monitoring |
| `airport-expansion.jpg` | Airport Expansion |
| `gpr-bangalore.jpg` | GPR Utility Mapping |
| `heritage-building.jpg` | Heritage Building |
| `dam-safety.jpg` | Dam Safety |

**Recommended size:** 800×500px landscape (hero), 800×600px (gallery)

---

## `/public/images/clients/` — Client Logos

| File | Client |
|------|--------|
| `nhai.png` | National Highways Authority of India |
| `aai.png` | Airport Authority of India |
| `asi.png` | Archaeological Survey of India |
| `sia.png` | State Infrastructure Authority |
| `bbmp.png` | Bruhat Bengaluru Mahanagara Palike |
| `swrd.png` | State Water Resources Department |
| `petrochem.png` | Petrochemical Manufacturer |
| `energy-dev.png` | Renewable Energy Developer |
| `pune-mc.png` | Municipal Corporation of Pune |
| `realestate.png` | Real Estate Developer |
| `cpwd.png` | Central Public Works Department |
| `sail.png` | Steel Authority of India |

**Recommended size:** 200×80px
**Format:** PNG with transparent background
**Tip:** Use grayscale versions for a consistent, professional look on the clients page

---

## `/public/images/about/` — About Page Images

| File | Location in page |
|------|-----------------|
| `about-banner.jpg` | Home page About section (right column) |
| `company-story.jpg` | About page story section |

**Recommended size:** 800×600px

---

## `/public/images/team/` — Team Headshots

| File | Person |
|------|--------|
| `md.jpg` | Managing Director |
| `td-geo.jpg` | Technical Director — Geotechnical |
| `td-env.jpg` | Technical Director — Environmental |
| `ops.jpg` | Head of Operations |

**Recommended size:** 400×400px square
**Style:** Professional headshots, consistent background

---

## `/public/logo.png` — Company Logo

- Replace with your actual logo PNG
- Recommended: SVG or high-res PNG with transparent background
- The current header uses a text-based "SC" placeholder

To use your logo image, update `src/components/layout/Header.tsx`:
- Find the logo `<div>` with "SC" text
- Replace with `<Image src="/logo.png" alt="Spiralcon" width={120} height={40} />`
