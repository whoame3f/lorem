const yesBtn = document.getElementById("yes")
const heading = document.getElementById("head")
const noBtn = document.getElementById("no")

function fy() {
    //heading.innerHTML = "You clicked yes"
    noBtn.style.display = "none"
    //location.reload()
}

function move() {
    const x = Math.floor(Math.random()*200)//+1
    const y = Math.floor(Math.random()*200)//+1
    noBtn.style.top = x+"px"
    noBtn.style.left = y+"px"
    
    noBtn.style.position = "absolute"
    
}
function rain(){
    let heart = document.getElementById("container");
    let e = document.createElement('div');
    e.classList.add('drop');
    heart.appendChild(e);
    
    let left = Math.floor(Math.random() * 98);
    let duration = Math.random() * 0.5;

    e.style.left = left+'%';
    e.style.animationDuration = 1+duration+'s';
    
    setTimeout(function(){
        heart.removeChild(e)
    },1000)
}

setInterval(function(){
    rain()
},50)