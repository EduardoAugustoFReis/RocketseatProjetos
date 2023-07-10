import sounds from "./sounds.js";

const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");

let timeOut;

const buttonTree = document.querySelector(".tree");
const buttonCloud = document.querySelector(".cloud");
const buttonHouse = document.querySelector(".house");
const buttonFire = document.querySelector(".fire");

const bgSound = sounds()

function countdown(){
  timeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    if(minutes <=0){ // ponto de parada
      secondsDisplay.textContent = "00";
      return;
    }

    if( seconds <= 0 ) {
      seconds = 60;
      minutesDisplay.textContent = String(minutes - 1).padStart(2,"0"); // atualiza os minutos para menos 1
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2,"0"); // atualiza os segundos para menos 1
    
    countdown()
  }, 1000)
}

function updateTimePlus(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
}

function updateTimeMinus(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  
  if(minutesDisplay.textContent <= 0){
    minutesDisplay.textContent = "00"
  }
}

buttonPlay.addEventListener("click", function(){
  countdown();
});

buttonStop.addEventListener("click", function(){
  clearTimeout(timeOut); // parada da função setTimeout
})

buttonPlus.addEventListener("click", function(){
  updateTimePlus();
})

buttonMinus.addEventListener("click", function(){
  updateTimeMinus();
})

buttonTree.addEventListener("click", function(){
  bgSound.pressButtonTree()
})

buttonCloud.addEventListener("click", function(){
  bgSound.pressButtonCloud();
})

buttonHouse.addEventListener("click", function(){
  bgSound.pressButtonHouse();
})

buttonFire.addEventListener("click", function(){
  bgSound.pressButtonFire();
})
