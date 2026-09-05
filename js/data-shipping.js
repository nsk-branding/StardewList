// data-shipping.js - Colección completa de envíos (TODOS los items)

const SHIPPING_COLLECTION = {
    // ============== PÁGINA 1: Cultivos y Forraje ==============
    page1: {
        titulo: "Página 1 - Cultivos y Forraje",
        items: [
            // Cultivos de Primavera
            { nombre: "Parsnip", categoria: "Crop", temporada: "Spring", valor: 35 },
            { nombre: "Green Bean", categoria: "Crop", temporada: "Spring", valor: 40 },
            { nombre: "Cauliflower", categoria: "Crop", temporada: "Spring", valor: 175 },
            { nombre: "Potato", categoria: "Crop", temporada: "Spring", valor: 80 },
            { nombre: "Garlic", categoria: "Crop", temporada: "Spring", valor: 60 },
            { nombre: "Kale", categoria: "Crop", temporada: "Spring", valor: 110 },
            { nombre: "Rhubarb", categoria: "Crop", temporada: "Spring", valor: 220 },
            { nombre: "Strawberry", categoria: "Crop", temporada: "Spring", valor: 120 },
            
            // Cultivos de Verano
            { nombre: "Tomato", categoria: "Crop", temporada: "Summer", valor: 60 },
            { nombre: "Corn", categoria: "Crop", temporada: "Summer", valor: 50 },
            { nombre: "Eggplant", categoria: "Crop", temporada: "Fall", valor: 60 },
            { nombre: "Hot Pepper", categoria: "Crop", temporada: "Summer", valor: 40 },
            { nombre: "Wheat", categoria: "Crop", temporada: "Summer", valor: 25 },
            { nombre: "Radish", categoria: "Crop", temporada: "Summer", valor: 90 },
            { nombre: "Red Cabbage", categoria: "Crop", temporada: "Summer", valor: 260 },
            { nombre: "Starfruit", categoria: "Crop", temporada: "Summer", valor: 750 },
            { nombre: "Blueberry", categoria: "Crop", temporada: "Summer", valor: 50 },
            { nombre: "Melon", categoria: "Crop", temporada: "Summer", valor: 250 },
            { nombre: "Hops", categoria: "Crop", temporada: "Summer", valor: 25 },
            
            // Cultivos de Otoño
            { nombre: "Cranberries", categoria: "Crop", temporada: "Fall", valor: 75 },
            { nombre: "Pumpkin", categoria: "Crop", temporada: "Fall", valor: 320 },
            { nombre: "Yam", categoria: "Crop", temporada: "Fall", valor: 160 },
            { nombre: "Amaranth", categoria: "Crop", temporada: "Fall", valor: 150 },
            { nombre: "Artichoke", categoria: "Crop", temporada: "Fall", valor: 160 },
            { nombre: "Beet", categoria: "Crop", temporada: "Fall", valor: 100 },
            { nombre: "Bok Choy", categoria: "Crop", temporada: "Fall", valor: 80 },
            
            // Flores (también en página 1)
            { nombre: "Fairy Rose", categoria: "Flower", temporada: "Fall", valor: 290 },
            { nombre: "Poppy", categoria: "Flower", temporada: "Summer", valor: 140 },
            { nombre: "Summer Spangle", categoria: "Flower", temporada: "Summer", valor: 90 },
            { nombre: "Sunflower", categoria: "Flower", temporada: "Summer", valor: 80 },
            { nombre: "Tulip", categoria: "Flower", temporada: "Spring", valor: 30 },
            { nombre: "Blue Jazz", categoria: "Flower", temporada: "Spring", valor: 50 },
            
            // Forraje (página 1)
            { nombre: "Wild Horseradish", categoria: "Forage", temporada: "Spring", valor: 50 },
            { nombre: "Daffodil", categoria: "Forage", temporada: "Spring", valor: 30 },
            { nombre: "Leek", categoria: "Forage", temporada: "Spring", valor: 60 },
            { nombre: "Dandelion", categoria: "Forage", temporada: "Spring", valor: 40 },
            { nombre: "Spice Berry", categoria: "Forage", temporada: "Summer", valor: 80 },
            { nombre: "Grape", categoria: "Forage", temporada: "Summer", valor: 80 },
            { nombre: "Sweet Pea", categoria: "Forage", temporada: "Summer", valor: 50 },
            { nombre: "Common Mushroom", categoria: "Forage", temporada: "Fall", valor: 40 },
            { nombre: "Wild Plum", categoria: "Forage", temporada: "Fall", valor: 80 },
            { nombre: "Hazelnut", categoria: "Forage", temporada: "Fall", valor: 90 },
            { nombre: "Blackberry", categoria: "Forage", temporada: "Fall", valor: 20 },
            { nombre: "Winter Root", categoria: "Forage", temporada: "Winter", valor: 70 },
            { nombre: "Crystal Fruit", categoria: "Forage", temporada: "Winter", valor: 150 },
            { nombre: "Snow Yam", categoria: "Forage", temporada: "Winter", valor: 100 },
            { nombre: "Crocus", categoria: "Forage", temporada: "Winter", valor: 60 },
            { nombre: "Holly", categoria: "Forage", temporada: "Winter", valor: 80 },
            { nombre: "Coconut", categoria: "Forage", temporada: "Any", valor: 100 },
            { nombre: "Cactus Fruit", categoria: "Forage", temporada: "Any", valor: 75 },
            { nombre: "Banana", categoria: "Forage", temporada: "Any", valor: 150 }
        ]
    },

    // ============== PÁGINA 2: Frutas, Flores y Productos ==============
    page2: {
        titulo: "Página 2 - Frutas, Flores y Productos Artesanales",
        items: [
            // Frutas de árbol
            { nombre: "Apple", categoria: "Fruit", temporada: "Fall", valor: 100 },
            { nombre: "Apricot", categoria: "Fruit", temporada: "Spring", valor: 50 },
            { nombre: "Orange", categoria: "Fruit", temporada: "Summer", valor: 100 },
            { nombre: "Peach", categoria: "Fruit", temporada: "Summer", valor: 140 },
            { nombre: "Pomegranate", categoria: "Fruit", temporada: "Fall", valor: 140 },
            { nombre: "Cherry", categoria: "Fruit", temporada: "Spring", valor: 80 },
            { nombre: "Ancient Fruit", categoria: "Fruit", temporada: "Any", valor: 550 },
            { nombre: "Sweet Gem Berry", categoria: "Fruit", temporada: "Fall", valor: 3000 },
            { nombre: "Mango", categoria: "Fruit", temporada: "Any", valor: 130 },
            { nombre: "Banana", categoria: "Fruit", temporada: "Any", valor: 150 },
            
            // Productos artesanales
            { nombre: "Wine", categoria: "Artisan", temporada: "Any", valor: 400 },
            { nombre: "Juice", categoria: "Artisan", temporada: "Any", valor: 150 },
            { nombre: "Jelly", categoria: "Artisan", temporada: "Any", valor: 160 },
            { nombre: "Pickles", categoria: "Artisan", temporada: "Any", valor: 100 },
            { nombre: "Mayonnaise", categoria: "Artisan", temporada: "Any", valor: 190 },
            { nombre: "Duck Mayonnaise", categoria: "Artisan", temporada: "Any", valor: 375 },
            { nombre: "Void Mayonnaise", categoria: "Artisan", temporada: "Any", valor: 275 },
            { nombre: "Cheese", categoria: "Artisan", temporada: "Any", valor: 230 },
            { nombre: "Goat Cheese", categoria: "Artisan", temporada: "Any", valor: 400 },
            { nombre: "Cloth", categoria: "Artisan", temporada: "Any", valor: 470 },
            { nombre: "Truffle Oil", categoria: "Artisan", temporada: "Any", valor: 1065 },
            { nombre: "Beer", categoria: "Artisan", temporada: "Any", valor: 200 },
            { nombre: "Pale Ale", categoria: "Artisan", temporada: "Any", valor: 300 },
            { nombre: "Mead", categoria: "Artisan", temporada: "Any", valor: 200 },
            { nombre: "Honey", categoria: "Artisan", temporada: "Any", valor: 100 },
            
            // Otros productos
            { nombre: "Coffee", categoria: "Artisan", temporada: "Any", valor: 150 },
            { nombre: "Green Tea", categoria: "Artisan", temporada: "Any", valor: 100 },
            { nombre: "Caviar", categoria: "Artisan", temporada: "Any", valor: 500 },
            { nombre: "Aged Roe", categoria: "Artisan", temporada: "Any", valor: 100 },
            
            // Huevos y leche
            { nombre: "Egg", categoria: "Animal", temporada: "Any", valor: 50 },
            { nombre: "Large Egg", categoria: "Animal", temporada: "Any", valor: 95 },
            { nombre: "Duck Egg", categoria: "Animal", temporada: "Any", valor: 95 },
            { nombre: "Void Egg", categoria: "Animal", temporada: "Any", valor: 65 },
            { nombre: "Milk", categoria: "Animal", temporada: "Any", valor: 125 },
            { nombre: "Large Milk", categoria: "Animal", temporada: "Any", valor: 190 },
            { nombre: "Goat Milk", categoria: "Animal", temporada: "Any", valor: 225 },
            { nombre: "Large Goat Milk", categoria: "Animal", temporada: "Any", valor: 345 },
            { nombre: "Wool", categoria: "Animal", temporada: "Any", valor: 340 },
            { nombre: "Duck Feather", categoria: "Animal", temporada: "Any", valor: 250 },
            { nombre: "Rabbit's Foot", categoria: "Animal", temporada: "Any", valor: 565 },
            { nombre: "Truffle", categoria: "Animal", temporada: "Any", valor: 625 }
        ]
    },

    // ============== PÁGINA 3: Recursos, Pescado y Más ==============
    page3: {
        titulo: "Página 3 - Recursos, Pescado y Varios",
        items: [
            // Recursos básicos
            { nombre: "Stone", categoria: "Resource", temporada: "Any", valor: 2 },
            { nombre: "Wood", categoria: "Resource", temporada: "Any", valor: 2 },
            { nombre: "Hardwood", categoria: "Resource", temporada: "Any", valor: 15 },
            { nombre: "Clay", categoria: "Resource", temporada: "Any", valor: 20 },
            { nombre: "Coal", categoria: "Resource", temporada: "Any", valor: 15 },
            { nombre: "Fiber", categoria: "Resource", temporada: "Any", valor: 1 },
            { nombre: "Slime", categoria: "Resource", temporada: "Any", valor: 5 },
            { nombre: "Bat Wing", categoria: "Resource", temporada: "Any", valor: 15 },
            { nombre: "Solar Essence", categoria: "Resource", temporada: "Any", valor: 40 },
            { nombre: "Void Essence", categoria: "Resource", temporada: "Any", valor: 50 },
            
            // Menas y barras
            { nombre: "Copper Ore", categoria: "Resource", temporada: "Any", valor: 5 },
            { nombre: "Iron Ore", categoria: "Resource", temporada: "Any", valor: 10 },
            { nombre: "Gold Ore", categoria: "Resource", temporada: "Any", valor: 25 },
            { nombre: "Iridium Ore", categoria: "Resource", temporada: "Any", valor: 100 },
            { nombre: "Copper Bar", categoria: "Resource", temporada: "Any", valor: 60 },
            { nombre: "Iron Bar", categoria: "Resource", temporada: "Any", valor: 120 },
            { nombre: "Gold Bar", categoria: "Resource", temporada: "Any", valor: 250 },
            { nombre: "Iridium Bar", categoria: "Resource", temporada: "Any", valor: 1000 },
            { nombre: "Refined Quartz", categoria: "Resource", temporada: "Any", valor: 50 },
            
            // Pescado (todos)
            { nombre: "Anchovy", categoria: "Fish", temporada: "Spring", valor: 30 },
            { nombre: "Bream", categoria: "Fish", temporada: "Spring", valor: 45 },
            { nombre: "Carp", categoria: "Fish", temporada: "Spring", valor: 30 },
            { nombre: "Catfish", categoria: "Fish", temporada: "Spring", valor: 200 },
            { nombre: "Chub", categoria: "Fish", temporada: "Spring", valor: 50 },
            { nombre: "Dorado", categoria: "Fish", temporada: "Spring", valor: 100 },
            { nombre: "Eel", categoria: "Fish", temporada: "Spring", valor: 85 },
            { nombre: "Ghostfish", categoria: "Fish", temporada: "Any", valor: 45 },
            { nombre: "Herring", categoria: "Fish", temporada: "Spring", valor: 30 },
            { nombre: "Largemouth Bass", categoria: "Fish", temporada: "Spring", valor: 100 },
            { nombre: "Legend", categoria: "Fish", temporada: "Spring", valor: 5000 },
            { nombre: "Red Mullet", categoria: "Fish", temporada: "Spring", valor: 75 },
            { nombre: "Sardine", categoria: "Fish", temporada: "Spring", valor: 40 },
            { nombre: "Shad", categoria: "Fish", temporada: "Spring", valor: 60 },
            { nombre: "Smallmouth Bass", categoria: "Fish", temporada: "Spring", valor: 50 },
            { nombre: "Sunfish", categoria: "Fish", temporada: "Spring", valor: 30 },
            { nombre: "Walleye", categoria: "Fish", temporada: "Spring", valor: 105 },
            { nombre: "Albacore", categoria: "Fish", temporada: "Summer", valor: 75 },
            { nombre: "Bullhead", categoria: "Fish", temporada: "Summer", valor: 75 },
            { nombre: "Halibut", categoria: "Fish", temporada: "Summer", valor: 80 },
            { nombre: "Lava Eel", categoria: "Fish", temporada: "Summer", valor: 700 },
            { nombre: "Octopus", categoria: "Fish", temporada: "Summer", valor: 150 },
            { nombre: "Perch", categoria: "Fish", temporada: "Summer", valor: 55 },
            { nombre: "Pike", categoria: "Fish", temporada: "Summer", valor: 100 },
            { nombre: "Pufferfish", categoria: "Fish", temporada: "Summer", valor: 200 },
            { nombre: "Rainbow Trout", categoria: "Fish", temporada: "Summer", valor: 65 },
            { nombre: "Red Snapper", categoria: "Fish", temporada: "Summer", valor: 50 },
            { nombre: "Salmon", categoria: "Fish", temporada: "Summer", valor: 75 },
            { nombre: "Sturgeon", categoria: "Fish", temporada: "Summer", valor: 200 },
            { nombre: "Super Cucumber", categoria: "Fish", temporada: "Summer", valor: 250 },
            { nombre: "Tuna", categoria: "Fish", temporada: "Summer", valor: 100 },
            { nombre: "Midnight Carp", categoria: "Fish", temporada: "Fall", valor: 150 },
            { nombre: "Tiger Trout", categoria: "Fish", temporada: "Fall", valor: 150 },
            { nombre: "Ice Pip", categoria: "Fish", temporada: "Winter", valor: 500 },
            { nombre: "Lingcod", categoria: "Fish", temporada: "Winter", valor: 120 },
            { nombre: "Void Salmon", categoria: "Fish", temporada: "Winter", valor: 150 },
            { nombre: "Angler", categoria: "Fish", temporada: "Fall", valor: 900 },
            { nombre: "Crimsonfish", categoria: "Fish", temporada: "Summer", valor: 1500 },
            { nombre: "Glacierfish", categoria: "Fish", temporada: "Winter", valor: 1000 },
            { nombre: "Mutant Carp", categoria: "Fish", temporada: "Any", valor: 1000 },
            { nombre: "Blobfish", categoria: "Fish", temporada: "Winter", valor: 500 },
            { nombre: "Midnight Squid", categoria: "Fish", temporada: "Winter", valor: 100 },
            { nombre: "Spook Fish", categoria: "Fish", temporada: "Winter", valor: 220 },
            { nombre: "Flounder", categoria: "Fish", temporada: "Spring", valor: 100 },
            { nombre: "Lionfish", categoria: "Fish", temporada: "Summer", valor: 100 },
            { nombre: "Stingray", categoria: "Fish", temporada: "Summer", valor: 180 },
            { nombre: "Blue Discus", categoria: "Fish", temporada: "Summer", valor: 120 },
            { nombre: "Slimejack", categoria: "Fish", temporada: "Any", valor: 100 }
        ]
    }
};

// Función para obtener todos los items de shipping en un solo array
function getAllShippingItems() {
    const allItems = [];
    for (const page in SHIPPING_COLLECTION) {
        if (SHIPPING_COLLECTION[page].items) {
            allItems.push(...SHIPPING_COLLECTION[page].items);
        }
    }
    return allItems;
}

// Exportar para uso en otras páginas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SHIPPING_COLLECTION, getAllShippingItems };
}