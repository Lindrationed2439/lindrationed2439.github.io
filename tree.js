// Master ancestry data – fully expanded from Rachel & Alyssa upward
const masterTree = {
  generation1: [
    {
      name: "Rachel Westberg",
      birth: "1 Nov 1998",
      line: "Westberg–Lakin",
      parents: ["Brent Westberg", "Cheri Ann Lakin"]
    },
    {
      name: "Alyssa Westberg",
      birth: "27 Oct 2000",
      line: "Westberg–Lakin",
      parents: ["Brent Westberg", "Cheri Ann Lakin"]
    }
  ],
  generation2: [
    {
      name: "Brent Westberg",
      birth: "30 Mar 1968",
      parents: ["Ronald \"Ron\" Westberg", "Sandra Jean Losie"]
    },
    {
      name: "Cheri Ann Lakin",
      birth: "27 Sep 1967",
      parents: ["Roger W. Lakin", "Carol Ann Sawyer"]
    }
  ],
  generation3: [
    {
      name: "Ronald \"Ron\" Westberg",
      birth: "1935",
      parents: ["Axel Westberg", "Myrtle J. LaFever"]
    },
    {
      name: "Sandra Jean Losie",
      birth: "1940",
      parents: ["James Elon Losie", "Mildred Ilene Bearance"],
      notes: ["Later spouse: Thomas E. Amor"]
    },
    {
      name: "Roger W. Lakin",
      birth: "18 Aug 1935",
      birthPlace: "Portland, Michigan",
      death: "26 Nov 2024",
      deathPlace: "Lowell, Michigan",
      parents: ["George Meade", "Anna O'Connell"]
    },
    {
      name: "Carol Ann Sawyer",
      birth: "18 Jan 1938",
      birthPlace: "Lansing, Michigan",
      death: "29 Mar 2016",
      deathPlace: "Lowell, Michigan",
      parents: ["Robert Russell Sawyer", "Cleda Lucille Brown"]
    }
  ],
  generation4: [
    {
      name: "Axel Westberg",
      birth: "1909",
      birthPlace: "Minnesota",
      parents: ["Oscar Westberg", "Martha Selina Hornstrom"]
    },
    {
      name: "Myrtle J. LaFever",
      birth: "1 Jan 1914",
      birthPlace: "Turner, Michigan",
      death: "14 Sep 2002",
      deathPlace: "St. Petersburg, Florida",
      parents: ["Harmedos \"Medos\" LaFever", "Phoebe Raymond"]
    },
    {
      name: "James Elon Losie",
      birth: "1918",
      death: "2002",
      parents: ["Harmedos \"Medos\" LaFever", "Delia LaFever"]
    },
    {
      name: "Mildred Ilene Bearance",
      birth: "1919",
      death: "2018",
      parents: ["Stanley Bearance", "Hazel Isabella Woodman"]
    },
    {
      name: "George Meade",
      birth: "1888",
      birthPlace: "Michigan",
      death: "1954",
      parents: ["Samuel Sawyer", "Unknown mother"]
    },
    {
      name: "Anna O'Connell",
      birth: "1890",
      birthPlace: "Michigan",
      death: "1962",
      parents: ["Unknown father", "Unknown mother"]
    },
    {
      name: "Robert Russell Sawyer",
      birth: "abt 1915",
      parents: ["Samuel Sawyer", "Unknown mother"]
    },
    {
      name: "Cleda Lucille Brown",
      birth: "1916",
      death: "1988",
      parents: ["Harry Leroy Brown", "Edna E. Chase"]
    }
  ],
  generation5: [
    {
      name: "Oscar Westberg",
      birth: "abt 1875",
      birthPlace: "Minnesota",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Martha Selina Hornstrom",
      birth: "1871",
      birthPlace: "Sweden",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Harmedos \"Medos\" LaFever",
      birth: "1889",
      birthPlace: "Bay County, Michigan",
      death: "1964",
      parents: ["Napoleon LaFever", "Delia LaFever"]
    },
    {
      name: "Phoebe Raymond",
      birth: "abt 1888",
      death: "1952",
      parents: ["Jerome Raymond", "Louise Buckner"]
    },
    {
      name: "Harry Leroy Brown",
      birth: "1885",
      death: "1939",
      parents: ["Fred E. Brown", "Mary Elizabeth Brown"]
    },
    {
      name: "Edna E. Chase",
      birth: "1889",
      death: "1957",
      parents: ["Oscar Eugene Chase", "Fannie E. Ingalls"]
    },
    {
      name: "Stanley Bearance",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Hazel Isabella Woodman",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Samuel Sawyer",
      birth: "1810",
      birthPlace: "New York",
      death: "1870",
      parents: ["Jonathan Sawyer", "Unknown mother"]
    }
  ],
  generation6: [
    {
      name: "Napoleon LaFever",
      birth: "1860",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Delia LaFever",
      birth: "1860",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Jerome Raymond",
      birth: "abt 1835",
      birthPlace: "Quebec",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Louise Buckner",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Fred E. Brown",
      birth: "1861",
      death: "1917",
      parents: ["William H. Brown", "Mary Elizabeth Brown"]
    },
    {
      name: "Mary Elizabeth Brown",
      birth: "1838",
      death: "1895",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Oscar Eugene Chase",
      birth: "1851",
      death: "1921",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Fannie E. Ingalls",
      birth: "1859",
      death: "1939",
      parents: ["Samuel Worthen Ingalls", "Margaret Delano"]
    },
    {
      name: "Jonathan Sawyer",
      birth: "1770",
      birthPlace: "Massachusetts",
      death: "1830",
      parents: ["Thomas Sawyer", "Unknown mother"]
    }
  ],
  generation7: [
    {
      name: "William H. Brown",
      birth: "1835",
      death: "1890",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Samuel Worthen Ingalls",
      birth: "1770",
      death: "1841",
      parents: ["Edmund Ingalls", "Unknown mother"]
    },
    {
      name: "Margaret Delano",
      birth: "1773",
      death: "1836",
      parents: ["Unknown", "Unknown"]
    },
    {
      name: "Thomas Sawyer",
      birth: "1700",
      birthPlace: "Massachusetts",
      parents: ["Unknown", "Unknown"]
    }
  ],
  generation8: [
    {
      name: "Edmund Ingalls",
      birth: "1598",
      birthPlace: "Skirbeck, Lincolnshire, England",
      death: "1648",
      deathPlace: "Lynn, Massachusetts",
      parents: ["Unknown", "Unknown"]
    }
  ]
};

