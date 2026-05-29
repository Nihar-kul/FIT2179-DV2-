const C = {
  orange:  '#ec7a1c',
  orange2: '#f7a64e',
  orangeD: '#c25e10',
  red:     '#d14343',
  teal:    '#389b8c',
  sage:    '#7a9d5a',
  purple:  '#8e74b8',
  blue:    '#4a90d9',
  ink:     '#f4f4f0',
  muted:   '#8a8a82',
  faint:   '#5c5c54',
  paper:   '#18181b',
  line:    '#2a2a30',
};

const SECTOR_COLORS = {
  domain: ['Higher Education','VET','ELICOS','Schools','Non-award'],
  range:  [C.orange, C.orange2, '#a05438', C.teal, C.purple],
};

const embedOpts = {
  actions: false,
  renderer: 'svg',
  config: {
    background: 'transparent',
    font: "'Inter', sans-serif",
    title: {
      font: "'Fraunces', Georgia, serif",
      fontSize: 13, fontWeight: 600, color: C.ink, offset: 10,
    },
    axis: {
      labelFont: "'JetBrains Mono', monospace",
      labelFontSize: 10, labelColor: C.muted,
      gridColor: '#222226', tickColor: C.line, domainColor: C.line,
      titleFont: "'Inter', sans-serif",
      titleFontSize: 11, titleColor: C.muted, titleFontWeight: 600,
    },
    legend: {
      labelFont: "'JetBrains Mono', monospace",
      labelFontSize: 10, labelColor: C.muted,
      titleFont: "'Inter', sans-serif",
      titleFontSize: 10, titleFontWeight: 600, titleColor: C.ink,
      symbolSize: 80,
    },
    view: { stroke: null },
    mark: { tooltip: true },
  },
};

const sectorData = [
  { Sector: 'Higher Education', Year: 2019, Enrolments: 440869, Commencements: 177206 },
  { Sector: 'Higher Education', Year: 2020, Enrolments: 418365, Commencements: 136069 },
  { Sector: 'Higher Education', Year: 2021, Enrolments: 365647, Commencements: 107497 },
  { Sector: 'Higher Education', Year: 2022, Enrolments: 359926, Commencements: 146891 },
  { Sector: 'Higher Education', Year: 2023, Enrolments: 434656, Commencements: 207173 },
  { Sector: 'Higher Education', Year: 2024, Enrolments: 497187, Commencements: 212640 },
  { Sector: 'Higher Education', Year: 2025, Enrolments: 545259, Commencements: 214096 },
  { Sector: 'VET',              Year: 2019, Enrolments: 281386, Commencements: 168413 },
  { Sector: 'VET',              Year: 2020, Enrolments: 304389, Commencements: 165090 },
  { Sector: 'VET',              Year: 2021, Enrolments: 281695, Commencements: 135890 },
  { Sector: 'VET',              Year: 2022, Enrolments: 270969, Commencements: 146472 },
  { Sector: 'VET',              Year: 2023, Enrolments: 324841, Commencements: 189531 },
  { Sector: 'VET',              Year: 2024, Enrolments: 391556, Commencements: 216574 },
  { Sector: 'VET',              Year: 2025, Enrolments: 363542, Commencements: 167293 },
  { Sector: 'Schools',          Year: 2019, Enrolments: 25459,  Commencements: 11869  },
  { Sector: 'Schools',          Year: 2020, Enrolments: 20070,  Commencements: 7905   },
  { Sector: 'Schools',          Year: 2021, Enrolments: 13018,  Commencements: 3374   },
  { Sector: 'Schools',          Year: 2022, Enrolments: 11713,  Commencements: 5823   },
  { Sector: 'Schools',          Year: 2023, Enrolments: 15827,  Commencements: 9653   },
  { Sector: 'Schools',          Year: 2024, Enrolments: 19624,  Commencements: 10939  },
  { Sector: 'Schools',          Year: 2025, Enrolments: 20344,  Commencements: 9681   },
  { Sector: 'ELICOS',           Year: 2019, Enrolments: 156459, Commencements: 117274 },
  { Sector: 'ELICOS',           Year: 2020, Enrolments: 104722, Commencements: 66628  },
  { Sector: 'ELICOS',           Year: 2021, Enrolments: 41841,  Commencements: 28739  },
  { Sector: 'ELICOS',           Year: 2022, Enrolments: 79357,  Commencements: 73431  },
  { Sector: 'ELICOS',           Year: 2023, Enrolments: 161396, Commencements: 122716 },
  { Sector: 'ELICOS',           Year: 2024, Enrolments: 144206, Commencements: 97206  },
  { Sector: 'ELICOS',           Year: 2025, Enrolments: 93219,  Commencements: 60854  },
  { Sector: 'Non-award',        Year: 2019, Enrolments: 48219,  Commencements: 35732  },
  { Sector: 'Non-award',        Year: 2020, Enrolments: 32328,  Commencements: 20418  },
  { Sector: 'Non-award',        Year: 2021, Enrolments: 13589,  Commencements: 7314   },
  { Sector: 'Non-award',        Year: 2022, Enrolments: 20109,  Commencements: 15809  },
  { Sector: 'Non-award',        Year: 2023, Enrolments: 32246,  Commencements: 26020  },
  { Sector: 'Non-award',        Year: 2024, Enrolments: 36039,  Commencements: 28050  },
  { Sector: 'Non-award',        Year: 2025, Enrolments: 35676,  Commencements: 27180  },
];

const nationalityData = [
  { Nationality: 'China',       H: 760817, N: 196957, T: 957774,  E2019: 165420 },
  { Nationality: 'India',       H: 456887, N: 145012, T: 601899,  E2019: 88640  },
  { Nationality: 'Nepal',       H: 145555, N: 71177,  T: 216732,  E2019: 33210  },
  { Nationality: 'South Korea', H: 142149, N: 13991,  T: 156140,  E2019: 21870  },
  { Nationality: 'Brazil',      H: 133091, N: 20567,  T: 153658,  E2019: 17540  },
  { Nationality: 'USA',         H: 139536, N: 7923,   T: 147459,  E2019: 13980  },
  { Nationality: 'Vietnam',     H: 108374, N: 36840,  T: 145214,  E2019: 27650  },
  { Nationality: 'Malaysia',    H: 120981, N: 14808,  T: 135789,  E2019: 20430  },
  { Nationality: 'Thailand',    H: 104075, N: 19472,  T: 123547,  E2019: 16920  },
  { Nationality: 'Colombia',    H: 96396,  N: 25813,  T: 122209,  E2019: 11840  },
  { Nationality: 'Japan',       H: 103571, N: 11580,  T: 115151,  E2019: 13760  },
  { Nationality: 'Indonesia',   H: 89593,  N: 25409,  T: 115002,  E2019: 15870  },
  { Nationality: 'Philippines', H: 75949,  N: 34825,  T: 110774,  E2019: 11920  },
  { Nationality: 'Pakistan',    H: 63224,  N: 23510,  T: 86734,   E2019: 8870   },
  { Nationality: 'Taiwan',      H: 58541,  N: 11747,  T: 70288,   E2019: 9340   },
  { Nationality: 'Sri Lanka',   H: 48893,  N: 21247,  T: 70140,   E2019: 7820   },
  { Nationality: 'Bangladesh',  H: 40005,  N: 27211,  T: 67216,   E2019: 6980   },
  { Nationality: 'Germany',     H: 62805,  N: 4322,   T: 67127,   E2019: 7410   },
];

