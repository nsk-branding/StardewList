// app-achievements.js - Lógica de logros
(function() {
    "use strict";

    const cardsContainer = document.getElementById('achievements-cards');
    const filterInput = document.getElementById('filter-input');
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

    function calculateAchievementProgress(achievement) {
        const progress = getProgress();
        const items = achievement.items;
        let completed = 0;
        
        items.forEach(item => {
            if (progress[item]) {
                completed++;
            }
        });
        
        return {
            total: items.length,
            completed: completed,
            percentage: items.length > 0 ? Math.round((completed / items.length) * 100) : 0
        };
    }

    function renderAchievements(achievements) {
        cardsContainer.innerHTML = '';

        if (!achievements || achievements.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 achievements';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${achievements.length} achievements`;

        const fragment = document.createDocumentFragment();

        achievements.forEach(achievement => {
            const progress = calculateAchievementProgress(achievement);
            const card = document.createElement('div');
            card.className = 'achievement-card';

            card.innerHTML = `
                <div class="achievement-header">
                    <div class="achievement-title">
                        <span style="font-size: 1.5rem;">${achievement.emoji}</span>
                        <span style="font-weight: 600; color: var(--green-dark);">${achievement.nombre}</span>
                    </div>
                    <div class="achievement-status">
                        ${progress.completed === progress.total ? '✅' : '🔄'}
                    </div>
                </div>
                <div class="achievement-description">
                    ${achievement.descripcion}
                </div>
                <div class="achievement-requirement">
                    <strong>Requisito:</strong> ${achievement.requisito}
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress.percentage}%;"></div>
                </div>
                <div class="progress-text">
                    ${progress.completed} / ${progress.total} items (${progress.percentage}%)
                </div>
                <div class="achievement-items">
                    <details>
                        <summary>📋 Ver items (${progress.total})</summary>
                        <div class="items-grid">
                            ${achievement.items.map(item => {
                                const isCompleted = getProgress()[item];
                                return `<span class="item-tag ${isCompleted ? 'completed' : 'pending'}">
                                    ${isCompleted ? '✅' : '⬜'} ${item}
                                </span>`;
                            }).join('')}
                        </div>
                    </details>
                </div>
            `;

            fragment.appendChild(card);
        });

        cardsContainer.appendChild(fragment);
    }

    function filterAchievements(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching achievements for:', search);

        if (search === '') {
            renderAchievements(ACHIEVEMENTS);
            return;
        }

        const filtered = ACHIEVEMENTS.filter(achievement => {
            const nameMatch = achievement.nombre.toLowerCase().includes(search);
            const descMatch = achievement.descripcion.toLowerCase().includes(search);
            const itemMatch = achievement.items.some(item => 
                item.toLowerCase().includes(search)
            );
            return nameMatch || descMatch || itemMatch;
        });

        console.log('✅ Found:', filtered.length, 'achievements');
        renderAchievements(filtered);
    }

    // Event listeners
    filterInput.addEventListener('input', function(e) {
        filterAchievements(e.target.value);
    });

    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterAchievements(e.target.value);
        }
    });

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterAchievements(filterInput.value);
        });
    }

    // Initial render
    console.log('🏆 Initial render with', ACHIEVEMENTS.length, 'achievements');
    renderAchievements(ACHIEVEMENTS);
})();