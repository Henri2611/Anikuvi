// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });

// Animal data - in a real app, this would come from an API
const animals = {
  mammals: [
    {
      name: "African Lion",
      scientificName: "Panthera leo",
      image: "https://source.unsplash.com/random/600x400/?lion",
      habitat: "Sub-Saharan Africa",
      description:
        "The African lion is a large felid of the genus Panthera native to Africa. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.",
      conservationStatus: "Vulnerable",
    },
    {
      name: "Asian Elephant",
      scientificName: "Elephas maximus",
      image: "https://source.unsplash.com/random/600x400/?elephant",
      habitat: "South and Southeast Asia",
      description:
        "The Asian elephant is the largest living land animal in Asia. It is smaller than the African bush elephant and has the highest body point on the head.",
      conservationStatus: "Endangered",
    },
    // Add 28 more mammals...
    {
      name: "Gray Wolf",
      scientificName: "Canis lupus",
      image: "https://source.unsplash.com/random/600x400/?wolf",
      habitat: "North America, Eurasia",
      description:
        "The gray wolf is the largest extant member of the Canidae family. It is distinguished by its less pointed ears and muzzle, as well as a shorter torso and a longer tail.",
      conservationStatus: "Least Concern",
    },
  ],
  birds: [
    {
      name: "Bald Eagle",
      scientificName: "Haliaeetus leucocephalus",
      image: "https://source.unsplash.com/random/600x400/?eagle",
      habitat: "North America",
      description:
        "The bald eagle is a bird of prey found in North America. It is the national bird and symbol of the United States, appearing on its seal.",
      conservationStatus: "Least Concern",
    },
    {
      name: "Atlantic Puffin",
      scientificName: "Fratercula arctica",
      image: "https://source.unsplash.com/random/600x400/?puffin",
      habitat: "North Atlantic Ocean",
      description:
        "The Atlantic puffin is a species of seabird in the auk family. It is the only puffin native to the Atlantic Ocean.",
      conservationStatus: "Vulnerable",
    },
    // Add 28 more birds...
  ],
  reptiles: [
    {
      name: "Komodo Dragon",
      scientificName: "Varanus komodoensis",
      image: "https://source.unsplash.com/random/600x400/?komodo",
      habitat: "Indonesian islands",
      description:
        "The Komodo dragon is the largest living species of lizard, growing to a maximum length of 3 metres in rare cases and weighing up to approximately 70 kilograms.",
      conservationStatus: "Endangered",
    },
    {
      name: "Green Sea Turtle",
      scientificName: "Chelonia mydas",
      image: "https://source.unsplash.com/random/600x400/?sea+turtle",
      habitat: "Tropical and subtropical seas",
      description:
        "The green sea turtle is a large sea turtle of the family Cheloniidae. It is the only species in the genus Chelonia.",
      conservationStatus: "Endangered",
    },
    // Add 28 more reptiles...
  ],
  fish: [
    {
      name: "Clownfish",
      scientificName: "Amphiprioninae",
      image: "https://source.unsplash.com/random/600x400/?clownfish",
      habitat: "Indian and Pacific Oceans",
      description:
        "Clownfish are small, brightly colored fish that form symbiotic relationships with sea anemones. They are sequential hermaphrodites.",
      conservationStatus: "Least Concern",
    },
    {
      name: "Great White Shark",
      scientificName: "Carcharodon carcharias",
      image: "https://source.unsplash.com/random/600x400/?shark",
      habitat: "Coastal surface waters worldwide",
      description:
        "The great white shark is notable for its size, with larger female individuals growing to 6.1 m in length and 1,905 kg in weight.",
      conservationStatus: "Vulnerable",
    },
    // Add 28 more fish...
  ],
};

// Function to create animal cards
function createAnimalCard(animal) {
  return `
      <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src="${animal.image}" alt="${
    animal.name
  }" class="w-full h-48 object-cover">
          <div class="p-4">
              <h3 class="text-xl font-semibold text-green-800">${
                animal.name
              }</h3>
              <p class="text-gray-600 italic">${animal.scientificName}</p>
              <div class="mt-3">
                  <span class="inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                    animal.conservationStatus
                  )}">
                      ${animal.conservationStatus}
                  </span>
              </div>
              <p class="mt-2 text-gray-700"><span class="font-medium">Habitat:</span> ${
                animal.habitat
              }</p>
              <p class="mt-2 text-gray-700 line-clamp-2">${
                animal.description
              }</p>
              <button class="mt-4 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Learn More
              </button>
          </div>
      </div>
  `;
}

// Helper function for conservation status colors
function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case "endangered":
      return "bg-red-100 text-red-800";
    case "vulnerable":
      return "bg-orange-100 text-orange-800";
    case "near threatened":
      return "bg-yellow-100 text-yellow-800";
    case "least concern":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

// Populate featured animals on homepage
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("main.index-page")) {
    const featuredContainer = document.querySelector(".grid.grid-cols-1");
    if (featuredContainer) {
      // Get 6 random animals from all classes
      const allAnimals = [
        ...animals.mammals,
        ...animals.birds,
        ...animals.reptiles,
        ...animals.fish,
      ];
      const shuffled = allAnimals.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 6);

      selected.forEach((animal) => {
        featuredContainer.insertAdjacentHTML(
          "beforeend",
          createAnimalCard(animal)
        );
      });
    }
  }

  // Populate animal classes pages
  if (document.querySelector("main.classes-page")) {
    // Mammals
    const mammalsContainer = document.querySelector("#mammals .grid");
    if (mammalsContainer) {
      animals.mammals.forEach((animal) => {
        mammalsContainer.insertAdjacentHTML(
          "beforeend",
          createAnimalCard(animal)
        );
      });
    }

    // Birds
    const birdsContainer = document.querySelector("#birds .grid");
    if (birdsContainer) {
      animals.birds.forEach((animal) => {
        birdsContainer.insertAdjacentHTML(
          "beforeend",
          createAnimalCard(animal)
        );
      });
    }

    // Reptiles
    const reptilesContainer = document.querySelector("#reptiles .grid");
    if (reptilesContainer) {
      animals.reptiles.forEach((animal) => {
        reptilesContainer.insertAdjacentHTML(
          "beforeend",
          createAnimalCard(animal)
        );
      });
    }

    // Fish
    const fishContainer = document.querySelector("#fish .grid");
    if (fishContainer) {
      animals.fish.forEach((animal) => {
        fishContainer.insertAdjacentHTML("beforeend", createAnimalCard(animal));
      });
    }
  }

  // Search functionality
  const searchInput =
    document.getElementById("search-input") ||
    document.getElementById("class-search");
  const searchButton =
    document.getElementById("search-button") ||
    document.getElementById("class-search-button");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", function () {
      const query = searchInput.value.toLowerCase();
      if (query.trim() === "") return;

      // In a real app, this would redirect to a search results page
      alert(
        `Searching for: ${query}\nIn a complete implementation, this would show search results.`
      );
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchButton.click();
      }
    });
  }
});

// Add class to body for page-specific styling
const path = window.location.pathname.split("/").pop();
if (path === "index.html" || path === "") {
  document.querySelector("body").classList.add("index-page");
} else if (path === "classes.html") {
  document.querySelector("body").classList.add("classes-page");
} else if (path === "about.html") {
  document.querySelector("body").classList.add("about-page");
}
