function searchMenu() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();

  const productos = document.querySelectorAll(".tarjeta, .item, .seccion, .tarjeta2");

  productos.forEach(producto => {
    const text = producto.textContent.toLowerCase();

    if (query === "") {
      // Si no hay texto, mostrar todo
      producto.style.display = "block";
    } else if (text.includes(query)) {
      // Si coincide, mostrar
      producto.style.display = "block";
    } else {
      // Si no coincide, ocultar
      producto.style.display = "none";
    }
  });
}

// Activar al hacer clic en el botón
document.getElementById("searchBtn").addEventListener("click", searchMenu);

// Activar con Enter
document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchMenu();
  }
});