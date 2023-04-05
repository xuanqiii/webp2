// fetch method to get data from api //
// then take the data and create results variable that pulls just the show names from the array //


function searchShow(query) {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        // let shows = jsonData.map(element => element.show);
        const results = jsonData.map(element =>element.show.name + ': ' +
            element.show.genres + ' ' + element.show.language);
        console.log(results);
        renderResults(results);
      renderShows(shows);
      document.getElementById("errorMessage").innerHTML = "";
    // })
    // .catch((error) => {
    //   document.getElementById("errorMessage").innerHTML = error;
    })
}

// takes the shows names and inserts them onto the page //

function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";
    results.forEach(result => {
        const element = document.createElement("li");
        // const img = document.createElement("img");
        // const genre = document.createElement("genres");
        // const language = document.createElement("language");
        // img.src = show.image.medium;
        element.innerText = result;
       
        // element.appendChild(img);
        // element.appendChild(genre);
        // element.appendChild(language);
        list.appendChild(element);
    });
}

// type sheach function that feeds what you are typing to fetch request //

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        searchShow(searchFieldElement.value);
    };
}

function clickPlay() {
    document.getElementById("clicked").style.color='white';
    document.getElementById("clicked").innerHTML = 
    "Use the search bar above to find a show.";
}