const visaRawData = [
  { Sector: 'Higher Education Sector', FY: '2005-06', Lodged: 94796,  Rate: 96.2 },
  { Sector: 'Higher Education Sector', FY: '2006-07', Lodged: 108025, Rate: 97.1 },
  { Sector: 'Higher Education Sector', FY: '2007-08', Lodged: 118781, Rate: 96.4 },
  { Sector: 'Higher Education Sector', FY: '2008-09', Lodged: 122455, Rate: 95.7 },
  { Sector: 'Higher Education Sector', FY: '2009-10', Lodged: 109814, Rate: 94.5 },
  { Sector: 'Higher Education Sector', FY: '2010-11', Lodged: 104869, Rate: 96.1 },
  { Sector: 'Higher Education Sector', FY: '2011-12', Lodged: 107650, Rate: 93.0 },
  { Sector: 'Higher Education Sector', FY: '2012-13', Lodged: 124492, Rate: 94.7 },
  { Sector: 'Higher Education Sector', FY: '2013-14', Lodged: 144874, Rate: 94.2 },
  { Sector: 'Higher Education Sector', FY: '2014-15', Lodged: 148674, Rate: 92.2 },
  { Sector: 'Higher Education Sector', FY: '2015-16', Lodged: 155486, Rate: 92.0 },
  { Sector: 'Higher Education Sector', FY: '2016-17', Lodged: 163204, Rate: 95.3 },
  { Sector: 'Higher Education Sector', FY: '2017-18', Lodged: 179282, Rate: 95.1 },
  { Sector: 'Higher Education Sector', FY: '2018-19', Lodged: 206637, Rate: 94.3 },
  { Sector: 'Higher Education Sector', FY: '2019-20', Lodged: 169940, Rate: 94.5 },
  { Sector: 'Higher Education Sector', FY: '2020-21', Lodged: 122145, Rate: 96.4 },
  { Sector: 'Higher Education Sector', FY: '2021-22', Lodged: 171434, Rate: 96.0 },
  { Sector: 'Higher Education Sector', FY: '2022-23', Lodged: 273586, Rate: 87.5 },
  { Sector: 'Higher Education Sector', FY: '2023-24', Lodged: 270390, Rate: 84.2 },
  { Sector: 'Higher Education Sector', FY: '2024-25', Lodged: 228906, Rate: 91.9 },
  { Sector: 'Vocational Education and Training Sector', FY: '2005-06', Lodged: 32350,  Rate: 92.6 },
  { Sector: 'Vocational Education and Training Sector', FY: '2006-07', Lodged: 46781,  Rate: 93.2 },
  { Sector: 'Vocational Education and Training Sector', FY: '2007-08', Lodged: 66335,  Rate: 92.2 },
  { Sector: 'Vocational Education and Training Sector', FY: '2008-09', Lodged: 101099, Rate: 89.1 },
  { Sector: 'Vocational Education and Training Sector', FY: '2009-10', Lodged: 66891,  Rate: 78.9 },
  { Sector: 'Vocational Education and Training Sector', FY: '2010-11', Lodged: 63634,  Rate: 88.9 },
  { Sector: 'Vocational Education and Training Sector', FY: '2011-12', Lodged: 61861,  Rate: 85.1 },
  { Sector: 'Vocational Education and Training Sector', FY: '2012-13', Lodged: 54355,  Rate: 89.0 },
  { Sector: 'Vocational Education and Training Sector', FY: '2013-14', Lodged: 54606,  Rate: 89.5 },
  { Sector: 'Vocational Education and Training Sector', FY: '2014-15', Lodged: 61507,  Rate: 89.2 },
  { Sector: 'Vocational Education and Training Sector', FY: '2015-16', Lodged: 76992,  Rate: 84.5 },
  { Sector: 'Vocational Education and Training Sector', FY: '2016-17', Lodged: 77626,  Rate: 83.8 },
  { Sector: 'Vocational Education and Training Sector', FY: '2017-18', Lodged: 95405,  Rate: 81.9 },
  { Sector: 'Vocational Education and Training Sector', FY: '2018-19', Lodged: 114470, Rate: 80.1 },
  { Sector: 'Vocational Education and Training Sector', FY: '2019-20', Lodged: 103068, Rate: 87.0 },
  { Sector: 'Vocational Education and Training Sector', FY: '2020-21', Lodged: 81110,  Rate: 94.4 },
  { Sector: 'Vocational Education and Training Sector', FY: '2021-22', Lodged: 94093,  Rate: 84.0 },
  { Sector: 'Vocational Education and Training Sector', FY: '2022-23', Lodged: 136036, Rate: 77.0 },
  { Sector: 'Vocational Education and Training Sector', FY: '2023-24', Lodged: 135364, Rate: 61.4 },
  { Sector: 'Vocational Education and Training Sector', FY: '2024-25', Lodged: 71377,  Rate: 58.1 },
  { Sector: 'Postgraduate Research Sector', FY: '2005-06', Lodged: 3826, Rate: 97.7 },
  { Sector: 'Postgraduate Research Sector', FY: '2006-07', Lodged: 4172, Rate: 97.4 },
  { Sector: 'Postgraduate Research Sector', FY: '2007-08', Lodged: 4378, Rate: 97.3 },
  { Sector: 'Postgraduate Research Sector', FY: '2008-09', Lodged: 5171, Rate: 97.5 },
  { Sector: 'Postgraduate Research Sector', FY: '2009-10', Lodged: 5393, Rate: 98.0 },
  { Sector: 'Postgraduate Research Sector', FY: '2010-11', Lodged: 5649, Rate: 98.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2011-12', Lodged: 6204, Rate: 98.4 },
  { Sector: 'Postgraduate Research Sector', FY: '2012-13', Lodged: 6484, Rate: 98.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2013-14', Lodged: 6532, Rate: 98.7 },
  { Sector: 'Postgraduate Research Sector', FY: '2014-15', Lodged: 6524, Rate: 98.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2015-16', Lodged: 6527, Rate: 98.1 },
  { Sector: 'Postgraduate Research Sector', FY: '2016-17', Lodged: 6663, Rate: 98.4 },
  { Sector: 'Postgraduate Research Sector', FY: '2017-18', Lodged: 7096, Rate: 98.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2018-19', Lodged: 7797, Rate: 97.9 },
  { Sector: 'Postgraduate Research Sector', FY: '2019-20', Lodged: 7466, Rate: 98.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2020-21', Lodged: 6388, Rate: 98.5 },
  { Sector: 'Postgraduate Research Sector', FY: '2021-22', Lodged: 7895, Rate: 97.3 },
  { Sector: 'Postgraduate Research Sector', FY: '2022-23', Lodged: 9028, Rate: 98.1 },
  { Sector: 'Postgraduate Research Sector', FY: '2023-24', Lodged: 9063, Rate: 97.8 },
  { Sector: 'Postgraduate Research Sector', FY: '2024-25', Lodged: 9693, Rate: 98.3 },
  { Sector: 'Schools Sector', FY: '2005-06', Lodged: 14880, Rate: 92.4 },
  { Sector: 'Schools Sector', FY: '2006-07', Lodged: 18482, Rate: 95.2 },
  { Sector: 'Schools Sector', FY: '2007-08', Lodged: 20445, Rate: 85.8 },
  { Sector: 'Schools Sector', FY: '2008-09', Lodged: 15806, Rate: 82.7 },
  { Sector: 'Schools Sector', FY: '2009-10', Lodged: 13184, Rate: 89.7 },
  { Sector: 'Schools Sector', FY: '2010-11', Lodged: 11115, Rate: 94.0 },
  { Sector: 'Schools Sector', FY: '2011-12', Lodged: 10309, Rate: 91.4 },
  { Sector: 'Schools Sector', FY: '2012-13', Lodged:  9988, Rate: 94.5 },
  { Sector: 'Schools Sector', FY: '2013-14', Lodged: 11446, Rate: 93.2 },
  { Sector: 'Schools Sector', FY: '2014-15', Lodged: 13195, Rate: 91.0 },
  { Sector: 'Schools Sector', FY: '2015-16', Lodged: 13653, Rate: 91.4 },
  { Sector: 'Schools Sector', FY: '2016-17', Lodged: 13857, Rate: 92.6 },
  { Sector: 'Schools Sector', FY: '2017-18', Lodged: 12686, Rate: 91.5 },
  { Sector: 'Schools Sector', FY: '2018-19', Lodged: 12286, Rate: 91.9 },
  { Sector: 'Schools Sector', FY: '2019-20', Lodged:  7882, Rate: 92.7 },
  { Sector: 'Schools Sector', FY: '2020-21', Lodged:  2536, Rate: 97.8 },
  { Sector: 'Schools Sector', FY: '2021-22', Lodged:  5454, Rate: 96.7 },
  { Sector: 'Schools Sector', FY: '2022-23', Lodged: 11055, Rate: 94.2 },
  { Sector: 'Schools Sector', FY: '2023-24', Lodged: 12511, Rate: 90.6 },
  { Sector: 'Schools Sector', FY: '2024-25', Lodged:  9669, Rate: 86.3 },
  { Sector: 'Independent ELICOS Sector', FY: '2005-06', Lodged: 26603, Rate: 97.2 },
  { Sector: 'Independent ELICOS Sector', FY: '2006-07', Lodged: 30522, Rate: 97.1 },
  { Sector: 'Independent ELICOS Sector', FY: '2007-08', Lodged: 29811, Rate: 96.2 },
  { Sector: 'Independent ELICOS Sector', FY: '2008-09', Lodged: 38142, Rate: 93.0 },
  { Sector: 'Independent ELICOS Sector', FY: '2009-10', Lodged: 33891, Rate: 91.9 },
  { Sector: 'Independent ELICOS Sector', FY: '2010-11', Lodged: 29547, Rate: 90.3 },
  { Sector: 'Independent ELICOS Sector', FY: '2011-12', Lodged: 28939, Rate: 89.5 },
  { Sector: 'Independent ELICOS Sector', FY: '2012-13', Lodged: 29870, Rate: 92.7 },
  { Sector: 'Independent ELICOS Sector', FY: '2013-14', Lodged: 30596, Rate: 93.8 },
  { Sector: 'Independent ELICOS Sector', FY: '2014-15', Lodged: 32736, Rate: 93.7 },
  { Sector: 'Independent ELICOS Sector', FY: '2015-16', Lodged: 35944, Rate: 93.2 },
  { Sector: 'Independent ELICOS Sector', FY: '2016-17', Lodged: 41502, Rate: 89.7 },
  { Sector: 'Independent ELICOS Sector', FY: '2017-18', Lodged: 40596, Rate: 87.4 },
  { Sector: 'Independent ELICOS Sector', FY: '2018-19', Lodged: 42284, Rate: 89.8 },
  { Sector: 'Independent ELICOS Sector', FY: '2019-20', Lodged: 33503, Rate: 92.6 },
  { Sector: 'Independent ELICOS Sector', FY: '2020-21', Lodged:  5575, Rate: 94.8 },
  { Sector: 'Independent ELICOS Sector', FY: '2021-22', Lodged: 30183, Rate: 85.0 },
  { Sector: 'Independent ELICOS Sector', FY: '2022-23', Lodged: 64557, Rate: 91.2 },
  { Sector: 'Independent ELICOS Sector', FY: '2023-24', Lodged: 49554, Rate: 81.0 },
  { Sector: 'Independent ELICOS Sector', FY: '2024-25', Lodged: 27515, Rate: 78.8 },
];

// ── CHART 1 ───────────────────────────────────────────────────────
const heData = sectorData.filter(d => d.Sector === 'Higher Education');
const chart1Data = [
  ...heData.map(d => ({ Year: d.Year, Value: d.Enrolments,    Metric: 'Enrolments'    })),
  ...heData.map(d => ({ Year: d.Year, Value: d.Commencements, Metric: 'Commencements' })),
];
vegaEmbed('#chart1', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 290,
  data: { values: chart1Data },
  layer: [
    {
      mark: { type: 'area', opacity: 0.13, interpolate: 'monotone' },
      encoding: {
        x: { field: 'Year', type: 'ordinal', axis: { labelAngle: 0 } },
        y: { field: 'Value', type: 'quantitative', stack: false, axis: { format: ',.0f', title: 'Students' } },
        color: { field: 'Metric', type: 'nominal', scale: { domain: ['Enrolments','Commencements'], range: [C.orange, C.orange2] } },
      },
    },
    {
      mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone' },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Value', type: 'quantitative', stack: false },
        color: { field: 'Metric', type: 'nominal', scale: { domain: ['Enrolments','Commencements'], range: [C.orange, C.orange2] } },
        tooltip: [{ field: 'Year' }, { field: 'Metric' }, { field: 'Value', format: ',.0f', title: 'Count' }],
      },
    },
    {
      mark: { type: 'point', filled: true, size: 55 },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Value', type: 'quantitative', stack: false },
        color: { field: 'Metric', type: 'nominal', scale: { domain: ['Enrolments','Commencements'], range: [C.orange, C.orange2] } },
      },
    },
    {
      data: { values: [{ Year: 2021, note: '▼ COVID low', Value: 107497 }] },
      mark: { type: 'text', dy: -14, fontSize: 10, color: C.red, fontWeight: 600 },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Value', type: 'quantitative' },
        text: { field: 'note' },
      },
    },
  ],
}, embedOpts);

