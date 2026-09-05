// =========================
// FAMILY BRANCH DEFINITIONS
// =========================

// WESTBERG BRANCH
const WESTBERG_BRANCH = {
  name: "Ronald 'Ron' Westberg (1935) – Westberg",// =========================
// PERSON DATABASE (FULL MODEL)
// =========================

const persons = [
  {
    id: "rachel-westberg",
    name: "Rachel Westberg",
    branch: "Westberg",
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    photos: [],
    notes: ""
  },
  {
    id: "alyssa-westberg",
    name: "Alyssa Westberg",
    branch: "Westberg",
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    parents: ["brent-westberg", "cheri-lakin"],
    spouses: [],
    children: [],
    photos: [],
    notes: ""
  },

  // Brent & Cheri
  {
    id: "brent-westberg",
    name: "Brent Westberg (1968)",
    branch: "Westberg",
    birth: { date: "1968", place: "" },
    death: { date: "", place: "" },
    parents: ["ron-westberg", "sandra-losie"],
    spouses: ["cheri-lakin"],
    children: ["rachel-westberg", "alyssa-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "cheri-lakin",
    name: "Cheri Ann Lakin (1967)",
    branch: "Lakin",
    birth: { date: "1967", place: "" },
    death: { date: "", place: "" },
    parents: ["roger-lakin", "carol-sawyer"],
    spouses: ["brent-westberg"],
    children: ["rachel-westberg", "alyssa-westberg"],
    photos: [],
    notes: ""
  },

  // Westberg line
  {
    id: "ron-westberg",
    name: "Ronald 'Ron' Westberg (1935)",
    branch: "Westberg",
    birth: { date: "1935", place: "" },
    death: { date: "", place: "" },
    parents: ["axel-westberg", "myrtle-lafever"],
    spouses: ["mildred-bearance"],
    children: ["brent-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "axel-westberg",
    name: "Axel Westberg (1909–1986)",
    branch: "Westberg",
    birth: { date: "1909", place: "" },
    death: { date: "1986", place: "" },
    parents: ["oscar-westberg", "martha-hornstrom"],
    spouses: ["myrtle-lafever"],
    children: ["ron-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "oscar-westberg",
    name: "Oscar Westberg – Sweden → Minnesota",
    branch: "Westberg",
    birth: { date: "", place: "Sweden" },
    death: { date: "", place: "Minnesota" },
    parents: [],
    spouses: ["martha-hornstrom"],
    children: ["axel-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "martha-hornstrom",
    name: "Martha Selina Hornstrom (1871, Sweden)",
    branch: "Hornstrom",
    birth: { date: "1871", place: "Sweden" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["oscar-westberg"],
    children: ["axel-westberg"],
    photos: [],
    notes: ""
  },

  // LaFever / Raymond
  {
    id: "myrtle-lafever",
    name: "Myrtle J. LaFever (1914–2002)",
    branch: "LaFever",
    birth: { date: "1914", place: "Turner, Michigan" },
    death: { date: "2002", place: "St. Petersburg, Florida" },
    parents: ["medos-lafever", "phoebe-raymond"],
    spouses: ["axel-westberg", "mr-bresler"],
    children: ["ron-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "medos-lafever",
    name: "Harmedos 'Medos' LaFever (1889–1964)",
    branch: "LaFever",
    birth: { date: "1889", place: "" },
    death: { date: "1964", place: "" },
    parents: ["napoleon-lafever", "delia-lafever"],
    spouses: ["phoebe-raymond"],
    children: ["myrtle-lafever"],
    photos: [],
    notes: ""
  },
  {
    id: "napoleon-lafever",
    name: "Napoleon LaFever (1860)",
    branch: "LaFever",
    birth: { date: "1860", place: "" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["delia-lafever"],
    children: ["medos-lafever"],
    photos: [],
    notes: ""
  },
  {
    id: "delia-lafever",
    name: "Delia LaFever (1860)",
    branch: "LaFever",
    birth: { date: "1860", place: "" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["napoleon-lafever"],
    children: ["medos-lafever"],
    photos: [],
    notes: ""
  },
  {
    id: "phoebe-raymond",
    name: "Phoebe Raymond (1888–1952)",
    branch: "Raymond",
    birth: { date: "1888", place: "" },
    death: { date: "1952", place: "" },
    parents: ["jerome-raymond", "louise-buckner"],
    spouses: ["medos-lafever"],
    children: ["myrtle-lafever"],
    photos: [],
    notes: ""
  },
  {
    id: "jerome-raymond",
    name: "Jerome Raymond (1835, Quebec)",
    branch: "Raymond",
    birth: { date: "1835", place: "Quebec" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["louise-buckner"],
    children: ["phoebe-raymond"],
    photos: [],
    notes: ""
  },
  {
    id: "louise-buckner",
    name: "Louise Buckner",
    branch: "Raymond",
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["jerome-raymond"],
    children: ["phoebe-raymond"],
    photos: [],
    notes: ""
  },

  // Losie / Koeck / Denton
  {
    id: "sandra-losie",
    name: "Sandra Jean Losie (1940)",
    branch: "Losie",
    birth: { date: "1940", place: "" },
    death: { date: "", place: "" },
    parents: ["james-elon-losie", "mildred-bearance"],
    spouses: ["ron-westberg"],
    children: ["brent-westberg"],
    photos: [],
    notes: ""
  },
  {
    id: "james-elon-losie",
    name: "James Elon Losie (1918–2002)",
    branch: "Losie",
    birth: { date: "1918", place: "" },
    death: { date: "2002", place: "" },
    parents: ["earl-judson-losie", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "earl-judson-losie",
    name: "Earl Judson Losie (1867–1938)",
    branch: "Losie",
    birth: { date: "1867", place: "" },
    death: { date: "1938", place: "" },
    parents: ["george-leo-losie"],
    spouses: [],
    children: ["james-elon-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "george-leo-losie",
    name: "George Leo Losie (1828–1880)",
    branch: "Losie",
    birth: { date: "1828", place: "" },
    death: { date: "1880", place: "" },
    parents: ["john-wesley-losie"],
    spouses: [],
    children: ["earl-judson-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "john-wesley-losie",
    name: "John Wesley Losie (1797–1865)",
    branch: "Losie",
    birth: { date: "1797", place: "" },
    death: { date: "1865", place: "" },
    parents: ["lawrence-losie"],
    spouses: [],
    children: ["george-leo-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "lawrence-losie",
    name: "Lawrence Losie (1765–1820)",
    branch: "Losie",
    birth: { date: "1765", place: "" },
    death: { date: "1820", place: "" },
    parents: ["jan-losee"],
    spouses: [],
    children: ["john-wesley-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "jan-losee",
    name: "Jan 'John L.' Losee (1738–1788)",
    branch: "Losee",
    birth: { date: "1738", place: "" },
    death: { date: "1788", place: "" },
    parents: ["laurens-losee"],
    spouses: [],
    children: ["lawrence-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "laurens-losee",
    name: "Laurens Losee (1705–1754)",
    branch: "Losee",
    birth: { date: "1705", place: "" },
    death: { date: "1754", place: "" },
    parents: ["simon-losee"],
    spouses: [],
    children: ["jan-losee"],
    photos: [],
    notes: ""
  },
  {
    id: "simon-losee",
    name: "Simon Losee (1681–1763)",
    branch: "Losee",
    birth: { date: "1681", place: "" },
    death: { date: "1763", place: "" },
    parents: ["cornelius-losee"],
    spouses: [],
    children: ["laurens-losee"],
    photos: [],
    notes: ""
  },
  {
    id: "cornelius-losee",
    name: "Cornelius Losee (1644–1678)",
    branch: "Losee",
    birth: { date: "1644", place: "" },
    death: { date: "1678", place: "" },
    parents: ["laurens-koeck", "ceertje-denton"],
    spouses: [],
    children: ["simon-losee"],
    photos: [],
    notes: ""
  },
  {
    id: "laurens-koeck",
    name: "Laurens Corneliszen Koeck (1640–1702)",
    branch: "Koeck",
    birth: { date: "1640", place: "Denmark" },
    death: { date: "1702", place: "New York" },
    parents: [],
    spouses: ["margrietje-vanflaesbeck"],
    children: ["cornelius-losee"],
    photos: [],
    notes: ""
  },
  {
    id: "margrietje-vanflaesbeck",
    name: "Margrietje Barents VanFlaesbeck (1658–1702)",
    branch: "VanFlaesbeck",
    birth: { date: "1658", place: "New Amsterdam" },
    death: { date: "1702", place: "" },
    parents: [],
    spouses: ["laurens-koeck"],
    children: ["cornelius-losee"],
    photos: [],
    notes: ""
  },
  {
    id: "ceertje-denton",
    name: "Ceertje Denton (1658–1678)",
    branch: "Denton",
    birth: { date: "1658", place: "Jamaica, NY" },
    death: { date: "1678", place: "" },
    parents: [],
    spouses: [],
    children: ["cornelius-losee"],
    photos: [],
    notes: ""
  },

  // Bearance / Woodman
  {
    id: "mildred-bearance",
    name: "Mildred Ilene Bearance (1919–2018)",
    branch: "Bearance",
    birth: { date: "1919", place: "" },
    death: { date: "2018", place: "" },
    parents: ["stanley-bearance", "hazel-woodman"],
    spouses: [],
    children: ["sandra-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "stanley-bearance",
    name: "Stanley Bearance",
    branch: "Bearance",
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    parents: [],
    spouses: ["hazel-woodman"],
    children: ["mildred-bearance"],
    photos: [],
    notes: ""
  },
  {
    id: "hazel-woodman",
    name: "Hazel Isabella Woodman",
    branch: "Woodman",
    birth: { date: "", place: "" },
    death: { date: "", place: "" },
    parents: ["samuel-woodman", "ruth-lamberton"],
    spouses: ["stanley-bearance"],
    children: ["mildred-bearance", "james-elon-losie"],
    photos: [],
    notes: ""
  },
  {
    id: "samuel-woodman",
    name: "Samuel D. Woodman (1829–1913)",
    branch: "Woodman",
    birth: { date: "1829", place: "" },
    death: { date: "1913", place: "" },
    parents: [],
    spouses: ["ruth-lamberton"],
    children: ["hazel-woodman"],
    photos: [],
    notes: ""
  },
  {
    id: "ruth-lamberton",
    name: "Ruth Elizabeth Lamberton (1836–1903)",
    branch: "Lamberton",
    birth: { date: "1836", place: "" },
    death: { date: "1903", place: "" },
    parents: [],
    spouses: ["samuel-woodman"],
    children: ["hazel-woodman"],
    photos: [],
    notes: ""
  },

  // Lakin / Sawyer / Brown / Chase / Ingalls / Delano
  {
    id: "roger-lakin",
    name: "Roger W. Lakin (1935–2024)",
    branch: "Lakin",
    birth: { date: "1935", place: "" },
    death: { date: "2024", place: "" },
    parents: ["george-meade", "anna-oconnell"],
    spouses: [],
    children: ["cheri-lakin"],
    photos: [],
    notes: ""
  },
  {
    id: "george-meade",
    name: "George Meade (1888–1954)",
    branch: "Meade",
    birth: { date: "1888", place: "" },
    death: { date: "1954", place: "" },
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["roger-lakin"],
    photos: [],
    notes: ""
  },
  {
    id: "anna-oconnell",
    name: "Anna O'Connell (1890–1962)",
    branch: "O'Connell",
    birth: { date: "1890", place: "" },
    death: { date: "1962", place: "" },
    parents: [],
    spouses: [],
    children: ["roger-lakin"],
    photos: [],
    notes: ""
  },
  {
    id: "carol-sawyer",
    name: "Carol Ann Sawyer (1938–2016)",
    branch: "Sawyer",
    birth: { date: "1938", place: "" },
    death: { date: "2016", place: "" },
    parents: ["robert-sawyer", "cleda-brown"],
    spouses: [],
    children: ["cheri-lakin"],
    photos: [],
    notes: ""
  },
  {
    id: "robert-sawyer",
    name: "Robert Russell Sawyer (1915–?)",
    branch: "Sawyer",
    birth: { date: "1915", place: "" },
    death: { date: "", place: "" },
    parents: ["samuel-sawyer"],
    spouses: [],
    children: ["carol-sawyer"],
    photos: [],
    notes: ""
  },
  {
    id: "samuel-sawyer",
    name: "Samuel Sawyer (1810–1870)",
    branch: "Sawyer",
    birth: { date: "1810", place: "" },
    death: { date: "1870", place: "" },
    parents: ["jonathan-sawyer"],
    spouses: [],
    children: ["george-meade", "robert-sawyer"],
    photos: [],
    notes: ""
  },
  {
    id: "jonathan-sawyer",
    name: "Jonathan Sawyer (1770–1830)",
    branch: "Sawyer",
    birth: { date: "1770", place: "" },
    death: { date: "1830", place: "" },
    parents: ["thomas-sawyer"],
    spouses: [],
    children: ["samuel-sawyer"],
    photos: [],
    notes: ""
  },
  {
    id: "thomas-sawyer",
    name: "Thomas Sawyer (1700–?)",
    branch: "Sawyer",
    birth: { date: "1700", place: "" },
    death: { date: "", place: "" },
    parents: [],
    spouses: [],
    children: ["jonathan-sawyer"],
    photos: [],
    notes: ""
  },
  {
    id: "cleda-brown",
    name: "Cleda Lucille Brown (1916–1988)",
    branch: "Brown",
    birth: { date: "1916", place: "" },
    death: { date: "1988", place: "" },
    parents: ["harry-brown", "edna-chase"],
    spouses: [],
    children: ["carol-sawyer"],
    photos: [],
    notes: ""
  },
  {
    id: "harry-brown",
    name: "Harry Leroy Brown (1885–1939)",
    branch: "Brown",
    birth: { date: "1885", place: "" },
    death: { date: "1939", place: "" },
    parents: ["fred-brown"],
    spouses: [],
    children: ["cleda-brown"],
    photos: [],
    notes: ""
  },
  {
    id: "fred-brown",
    name: "Fred E. Brown (1861–1917)",
    branch: "Brown",
    birth: { date: "1861", place: "" },
    death: { date: "1917", place: "" },
    parents: [],
    spouses: [],
    children: ["harry-brown"],
    photos: [],
    notes: ""
  },
  {
    id: "edna-chase",
    name: "Edna E. Chase (1889–1957)",
    branch: "Chase",
    birth: { date: "1889", place: "" },
    death: { date: "1957", place: "" },
    parents: ["oscar-chase", "fannie-ingalls"],
    spouses: [],
    children: ["cleda-brown"],
    photos: [],
    notes: ""
  },
  {
    id: "oscar-chase",
    name: "Oscar Eugene Chase (1851–1921)",
    branch: "Chase",
    birth: { date: "1851", place: "" },
    death: { date: "1921", place: "" },
    parents: [],
    spouses: [],
    children: ["edna-chase"],
    photos: [],
    notes: ""
  },
  {
    id: "fannie-ingalls",
    name: "Fannie E. Ingalls (1859–1939)",
    branch: "Ingalls",
    birth: { date: "1859", place: "" },
    death: { date: "1939", place: "" },
    parents: ["samuel-ingalls", "margaret-delano"],
    spouses: [],
    children: ["edna-chase"],
    photos: [],
    notes: ""
  },
  {
    id: "samuel-ingalls",
    name: "Samuel Worthen Ingalls (1770–1841)",
    branch: "Ingalls",
    birth: { date: "1770", place: "" },
    death: { date: "1841", place: "" },
    parents: ["edmund-ingalls"],
    spouses: [],
    children: ["fannie-ingalls"],
    photos: [],
    notes: ""
  },
  {
    id: "edmund-ingalls",
    name: "Edmund Ingalls (1598–1648)",
    branch: "Ingalls",
    birth: { date: "1598", place: "" },
    death: { date: "1648", place: "" },
    parents: [],
    spouses: [],
    children: ["samuel-ingalls"],
    photos: [],
    notes: ""
  },
  {
    id: "margaret-delano",
    name: "Margaret Delano (1773–1836)",
    branch: "Delano",
    birth: { date: "1773", place: "" },
    death: { date: "1836", place: "" },
    parents: [],
    spouses: [],
    children: ["fannie-ingalls"],
    photos: [],
    notes: ""
  }
];

// Map for quick lookup
const personMap = {};
persons.forEach(p => {
  personMap[p.id] = p;
});

// =========================
// AUTO-GENERATED TREE (ANCESTORS UPWARD)
// =========================

function buildAncestorSubtree(rootId, branchFilter = "") {
  const person = personMap[rootId];
  if (!person) return null;

  if (branchFilter && person.branch !== branchFilter) {
    // Still build ancestors, but mark this node as filtered
    // We’ll hide non-matching nodes later via CSS/logic if needed
  }

  const node = {
    id: person.id,
    name: person.name,
    branch: person.branch,
    children: []
  };

  if (person.parents && person.parents.length > 0) {
    node.children = person.parents
      .map(pid => buildAncestorSubtree(pid, branchFilter))
      .filter(child => child !== null);
  }

  return node;
}

function buildTreeData(branchFilter = "") {
  const roots = ["rachel-westberg", "alyssa-westberg"];
  return {
    name: "Rachel & Alyssa Westberg",
    children: roots
      .map(id => buildAncestorSubtree(id, branchFilter))
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
    branchSpan.textContent = `(${personNode.branch})`;
    node.appendChild(branchSpan);
  }

  node.addEventListener("click", (e) => {
    e.stopPropagation();
    openPersonModal(personNode.id);
  });

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

function renderTree(branchFilter = "") {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const treeData = buildTreeData(branchFilter);
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
    ? `Born: ${person.birth.date || ""} ${person.birth.place ? "in " + person.birth.place : ""}`
    : "Born: (unknown)";
  const deathText = person.death.date || person.death.place
    ? `Died: ${person.death.date || ""} ${person.death.place ? "in " + person.death.place : ""}`
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

  const modal = document.getElementById("personModal");
  modal.classList.remove("hidden");
}

function closePersonModal() {
  document.getElementById("personModal").classList.add("hidden");
}

// =========================
// SEARCH & FILTER
// =========================

function renderSearchResults(query) {
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "";

  if (!query) return;

  const q = query.toLowerCase();
  const matches = persons.filter(p => p.name.toLowerCase().includes(q));

  matches.slice(0, 30).forEach(p => {
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

  searchInput.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });

  branchFilterSelect.addEventListener("change", (e) => {
    const branch = e.target.value || "";
    renderTree(branch);
  });
}

// =========================
// INIT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  renderTree();

  document.getElementById("expandAll").onclick = expandAll;
  document.getElementById("collapseAll").onclick = collapseAll;

  document.getElementById("closeModal").onclick = closePersonModal;
  document.getElementById("personModal").addEventListener("click", (e) => {
    if (e.target.id === "personModal") closePersonModal();
  });

  setupSearchAndFilters();
});

  children: [
    {
      name: "Axel Westberg (1909–1986) – Westberg",
      children: [
        { name: "Oscar Westberg (Sweden → Minnesota) – Westberg" },
        { name: "Martha Selina Hornstrom (1871, Sweden) – Hornstrom" }
      ]
    }
  ]
};

// LAFEVER BRANCH
const LAFEVER_BRANCH = {
  name: "Myrtle J. LaFever (1914–2002) – LaFever",
  children: [
    {
      name: "Harmedos 'Medos' LaFever (1889–1964) – LaFever",
      children: [
        { name: "Napoleon LaFever (1860) – LaFever" },
        { name: "Delia LaFever (1860) – LaFever" }
      ]
    },
    {
      name: "Phoebe Raymond (1888–1952) – Raymond",
      children: [
        { name: "Jerome Raymond (1835, Quebec) – Raymond" },
        { name: "Louise Buckner – Raymond" }
      ]
    }
  ]
};

// LOSIE BRANCH
const LOSIE_BRANCH = {
  name: "Sandra Jean Losie (1940) – Losie",
  children: [
    {
      name: "James Elon Losie (1918–2002) – Losie",
      children: [
        {
          name: "Earl Judson Losie (1867–1938) – Losie",
          children: [
            {
              name: "George Leo Losie (1828–1880) – Losie",
              children: [
                {
                  name: "John Wesley Losie (1797–1865) – Losie",
                  children: [
                    {
                      name: "Lawrence Losie (1765–1820) – Losie",
                      children: [
                        {
                          name: "Jan 'John L.' Losee (1738–1788) – Losee",
                          children: [
                            {
                              name: "Laurens Losee (1705–1754) – Losee",
                              children: [
                                {
                                  name: "Simon Losee (1681–1763) – Losee",
                                  children: [
                                    {
                                      name: "Cornelius Losee (1644–1678) – Losee",
                                      children: [
                                        {
                                          name: "Laurens Corneliszen Koeck (1640–1702) – Koeck",
                                          children: [
                                            {
                                              name: "Margrietje Barents VanFlaesbeck (1658–1702) – VanFlaesbeck"
                                            }
                                          ]
                                        },
                                        {
                                          name: "Ceertje Denton (1658–1678) – Denton"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// BEARANCE BRANCH
const BEARANCE_BRANCH = {
  name: "Mildred Ilene Bearance (1919–2018) – Bearance",
  children: [
    { name: "Stanley Bearance – Bearance" },
    {
      name: "Hazel Isabella Woodman – Woodman",
      children: [
        {
          name: "Samuel D. Woodman (1829–1913) – Woodman",
          children: [
            { name: "William Harrison Woodman (1856–1946)" },
            { name: "Mary Woodman (1858–1931)" },
            { name: "Annie Woodman (1862–1872)" },
            { name: "Sylvia J. Woodman (1863–?)" },
            { name: "Charles Woodman (1869–1914)" },
            { name: "Franklin Woodman (1876–1963)" }
          ]
        },
        { name: "Ruth Elizabeth Lamberton (1836–1903) – Lamberton" }
      ]
    }
  ]
};

// LAKIN BRANCH
const LAKIN_BRANCH = {
  name: "Roger W. Lakin (1935–2024) – Lakin",
  children: [
    {
      name: "George Meade (1888–1954) – Meade",
      children: [
        {
          name: "Samuel Sawyer (1810–1870) – Sawyer",
          children: [
            {
              name: "Jonathan Sawyer (1770–1830) – Sawyer",
              children: [
                { name: "Thomas Sawyer (1700–?) – Sawyer" }
              ]
            }
          ]
        }
      ]
    },
    { name: "Anna O'Connell (1890–1962) – O'Connell" }
  ]
};

// SAWYER BRANCH
const SAWYER_BRANCH = {
  name: "Carol Ann Sawyer (1938–2016) – Sawyer",
  children: [
    {
      name: "Robert Russell Sawyer (1915–?) – Sawyer",
      children: [
        {
          name: "Samuel Sawyer (1810–1870) – Sawyer",
          children: [
            {
              name: "Jonathan Sawyer (1770–1830) – Sawyer",
              children: [
                { name: "Thomas Sawyer (1700–?) – Sawyer" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Cleda Lucille Brown (1916–1988) – Brown",
      children: [
        {
          name: "Harry Leroy Brown (1885–1939) – Brown",
          children: [
            {
              name: "Fred E. Brown (1861–1917) – Brown",
              children: [
                { name: "William H. Brown (1835–1890)" },
                { name: "Mary Elizabeth Brown (1838–1895)" }
              ]
            }
          ]
        },
        {
          name: "Edna E. Chase (1889–1957) – Chase",
          children: [
            { name: "Oscar Eugene Chase (1851–1921) – Chase" },
            {
              name: "Fannie E. Ingalls (1859–1939) – Ingalls",
              children: [
                {
                  name: "Samuel Worthen Ingalls (1770–1841) – Ingalls",
                  children: [
                    { name: "Edmund Ingalls (1598–1648) – Ingalls" }
                  ]
                },
                { name: "Margaret Delano (1773–1836) – Delano" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// =========================
// MASTER TREE DATA
// =========================

const treeData = {
  name: "Rachel & Alyssa Westberg",
  children: [
    {
      name: "Brent Westberg (1968)",
      children: [
        WESTBERG_BRANCH,
        LAFEVER_BRANCH,
        LOSIE_BRANCH,
        BEARANCE_BRANCH
      ]
    },
    {
      name: "Cheri Ann Lakin (1967)",
      children: [
        LAKIN_BRANCH,
        SAWYER_BRANCH
      ]
    }
  ]
};

// =========================
// TREE RENDERING LOGIC
// =========================

function createNode(person) {
  const node = document.createElement("div");
  node.className = "node";
  node.textContent = person.name;

  if (person.children && person.children.length > 0) {
    const childrenDiv = document.createElement("div");
    childrenDiv.className = "children hidden";

    person.children.forEach(child => {
      childrenDiv.appendChild(createNode(child));
    });

    node.addEventListener("click", (e) => {
      e.stopPropagation();
      childrenDiv.classList.toggle("hidden");
    });

    node.appendChild(childrenDiv);
  }

  return node;
}

function renderTreeView() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";
  treeContainer.appendChild(createNode(treeData));
}

function flattenTree(person, list = []) {
  list.push(person.name);
  if (person.children) {
    person.children.forEach(child => flattenTree(child, list));
  }
  return list;
}

function renderListView() {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const list = flattenTree(treeData);
  list.forEach(name => {
    const item = document.createElement("div");
    item.className = "list-item";
    item.textContent = name;
    treeContainer.appendChild(item);
  });
}

function expandAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.remove("hidden"));
}

function collapseAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.add("hidden"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTreeView();

  document.getElementById("treeView").onclick = renderTreeView;
  document.getElementById("listView").onclick = renderListView;
  document.getElementById("expandAll").onclick = expandAll;
  document.getElementById("collapseAll").onclick = collapseAll;
});
