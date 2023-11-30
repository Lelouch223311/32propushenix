

let elem = document.querySelectorAll('.test')

document.addEventListener('keypress',(event)=>{
    if(event.code == 'KeyR')elem.style.color = 'red';
    else if(event.code == 'KeyG')elem.style.color = 'black';
})

