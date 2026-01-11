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
  "./popupbackground/DeerandWater.gif",
  "./popupbackground/Dolphins_in_water.gif",
  "./popupbackground/Waterf_1.gif",
  "./popupbackground/anim_waterlelie.gif",
  "./popupbackground/animated-aquarium-and-fish-bowl-image-0003.gif",
  "./popupbackground/animated-beach-image-0023.gif",
  "./popupbackground/animated-fish-image-0176.gif",
  "./popupbackground/animated-fish-image-0243.gif",
  "./popupbackground/animated-fish-image-0365.gif",
  "./popupbackground/animated-gifs-water-04.gif.pagespeed.ce.aif_akUFqd.gif",
  "./popupbackground/animated-gifs-water-14.gif.pagespeed.ce.dInbfYuKnv.gif",
  "./popupbackground/animated-gifs-waterfalls-03.gif.pagespeed.ce.xfjchK8Hjn.gif",
  "./popupbackground/animated-gifs-waterfalls-04.gif",
  "./popupbackground/animated-gifs-waterfalls-05.gif",
  "./popupbackground/animated-gifs-waterfalls-26.gif",
  "./popupbackground/animated-gifs-waterfalls-30.gif.pagespeed.ce.I22ZfP6D3H.gif",
  "./popupbackground/animated-waterfall-image-0004.gif",
  "./popupbackground/animated-waterfall-image-0009.gif",
  "./popupbackground/animated-waterfall-image-0015.gif",
  "./popupbackground/animated-waterfall-image-0016.gif",
  "./popupbackground/animated-waterfall-image-0021.gif",
  "./popupbackground/animated-whale-image-0022.gif",
  "./popupbackground/animatedwater_swan_sh.gif",
  "./popupbackground/autumlakeflowingwater.gif",
  "./popupbackground/dolfijn-water-mb_1_.gif",
  "./popupbackground/moving_waterall__new_.gif",
  "./popupbackground/water_drop.gif",
  "./popupbackground/water-glass-drip.gif",
  "./popupbackground/water028.gif",
  "./popupbackground/water60.gif",
  "./popupbackground/waterbackground.gif",
  "./popupbackground/waterkarin.gif",
  "./popupbackground/waternight.gif"
];

const assets = [
  "./assets/animated-aquarium-and-fish-bowl-image-0019.gif",
  "./assets/animated-aquarium-and-fish-bowl-image-0022.gif",
  "./assets/animated-fish-image-0002.gif",
  "./assets/animated-fish-image-0019.gif",
  "./assets/animated-fish-image-0029.gif",
  "./assets/animated-fish-image-0036.gif",
  "./assets/animated-fish-image-0037.gif",
  "./assets/animated-fish-image-0056.gif",
  "./assets/animated-fish-image-0241.gif",
  "./assets/animated-fish-image-0312.gif",
  "./assets/animated-fish-image-0353.gif",
  "./assets/animated-fish-image-0355.gif",
  "./assets/animated-fish-image-0412.gif",
  "./assets/animated-fish-image-0553.gif",
  "./assets/animated-fish-image-0575.gif",
  "./assets/animated-gifs-water-08.gif.pagespeed.ce.3E1kOGvmus.gif",
  "./assets/animated-jellyfish-image-0007.gif",
  "./assets/animated-shark-image-0027.gif",
  "./assets/animated-shark-image-0028.gif",
  "./assets/animated-shark-image-0030.gif",
  "./assets/animated-shark-image-0051.gif",
  "./assets/animated-shark-image-0085.gif",
  "./assets/animated-starfish-image-0004.gif",
  "./assets/animated-water-sports-image-0001.gif",
  "./assets/animated-water-sports-image-0012.gif",
  "./assets/animated-water-sports-image-0025.gif",
  "./assets/animated-water-sports-image-0053.gif",
  "./assets/animated-whale-image-0017.gif",
  "./assets/bloodhound_shaking_off_water_lg_clr.gif",
  "./assets/globo_waterfairy.gif",
  "./assets/porthole.gif",
  "./assets/water.gif",
  "./assets/watereggreal.gif",
  "./assets/waterplant.gif"
];

const soundEffects = [
  "./bucket%20sound%20effect/bucketsoundfx01.wav",
  "./bucket%20sound%20effect/bucketsoundfx02.wav",
  "./bucket%20sound%20effect/bucketsoundfx03.wav",
  "./bucket%20sound%20effect/bucketsoundfx04.wav",
  "./bucket%20sound%20effect/bucketsoundfx05.wav",
  "./bucket%20sound%20effect/bucketsoundfx06.wav",
  "./bucket%20sound%20effect/bucketsoundfx07.wav",
  "./bucket%20sound%20effect/bucketsoundfx08.wav",
  "./bucket%20sound%20effect/bucketsoundfx09.wav",
  "./bucket%20sound%20effect/bucketsoundfx10.wav",
  "./bucket%20sound%20effect/bucketsoundfx11.wav",
  "./bucket%20sound%20effect/bucketsoundfx12.wav",
  "./bucket%20sound%20effect/bucketsoundfx13.wav",
  "./bucket%20sound%20effect/bucketsoundfx14.wav",
  "./bucket%20sound%20effect/bucketsoundfx15.wav",
  "./bucket%20sound%20effect/bucketsoundfx16.wav",
  "./bucket%20sound%20effect/bucketsoundfx17.wav",
  "./bucket%20sound%20effect/bucketsoundfx18.wav"
];

const congratssoundeffect = "./congrats%20sound%20effect.mp3";


window.addEventListener("load", () => {
  const bgContainer = document.getElementById("background");
  if (bgContainer) {
    bgContainer.style.backgroundImage = "url('./background.jpg')";
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
