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
    nombre: "Casa en la Playa",
    src: "./assets/img/casa-3.jpg",
    descripcion: "Casa frente al mar con 4 habitaciones.",
    ubicacion: "Mar del Plata",
    habitaciones: 4,
    costo: 450000,
    smoke: true,
    pets: true,
  },
];

const propiedadesAlquiler = [
  {
    nombre: "Apartamento Centro",
    src: "./assets/img/casaA11.jpg",
    descripcion: "Apartamento cómodo en el centro de la ciudad.",
    ubicacion: "Ciudad de México",
    habitaciones: 2,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en la Montaña",
    src: "./assets/img/casaA2.jpeg",
    descripcion: "Casa en las montañas, ideal para vacaciones.",
    ubicacion: "Andorra",
    habitaciones: 3,
    costo: 1000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Loft Elegante",
    src: "./assets/img/casaA3.jpeg",
    descripcion: "Loft de lujo, ideal para personas solas.",
    ubicacion: "Barcelona",
    habitaciones: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
];

function renderizarPropiedadesVenta() {
  const contenedor = document.getElementById("propiedades-venta");
  let html = "";

  const propiedadesLimitadas = propiedadesVenta.slice(0, 3);

  for (const propiedad of propiedadesLimitadas) {
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
            propiedad.smoke ? "🚬 Se permite fumar" : "🚭 No se permite fumar"
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

function renderizarPropiedadesAlquiler() {
  const contenedor = document.getElementById("propiedades-alquiler");
  let html = "";

  const propiedadesLimitadas = propiedadesAlquiler.slice(0, 3);

  for (const propiedad of propiedadesLimitadas) {
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
            propiedad.smoke ? "🚬 Se permite fumar" : "🚭 No se permite fumar"
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
renderizarPropiedadesAlquiler();