// ── CHART 2 ───────────────────────────────────────────────────────
vegaEmbed('#chart2', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 310,
  data: { values: sectorData },
  mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone', point: { filled: true, size: 50 } },
  encoding: {
    x: { field: 'Year', type: 'ordinal', axis: { labelAngle: 0 } },
    y: { field: 'Enrolments', type: 'quantitative', axis: { format: ',.0f', title: 'Enrolments' } },
    color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS },
    strokeDash: {
      field: 'Sector', type: 'nominal',
      scale: { domain: SECTOR_COLORS.domain, range: [[1,0],[1,0],[4,2],[4,2],[2,2]] },
    },
    tooltip: [{ field: 'Sector' }, { field: 'Year' }, { field: 'Enrolments', format: ',.0f' }],
  },
}, embedOpts);

// ── CHART 3 ───────────────────────────────────────────────────────
const top15 = nationalityData.slice(0, 15);
vegaEmbed('#chart3', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 390,
  data: { values: top15 },
  layer: [
    {
      mark: { type: 'bar', cornerRadiusEnd: 2 },
      encoding: {
        y: { field: 'Nationality', type: 'nominal', sort: { field: 'T', order: 'descending' }, axis: { title: null } },
        x: { field: 'H', type: 'quantitative', axis: { format: ',.0f', title: 'Cumulative Students' } },
        color: { value: C.orange },
        tooltip: [{ field: 'Nationality' }, { field: 'H', title: '2005–2024', format: ',.0f' }, { field: 'N', title: '2025', format: ',.0f' }],
      },
    },
    {
      mark: { type: 'bar', cornerRadiusEnd: 2 },
      encoding: {
        y: { field: 'Nationality', type: 'nominal', sort: { field: 'T', order: 'descending' } },
        x: { field: 'N', type: 'quantitative' },
        x2: { field: 'T' },
        color: { value: C.orange2 },
        tooltip: [{ field: 'Nationality' }, { field: 'N', title: '2025 only', format: ',.0f' }],
      },
    },
  ],
}, embedOpts);

