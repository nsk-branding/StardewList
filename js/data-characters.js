// data-characters.js - COMPLETE offline data with detailed schedules
// All information based on Stardew Valley Wiki

const PERSONAJES = [
    // ============== MARRIAGE CANDIDATES ==============
    {
        nombre: "Abigail",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su habitación\n10:30 AM - Sale a la tienda de Pierre\n1:00 PM - Tienda de Pierre (mostrador)\n4:00 PM - Camina hacia el Salón\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa\n11:30 PM - Duerme",
                lluvia: "9:00 AM - En su habitación\n12:00 PM - En la tienda de Pierre\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                domingo: "9:00 AM - En su habitación\n12:00 PM - En el cementerio\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su habitación\n10:30 AM - Sale a la tienda de Pierre\n1:00 PM - Tienda de Pierre (mostrador)\n4:00 PM - Camina hacia el Salón\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su habitación\n12:00 PM - En la tienda de Pierre\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su habitación\n10:30 AM - Sale a la tienda de Pierre\n1:00 PM - Tienda de Pierre (mostrador)\n4:00 PM - Camina hacia el Salón\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su habitación\n12:00 PM - En la tienda de Pierre\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su habitación\n10:30 AM - Sale a la tienda de Pierre\n1:00 PM - Tienda de Pierre (mostrador)\n4:00 PM - Camina hacia el Salón\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su habitación\n12:00 PM - En la tienda de Pierre\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "13 de Otoño",
        familia: "Pierre (padre), Caroline (madre)",
        gustos: {
            ama: ["Amatista", "Budín de Plátano", "Pastel de Moras", "Pastel de Chocolate", "Anguila Picante", "Calabaza"],
            gusta: ["Todas las Verduras (excepto Calahorra, Trigo y Hojas de Té)", "Narciso", "Diente de León", "Lana", "Pluma de Pato"],
            neutral: ["Huevos (excepto Huevo Oscuro)", "Todas las Frutas (excepto Frutas de Árbol Frutal)", "Leche"],
            disgusta: ["Conejo de la Suerte", "Roca de Campo", "Tortilla", "Champiñón Salvaje", "Alga"],
            odia: ["Carpa", "Semillas de Carrizo", "Trigo", "Hojas de Té", "Fruta de Qi", "Todas las Gemas (excepto Amatista)"]
        }
    },
    {
        nombre: "Alex",
        horarios: {
            primavera: {
                normal: "8:00 AM - En su habitación\n9:30 AM - Sale al gimnasio\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa\n7:00 PM - Cena con la familia\n9:00 PM - En su habitación",
                lluvia: "8:00 AM - En su habitación\n11:00 AM - En el gimnasio\n3:00 PM - Vuelve a casa\n6:00 PM - Cena con la familia\n10:00 PM - Duerme",
                sabado: "8:00 AM - En su habitación\n10:00 AM - Camina a la playa\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "8:00 AM - En su habitación\n9:30 AM - Sale al gimnasio\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa\n7:00 PM - Cena con la familia\n9:00 PM - En su habitación",
                lluvia: "8:00 AM - En su habitación\n11:00 AM - En el gimnasio\n3:00 PM - Vuelve a casa\n6:00 PM - Cena con la familia\n10:00 PM - Duerme"
            },
            otonio: {
                normal: "8:00 AM - En su habitación\n9:30 AM - Sale al gimnasio\n12:00 PM - Camina al Salón\n1:00 PM - Salón del Cangrejo\n5:00 PM - Vuelve a casa\n7:00 PM - Cena con la familia",
                lluvia: "8:00 AM - En su habitación\n11:00 AM - En el gimnasio\n3:00 PM - Vuelve a casa\n6:00 PM - Cena con la familia\n10:00 PM - Duerme"
            },
            invierno: {
                normal: "8:00 AM - En su habitación\n9:30 AM - Sale al gimnasio\n12:00 PM - Camina al Salón\n1:00 PM - Salón del Cangrejo\n5:00 PM - Vuelve a casa\n7:00 PM - Cena con la familia",
                lluvia: "8:00 AM - En su habitación\n11:00 AM - En el gimnasio\n3:00 PM - Vuelve a casa\n6:00 PM - Cena con la familia\n10:00 PM - Duerme"
            }
        },
        cumpleanos: "13 de Verano",
        familia: "Evelyn (abuela), George (abuelo)",
        gustos: {
            ama: ["Desayuno Completo", "Salmonete", "Tortilla", "Huevo", "Leche", "Queso"],
            gusta: ["Todas las Verduras", "Todas las Frutas de Árbol Frutal", "Todas las Flores"],
            neutral: ["Todas las Frutas (excepto Frutas de Árbol Frutal)", "Huevos", "Leche"],
            disgusta: ["Coral", "Alga", "Carpa", "Sashimi", "Anguila", "Pescado de Arena"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Todas las Setas", "Todas las Gemas"]
        }
    },
    {
        nombre: "Caroline",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n10:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa\n5:00 PM - En el jardín\n7:00 PM - En casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase de ejercicio con Emily\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n11:00 AM - En la tienda de Pierre\n4:00 PM - Vuelve a casa\n7:00 PM - En casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n10:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa\n5:00 PM - En el jardín\n7:00 PM - En casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase de ejercicio con Emily\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n10:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa\n5:00 PM - En el jardín\n7:00 PM - En casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la tienda de Pierre\n4:00 PM - Vuelve a casa\n7:00 PM - En casa"
            }
        },
        cumpleanos: "7 de Invierno",
        familia: "Pierre (esposo), Abigail (hija)",
        gustos: {
            ama: ["Pescado a la Plancha", "Catálogo de Precios", "Té Verde", "Todas las Verduras"],
            gusta: ["Narciso", "Diente de León", "Toda la Leche", "Todos los Huevos", "Todas las Flores"],
            neutral: ["Todas las Frutas", "Todas las Frutas de Árbol Frutal", "Pan"],
            disgusta: ["Castaña", "Jengibre", "Leche de Cabra", "Queso de Cabra", "Coral", "Alga"],
            odia: ["Maíz", "Ajo", "Sopa de Chirivía", "Tortilla", "Todos los Peces", "Cerveza", "Vino"]
        }
    },
    {
        nombre: "Clint",
        horarios: {
            primavera: {
                normal: "9:00 AM - En la herrería\n5:00 PM - Sale a la Taberna\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                viernes: "9:00 AM - En la herrería\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En la herrería\n5:00 PM - Vuelve a casa\n7:00 PM - En casa"
            },
            verano: {
                normal: "9:00 AM - En la herrería\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En la herrería\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En la herrería\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "26 de Invierno",
        familia: "Soltero",
        gustos: {
            ama: ["Todas las Gemas", "Todas las Barras de Metal", "Todas las Menas", "Todas las Piedras"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Comidas Preparadas"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Carpa", "Sashimi"]
        }
    },
    {
        nombre: "Demetrius",
        horarios: {
            primavera: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En el jardín\n3:00 PM - En la cueva\n6:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En el laboratorio\n2:00 PM - Vuelve a casa\n6:00 PM - En casa"
            },
            verano: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En el jardín\n3:00 PM - En la cueva\n6:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En el jardín\n3:00 PM - En la cueva\n6:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En el laboratorio\n2:00 PM - Vuelve a casa\n6:00 PM - En casa"
            }
        },
        cumpleanos: "19 de Verano",
        familia: "Robin (esposa), Maru (hija), Sebastian (hijastro)",
        gustos: {
            ama: ["Calabaza", "Coliflor", "Fresa", "Pescado de Arena", "Pez Lava"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Queso", "Pan"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi"]
        }
    },
    {
        nombre: "Dwarf",
        horarios: {
            primavera: {
                normal: "⛏️ Siempre en las minas\n📍 Ubicación: Nivel 5, 45 o 95 de las minas\n🕐 Disponible todo el día"
            },
            verano: {
                normal: "⛏️ Siempre en las minas\n📍 Ubicación: Nivel 5, 45 o 95 de las minas\n🕐 Disponible todo el día"
            },
            otonio: {
                normal: "⛏️ Siempre en las minas\n📍 Ubicación: Nivel 5, 45 o 95 de las minas\n🕐 Disponible todo el día"
            },
            invierno: {
                normal: "⛏️ Siempre en las minas\n📍 Ubicación: Nivel 5, 45 o 95 de las minas\n🕐 Disponible todo el día"
            }
        },
        cumpleanos: "22 de Verano",
        familia: "Desconocido",
        gustos: {
            ama: ["Todas las Gemas", "Todas las Menas", "Todas las Barras de Metal", "Todas las Piedras"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todos los Peces"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Elliott",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - Sale a la playa\n1:00 PM - En la playa\n4:00 PM - Va al bosque\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su cabaña\n1:00 PM - En su cabaña\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - Sale a la playa\n1:00 PM - En la playa\n4:00 PM - Va al bosque\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - Sale a la playa\n1:00 PM - En la playa\n4:00 PM - Va al bosque\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su cabaña\n1:00 PM - En su cabaña\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "5 de Otoño",
        familia: "Soltero",
        gustos: {
            ama: ["Calamar", "Carpa", "Tinta de Calamar", "Todas las Plumas", "Todas las Gemas"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Queso", "Pan"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Comidas Preparadas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Emily",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - Trabaja en el Salón\n4:00 PM - Descansa en el Salón\n10:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase de ejercicio con Caroline\n12:00 PM - Trabaja en el Salón\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - Trabaja en el Salón\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - Trabaja en el Salón\n4:00 PM - Descansa en el Salón\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - Trabaja en el Salón\n4:00 PM - Descansa en el Salón\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - Trabaja en el Salón\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "27 de Primavera",
        familia: "Haley (hermana)",
        gustos: {
            ama: ["Aguamarina", "Tela", "Esmeralda", "Jade", "Rubí", "Hamburguesa de Supervivencia", "Topacio", "Lana"],
            gusta: ["Todas las Frutas de Árbol Frutal", "Todas las Gemas", "Todas las Verduras", "Todas las Flores"],
            neutral: ["Todas las Frutas (excepto Frutas de Árbol Frutal y Mora de Salmón)", "Huevos", "Leche"],
            disgusta: ["Anguila Frita", "Taco de Pescado", "Helado", "Pastel de Arroz", "Sashimi"],
            odia: ["Aceite", "Alga", "Cerveza", "Vino", "Miel", "Diamante"]
        }
    },
    {
        nombre: "Evelyn",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n11:00 AM - Cuida el jardín\n2:00 PM - En su casa\n5:00 PM - En su casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n11:00 AM - Cuida el jardín\n2:00 PM - En su casa\n5:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n11:00 AM - Cuida el jardín\n2:00 PM - En su casa\n5:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - En su casa"
            }
        },
        cumpleanos: "20 de Invierno",
        familia: "George (esposo), Alex (nieto)",
        gustos: {
            ama: ["Tarta de Remolacha", "Chocolate Caliente", "Té de Hierbas", "Todos los Dulces"],
            gusta: ["Narciso", "Diente de León", "Todas las Flores", "Todas las Verduras", "Todas las Frutas"],
            neutral: ["Todas las Frutas de Árbol Frutal", "Huevos", "Leche", "Pan"],
            disgusta: ["Pescado", "Coral", "Alga", "Batería", "Cuarzo", "Todas las Setas"],
            odia: ["Cerveza", "Vino", "Miel", "Carpa", "Tortilla", "Sashimi"]
        }
    },
    {
        nombre: "George",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - Viendo TV\n3:00 PM - En su casa\n6:00 PM - En su casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - Viendo TV\n6:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - Viendo TV\n3:00 PM - En su casa\n6:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - Viendo TV\n3:00 PM - En su casa\n6:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - Viendo TV\n6:00 PM - En su casa"
            }
        },
        cumpleanos: "24 de Otoño",
        familia: "Evelyn (esposa), Alex (nieto)",
        gustos: {
            ama: ["Pescado a la Plancha", "Barras de Metal", "Todas las Piedras"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Comidas Preparadas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Gus",
        horarios: {
            primavera: {
                normal: "9:00 AM - En el Salón del Cangrejo\n5:00 PM - Trabaja en el Salón\n12:00 AM - Cierra el Salón"
            },
            verano: {
                normal: "9:00 AM - En el Salón del Cangrejo\n5:00 PM - Trabaja en el Salón\n12:00 AM - Cierra el Salón"
            },
            otonio: {
                normal: "9:00 AM - En el Salón del Cangrejo\n5:00 PM - Trabaja en el Salón\n12:00 AM - Cierra el Salón"
            },
            invierno: {
                normal: "9:00 AM - En el Salón del Cangrejo\n5:00 PM - Trabaja en el Salón\n12:00 AM - Cierra el Salón"
            }
        },
        cumpleanos: "8 de Verano",
        familia: "Soltero",
        gustos: {
            ama: ["Naranja", "Fruta de Verano", "Todas las Comidas Preparadas"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi"]
        }
    },
    {
        nombre: "Haley",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa\n7:00 PM - En su casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa\n7:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - En la playa\n5:00 PM - Vuelve a casa\n7:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - En su casa"
            }
        },
        cumpleanos: "14 de Primavera",
        familia: "Emily (hermana)",
        gustos: {
            ama: ["Coco", "Pastel de Frutas", "Helado", "Sandía", "Girasol", "Lana"],
            gusta: ["Todas las Flores (excepto Girasol)", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Todas las Verduras", "Todas las Frutas (excepto Coco y Frutas de Árbol Frutal)"],
            disgusta: ["Todas las Setas", "Alga", "Coral", "Todas las Gemas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla", "Pescado"]
        }
    },
    {
        nombre: "Harvey",
        horarios: {
            primavera: {
                normal: "9:00 AM - En la clínica\n12:00 PM - En la clínica\n3:00 PM - Camina al bosque\n5:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En la clínica\n12:00 PM - En la clínica\n5:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En la clínica\n12:00 PM - En la clínica\n3:00 PM - Camina al bosque\n5:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En la clínica\n12:00 PM - En la clínica\n3:00 PM - Camina al bosque\n5:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En la clínica\n12:00 PM - En la clínica\n5:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "14 de Invierno",
        familia: "Soltero",
        gustos: {
            ama: ["Café", "Ensalada", "Mermelada", "Jugo", "Todas las Verduras"],
            gusta: ["Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla", "Pescado"]
        }
    },
    {
        nombre: "Jas",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase con Penny\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - En su casa\n4:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - En su casa\n4:00 PM - En su casa"
            }
        },
        cumpleanos: "4 de Primavera",
        familia: "Marnie (tía)",
        gustos: {
            ama: ["Coral", "Jugo de Frutas", "Tarta de Fresas", "Todos los Dulces"],
            gusta: ["Todas las Flores", "Todas las Frutas", "Todas las Verduras"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Todas las Setas", "Alga", "Todos los Peces"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Jodi",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n11:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase de ejercicio\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n11:00 AM - En la tienda de Pierre\n4:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n11:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n11:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n11:00 AM - Va a la tienda de Pierre\n12:00 PM - En la tienda de Pierre\n4:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "11 de Otoño",
        familia: "Kent (esposo), Sam (hijo), Vincent (hijo)",
        gustos: {
            ama: ["Sopa de Verduras", "Tortilla", "Pescado a la Plancha", "Todas las Verduras"],
            gusta: ["Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Kent",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n11:00 AM - En el bosque\n3:00 PM - Vuelve a casa\n6:00 PM - En su casa",
                lluvia: "9:00 AM - En su casa\n11:00 AM - En su casa\n6:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n11:00 AM - En el bosque\n3:00 PM - Vuelve a casa\n6:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n11:00 AM - En el bosque\n3:00 PM - Vuelve a casa\n6:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n11:00 AM - En su casa\n6:00 PM - En su casa"
            }
        },
        cumpleanos: "4 de Invierno",
        familia: "Jodi (esposa), Sam (hijo), Vincent (hijo)",
        gustos: {
            ama: ["Carpa", "Cerveza", "Vino", "Todas las Verduras"],
            gusta: ["Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Krobus",
        horarios: {
            primavera: {
                normal: "👻 Siempre en las alcantarillas\n📍 Ubicación: Alcantarillas (entrada por la rejilla en Pueblo Pelícano)\n🕐 Disponible todo el día"
            },
            verano: {
                normal: "👻 Siempre en las alcantarillas\n📍 Ubicación: Alcantarillas\n🕐 Disponible todo el día"
            },
            otonio: {
                normal: "👻 Siempre en las alcantarillas\n📍 Ubicación: Alcantarillas\n🕐 Disponible todo el día"
            },
            invierno: {
                normal: "👻 Siempre en las alcantarillas\n📍 Ubicación: Alcantarillas\n🕐 Disponible todo el día"
            }
        },
        cumpleanos: "1 de Invierno",
        familia: "Desconocido",
        gustos: {
            ama: ["Huevo Oscuro", "Diamante", "Iridio", "Esencia de Vacío"],
            gusta: ["Todas las Gemas (excepto Diamante)", "Todas las Frutas", "Todas las Verduras"],
            neutral: ["Huevos (excepto Huevo Oscuro)", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todos los Peces"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Leah",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - En el bosque\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su cabaña\n1:00 PM - En su cabaña\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - En el bosque\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su cabaña\n11:00 AM - En el bosque\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su cabaña\n1:00 PM - En su cabaña\n6:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "23 de Invierno",
        familia: "Soltera",
        gustos: {
            ama: ["Magdalena de Semillas de Amapola", "Ensalada", "Salteado", "Trufa", "Mezcla de Verduras"],
            gusta: ["Todas las Frutas", "Todas las Verduras", "Todos los Huevos", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Leche", "Queso", "Huevo", "Pan"],
            disgusta: ["Sorpresa de Carpa", "Hamburguesa de Supervivencia", "Tortilla", "Todas las Gemas"],
            odia: ["Huevo Oscuro", "Alga", "Todas las Setas"]
        }
    },
    {
        nombre: "Lewis",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el ayuntamiento\n1:00 PM - Camina por el pueblo\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n10:00 AM - En el ayuntamiento\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el ayuntamiento\n1:00 PM - Camina por el pueblo\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el ayuntamiento\n1:00 PM - Camina por el pueblo\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el ayuntamiento\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "7 de Primavera",
        familia: "Soltero",
        gustos: {
            ama: ["Caviar", "Vino", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Linus",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su tienda de campaña\n11:00 AM - En el bosque\n2:00 PM - Cerca de las minas\n5:00 PM - Vuelve a su tienda",
                lluvia: "9:00 AM - En su tienda de campaña\n12:00 PM - Cerca de su tienda\n5:00 PM - En su tienda"
            },
            verano: {
                normal: "9:00 AM - En su tienda de campaña\n11:00 AM - En el bosque\n2:00 PM - Cerca de las minas\n5:00 PM - Vuelve a su tienda"
            },
            otonio: {
                normal: "9:00 AM - En su tienda de campaña\n11:00 AM - En el bosque\n2:00 PM - Cerca de las minas\n5:00 PM - Vuelve a su tienda"
            },
            invierno: {
                normal: "9:00 AM - En su tienda de campaña\n12:00 PM - Cerca de su tienda\n5:00 PM - En su tienda"
            }
        },
        cumpleanos: "3 de Invierno",
        familia: "Soltero",
        gustos: {
            ama: ["Todos los Peces (excepto Caracol)", "Todas las Frutas de Árbol Frutal", "Todas las Verduras"],
            gusta: ["Narciso", "Diente de León", "Setas", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Queso", "Pan"],
            disgusta: ["Piedra", "Carbón", "Madera", "Todas las Gemas"],
            odia: ["Miel", "Aceite", "Cerveza", "Vino", "Todas las Comidas Preparadas"]
        }
    },
    {
        nombre: "Marnie",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la tienda de animales\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lunes: "9:00 AM - En su casa\n12:00 PM - En su casa (cerrado)\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa\n12:00 PM - En su casa (cerrado)\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la tienda de animales\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la tienda de animales\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la tienda de animales\n4:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "18 de Otoño",
        familia: "Jas (sobrina), Shane (sobrino)",
        gustos: {
            ama: ["Diamante", "Queso de Cabra", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas (excepto Diamante)"],
            odia: ["Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Maru",
        horarios: {
            primavera: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En la clínica\n4:00 PM - Vuelve a casa\n6:00 PM - En su casa",
                lluvia: "9:00 AM - En el laboratorio\n12:00 PM - En la clínica\n4:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En la clínica\n4:00 PM - Vuelve a casa\n6:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En la clínica\n4:00 PM - Vuelve a casa\n6:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En el laboratorio\n12:00 PM - En la clínica\n4:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "10 de Verano",
        familia: "Robin (madre), Demetrius (padre), Sebastian (hermanastro)",
        gustos: {
            ama: ["Batería", "Cobre", "Hierro", "Oro", "Iridio", "Todas las Barras de Metal"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores", "Todas las Gemas"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todos los Peces"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Pam",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - Salón del Cangrejo\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - Salón del Cangrejo\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - Salón del Cangrejo\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "18 de Primavera",
        familia: "Penny (hija)",
        gustos: {
            ama: ["Cerveza", "Vino", "Palta", "Caviar", "Todas las Verduras"],
            gusta: ["Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Penny",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa (caravana)\n11:00 AM - En el museo\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa (caravana)\n10:00 AM - Enseña a Jas y Vincent\n2:00 PM - En el museo\n4:00 PM - Vuelve a casa",
                jueves: "9:00 AM - En su casa (caravana)\n10:00 AM - Enseña a Jas y Vincent\n2:00 PM - En el museo\n4:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa (caravana)\n11:00 AM - En el museo\n4:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa (caravana)\n11:00 AM - En el museo\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa (caravana)\n11:00 AM - En el museo\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa (caravana)\n11:00 AM - En el museo\n4:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "2 de Otoño",
        familia: "Pam (madre)",
        gustos: {
            ama: ["Diamante", "Melón", "Amapola", "Plato Rojo", "Sopa de Raíces", "Pescado de Arena", "Sopa Tom Kha"],
            gusta: ["Todas las Frutas", "Todas las Verduras", "Todas las Flores (excepto Amapola)"],
            neutral: ["Leche", "Huevos", "Lana", "Pluma de Pato"],
            disgusta: ["Sopa de Algas", "Caldo Pálido", "Setas", "Cerveza", "Vino"],
            odia: ["Conejo de la Suerte", "Aceite", "Miel", "Cerveza", "Vino"]
        }
    },
    {
        nombre: "Pierre",
        horarios: {
            primavera: {
                normal: "9:00 AM - En la tienda\n5:00 PM - Cierra la tienda\n6:00 PM - En su casa\n7:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                miercoles: "9:00 AM - En su casa (cerrado)\n10:00 AM - En el bosque\n4:00 PM - En su casa",
                lluvia: "9:00 AM - En la tienda\n5:00 PM - Cierra la tienda\n7:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En la tienda\n5:00 PM - Cierra la tienda\n6:00 PM - En su casa\n7:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En la tienda\n5:00 PM - Cierra la tienda\n6:00 PM - En su casa\n7:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En la tienda\n5:00 PM - Cierra la tienda\n7:00 PM - En su casa"
            }
        },
        cumpleanos: "26 de Primavera",
        familia: "Caroline (esposa), Abigail (hija)",
        gustos: {
            ama: ["Caviar", "Vino", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Robin",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el taller\n5:00 PM - Cierra el taller\n6:00 PM - En su casa",
                martes: "9:00 AM - En su casa (cerrado)\n10:00 AM - En el bosque\n4:00 PM - En su casa",
                lluvia: "9:00 AM - En su casa\n10:00 AM - En el taller\n5:00 PM - Cierra el taller\n6:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el taller\n5:00 PM - Cierra el taller\n6:00 PM - En su casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el taller\n5:00 PM - Cierra el taller\n6:00 PM - En su casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n10:00 AM - En el taller\n5:00 PM - Cierra el taller\n6:00 PM - En su casa"
            }
        },
        cumpleanos: "21 de Otoño",
        familia: "Demetrius (esposo), Maru (hija), Sebastian (hijo)",
        gustos: {
            ama: ["Madera", "Piedra", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Sam",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la playa\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la playa\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n11:00 AM - En la playa\n2:00 PM - En el bosque\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - En su casa\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "17 de Verano",
        familia: "Jodi (madre), Kent (padre), Vincent (hermano)",
        gustos: {
            ama: ["Pizza", "Cola Joja", "Tortilla", "Huevo", "Leche", "Queso"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Todos los Peces", "Todas las Gemas"],
            disgusta: ["Alga", "Coral", "Todas las Setas"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi"]
        }
    },
    {
        nombre: "Sandy",
        horarios: {
            primavera: {
                normal: "🏜️ Siempre en la tienda del desierto\n📍 Ubicación: Oasis en el Desierto de Calico\n🕐 Abierto: 9:00 AM a 11:50 PM"
            },
            verano: {
                normal: "🏜️ Siempre en la tienda del desierto\n📍 Ubicación: Oasis en el Desierto de Calico\n🕐 Abierto: 9:00 AM a 11:50 PM"
            },
            otonio: {
                normal: "🏜️ Siempre en la tienda del desierto\n📍 Ubicación: Oasis en el Desierto de Calico\n🕐 Abierto: 9:00 AM a 11:50 PM"
            },
            invierno: {
                normal: "🏜️ Siempre en la tienda del desierto\n📍 Ubicación: Oasis en el Desierto de Calico\n🕐 Abierto: 9:00 AM a 11:50 PM"
            }
        },
        cumpleanos: "15 de Otoño",
        familia: "Desconocido",
        gustos: {
            ama: ["Coco", "Gema de Qi", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal", "Todos los Peces"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Sebastian",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su habitación\n12:00 PM - En su habitación\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa\n11:30 PM - En su habitación",
                lluvia: "9:00 AM - En su habitación\n12:00 PM - En su habitación\n5:00 PM - En su habitación"
            },
            verano: {
                normal: "9:00 AM - En su habitación\n12:00 PM - En su habitación\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su habitación\n12:00 PM - En su habitación\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su habitación\n12:00 PM - En su habitación\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "10 de Invierno",
        familia: "Robin (madre), Demetrius (padrastro), Maru (hermanastra)",
        gustos: {
            ama: ["Obsidiana", "Sashimi", "Pastel de Calabaza", "Carpa", "Esencia de Vacío"],
            gusta: ["Todas las Frutas de Árbol Frutal", "Todas las Verduras", "Todas las Flores"],
            neutral: ["Huevos", "Leche", "Queso", "Pan", "Pizza"],
            disgusta: ["Maíz", "Ajo", "Sopa de Chirivía", "Tortilla"],
            odia: ["Todas las Comidas Preparadas (excepto Sashimi)", "Conejo de la Suerte", "Carpa", "Alga"]
        }
    },
    {
        nombre: "Shane",
        horarios: {
            primavera: {
                normal: "9:00 AM - En la tienda de Marnie\n11:00 AM - En la tienda de Marnie\n3:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En la tienda de Marnie\n11:00 AM - En la tienda de Marnie\n3:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En la tienda de Marnie\n11:00 AM - En la tienda de Marnie\n3:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En la tienda de Marnie\n11:00 AM - En la tienda de Marnie\n3:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En la tienda de Marnie\n11:00 AM - En la tienda de Marnie\n3:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "20 de Primavera",
        familia: "Marnie (tía), Jas (prima)",
        gustos: {
            ama: ["Cerveza", "Pizza", "Tortilla", "Huevo", "Leche", "Queso"],
            gusta: ["Todas las Verduras", "Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Todos los Peces", "Todas las Gemas"],
            disgusta: ["Alga", "Coral", "Todas las Setas"],
            odia: ["Aceite", "Miel", "Vino", "Sashimi"]
        }
    },
    {
        nombre: "Vincent",
        horarios: {
            primavera: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa",
                martes: "9:00 AM - En su casa\n10:00 AM - Clase con Penny\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa",
                jueves: "9:00 AM - En su casa\n10:00 AM - Clase con Penny\n2:00 PM - En el bosque\n4:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En su casa\n12:00 PM - En su casa\n4:00 PM - En su casa"
            },
            verano: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En su casa\n12:00 PM - En el bosque o casa de Marnie\n4:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En su casa\n12:00 PM - En su casa\n4:00 PM - En su casa"
            }
        },
        cumpleanos: "10 de Primavera",
        familia: "Jodi (madre), Kent (padre), Sam (hermano)",
        gustos: {
            ama: ["Coral", "Jugo de Frutas", "Tarta de Fresas", "Todos los Dulces"],
            gusta: ["Todas las Flores", "Todas las Frutas", "Todas las Verduras"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Todas las Setas", "Alga", "Todos los Peces"],
            odia: ["Cerveza", "Vino", "Aceite", "Miel", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Willy",
        horarios: {
            primavera: {
                normal: "9:00 AM - En la tienda de pesca\n12:00 PM - En la tienda de pesca\n5:00 PM - En la playa\n8:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa",
                lluvia: "9:00 AM - En la tienda de pesca\n12:00 PM - En la tienda de pesca\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            verano: {
                normal: "9:00 AM - En la tienda de pesca\n12:00 PM - En la tienda de pesca\n5:00 PM - En la playa\n8:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            otonio: {
                normal: "9:00 AM - En la tienda de pesca\n12:00 PM - En la tienda de pesca\n5:00 PM - En la playa\n8:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            },
            invierno: {
                normal: "9:00 AM - En la tienda de pesca\n12:00 PM - En la tienda de pesca\n5:00 PM - Salón del Cangrejo\n10:00 PM - Vuelve a casa"
            }
        },
        cumpleanos: "24 de Verano",
        familia: "Soltero",
        gustos: {
            ama: ["Todos los Peces", "Todas las Verduras", "Todas las Frutas"],
            gusta: ["Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todas las Gemas"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    },
    {
        nombre: "Wizard",
        horarios: {
            primavera: {
                normal: "🧙‍♂️ Siempre en su torre\n📍 Ubicación: Torre del Mago (Oeste del bosque)\n🕐 Disponible todo el día"
            },
            verano: {
                normal: "🧙‍♂️ Siempre en su torre\n📍 Ubicación: Torre del Mago\n🕐 Disponible todo el día"
            },
            otonio: {
                normal: "🧙‍♂️ Siempre en su torre\n📍 Ubicación: Torre del Mago\n🕐 Disponible todo el día"
            },
            invierno: {
                normal: "🧙‍♂️ Siempre en su torre\n📍 Ubicación: Torre del Mago\n🕐 Disponible todo el día"
            }
        },
        cumpleanos: "17 de Invierno",
        familia: "Desconocido",
        gustos: {
            ama: ["Esencia de Vacío", "Esencia Solar", "Diamante", "Todas las Gemas", "Todas las Verduras"],
            gusta: ["Todas las Frutas", "Todas las Flores", "Todas las Frutas de Árbol Frutal"],
            neutral: ["Huevos", "Leche", "Pan", "Queso"],
            disgusta: ["Alga", "Coral", "Todas las Setas", "Todos los Peces"],
            odia: ["Aceite", "Miel", "Cerveza", "Vino", "Sashimi", "Tortilla"]
        }
    }
];