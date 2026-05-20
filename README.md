# Australia's International Student Story

A data visualisation exploring two decades of trends in Australia's international education sector — enrolments, source countries, visa policy shifts, and the COVID-19 disruption.

**Live site:** https://nihar-kul.github.io/FIT2179-DV2-/

## About

This project was created for **FIT2179 Data Visualisation 2** at Monash University, Semester 1 2026. It uses the Vega-Lite library to visualise enrolment, commencement, and visa data from 2005 to 2025, with the goal of telling a clear story about how Australia's international education sector has evolved.

The visualisation is designed for a general Australian audience, with no statistical background required.

## What's Inside

The site contains **13 charts and 2 geographic maps** organised across 5 chapters:

1. **Growth & Collapse** — Higher Education enrolments and commencements over time, all-sector trends, and commencement-to-enrolment ratios
2. **Where Students Come From** — World map, top 15 source countries, 2025 new arrivals, country rankings bump chart, and a 2019 vs 2025 scatter plot
3. **Visa Policy** — Interactive grant-rate chart by sector, lollipop chart of policy change, and lodgement vs grant comparisons
4. **Sector Recovery** — Stacked area, recovery index, slope chart, and VET dual-axis chart
5. **Looking Ahead** — Australia state-level choropleth map, regional breakdown, and 2025 share by country

### Chart Types Used

Line, multi-line, stacked horizontal bar, lollipop, scatter, bump, slope, stacked area, donut, dual-axis combo, and two choropleth maps (world + Australia).

## Data Sources

This visualisation combines data from **two official government sources**:

- **International Student Data 2025** — Australian Government Department of Education (DESE)
- **Student Visa Statistics** — Australian Government Department of Home Affairs

Both datasets are publicly available at [education.gov.au](https://www.education.gov.au/international-education-data-and-research).

## Tech Stack

- **Vega-Lite v5** — All charts and maps
- **HTML5 / CSS3 / Vanilla JS** — No frameworks
- **Custom dark theme** — Black and orange palette
- **GitHub Pages** — Hosting

## File Structure

```
DV2/
├── index.html           Main page structure
├── CSS/
│   └── Style.css        Styling and layout
├── JS/
│   └── main.js          All Vega-Lite specs and data
├── data/
│   ├── cleaned_international_students_by_nationality.csv
│   ├── cleaned_sector_trends_2019_2025.csv
│   └── cleaned_student_visa_data.csv
├── Maps/
│   └── australia-states.json    GeoJSON for Australia map
└── README.md
```

## Running Locally

Because the site loads local map data, it needs a web server (won't work via `file://`).

The easiest way is using the **Live Server** extension in VS Code or Cursor:

1. Install the **Live Server** extension by Ritwick Dey from the extensions marketplace
2. Right-click `index.html` in the file explorer
3. Select **"Open with Live Server"**
4. The site opens in your browser automatically and reloads on save

## Author

**Nihar Kulkarni**
FIT2179 Data Visualisation 2 · Monash University · Semester 1, 2026

## Acknowledgements

- Australia GeoJSON: [Click That Hood](https://github.com/codeforgermany/click_that_hood)
- World map TopoJSON: [world-atlas](https://github.com/topojson/world-atlas)
- AI tools were used during development to assist with code formatting, debugging, and grammar checking in line with unit policy. All data analysis, design decisions, and content are the author's own work.

## License

© 2026 Nihar Kulkarni. All rights reserved.
