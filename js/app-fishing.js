// app-fishing.js - Fishing guide logic
(function() {
    "use strict";

    const cardsContainer = document.getElementById('fishing-cards');
    const filterInput = document.getElementById('filter-input');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    // Get unique values for filter dropdowns
    const seasons = [...new Set(FISH_DATA.flatMap(f => f.temporada))].sort();
    const locations = [...new Set(FISH_DATA.map(f => f.ubicacion))].sort();
    const weathers = [...new Set(FISH_DATA.map(f => f.clima))].sort();

    function createFishCard(fish) {
        // Generate difficulty stars
        const difficultyStars = (difficulty) => {
            const stars = Math.floor(difficulty / 20);
            return '⭐'.repeat(Math.min(stars, 5)) + '☆'.repeat(Math.max(0, 5 - Math.min(stars, 5)));
        };

        return `
            <div class="fish-card">
                <div class="fish-header">
                    <div class="fish-name">🐟 ${fish.nombre}</div>
                    <div class="fish-value">${fish.valor}g</div>
                </div>
                <div class="fish-info">
                    <div class="fish-detail">
                        <span class="detail-label">📅 Seasons:</span>
                        <span class="detail-value">${fish.temporada.join(', ')}</span>
                    </div>
                    <div class="fish-detail">
                        <span class="detail-label">📍 Location:</span>
                        <span class="detail-value">${fish.ubicacion}</span>
                    </div>
                    <div class="fish-detail">
                        <span class="detail-label">🌤️ Weather:</span>
                        <span class="detail-value">${fish.clima}</span>
                    </div>
                    <div class="fish-detail">
                        <span class="detail-label">🕐 Time:</span>
                        <span class="detail-value">${fish.hora}</span>
                    </div>
                    <div class="fish-detail">
                        <span class="detail-label">🎯 Difficulty:</span>
                        <span class="detail-value">${difficultyStars(fish.dificultad)} (${fish.dificultad})</span>
                    </div>
                    <div class="fish-detail">
                        <span class="detail-label">📏 Size:</span>
                        <span class="detail-value">${fish.tamaño_min} - ${fish.tamaño_max} in</span>
                    </div>
                    <div class="fish-detail fish-description">
                        <span class="detail-label">📝 Description:</span>
                        <span class="detail-value">${fish.descripcion}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderFishingData(fishData) {
        cardsContainer.innerHTML = '';

        if (!fishData || fishData.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 fish';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${fishData.length} fish`;

        const fragment = document.createDocumentFragment();

        fishData.forEach(fish => {
            const card = document.createElement('div');
            card.className = 'fish-card';
            card.innerHTML = createFishCard(fish);
            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    }

    function filterFishingData(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching fish for:', search);

        if (search === '') {
            renderFishingData(FISH_DATA);
            return;
        }

        const filtered = FISH_DATA.filter(fish => {
            const nameMatch = fish.nombre.toLowerCase().includes(search);
            const seasonMatch = fish.temporada.some(s => s.toLowerCase().includes(search));
            const locationMatch = fish.ubicacion.toLowerCase().includes(search);
            const descriptionMatch = fish.descripcion.toLowerCase().includes(search);
            const weatherMatch = fish.clima.toLowerCase().includes(search);
            
            return nameMatch || seasonMatch || locationMatch || descriptionMatch || weatherMatch;
        });

        console.log('✅ Found:', filtered.length, 'fish');
        renderFishingData(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', function(e) {
        filterFishingData(e.target.value);
    });

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterFishingData(e.target.value);
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterFishingData(filterInput.value);
        });
    }

    // Initial render
    console.log('🎣 Initial render with', FISH_DATA.length, 'fish');
    renderFishingData(FISH_DATA);
})();