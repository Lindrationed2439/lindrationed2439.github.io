// --- MASTER FAMILY TREE DATA WITH BRANCHES & DETAILS ---

const people = [
  {
    id: "root",
    name: "Rachel & Alyssa Westberg",
    branch: "Westberg",
    children: ["brent", "cheri"]
  },

  // Generation 2
  {
    id: "brent",
    name: "Brent Westberg",
    birth: "30 Mar 1968",
    branch: "Westberg",
    children: ["ron", "sandra"]
  },
  {
    id: "cheri",
    name: "Cheri Ann Lakin",
    birth: "27 Sep 1967",
    branch: "Lakin",
    children: ["roger", "carolSawyer"]
  },

  // Westberg line
  {
    id: "ron",
    name: "Ronald \"Ron\" Westberg",
    birth: "1935",
    branch: "Westberg",
    children: ["axel", "myrtle"]
  },
  {
    id: "axel",
    name: "Axel Westberg",
    birth: "1909",
    birthPlace: "Minnesota",
    branch: "Westberg",
    children: ["oscar", "marthaHorn"]
  },
  {
    id: "oscar",
    name: "Oscar Westberg",
    birth: "abt 1875",
    birthPlace: "Minnesota",
    branch: "Westberg"
  },
  {
    id: "marthaHorn",
    name: "Martha Selina Hornstrom",
    birth: "1871",
    birthPlace: "Sweden",
    branch: "Westberg"
  },

  // LaFever / Raymond / Losie / Bearance
  {
    id: "myrtle",
    name: "Myrtle J. LaFever",
    birth: "1 Jan 1914",
    birthPlace: "Turner, Michigan",
    death: "14 Sep 2002",
    deathPlace: "St. Petersburg, Florida",
    branch: "LaFever",
    children: ["medos", "phoebe"]
  },
  {
    id: "medos",
    name: "Harmedos \"Medos\" LaFever",
    birth: "1889",
    birthPlace: "Bay County, Michigan",
    death: "1964",
    branch: "LaFever",
    children: ["napoleon", "delia"]
  },
  {
    id: "napoleon",
    name: "Napoleon LaFever",
    birth: "1860",
    branch: "LaFever"
  },
  {
    id: "delia",
    name: "Delia LaFever",
    birth: "1860",
    branch: "LaFever"
  },
  {
    id: "phoebe",
    name: "Phoebe Raymond",
    birth: "abt 1888",
    death: "1952",
    branch: "Raymond",
    children: ["jerome", "louiseBuckner"]
  },
  {
    id: "jerome",
    name: "Jerome Raymond",
    birth: "abt 1835",
    birthPlace: "Quebec",
    branch: "Raymond"
  },
  {
    id: "louiseBuckner",
    name: "Louise Buckner",
    branch: "Raymond"
  },

  {
    id: "sandra",
    name: "Sandra Jean Losie",
    birth: "1940",
    branch: "Losie",
    children: ["jamesLosie", "mildredBear"]
  },
  {
    id: "jamesLosie",
    name: "James Elon Losie",
    birth: "1918",
    death: "2002",
    branch: "Losie",
    children: ["medos", "delia"]
  },
  {
    id: "mildredBear",
    name: "Mildred Ilene Bearance",
    birth: "1919",
    death: "2018",
    branch: "Bearance",
    children: ["stanleyBear", "hazelWood"]
  },
  {
    id: "stanleyBear",
    name: "Stanley Bearance",
    branch: "Bearance"
  },
  {
    id: "hazelWood",
    name: "Hazel Isabella Woodman",
    branch: "Bearance"
  },

  // Lakin / Meade / O'Connell / Sawyer / Brown / Chase / Ingalls
  {
    id: "roger",
    name: "Roger W. Lakin",
    birth: "18 Aug 1935",
    birthPlace: "Portland, Michigan",
    death: "26 Nov 2024",
    deathPlace: "Lowell, Michigan",
    branch: "Lakin",
    children: ["georgeMeade", "annaO"]
  },
  {
    id: "georgeMeade",
    name: "George Meade",
    birth: "1888",
    birthPlace: "Michigan",
    death: "1954",
    branch: "Meade",
    children: ["samSawyer"]
  },
  {
    id: "samSawyer",
    name: "Samuel Sawyer",
    birth: "1810",
    birthPlace: "New York",
    death: "1870",
    branch: "Sawyer",
    children: ["jonSawyer"]
  },
  {
    id: "jonSawyer",
    name: "Jonathan Sawyer",
    birth: "1770",
    birthPlace: "Massachusetts",
    death: "1830",
    branch: "Sawyer",
    children: ["thomasSawyer"]
  },
  {
    id: "thomasSawyer",
    name: "Thomas Sawyer",
    birth: "1700",
    birthPlace: "Massachusetts",
    branch: "Sawyer"
  },
  {
    id: "annaO",
    name: "Anna O'Connell",
    birth: "1890",
    birthPlace: "Michigan",
    death: "1962",
    branch: "O'Connell"
  },

  {
    id: "carolSawyer",
    name: "Carol Ann Sawyer",
    birth: "18 Jan 1938",
    birthPlace: "Lansing, Michigan",
    death: "29 Mar 2016",
    deathPlace: "Lowell, Michigan",
    branch: "Sawyer",
    children: ["robertRuss", "cledaBrown"]
  },
  {
    id: "robertRuss",
    name: "Robert Russell Sawyer",
    birth: "abt 1915",
    branch: "Sawyer",
    children: ["samSawyer"]
  },
  {
    id: "cledaBrown",
    name: "Cleda Lucille Brown",
    birth: "1916",
    death: "1988",
    branch: "Brown",
    children: ["harryBrown", "ednaChase"]
  },
  {
    id: "harryBrown",
    name: "Harry Leroy Brown",
    birth: "1885",
    death: "1939",
    branch: "Brown",
    children: ["fredBrown", "maryBrown"]
  },
  {
    id: "fredBrown",
    name: "Fred E. Brown",
    birth: "1861",
    death: "1917",
    branch: "Brown",
    children: ["willBrown", "maryBrown"]
  },
  {
    id: "willBrown",
    name: "William H. Brown",
    birth: "1835",
    death: "1890",
    branch: "Brown"
  },
  {
    id: "maryBrown",
    name: "Mary Elizabeth Brown",
    birth: "1838",
    death: "1895",
    branch: "Brown"
  },

  {
    id: "ednaChase",
    name: "Edna E. Chase",
    birth: "1889",
    death: "1957",
    branch: "Chase",
    children: ["oscarChase", "fannieIng"]
  },
  {
    id: "oscarChase",
    name: "Oscar Eugene Chase",
    birth: "1851",
    death: "1921",
    branch: "Chase"
  },
  {
    id: "fannieIng",
    name: "Fannie E. Ingalls",
    birth: "1859",
    death: "1939",
    branch: "Ingalls",
    children: ["samWorthIng", "margDelano"]
  },
  {
    id: "samWorthIng",
    name: "Samuel Worthen Ingalls",
    birth: "1770",
    death: "1841",
    branch: "Ingalls",
    children: ["edmundIng"]
  },
  {
    id: "edmundIng",
    name: "Edmund Ingalls",
    birth: "1598",
    birthPlace: "Skirbeck, Lincolnshire, England",
    death: "1648",
    deathPlace: "Lynn, Massachusetts",
    branch: "Ingalls"
  },
  {
    id: "margDelano",
    name: "Margaret Delano",
    birth: "1773",
    death: "1836",
    branch: "Delano"
  }
];

