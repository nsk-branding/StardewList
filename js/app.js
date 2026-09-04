// app.js - Items logic
(function() {
    "use strict";

    const tbody = document.getElementById('table-body');
    const filterInput = document.getElementById('filter-input');
    const counterSpan = document.getElementById('result-counter');
    const emptyMessage = document.getElementById('empty-message');
    const searchButton = document.querySelector('.search-button');

    function renderItems(items) {
        tbody.innerHTML = '';

        if (!items || items.length === 0) {
            emptyMessage.style.display = 'block';
            counterSpan.textContent = '0 items';
            return;
        }

        emptyMessage.style.display = 'none';
        counterSpan.textContent = `${items.length} items`;

        const fragment = document.createDocumentFragment();

        items.forEach(item => {
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.className = 'item-name';
            tdName.textContent = item.nombre;

            const tdId = document.createElement('td');
            const spanId = document.createElement('span');
            spanId.className = 'item-id';
            spanId.textContent = item.id;
            tdId.appendChild(spanId);

            const tdValue = document.createElement('td');
            tdValue.className = 'item-value';
            tdValue.textContent = item.valor;

            tr.appendChild(tdName);
            tr.appendChild(tdId);
            tr.appendChild(tdValue);
            fragment.appendChild(tr);
        });

        tbody.appendChild(fragment);
    }

    function filterItems(text) {
        const search = text.trim().toLowerCase();
        console.log('🔍 Searching items for:', search);
        
        if (search === '') {
            renderItems(ITEMS);
            return;
        }

        const filtered = ITEMS.filter(item => {
            const nameMatch = item.nombre.toLowerCase().includes(search);
            const idMatch = String(item.id).includes(search);
            const valueMatch = String(item.valor).includes(search);
            return nameMatch || idMatch || valueMatch;
        });

        console.log('✅ Found items:', filtered.length);
        renderItems(filtered);
    }

    // Event: input (while typing)
    filterInput.addEventListener('input', function(e) {
        filterItems(e.target.value);
    });

    // Event: Enter key
    filterInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterItems(e.target.value);
        }
    });

    // Event: Search button click
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            filterItems(filterInput.value);
        });
    }

    // Initial render
    console.log('🎮 Initial items render');
    renderItems(ITEMS);
})();