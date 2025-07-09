window.addEventListener("load", () => {
    const bubbleCursor = new cursoreffects.bubbleCursor({
      zindex: 9999,
    });
  console.log(bubbleCursor); 
  displaySplashScreenGIFs();
});

let congratsSoundPlayed = false;

const facts = [
  "AI tools, including ChatGPT, are using up to four times more water than previously believed.",
  "By 2027, AI is projected to use up to 6.6 billion cubic meters of water globally.",
  "AI training uses 2,000 liters of water per second for cooling.",
  "AI increases water consumption globally, especially in areas with water shortages.",
  "Each megawatt of AI data center energy needs 7,000 liters of water.",
  "70% of AI data center water usage is freshwater, impacting local supplies.",
  "90% of AI data centers rely on water-based cooling systems.",
  "Google's AI servers used 10 billion gallons of water in 2020.",
  "Facebook’s AI servers used 9.7 billion liters of water in 2021.",
"The energy required for training AI models is about 100 times the amount needed to run them for their entire lifespan.",
"One hour of AI image training can emit as much CO2 as five average cars do in their lifetime.",
"By 2040, AI is expected to consume 15% of the world's total electricity!"
];

// FIREBASE STUFF
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_nmqUeh4mgOYJSWHNaUvnHNPIE40N7-4",
  authDomain: "thirstyrobotgameleaderboard.firebaseapp.com",
  databaseURL: "https://thirstyrobotgameleaderboard-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thirstyrobotgameleaderboard",
  storageBucket: "thirstyrobotgameleaderboard.firebasestorage.app",
  messagingSenderId: "422153810028",
  appId: "1:422153810028:web:d960c16ec1aeb73e242849"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const leaderboardRef = ref(database, 'leaderboard');

// FETCHING LEADERBOARD
window.addEventListener("load", () => {
  get(leaderboardRef).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val()); 
    } else {
      console.log("No leaderboard data available.");
    }
  }).catch((error) => {
    console.error("Error fetching leaderboard data:", error);
  });
});

function saveLeaderboard(name) {
  const time = document.getElementById('time-value').textContent;
  if (!name || name.trim() === "") {
    alert("Please enter a valid name.");
    return;
  }


  if (window.isSubmitting) return;
  window.isSubmitting = true;

  push(leaderboardRef, { name, time })
    .then(() => {
      alert("Your score has been saved!");
      window.isSubmitting = false; // RESET FLAG
    })
    .catch((error) => {
      console.error("Error saving to leaderboard:", error);
      window.isSubmitting = false; 
    });
}

document.getElementById('submit-score-button').addEventListener('click', () => {
  const inputField = document.getElementById('name-input');
  const name = inputField.value.trim();
  console.log('Submit button clicked with name:', name);
  
  if (name === '') {
    alert('Please enter a valid name.');
    return;
  }
  
  saveLeaderboard(name); // SAVE TO DATABSE
  
  console.log('Saving leaderboard entry...');
  document.getElementById("congrats-screen").style.display = "none";
  const splashScreen = document.getElementById("splash-screen");
  splashScreen.style.display = "flex"; 
  splashScreen.style.position = "fixed"; 
  
  resetGame(); 
});

document.getElementById("name-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputField = document.getElementById("name-input");
    const name = inputField.value.trim();

    if (!name) {
      alert("Please enter a valid name.");
      return;
    }

    saveLeaderboard(name); 
    document.getElementById("congrats-screen").style.display = "none";
  const splashScreen = document.getElementById("splash-screen");
  splashScreen.style.display = "flex"; 
  splashScreen.style.position = "fixed"; 
    resetGame(); 
  }
});
  
