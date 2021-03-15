const btnPad = document.querySelector('.btn-pad');

const seconds = document.getElementById("seconds");
const miliSeconds = document.getElementById("miliSeconds");

let sec = 0;
let milisec = 0;

btnPad.addEventListener('click', e => {
    let {target} = e ;
    
    if ( target.id = 'reset' ) {
        resetFunc();
    }
})
// displaying seconds
setInterval(() => {
    sec++;
    let str = sec.toString();   // convert to array 

    if (str.length === 1) {  
        seconds.innerText = '0' + sec;  
    } else {
        seconds.innerText = sec;
    }

}, 1000);

// displaying milliseconds
setInterval(() => {
    milisec++;
    let str = milisec.toString();   // convert to array

    // keep milisec < 100
    // prevent overlength of miliseconds
    if (str.length === 3) {
        milisec = 0;
        miliSeconds.innerText = '00';
    }

    if (str.length === 1) {
        miliSeconds.innerText = '0' + milisec;  
    } else {
        miliSeconds.innerText = milisec;
    }

}, 10);

resetFunc = () => {
    sec = 0;
    milisec = 0;
    seconds.innerText = '00';
    miliSeconds = '00';
}
