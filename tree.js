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
    death: { date: "1754", place: "" },
    notes: ""
  },
  {
    id: "simon-losee",
    name: "Simon Losee (1681–1763)",
    branch: "Losee",
    parents: ["cornelius-losee"],
    spouses: [],
    children: ["laurens-losee"],
    birth: { date: "1681", place: "" },
    death: { date: "1763", place: "" },
    notes: ""
  },
  {
    id: "cornelius-losee",
    name: "Cornelius Losee (1644–1678)",
    branch: "Losee",
    parents: ["laurens-koeck", "ceertje-denton"],
    spouses: [],
    children: ["simon-losee"],
    birth: { date: "1644", place: "" },
    death: { date: "1678", place: "" },
    notes: ""
  },
  {
    id: "laurens-koeck",
    name: "Laurens Corneliszen Koeck (1640–1702)",
    branch: "Koeck",
    parents: [],
    spouses: ["margrietje-vanflaesbeck"],
    children: ["cornelius-losee"],
    birth: { date: "1640", place: "Denmark" },
    death: { date: "1702", place: "New York" },
    notes: ""
  },
  {
    id: "margrietje-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck (1658–1702)",
    branch: "VanFlaesbeck",
    parents: [],
    spouses: ["laurens-koeck"],
    children: ["cornelius-losee"],
    birth: { date: "1658", place: "New Amsterdam" },
    death: { date: "1702", place: "" },
    notes: ""
  },
  {
    id: "ceertje-denton",
    name: "Ceertje Denton (1658–1678)",
    branch: "Denton",
    parents: [],
    spouses: [],
    children: ["cornelius-losee"],
    birth: { date: "1658", place: "Jamaica, NY" },
    death: { date: "1678", place: "" },
    notes: ""
  },

  // BEARANCE / WOODMAN / LAMBERTON
  {
    id: "mildred-bearance",
    name: "Mildred Ilene Bearance (1919–2018)",
    branch: "Bearance",
    parents: ["stanley-bearance", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    birth: { date: "1919", place: "" },
    death: { date: "2018", place: "" },
    notes: ""
  },
  {
    id: "stanley-bearance",
    name: "Stanley Bearance",
    branch: "Bearance",
    parents: [],
    spouses: ["hazel-woodman"],
    children: ["mildred-bearance"],
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "hazel-woodman",
    name: "Hazel Isabella Woodman",
    branch: "Woodman",
    parents: ["samuel-woodman", "ruth-lamberton"],
    spouses: ["stanley-bearance"],
    children: ["mildred-bearance", "james-elon-losie"],
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "samuel-woodman",
    name: "Samuel D. Woodman (1829–1913)",
    branch: "Woodman",
    parents: [],
    spouses: ["ruth-lamberton"],
    children: ["hazel-woodman"],
    birth: { date: "1829", place: "" },
    death: { date: "1913", place: "" },
    notes: ""
  },
  {
    id: "ruth-lamberton",
    name: "Ruth Elizabeth Lamberton (1836–1903)",
    branch: "Lamberton",
    parents: [],
    spouses: ["samuel-woodman"],
    children: ["hazel-woodman"],
    birth: { date: "1836", place: "" },
    death: { date: "1903", place: "" },
    notes: ""
  },

  // LAKIN / MEADE / SAWYER / BROWN / CHASE / INGALLS / DELANO
  {
    id: "roger-lakin",
    name: "Roger W. Lakin (1935–2024)",
    branch: "Lakin",
    parents: ["george-meade", "anna-oconnell"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: { date: "1935", place: "" },
    death: { date: "2024", place: "" },
    notes: ""
  },
  {
    id: "george-meade",
    name: "George Meade (1888–1954)",
    branch: "Meade",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["roger-lakin"],
    birth: { date: "1888", place: "" },
    death: { date: "1954", place: "" },
    notes: ""
  },
  {
    id: "anna-oconnell",
    name: "Anna O'Connell (1890–1962)",
    branch: "O'Connell",
    parents: [],
    spouses: [],
    children: ["roger-lakin"],
    birth: { date: "1890", place: "" },
    death: { date: "1962", place: "" },
    notes: ""
  },
  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer (1938–2016)",
    branch: "Sawyer",
    parents: ["robert-sawyer", "cleda-brown"],
    spouses: [],
    children: ["cheri-lakin"],
    birth: { date: "1938", place: "" },
    death: { date: "2016", place: "" },
    notes: ""
  },
  {
    id: "robert-sawyer",
    name: "Robert Russell Sawyer (1915–?)",
    branch: "Sawyer",
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: { date: "1915", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "samuel-sawyer",
    name: "Samuel Sawyer (1810–1870)",
    branch: "Sawyer",
    parents: ["jonathan-sawyer"],
    spouses: [],
    children: ["george-meade", "robert-sawyer"],
    birth: { date: "1810", place: "" },
    death: { date: "1870", place: "" },
    notes: ""
  },
  {
    id: "jonathan-sawyer",
    name: "Jonathan Sawyer (1770–1830)",
    branch: "Sawyer",
    parents: ["thomas-sawyer"],
    spouses: [],
    children: ["samuel-sawyer"],
    birth: { date: "1770", place: "" },
    death: { date: "1830", place: "" },
    notes: ""
  },
  {
    id: "thomas-sawyer",
    name: "Thomas Sawyer (1700–?)",
    branch: "Sawyer",
    parents: [],
    spouses: [],
    children: ["jonathan-sawyer"],
    birth: { date: "1700", place: "" },
    death: { date: "", place: "" },
    notes: ""
  },
  {
    id: "cleda-brown",
    name: "Cleda Lucille Brown (1916–1988)",
    branch: "Brown",
    parents: ["harry-brown", "edna-chase"],
    spouses: [],
    children: ["carol-sawyer"],
    birth: { date: "1916", place: "" },
    death: { date: "1988", place: "" },
    notes: ""
  },
  {
    id: "harry-brown",
    name: "Harry Leroy Brown (1885–1939)",
    branch: "Brown",
    parents: ["fred-brown"],
    spouses: [],
    children: ["cleda-brown"],
    birth: { date: "1885", place: "" },
    death: { date: "1939", place: "" },
    notes: ""
  },
  {
    id: "fred-brown",
    name: "Fred E. Brown (1861–1917)",
    branch: "Brown",
    parents: [],
    spouses: [],
    children: ["harry-brown"],
    birth: { date: "1861", place: "" },
    death: { date: "1917", place: "" },
    notes: ""
  },
  {
    id: "edna-chase",
    name: "Edna E. Chase (1889–1957)",
    branch: "Chase",
    parents: ["oscar-chase", "fannie-ingalls"],
    spouses: [],
    children: ["cleda-brown"],
    birth: { date: "1889", place: "" },
    death: { date: "1957", place: "" },
    notes: ""
  },
  {
    id: "oscar-chase",
    name: "Oscar Eugene Chase (1851–1921)",
    branch: "Chase",
    parents: [],
    spouses: [],
    children: ["edna-chase"],
    birth: { date: "1851", place: "" },
    death: { date: "1921", place: "" },
    notes: ""
  },
  {
    id: "fannie-ingalls",
    name: "Fannie E. Ingalls (1859–1939)",
    branch: "Ingalls",
    parents: ["samuel-ingalls", "margaret-delano"],
    spouses: [],
    children: ["edna-chase"],
    birth: { date: "1859", place: "" },
    death: { date: "1939", place: "" },
    notes: ""
  },
  {
    id: "samuel-ingalls",
    name: "Samuel Worthen Ingalls (1770–1841)",
    branch: "Ingalls",
    parents: ["edmund-ingalls"],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: { date: "1770", place: "" },
    death: { date: "1841", place: "" },
    notes: ""
  },
  {
    id: "edmund-ingalls",
    name: "Edmund Ingalls (1598–1648)",
    branch: "Ingalls",
    parents: [],
    spouses: [],
    children: ["samuel-ingalls"],
    birth: { date: "1598", place: "" },
    death: { date: "1648", place: "" },
    notes: ""
  },
  {
    id: "margaret-delano",
    name: "Margaret Delano (1773–1836)",
    branch: "Delano",
    parents: [],
    spouses: [],
    children: ["fannie-ingalls"],
    birth: { date: "1773", place: "" },
    death: { date: "1836", place: "" },
    notes: ""
  }
];

// =========================
// LOOKUP MAP
// =========================

const personMap = {};
persons.forEach(p => {
  personMap[p.id] = p;
});

// =========================
// CORE ANCESTRY BUILDERS
// =========================

function buildAncestorSubtree(rootId) {
  const person = personMap[rootId];
  if (!person) return null;

  const node = {
    id: person.id,
    name: person.name,
    branch: person.branch,
    children: []
  };

  if (person.parents && person.parents.length > 0) {
    node.children = person.parents
      .map(pid => buildAncestorSubtree(pid))
      .filter(child => child !== null);
  }

  return node;
}

function buildTreeData() {
  const roots = ["rachel-westberg", "alyssa-westberg"];
  return {
    id: "root",
    name: "Rachel & Alyssa Westberg",
    branch: "",
    children: roots
      .map(id => buildAncestorSubtree(id))
      .filter(node => node !== null)
  };
}

// =========================
// TREE RENDERING
// =========================

function createNode(personNode) {
  const node = document.createElement("div");
  node.className = "node";
  node.dataset.personId = personNode.id;

  const titleSpan = document.createElement("span");
  titleSpan.textContent = personNode.name;
  node.appendChild(titleSpan);

  if (personNode.branch) {
    const branchSpan = document.createElement("span");
    branchSpan.className = "node-branch";
    branchSpan.textContent = ` (${personNode.branch})`;
    node.appendChild(branchSpan);
  }

  if (personNode.id && personNode.id !== "root") {
    node.addEventListener("click", (e) => {
      e.stopPropagation();
      openPersonModal(personNode.id);
    });
  }

  if (personNode.children && personNode.children.length > 0) {
    const childrenDiv = document.createElement("div");
    childrenDiv.className = "children hidden";

    personNode.children.forEach(child => {
      childrenDiv.appendChild(createNode(child));
    });

    node.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      childrenDiv.classList.toggle("hidden");
    });

    node.appendChild(childrenDiv);
  }

  return node;
}