// ── CHART 4a ──────────────────────────────────────────────────────
const top12 = nationalityData.slice(0, 12).sort((a, b) => b.N - a.N);
vegaEmbed('#chart4a', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 320,
  data: { values: top12 },
  mark: { type: 'bar', cornerRadiusEnd: 2 },
  encoding: {
    y: { field: 'Nationality', type: 'nominal', sort: { field: 'N', order: 'descending' }, axis: { title: null } },
    x: { field: 'N', type: 'quantitative', axis: { format: ',.0f', title: '2025 Students' } },
    color: { field: 'N', type: 'quantitative', scale: { range: [C.orange + '55', C.orange] }, legend: null },
    tooltip: [{ field: 'Nationality' }, { field: 'N', title: '2025', format: ',.0f' }],
  },
}, embedOpts);

// ── CHART 4b ──────────────────────────────────────────────────────
const shareData = nationalityData.slice(0, 15).map(d => ({
  ...d, Pct: Math.round((d.N / d.T) * 1000) / 10,
}));
vegaEmbed('#chart4b', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 290,
  data: { values: shareData },
  layer: [
    {
      mark: { type: 'bar', cornerRadiusEnd: 2 },
      encoding: {
        y: { field: 'Nationality', type: 'nominal', sort: { field: 'Pct', order: 'descending' }, axis: { title: null } },
        x: { field: 'Pct', type: 'quantitative', axis: { format: '.1f', title: '2025 as % of all-time total' } },
        color: { field: 'Pct', type: 'quantitative', scale: { domain: [5, 35], range: [C.teal + '88', C.teal] }, legend: null },
        tooltip: [{ field: 'Nationality' }, { field: 'Pct', title: '%', format: '.1f' }],
      },
    },
    {
      mark: { type: 'rule', color: C.red, strokeDash: [4, 3], strokeWidth: 1.5 },
      data: { values: [{ x: 20 }] },
      encoding: { x: { field: 'x', type: 'quantitative' } },
    },
  ],
}, embedOpts);

// ── CHART 5 ───────────────────────────────────────────────────────
function renderChart5(sector) {
  const filtered = sector === 'all' ? visaRawData : visaRawData.filter(d => d.Sector === sector);
  const colorEnc = sector === 'all'
    ? {
        field: 'Sector', type: 'nominal',
        scale: {
          domain: ['Higher Education Sector','Vocational Education and Training Sector','Postgraduate Research Sector','Schools Sector','Independent ELICOS Sector'],
          range: [C.orange, C.orange2, C.red, C.teal, C.purple],
        },
      }
    : { value: C.orange };
  vegaEmbed('#chart5', {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 'container', height: 310,
    data: { values: filtered },
    layer: [
      {
        mark: { type: 'area', opacity: 0.08, interpolate: 'monotone' },
        encoding: {
          x: { field: 'FY', type: 'ordinal', axis: { labelAngle: -40, labelLimit: 80 } },
          y: { field: 'Rate', type: 'quantitative', stack: false, scale: { domain: [40, 100] }, axis: { title: 'Grant Rate (%)' } },
          color: colorEnc,
        },
      },
      {
        mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone' },
        encoding: {
          x: { field: 'FY', type: 'ordinal' },
          y: { field: 'Rate', type: 'quantitative', stack: false },
          color: colorEnc,
          tooltip: [{ field: 'FY', title: 'Year' }, { field: 'Sector' }, { field: 'Rate', title: 'Grant Rate %', format: '.1f' }, { field: 'Lodged', title: 'Applications', format: ',.0f' }],
        },
      },
      {
        mark: { type: 'point', filled: true, size: 50 },
        encoding: {
          x: { field: 'FY', type: 'ordinal' },
          y: { field: 'Rate', type: 'quantitative', stack: false },
          color: colorEnc,
        },
      },
    ],
  }, embedOpts);
}
renderChart5('all');
document.querySelectorAll('#sectorToggle .tog-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('#sectorToggle .tog-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderChart5(this.dataset.sector);
  });
});

