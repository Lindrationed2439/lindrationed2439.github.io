// --- MASTER FAMILY TREE DATA (major branches included) ---
const treeData = {
  name: "Rachel & Alyssa Westberg",
  children: [
    {
      name: "Brent Westberg (1968) – Westberg line",
      children: [
        {
          name: "Ronald \"Ron\" Westberg (1935) – Westberg",
          children: [
            {
              name: "Axel Westberg (1909, Minnesota) – Westberg",
              children: [
                { name: "Oscar Westberg (abt 1875, Minnesota) – Westberg" },
                { name: "Martha Selina Hornstrom (1871, Sweden) – Hornstrom" }
              ]
            },
            {
              name: "Myrtle J. LaFever (1914–2002) – LaFever",
              children: [
                {
                  name: "Harmedos \"Medos\" LaFever (1889–1964) – LaFever",
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
            }
          ]
        },
        {
          name: "Sandra Jean Losie (1940) – Losie",
          children: [
            {
              name: "James Elon Losie (1918–2002) – Losie",
              children: [
                {
                  name: "Harmedos \"Medos\" LaFever (1889–1964) – LaFever",
                  children: [
                    { name: "Napoleon LaFever (1860) – LaFever" },
                    { name: "Delia LaFever (1860) – LaFever" }
                  ]
                },
                { name: "Delia LaFever (1860) – LaFever" }
              ]
            },
            {
              name: "Mildred Ilene Bearance (1919–2018) – Bearance",
              children: [
                { name: "Stanley Bearance – Bearance" },
                { name: "Hazel Isabella Woodman – Woodman" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Cheri Ann Lakin (1967) – Lakin line",
      children: [
        {
          name: "Roger W. Lakin (1935–2024) – Lakin",
          children: [
            {
              name: "George Meade (1888–1954) – Meade",
              children: [
                {
                  name: "Samuel Sawyer (1810–1870) – Sawyer",
                  children: [
                    {
                      name: "Jonathan Sawyer (1770–1830, Massachusetts) – Sawyer",
                      children: [
                        { name: "Thomas Sawyer (1700, Massachusetts) – Sawyer" }
                      ]
                    }
                  ]
                },
                { name: "Unknown Mother – Sawyer" }
              ]
            },
            {
              name: "Anna O'Connell (1890–1962) – O'Connell",
              children: [
                { name: "Unknown Father – O'Connell" },
                { name: "Unknown Mother – O'Connell" }
              ]
            }
          ]
        },
        {
          name: "Carol Ann Sawyer (1938–2016) – Sawyer",
          children: [
            {
              name: "Robert Russell Sawyer (1915) – Sawyer",
              children: [
                {
                  name: "Samuel Sawyer (1810–1870) – Sawyer",
                  children: [
                    {
                      name: "Jonathan Sawyer (1770–1830, Massachusetts) – Sawyer",
                      children: [
                        { name: "Thomas Sawyer (1700, Massachusetts) – Sawyer" }
                      ]
                    }
                  ]
                },
                { name: "Unknown Mother – Sawyer" }
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
                        { name: "William H. Brown (1835–1890) – Brown" },
                        { name: "Mary Elizabeth Brown (1838–1895) – Brown" }
                      ]
                    },
                    { name: "Mary Elizabeth Brown (1838–1895) – Brown" }
                  ]
                },
                {
                  name: "Edna E. Chase (1889–1957) – Chase",
                  children: [
                    {
                      name: "Oscar Eugene Chase (1851–1921) – Chase"
                    },
                    {
                      name: "Fannie E. Ingalls (1859–1939) – Ingalls",
                      children: [
                        {
                          name: "Samuel Worthen Ingalls (1770–1841) – Ingalls",
                          children: [
                            {
                              name: "Edmund Ingalls (1598–1648, Skirbeck, Lincolnshire → Lynn, MA) – Ingalls"
                            },
                            { name: "Unknown Mother – Ingalls" }
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
        }
      ]
    }
  ]
};

// --- TREE VIEW RENDERING ---
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

// --- LIST VIEW RENDERING ---
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

// --- EXPAND / COLLAPSE ---
function expandAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.remove("hidden"));
}

function collapseAll() {
  document.querySelectorAll(".children").forEach(div => div.classList.add("hidden"));
}

// --- BUTTON HOOKS ---
document.addEventListener("DOMContentLoaded", () => {
  renderTreeView();

  document.getElementById("treeView").onclick = renderTreeView;
  document.getElementById("listView").onclick = renderListView;
  document.getElementById("expandAll").onclick = expandAll;
  document.getElementById("collapseAll").onclick = collapseAll;
});
