const display = document.getElementById('display');
const clickSound = document.getElementById('clickSound');
//sound when click//
function playSound() {
    clickSound.currentTime= 0;
    clickSound.play();
}
//number click//
function insert(value) {
    playSound();
    if (display.textContent == '0'){  
        if(value ==='.'){// .9->0.9//
            display.textContent='0.';
            return;
        }
        else{
            display.textContent=value;
            return;
        }
    }    
    display.textContent += value;
}
//reset 0//
function cleardisplay(){
    playSound();
    display.textContent='0';
}
//lastnumber delete//
function deletelast(){
    playSound();
    if(display.textContent.length >1){
        display.textContent=display.textContent.slice(0, -1);
    }
    else{
        cleardisplay();
    }
}
function calculate(){
    playSound();
    try{
        display.textContent=eval(display.textContent);//math calculation//
    }
    catch{
        display.textContent='Error'
    }
}