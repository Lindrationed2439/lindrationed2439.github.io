// --- MASTER FAMILY TREE DATA (fully expanded) ---
const treeData = {
  name: "Rachel & Alyssa Westberg",
  children: [
    {
      name: "Brent Westberg (1968)",
      children: [
        {
          name: "Ronald \"Ron\" Westberg (1935)",
          children: [
            {
              name: "Axel Westberg (1909, Minnesota)",
              children: [
                { name: "Oscar Westberg (abt 1875, Minnesota)" },
                { name: "Martha Selina Hornstrom (1871, Sweden)" }
              ]
            },
            {
              name: "Myrtle J. LaFever (1914–2002)",
              children: [
                {
                  name: "Harmedos \"Medos\" LaFever (1889–1964)",
                  children: [
                    { name: "Napoleon LaFever (1860)" },
                    { name: "Delia LaFever (1860)" }
                  ]
                },
                {
                  name: "Phoebe Raymond (1888–1952)",
                  children: [
                    { name: "Jerome Raymond (1835, Quebec)" },
                    { name: "Louise Buckner" }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Sandra Jean Losie (1940)",
          children: [
            {
              name: "James Elon Losie (1918–2002)",
              children: [
                {
                  name: "Harmedos \"Medos\" LaFever (1889–1964)",
                  children: [
                    { name: "Napoleon LaFever (1860)" },
                    { name: "Delia LaFever (1860)" }
                  ]
                },
                { name: "Delia LaFever (1860)" }
              ]
            },
            {
              name: "Mildred Ilene Bearance (1919–2018)",
              children: [
                { name: "Stanley Bearance" },
                { name: "Hazel Isabella Woodman" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Cheri Ann Lakin (1967)",
      children: [
        {
          name: "Roger W. Lakin (1935–2024)",
          children: [
            {
              name: "George Meade (1888–1954)",
              children: [
                { name: "Samuel Sawyer (1810–1870)" },
                { name: "Unknown Mother" }
              ]
            },
            {
              name: "Anna O'Connell (1890–1962)",
              children: [
                { name: "Unknown Father" },
                { name: "Unknown Mother" }
              ]
            }
          ]
        },
        {
          name: "Carol Ann Sawyer (1938–2016)",
          children: [
            {
              name: "Robert Russell Sawyer (1915)",
              children: [
                { name: "Samuel Sawyer (1810–1870)" },
                { name: "Unknown Mother" }
              ]
            },
            {
              name: "Cleda Lucille Brown (1916–1988)",
              children: [
                {
                  name: "Harry Leroy Brown (1885–1939)",
                  children: [
                    { name: "Fred E. Brown (1861–1917)" },
                    { name: "Mary Elizabeth Brown (1838–1895)" }
                  ]
                },
                {
                  name: "Edna E. Chase (1889–1957)",
                  children: [
                    {
                      name: "Oscar Eugene Chase (1851–1921)",
                      children: []
                    },
                    {
                      name: "Fannie E. Ingalls (1859–1939)",
                      children: [
                        {
                          name: "Samuel Worthen Ingalls (1770–1841)",
                          children: [
                            {
                              name: "Edmund Ingalls (1598–1648)",
                              children: []
                            },
                            { name: "Unknown Mother" }
                          ]
                        },
                        { name: "Margaret Delano (1773–1836)" }
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

    node.addEventListener("click", () => {
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

  document.getElementById("expandAll").onclick = expandAll;
  document.getElementById("collapseAll").onclick = collapseAll;
  document.getElementById("treeView").onclick = renderTreeView;
  document.getElementById("listView").onclick = renderListView;
});
