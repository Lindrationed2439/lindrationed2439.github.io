// =========================
// FULL FAMILY DATABASE (ALL LINES)
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

  // =========================
  // WESTBERG LINE
  // =========================

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
    parents: ["unknown-westberg-2a", "unknown-westberg-2b"],
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
    parents: ["unknown-westberg-2a", "unknown-westberg-2b"],
    spouses: [],
    children: ["oscar-westberg"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "unknown-westberg-2a",
    name: "Unknown Westberg (Sweden, early‑1800s)",
    branch: "Westberg",
    parents: ["unknown-westberg-root"],
    spouses: [],
    children: ["unknown-westberg-1", "unknown-westberg-2"],
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "unknown-westberg-2b",
    name: "Unknown West
