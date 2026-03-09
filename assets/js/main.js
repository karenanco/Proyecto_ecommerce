const productos = [
    { id: 1, nombre: "Earl Grey Especial", precio: 12000, img: "assets/img/bergamota.png", desc: "Té negro con bergamota." },
    { id: 2, nombre: "Green Zen", precio: 10500, img: "assets/img/menta limon.png", desc: "Té verde con menta y limón." },
    { id: 3, nombre: "Berry Bloom", precio: 13000, img: "assets/img/frutos rojos.png", desc: "Infusión de frutos rojos." },
    { id: 4, nombre: "Chai Mystic", precio: 11000, img: "assets/img/zen.png", desc: "Especias orientales y té negro." },
    { id: 5, nombre: "Chamomile Calm", precio: 9500, img: "assets/img/manzanilla.png", desc: "Manzanilla pura orgánica." },
    { id: 6, nombre: "Rooibos Sunset", precio: 12500, img: "assets/img/vainilla naranja.png", desc: "Rooibos con vainilla y naranja." }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const contenedor = document.getElementById('productos-container');
const contadorCarrito = document.getElementById('cart-count');

// Función para renderizar cards
function renderizarProductos() {
    productos.forEach(prod => {
        const card = document.createElement('article');
        card.classList.add('col-12', 'col-md-6', 'col-lg-4');
        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text text-muted">${prod.desc}</p>
                    <p class="fw-bold mt-auto">$${prod.precio.toLocaleString()}</p>
                    <button class="btn btn-dark w-100 mt-2 btn-agregar" data-id="${prod.id}">Agregar</button>
                    <a href="detalle.html?id=${prod.id}" class="btn btn-link text-center">Ver más</a>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Actualizar contador en Navbar
function actualizarContador() {
    contadorCarrito.innerText = carrito.length;
}

// Evento click para agregar
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-agregar')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        const productoCargado = productos.find(p => p.id === id);
        carrito.push(productoCargado);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContador();
    }
});

// Inicializar
renderizarProductos();
actualizarContador();