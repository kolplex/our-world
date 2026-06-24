let ideas = [
"Watch a movie together 🎬",
"Play Terraria together 🎮",
"Listen to music together 🎵",
"Have coffee together ☕",
"Ask each other 3 questions ❤️"
];

function newIdea(){
let random=Math.floor(Math.random()*ideas.length);
document.getElementById("idea").innerText=ideas[random];
}

let reasons=[
"Your smile 😊",
"Your laugh ❤️",
"Our memories 📸",
"Your kindness 🌷",
"The way you care 🥰",
"Everything about you ❤️"
];

function whyILoveYou(){
let random=Math.floor(Math.random()*reasons.length);
document.getElementById("loveReason").innerText=reasons[random];
}

let questions=[
"What made you smile today?",
"What's your favorite memory with me?",
"What song reminds you of me?",
"What do you love most about us?",
"What makes you happy?"
];

function newQuestion(){
let random=Math.floor(Math.random()*questions.length);
document.getElementById("question").innerText=questions[random];
}

newQuestion();

const nextMeeting = new Date("2027-01-01");

function updateCountdown(){

let now=new Date();

let difference=nextMeeting-now;

let days=Math.floor(difference/(1000*60*60*24));

document.getElementById("countdown").innerText=
days+" days left ❤️";

}

updateCountdown();

function saveNote(){

localStorage.setItem(
"loveNote",
document.getElementById("note").value
);

document.getElementById("saved").innerText=
"Saved ❤️";

}

document.getElementById("note").value=
localStorage.getItem("loveNote") || "";