const popupbackgrounds = [
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/anim_waterlelie.gif?v=1737413717412",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-aquarium-and-fish-bowl-image-0003.gif?v=1737413718929",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-beach-image-0023.gif?v=1737413721899",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0176.gif?v=1737413724036",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0243.gif?v=1737413726218",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0365.gif?v=1737413728775",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-water-04.gif.pagespeed.ce.aif_akUFqd.gif?v=1737413731630",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-water-14.gif.pagespeed.ce.dInbfYuKnv.gif?v=1737413733850",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-waterfalls-03.gif.pagespeed.ce.xfjchK8Hjn.gif?v=1737413736142",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-waterfalls-04.gif?v=1737413738723",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-waterfalls-05.gif?v=1737413741993",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-waterfalls-26.gif?v=1737413744616",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-waterfalls-30.gif.pagespeed.ce.I22ZfP6D3H.gif?v=1737413749992",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-waterfall-image-0004.gif?v=1737413752409",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-waterfall-image-0009.gif?v=1737413755152",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-waterfall-image-0015.gif?v=1737413763215",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-waterfall-image-0016.gif?v=1737413771923",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-waterfall-image-0021.gif?v=1737413774273",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-whale-image-0022.gif?v=1737413778310",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animatedwater_swan_sh.gif?v=1737413782504",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/autumlakeflowingwater.gif?v=1737413784584",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/DeerandWater.gif?v=1737413787766",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/dolfijn-water-mb_1_.gif?v=1737413791328",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/Dolphins_in_water.gif?v=1737413794367",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/moving_waterall__new_.gif?v=1737413798382",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/water_drop.gif?v=1737413801360",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/water-glass-drip.gif?v=1737413804606",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/water028.gif?v=1737413808377",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/water60.gif?v=1737413813946",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/waterbackground.gif?v=1737413815508",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/Waterf_1.gif?v=1737413818993",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/waterkarin.gif?v=1737413822213",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/waternight.gif?v=1737413827087"];

const assets = [
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-aquarium-and-fish-bowl-image-0019.gif?v=1737413240601",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-aquarium-and-fish-bowl-image-0022.gif?v=1737413244509",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0002.gif?v=1737413534289",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0019.gif?v=1737413548004",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0029.gif?v=1737413561152",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0036.gif?v=1737413585728",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0037.gif?v=1737413587657",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0056.gif?v=1737413590625",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0241.gif?v=1737413593694",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0312.gif?v=1737413599201",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0353.gif?v=1737413601685",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0355.gif?v=1737413605719",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0412.gif?v=1737413608628",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0553.gif?v=1737413611427",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-fish-image-0575.gif?v=1737413614187",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-gifs-water-08.gif.pagespeed.ce.3E1kOGvmus.gif?v=1737413622493",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-jellyfish-image-0007.gif?v=1737413638893",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-shark-image-0027.gif?v=1737413642777",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-shark-image-0028.gif?v=1737413646103",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-shark-image-0030.gif?v=1737413649406",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-shark-image-0051.gif?v=1737413653673",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-shark-image-0085.gif?v=1737413657316",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-starfish-image-0004.gif?v=1737413660936",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-water-sports-image-0001.gif?v=1737413664130",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-water-sports-image-0012.gif?v=1737413667789",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-water-sports-image-0025.gif?v=1737413673092",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-water-sports-image-0053.gif?v=1737413676776",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/animated-whale-image-0017.gif?v=1737413680095",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bloodhound_shaking_off_water_lg_clr.gif?v=1737413683362",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/globo_waterfairy.gif?v=1737413686550",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/porthole.gif?v=1737413689982",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/water.gif?v=1737413692695",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/watereggreal.gif?v=1737413696423",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/waterplant.gif?v=1737413700187"];

const soundEffects = [
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx01.wav?v=1737395811861",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx02.wav?v=1737395815594",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx03.wav?v=1737395817559",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx04.wav?v=1737395820247",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx05.wav?v=1737395822823",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx06.wav?v=1737395825464",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx07.wav?v=1737395828593",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx08.wav?v=1737395832445",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx09.wav?v=1737395835763",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx10.wav?v=1737395838387",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx11.wav?v=1737395841255",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx12.wav?v=1737395845611",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx13.wav?v=1737395848841",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx14.wav?v=1737395851755",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx15.wav?v=1737395854770",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx16.wav?v=1737395858259",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx17.wav?v=1737395861519",
  "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/bucketsoundfx18.wav?v=1737395864518"
];

const congratssoundeffect="https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/ta-da_yrvBrlS.mp3?v=1737560317366"


window.addEventListener("load", () => {

  const backgrounds = [
    "https://cdn.glitch.global/bcd14a2b-fffd-406f-8a0c-f0ccc8eaea6f/cc025338.jpg?v=1738177746235"];
  
  const bgContainer = document.getElementById("background");
  if (bgContainer) {
    bgContainer.style.backgroundImage = `url(${backgrounds[0]})`;
  } else {
    console.error("Background container not found!");
  }
});


let flood = {
  serverURL: "https://brain.melonking.net",
  texture: "https://melonking.net/images/flood-water.png",
  maxLevel: 100,
  bilgeDelay: 10, 
  changeStep: 1.8,
  level: 100,
  lastBilge: 0
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    location.reload();
  }
});

