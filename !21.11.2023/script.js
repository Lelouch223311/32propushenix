
/* //! Vajno
let ball = document.getElementById('#ball')

ball.onmousedown = function(event){
    ball.style.position = 'absolute';
    ball.style.zIndex = 150;

    document.body.append(ball)



    moveAt(event.pageX, event.pageY)

    function moveAt(pageX,pageY){
        ball.style.left = pageX - ball.offsetWidth/2 + 'px';
        ball.style.top = pageY - ball.offsetHeight/2 + 'px';
    }
};

ball.ondragstart = function close(){
    return false;
}
close()
*/ //!

/* //* Не работает
let box = document.querySelectorAll('.box')

box.forEach(item => {
    let img = document.createElement('img')
    img.src = './ball.svg'
    item.appendChild(img)
})
*/ //*




