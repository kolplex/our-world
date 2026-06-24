let ideas = [
"Watch a movie together 🎬",
"Play Terraria together 🎮",
"Listen to music together 🎵"
];

function newIdea() {
    let random = Math.floor(Math.random() * ideas.length);
    document.getElementById("idea").innerText = ideas[random];
}

let movies = [
"Coraline",
"Interstellar",
"Nosferatu"
];

function randomMovie() {
    let random = Math.floor(Math.random() * movies.length);
    document.getElementById("movie").innerText = movies[random];
}

function saveNote() {
    ...
}

let reasons = [
"Your smile 😊",
"Your laugh ❤️",
"Our memories 📸",
"Your kindness 🌷",
"The way you care 🥰",
"Everything about you ❤️",
"The way you make me happy 💖",
"Your beautiful eyes ✨"
];

function whyILoveYou() {

let random = Math.floor(Math.random() * reasons.length);

document.getElementById("loveReason").innerText =
reasons[random];

}