function renderTree() {
  const treeContainer = document.getElementById("tree");
  if (!treeContainer) return;

  treeContainer.innerHTML = "";
  const treeData = buildTreeData();
  treeContainer.appendChild(createNode(treeData));
}

function expandAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.remove("hidden"));
}

function collapseAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.add("hidden"));
}

// =========================
// PERSON MODAL
// =========================

function openPersonModal(personId) {
  const person = personMap[personId];
  if (!person) return;

  document.getElementById("modalName").textContent = person.name;
  document.getElementById("modalBranch").textContent = person.branch ? `Branch: ${person.branch}` : "";

  const birthText = person.birth.date || person.birth.place
    ? `Born: ${person.birth.date || ""}${person.birth.place ? " in " + person.birth.place : ""}`
    : "Born: (unknown)";
  const deathText = person.death.date || person.death.place
    ? `Died: ${person.death.date || ""}${person.death.place ? " in " + person.death.place : ""}`
    : "Died: (unknown)";

  document.getElementById("modalBirth").textContent = birthText;
  document.getElementById("modalDeath").textContent = deathText;

  const parentsNames = (person.parents || [])
    .map(pid => personMap[pid]?.name || pid)
    .join(", ");
  document.getElementById("modalParents").textContent =
    parentsNames ? `Parents: ${parentsNames}` : "Parents: (unknown)";

  const spousesNames = (person.spouses || [])
    .map(pid => personMap[pid]?.name || pid)
    .join(", ");
  document.getElementById("modalSpouses").textContent =
    spousesNames ? `Spouses: ${spousesNames}` : "Spouses: (none listed)";

  const childrenNames = (person.children || [])
    .map(pid => personMap[pid]?.name || pid)
    .join(", ");
  document.getElementById("modalChildren").textContent =
    childrenNames ? `Children: ${childrenNames}` : "Children: (none listed)";

  document.getElementById("modalNotes").textContent =
    person.notes || "(no notes yet)";

  document.getElementById("personModal").classList.remove("hidden");
}

