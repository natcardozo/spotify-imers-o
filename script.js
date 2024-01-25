const searchInput = document.getElementById("search-input")
const resultArtists = document.getElementById("result-artist")
const playlists = document.getElementById("playlists")

function requestApi(value) {
    const url = `http://localhost:3000/artists?name_like=${value}`

    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    playlists.classList.add("hidden");
    
    const artistName = document.getElementById("artist-name");
    const artistImg = document.getElementById("artist-img");
    
    result.forEach(r => {
        artistName.innerText = r.name;
        artistImg.src = r.urlImg;
    })

    resultArtists.classList.remove("hidden");
}

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase()

    if (searchValue === "") {
        resultArtists.classList.add("hidden")
        playlists.classList.remove("hidden")
        return;
    }

    requestApi(searchValue)
})

const greeting = document.getElementById("greeting");

function getGreetingMessage() {
    const localTime = new Date();

    const hours = localTime.getHours();

    if (hours >= 6 && hours < 12) {
        greeting.innerText = "Bom dia!";
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = "Boa tarde!";
    } else {
        greeting.innerText = "Boa noite!";
    }
}

getGreetingMessage()