// ── CHART 6 ───────────────────────────────────────────────────────
const recentVisa = visaRawData
  .filter(d => d.Sector === 'Higher Education Sector' && ['2022-23','2023-24','2024-25'].includes(d.FY))
  .map(d => ({
    ...d,
    Granted: Math.round(d.Lodged * d.Rate / 100),
    Refused: Math.round(d.Lodged * (1 - d.Rate / 100)),
  }));
const gapData = [];
recentVisa.forEach(d => {
  gapData.push({ FY: d.FY, Count: d.Granted, Type: 'Granted' });
  gapData.push({ FY: d.FY, Count: d.Refused, Type: 'Refused / Withdrawn' });
});
vegaEmbed('#chart6', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 270,
  data: { values: gapData },
  mark: { type: 'bar', cornerRadiusTopLeft: 2, cornerRadiusTopRight: 2 },
  encoding: {
    x: { field: 'FY', type: 'ordinal', axis: { title: 'Financial Year', labelAngle: 0 } },
    y: { field: 'Count', type: 'quantitative', stack: true, axis: { format: ',.0f', title: 'Applications' } },
    color: { field: 'Type', type: 'nominal', scale: { domain: ['Granted','Refused / Withdrawn'], range: [C.orange, C.red + 'CC'] }, legend: { orient: 'top' } },
    order: { field: 'Type', sort: 'descending' },
    tooltip: [{ field: 'FY' }, { field: 'Type' }, { field: 'Count', format: ',.0f' }],
  },
}, embedOpts);

// ── CHART 7 — stacked area ────────────────────────────────────────
const stackedRows = sectorData.map(d => ({
  Sector: d.Sector,
  YearStr: String(d.Year),
  Enrolments: d.Enrolments,
}));
vegaEmbed('#chart7', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 340,
  data: { values: stackedRows },
  mark: { type: 'area', interpolate: 'monotone', opacity: 0.92 },
  encoding: {
    x: {
      field: 'YearStr', type: 'ordinal',
      sort: ['2019','2020','2021','2022','2023','2024','2025'],
      axis: { title: 'Year', labelAngle: 0 },
    },
    y: {
      field: 'Enrolments', type: 'quantitative',
      stack: 'zero',
      axis: { format: ',.0f', title: 'Total Enrolments' },
    },
    color: {
      field: 'Sector', type: 'nominal',
      scale: {
        domain: ['Higher Education','VET','ELICOS','Schools','Non-award'],
        range: ['#b85d24', '#8a6a3a', '#5a4232', '#4a6655', '#5a4f6e'],
      },
      legend: { orient: 'right', title: 'Sector' },
    },
    order: {
      field: 'Sector', type: 'nominal',
      sort: ['Higher Education','VET','ELICOS','Schools','Non-award'],
    },
    tooltip: [{ field: 'Sector' }, { field: 'YearStr', title: 'Year' }, { field: 'Enrolments', format: ',.0f' }],
  },
}, embedOpts);

// ── CHART 8 ───────────────────────────────────────────────────────
const base2019 = {};
sectorData.filter(d => d.Year === 2019).forEach(d => { base2019[d.Sector] = d.Commencements; });
const indexData = sectorData.map(d => ({
  ...d, Index: Math.round((d.Commencements / base2019[d.Sector]) * 100),
}));
vegaEmbed('#chart8', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 310,
  data: { values: indexData },
  layer: [
    {
      mark: { type: 'rule', color: '#444', strokeDash: [5, 3], strokeWidth: 1.2 },
      data: { values: [{ y: 100 }] },
      encoding: { y: { field: 'y', type: 'quantitative' } },
    },
    {
      mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone' },
      encoding: {
        x: { field: 'Year', type: 'ordinal', axis: { labelAngle: 0 } },
        y: { field: 'Index', type: 'quantitative', axis: { title: 'Index (2019 = 100)' } },
        color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS },
        tooltip: [{ field: 'Sector' }, { field: 'Year' }, { field: 'Index' }],
      },
    },
    {
      mark: { type: 'point', filled: true, size: 55 },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Index', type: 'quantitative' },
        color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS },
      },
    },
  ],
}, embedOpts);

// ── CHART 9 ───────────────────────────────────────────────────────
const regionData = [
  { Region: 'South Asia',           Students: 322982 },
  { Region: 'East Asia',            Students: 267528 },
  { Region: 'Southeast Asia',       Students: 87120  },
  { Region: 'Latin America',        Students: 62014  },
  { Region: 'North America / EU',   Students: 34414  },
  { Region: 'Middle East / Africa', Students: 17448  },
  { Region: 'Pacific / Oceania',    Students: 8061   },
].sort((a, b) => b.Students - a.Students);
vegaEmbed('#chart9', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 290,
  data: { values: regionData },
  mark: { type: 'bar', cornerRadiusEnd: 3 },
  encoding: {
    y: { field: 'Region', type: 'nominal', sort: { field: 'Students', order: 'descending' }, axis: { title: null } },
    x: { field: 'Students', type: 'quantitative', axis: { format: ',.0f', title: '2025 Students' } },
    color: { field: 'Students', type: 'quantitative', scale: { range: [C.orange + '55', C.orange] }, legend: null },
    tooltip: [{ field: 'Region' }, { field: 'Students', format: ',.0f' }],
  },
}, embedOpts);

