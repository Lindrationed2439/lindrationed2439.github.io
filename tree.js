// =========================
// FULL FAMILY DATABASE (ALL LINES)
// Roots: Rachel & Alyssa
// =========================

const persons = [
  // ROOTS
  {
    id: "rachel-westberg",
    name: "Rachel Westberg (1998)",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    children: [],
    spouses: [],
    birth: { date: "1998", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg (2000)",
    branch: "Westberg",
    parents: ["brent-westberg", "cheri-lakin"],
    children: [],
    spouses: [],
    birth: { date: "2000", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },

  // YOU & CHERI
  {
    id: "brent-westberg",
    name: "Brent Westberg (1968)",
    branch: "Westberg",
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: { date: "1968", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin (1967)",
    branch: "Lakin",
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    birth: { date: "1967", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },

  // WESTBERG LINE
  {
    id: "ron-westberg",
    name: "Ronald 'Ron' Westberg (1935– )",
    branch: "Westberg",
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["sandra-losie"],
    children: ["brent-westberg"],
    birth: { date: "1935", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "axel-westberg",
    name: "Axel Westberg (1909–1986)",
    branch: "Westberg",
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg"],
    birth: { date: "1909", place: "Minnesota" },
    death: { date: "1986", place: "" },
    notes: ""
  },
  {
    id: "oscar-westberg",
    name: "Oscar Westberg (Sweden → Minnesota)",
    branch: "Westberg",
    parents: ["unknown-westberg-1", "unknown-westberg-2"],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "Minnesota" },
    notes: ""
  },
  {
    id: "unknown-westberg-1",
    name: "Unknown Westberg (Sweden, mid‑1800s)",
    branch: "Westberg",
    parents: ["unknown-westberg-root"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "unknown-westberg-2",
    name: "Unknown Westberg (Sweden, mid‑1800s)",
    branch: "Westberg",
    parents: ["unknown-westberg-root"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "unknown-westberg-root",
    name: "Unknown Westberg (Earliest known Westberg ancestor)",
    branch: "Westberg",
    parents: [],
    spouses: [],
    children: ["unknown-westberg-1", "unknown-westberg-2"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },

  // HORNSTROM
  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom (1871, Sweden)",
    branch: "Hornstrom",
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"],
    birth: { date: "1871", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },

  // LaFEVER / RAYMOND
  {
    id: "myrtle-lafever",
    name: "Myrtle J. LaFever (1914–2002)",
    branch: "LaFever",
    parents: ["medos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg"],
    children: ["ron-westberg"],
    birth: { date: "1914", place: "Turner, MI" },
    death: { date: "2002", place: "St. Petersburg, FL" },
    notes: ""
  },
  {
    id: "medos-lafever",
    name: "Harmedos 'Medos' LaFever (1889–1964)",
    branch: "LaFever",
    parents: ["napoleon-lafever", "delia-lafever"],
    spouses: ["phoebe-raymond"],
    children: ["myrtle-lafever"],
    birth: { date: "1889", place: "" },
    death: { date: "1964", place: "" },
    notes: ""
  },
  {
    id: "napoleon-lafever",
    name: "Napoleon LaFever (1860)",
    branch: "LaFever",
    parents: [],
    spouses: ["delia-lafever"],
    children: ["medos-lafever"],
    birth: { date: "1860", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "delia-lafever",
    name: "Delia LaFever (1860)",
    branch: "LaFever",
    parents: [],
    spouses: ["napoleon-lafever"],
    children: ["medos-lafever"],
    birth: { date: "1860", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "phoebe-raymond",
    name: "Phoebe Raymond (1888–1952)",
    branch: "Raymond",
    parents: ["jerome-raymond", "louise-buckner"],
    spouses: ["medos-lafever"],
    children: ["myrtle-lafever"],
    birth: { date: "1888", place: "" },
    death: { date: "1952", place: "" },
    notes: ""
  },
  {
    id: "jerome-raymond",
    name: "Jerome Raymond (1835, Quebec)",
    branch: "Raymond",
    parents: [],
    spouses: ["louise-buckner"],
    children: ["phoebe-raymond"],
    birth: { date: "1835", place: "Quebec" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "louise-buckner",
    name: "Louise Buckner",
    branch: "Raymond",
    parents: [],
    spouses: ["jerome-raymond"],
    children: ["phoebe-raymond"],
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },

  // LOSIE / LOSEE / KOECK / DENTON / VANFLAESBECK
  {
    id: "sandra-losie",
    name: "Sandra Jean Losie (1940)",
    branch: "Losie",
    parents: ["james-elon-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["brent-westberg"],
    birth: { date: "1940", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "james-elon-losie",
    name: "James Elon Losie (1918–2002)",
    branch: "Losie",
    parents: ["earl-judson-losie", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: { date: "1918", place: "" },
    death: { date: "2002", place: "" },
    notes: ""
  },
  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie (1867–1938)",
    branch: "Losie",
    parents: ["george-leo-losie"],
    spouses: [],
    children: ["james-elon-losie"],
    birth: { date: "1867", place: "" },
    death: { date: "1938", place: "" },
    notes: ""
  },
  {
    id: "george-leo-losie",
    name: "George Leo Losie (1828–1880)",
    branch: "Losie",
    parents: ["john-wesley-losie"],
    spouses: [],
    children: ["earl-judson-losie"],
    birth: { date: "1828", place: "" },
    death: { date: "1880", place: "" },
    notes: ""
  },
  {
    id: "john-wesley-losie",
    name: "John Wesley Losie (1797–1865)",
    branch: "Losie",
    parents: ["lawrence-losie"],
    spouses: [],
    children: ["george-leo-losie"],
    birth: { date: "1797", place: "" },
    death: { date: "1865", place: "" },
    notes: ""
  },
  {
    id: "lawrence-losie",
    name: "Lawrence Losie (1765–1820)",
    branch: "Losie",
    parents: ["jan-losee"],
    spouses: [],
    children: ["john-wesley-losie"],
    birth: { date: "1765", place: "" },
    death: { date: "1820", place: "" },
    notes: ""
  },
  {
    id: "jan-losee",
    name: "Jan 'John L.' Losee (1738–1788)",
    branch: "Losee",
    parents: ["laurens-losee"],
    spouses: [],
    children: ["lawrence-losie"],
    birth: { date: "1738", place: "" },
    death: { date: "1788", place: "" },
    notes: ""
  },
  {
    id: "laurens-losee",
    name: "Laurens Losee (1705–1754)",
    branch: "Losee",
    parents: ["simon-losee"],
    spouses: [],
    children: ["jan-losee"],
    birth: { date: "1705", place: "" },
    death: {