function renderTree() {
  const container = document.getElementById("tree-container");

  const genOrder = Object.keys(masterTree);
  genOrder.forEach((genKey, index) => {
    const genData = masterTree[genKey];

    const genTitle = document.createElement("div");
    genTitle.className = "generation-title";
    genTitle.textContent = `Generation ${index + 1}`;
    container.appendChild(genTitle);

    const branchDiv = document.createElement("div");
    branchDiv.className = "branch";

    genData.forEach(person => {
      const personDiv = document.createElement("div");
      personDiv.className = "person";

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.textContent = person.name;

      const detailsSpan = document.createElement("span");
      detailsSpan.className = "details";

      const parts = [];
      if (person.birth) parts.push(`b. ${person.birth}`);
      if (person.birthPlace) parts.push(`in ${person.birthPlace}`);
      if (person.death) parts.push(`d. ${person.death}`);
      if (person.deathPlace) parts.push(`in ${person.deathPlace}`);
      if (person.parents) parts.push(`parents: ${person.parents.join(" & ")}`);
      if (person.line) parts.push(`line: ${person.line}`);
      if (person.notes) parts.push(person.notes.join("; "));

      detailsSpan.textContent = parts.length ? ` – ${parts.join(", ")}` : "";

      personDiv.appendChild(nameSpan);
      personDiv.appendChild(detailsSpan);
      branchDiv.appendChild(personDiv);
    });

    container.appendChild(branchDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderTree);
