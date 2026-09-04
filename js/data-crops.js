// data-crops.js - Complete crops data for Stardew Valley
// Based on Stardew Valley Wiki

const CROPS_DATA = [
    // ============== SPRING CROPS ==============
    {
        nombre: "Parsnip",
        temporada: "Spring",
        dias_crecimiento: 4,
        semilla: "Parsnip Seeds",
        precio_semilla: 20,
        precio_venta: 35,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A spring root vegetable."
    },
    {
        nombre: "Green Bean",
        temporada: "Spring",
        dias_crecimiento: 10,
        semilla: "Bean Starter",
        precio_semilla: 30,
        precio_venta: 40,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A climbing plant that produces beans."
    },
    {
        nombre: "Cauliflower",
        temporada: "Spring",
        dias_crecimiento: 12,
        semilla: "Cauliflower Seeds",
        precio_semilla: 40,
        precio_venta: 175,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A large, nutritious vegetable."
    },
    {
        nombre: "Potato",
        temporada: "Spring",
        dias_crecimiento: 6,
        semilla: "Potato Seeds",
        precio_semilla: 25,
        precio_venta: 80,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A versatile root vegetable."
    },
    {
        nombre: "Garlic",
        temporada: "Spring",
        dias_crecimiento: 4,
        semilla: "Garlic Seeds",
        precio_semilla: 20,
        precio_venta: 60,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "Adds flavor to dishes."
    },
    {
        nombre: "Kale",
        temporada: "Spring",
        dias_crecimiento: 6,
        semilla: "Kale Seeds",
        precio_semilla: 35,
        precio_venta: 110,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A leafy green vegetable."
    },
    {
        nombre: "Rhubarb",
        temporada: "Spring",
        dias_crecimiento: 13,
        semilla: "Rhubarb Seeds",
        precio_semilla: 50,
        precio_venta: 220,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A tart vegetable often used in pies."
    },
    {
        nombre: "Strawberry",
        temporada: "Spring",
        dias_crecimiento: 8,
        semilla: "Strawberry Seeds",
        precio_semilla: 0,
        precio_venta: 120,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A sweet red berry."
    },
    {
        nombre: "Tulip",
        temporada: "Spring",
        dias_crecimiento: 6,
        semilla: "Tulip Bulb",
        precio_semilla: 10,
        precio_venta: 30,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A colorful spring flower."
    },
    {
        nombre: "Blue Jazz",
        temporada: "Spring",
        dias_crecimiento: 7,
        semilla: "Jazz Seeds",
        precio_semilla: 15,
        precio_venta: 50,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A fragrant blue flower."
    },

    // ============== SUMMER CROPS ==============
    {
        nombre: "Blueberry",
        temporada: "Summer",
        dias_crecimiento: 13,
        semilla: "Blueberry Seeds",
        precio_semilla: 40,
        precio_venta: 50,
        cosecha_por_planta: 3,
        multiplo_cosecha: true,
        descripcion: "A sweet blue berry."
    },
    {
        nombre: "Corn",
        temporada: "Summer/Fall",
        dias_crecimiento: 14,
        semilla: "Corn Seeds",
        precio_semilla: 75,
        precio_venta: 50,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A tall grass that produces yellow kernels."
    },
    {
        nombre: "Hops",
        temporada: "Summer",
        dias_crecimiento: 11,
        semilla: "Hops Starter",
        precio_semilla: 30,
        precio_venta: 25,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A bittering agent used in beer."
    },
    {
        nombre: "Hot Pepper",
        temporada: "Summer",
        dias_crecimiento: 5,
        semilla: "Pepper Seeds",
        precio_semilla: 20,
        precio_venta: 40,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A spicy pepper."
    },
    {
        nombre: "Melon",
        temporada: "Summer",
        dias_crecimiento: 12,
        semilla: "Melon Seeds",
        precio_semilla: 40,
        precio_venta: 250,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A large, sweet fruit."
    },
    {
        nombre: "Poppy",
        temporada: "Summer",
        dias_crecimiento: 7,
        semilla: "Poppy Seeds",
        precio_semilla: 50,
        precio_venta: 140,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A bright red flower."
    },
    {
        nombre: "Radish",
        temporada: "Summer",
        dias_crecimiento: 6,
        semilla: "Radish Seeds",
        precio_semilla: 20,
        precio_venta: 90,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A crisp root vegetable."
    },
    {
        nombre: "Red Cabbage",
        temporada: "Summer",
        dias_crecimiento: 9,
        semilla: "Red Cabbage Seeds",
        precio_semilla: 50,
        precio_venta: 260,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A dark red cabbage."
    },
    {
        nombre: "Starfruit",
        temporada: "Summer",
        dias_crecimiento: 13,
        semilla: "Starfruit Seeds",
        precio_semilla: 200,
        precio_venta: 750,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A star-shaped tropical fruit."
    },
    {
        nombre: "Summer Spangle",
        temporada: "Summer",
        dias_crecimiento: 8,
        semilla: "Spangle Seeds",
        precio_semilla: 25,
        precio_venta: 90,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A vibrant summer flower."
    },
    {
        nombre: "Sunflower",
        temporada: "Summer/Fall",
        dias_crecimiento: 8,
        semilla: "Sunflower Seeds",
        precio_semilla: 20,
        precio_venta: 80,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A tall plant with bright yellow petals."
    },
    {
        nombre: "Tomato",
        temporada: "Summer",
        dias_crecimiento: 11,
        semilla: "Tomato Seeds",
        precio_semilla: 25,
        precio_venta: 60,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A red fruit used in cooking."
    },
    {
        nombre: "Wheat",
        temporada: "Summer/Fall",
        dias_crecimiento: 4,
        semilla: "Wheat Seeds",
        precio_semilla: 5,
        precio_venta: 25,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A grain used for making flour."
    },

    // ============== FALL CROPS ==============
    {
        nombre: "Amaranth",
        temporada: "Fall",
        dias_crecimiento: 7,
        semilla: "Amaranth Seeds",
        precio_semilla: 35,
        precio_venta: 150,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A grain with purple leaves."
    },
    {
        nombre: "Artichoke",
        temporada: "Fall",
        dias_crecimiento: 8,
        semilla: "Artichoke Seeds",
        precio_semilla: 15,
        precio_venta: 160,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A thorny vegetable with edible flower buds."
    },
    {
        nombre: "Beet",
        temporada: "Fall",
        dias_crecimiento: 6,
        semilla: "Beet Seeds",
        precio_semilla: 10,
        precio_venta: 100,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A sweet root vegetable."
    },
    {
        nombre: "Bok Choy",
        temporada: "Fall",
        dias_crecimiento: 4,
        semilla: "Bok Choy Seeds",
        precio_semilla: 25,
        precio_venta: 80,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A leafy green vegetable."
    },
    {
        nombre: "Cranberries",
        temporada: "Fall",
        dias_crecimiento: 7,
        semilla: "Cranberry Seeds",
        precio_semilla: 120,
        precio_venta: 75,
        cosecha_por_planta: 2,
        multiplo_cosecha: true,
        descripcion: "A tart red berry."
    },
    {
        nombre: "Eggplant",
        temporada: "Fall",
        dias_crecimiento: 5,
        semilla: "Eggplant Seeds",
        precio_semilla: 10,
        precio_venta: 60,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A purple vegetable."
    },
    {
        nombre: "Fairy Rose",
        temporada: "Fall",
        dias_crecimiento: 12,
        semilla: "Fairy Seeds",
        precio_semilla: 100,
        precio_venta: 290,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A magical pink flower."
    },
    {
        nombre: "Grape",
        temporada: "Fall",
        dias_crecimiento: 10,
        semilla: "Grape Starter",
        precio_semilla: 30,
        precio_venta: 80,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A sweet purple fruit."
    },
    {
        nombre: "Pumpkin",
        temporada: "Fall",
        dias_crecimiento: 13,
        semilla: "Pumpkin Seeds",
        precio_semilla: 50,
        precio_venta: 320,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A large orange gourd."
    },
    {
        nombre: "Yam",
        temporada: "Fall",
        dias_crecimiento: 10,
        semilla: "Yam Seeds",
        precio_semilla: 30,
        precio_venta: 160,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "A sweet root vegetable."

    },

    // ============== WINTER CROPS ==============
    {
        nombre: "Winter Seeds",
        temporada: "Winter",
        dias_crecimiento: 7,
        semilla: "Winter Seeds",
        precio_semilla: 30,
        precio_venta: 0,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "Grows into winter forage items."
    },

    // ============== SPECIAL CROPS ==============
    {
        nombre: "Ancient Fruit",
        temporada: "Spring/Summer/Fall",
        dias_crecimiento: 28,
        semilla: "Ancient Seeds",
        precio_semilla: 30,
        precio_venta: 550,
        cosecha_por_planta: 1,
        multiplo_cosecha: true,
        descripcion: "A mysterious ancient fruit."
    },
    {
        nombre: "Coffee Bean",
        temporada: "Spring/Summer",
        dias_crecimiento: 10,
        semilla: "Coffee Bean",
        precio_semilla: 15,
        precio_venta: 15,
        cosecha_por_planta: 4,
        multiplo_cosecha: true,
        descripcion: "Grows into coffee beans."
    },
    {
        nombre: "Fiber",
        temporada: "Spring/Summer/Fall/Winter",
        dias_crecimiento: 7,
        semilla: "Fiber Seeds",
        precio_semilla: 5,
        precio_venta: 1,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "Used for crafting."
    },
    {
        nombre: "Mixed Seeds",
        temporada: "Any",
        dias_crecimiento: 0,
        semilla: "Mixed Seeds",
        precio_semilla: 0,
        precio_venta: 0,
        cosecha_por_planta: 1,
        multiplo_cosecha: false,
        descripcion: "Grows into random crops."
    }
];