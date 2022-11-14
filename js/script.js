const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const results = document.querySelector(".results");

async function fetchTeams() {
    const response = await fetch(url);
    const result = await response.json();
    
    console.log(result);
    results.innerHTML="";
    for (i = 0; i < result.length ; i++) {
        if (i === 15) {
        break;
        }
       
        if (result[i].teamName.startsWith("C")) {
            continue;
        }
        console.log(result[i].teamName);
        results.innerHTML += `<div class="results">
        <h2>${result[i].teamName}</h2>
        <p>From: ${result[i].location}</p>
        </div>`
    }
   
}

fetchTeams();