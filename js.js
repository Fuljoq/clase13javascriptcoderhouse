
document.addEventListener('DOMContentLoaded', ()=>{
    const dateError = document.querySelector('[data-error="date-error"]')
    const nombreError = document.querySelector('[data-error="nombre-error"]')
    const passwordError = document.querySelector('[data-error="password-error"]')
    const birthdate = document.getElementById('birthdate').value;
    const errorDiv = document.getElementById('error');
    const contentDiv = document.getElementById('content');
    const ageVerificationDiv = document.getElementById('ageVerification');
    const boton = document.querySelector('#boton')
    const nombreInput = document.getElementById('nombre')
    const passwordInput = document.getElementById('password')
    const form = document.getElementById('form')
    debugger
    // verificarEdad()
    form.addEventListener('submit', (event)=>{
        function verificarEdad() {
    
            if (!birthdate) {
                passwordError.textContent = 'Por favor, ingrese una fecha de nacimiento válida.';
                return;
            }
        
            const birthDate = new Date(birthdate);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            const dayDifference = today.getDate() - birthDate.getDate();
            debugger
            // Ajuste de edad si la fecha actual es antes del cumpleaños de este año
            if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
                age--;
            }
        
            if (age >= 18) {
                passwordError.textContent = '';
                ageVerificationDiv.style.display = 'none';
                return true
            } else {
                passwordError.textContent = 'Lo sentimos, debes tener al menos 18 años para acceder a este contenido.';
            return false
            }
        }
        event.preventDefault()
        console.log('El usuario apretó el botón')
        function validarNombre() {
            if(nombreInput.value.trim() === ''){
                nombreError.innerText = 'Complete este campo'
                return true
            }else{
                nombreInput.value === ''
                return false
            }
            debugger
        }
        function validarPassword() {
            if(passwordInput.value.trim() === ''){
                passwordError.innerText = 'Complete este campo'
                return true
            }else{
                passwordInput.value === ''
                return false
                debugger
            }
        }
        const resultado = validarNombre() && validarPassword()
        debugger
        if (resultado) {
            console.log('Los inputs no tienen información')
        } else {
            console.log('Los inputs tienen información, puedo enviar la data')
            const data = {
                nombre : nombreInput.value.trim(),
                password : passwordInput.value.trim()
            }
            console.log(data)
            contentDiv.style.add('background-color:red')
            contentDiv.classList.remove('content')
            debugger
        }
    })
})