// app-crops.js - Crops guide logic
(function() {
    "use strict";

    const cardsContainer = document.getElementById('crops-cards');
    const filterInput = document.getElementById('filter-input');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    function createCropCard(crop) {
        const multipleHarvest = crop.multiplo_cosecha ? '✅ Yes' : '❌ No';
        const priceDisplay = crop.precio_venta === 0 ? 'N/A' : `${crop.precio_venta}g`;
        const seedPriceDisplay = crop.precio_semilla === 0 ? 'N/A' : `${crop.precio_semilla}g`;

        return `
            <div class="crop-card">
                <div class="crop-header">
                    <div class="crop-name">🌱 ${crop.nombre}</div>
                    <div class="crop-value">${priceDisplay}</div>
                </div>
                <div class="crop-info">
                    <div class="crop-detail">
                        <span class="detail-label">📅 Season:</span>
                        <span class="detail-value">${crop.temporada}</span>
                    </div>
                    <div class="crop-detail">
                        <span class="detail-label">⏳ Growth:</span>
                        <span class="detail-value">${crop.dias_crecimiento} days</span>
                    </div>
                    <div class="crop-detail">
                        <span class="detail-label">🌾 Seeds:</span>
                        <span class="detail-value">${crop.semilla}</span>
                    </div>
                    <div class="crop-detail">
                        <span class="detail-label">💰 Seed Price:</span>
                        <span class="detail-value">${seedPriceDisplay}</span>
                    </div>
                    <div class="crop-detail">
                        <span class="detail-label">🔄 Multiple Harvest:</span>
                        <span class="detail-value">${multipleHarvest}</span>
                    </div>
                    <div class="crop-detail">
                        <span class="detail-label">📦 Harvest per Plant:</span>
                        <span class="detail-value">${crop.cosecha_por_planta}</span>
                    </div>
                    <div class="crop-detail crop-description">
                        <span class="detail-label">📝 Description:</span>
                        <span class="detail-value">${crop.descripcion}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderCropsData(cropsData) {
        cardsContainer.innerHTML = '';

        if (!cropsData || cropsData.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 crops';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${cropsData.length} crops`;

        const fragment = document.createDocumentFragment();

        cropsData.forEach(crop => {
            const card = document.createElement('div');
            card.className = 'crop-card';
            card.innerHTML = createCropCard(crop);
            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    }

    function filterCropsData(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching crops for:', search);

        if (search === '') {
            renderCropsData(CROPS_DATA);
            return;
        }

        const filtered = CROPS_DATA.filter(crop => {
            const nameMatch = crop.nombre.toLowerCase().includes(search);
            const seasonMatch = crop.temporada.toLowerCase().includes(search);
            const seedMatch = crop.semilla.toLowerCase().includes(search);
            const descriptionMatch = crop.descripcion.toLowerCase().includes(search);
            
            return nameMatch || seasonMatch || seedMatch || descriptionMatch;
        });

        console.log('✅ Found:', filtered.length, 'crops');
        renderCropsData(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', function(e) {
        filterCropsData(e.target.value);
    });

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterCropsData(e.target.value);
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterCropsData(filterInput.value);
        });
    }

    // Initial render
    console.log('🌱 Initial render with', CROPS_DATA.length, 'crops');
    renderCropsData(CROPS_DATA);
})();