function closePersonModal() {
  document.getElementById("personModal").classList.add("hidden");
}

// =========================
// ANCESTRY UTILITIES
// =========================

function getAllAncestors(rootId) {
  const visited = new Set();
  const list = [];

  function walk(id) {
    if (!id || visited.has(id)) return;
    visited.add(id);

    const p = personMap[id];
    if (!p) return;

    list.push(p);
    (p.parents || []).forEach(walk);
  }

  walk(rootId);
  return list;
}

function getBranchAncestors(rootId, branch) {
  return getAllAncestors(rootId).filter(p => p.branch === branch);
}

function getGenerations(rootId) {
  const gens = {};

  function walk(id, depth) {
    const p = personMap[id];
    if (!p) return;

    if (!gens[depth]) gens[depth] = [];
    gens[depth].push(p);

    (p.parents || []).forEach(pid => walk(pid, depth + 1));
  }

  walk(rootId, 1);
  return gens;
}

function getSurname(name) {
  return name.split(" ").slice(-1)[0].replace(/\(.+\)/, "");
}

function getSurnameGroups(rootId) {
  const ancestors = getAllAncestors(rootId);
  const groups = {};

  ancestors.forEach(p => {
    const surname = getSurname(p.name);
    if (!groups[surname]) groups[surname] = [];
    groups[surname].push(p);
  });

  return groups;
}

