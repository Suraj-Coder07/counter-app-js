let increment = document.getElementById('inc');
let show = document.getElementById('show');
let decrement = document.getElementById('dec');
let reset = document.getElementById('reset');
let count = 0;

function updateDisplay(){
    show.innerText = count;

    if(count === 0){
        decrement.disabled = true;
    } else {
        decrement.disabled = false;
    }
}


increment.addEventListener('click', () =>{
    count++
    updateDisplay();

})

decrement.addEventListener('click', () => {
        if(count > 0){
            count--;
            updateDisplay();
        }
        
})

reset.addEventListener('click', () => {
    count = 0;
    updateDisplay();

})
updateDisplay();
