// app.js - Lógica de renderizado y filtro
(function() {
    "use strict";

    const tbody = document.getElementById('cuerpo-tabla');
    const filtroInput = document.getElementById('filtro-input');
    const contadorSpan = document.getElementById('contador-resultados');
    const mensajeVacio = document.getElementById('mensaje-vacio');

    // Función para renderizar los items
    function renderizarItems(items) {
        // Limpiar tbody
        tbody.innerHTML = '';

        if (!items || items.length === 0) {
            mensajeVacio.style.display = 'block';
            contadorSpan.textContent = '0 objetos';
            return;
        }

        mensajeVacio.style.display = 'none';
        contadorSpan.textContent = `${items.length} objetos`;

        // Usar DocumentFragment para mejor rendimiento
        const fragment = document.createDocumentFragment();

        items.forEach(item => {
            const tr = document.createElement('tr');

            // Columna Nombre
            const tdNombre = document.createElement('td');
            tdNombre.className = 'item-nombre';
            tdNombre.textContent = item.nombre;

            // Columna ID
            const tdId = document.createElement('td');
            const spanId = document.createElement('span');
            spanId.className = 'item-id';
            spanId.textContent = item.id;
            tdId.appendChild(spanId);

            // Columna Valor
            const tdValor = document.createElement('td');
            tdValor.className = 'item-valor';
            tdValor.textContent = item.valor;

            tr.appendChild(tdNombre);
            tr.appendChild(tdId);
            tr.appendChild(tdValor);
            fragment.appendChild(tr);
        });

        tbody.appendChild(fragment);
    }

    // Función de filtrado
    function filtrarItems(texto) {
        const busqueda = texto.trim().toLowerCase();
        if (busqueda === '') {
            renderizarItems(ITEMS);
            return;
        }

        const filtrados = ITEMS.filter(item => {
            const nombreMatch = item.nombre.toLowerCase().includes(busqueda);
            const idMatch = String(item.id).includes(busqueda);
            return nombreMatch || idMatch;
        });

        renderizarItems(filtrados);
    }

    // Evento de input en el campo de búsqueda
    filtroInput.addEventListener('input', function(e) {
        filtrarItems(e.target.value);
    });

    // Renderizado inicial
    renderizarItems(ITEMS);
})();