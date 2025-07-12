

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
        name: `Dust to Dust`,
        student: `chahak`,
        link: `https://readymag.website/u696722759/5037935/`,
        xpos: xPos[0],
        ypos: yPos[0],
        delay: delay[0],
      },
      {
        name: `Somehow This Fish Fathered a Near Clone of Itself`,
        student: `ella`,
        link: `https://somehow-this-fish-fathered-a-near-clone-of-itself.glitch.me/`,
        xpos: xPos[1],
        ypos: yPos[1],
        delay: delay[1],
      },
      {
        name: `Hot Pepper Essay`,
        student: `violeit`,
        link: `https://www.figma.com/proto/F0iTR1F0M3pflbHogiCcKe/Untitled?page-id=0%3A1&node-id=110-1514&node-type=canvas&viewport=-1155%2C2042%2C0.55&t=n5oc1J1gaJD4qcXZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=110%3A1514&share=1`,
        xpos: xPos[2],
        ypos: yPos[2],
        delay: delay[2],
      },
      {
        name: `TBD`,
        student: `nor`,
        link: ``,
        xpos: xPos[3],
        ypos: yPos[3],
        delay: delay[3],
      },
      {
        name: `Don't Eat Before Reading This`,
        student: `marie`,
        link: `https://readymag.website/u3762949235/5032929/`,
        xpos: xPos[4],
        ypos: yPos[4],
        delay: delay[4],
      },
      {
        name: `Untitled`,
        student: `nadine`,
        link: `https://thisisnotnadine.github.io/websiteT3/`,
        xpos: xPos[5],
        ypos: yPos[5],

        delay: delay[5],
      },
      {
        name: `A Long History of [Redacted]`,
        student: `james`,
        link: `https://readymag.website/u1371402670/5041219/`,
        xpos: xPos[6],
        ypos: yPos[6],
        delay: delay[6],
      },
      {
        name: `The Slow Cancellation of the Future`,
        student: `claire`,
        link: `https://clin2004.github.io/future.html`,
        xpos: xPos[7],
        ypos: yPos[7],
        delay: delay[7],
      },
      {
        name: `Sounds Into Memories`,
        student: `chelsea`,
        link: `https://readymag.website/u1344037266/ilovenoise/`,
        xpos: xPos[8],
        ypos: yPos[8],
        delay: delay[8],
      },
      {
        name: `How to Find Joy in Your Sisyphean Existence`,
        student: `olivia`,
        link: `https://readymag.website/u666783901/5033875/`,
        xpos: xPos[9],
        ypos: yPos[9],
        delay: delay[9],
      },
      {
        name: `Chinese Zodiac`,
        student: `katie`,
        link: `https://readymag.website/u1426346456/5041623/`,
        xpos: xPos[10],
        ypos: yPos[10],
        delay: delay[10],
      },
      {
        name: `Casey Jones Once Destroyed Me`,
        student: `ryan`,
        link: `https://readymag.website/u1861655097/5031622/`,
        xpos: xPos[11],
        ypos: yPos[11],
        delay: delay[11],
      },
      {
        name: `The Meaning of Flowers`,
        student: `izana`,
        link: `https://www.figma.com/design/XH0fNNIfTJvzkTMEYYFvoR/Flower-essay?node-id=0-1&t=JO44RhrCE8oKy7kz-1`,
        xpos: xPos[12],
        ypos: yPos[12],
        delay: delay[12],
      },
    ],
  },
});
