document.addEventListener("DOMContentLoaded", function() {
    const enviar = document.getElementById("enviar");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const fechaNacimiento = document.getElementById("fechaNacimiento");

    enviar.addEventListener("click", function() {
        const datos = {
            nombre: nombre.value,
            apellido: apellido.value,
            fechaNacimiento: fechaNacimiento.value
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
});
