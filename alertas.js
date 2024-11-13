// Función para mostrar alerta cuando se selecciona una opción
function showAlertForPetSelection(event) {
    // Obtener el valor seleccionado
    const selectedOption = event.target.value;

    // Mostrar un mensaje personalizado según la opción seleccionada
    switch (selectedOption) {
        case 'option1':
            alert("You selected 'Any Pet'. Find your perfect companion!");
            break;
        case 'option2':
            alert("You selected 'Cat'. A furry friend is waiting for you!");
            break;
        case 'option3':
            alert("You selected 'Dog'. A loyal companion is waiting for you!");
            break;
        default:
            alert("Please make a selection.");
            break;
    }
}

// Escuchar cambios en el primer 'select' (de mascotas)
const petSelect = document.querySelector("select");  // Solo seleccionamos el primer select de mascotas
petSelect.addEventListener("change", showAlertForPetSelection);

// Si tienes más selectores, por ejemplo, el segundo para la ubicación (opcional)
// const locationInput = document.querySelector(".input-location");
// locationInput.addEventListener("change", function() {
//     alert("Location input changed!");
// });

// Variables para los contadores de Petting(s)
let pettingCount1 = 0;
let pettingCount2 = 0;
let pettingCount3 = 0;

// Función para incrementar los contadores de Petting(s)
function incrementPettingCount(pettingCount, countElement) {
    pettingCount++;
    countElement.textContent = `${pettingCount} Petting(s)`; // Actualiza el texto con el nuevo conteo
}

// Agregar evento al primer botón
document.getElementById("petting-button-1").addEventListener("click", function() {
    pettingCount1++;
    document.getElementById("petting-count-1").textContent = `${pettingCount1} Petting(s)`;
});

// Agregar evento al segundo botón
document.getElementById("petting-button-2").addEventListener("click", function() {
    pettingCount2++;
    document.getElementById("petting-count-2").textContent = `${pettingCount2} Petting(s)`;
});

// Agregar evento al tercer botón
document.getElementById("petting-button-3").addEventListener("click", function() {
    pettingCount3++;
    document.getElementById("petting-count-3").textContent = `${pettingCount3} Petting(s)`;
});


// Función para ocultar el botón Donate
function hideDonate() {
    const donateButton = document.getElementById("btn-donate");
    donateButton.style.display = "none"; // Oculta el botón
}