// ── CHART 10 (Figure 15) ──────────────────────────────────────────
const vetVisa = visaRawData.filter(d => d.Sector === 'Vocational Education and Training Sector');
vegaEmbed('#chart10', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 320,
  data: { values: vetVisa },
  encoding: {
    x: { field: 'FY', type: 'ordinal', axis: { labelAngle: -40, labelLimit: 90, title: 'Financial Year' } },
  },
  layer: [
    {
      mark: { type: 'bar', color: C.orange + '44', cornerRadiusTopLeft: 2, cornerRadiusTopRight: 2 },
      encoding: {
        y: {
          field: 'Lodged', type: 'quantitative',
          axis: { format: ',.0f', title: 'Visa Lodgements', titleColor: C.orange, orient: 'left', grid: true },
        },
        tooltip: [{ field: 'FY' }, { field: 'Lodged', format: ',.0f', title: 'Applications' }, { field: 'Rate', title: 'Grant Rate %' }],
      },
    },
    {
      mark: { type: 'line', color: C.red, strokeWidth: 2.5, interpolate: 'monotone' },
      encoding: {
        y: {
          field: 'Rate', type: 'quantitative',
          scale: { domain: [50, 100] },
          axis: { title: 'Grant Rate (%)', titleColor: C.red, orient: 'right', grid: false },
        },
      },
    },
    {
      mark: { type: 'point', filled: true, color: C.red, size: 55 },
      encoding: {
        y: {
          field: 'Rate', type: 'quantitative',
          scale: { domain: [50, 100] },
          axis: null,
        },
      },
    },
  ],
  resolve: { scale: { y: 'independent' } },
}, embedOpts);

// ── CHART 11 ──────────────────────────────────────────────────────
const ratioData = sectorData.map(d => ({
  Sector: d.Sector, Year: d.Year,
  Ratio: Math.round((d.Commencements / d.Enrolments) * 1000) / 10,
}));
vegaEmbed('#chart11', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 290,
  data: { values: ratioData },
  mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone', point: { filled: true, size: 50 } },
  encoding: {
    x: { field: 'Year', type: 'ordinal', axis: { labelAngle: 0 } },
    y: { field: 'Ratio', type: 'quantitative', axis: { title: 'Commencements as % of Enrolments' } },
    color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS },
    tooltip: [{ field: 'Sector' }, { field: 'Year' }, { field: 'Ratio', title: '%', format: '.1f' }],
  },
}, embedOpts);

// ── CHART 12 — scatter with zoom ──────────────────────────────────
const uniqueNat = nationalityData.filter((d, i, a) => a.findIndex(x => x.Nationality === d.Nationality) === i);

vegaEmbed('#chart12', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container',
  height: 440,
  data: { values: uniqueNat },
  selection: {
    scatterZoom: {
      type: 'interval',
      bind: 'scales'
    }
  },
  mark: { type: 'circle', opacity: 0.85 },
  encoding: {
    x: {
      field: 'E2019',
      type: 'quantitative',
      title: '2019 Students',
      axis: { format: ',.0f' }
    },
    y: {
      field: 'N',
      type: 'quantitative',
      title: '2025 Students',
      axis: { format: ',.0f' }
    },
    size: {
      field: 'T',
      type: 'quantitative',
      scale: { range: [70, 750] },
      legend: null
    },
    color: {
      condition: { test: 'datum.N > datum.E2019', value: '#ec7a1c' },
      value: '#d14343'
    },
    tooltip: [
      { field: 'Nationality', type: 'nominal', title: 'Country' },
      { field: 'E2019', type: 'quantitative', title: '2019 Students', format: ',.0f' },
      { field: 'N', type: 'quantitative', title: '2025 Students', format: ',.0f' },
      { field: 'T', type: 'quantitative', title: 'All-time total', format: ',.0f' }
    ]
  }
}, embedOpts);

// ── CHART 13 ──────────────────────────────────────────────────────
const sectorList = [
  { full: 'Higher Education Sector',                  short: 'Higher Ed'         },
  { full: 'Vocational Education and Training Sector', short: 'VET'               },
  { full: 'Postgraduate Research Sector',             short: 'Postgrad Research'  },
  { full: 'Schools Sector',                           short: 'Schools'           },
  { full: 'Independent ELICOS Sector',                short: 'ELICOS'            },
];
const lollipopData = sectorList.map(s => {
  const r0 = visaRawData.find(d => d.Sector === s.full && d.FY === '2005-06')?.Rate ?? 0;
  const r1 = visaRawData.find(d => d.Sector === s.full && d.FY === '2024-25')?.Rate ?? 0;
  return {
    Sector: s.short,
    Rate2005: r0,
    Rate2025: r1,
    Change: Math.round((r1 - r0) * 10) / 10,
    Direction: r1 >= r0 ? 'Loosened / Stable' : 'Tightened',
    LabelX: Math.max(r0, r1) + 1.5,
  };
});
vegaEmbed('#chart13', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 300,
  data: { values: lollipopData },
  layer: [
    {
      mark: { type: 'rule', strokeWidth: 3 },
      encoding: {
        y:  { field: 'Sector', type: 'nominal', sort: { field: 'Change', order: 'ascending' }, axis: { title: null, labelFontSize: 11 } },
        x:  { field: 'Rate2005', type: 'quantitative', scale: { domain: [55, 104] }, axis: { title: 'Grant Rate (%)', format: '.0f' } },
        x2: { field: 'Rate2025' },
        color: {
          field: 'Direction', type: 'nominal',
          scale: { domain: ['Loosened / Stable','Tightened'], range: [C.orange, C.red] },
          legend: { orient: 'top', title: null, symbolSize: 120, labelColor: C.ink },
        },
      },
    },
    {
      mark: { type: 'point', filled: true, size: 90, opacity: 0.35 },
      encoding: {
        y: { field: 'Sector', type: 'nominal', sort: { field: 'Change', order: 'ascending' } },
        x: { field: 'Rate2005', type: 'quantitative', scale: { domain: [55, 104] } },
        color: { value: '#555' },
        tooltip: [{ field: 'Sector' }, { field: 'Rate2005', title: '2005–06', format: '.1f' }],
      },
    },
    {
      mark: { type: 'point', filled: true, size: 140 },
      encoding: {
        y: { field: 'Sector', type: 'nominal', sort: { field: 'Change', order: 'ascending' } },
        x: { field: 'Rate2025', type: 'quantitative', scale: { domain: [55, 104] } },
        color: {
          field: 'Direction', type: 'nominal',
          scale: { domain: ['Loosened / Stable','Tightened'], range: [C.orange, C.red] },
        },
        tooltip: [{ field: 'Sector' }, { field: 'Rate2025', title: '2024–25', format: '.1f' }, { field: 'Change', title: 'Change (pp)', format: '.1f' }],
      },
    },
    {
      mark: { type: 'text', align: 'left', dx: 10, fontSize: 11, fontWeight: 600 },
      encoding: {
        y: { field: 'Sector', type: 'nominal', sort: { field: 'Change', order: 'ascending' } },
        x: { field: 'LabelX', type: 'quantitative', scale: { domain: [55, 104] } },
        text: { field: 'Change', format: '+.1f' },
        color: {
          field: 'Direction', type: 'nominal',
          scale: { domain: ['Loosened / Stable','Tightened'], range: [C.orange, C.red] },
        },
      },
    },
  ],
}, embedOpts);

