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