window.addEventListener("DOMContentLoaded", () => {

  document.body.insertAdjacentHTML(
    "beforeend",
    `<svg id="flood" viewBox="0 24 150 450" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v450h-352z" />
        <pattern id="water" patternUnits="userSpaceOnUse" width="314" height="98">
          <image xlink:href="${flood.texture}" x="0" y="0" width="314" height="98"></image>
        </pattern>
      </defs>
      <g class="wave">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="url(#water)" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="url(#water)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="url(#water)" />
      </g>
    </svg>`
  );
  
  const leaderboardContainer = document.getElementById('leaderboard-container');
leaderboardContainer.style.overflowY = 'auto';


  const floodElement = document.getElementById("flood");
  floodElement.style.display = "block"; 

setInterval(updateFloodLevel, 100);

floodElement.addEventListener("click", () => {
  playSound("bilge");
  doBilge();
  showPopup(); 
});
});

let idleTimeout;

function resetIdleTimer() {
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    if (!splashScreen || splashScreen.style.display !== 'block') {
      location.reload(); 
    }
  }, 2 * 60 * 1000); // 
}


['mousemove', 'keydown', 'click'].forEach((event) => {
  document.addEventListener(event, resetIdleTimer);
});


resetIdleTimer();


function updateFloodLevel() {
  if (flood.level < 100) {
    flood.level += 0.15; // Gradual refill when idle
  }
  const waterPosition = 100 - flood.level;
  document.getElementById("flood").style.top = `${waterPosition}%`;

  if (flood.level > 100) {
    displayFloodMessage("");
  } else if (flood.level > 90) {
    displayFloodMessage("The flood is receding!");
  } else if (flood.level > 80) {
    displayFloodMessage("Keep going!");
  } else if (flood.level > 70) {
    displayFloodMessage("You're doing great!");
  } else if (flood.level > 60) {
    displayFloodMessage("Almost halfway!");
  } else if (flood.level > 50) {
    displayFloodMessage("The water has receded so much!");
  } else if (flood.level > 40) {
    displayFloodMessage("Good job!");
  } else if (flood.level > 30) {
    displayFloodMessage("So close!");
  } else if (flood.level > 20) {
    displayFloodMessage("Almost there!");
  } else if (flood.level > 10) {
    displayFloodMessage("You've nearly done it!");
  } else if (flood.level > 0) {
    displayFloodMessage("Good job!");
  } else {
    displayFloodMessage("Warning: Severe flooding!");
  }
if (flood.level < 5) {
  endGame();
}
}

function doBilge() {
  if (Date.now() - flood.lastBilge < flood.bilgeDelay) return;

  flood.lastBilge = Date.now();
  const previousLevel = flood.level;
  flood.level = Math.max(flood.level - flood.changeStep, 0); 
  updateFloodLevel();
  playSound(); 
}

let soundCooldown = false;

function playSound() {
  if (soundCooldown) return; 

  soundCooldown = true; 
  setTimeout(() => (soundCooldown = false), 400); 

  const randomIndex = Math.floor(Math.random() * soundEffects.length);
  const randomSound = soundEffects[randomIndex];
  
  const audio = new Audio(randomSound);
  audio.play();
}


