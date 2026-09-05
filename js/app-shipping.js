// app-shipping.js - Lógica de la colección de envíos
(function() {
    "use strict";

    const cardsContainer = document.getElementById('shipping-cards');
    const filterInput = document.getElementById('filter-input');
    const filterCategory = document.getElementById('filter-category');
    const filterSeason = document.getElementById('filter-season');
    const filterStatus = document.getElementById('filter-status');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    // Cargar progreso guardado
    function loadProgress() {
        try {
            const saved = localStorage.getItem('shippingProgress');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            return {};
        }
    }

    function saveProgress(progress) {
        try {
            localStorage.setItem('shippingProgress', JSON.stringify(progress));
        } catch (e) {
            console.warn('No se pudo guardar el progreso');
        }
    }

    function getProgress() {
        return loadProgress();
    }

    // Obtener todos los items de todas las páginas
    function getAllItems() {
        return getAllShippingItems();
    }

    // Alternar estado de envío
    function toggleShipped(itemName) {
        const progress = getProgress();
        progress[itemName] = !progress[itemName];
        saveProgress(progress);
        applyFilters(); // Re-renderizar
    }

    function renderShippingItems(items) {
        cardsContainer.innerHTML = '';

        if (!items || items.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 items';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${items.length} items`;

        const progress = getProgress();
        const fragment = document.createDocumentFragment();

        items.forEach(item => {
            const isShipped = progress[item.nombre] || false;
            const card = document.createElement('div');
            card.className = 'shipping-card';

            card.innerHTML = `
                <div class="shipping-header">
                    <div class="shipping-name">
                        <span class="shipping-status ${isShipped ? 'shipped' : 'pending'}">
                            ${isShipped ? '✅' : '⬜'}
                        </span>
                        <span style="font-weight: 500;">${item.nombre}</span>
                    </div>
                    <div class="shipping-value">${item.valor}g</div>
                </div>
                <div class="shipping-info">
                    <div class="shipping-detail">
                        <span class="detail-label">📂 Category:</span>
                        <span class="detail-value">${item.categoria}</span>
                    </div>
                    <div class="shipping-detail">
                        <span class="detail-label">📅 Season:</span>
                        <span class="detail-value">${item.temporada}</span>
                    </div>
                    <div class="shipping-detail">
                        <span class="detail-label">💰 Value:</span>
                        <span class="detail-value">${item.valor}g</span>
                    </div>
                </div>
                <button class="toggle-shipped-btn ${isShipped ? 'shipped' : 'pending'}" 
                        data-item="${item.nombre}">
                    ${isShipped ? '✅ Mark as Pending' : '⬜ Mark as Shipped'}
                </button>
            `;

            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);

        // Añadir event listeners a los botones
        document.querySelectorAll('.toggle-shipped-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemName = this.dataset.item;
                toggleShipped(itemName);
            });
        });
    }

    function applyFilters() {
        const search = filterInput.value.trim().toLowerCase();
        const category = filterCategory.value;
        const season = filterSeason.value;
        const status = filterStatus.value;

        const allItems = getAllItems();
        const progress = getProgress();

        let filtered = allItems;

        // Filtro por texto
        if (search !== '') {
            filtered = filtered.filter(item => 
                item.nombre.toLowerCase().includes(search) ||
                item.categoria.toLowerCase().includes(search) ||
                item.temporada.toLowerCase().includes(search)
            );
        }

        // Filtro por categoría
        if (category !== '') {
            filtered = filtered.filter(item => item.categoria === category);
        }

        // Filtro por temporada
        if (season !== '') {
            filtered = filtered.filter(item => 
                item.temporada === season || item.temporada === 'Any'
            );
        }

        // Filtro por estado
        if (status !== '') {
            const shipped = status === 'shipped';
            filtered = filtered.filter(item => 
                (progress[item.nombre] || false) === shipped
            );
        }

        console.log('🔍 Filtered items:', filtered.length);
        renderShippingItems(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', applyFilters);
    filterCategory.addEventListener('change', applyFilters);
    filterSeason.addEventListener('change', applyFilters);
    filterStatus.addEventListener('change', applyFilters);

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            applyFilters();
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', applyFilters);
    }

    // Initial render
    console.log('📦 Initial render with', getAllItems().length, 'shipping items');
    applyFilters();
})();