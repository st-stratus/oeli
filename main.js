const game = document.querySelector(".gm")
const width = game.width = window.innerWidth;
const height = game.height = window.innerHeight;
const ctx = game.getContext("2d");
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(-20, -20, 320, 240);