function getDescendants(rootId) {
  const visited = new Set();
  const list = [];

  function walk(id) {
    if (!id || visited.has(id)) return;
    visited.add(id);

    const p = personMap[id];
    if (!p) return;

    list.push(p);
    (p.children || []).forEach(walk);
  }

  walk(rootId);
  return list;
}

// =========================
// DISPLAY MODES
// =========================

function renderAncestorList() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const ancestors = [
    ...getAllAncestors("rachel-westberg"),
    ...getAllAncestors("alyssa-westberg")
  ];

  ancestors.forEach(p => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = `${p.name} (${p.branch})`;
    div.onclick = () => openPersonModal(p.id);
    treeContainer.appendChild(div);
  });
}

function renderBranchOnly(branch) {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  if (!branch) return;

  const ancestors = [
    ...getBranchAncestors("rachel-westberg", branch),
    ...getBranchAncestors("alyssa-westberg", branch)
  ];

  ancestors.forEach(p => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = `${p.name} (${p.branch})`;
    div.onclick = () => openPersonModal(p.id);
    treeContainer.appendChild(div);
  });
}

function renderGenerationalView() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const gens = getGenerations("rachel-westberg");

  Object.keys(gens).forEach(level => {
    const header = document.createElement("h3");
    header.textContent = `Generation ${level}`;
    treeContainer.appendChild(header);

    gens[level].forEach(p => {
      const div = document.createElement("div");
      div.className = "list-item";
      div.textContent = `${p.name} (${p.branch})`;
      div.onclick = () => openPersonModal(p.id);
      treeContainer.appendChild(div);
    });
  });
}

function renderSurnameView() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const groups = getSurnameGroups("rachel-westberg");

  Object.keys(groups).sort().forEach(surname => {
    const header = document.createElement("h3");
    header.textContent = surname;
    treeContainer.appendChild(header);

    groups[surname].forEach(p => {
      const div = document.createElement("div");
      div.className = "list-item";
      div.textContent = p.name;
      div.onclick = () => openPersonModal(p.id);
      treeContainer.appendChild(div);
    });
  });
}

function renderDescendantView(rootId) {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const descendants = getDescendants(rootId);

  descendants.forEach(p => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.textContent = `${p.name} (${p.branch})`;
    div.onclick = () => openPersonModal(p.id);
    treeContainer.appendChild(div);
  });
}

function renderPaternalMaternalSplit() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "split-wrapper";

  const paternalDiv = document.createElement("div");
  paternalDiv.className = "split-column";
  const paternalHeader = document.createElement("h3");
  paternalHeader.textContent = "Paternal (Brent)";
  paternalDiv.appendChild(paternalHeader);

  const paternalTree = buildAncestorSubtree("brent-westberg");
  paternalDiv.appendChild(createNode(paternalTree));

  const maternalDiv = document.createElement("div");
  maternalDiv.className = "split-column";
  const maternalHeader = document.createElement("h3");
  maternalHeader.textContent = "Maternal (Cheri)";
  maternalDiv.appendChild(maternalHeader);

  const maternalTree = buildAncestorSubtree("cheri-lakin");
  maternalDiv.appendChild(createNode(maternalTree));

  wrapper.appendChild(paternalDiv);
  wrapper.appendChild(maternalDiv);
  treeContainer.appendChild(wrapper);
}

function renderFanChart() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const gens = getGenerations("rachel-westberg");
  const fan = document.createElement("div");
  fan.className = "fan-chart";

  Object.keys(gens).forEach(level => {
    const ring = document.createElement("div");
    ring.className = "fan-ring";
    ring.dataset.level = level;

    gens[level].forEach(p => {
      const item = document.createElement("div");
      item.className = "fan-item";
      item.textContent = p.name;
      item.onclick = () => openPersonModal(p.id);
      ring.appendChild(item);
    });

    fan.appendChild(ring);
  });

  treeContainer.appendChild(fan);
}

function renderTimeline() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const ancestors = getAllAncestors("rachel-westberg").concat(
    getAllAncestors("alyssa-westberg")
  );

  const withYears = ancestors
    .map(p => {
      const year = parseInt(p.birth.date, 10);
      return { person: p, year: isNaN(year) ? null : year };
    })
    .filter(x => x.year !== null)
    .sort((a, b) => a.year - b.year);

  withYears.forEach(entry => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.textContent = `${entry.year} — ${entry.person.name} (${entry.person.branch})`;
    div.onclick = () => openPersonModal(entry.person.id);
    treeContainer.appendChild(div);
  });
}

