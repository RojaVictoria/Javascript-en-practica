//LLamar a los botones
let btnSuma = document.getElementById("btn-sumar");
let btnResta = document.getElementById("btn-restar");

//Función suma
btnSuma.addEventListener('click', function suma() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    let resultado = Number.parseInt(num1) + Number.parseInt(num2);
    document.querySelector(".resultado").innerHTML = resultado;
});

//Función resta
btnResta.addEventListener('click', function resta() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    let resultado = Number.parseInt(num1) - Number.parseInt(num2);
    if (resultado < 0) {
        resultado = 0
    }
    document.querySelector(".resultado").innerHTML = resultado;
});