// --- LOOKUP MAP ---
const peopleById = {};
people.forEach(p => (peopleById[p.id] = p));

// --- BUILD TREE STRUCTURE FROM ROOT ---
function buildTree(rootId, branchFilter = "all") {
  const person = peopleById[rootId];
  if (!person) return null;

  const node = { ...person, childrenNodes: [] };

  if (person.children) {
    person.children.forEach(childId => {
      const child = buildTree(childId, branchFilter);
      if (child) {
        if (branchFilter === "all" || child.branch === branchFilter || person.branch === branchFilter) {
          node.childrenNodes.push(child);
        }
      }
    });
  }

  return node;
}

// --- TREE VIEW RENDERING ---
function createNodeElement(personNode) {
  const node = document.createElement("div");
  node.className = "node";
  node.dataset.personId = personNode.id;
  node.textContent = personNode.name;

  node.addEventListener("click", (e) => {
    e.stopPropagation();
    showDetails(personNode.id);
    const childrenDiv = node.querySelector(":scope > .children");
    if (childrenDiv) {
      childrenDiv.classList.toggle("hidden");
    }
  });

  if (personNode.childrenNodes && personNode.childrenNodes.length > 0) {
    const childrenDiv = document.createElement("div");
    childrenDiv.className = "children hidden";

    personNode.childrenNodes.forEach(child => {
      childrenDiv.appendChild(createNodeElement(child));
    });

    node.appendChild(childrenDiv);
  }

  return node;
}

