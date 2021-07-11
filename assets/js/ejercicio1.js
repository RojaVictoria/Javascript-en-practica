const form = document.getElementById("formulario");

//Listener evento submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    eraseErrors();
    let name = document.getElementById("nombre");
    let subject = document.getElementById("asunto");
    let message = document.getElementById("mensaje");

    let outcome = validate(name, subject, message);

    if(outcome === true) {
        success();
    };
    //Función para limpiar errores
    function eraseErrors() {
        document.querySelector(".errorNombre").innerHTML = " ";
        document.querySelector(".errorAsunto").innerHTML = " ";
        document.querySelector(".errorMensaje").innerHTML = " ";
    };

    //Función éxito de formulario
    function success() {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito!!!";
    };

    //Validación de caracteres
    function validate(name, subject, message) {

        const onlyLetters = /([A-Za-z])/g;
        let validationComplete = true;

        if (onlyLetters.test(name.value) === false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
        validationComplete = false;
        };

        if (onlyLetters.test(subject.value) === false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        validationComplete = false;
        };

        if (onlyLetters.test(message.value) === false ) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        validationComplete = false;
        };

        return validationComplete;
    };
});