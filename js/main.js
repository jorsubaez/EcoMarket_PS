// main.js
document.addEventListener('DOMContentLoaded', () => {

    // --- SE HAN ELIMINADO LOS FETCH DE HEADER Y FOOTER ---
    // Esa tarea ahora la gestiona exclusivamente layout.js

    const gridContainer = document.getElementById('template-grid-productos');

    if (gridContainer) {
        // Lista completa de tus productos y sus imágenes
        const productosDummy = [
            {
                nombre: "Naranjas ecológicas",
                origen: "Gran Canaria",
                productor: "Ana Productora",
                precio: "2,50 €/kg",
                unidad: "kg",
                imagen: "Imagenes/naranja.png"
            },
            {
                nombre: "Plátanos ecológicos",
                origen: "Gran Canaria",
                productor: "Ana Productora",
                precio: "1,80 €/kg",
                unidad: "kg",
                imagen: "Imagenes/platano.png"
            },
            {
                nombre: "Tomates",
                origen: "Gran Canaria",
                productor: "Ana Productora",
                precio: "4,00 €/kg",
                unidad: "kg",
                imagen: "Imagenes/tomate.png"
            },
            {
                nombre: "Lechuga romana",
                origen: "Galicia",
                productor: "Carlos Agricultor",
                precio: "1,20 €/unidad",
                unidad: "unid.",
                imagen: "Imagenes/lechuga.png"
            },
            {
                nombre: "Zanahorias orgánicas",
                origen: "Galicia",
                productor: "Carlos Agricultor",
                precio: "1,50 €/pack",
                unidad: "pack",
                imagen: "Imagenes/zanahoria.png"
            },
            {
                nombre: "Miel pura de abeja",
                origen: "Galicia",
                productor: "Carlos Agricultor",
                precio: "6,50 €/unidad",
                unidad: "unid.",
                imagen: "Imagenes/miel.png"
            },
            {
                nombre: "Huevos camperos",
                origen: "Fontanales",
                productor: "Finca La Vega",
                precio: "3,20 €/pack",
                unidad: "pack",
                imagen: "Imagenes/Huevos.png"
            },
            {
                nombre: "Fresas de temporada",
                origen: "Fontanales",
                productor: "Finca La Vega",
                precio: "4,50 €/kg",
                unidad: "kg",
                imagen: "Imagenes/fresas.png"
            },
            {
                nombre: "Aceite de Oliva Virgen Extra",
                origen: "Fontanales",
                productor: "Finca La Vega",
                precio: "8,90 €/l",
                unidad: "l",
                imagen: "Imagenes/aceite.png"
            },
            {
                nombre: "Aguacate Hass eco",
                origen: "Madrid",
                productor: "Cosechas del Sol",
                precio: "5,50 €/kg",
                unidad: "kg",
                imagen: "Imagenes/aguacates.png"
            },
            {
                nombre: "Cebollas de cultivo local",
                origen: "Madrid",
                productor: "Cosechas del Sol",
                precio: "1,10 €/kg",
                unidad: "kg",
                imagen: "Imagenes/cebollas.png"
            },
            {
                nombre: "Manzanas Reinetas",
                origen: "Madrid",
                productor: "Cosechas del Sol",
                precio: "2,10 €/kg",
                unidad: "kg",
                imagen: "Imagenes/manzanas.png"
            }
        ];

        let tarjetasHTML = '';

        productosDummy.forEach(producto => {
            tarjetasHTML += `
                <article class="producto-card-mockup">
                    <div class="imagen-producto-dummy">
                        <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:100%; object-fit: cover;">
                    </div>
                    <div class="info-producto" style="padding: 16px;">
                        <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--text);">${producto.nombre}</h4>
                        <p style="margin: 3px 0; color: var(--muted); font-size: .92rem;">Origen: ${producto.origen}</p>
                        <p style="margin: 3px 0; color: var(--muted); font-size: .92rem;">Productor: ${producto.productor}</p>
                        <p class="precio-destacado" style="font-weight: 900; font-size: 1.25rem; color: var(--primary-green); margin: 12px 0 10px;">${producto.precio}</p>
                        
                        <div class="controles-compra" style="display:flex; align-items:center; gap: 10px; margin-bottom: 12px;">
                            <input class="input-cantidad" type="number" value="1" min="1" style="width: 70px; padding: 10px; border: 1px solid var(--border-strong); border-radius: 12px; text-align:center;">
                            <button class="btn-verde-comprar" style="width: 100%; border: none; border-radius: 999px; padding: 12px 14px; background: var(--primary-green); color: #fff; font-weight: 900; cursor:pointer;">Añadir carrito</button>
                        </div>
                    </div>
                </article>
            `;
        });

        gridContainer.innerHTML = tarjetasHTML;
    }
});