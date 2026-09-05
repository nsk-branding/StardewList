// data-achievements.js - Logros de envíos
const ACHIEVEMENTS = [
    {
        id: "polyculture",
        nombre: "Policultivo",
        emoji: "🌾",
        descripcion: "Envía 15 de cada cultivo",
        requisito: "15 de cada uno de los 28 cultivos",
        categoria: "Shipping",
        items: [
            "Parsnip", "Green Bean", "Cauliflower", "Potato", 
            "Garlic", "Kale", "Rhubarb", "Strawberry",
            "Tomato", "Corn", "Eggplant", "Hot Pepper",
            "Wheat", "Radish", "Red Cabbage", "Starfruit",
            "Blueberry", "Cranberries", "Pumpkin", "Yam",
            "Amaranth", "Artichoke", "Beet", "Bok Choy",
            "Fairy Rose", "Poppy", "Summer Spangle", "Sunflower"
        ]
    },
    {
        id: "monoculture",
        nombre: "Monocultivo",
        emoji: "📦",
        descripcion: "Envía 300 de un cultivo",
        requisito: "300 de un solo cultivo (33 opciones)",
        categoria: "Shipping",
        items: [
            "Parsnip", "Green Bean", "Cauliflower", "Potato", 
            "Garlic", "Kale", "Rhubarb", "Strawberry",
            "Tomato", "Corn", "Eggplant", "Hot Pepper",
            "Wheat", "Radish", "Red Cabbage", "Starfruit",
            "Blueberry", "Cranberries", "Pumpkin", "Yam",
            "Amaranth", "Artichoke", "Beet", "Bok Choy",
            "Fairy Rose", "Poppy", "Summer Spangle", "Sunflower",
            "Coffee Bean", "Hops", "Ancient Fruit", "Sweet Gem Berry", "Taro Root"
        ]
    },
    {
        id: "fullShipment",
        nombre: "Envío Completo",
        emoji: "⭐",
        descripcion: "Envía cada objeto de la colección",
        requisito: "1 de cada objeto en la pestaña Colección de Envíos",
        categoria: "Shipping",
        items: [] // Se llenará con los datos de SHIPPING_COLLECTION
    }
];

// Función para obtener todos los items de shipping
function getAllShippingItems() {
    const allItems = [];
    for (const page in SHIPPING_COLLECTION) {
        if (SHIPPING_COLLECTION[page].items) {
            allItems.push(...SHIPPING_COLLECTION[page].items.map(item => item.nombre));
        }
    }
    return allItems;
}

// Inicializar Full Shipment con los items de shipping
ACHIEVEMENTS.find(a => a.id === "fullShipment").items = getAllShippingItems();