const propiedadesVenta = [
  {
    nombre: "Casa Moderna",
    src: "./assets/img/casa-1.jpg",
    descripcion: "Hermosa casa de 3 habitaciones y 2 baños.",
    ubicacion: "Santa Fe",
    habitaciones: 3,
    costo: 250000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento Lujo",
    src: "./assets/img/casa-2.jpg",
    descripcion: "Departamento con vista panorámica y piscina.",
    ubicacion: "Punta del Este",
    habitaciones: 2,
    costo: 300000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa Inteligente",
    src: "./assets/img/casa-3.jpg",
    descripcion: "Casa frente al mar con 4 habitaciones.",
    ubicacion: "Mar del Plata",
    habitaciones: 4,
    costo: 450000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa",
    src: "./assets/img/venta1.jpg",
    descripcion: "casa muy linda frente a la playa.",
    ubicacion: "Los Angeles",
    habitaciones: 7,
    costo: 1100000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la Playa",
    src: "./assets/img/venta2.jpg",
    descripcion: "Casa 4 habitaciones con muy buena ubicacion y piscina.",
    ubicacion: "Costa Rica",
    habitaciones: 4,
    costo: 300000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa en el Rio",
    src: "./assets/img/venta3.jpg",
    descripcion: "Casa grande con 7 habitaciones 5 baños.",
    ubicacion: "California",
    habitaciones: 7,
    costo: 650000,
    smoke: false,
    pets: true,
  },
];

function renderizarPropiedadesVenta() {
  const contenedor = document.getElementById("propiedades-venta");
  let html = "";

  for (const propiedad of propiedadesVenta) {
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

renderizarPropiedadesVenta();
