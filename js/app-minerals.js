// app-minerals.js - Minerals guide logic
(function() {
    "use strict";

    const cardsContainer = document.getElementById('minerals-cards');
    const filterInput = document.getElementById('filter-input');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    function createMineralCard(mineral) {
        const typeEmoji = mineral.tipo === 'Gem' ? '💎' : 
                         mineral.tipo === 'Geode' ? '🪨' : 
                         mineral.tipo === 'Bar' ? '🔨' : '⛏️';
        const valueDisplay = mineral.valor === 0 ? 'N/A' : `${mineral.valor}g`;

        return `
            <div class="mineral-card">
                <div class="mineral-header">
                    <div class="mineral-name">${typeEmoji} ${mineral.nombre}</div>
                    <div class="mineral-type">${mineral.tipo}</div>
                    <div class="mineral-value">${valueDisplay}</div>
                </div>
                <div class="mineral-info">
                    <div class="mineral-detail">
                        <span class="detail-label">📍 Location:</span>
                        <span class="detail-value">${mineral.ubicacion}</span>
                    </div>
                    <div class="mineral-detail mineral-description">
                        <span class="detail-label">📝 Description:</span>
                        <span class="detail-value">${mineral.descripcion}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderMineralsData(mineralsData) {
        cardsContainer.innerHTML = '';

        if (!mineralsData || mineralsData.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 minerals';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${mineralsData.length} minerals`;

        const fragment = document.createDocumentFragment();

        mineralsData.forEach(mineral => {
            const card = document.createElement('div');
            card.className = 'mineral-card';
            card.innerHTML = createMineralCard(mineral);
            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    }

    function filterMineralsData(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching minerals for:', search);

        if (search === '') {
            renderMineralsData(MINERALS_DATA);
            return;
        }

        const filtered = MINERALS_DATA.filter(mineral => {
            const nameMatch = mineral.nombre.toLowerCase().includes(search);
            const typeMatch = mineral.tipo.toLowerCase().includes(search);
            const locationMatch = mineral.ubicacion.toLowerCase().includes(search);
            const descriptionMatch = mineral.descripcion.toLowerCase().includes(search);
            
            return nameMatch || typeMatch || locationMatch || descriptionMatch;
        });

        console.log('✅ Found:', filtered.length, 'minerals');
        renderMineralsData(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', function(e) {
        filterMineralsData(e.target.value);
    });

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterMineralsData(e.target.value);
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterMineralsData(filterInput.value);
        });
    }

    // Initial render
    console.log('💎 Initial render with', MINERALS_DATA.length, 'minerals');
    renderMineralsData(MINERALS_DATA);
})();