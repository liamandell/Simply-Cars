// Add an event listener to the search button
const getPokemon = async (event) => { 
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.trim();  
    const response = await fetch("/api/pokemon", {
        method: "POST",
        body: JSON.stringify({searchInput}),
        headers: {"Content-Type": "application/json"}

    })
    if (response.ok) {
        console.log(response);
        document.location.replace("/pokemon");
    } else {
        alert("Failed to get pokemon");
    }
}
document.querySelector("#pokemon-form").addEventListener('submit', getPokemon);