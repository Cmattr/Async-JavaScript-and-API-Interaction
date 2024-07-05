const apiKey = "3c8d82e9011b075d7c2944801844a515";
const baseURL = "https://gateway.marvel.com/v1/public/characters";

async function fetchMarvelData(marvelName) {
    try {
        const response = await fetch(`${baseURL}?name=${encodeURIComponent(marvelName)}&apikey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const marvelData = await response.json();
        return marvelData.data.results[0]; 
    } catch (error) {
        console.error("Error fetching Marvel data:", error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const marvelInfoElement = document.getElementById('marvel-info'); // Ensure the ID matches
    if (marvelInfoElement) {
        const absorbingManData = await fetchMarvelData('Absorbing Man');
        
        if (absorbingManData) {
            marvelInfoElement.innerHTML = `
                <h2>${absorbingManData.name}</h2>
                <img src="${absorbingManData.thumbnail.path}.${absorbingManData.thumbnail.extension}" alt="${absorbingManData.name}">
                <h3>Description</h3>
                <p>${absorbingManData.description || "No description available."}</p>
            `;
        } else {
            marvelInfoElement.innerHTML = `<p>Failed to load Marvel data.</p>`;
        }
    } else {
        console.error('Element with ID "marvel-info" not found.');
    }
});