const text = document.getElementById('text')
const bird1 = document.getElementById('bird1')
const bird2 = document.getElementById('bird2')
const forest = document.getElementById('forest')
const rocks = document.getElementById('rocks')
const water = document.getElementById('water')
const exp = document.getElementById('exp')
const header = document.querySelector('.header')


window.addEventListener('scroll' , function(){
    let x = window.scrollY
    console.log(x);
    text.style.top = 50 + (x/ -2) + '%'
    bird1.style.left = x/2 + 'px'
    bird1.style.top = x/20 + 'px'
    bird2.style.left = x/-2 + 'px'
    bird2.style.top = x/20 + 'px'
    exp.style.marginTop = x/0.5 + 'px'
    rocks.style.top = x/8 + 'px'
    forest.style.top = x/2 + 'px'
    header.style.top = x/2 + 'px'
})