function displayFloodMessage(message) {
  let messageBox = document.getElementById("flood-messages");
  if (!messageBox) {
    messageBox = document.createElement("div");
    messageBox.id = "flood-messages";
    messageBox.style.position = "fixed";
    messageBox.style.bottom = "10px";
    messageBox.style.left = "10px";
    messageBox.style.color = "white"; 
    messageBox.style.fontSize = "1.2rem";
    messageBox.style.zIndex = "2000"; 
    messageBox.style.userSelect = "none";  
    document.body.appendChild(messageBox);
  }
  

  messageBox.textContent = message;
}


const gridSize = 10; 
const popups = []; 

document.getElementById("play-button").addEventListener("click", () => {
  document.getElementById("splash-screen").style.display = "none";
  startGame();
});

let timer;
let elapsedMilliseconds = 0;

let clickCount = 0;

function startGame() {
  elapsedMilliseconds = 0;
  timer = setInterval(() => {
    elapsedMilliseconds += 10; 

    const seconds = Math.floor(elapsedMilliseconds / 1000);
    const milliseconds = Math.floor((elapsedMilliseconds % 1000) / 10); 

    const formattedTime = `0${seconds}.${milliseconds.toString().padStart(2, "0")}`;
    document.getElementById("time-value").textContent = formattedTime;
  }, 10);

  const clickMessage = document.getElementById("click-message");
  clickMessage.style.display = "block";


  document.body.addEventListener("click", () => {
    clickCount++;
if (clickCount >= 5) {
  clickMessage.classList.add("hidden"); 
  setTimeout(() => {
    clickMessage.style.display = "none";
  }, 1000);
    }
  });
}

function endGame() {
  if (!congratsSoundPlayed) { 
    clearInterval(timer); 
    playCongratsSound(); 
    congratsSoundPlayed = true;
  }
  showCongratsScreen(); 
}


function playCongratsSound() {
  const audio = new Audio(congratssoundeffect);
  audio.play();
  displayCongratsScreenGIFs();
}

function showCongratsScreen() {
  const congratsScreen = document.getElementById('congrats-screen');
  congratsScreen.style.display = 'block';


  const finalTime = document.getElementById('final-time');
  finalTime.textContent = document.getElementById('time-value').textContent;

  const submitButton = document.getElementById('submit-score-button');

  submitButton.replaceWith(submitButton.cloneNode(true));
  const newSubmitButton = document.getElementById('submit-score-button');

 
  newSubmitButton.addEventListener('click', () => {
    const inputField = document.getElementById('name-input');
    const name = inputField.value.trim();

    if (!name) {
      alert('Please enter a valid name.');
      return;
    }

    saveLeaderboard(name); 
    congratsScreen.style.display = 'none';
  const splashScreen = document.getElementById("splash-screen");
  splashScreen.style.display = "flex"; 
  splashScreen.style.position = "fixed"; 
    resetGame();
  });
}

function resetGame() {
  flood.level = 100;
  updateFloodLevel();
  congratsSoundPlayed = false; 
  document.getElementById('name-input').value = "";
}

function showPopup() {
  if (flood.level < 100) {
    const popup = document.createElement("div");
    popup.classList.add("popup", "xp-window", "active"); 
    popup.style.position = "absolute";
    popup.style.top = `${Math.random() * (100 - flood.level)}%`;
    popup.style.left = `${Math.random() * 90}%`;


    const popupWidth = Math.random() * 150 + 100;
    const popupHeight = Math.random() * 50 + 100;
    popup.style.width = `${popupWidth}px`;
    popup.style.height = `${popupHeight}px`;
    popup.style.zIndex = "3000";


    const fact = facts[Math.floor(Math.random() * facts.length)];
    const background = popupbackgrounds[Math.floor(Math.random() * popupbackgrounds.length)];

    popup.style.backgroundImage = `url(${background})`;
    popup.style.backgroundSize = "cover";


    const textClasses = ["font-arial", "font-pinyon", "font-verdana", "font-times-italic", "font-times"];
    const randomClass = textClasses[Math.floor(Math.random() * textClasses.length)];


    const textAlign = Math.random() > 0.5 ? "left" : "center";


    const content = document.createElement('p');
    content.classList.add(randomClass);
    content.style.margin = "0";
    content.style.textAlign = textAlign;
    content.textContent = fact;

    const windowBody = document.createElement('div');
    windowBody.classList.add('window-body');
    windowBody.style.display = 'flex';
    windowBody.style.flexDirection = 'column';
    windowBody.style.alignItems = textAlign;
    windowBody.style.justifyContent = 'flex-start';
    windowBody.appendChild(content);

    popup.appendChild(windowBody);
    document.body.appendChild(popup);


    function adjustFontSize() {
      const popupHeight = popup.offsetHeight;
      let fontSize = parseInt(window.getComputedStyle(content).fontSize);
      let contentHeight = content.offsetHeight;


      while (contentHeight > popupHeight && fontSize > 8) { 
        fontSize -= 1;
        content.style.fontSize = `${fontSize}px`;
        contentHeight = content.offsetHeight; 
      }
    }


    adjustFontSize();


    setTimeout(() => popup.remove(), 5000);
  }
}

