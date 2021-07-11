//Llamar a los botones
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');

//Llamar la caja
const box = document.getElementById('caja');

//Agregar un listener por botón
btn1.addEventListener('click', red)
btn2.addEventListener('click', orange)
btn3.addEventListener('click', yellow)
btn4.addEventListener('click', green)
btn5.addEventListener('click', blue)
btn6.addEventListener('click', purple)

//Funciones cambio de color por botón
function red(){
    box.setAttribute('style', 'background-color: #e53e3e; width: 500px;height: 600px')
}

function orange(){
    box.setAttribute('style', 'background-color: #dd6b20; width: 500px;height: 600px')
}

function yellow(){
    box.setAttribute('style', 'background-color: #faf089; width: 500px;height: 600px')
}

function green(){
    box.setAttribute('style', 'background-color: #48bb78; width: 500px;height: 600px')
}

function blue(){
    box.setAttribute('style', 'background-color: #81e6d9; width: 500px;height: 600px')
}

function purple(){
    box.setAttribute('style', 'background-color: #d53f8c; width: 500px;height: 600px')
}