function renderTreeView(branchFilter = "all") {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const rootTree = buildTree("root", branchFilter);
  if (rootTree) {
    treeContainer.appendChild(createNodeElement(rootTree));
  }
}

// --- LIST VIEW RENDERING ---
function flattenTree(personNode, list = []) {
  list.push(personNode.id);
  if (personNode.childrenNodes) {
    personNode.childrenNodes.forEach(child => flattenTree(child, list));
  }
  return list;
}

function renderListView(branchFilter = "all") {
  const treeContainer = document.getElementById("tree");
  treeContainer.innerHTML = "";

  const rootTree = buildTree("root", branchFilter);
  if (!rootTree) return;

  const ids = flattenTree(rootTree);
  ids.forEach(id => {
    const p = peopleById[id];
    const item = document.createElement("div");
    item.className = "list-item";
    item.dataset.personId = p.id;
    item.textContent = p.name;
    item.addEventListener("click", () => showDetails(p.id));
    treeContainer.appendChild(item);
  });
}

// --- DETAILS PANEL ---
function showDetails(personId) {
  const p = peopleById[personId];
  if (!p) return;

  const details = document.getElementById("detailsContent");
  details.innerHTML = "";

  const lines = [];

  lines.push(`<strong>Name:</strong> ${p.name}`);
  if (p.branch) lines.push(`<strong>Branch:</strong> ${p.branch}`);
  if (p.birth) lines.push(`<strong>Birth:</strong> ${p.birth}`);
  if (p.birthPlace) lines.push(`<strong>Birth place:</strong> ${p.birthPlace}`);
  if (p.death) lines.push(`<strong>Death:</strong> ${p.death}`);
  if (p.deathPlace) lines.push(`<strong>Death place:</strong> ${p.deathPlace}`);

  details.innerHTML = lines.map(l => `<p>${l}</p>`).join("");

  // Placeholder for photos: if you add p.photoUrl, show it
  if (p.photoUrl) {
    const img = document.createElement("img");
    img.src = p.photoUrl;
    img.alt = p.name;
    details.appendChild(img);
  }
}

// --- EXPAND / COLLAPSE ---
function expandAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.remove("hidden"));
}

function collapseAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.add("hidden"));
}

// --- SEARCH ---
function clearHighlights() {
  document.querySelectorAll(".node.highlight, .list-item.highlight").forEach(el => {
    el.classList.remove("highlight");
  });
}

function searchByName(query) {
  clearHighlights();
  if (!query) return;

  const lower = query.toLowerCase();
  document.querySelectorAll("[data-person-id]").forEach(el => {
    const id = el.dataset.personId;
    const p = peopleById[id];
    if (p && p.name.toLowerCase().includes(lower)) {
      el.classList.add("highlight");
    }
  });
}

// --- BUTTON HOOKS ---
document.addEventListener("DOMContentLoaded", () => {
  const branchSelect = document.getElementById("branchSelect");
  const searchInput = document.getElementById("searchInput");

  function currentBranch() {
    return branchSelect.value;
  }

  // Initial view
  renderTreeView(currentBranch());

  document.getElementById("expandAll").onclick = expandAll;
  document.getElementById("collapseAll").onclick = collapseAll;

  document.getElementById("treeView").onclick = () => {
    renderTreeView(currentBranch());
  };

  document.getElementById("listView").onclick = () => {
    renderListView(currentBranch());
  };

  branchSelect.onchange = () => {
    renderTreeView(currentBranch());
  };

  document.getElementById("searchButton").onclick = () => {
    searchByName(searchInput.value);
  };

  document.getElementById("clearSearch").onclick = () => {
    searchInput.value = "";
    clearHighlights();
  };
});
