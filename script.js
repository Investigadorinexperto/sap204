// Botón para ocultar o mostrar el sidebar
document.getElementById("toggleButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    this.classList.remove("hidden-btn");
    this.textContent = "Ocultar";
  } else {
    sidebar.classList.add("hidden");
    this.classList.add("hidden-btn");
    this.textContent = "Mostrar";
  }
});

// Función para cargar contenido dinámico en el main-content
function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error cargando la página");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("mainContent").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "mainContent"
      ).innerHTML = `<h1>Error</h1><p>No se pudo cargar el contenido.</p>`;
    });
}