// ── BUMP CHART ────────────────────────────────────────────────────
const bumpCountries = ['China','India','Nepal','Vietnam','Colombia','Philippines','Pakistan','Bangladesh'];
const bumpYears = [2019,2020,2021,2022,2023,2024,2025];
const yearEnrolments = {
  2019: { China:165420, India:88640,  Nepal:33210, Vietnam:27650, Colombia:11840, Philippines:11920, Pakistan:8870,  Bangladesh:6980  },
  2020: { China:155000, India:92000,  Nepal:36000, Vietnam:28000, Colombia:13000, Philippines:10000, Pakistan:9500,  Bangladesh:7200  },
  2021: { China:130000, India:75000,  Nepal:28000, Vietnam:18000, Colombia:8000,  Philippines:6500,  Pakistan:7000,  Bangladesh:5000  },
  2022: { China:118000, India:95000,  Nepal:38000, Vietnam:24000, Colombia:14000, Philippines:12000, Pakistan:11000, Bangladesh:9000  },
  2023: { China:145000, India:120000, Nepal:55000, Vietnam:32000, Colombia:20000, Philippines:22000, Pakistan:16000, Bangladesh:15000 },
  2024: { China:175000, India:138000, Nepal:65000, Vietnam:34000, Colombia:23000, Philippines:28000, Pakistan:20000, Bangladesh:22000 },
  2025: { China:196957, India:145012, Nepal:71177, Vietnam:36840, Colombia:25813, Philippines:34825, Pakistan:23510, Bangladesh:27211 },
};
const bumpData = [];
bumpYears.forEach(year => {
  const entries = bumpCountries.map(c => ({ Country: c, Year: year, Students: yearEnrolments[year][c] }));
  entries.sort((a, b) => b.Students - a.Students);
  entries.forEach((e, i) => { bumpData.push({ Country: e.Country, Year: year, Rank: i + 1, Students: e.Students }); });
});
const bumpColors = [C.orange, C.orange2, C.red, C.teal, C.purple, C.blue, C.sage, '#888888'];
vegaEmbed('#chartBump', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 350,
  padding: { left: 16, right: 110, top: 12, bottom: 20 },
  data: { values: bumpData },
  layer: [
    {
      mark: { type: 'line', strokeWidth: 2.5, interpolate: 'monotone' },
      encoding: {
        x: {
          field: 'Year', type: 'ordinal',
          scale: { padding: 0.08 },
          axis: {
            title: 'Year',
            labelAngle: -45,
            labelFontSize: 11,
            labelPadding: 6,
            labelOverlap: false,
          },
        },
        y: {
          field: 'Rank', type: 'quantitative',
          scale: { domain: [8.6, 0.4] },
          axis: { title: 'Rank (1 = most students)', tickCount: 8, values: [1,2,3,4,5,6,7,8] },
        },
        color: { field: 'Country', type: 'nominal', scale: { domain: bumpCountries, range: bumpColors }, legend: null },
        tooltip: [{ field: 'Country' }, { field: 'Year' }, { field: 'Rank' }, { field: 'Students', format: ',.0f' }],
      },
    },
    {
      mark: { type: 'point', filled: true, size: 62 },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Rank', type: 'quantitative', scale: { domain: [8.6, 0.4] } },
        color: { field: 'Country', type: 'nominal', scale: { domain: bumpCountries, range: bumpColors }, legend: null },
      },
    },
    {
      mark: { type: 'text', align: 'left', dx: 16, fontSize: 10.5, fontWeight: 600 },
      data: { values: bumpData.filter(d => d.Year === 2025) },
      encoding: {
        y: { field: 'Rank', type: 'quantitative', scale: { domain: [8.6, 0.4] } },
        x: { field: 'Year', type: 'ordinal' },
        text: { field: 'Country' },
        color: { field: 'Country', type: 'nominal', scale: { domain: bumpCountries, range: bumpColors }, legend: null },
      },
    },
  ],
}, embedOpts);

// ── SLOPE CHART ───────────────────────────────────────────────────
const slopeData = sectorData
  .filter(d => d.Year === 2019 || d.Year === 2025)
  .map(d => ({ Sector: d.Sector, Year: String(d.Year), Enrolments: d.Enrolments }));
vegaEmbed('#chartSlope', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container', height: 320,
  padding: { left: 10, right: 80, top: 10, bottom: 10 },
  data: { values: slopeData },
  layer: [
    {
      mark: { type: 'line', strokeWidth: 2.5 },
      encoding: {
        x: { field: 'Year', type: 'ordinal', axis: { labelAngle: 0 }, scale: { padding: 0.2 } },
        y: { field: 'Enrolments', type: 'quantitative', axis: { format: ',.0f', title: 'Enrolments' } },
        color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS, legend: null },
        tooltip: [{ field: 'Sector' }, { field: 'Year' }, { field: 'Enrolments', format: ',.0f' }],
      },
    },
    {
      mark: { type: 'point', filled: true, size: 90 },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Enrolments', type: 'quantitative' },
        color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS, legend: null },
      },
    },
    {
      mark: { type: 'text', align: 'left', dx: 12, fontSize: 9.5, fontWeight: 600 },
      data: { values: slopeData.filter(d => d.Year === '2025') },
      encoding: {
        x: { field: 'Year', type: 'ordinal' },
        y: { field: 'Enrolments', type: 'quantitative' },
        text: { field: 'Sector' },
        color: { field: 'Sector', type: 'nominal', scale: SECTOR_COLORS, legend: null },
      },
    },
  ],
}, embedOpts);

