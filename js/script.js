const url = "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";
const results = document.querySelector(".result");

async function fetchTeams() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}
fetchTeams();