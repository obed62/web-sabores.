document.querySelector('.btn.guardar').addEventListener('click', function () {
  const inputs = document.querySelectorAll('.input-estilo');

  const usuario = inputs[0].value;
  const contrasena = inputs[1].value;

  // Guardar datos en localStorage
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('contrasena', contrasena);

  // Redireccionar a otra página
  window.location.href ='menu.html'; // cambia esto al nombre real de tu archivo
});
document.querySelector('a[href="#registro"]').addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el enlace salte
  document.querySelector("#botones-verticales").style.display = "none";
  document.querySelector("#formulario-registro").style.display = "block";
});

// Guardar datos al hacer clic en "ingresar"
document.querySelector(".btn.guardar").addEventListener("click", guardarUsuario);

// Permitir Enter para guardar también
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.querySelector("#formulario-registro").style.display === "block") {
    guardarUsuario();
  }
});

function guardarUsuario() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  if (usuario && contrasena) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contrasena", contrasena);
    alert("Cuenta creada exitosamente");
    location.reload(); 
     window.location.href ='menu.html';// opcional: recarga página
  } else {
    alert("Por favor completa ambos campos");
  }
}

function mostrarContrasena() {
  const input = document.getElementById("contrasena");
  const icono = document.getElementById("toggle-icono");

  if (input.type === "password") {
    input.type = "text";
    icono.src = "img/extra/ojo2.png"; // Ícono para "ocultar"
  } else {
    input.type = "password";
    icono.src = "img/extra/ojo.png"; // Ícono para "mostrar"
  }
}

//Al hacer clic en "Ingresar" del menú
document.querySelector('a[href="#login"]').addEventListener("click", function (e) {
    e.preventDefault();

    // Ocultar los botones principales
    document.querySelector("#botones-verticales").style.display = "none";

    // Mostrar formulario
    const form = document.querySelector("#formulario-registro");
    form.classList.remove("oculto");
    form.style.display = "block";

    // Cambiar texto de los placeholders
    document.getElementById("usuario").placeholder = "Ingrese un nombre de usuario";
    document.getElementById("contrasena").placeholder = "Ingrese una contraseña";

    // Cambiar texto del botón
    document.querySelector(".btn.guardar").textContent = "Ingresar";

    // Cambiar función del botón a verificarCredenciales
    document.querySelector(".btn.guardar").onclick = verificarCredenciales;

    document.querySelector(".btn.guardar").addEventListener("click", verificarCredenciales);

    // Permitir Enter para guardar también
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && document.querySelector("#formulario-registro").style.display === "block") {
    verificarCredenciales();
  }
});
});

// Función para verificar login
function verificarCredenciales() {
    const usuarioIngresado = document.getElementById("usuario").value.trim();
    const contrasenaIngresada = document.getElementById("contrasena").value.trim();

    const usuarioGuardado = localStorage.getItem("usuario");
    const contrasenaGuardada = localStorage.getItem("contrasena");

    if (usuarioIngresado === usuarioGuardado && contrasenaIngresada === contrasenaGuardada) {
        window.location.href = "menu.html"; // Página a la que redirige si es correcto
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}