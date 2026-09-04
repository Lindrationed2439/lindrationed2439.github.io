// =========================
// MASTER FAMILY TREE DATA
// =========================

const treeData = {
  name: "Rachel & Alyssa Westberg",
  children: [

    // =========================
    // BRENT WESTBERG SIDE
    // =========================
    {
      name: "Brent Westberg (1968)",
      children: [
        WESTBERG_BRANCH,
        LAFEVER_BRANCH,
        LOSIE_BRANCH,
        BEARANCE_BRANCH
      ]
    },

    // =========================
    // CHERI LAKIN SIDE
    // =========================
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
// WESTBERG BRANCH
// =========================

const WESTBERG_BRANCH = {
  name: "Ronald 'Ron' Westberg (1935) – Westberg",
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


// =========================
// LAFEVER BRANCH
// =========================

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


// =========================
// LOSIE / LOSEE / KOeCK BRANCH
// =========================

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
                                          name: "Laurens Corneliszen Koeck (1640–1702, Denmark → NY) – Koeck",
                                          children: [
                                            {
                                              name: "Margrietje Barents VanFlaesbeck (1658–1702, New Amsterdam) – VanFlaesbeck"
                                            }
                                          ]
                                        },
                                        {
                                          name: "Ceertje Denton (1658–1678, Jamaica NY) – Denton"
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


// =========================
// BEARANCE / WOODMAN BRANCH
// =========================

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


// =========================
// LAKIN BRANCH
// =========================

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


// =========================
// SAWYER BRANCH
// =========================

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
