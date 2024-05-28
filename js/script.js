// scripts.js
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
    "Why do programmers hate nature? It has too many bugs."
];

function displayRandomJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomJoke();
});
