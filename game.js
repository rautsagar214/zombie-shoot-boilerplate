// Iteration 1: Declare variables required for this game
var seconds = document.getElementById("timer").textContent
const  gamebody = document.getElementById("game-body")
const  lives = document.getElementById("lives")
var zombieId =0;
const img = [
    "zombie-1.png",
    "zombie-2.png",
    "zombie-3.png",
    "zombie-4.png",
    "zombie-5.png",
    "zombie-6.png",
]

// Iteration 1.2: Add shotgun sound
const shotgunsound = new Audio("./assets/shotgun.wav");
// shotgunsound.volume = 0.2;

gamebody.onclick = () =>{
    shotgunsound.pause();
    shotgunsound.currentTime = 0 ;
    shotgunsound.play();
}

// Iteration 1.3: Add background sound

const backgroundSound = new Audio("./assets/bgm.mp3")
backgroundSound.play()
backgroundSound.loop = true;

// Iteration 1.4: Add lives

const maxlives = 4 ;
var noOflives = 4;


// Iteration 2: Write a function to make a zombie
 function makezombie(){
  let  randomimage= img[getRandomInt(0,img.length)]
  gamebody.innerHTML += `<img src="./assets/${randomimage}" class="zombie-image" id="zombie${zombieId}">`
  let zombie =document.getElementById("zombie"+zombieId)
  zombie.style.transform = `translateX(${getRandomInt(20,70)}vw)`;
  zombie.style.animationDuration = '${getRandomnt(2,6)}s';

  zombie.onclick = ()=>{
    zombieDestroy(zombie)
  }
 }

// Iteration 3: Write a function to check if the player missed a zombie
  function checkcollision (zombie){
if (zombie.getBoundingClientRect().top <=0){
    noOflives--;
    console.log("Getting Collided")
    return true;
}
   return false ;
  }
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
 function zombieDestroy(zombie){
    zombie.style.display="none";
    zombieId++
    makezombie()
 }
// Iteration 5: Creating timer
 var timer = setInterval(()=>{
    seconds--
    document.getElementById("timer").textContent = seconds;
    let zombie = document.getElementById("zombie"+zombieId);
    if (checkcollision(zombie)==true){
        zombieDestroy(zombie)
        if(noOflives==0){
            location.href="./game-over.html";
        }
    }
    if (seconds==0){
        location.href="./win.html";
    }
 },1000)
// Iteration 6: Write a code to start the game by calling the first zombie
     makezombie()

// Iteration 7: Write the helper function to get random integer
function getRandomInt(min , max){
    min = Math.ceil(min);   // min should be exclusive
    max = Math.floor(max);  //maximum is inclusive

    return Math.floor(Math.random()*(max-min))+min;
}