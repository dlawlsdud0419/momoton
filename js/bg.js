const body = document.querySelector("body");

const RAN_IMG_NUM = 6;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    document.body.style.background = "url('images/" + `${imgNumber}` + ".jpg') no-repeat";
    console.log(document.body.style.background);
    document.body.style.backgroundSize = "100% 100%";
    
    
    
    
    
}

function getRandom(){
    const number = Math.floor(Math.random() * RAN_IMG_NUM + 1);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();