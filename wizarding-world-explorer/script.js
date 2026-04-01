let container = document.getElementById("container");
let houseFilter = document.getElementById("houseFilter");

async function fetchCharacters() {
    let response = await fetch("https://potterhead-api.vercel.app/api/characters");
    let data = await response.json();

    if (houseFilter.value !== "") {
        data = data.filter(item => item.house === houseFilter.value);
    }

    container.innerHTML = "";

    data.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "card";

        let name = document.createElement("h3");
        name.textContent = item.name || "Unknown";

        let house = document.createElement("p");
        house.textContent = "House: " + (item.house || "Unknown");

        let species = document.createElement("p");
        species.textContent = "Species: " + (item.species || "Unknown");

        let wizard = document.createElement("p");
        wizard.textContent = "Wizard: " + (item.wizard ? "Yes" : "No");

        let ancestry = document.createElement("p");
        ancestry.textContent = "Ancestry: " + (item.ancestry || "Unknown");

        let wand = document.createElement("p");
        let wandText = "Unknown";

        if (item.wand) {
            wandText = [
                item.wand.wood,
                item.wand.core,
                item.wand.length ? item.wand.length + '"' : ""
            ].filter(Boolean).join(", ") || "Unknown";
        }

        wand.textContent = "Wand: " + wandText;

        let patronus = document.createElement("p");
        patronus.textContent = "Patronus: " + (item.patronus || "Unknown");

        itemDiv.append(name, house, species, wizard, ancestry, wand, patronus);
        container.append(itemDiv);
    });
}

houseFilter.addEventListener("change", function() {
    fetchCharacters();
});

fetchCharacters();
