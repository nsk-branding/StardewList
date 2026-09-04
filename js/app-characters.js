// app-characters.js - Villagers logic with detailed schedules
(function() {
    "use strict";

    const cardsContainer = document.getElementById('cards-container');
    const filterInput = document.getElementById('filter-input');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    function createGiftList(items, className) {
        if (!items || items.length === 0) {
            return '<span style="color: #999; font-style: italic;">None</span>';
        }
        return `<ul class="gift-list">${items.map(item => 
            `<li class="${className}">${item}</li>`
        ).join('')}</ul>`;
    }

    function formatSchedule(horarios) {
        let html = '<div class="schedule-details">';
        
        const seasons = {
            primavera: '🌱 Spring',
            verano: '☀️ Summer',
            otonio: '🍂 Fall',
            invierno: '❄️ Winter'
        };

        for (const [seasonKey, seasonData] of Object.entries(horarios)) {
            html += `<div class="season-schedule">`;
            html += `<div class="season-title">${seasons[seasonKey] || seasonKey}</div>`;
            
            for (const [condition, schedule] of Object.entries(seasonData)) {
                const conditionLabel = {
                    normal: '☀️ Normal',
                    lluvia: '🌧️ Rainy',
                    domingo: '📅 Sunday',
                    martes: '📅 Tuesday',
                    jueves: '📅 Thursday',
                    viernes: '📅 Friday',
                    sabado: '📅 Saturday',
                    lunes: '📅 Monday',
                    miercoles: '📅 Wednesday'
                }[condition] || condition;

                html += `<div class="schedule-condition">`;
                html += `<span class="condition-label">${conditionLabel}:</span>`;
                html += `<span class="schedule-text">${schedule.replace(/\n/g, '<br>')}</span>`;
                html += `</div>`;
            }
            html += `</div>`;
        }
        
        html += '</div>';
        return html;
    }

    function renderCards(personajes) {
        cardsContainer.innerHTML = '';

        if (!personajes || personajes.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 villagers';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${personajes.length} villagers`;

        const fragment = document.createDocumentFragment();

        personajes.forEach(personaje => {
            const card = document.createElement('div');
            card.className = 'villager-card';

            // Información básica
            let infoHtml = `
                <div class="card-header">
                    <div class="card-name">👤 ${personaje.nombre}</div>
                </div>
                <div class="card-info">
                    <div class="info-item">🎂 Birthday: ${personaje.cumpleanos || 'Unknown'}</div>
                    <div class="info-item">👨‍👩‍👧‍👦 Family: ${personaje.familia || 'Unknown'}</div>
                </div>
            `;

            // Horarios detallados
            if (personaje.horarios) {
                infoHtml += `<div class="schedule-section">`;
                infoHtml += `<div class="schedule-title">📅 Schedule</div>`;
                infoHtml += formatSchedule(personaje.horarios);
                infoHtml += `</div>`;
            }

            // Gustos
            infoHtml += `
                <div class="gift-section">
                    <div class="gift-section-title" style="color: var(--love-color);">❤️ Loves (+80)</div>
                    ${createGiftList(personaje.gustos.ama, 'love')}
                </div>
                
                <div class="gift-section">
                    <div class="gift-section-title" style="color: var(--like-color);">👍 Likes (+45)</div>
                    ${createGiftList(personaje.gustos.gusta, 'like')}
                </div>
                
                <div class="gift-section">
                    <div class="gift-section-title" style="color: var(--neutral-color);">😐 Neutral (+20)</div>
                    ${createGiftList(personaje.gustos.neutral, 'neutral')}
                </div>
                
                <div class="gift-section">
                    <div class="gift-section-title" style="color: var(--dislike-color);">👎 Dislikes (-20)</div>
                    ${createGiftList(personaje.gustos.disgusta, 'dislike')}
                </div>
                
                <div class="gift-section">
                    <div class="gift-section-title" style="color: var(--hate-color);">💔 Hates (-40)</div>
                    ${createGiftList(personaje.gustos.odia, 'hate')}
                </div>
            `;

            card.innerHTML = infoHtml;
            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    }

    function filterCharacters(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching for:', search);
        
        if (search === '') {
            renderCards(PERSONAJES);
            return;
        }

        const filtered = PERSONAJES.filter(personaje => {
            const nameMatch = personaje.nombre.toLowerCase().includes(search);

            let giftMatch = false;
            for (const category in personaje.gustos) {
                const items = personaje.gustos[category];
                if (Array.isArray(items)) {
                    for (const item of items) {
                        if (item.toLowerCase().includes(search)) {
                            giftMatch = true;
                            break;
                        }
                    }
                }
                if (giftMatch) break;
            }

            return nameMatch || giftMatch;
        });

        console.log('✅ Found:', filtered.length, 'results');
        renderCards(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', function(e) {
        filterCharacters(e.target.value);
    });

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterCharacters(e.target.value);
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterCharacters(filterInput.value);
        });
    }

    // Initial render
    console.log('🎮 Initial render with', PERSONAJES.length, 'villagers');
    renderCards(PERSONAJES);
})();