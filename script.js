let container = document.getElementById("container");
let searchInput = document.getElementById("search");
let houseFilter = document.getElementById("houseFilter");
let sortOption = document.getElementById("sort");
let themeToggle = document.getElementById("themeToggle");

let allCharacters = [];

function showMessage(title, text) {
    container.innerHTML = "";

    let itemDiv = document.createElement("div");
    itemDiv.className = "empty-state";

    let heading = document.createElement("h2");
    heading.textContent = title;

    let message = document.createElement("p");
    message.textContent = text;

    itemDiv.append(heading, message);
    container.append(itemDiv);
}

function showCharacters(data) {
    container.innerHTML = "";

    if (data.length === 0) {
        showMessage("No matches found", "Try another search or filter.");
        return;
    }

    data.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "card";

        let name = document.createElement("h3");
        name.textContent = item.name;

        let house = document.createElement("p");
        house.textContent = "House: " + item.house;

        let species = document.createElement("p");
        species.textContent = "Species: " + item.species;

        let wizard = document.createElement("p");
        wizard.textContent = "Wizard: " + item.wizard;

        let ancestry = document.createElement("p");
        ancestry.textContent = "Ancestry: " + item.ancestry;

        let wand = document.createElement("p");
        wand.textContent = "Wand: " + item.wand;

        let patronus = document.createElement("p");
        patronus.textContent = "Patronus: " + item.patronus;

        let favorite = document.createElement("button");
        favorite.className = "favorite-button";
        favorite.type = "button";
        favorite.textContent = item.favorite ? "Favorited" : "Favorite";

        if (item.favorite) {
            favorite.classList.add("active");
        }

        favorite.addEventListener("click", function() {
            item.favorite = !item.favorite;
            favorite.textContent = item.favorite ? "Favorited" : "Favorite";
            favorite.classList.toggle("active");
        });

        itemDiv.append(name, house, species, wizard, ancestry, wand, patronus, favorite);
        container.append(itemDiv);
    });
}

function updateCharacters() {
    let data = [...allCharacters];
    let keyword = searchInput.value.toLowerCase().trim();

    if (keyword !== "") {
        data = data.filter(item =>
            `${item.name} ${item.house} ${item.species} ${item.ancestry} ${item.wand} ${item.patronus}`
                .toLowerCase()
                .includes(keyword)
        );
    }

    if (houseFilter.value !== "") {
        data = data.filter(item => item.house === houseFilter.value);
    }

    if (sortOption.value === "az") {
        data = data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption.value === "za") {
        data = data.sort((a, b) => b.name.localeCompare(a.name));
    }

    showCharacters(data);
}

async function fetchCharacters() {
    try {
        let response = await fetch("https://potterhead-api.vercel.app/api/characters");
        let data = await response.json();

        allCharacters = data.map(item => {
            let wandText = [
                item.wand?.wood,
                item.wand?.core,
                item.wand?.length ? item.wand.length + '"' : ""
            ].filter(Boolean).join(", ") || "Unknown";

            return {
                name: item.name || "Unknown",
                house: item.house || "Unknown",
                species: item.species || "Unknown",
                wizard: item.wizard ? "Yes" : "No",
                ancestry: item.ancestry || "Unknown",
                wand: wandText,
                patronus: item.patronus || "Unknown",
                favorite: false
            };
        });

        updateCharacters();
    } catch (error) {
        showMessage("Characters unavailable", "The data could not be loaded right now.");
    }
}

searchInput.addEventListener("input", function() {
    updateCharacters();
});

houseFilter.addEventListener("change", function() {
    updateCharacters();
});

sortOption.addEventListener("change", function() {
    updateCharacters();
});

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

fetchCharacters();