document.getElementById("leaderboard-button").addEventListener("click", () => {
  displayLeaderboardGIFs(); 
  const floodElement = document.getElementById("flood");
  if (floodElement) {
    floodElement.style.pointerEvents = "none"; 
  }
  const leaderboardScreen = document.getElementById("leaderboard-screen");
  
  leaderboardScreen.style.display = "block";
  document.getElementById("splash-screen").style.display = "none"; 


  const leaderboardList = document.getElementById("leaderboard");
  leaderboardList.innerHTML = ""; 

get(leaderboardRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const sortedData = Object.values(data).sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
      leaderboardList.innerHTML = ""; 

      sortedData.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span class="name">${entry.name}</span>
          <span class="time">${entry.time}s</span>
        `;
        leaderboardList.appendChild(listItem);
      });
    } else {
      leaderboardList.innerHTML = "<li>No scores available yet!</li>";
    }
  })
  .catch((error) => {
    console.error("Error fetching leaderboard data:", error);
    leaderboardList.innerHTML = "<li>Error loading leaderboard!</li>";
  });

});

  document.getElementById("back-button").addEventListener("click", () => {
    const floodElement = document.getElementById("flood");
    if (floodElement) {
      floodElement.style.pointerEvents = "auto"; 
    }


    const leaderboardScreen = document.getElementById("leaderboard-screen");
    leaderboardScreen.style.display = "none";

    const splashScreen = document.getElementById("splash-screen");
    splashScreen.style.display = "flex"; 
    splashScreen.style.position = "fixed"; 
  });

document.getElementById('backreload-button').addEventListener('click', () => {
  location.reload(); 
});

function displaySplashScreenGIFs() {
  const gifContainer = document.getElementById('gif-container');
  gifContainer.innerHTML = ''; 
  

  const randomGifUrl = assets[Math.floor(Math.random() * assets.length)];
 
  for (let i = 0; i < 3; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = randomGifUrl;
    imgElement.alt = 'Thirsty Robot GIF';
    gifContainer.appendChild(imgElement);
  }
}

function displayLeaderboardGIFs() {
  const leftColumn = document.getElementById('gif-left-column');
  const rightColumn = document.getElementById('gif-right-column');
  
  leftColumn.innerHTML = ''; 
  rightColumn.innerHTML = ''; 


  const randomGifUrl = assets[Math.floor(Math.random() * assets.length)];

 
  for (let i = 0; i < 5; i++) { 
    const leftGif = document.createElement('img');
    leftGif.src = randomGifUrl;
    leftGif.alt = 'Leaderboard GIF';

    const rightGif = document.createElement('img');
    rightGif.src = randomGifUrl;
    rightGif.alt = 'Leaderboard GIF';

    leftColumn.appendChild(leftGif);
    rightColumn.appendChild(rightGif);
  }
}

function displayCongratsScreenGIFs() {
  const gifContainer = document.getElementById('congrats-screen-gifs');
  

  gifContainer.innerHTML = '';


  const randomGifUrl = assets[Math.floor(Math.random() * assets.length)];


  for (let i = 0; i < 3; i++) {
    const imgElement = document.createElement('img');
    imgElement.src = randomGifUrl;
    imgElement.alt = 'Congrats GIF';
    gifContainer.appendChild(imgElement);
  }
}