function renderPrintableReport() {
  const ancestors = [
    ...getAllAncestors("rachel-westberg"),
    ...getAllAncestors("alyssa-westberg")
  ];

  let report = "Ancestry Report — Rachel & Alyssa Westberg\n\n";

  ancestors.forEach(p => {
    report += `${p.name} [${p.branch}]\n`;
    report += `  Born: ${p.birth.date || "?"}${p.birth.place ? " in " + p.birth.place : ""}\n`;
    report += `  Died: ${p.death.date || "?"}${p.death.place ? " in " + p.death.place : ""}\n`;

    const parentsNames = (p.parents || [])
      .map(pid => personMap[pid]?.name || pid)
      .join(", ");
    report += `  Parents: ${parentsNames || "(unknown)"}\n\n`;
  });

  const blob = new Blob([report], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ancestry_report.txt";
  a.click();
  URL.revokeObjectURL(url);
}

// =========================
// SEARCH & FILTER
// =========================

function renderSearchResults(query) {
  const resultsDiv = document.getElementById("searchResults");
  if (!resultsDiv) return;

  resultsDiv.innerHTML = "";
  if (!query) return;

  const q = query.toLowerCase();
  const matches = persons.filter(p => p.name.toLowerCase().includes(q));

  matches.slice(0, 50).forEach(p => {
    const div = document.createElement("div");
    div.className = "search-result";
    div.textContent = `${p.name} (${p.branch})`;
    div.addEventListener("click", () => openPersonModal(p.id));
    resultsDiv.appendChild(div);
  });
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("searchInput");
  const branchFilterSelect = document.getElementById("branchFilter");
  const branchOnlySelect = document.getElementById("branchOnlyView");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value);
    });
  }

  if (branchFilterSelect) {
    branchFilterSelect.addEventListener("change", (e) => {
      const branch = e.target.value || "";
      if (!branch) {
        renderTree();
        return;
      }

      const treeContainer = document.getElementById("tree");
      treeContainer.innerHTML = "";

      const roots = ["rachel-westberg", "alyssa-westberg"];
      const rootNode = {
        id: "root",
        name: `Branch: ${branch}`,
        branch: branch,
        children: []
      };

      roots.forEach(rid => {
        const sub = buildAncestorSubtree(rid);
        function filterNode(node) {
          if (!node) return null;
          const keep = node.branch === branch;
          const children = (node.children || [])
            .map(filterNode)
            .filter(c => c !== null);
          if (keep || children.length > 0) {
            return { ...node, children };
          }
          return null;
        }
        const filtered = filterNode(sub);
        if (filtered) rootNode.children.push(filtered);
      });

      treeContainer.appendChild(createNode(rootNode));
    });
  }

  if (branchOnlySelect) {
    branchOnlySelect.addEventListener("change", (e) => {
      const branch = e.target.value;
      renderBranchOnly(branch);
    });
  }
}

// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  renderTree();

  const expandBtn = document.getElementById("expandAll");
  const collapseBtn = document.getElementById("collapseAll");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("personModal");

  if (expandBtn) expandBtn.onclick = expandAll;
  if (collapseBtn) collapseBtn.onclick = collapseAll;

  if (closeModalBtn) closeModalBtn.onclick = closePersonModal;
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "personModal") closePersonModal();
    });
  }

  setupSearchAndFilters();

  // Extra display buttons (wire these to buttons you add in HTML)
  const ancestorListBtn = document.getElementById("ancestorList");
  const generationViewBtn = document.getElementById("generationView");
  const surnameViewBtn = document.getElementById("surnameView");
  const descendantViewBtn = document.getElementById("descendantView");
  const splitViewBtn = document.getElementById("splitView");
  const fanChartBtn = document.getElementById("fanChartView");
  const timelineBtn = document.getElementById("timelineView");
  const printableBtn = document.getElementById("printableReport");

  if (ancestorListBtn) ancestorListBtn.onclick = renderAncestorList;
  if (generationViewBtn) generationViewBtn.onclick = renderGenerationalView;
  if (surnameViewBtn) surnameViewBtn.onclick = renderSurnameView;
  if (descendantViewBtn) descendantViewBtn.onclick = () => renderDescendantView("brent-westberg");
  if (splitViewBtn) splitViewBtn.onclick = renderPaternalMaternalSplit;
  if (fanChartBtn) fanChartBtn.onclick = renderFanChart;
  if (timelineBtn) timelineBtn.onclick = renderTimeline;
  if (printableBtn) printableBtn.onclick = renderPrintableReport;
});