// ── WORLD MAP (cumulative ↔ recent toggle) ─────────────────────────
const worldStudentData = [
  { id: '156', country: 'China',        students: 957774, recent: 196957 },
  { id: '356', country: 'India',        students: 601899, recent: 145012 },
  { id: '524', country: 'Nepal',        students: 216732, recent: 71177  },
  { id: '410', country: 'South Korea',  students: 156140, recent: 13991  },
  { id: '076', country: 'Brazil',       students: 153658, recent: 20567  },
  { id: '840', country: 'USA',          students: 147459, recent: 7923   },
  { id: '704', country: 'Vietnam',      students: 145214, recent: 36840  },
  { id: '458', country: 'Malaysia',     students: 135789, recent: 14808  },
  { id: '764', country: 'Thailand',     students: 123547, recent: 19472  },
  { id: '170', country: 'Colombia',     students: 122209, recent: 25813  },
  { id: '392', country: 'Japan',        students: 115151, recent: 11580  },
  { id: '360', country: 'Indonesia',    students: 115002, recent: 25409  },
  { id: '608', country: 'Philippines',  students: 110774, recent: 34825  },
  { id: '586', country: 'Pakistan',     students: 86734,  recent: 23510  },
  { id: '158', country: 'Taiwan',       students: 70288,  recent: 11747  },
  { id: '144', country: 'Sri Lanka',    students: 70140,  recent: 21247  },
  { id: '050', country: 'Bangladesh',   students: 67216,  recent: 27211  },
  { id: '276', country: 'Germany',      students: 67127,  recent: 4322   },
  { id: '826', country: 'UK',           students: 58000,  recent: 3800   },
  { id: '250', country: 'France',       students: 42000,  recent: 2900   },
  { id: '124', country: 'Canada',       students: 38000,  recent: 2400   },
  { id: '484', country: 'Mexico',       students: 32000,  recent: 4100   },
  { id: '152', country: 'Chile',        students: 28000,  recent: 3050   },
  { id: '032', country: 'Argentina',    students: 24000,  recent: 2350   },
  { id: '682', country: 'Saudi Arabia', students: 22000,  recent: 1840   },
  { id: '404', country: 'Kenya',        students: 18000,  recent: 1450   },
  { id: '566', country: 'Nigeria',      students: 16000,  recent: 2580   },
  { id: '364', country: 'Iran',         students: 14000,  recent: 980    },
  { id: '104', country: 'Myanmar',      students: 12000,  recent: 1820   },
  { id: '116', country: 'Cambodia',     students: 10000,  recent: 920    },
];

function renderWorldMap(view) {
  const valueField  = view === 'recent' ? 'recent' : 'students';
  const legendTitle = view === 'recent' ? 'Students (2025)' : 'Total Students (2005–2025)';
  const maxDomain   = view === 'recent' ? 200000 : 960000;

  vegaEmbed('#mapWorld', {
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    width: 'container', height: 430,
    background: '#18181b',
    projection: { type: 'naturalEarth1' },
    layer: [
      {
        data: {
          url: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
          format: { type: 'topojson', feature: 'countries' },
        },
        transform: [
          { lookup: 'id', from: { data: { values: worldStudentData }, key: 'id', fields: ['students','recent','country'] } },
        ],
        mark: { type: 'geoshape', stroke: '#0c0c0d', strokeWidth: 0.5 },
        encoding: {
          color: {
            condition: {
              test: `datum.${valueField} != null`,
              field: valueField, type: 'quantitative',
              scale: { scheme: 'oranges', domain: [0, maxDomain] },
              legend: {
                title: legendTitle, format: ',.0f', orient: 'bottom-right',
                gradientLength: 160, labelColor: C.ink, titleColor: C.ink,
              },
            },
            value: '#262629',
          },
          tooltip: [
            { field: 'country', title: 'Country' },
            { field: 'students', title: 'Total 2005–2025', format: ',.0f' },
            { field: 'recent',   title: '2025 only',        format: ',.0f' },
          ],
        },
      },
    ],
  }, { ...embedOpts, config: { ...embedOpts.config, background: '#18181b', view: { stroke: null } } });
}

renderWorldMap('cumulative');
document.querySelectorAll('#worldToggle .tog-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('#worldToggle .tog-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderWorldMap(this.dataset.view);
  });
});

// ── AUSTRALIA MAP ─────────────────────────────────────────────────
const ausStudentData = [
  { state: 'New South Wales',              abbrev: 'NSW', students: 198000 },
  { state: 'Victoria',                     abbrev: 'VIC', students: 215000 },
  { state: 'Queensland',                   abbrev: 'QLD', students: 121000 },
  { state: 'South Australia',              abbrev: 'SA',  students: 52000  },
  { state: 'Western Australia',            abbrev: 'WA',  students: 76000  },
  { state: 'Tasmania',                     abbrev: 'TAS', students: 8000   },
  { state: 'Northern Territory',           abbrev: 'NT',  students: 4000   },
  { state: 'Australian Capital Territory', abbrev: 'ACT', students: 23000  },
];

const ausLabelData = [
  { abbrev: 'WA',  lon: 121.5, lat: -27.0, students: 76000  },
  { abbrev: 'NT',  lon: 133.5, lat: -20.5, students: 4000   },
  { abbrev: 'SA',  lon: 135.0, lat: -30.5, students: 52000  },
  { abbrev: 'QLD', lon: 144.0, lat: -22.5, students: 121000 },
  { abbrev: 'NSW', lon: 147.0, lat: -32.5, students: 198000 },
  { abbrev: 'VIC', lon: 144.5, lat: -37.2, students: 215000 },
  { abbrev: 'TAS', lon: 146.5, lat: -42.5, students: 8000   },
  { abbrev: 'ACT', lon: 149.1, lat: -35.5, students: 23000  },
];

vegaEmbed('#mapAustralia', {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  width: 'container',
  height: 500,
  background: '#18181b',
  projection: { type: 'mercator' },
  layer: [
    {
      data: {
        url: 'Maps/australia-states.json',
        format: { type: 'json', property: 'features' },
      },
      transform: [
        {
          lookup: 'properties.name',
          from: {
            data: { values: ausStudentData },
            key: 'state',
            fields: ['students', 'abbrev'],
          },
        },
      ],
      mark: { type: 'geoshape', stroke: '#0c0c0d', strokeWidth: 2 },
      encoding: {
        color: {
          field: 'students',
          type: 'quantitative',
          scale: {
            domain: [4000, 215000],
            range: ['#5c2c10', '#8a4416', '#b8591a', '#ec7a1c', '#f7a64e'],
          },
          legend: {
            title: '2025 Students',
            format: ',.0f',
            orient: 'bottom-right',
            gradientLength: 160,
            labelColor: '#f4f4f0',
            titleColor: '#f4f4f0',
          },
        },
        tooltip: [
          { field: 'properties.name', title: 'State / Territory' },
          { field: 'students',        title: '2025 Students', format: ',.0f' },
        ],
      },
    },
    {
      data: { values: ausLabelData },
      mark: { type: 'text', fontSize: 13, fontWeight: 700, color: 'white' },
      encoding: {
        longitude: { field: 'lon', type: 'quantitative' },
        latitude:  { field: 'lat', type: 'quantitative' },
        text:      { field: 'abbrev' },
        tooltip: [
          { field: 'abbrev',   title: 'State'          },
          { field: 'students', title: '2025 Students', format: ',.0f' },
        ],
      },
    },
  ],
}, { ...embedOpts, config: { ...embedOpts.config, view: { stroke: null } } });