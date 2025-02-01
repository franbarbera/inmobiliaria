const propiedadesAlquiler = [
  {
    nombre: "Casa alquiler",
    src: "./assets/img/alquiler-1.jpg",
    descripcion: "Hermosa casa de 4 habitaciones y 2 baños.",
    ubicacion: "maldonado",
    habitaciones: 2,
    costo: 1500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en campo",
    src: "./assets/img/alquiler-2.jpeg",
    descripcion: "Casa en el campo con piscina.",
    ubicacion: "maldonado",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en Montaña",
    src: "./assets/img/alquiler-3.jpg",
    descripcion: "Casa con vistas a montaña.",
    ubicacion: "Anorra",
    habitaciones: 3,
    costo: 1800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna",
    src: "./assets/img/alquiler-4.jpg",
    descripcion: "Casa con 3 dormitorios 2 baños.",
    ubicacion: "Santiago",
    habitaciones: 3,
    costo: 2400,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa ",
    src: "./assets/img/alquiler-5.webp",
    descripcion: "Casa 4 habitaciones y piscina.",
    ubicacion: "Santiago las condes",
    habitaciones: 4,
    costo: 1900,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa cerca de playa",
    src: "./assets/img/alquiler-6.webp",
    descripcion: "Linda casa con gimnasio y piscina.",
    ubicacion: "Punta del Este",
    habitaciones: 2,
    costo: 2500,
    smoke: true,
    pets: true,
  },
];

function renderizarPropiedadesAlquiler() {
  const contenedor = document.getElementById("propiedades-alquiler");
  let html = "";

  for (const propiedad of propiedadesAlquiler) {
    html += `
            <div class="card">
                <img src="${propiedad.src}" alt="${
      propiedad.nombre
    }" class="card-img">
                <h3>${propiedad.nombre}</h3>
                <p><strong>Descripción:</strong> ${propiedad.descripcion}</p>
                <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                <p><strong>Precio:</strong> $${propiedad.costo}</p>
                <p>${
                  propiedad.smoke
                    ? "🚬 Se permite fumar"
                    : "🚭 No se permite fumar"
                }</p>
                <p>${
                  propiedad.pets
                    ? "🐶 Se permiten mascotas"
                    : "🚫 No se permiten mascotas"
                }</p>
            </div>
        `;
  }

  contenedor.innerHTML = html;
}

renderizarPropiedadesAlquiler();
