const body = document.querySelector("body");
const font = document.querySelector(".weather__text");

function paintImage() {
    const image = new Image();
    if (nowhours >= 18 || (nowhours >= 0 && nowhours < 6)) {
        document.body.style.background = "url('https://source.unsplash.com/1920x1080/?night-sky,galaxy,moon,stars,space') no-repeat";
        document.body.style.backgroundSize = "cover";
        font.style.color ='#ffffff';
    } else if (nowhours <= 18 && nowhours >= 17){
        document.body.style.background = "url('https://source.unsplash.com/1920x1080/?sunset,red-sky,dusk,sunrise') no-repeat";
        document.body.style.backgroundSize = "cover";
        font.style.color ='#ffffff';
    }
    /*else if (nowhours <18 && nowhours >= 17){
        document.body.style.background = "url('https://source.unsplash.com/1920x1080/?fog,mist') no-repeat";
        document.body.style.backgroundSize = "cover";
        font.style.color ='#ffffff';
    }*/ else {
        document.body.style.background = "url('https://source.unsplash.com/1920x1080/?clear,nature') no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}

/*function getRandom(){
    const number = Math.floor(Math.random() * RAN_IMG_NUM + 1);
    return number;
}*/

function init() {
    //const randomNumber = getRandom();
    paintImage();
}

init();