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

const nextMeeting = new Date("2027-01-01");

function updateCountdown() {

    const now = new Date();

    const difference = nextMeeting - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText =
    days + " days left ❤️";
}

updateCountdown();

const API_KEY = "7839bbaac4069c03fe69c550163506ac";

async function getMovie(){

let page = Math.floor(Math.random()*50)+1;

let response = await fetch(
`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`
);

let data = await response.json();

let movie =
data.results[Math.floor(Math.random()*data.results.length)];

document.getElementById("title").innerText =
movie.title;

document.getElementById("rating").innerText =
"⭐ " + movie.vote_average;

document.getElementById("overview").innerText =
movie.overview;

document.getElementById("poster").src =
"https://image.tmdb.org/t/p/w500"+movie.poster_path;

}
getMovie();