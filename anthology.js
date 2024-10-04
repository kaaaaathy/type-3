/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
let windowWidth = window.innerWidth - 100;
let windowHeight = window.innerHeight - 100;
let xPos = [];
let yPos = [];
let delay = [];

$(function () {
    $(".item").draggable();
});

for (let i = 0; i < 13; i++) {
    let randomX = Math.floor(Math.random() * windowWidth);
    xPos.push(randomX);
    let randomY = Math.floor(Math.random() * windowHeight);
    yPos.push(randomY);
    let randomDelay = Math.random() * 8;
    delay.push(randomDelay);
}

new Vue({
    el: "#container",
    data: {
        websites: [
            {
                name: `test`,
                student: `chahak`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[0],
                ypos: yPos[0],
                delay: delay[0],
            },
            {
                name: `test`,
                student: `ella`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[1],
                ypos: yPos[1],
                delay: delay[1],
            },
            {
                name: `test`,
                student: `violeit`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[2],
                ypos: yPos[2],
                delay: delay[2],
            },
            {
                name: `test`,
                student: `nor`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[3],
                ypos: yPos[3],
                delay: delay[3],
            },
            {
                name: `test`,
                student: `marie`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[4],
                ypos: yPos[4],
                delay: delay[4],
            },
            {
                name: `test`,
                student: `nadine`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[5],
                ypos: yPos[5],

                delay: delay[5],
            },
            {
                name: `test`,
                student: `james`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[6],
                ypos: yPos[6],
                delay: delay[6],
            },
            {
                name: `test`,
                student: `claire`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[7],
                ypos: yPos[7],
                delay: delay[7],
            },
            {
                name: `test`,
                student: `chelsea`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[8],
                ypos: yPos[8],
                delay: delay[8],
            },
            {
                name: `test`,
                student: `olivia`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[9],
                ypos: yPos[9],
                delay: delay[9],
            },
            {
                name: `test`,
                student: `katie`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[10],
                ypos: yPos[10],
                delay: delay[10],
            },
            {
                name: `test`,
                student: `ryan`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[11],
                ypos: yPos[11],
                delay: delay[11],
            },
            {
                name: `test`,
                student: `izana`,
                link: `https://aeon.co/essays/in-the-beginning-was-the-word-and-the-word-was-embodied`,
                xpos: xPos[12],
                ypos: yPos[12],
                delay: delay[12],
            },
        ],
    },
});