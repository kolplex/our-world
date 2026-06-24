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

let questions = [
"What made you smile today?",
"What's your favorite memory with me?",
"If we were together right now, what would we do?",
"What song reminds you of me?",
"What do you love most about us?",
"What's something you wish we could do together?",
"What is one thing I do that makes you happy?"
];

function newQuestion() {

let random = Math.floor(Math.random() * questions.length);

document.getElementById("question").innerText =
questions[random];

}

newQuestion();