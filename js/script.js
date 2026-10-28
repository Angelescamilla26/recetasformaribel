"use strict";

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6OmAX1bqcYFhDRPzAGpbg2";

function ingredient(name, amount, unit, group = "Ingredientes") {
  return { name, amount, unit, group };
}

function recipeStep(title, text, minutes = 0) {
  return { title, text, minutes };
}

const recipeCatalog = [
  {
    id: "brownies-de-chocolate", name: "Brownies de chocolate", categoryLabel: "Para amantes del chocolate", tags: ["chocolate", "pasteles", "faciles"], difficulty: "Fácil", servings: 12, prep: 20, cook: 25, rest: 30, oven: 180,
    description: "Costrita crujiente, centro suave y chocolate en cada pequeño bocado.",
    photo: "photo-1740742765588-28dca095f46d", photoAlt: "Brownies de chocolate apilados en una rejilla", photographer: "Mitchell Soeharsono", photoSource: "https://unsplash.com/photos/AcE36ro-PCM", equipment: "Molde cuadrado de 20 × 20 cm, papel para hornear y batidor manual.",
    ingredients: [ingredient("chocolate semiamargo", 200, "g"), ingredient("mantequilla sin sal", 120, "g"), ingredient("azúcar", 180, "g"), ingredient("huevo grande, sin cáscara", 3, "pzas"), ingredient("harina de trigo", 90, "g"), ingredient("cacao sin azúcar", 25, "g"), ingredient("extracto de vainilla", 5, "ml"), ingredient("sal", 2, "g")],
    steps: [recipeStep("Prepara tu rincón", "Precalienta el horno a 180 °C, con calor arriba y abajo. Forra el molde con papel para hornear."), recipeStep("Derrite el chocolate", "Funde el chocolate con la mantequilla a baño María suave, sin que el recipiente toque el agua. Retira y deja que la mezcla esté tibia."), recipeStep("Mezcla sin prisa", "Bate a mano el azúcar con los huevos y la vainilla hasta integrar. Añade el chocolate tibio."), recipeStep("Incorpora los secos", "Tamiza harina, cacao y sal sobre la mezcla. Integra con espátula, solo hasta que no se vea harina."), recipeStep("Al horno", "Vierte en el molde y hornea a 180 °C durante 25 minutos. Comprueba el centro: un palillo debe salir con migas húmedas, sin masa líquida. Revisa desde el minuto 22.", 25), recipeStep("La espera más rica", "Deja enfriar en el molde durante 30 minutos antes de cortar en porciones.", 30)],
    tips: "Para un centro húmedo, evita batir de más al añadir la harina. Conserva en un recipiente cerrado hasta 3 días a temperatura ambiente fresca; refrigera si hace calor."
  },
  {
    id: "galletas-con-chispas", name: "Galletas con chispas", categoryLabel: "Un clásico que abraza", tags: ["galletas", "chocolate", "faciles"], difficulty: "Fácil", servings: 16, prep: 20, cook: 12, rest: 40, oven: 180,
    description: "Bordes doraditos, chispas generosas y ese olor que llena toda la casa.",
    photo: "photo-1519682214708-973477a2529a", photoAlt: "Galletas caseras con chispas de chocolate", photographer: "charlesdeluvio", photoSource: "https://unsplash.com/photos/Ms9xBg3Gtr8", equipment: "Dos charolas, papel para hornear y batidora o cuchara firme.",
    ingredients: [ingredient("mantequilla suave sin sal", 115, "g"), ingredient("azúcar morena", 100, "g"), ingredient("azúcar blanca", 60, "g"), ingredient("huevo grande, sin cáscara", 1, "pza"), ingredient("extracto de vainilla", 5, "ml"), ingredient("harina de trigo", 190, "g"), ingredient("bicarbonato de sodio", 3, "g"), ingredient("sal", 2, "g"), ingredient("chispas de chocolate semiamargo", 160, "g")],
    steps: [recipeStep("Una base cremosa", "Bate la mantequilla con ambos azúcares hasta obtener una mezcla cremosa. Incorpora huevo y vainilla."), recipeStep("Añade las chispas", "Mezcla harina, bicarbonato y sal. Incorpora a la base sin sobrebatir y agrega las chispas."), recipeStep("Un descanso en frío", "Cubre la masa y refrigera 30 minutos. Mientras tanto, precalienta el horno a 180 °C y prepara las charolas.", 30), recipeStep("Forma las galletas", "Divide en porciones iguales, forma bolas y distribúyelas dejando al menos 5 cm entre ellas."), recipeStep("Dora los bordes", "Hornea a 180 °C por 12 minutos, o hasta que los bordes estén dorados y el centro todavía suave. Si no caben, hornea en tandas.", 12), recipeStep("Déjalas asentarse", "Deja las galletas 10 minutos en la charola antes de pasarlas a una rejilla. Terminan de afirmarse al enfriarse.", 10)],
    tips: "La mantequilla debe estar suave, sin estar derretida. El tiempo de cocción indicado es por tanda. Guarda las galletas frías en un recipiente cerrado hasta 4 días."
  },
  {
    id: "cheesecake-de-fresa", name: "Cheesecake de fresa", categoryLabel: "Bonito por fuera, dulce por dentro", tags: ["frios", "sin-horno", "pasteles"], difficulty: "Intermedia", servings: 8, prep: 35, cook: 5, rest: 360, oven: null,
    description: "Una base crujiente, relleno cremoso y fresas para darle el toque final.",
    photo: "photo-1642646806325-6ed5108bc92f", photoAlt: "Cheesecake con cobertura roja de fresa", photographer: "Giuliana Catachura", photoSource: "https://unsplash.com/photos/1AdLhPn7KEg", equipment: "Molde desmontable de 20 cm, batidora y refrigerador.",
    ingredients: [ingredient("galletas María", 200, "g", "Base"), ingredient("mantequilla derretida", 90, "g", "Base"), ingredient("queso crema a temperatura ambiente", 500, "g", "Relleno"), ingredient("crema para batir fría, mínimo 35 % grasa", 250, "ml", "Relleno"), ingredient("azúcar glass", 90, "g", "Relleno"), ingredient("grenetina sin sabor", 10, "g", "Relleno"), ingredient("agua fría", 50, "ml", "Relleno"), ingredient("extracto de vainilla", 5, "ml", "Relleno"), ingredient("fresas lavadas, desinfectadas y sin tallo", 300, "g", "Cobertura"), ingredient("azúcar", 50, "g", "Cobertura"), ingredient("jugo de limón", 15, "ml", "Cobertura")],
    steps: [recipeStep("Haz la base", "Tritura las galletas y mezcla con la mantequilla. Presiona en el fondo del molde y refrigera mientras preparas el relleno."), recipeStep("Hidrata la grenetina", "Espolvorea la grenetina sobre el agua fría. Deja hidratar 5 minutos y después calienta suavemente hasta disolver, sin hervir."), recipeStep("Una nube de crema", "Bate el queso crema con el azúcar glass y la vainilla. En otro recipiente bate la crema fría a picos suaves."), recipeStep("Integra el relleno", "Mezcla unas cucharadas de queso con la grenetina tibia; devuelve esa mezcla al queso restante. Incorpora la crema con movimientos envolventes y vierte sobre la base."), recipeStep("Dale su tiempo", "Cubre y refrigera el cheesecake al menos 6 horas, hasta que el centro esté firme. No lo congeles para acortar este reposo.", 360), recipeStep("Prepara las fresas", "Mientras cuaja, cocina las fresas troceadas con el azúcar y el jugo de limón a fuego medio, manteniendo un hervor suave durante 5 minutos. Deja enfriar por completo y refrigera la cobertura.", 5), recipeStep("El toque final", "Desmolda con cuidado y coloca la cobertura fría sobre el cheesecake firme, justo antes de servir.")],
    tips: "La cobertura puede enfriarse mientras el cheesecake cuaja. Usa crema para batir, no media crema. Conserva cubierto en refrigeración y consume en 3 días."
  },
  {
    id: "tiramisu", name: "Tiramisú sin huevo", categoryLabel: "Una pausa con sabor a café", tags: ["frios", "sin-horno"], difficulty: "Intermedia", servings: 6, prep: 25, cook: 0, rest: 360, oven: null,
    description: "Capas de café, mascarpone y cacao. Un pequeño viaje sin salir de casa.",
    photo: "photo-1763585055859-a1fffe9cb8f0", photoAlt: "Tiramisú en capas con crema y cacao", photographer: "Mr. Pugo", photoSource: "https://unsplash.com/photos/9k2WSgIcgW8", equipment: "Refractario de aproximadamente 18 × 22 cm y batidora.",
    ingredients: [ingredient("queso mascarpone frío", 250, "g"), ingredient("crema para batir fría, mínimo 35 % grasa", 250, "ml"), ingredient("azúcar glass", 80, "g"), ingredient("soletas o bizcochos de soletilla", 200, "g"), ingredient("café preparado y frío", 250, "ml"), ingredient("cacao sin azúcar", 15, "g"), ingredient("extracto de vainilla", 5, "ml")],
    steps: [recipeStep("Prepara el café", "Prepara el café con anticipación y deja enfriar por completo. Colócalo en un plato hondo."), recipeStep("Bate la crema", "Bate la crema fría con el azúcar glass y la vainilla hasta formar picos suaves. Suaviza aparte el mascarpone con una espátula."), recipeStep("Une las texturas", "Incorpora la crema batida al mascarpone en varias adiciones, con movimientos envolventes."), recipeStep("Crea las capas", "Pasa rápidamente las soletas por el café, sin remojarlas hasta deshacerlas. Cubre el fondo del refractario, agrega la mitad de la crema y repite las capas."), recipeStep("Deja que tome forma", "Cubre sin tocar la superficie y refrigera por lo menos 6 horas.", 360), recipeStep("Un velo de cacao", "Tamiza el cacao sobre el tiramisú justo antes de servir. Corta con una espátula limpia.")],
    tips: "Esta versión no utiliza huevo crudo. Si las soletas absorben mucho, basta un toque de café por cada lado. Conserva refrigerado y consume en 2 días."
  },
  {
    id: "pastel-de-zanahoria", name: "Pastel de zanahoria", categoryLabel: "De esos que saben a hogar", tags: ["pasteles"], difficulty: "Intermedia", servings: 10, prep: 30, cook: 40, rest: 60, oven: 175,
    description: "Miga suave, un abrazo de canela y un betún de queso que lo dice todo.",
    photo: "photo-1676300186098-9b5ae9916e3c", photoAlt: "Rebanada de pastel de zanahoria con betún de queso y nuez", photographer: "Orkun Orcan", photoSource: "https://unsplash.com/photos/EvfXG4aK9d8", equipment: "Molde redondo de 20 cm, rallador y batidora.",
    ingredients: [ingredient("harina de trigo", 220, "g", "Pastel"), ingredient("zanahoria finamente rallada", 250, "g", "Pastel"), ingredient("azúcar morena", 180, "g", "Pastel"), ingredient("aceite vegetal neutro", 130, "ml", "Pastel"), ingredient("huevo grande, sin cáscara", 3, "pzas", "Pastel"), ingredient("polvo para hornear", 8, "g", "Pastel"), ingredient("canela molida", 5, "g", "Pastel"), ingredient("sal", 2, "g", "Pastel"), ingredient("nuez picada", 60, "g", "Pastel"), ingredient("queso crema suave", 180, "g", "Betún"), ingredient("mantequilla suave sin sal", 80, "g", "Betún"), ingredient("azúcar glass tamizada", 120, "g", "Betún"), ingredient("extracto de vainilla", 5, "ml", "Betún")],
    steps: [recipeStep("Deja listo el molde", "Precalienta a 175 °C. Engrasa el molde y forra la base. Mezcla harina, polvo para hornear, canela y sal."), recipeStep("Haz la mezcla", "Bate a mano huevos, azúcar y aceite. Incorpora la zanahoria rallada, después los secos y finalmente la nuez. No sobrebatas."), recipeStep("Hornea con calma", "Vierte en el molde y hornea a 175 °C por unos 40 minutos. Revisa con un palillo en el centro; debe salir sin masa cruda. Puede necesitar algunos minutos más según tu horno.", 40), recipeStep("Enfría por completo", "Deja reposar en el molde 15 minutos. Desmolda sobre una rejilla y deja enfriar otros 45 minutos, o hasta que ya no esté tibio.", 60), recipeStep("El betún", "Bate la mantequilla con el azúcar glass. Añade el queso crema y la vainilla, batiendo solo hasta obtener una textura uniforme."), recipeStep("Decora a tu manera", "Extiende el betún sobre el pastel frío. Si deseas capas, corta el pastel horizontalmente y reparte el betún entre el centro y la superficie.")],
    tips: "Ralla la zanahoria fina para obtener una miga uniforme. Refrigera el pastel después de poner el betún; se conserva cubierto hasta 3 días."
  },
  {
    id: "cupcakes-de-vainilla", name: "Cupcakes de vainilla", categoryLabel: "Pequeños motivos para celebrar", tags: ["pasteles"], difficulty: "Intermedia", servings: 12, prep: 25, cook: 20, rest: 30, oven: 175,
    description: "Esponjositos, con vainilla de verdad y una corona de betún suave.",
    photo: "photo-1519869325930-281384150729", photoAlt: "Cupcakes de vainilla con betún blanco y chispitas de colores", photographer: "Unsplash", photoSource: "https://unsplash.com/s/photos/cupcakes", equipment: "Molde para 12 cupcakes, capacillos y batidora.",
    ingredients: [ingredient("harina de trigo", 180, "g", "Cupcakes"), ingredient("mantequilla suave sin sal", 120, "g", "Cupcakes"), ingredient("azúcar", 150, "g", "Cupcakes"), ingredient("huevo grande, sin cáscara", 2, "pzas", "Cupcakes"), ingredient("leche a temperatura ambiente", 120, "ml", "Cupcakes"), ingredient("polvo para hornear", 8, "g", "Cupcakes"), ingredient("extracto de vainilla", 5, "ml", "Cupcakes"), ingredient("sal", 1, "g", "Cupcakes"), ingredient("mantequilla suave sin sal", 120, "g", "Betún"), ingredient("azúcar glass tamizada", 180, "g", "Betún"), ingredient("leche", 20, "ml", "Betún"), ingredient("chispitas de azúcar", 15, "g", "Decoración")],
    steps: [recipeStep("Prepara los capacillos", "Precalienta el horno a 175 °C. Coloca capacillos en el molde. Mezcla harina, polvo para hornear y sal."), recipeStep("Una mezcla esponjosa", "Bate la mantequilla del bizcocho con el azúcar hasta que se aclare. Incorpora los huevos uno a uno y la vainilla."), recipeStep("Alterna y mezcla", "Añade los secos en tres partes, alternando con la leche. Mezcla solo hasta integrar. Llena los capacillos a dos tercios de su capacidad."), recipeStep("Al horno", "Hornea a 175 °C durante 20 minutos. Comprueba con un palillo: debe salir limpio.", 20), recipeStep("Enfría antes de decorar", "Retira del molde con cuidado y deja enfriar en una rejilla durante unos 30 minutos, hasta que estén completamente fríos.", 30), recipeStep("Haz el betún", "Bate la mantequilla del betún con el azúcar glass, primero a velocidad baja. Añade la leche poco a poco y bate hasta que quede ligero. Decora y termina con chispitas.")],
    tips: "El betún se derrite sobre un cupcake tibio: dale tiempo a enfriarse. Conserva en un recipiente cerrado hasta 2 días a temperatura fresca o 4 días refrigerados."
  },
  {
    id: "roles-de-canela", name: "Roles de canela", categoryLabel: "Un domingo en forma de espiral", tags: ["pasteles"], difficulty: "Elaborada", servings: 12, prep: 45, cook: 25, rest: 105, oven: 180,
    description: "Espirales de canela, masa tierna y un glaseado para lamer la cuchara.",
    photo: "photo-1559745757-f6219279c3e5", photoAlt: "Roles de canela horneados", photographer: "J Williams", photoSource: "https://unsplash.com/photos/fitwDsD6gxM", equipment: "Refractario de 23 × 33 cm, rodillo y un lugar templado para fermentar.",
    ingredients: [ingredient("harina de trigo de fuerza", 450, "g", "Masa"), ingredient("leche tibia, aproximadamente 35 °C", 220, "ml", "Masa"), ingredient("levadura seca instantánea", 7, "g", "Masa"), ingredient("azúcar", 60, "g", "Masa"), ingredient("huevo grande, sin cáscara", 1, "pza", "Masa"), ingredient("mantequilla suave sin sal", 60, "g", "Masa"), ingredient("sal", 5, "g", "Masa"), ingredient("mantequilla suave sin sal", 60, "g", "Relleno"), ingredient("azúcar morena", 100, "g", "Relleno"), ingredient("canela molida", 12, "g", "Relleno"), ingredient("queso crema suave", 100, "g", "Glaseado"), ingredient("azúcar glass", 70, "g", "Glaseado"), ingredient("leche", 15, "ml", "Glaseado")],
    steps: [recipeStep("Amasa", "Mezcla harina, levadura, azúcar y sal. Agrega leche tibia y huevo. Amasa e incorpora la mantequilla de la masa poco a poco. Continúa unos 10 minutos hasta que esté lisa y elástica."), recipeStep("Primer levado", "Coloca en un recipiente engrasado, cubre y deja crecer unos 60 minutos en un lugar templado, hasta duplicar el volumen. Guíate por el tamaño de la masa.", 60), recipeStep("Rellena", "Estira sobre una superficie ligeramente enharinada formando un rectángulo de unos 35 × 45 cm. Unta la mantequilla del relleno y espolvorea azúcar morena mezclada con canela."), recipeStep("Forma los roles", "Enrolla por el lado largo, corta porciones iguales y acomoda en el refractario engrasado, dejando espacio entre ellas."), recipeStep("Segundo levado", "Cubre y deja crecer unos 30 minutos, hasta que los roles se vean inflados. Mientras tanto, precalienta el horno a 180 °C.", 30), recipeStep("Hornea", "Hornea a 180 °C unos 25 minutos, hasta que estén dorados y el centro cocido. Si se doran demasiado rápido, cubre suavemente con aluminio.", 25), recipeStep("Glasea", "Deja reposar 15 minutos. Bate el queso crema con azúcar glass y leche, y extiende sobre los roles tibios.", 15)],
    tips: "Los levados varían con la temperatura de tu cocina. La leche caliente puede dañar la levadura. Refrigera los roles glaseados en un recipiente cerrado y consume en 3 días."
  },
  {
    id: "fresas-con-crema", name: "Fresas con crema", categoryLabel: "La felicidad en una cucharada", tags: ["frios", "sin-horno", "faciles"], difficulty: "Fácil", servings: 4, prep: 15, cook: 0, rest: 0, oven: null,
    description: "Fresas frescas, crema dulce y una receta que siempre se siente bonita.",
    photo: "photo-1673646961362-659b4680b9ee", photoAlt: "Fresas frescas y crema servidas en un plato", photographer: "Natalia Gusakova", photoSource: "https://unsplash.com/photos/uzjs9GRK32c", equipment: "Tabla, cuchillo, un tazón y cuatro vasitos.",
    ingredients: [ingredient("fresas lavadas y desinfectadas", 500, "g"), ingredient("crema ácida o crema mexicana refrigerada", 250, "g"), ingredient("leche condensada", 90, "g"), ingredient("extracto de vainilla", 5, "ml")],
    steps: [recipeStep("Prepara la fruta", "Lava y desinfecta las fresas siguiendo las instrucciones de tu desinfectante para alimentos. Escurre, seca y retira los tallos."), recipeStep("Corta", "Parte las fresas en mitades o cuartos, según su tamaño. Mantén la fruta fría."), recipeStep("La crema dulce", "Mezcla la crema con la leche condensada y la vainilla hasta obtener una textura uniforme."), recipeStep("Sirve", "Reparte las fresas y la crema entre los vasitos. Puedes mezclarlas o servirlas en capas. Disfruta enseguida o conserva en refrigeración.")],
    tips: "Secar la fruta evita que suelte agua de más. Para la mejor textura, mezcla poco antes de servir. Conserva los ingredientes fríos y consume la preparación en 24 horas."
  },
  {
    id: "mousse-de-chocolate", name: "Mousse de chocolate", categoryLabel: "Suave como una buena canción", tags: ["chocolate", "frios", "sin-horno"], difficulty: "Intermedia", servings: 4, prep: 20, cook: 5, rest: 180, oven: null,
    description: "Intenso, aireado y sin huevo. Para disfrutarlo cucharadita a cucharadita.",
    photo: "photo-1621792907495-5403ce8f2c6e", photoAlt: "Mousse de chocolate cremoso en una cuchara y una copa", photographer: "Unsplash", photoSource: "https://unsplash.com/photos/N7mti4DiDIU", equipment: "Cuatro copas, cacerola, batidora y espátula.",
    ingredients: [ingredient("chocolate semiamargo, aproximadamente 55 % cacao", 180, "g", "Ganache"), ingredient("crema para batir, mínimo 35 % grasa", 120, "ml", "Ganache"), ingredient("crema para batir fría, mínimo 35 % grasa", 240, "ml", "Crema montada"), ingredient("azúcar glass", 20, "g", "Crema montada"), ingredient("extracto de vainilla", 5, "ml", "Crema montada")],
    steps: [recipeStep("Calienta la crema", "Pica el chocolate. Calienta la crema de la ganache a fuego bajo durante unos 5 minutos, hasta que salga vapor, sin dejar hervir.", 5), recipeStep("Funde el chocolate", "Vierte la crema caliente sobre el chocolate. Espera un minuto y mezcla desde el centro hasta que esté liso. Deja enfriar hasta que esté apenas tibio y siga fluido."), recipeStep("Bate con aire", "Bate la crema fría de la segunda parte con azúcar glass y vainilla a picos suaves. Detente antes de que se ponga granulosa."), recipeStep("Integra suavemente", "Mezcla primero una pequeña parte de la crema montada con la ganache para aligerarla. Incorpora el resto con espátula y movimientos envolventes."), recipeStep("Tiempo de frío", "Reparte en copas, cubre y refrigera por lo menos 3 horas antes de servir.", 180)],
    tips: "Si el chocolate está caliente al añadir la crema montada, perderá el aire. Si está demasiado frío, puede formar grumos. Conserva refrigerado hasta 2 días."
  },
  {
    id: "pay-de-limon", name: "Pay de limón", categoryLabel: "Un rayito de sabor", tags: ["pasteles", "frios"], difficulty: "Intermedia", servings: 8, prep: 25, cook: 18, rest: 240, oven: 170,
    description: "Cremoso, cítrico y con una base de galleta que equilibra cada bocado.",
    photo: "photo-1681329142517-6daaa56d3670", photoAlt: "Pay de limón sobre una rejilla", photographer: "Yuliia Dementsova", photoSource: "https://unsplash.com/photos/TNuD_SN6zrs", equipment: "Molde para pay de 22 cm y horno.",
    ingredients: [ingredient("galletas María", 180, "g", "Base"), ingredient("mantequilla derretida", 80, "g", "Base"), ingredient("leche condensada", 397, "g", "Relleno"), ingredient("yogur griego natural sin azúcar", 170, "g", "Relleno"), ingredient("yema de huevo", 3, "pzas", "Relleno"), ingredient("jugo de limón recién exprimido y colado", 120, "ml", "Relleno"), ingredient("ralladura fina de limón, sin parte blanca", 2, "g", "Relleno")],
    steps: [recipeStep("Una base crujiente", "Precalienta a 170 °C. Tritura las galletas, mezcla con la mantequilla y presiona en el fondo y los lados del molde."), recipeStep("Haz el relleno", "Mezcla leche condensada, yogur, yemas y ralladura sin incorporar demasiado aire. Añade el jugo de limón poco a poco, removiendo hasta integrar."), recipeStep("Hornea", "Vierte sobre la base. Hornea a 170 °C durante unos 18 minutos, hasta que los bordes estén firmes y el centro tiemble suavemente, sin verse líquido.", 18), recipeStep("Deja enfriar", "Coloca sobre una rejilla y deja enfriar unos 60 minutos. No lo desmoldes caliente.", 60), recipeStep("Al refrigerador", "Cubre y refrigera al menos 3 horas para que termine de asentarse. Sirve frío.", 180)],
    tips: "Este pay lleva una cocción breve; no es una receta sin horno. Usa solo la parte coloreada de la cáscara para evitar amargor. Conserva refrigerado hasta 3 días."
  },
  {
    id: "galletas-red-velvet", name: "Galletas Red Velvet", categoryLabel: "Un poquito fuera de lo común", tags: ["galletas", "chocolate", "faciles"], difficulty: "Fácil", servings: 16, prep: 20, cook: 12, rest: 40, oven: 175,
    description: "Cacao suave, chispas de chocolate blanco y un color que roba miradas.",
    photo: "photo-1673412810103-27c233f77da6", photoAlt: "Galletas rojas con chispas de chocolate blanco en una rejilla", photographer: "Fetty Ghaessani", photoSource: "https://unsplash.com/photos/pJw0R126F7I", equipment: "Dos charolas, papel para hornear y batidora.",
    ingredients: [ingredient("harina de trigo", 200, "g"), ingredient("cacao sin azúcar", 10, "g"), ingredient("mantequilla suave sin sal", 100, "g"), ingredient("azúcar", 130, "g"), ingredient("huevo grande, sin cáscara", 1, "pza"), ingredient("extracto de vainilla", 5, "ml"), ingredient("vinagre blanco", 5, "ml"), ingredient("colorante rojo en gel apto para alimentos", 2, "g"), ingredient("bicarbonato de sodio", 3, "g"), ingredient("sal", 1, "g"), ingredient("chispas de chocolate blanco", 120, "g")],
    steps: [recipeStep("La base", "Bate mantequilla y azúcar hasta que estén cremosas. Incorpora huevo, vainilla, vinagre y colorante."), recipeStep("Mezcla los secos", "Tamiza harina, cacao, bicarbonato y sal. Incorpora a la mezcla húmeda solo hasta unir. Agrega las chispas de chocolate blanco."), recipeStep("Enfría la masa", "Cubre y refrigera 30 minutos. Precalienta el horno a 175 °C y forra las charolas.", 30), recipeStep("Forma y hornea", "Divide en bolas iguales y colócalas separadas por al menos 5 cm. Hornea a 175 °C durante 12 minutos, hasta que los bordes estén firmes y el centro suave. Trabaja en tandas si hace falta.", 12), recipeStep("El último descanso", "Deja enfriar en la charola 10 minutos y después pasa a una rejilla.", 10)],
    tips: "La intensidad del color cambia según la marca del colorante; respeta la dosis de su etiqueta. El tiempo de horno es por tanda. Conserva cerradas hasta 4 días."
  },
  {
    id: "panque-de-platano", name: "Panqué de plátano", categoryLabel: "Aprovechar también sabe rico", tags: ["pasteles", "faciles"], difficulty: "Fácil", servings: 8, prep: 15, cook: 55, rest: 20, oven: 175,
    description: "El destino más rico para esos plátanos maduros que esperan en la cocina.",
    photo: "photo-1569762404472-026308ba6b64", photoAlt: "Panqué de plátano con nueces cortado en rebanadas", photographer: "Unsplash", photoSource: "https://unsplash.com/s/photos/banana-bread", equipment: "Molde para panqué de aproximadamente 23 × 13 cm.",
    ingredients: [ingredient("plátano muy maduro, sin cáscara", 300, "g"), ingredient("harina de trigo", 220, "g"), ingredient("azúcar morena", 130, "g"), ingredient("mantequilla derretida y tibia", 80, "g"), ingredient("huevo grande, sin cáscara", 2, "pzas"), ingredient("leche", 60, "ml"), ingredient("polvo para hornear", 6, "g"), ingredient("bicarbonato de sodio", 2, "g"), ingredient("sal", 2, "g"), ingredient("nuez picada", 60, "g")],
    steps: [recipeStep("Prepara", "Precalienta a 175 °C. Engrasa y forra el molde. Machaca los plátanos con un tenedor."), recipeStep("Los húmedos", "Mezcla el puré de plátano con azúcar, mantequilla tibia, huevos y leche hasta integrar."), recipeStep("Los secos", "Mezcla harina, polvo para hornear, bicarbonato y sal. Añade a los húmedos con una espátula e incorpora la nuez."), recipeStep("Al horno", "Vierte en el molde y hornea a 175 °C durante unos 55 minutos. Revisa desde el minuto 50: el palillo debe salir limpio o con migas cocidas. Si se dora pronto, cubre con aluminio.", 55), recipeStep("Déjalo reposar", "Espera 20 minutos antes de desmoldar y deja terminar de enfriar en una rejilla antes de rebanar.", 20)],
    tips: "Los plátanos con manchas oscuras aportan más sabor y dulzor. No mezcles de más después de añadir la harina. Conserva cerrado hasta 3 días en un lugar fresco."
  },
  {
    id: "trufas-de-chocolate", name: "Trufas de chocolate", categoryLabel: "Pequeñitas, pero inolvidables", tags: ["chocolate", "frios", "sin-horno", "faciles"], difficulty: "Fácil", servings: 20, prep: 20, cook: 5, rest: 120, oven: null,
    description: "Tres ingredientes para el centro y una capa de cacao. Así de especial.",
    photo: "photo-1769433509476-bd68b1229916", photoAlt: "Trufas de chocolate cubiertas de cacao en un tazón", photographer: "Mila", photoSource: "https://unsplash.com/photos/NOhJmWEuTKw", equipment: "Cacerola pequeña, tazón y una cuchara para porcionar.",
    ingredients: [ingredient("chocolate semiamargo, aproximadamente 60 % cacao", 250, "g"), ingredient("crema para batir, mínimo 35 % grasa", 125, "ml"), ingredient("mantequilla sin sal", 20, "g"), ingredient("cacao sin azúcar para cubrir", 30, "g")],
    steps: [recipeStep("Pica el chocolate", "Coloca el chocolate finamente picado en un tazón resistente al calor."), recipeStep("Calienta la crema", "Calienta la crema a fuego bajo durante unos 5 minutos, hasta que aparezca vapor sin hervir. Vierte sobre el chocolate.", 5), recipeStep("Forma la ganache", "Deja reposar un minuto. Mezcla desde el centro y agrega la mantequilla hasta obtener una crema lisa."), recipeStep("Enfría", "Cubre y refrigera alrededor de 2 horas, hasta que la mezcla pueda moldearse con una cuchara.", 120), recipeStep("Dales forma", "Forma porciones iguales con manos frescas y limpias. Haz bolitas rápidamente y pásalas por el cacao. Regresa al refrigerador hasta servir.")],
    tips: "Si la mezcla se ablanda, devuélvela al frío unos minutos. Usa chocolate de barra para repostería, no cobertura sucedánea. Conserva refrigeradas hasta 5 días."
  },
  {
    id: "donas-glaseadas", name: "Donas glaseadas", categoryLabel: "Una vuelta a la felicidad", tags: ["pasteles", "faciles"], difficulty: "Fácil", servings: 12, prep: 25, cook: 12, rest: 30, oven: 180,
    description: "Donas horneadas, suaves y con un glaseado de vainilla que brilla solito.",
    photo: "photo-1573519939879-57c40b9cea5d", photoAlt: "Donas redondas con glaseado claro en una charola", photographer: "Jovan Vasiljević", photoSource: "https://unsplash.com/photos/fiKPM-x3oiQ", equipment: "Molde para 12 donas horneadas y una rejilla.",
    ingredients: [ingredient("harina de trigo", 220, "g", "Donas"), ingredient("azúcar", 100, "g", "Donas"), ingredient("polvo para hornear", 8, "g", "Donas"), ingredient("sal", 2, "g", "Donas"), ingredient("huevo grande, sin cáscara", 2, "pzas", "Donas"), ingredient("leche", 160, "ml", "Donas"), ingredient("mantequilla derretida y tibia", 50, "g", "Donas"), ingredient("extracto de vainilla", 5, "ml", "Donas"), ingredient("azúcar glass tamizada", 150, "g", "Glaseado"), ingredient("leche", 30, "ml", "Glaseado"), ingredient("extracto de vainilla", 2, "ml", "Glaseado")],
    steps: [recipeStep("Prepara el molde", "Precalienta a 180 °C y engrasa el molde para donas. Mezcla harina, azúcar, polvo para hornear y sal."), recipeStep("Mezcla", "Bate aparte huevos, leche, mantequilla tibia y vainilla de la masa. Une con los secos, sin sobrebatir."), recipeStep("Rellena y hornea", "Llena las cavidades hasta dos tercios. Hornea a 180 °C por unos 12 minutos, hasta que recuperen su forma al presionarlas suavemente y un palillo salga limpio.", 12), recipeStep("Enfría", "Espera 5 minutos antes de desmoldar. Deja sobre una rejilla unos 15 minutos más, hasta que estén frías.", 20), recipeStep("Glasea", "Mezcla azúcar glass, leche y vainilla del glaseado, añadiendo la leche gradualmente. Sumerge la cara superior de cada dona, deja escurrir y espera unos 10 minutos para que se asiente.", 10)],
    tips: "Son donas de masa tipo bizcocho y necesitan molde; no llevan levadura ni fritura. Si tu molde es de 6 cavidades, hornea dos tandas. Conserva cerradas hasta 2 días."
  },
  {
    id: "mini-cheesecakes", name: "Mini cheesecakes", categoryLabel: "Para compartir o guardar uno", tags: ["pasteles", "frios"], difficulty: "Intermedia", servings: 12, prep: 25, cook: 22, rest: 210, oven: 160,
    description: "Todo lo que te gusta del cheesecake, en pequeños bocados con frutos rojos.",
    photo: "photo-1772729514583-016639ee5d3b", photoAlt: "Mini cheesecakes individuales con cobertura de frutos rojos", photographer: "Sofia Lasheva", photoSource: "https://unsplash.com/photos/abPH32tSrqY", equipment: "Molde de 12 cupcakes, capacillos y batidora.",
    ingredients: [ingredient("galletas María", 140, "g", "Base"), ingredient("mantequilla derretida", 60, "g", "Base"), ingredient("queso crema a temperatura ambiente", 360, "g", "Relleno"), ingredient("azúcar", 90, "g", "Relleno"), ingredient("huevo grande, sin cáscara", 2, "pzas", "Relleno"), ingredient("crema ácida", 120, "g", "Relleno"), ingredient("extracto de vainilla", 5, "ml", "Relleno"), ingredient("mermelada de frutos rojos", 120, "g", "Cobertura")],
    steps: [recipeStep("Pequeñas bases", "Precalienta a 160 °C. Pon capacillos en el molde. Tritura galletas, mezcla con mantequilla y reparte presionando en las bases."), recipeStep("El relleno", "Bate queso crema y azúcar a velocidad baja hasta suavizar. Agrega los huevos uno a uno, después crema ácida y vainilla. Evita incorporar demasiado aire."), recipeStep("Al horno", "Reparte sin llenar hasta el borde. Hornea a 160 °C durante unos 22 minutos, hasta que los bordes estén firmes y el centro se mueva ligeramente, sin estar líquido.", 22), recipeStep("Enfría despacito", "Deja enfriar en el molde unos 30 minutos. Retira con cuidado hacia una rejilla si todavía están tibios y espera a que pierdan el calor.", 30), recipeStep("Un descanso frío", "Cubre y refrigera por lo menos 3 horas antes de quitar los capacillos.", 180), recipeStep("Termina con frutos rojos", "Reparte la mermelada fría sobre cada cheesecake justo antes de servir.")],
    tips: "El queso crema suave evita grumos. No sobrehornees: el centro termina de asentarse al enfriarse. Conserva cubiertos en refrigeración y consume en 3 días."
  },
  {
    "id": "cheesecake-de-galleta",
    "name": "Cheesecake de galleta",
    "categoryLabel": "Cookies & cream, sin encender el horno",
    "tags": [
      "pasteles",
      "frios",
      "sin-horno",
      "chocolate",
      "nuevas"
    ],
    "difficulty": "Intermedia",
    "servings": 8,
    "prep": 30,
    "cook": 0,
    "rest": 360,
    "oven": null,
    "description": "Galleta de chocolate en la base, en el relleno y en ese último bocado que nadie quiere compartir.",
    "photo": "photo-1638199023658-1c771bafafda",
    "photoAlt": "Cheesecake de galleta de chocolate decorado con crema y galletas",
    "photographer": "yusuff",
    "photoSource": "https://unsplash.com/photos/v3LrraBLs88",
    "equipment": "Molde desmontable de 20 cm, batidora, espátula y refrigerador.",
    "ingredients": [
      {
        "name": "galletas de chocolate tipo sándwich, con su crema",
        "amount": 220,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida sin sal",
        "amount": 65,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "queso crema a temperatura ambiente",
        "amount": 500,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "crema para batir fría, mínimo 35 % grasa",
        "amount": 250,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "azúcar glass",
        "amount": 70,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "grenetina sin sabor",
        "amount": 10,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "agua fría",
        "amount": 50,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "galletas de chocolate tipo sándwich, troceadas",
        "amount": 100,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "galletas de chocolate tipo sándwich",
        "amount": 60,
        "unit": "g",
        "group": "Decoración"
      }
    ],
    "steps": [
      {
        "title": "La base crujiente",
        "text": "Tritura las galletas de la base con su crema. Mezcla con la mantequilla y presiona sobre el fondo del molde. Refrigera mientras preparas el relleno.",
        "minutes": 0
      },
      {
        "title": "Hidrata la grenetina",
        "text": "Espolvorea la grenetina sobre el agua fría. Espera 5 minutos y después calienta en intervalos cortos, solo hasta disolverla, sin hervir.",
        "minutes": 5
      },
      {
        "title": "Prepara las dos cremas",
        "text": "Bate el queso con el azúcar glass y la vainilla hasta suavizar. En otro recipiente, bate la crema fría hasta obtener picos suaves.",
        "minutes": 0
      },
      {
        "title": "Todo se encuentra",
        "text": "Mezcla unas cucharadas del queso con la grenetina tibia y devuelve al resto del queso. Incorpora la crema batida con movimientos envolventes y añade las galletas troceadas.",
        "minutes": 0
      },
      {
        "title": "Su descanso en frío",
        "text": "Vierte sobre la base, alisa y cubre. Refrigera por lo menos 6 horas, hasta que el centro esté firme.",
        "minutes": 360
      },
      {
        "title": "El toque de galleta",
        "text": "Desmolda con cuidado y decora con las galletas restantes justo antes de servir. Corta con un cuchillo limpio entre cada porción.",
        "minutes": 0
      }
    ],
    "tips": "No retires la crema de las galletas: está contemplada en estas cantidades. La grenetina debe estar tibia y fluida al mezclarla. Mantén refrigerado y consume en 3 días."
  },
  {
    "id": "galletas-de-mantequilla",
    "name": "Galletas de mantequilla",
    "categoryLabel": "Pocas cosas. Un sabor enorme.",
    "tags": [
      "galletas",
      "faciles",
      "nuevas"
    ],
    "difficulty": "Fácil",
    "servings": 24,
    "prep": 20,
    "cook": 14,
    "rest": 40,
    "oven": 170,
    "description": "Delicadas, doraditas y con ese sabor a mantequilla que se queda en la memoria.",
    "photo": "photo-1766226763209-48db0b29c675",
    "photoAlt": "Galletas de mantequilla en forma de estrella sobre una superficie blanca",
    "photographer": "Stacy",
    "photoSource": "https://unsplash.com/photos/6JOGQH7Y-5U",
    "equipment": "Charolas, papel para hornear, rodillo y cortador de galletas.",
    "ingredients": [
      {
        "name": "mantequilla suave sin sal",
        "amount": 180,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar glass",
        "amount": 90,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "yema de huevo grande",
        "amount": 1,
        "unit": "pza",
        "group": "Ingredientes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "harina de trigo",
        "amount": 280,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Suaviza la mantequilla",
        "text": "Bate la mantequilla con el azúcar glass hasta obtener una crema uniforme, sin batir en exceso. Incorpora la yema y la vainilla.",
        "minutes": 0
      },
      {
        "title": "Forma la masa",
        "text": "Añade la harina y la sal. Mezcla solo hasta que la masa se una; no la amases como pan.",
        "minutes": 0
      },
      {
        "title": "Enfría antes de cortar",
        "text": "Forma un disco, cubre y refrigera 30 minutos. Precalienta el horno a 170 °C y prepara las charolas.",
        "minutes": 30
      },
      {
        "title": "Dales forma",
        "text": "Estira entre dos hojas de papel para hornear hasta un grosor de 5 mm. Corta las galletas y acomódalas separadas en las charolas. Si la masa se ablanda, enfríala de nuevo.",
        "minutes": 0
      },
      {
        "title": "Dorado suave",
        "text": "Hornea a 170 °C unos 14 minutos por tanda, hasta que los bordes apenas cambien de color. El centro debe permanecer claro.",
        "minutes": 14
      },
      {
        "title": "Espera el primer bocado",
        "text": "Deja reposar 10 minutos en la charola y termina de enfriar sobre una rejilla antes de guardarlas.",
        "minutes": 10
      }
    ],
    "tips": "Usa mantequilla, no margarina, para conservar el sabor y la textura. El tiempo de horno es por tanda. Guarda las galletas completamente frías en una lata o recipiente hermético hasta 5 días."
  },
  {
    "id": "galletas-de-naranja",
    "name": "Galletas de naranja",
    "categoryLabel": "Una tarde con aroma a cítricos",
    "tags": [
      "galletas",
      "faciles",
      "nuevas"
    ],
    "difficulty": "Fácil",
    "servings": 20,
    "prep": 20,
    "cook": 14,
    "rest": 40,
    "oven": 175,
    "description": "Suaves por dentro, con ralladura de naranja y un glaseado ligero que alegra cualquier tarde.",
    "photo": "photo-1744160252920-967ab9b733ce",
    "photoAlt": "Galletas cítricas claras acomodadas sobre una superficie blanca",
    "photographer": "Maria Klichik",
    "photoSource": "https://unsplash.com/photos/DgoIL3GhDlY",
    "equipment": "Rallador fino, dos charolas y papel para hornear.",
    "ingredients": [
      {
        "name": "mantequilla suave sin sal",
        "amount": 100,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 110,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 1,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "ralladura fina de naranja, solo la parte coloreada",
        "amount": 6,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "jugo de naranja",
        "amount": 30,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 250,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "polvo para hornear",
        "amount": 5,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 1,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar glass",
        "amount": 70,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "jugo de naranja",
        "amount": 15,
        "unit": "ml",
        "group": "Glaseado"
      }
    ],
    "steps": [
      {
        "title": "Despierta la naranja",
        "text": "Frota la ralladura con el azúcar usando los dedos. Bate con la mantequilla hasta formar una crema; añade el huevo y el jugo de la masa.",
        "minutes": 0
      },
      {
        "title": "Integra los secos",
        "text": "Mezcla harina, polvo para hornear y sal. Incorpora a la crema sin sobrebatir.",
        "minutes": 0
      },
      {
        "title": "Una pausa en frío",
        "text": "Cubre y refrigera 25 minutos. Precalienta el horno a 175 °C y prepara las charolas.",
        "minutes": 25
      },
      {
        "title": "Porciones parejitas",
        "text": "Divide la masa en 20 bolitas, colócalas con unos 5 cm de separación y aplástalas ligeramente.",
        "minutes": 0
      },
      {
        "title": "Al horno",
        "text": "Hornea a 175 °C aproximadamente 14 minutos por tanda, hasta que la base esté dorada y la superficie firme. No esperes un dorado intenso.",
        "minutes": 14
      },
      {
        "title": "Enfría y glasea",
        "text": "Deja enfriar por completo, unos 15 minutos. Mezcla el azúcar glass con el jugo del glaseado y dibuja hilos sobre las galletas. Deja secar antes de apilarlas.",
        "minutes": 15
      }
    ],
    "tips": "Lava y seca la naranja antes de rallarla; evita la parte blanca, que amarga. El tiempo de horno es por tanda. Conserva las galletas frías y con el glaseado seco en un recipiente hermético hasta 4 días."
  },
  {
    "id": "empanadas-dulces-de-pina",
    "name": "Empanadas dulces de piña",
    "categoryLabel": "Un relleno que sabe a casa",
    "tags": [
      "pasteles",
      "de-casa",
      "nuevas"
    ],
    "difficulty": "Intermedia",
    "servings": 12,
    "prep": 40,
    "cook": 40,
    "rest": 50,
    "oven": 180,
    "description": "Masa dorada, orillitas selladas a mano y un corazón de piña con canela.",
    "photo": "photo-1774971343509-d575ec6bd3af",
    "photoAlt": "Empanadas horneadas de bordes trenzados acomodadas en filas",
    "photographer": "Anastasiia Mitiushova",
    "photoSource": "https://unsplash.com/photos/wyOmd8z2Uws",
    "equipment": "Cacerola, rodillo, cortador de 12 cm, brocha y charola.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 300,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "mantequilla fría sin sal, en cubos",
        "amount": 120,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 40,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 1,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "leche fría",
        "amount": 60,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "piña fresca, pelada y picada pequeña",
        "amount": 450,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "azúcar",
        "amount": 70,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "canela molida",
        "amount": 2,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "fécula de maíz",
        "amount": 12,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "agua",
        "amount": 20,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "huevo grande batido",
        "amount": 1,
        "unit": "pza",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Cocina la piña",
        "text": "Calienta la piña con el azúcar y la canela a fuego medio durante unos 12 minutos. Disuelve la fécula en el agua, incorpora y cocina 3 minutos más, removiendo, hasta tener un relleno espeso. Pasa a un recipiente amplio y deja enfriar por completo.",
        "minutes": 15
      },
      {
        "title": "Una masa sin prisa",
        "text": "Mezcla harina, azúcar y sal. Incorpora la mantequilla fría con las yemas de los dedos hasta obtener migas. Añade el huevo y la leche poco a poco, solo hasta unir. No amases en exceso.",
        "minutes": 0
      },
      {
        "title": "Descansa en frío",
        "text": "Cubre la masa y refrigera 30 minutos; durante ese tiempo termina de enfriarse el relleno. Precalienta el horno a 180 °C.",
        "minutes": 30
      },
      {
        "title": "Rellena y sella",
        "text": "Estira la masa a 3 mm y corta 12 discos de unos 12 cm, reuniendo los recortes sin sobreamasar. Reparte el relleno frío, dejando el borde libre. Dobla, humedece apenas los bordes con agua y sella con un tenedor.",
        "minutes": 0
      },
      {
        "title": "Dorado de panadería",
        "text": "Acomoda en una charola con papel. Barniza con el huevo batido y haz una pequeña ranura para que salga el vapor. Hornea a 180 °C unos 25 minutos, hasta que estén doradas y la base cocida.",
        "minutes": 25
      },
      {
        "title": "Que no queme el antojo",
        "text": "Deja reposar 20 minutos antes de comer: el relleno conserva mucho calor.",
        "minutes": 20
      }
    ],
    "tips": "El relleno debe estar frío y espeso antes de cerrar las empanadas. No las llenes de más. El tiempo de horno es por tanda si no caben juntas. Conserva refrigeradas hasta 3 días y recalienta para recuperar la textura."
  },
  {
    "id": "tarta-de-manzana",
    "name": "Tarta de manzana",
    "categoryLabel": "Manzana, canela y una mesa compartida",
    "tags": [
      "pasteles",
      "de-casa",
      "nuevas"
    ],
    "difficulty": "Intermedia",
    "servings": 8,
    "prep": 35,
    "cook": 45,
    "rest": 60,
    "oven": 190,
    "description": "Láminas de manzana, una base de mantequilla y ese aroma que hace que todos se acerquen a la cocina.",
    "photo": "photo-1633352638064-c65eedc51fff",
    "photoAlt": "Tarta de manzana horneada servida sobre una mesa con cubiertos",
    "photographer": "Monika Grabkowska",
    "photoSource": "https://unsplash.com/photos/Z2Ot4Z6B_S4",
    "equipment": "Molde para tarta de 24 cm, rodillo y cuchillo afilado.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 200,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla fría sin sal, en cubos",
        "amount": 100,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "azúcar",
        "amount": 50,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 1,
        "unit": "pza",
        "group": "Base"
      },
      {
        "name": "sal",
        "amount": 1,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "manzanas firmes, ya peladas y sin corazón",
        "amount": 650,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "azúcar",
        "amount": 60,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "jugo de limón",
        "amount": 15,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "canela molida",
        "amount": 3,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "fécula de maíz",
        "amount": 10,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "mantequilla sin sal, en cubitos",
        "amount": 20,
        "unit": "g",
        "group": "Relleno"
      }
    ],
    "steps": [
      {
        "title": "La base de mantequilla",
        "text": "Mezcla harina, azúcar y sal. Integra la mantequilla fría hasta formar migas; añade el huevo y une sin amasar de más. Forma un disco y cubre.",
        "minutes": 0
      },
      {
        "title": "Un descanso necesario",
        "text": "Refrigera la masa 30 minutos. Precalienta el horno a 190 °C y engrasa ligeramente el molde.",
        "minutes": 30
      },
      {
        "title": "Prepara las manzanas",
        "text": "Corta las manzanas en láminas de unos 2 mm. Mezcla con limón, azúcar, canela y fécula de maíz justo antes de armar la tarta.",
        "minutes": 0
      },
      {
        "title": "Arma tu tarta",
        "text": "Estira la masa a 3 mm y cubre el fondo y los lados del molde. Pincha la base con un tenedor. Distribuye la manzana en capas, sin amontonar demasiado el centro, y reparte la mantequilla del relleno.",
        "minutes": 0
      },
      {
        "title": "Al horno",
        "text": "Coloca el molde sobre una charola y hornea a 190 °C unos 45 minutos, hasta que la base esté dorada, la manzana tierna y los jugos burbujeen. Cubre suavemente los bordes si se doran antes.",
        "minutes": 45
      },
      {
        "title": "Dale tiempo de asentarse",
        "text": "Deja reposar al menos 30 minutos antes de desmoldar y cortar, para que el relleno se asiente.",
        "minutes": 30
      }
    ],
    "tips": "Combina manzanas ácidas y dulces si te gusta el contraste. Para una base más crujiente, coloca el molde en la mitad inferior del horno. Refrigera las sobras cubiertas y consume en 3 días."
  },
  {
    "id": "pay-de-queso",
    "name": "Pay de queso",
    "categoryLabel": "El clásico de la mesa familiar",
    "tags": [
      "pasteles",
      "frios",
      "de-casa",
      "nuevas"
    ],
    "difficulty": "Fácil",
    "servings": 8,
    "prep": 20,
    "cook": 45,
    "rest": 300,
    "oven": 170,
    "description": "Queso crema, leche condensada y una base de galleta: el pay de siempre, hecho a tu ritmo.",
    "photo": "photo-1774988867972-98caecc776d8",
    "photoAlt": "Rebanada de pay de queso con base de galleta en un plato claro",
    "photographer": "Leonardo Ziaja",
    "photoSource": "https://unsplash.com/photos/rWz-WXVOYPw",
    "equipment": "Molde para pay de 22 cm, licuadora y charola para horno.",
    "ingredients": [
      {
        "name": "galletas María",
        "amount": 180,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida sin sal",
        "amount": 80,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "queso crema a temperatura ambiente",
        "amount": 300,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "leche condensada",
        "amount": 300,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 3,
        "unit": "pzas",
        "group": "Relleno"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "jugo de limón",
        "amount": 15,
        "unit": "ml",
        "group": "Relleno"
      }
    ],
    "steps": [
      {
        "title": "La base",
        "text": "Precalienta el horno a 170 °C. Tritura las galletas y mezcla con la mantequilla. Presiona en el fondo y los lados del molde para pay.",
        "minutes": 0
      },
      {
        "title": "Licúa con suavidad",
        "text": "Licúa el queso crema, la leche condensada, los huevos, la vainilla y el limón solo hasta obtener una mezcla lisa, sin incorporar demasiado aire.",
        "minutes": 0
      },
      {
        "title": "Llena el molde",
        "text": "Vierte sobre la base. Da unos golpecitos suaves contra la mesa para liberar las burbujas grandes y coloca el molde sobre una charola.",
        "minutes": 0
      },
      {
        "title": "Al horno",
        "text": "Hornea a 170 °C unos 45 minutos. Los bordes deben estar firmes y el centro debe temblar ligeramente como gelatina, sin verse líquido. Si se dora demasiado pronto, cubre suavemente con aluminio.",
        "minutes": 45
      },
      {
        "title": "Enfría poco a poco",
        "text": "Apaga el horno, deja la puerta entreabierta y espera 20 minutos. Retira y deja enfriar otros 40 minutos, hasta que pierda el calor.",
        "minutes": 60
      },
      {
        "title": "Una pausa en el refrigerador",
        "text": "Cubre y refrigera por lo menos 4 horas antes de cortar. Sirve frío.",
        "minutes": 240
      }
    ],
    "tips": "El pay termina de asentarse al enfriar; hornearlo hasta que el centro esté completamente rígido puede agrietarlo. Ajusta el tiempo según tu horno. Conserva refrigerado y consume en 3 días."
  },
  {
    "id": "pan-de-elote",
    "name": "Pan de elote",
    "categoryLabel": "Dulce, dorado y muy de casa",
    "tags": [
      "pasteles",
      "de-casa",
      "faciles",
      "nuevas"
    ],
    "difficulty": "Fácil",
    "servings": 10,
    "prep": 15,
    "cook": 50,
    "rest": 30,
    "oven": 180,
    "description": "Elote tierno, una miga húmeda y el olor de un pan recién hecho para acompañar el café.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pan_de_elote.jpg/1280px-Pan_de_elote.jpg",
    "photoAlt": "Panes de elote horneados, con superficie dorada",
    "photographer": "Jruizs2k",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Pan_de_elote.jpg",
    "equipment": "Molde redondo de 22 cm, licuadora y papel para hornear.",
    "ingredients": [
      {
        "name": "granos de elote fresco y tierno, crudos",
        "amount": 500,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "leche condensada",
        "amount": 300,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "mantequilla derretida sin sal, tibia",
        "amount": 100,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 3,
        "unit": "pzas",
        "group": "Ingredientes"
      },
      {
        "name": "leche",
        "amount": 80,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "harina de trigo",
        "amount": 80,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "polvo para hornear",
        "amount": 10,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Precalienta el horno a 180 °C. Engrasa el molde y forra la base con papel para hornear.",
        "minutes": 0
      },
      {
        "title": "Licúa el elote",
        "text": "Licúa los granos de elote con la leche, la leche condensada, los huevos y la vainilla hasta obtener una mezcla espesa. Puede conservar pequeños trocitos de elote.",
        "minutes": 0
      },
      {
        "title": "Integra la mantequilla",
        "text": "Añade la mantequilla derretida y tibia. Mezcla la harina con el polvo para hornear y la sal; incorpora a la mezcla de elote solo hasta integrar.",
        "minutes": 0
      },
      {
        "title": "Dorado y húmedo",
        "text": "Vierte en el molde y hornea a 180 °C unos 50 minutos. Comprueba con un palillo en el centro: debe salir sin masa líquida. Si hace falta, continúa en intervalos de 5 minutos; cubre si la superficie ya está dorada.",
        "minutes": 50
      },
      {
        "title": "Enfría antes de cortar",
        "text": "Deja reposar 15 minutos en el molde. Desmolda con cuidado y espera otros 15 minutos antes de cortar.",
        "minutes": 30
      }
    ],
    "tips": "Usa elote fresco y tierno, no maíz seco ni maíz para pozole. Su humedad cambia según la variedad: revisa siempre el centro. Es un pan húmedo, no un bizcocho seco. Guarda cubierto en refrigeración hasta 3 días.",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "photoPlatform": "Wikimedia Commons"
  },
  {
    "id": "arroz-con-leche",
    "name": "Arroz con leche",
    "categoryLabel": "El favorito de Ángel",
    "tags": [
      "frios",
      "sin-horno",
      "de-casa",
      "faciles",
      "nuevas"
    ],
    "difficulty": "Fácil",
    "servings": 6,
    "prep": 10,
    "cook": 40,
    "rest": 10,
    "oven": null,
    "description": "Cremoso, con canela y un lugar especial en este recetario. Este antojo tiene dueño: Ángel.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Arroz_con_Leche_y_Caf%C3%A9.jpg/1280px-Arroz_con_Leche_y_Caf%C3%A9.jpg",
    "photoAlt": "Arroz con leche servido en una copa, acompañado de café",
    "photographer": "Armando Olivo Martín del Campo",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Arroz_con_Leche_y_Caf%C3%A9.jpg",
    "photoFocus": "right",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "equipment": "Cacerola de fondo grueso de al menos 3 litros, cuchara y seis tazones.",
    "ingredients": [
      {
        "name": "arroz blanco de grano largo",
        "amount": 200,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "agua",
        "amount": 500,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "canela en rama",
        "amount": 4,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "sal",
        "amount": 1,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "leche entera",
        "amount": 1000,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "leche condensada",
        "amount": 180,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "canela molida para servir",
        "amount": 1,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Empieza por el arroz",
        "text": "Enjuaga brevemente el arroz y escúrrelo. Coloca en la cacerola con el agua, la canela en rama y la sal.",
        "minutes": 0
      },
      {
        "title": "Que se abra el grano",
        "text": "Lleva a hervor y baja el fuego. Cocina con la tapa entreabierta unos 15 minutos, hasta que el arroz absorba casi toda el agua. Si todavía está muy duro y se queda seco, agrega un poco de agua caliente.",
        "minutes": 15
      },
      {
        "title": "La parte cremosa",
        "text": "Añade la leche entera y mantén un hervor muy suave, con la cacerola destapada. Cocina unos 20 minutos, removiendo seguido y pasando la cuchara por el fondo para que no se pegue. El arroz debe quedar tierno.",
        "minutes": 20
      },
      {
        "title": "El toque dulce",
        "text": "Incorpora la leche condensada y la vainilla. Cocina 5 minutos más a fuego bajo, removiendo. Retira la canela en rama. Déjalo un poco más líquido de lo que quieres: se espesa al reposar.",
        "minutes": 5
      },
      {
        "title": "A tu gusto, Ángel",
        "text": "Retira del fuego y deja reposar 10 minutos. Sirve tibio con la canela molida repartida por encima, o refrigera para disfrutar frío.",
        "minutes": 10
      }
    ],
    "tips": "Si lo prefieres más suelto después de enfriar, añade un chorrito de leche. Para servir frío, reparte en recipientes poco profundos y refrigera dentro de las 2 horas siguientes a la cocción. Conserva refrigerado y consume en 3 días."
  }
];

const storageKey = "sweet-notes.v1";
const recipeById = new Map(recipeCatalog.map(recipe => [recipe.id, recipe]));
const categoryNames = { chocolate: "Chocolate", pasteles: "Pasteles", galletas: "Galletas", frios: "Postres fríos", "sin-horno": "Sin horno", faciles: "Recetas fáciles", nuevas: "Recién llegadas", "de-casa": "Sabores de casa" };
const numberFormatter = new Intl.NumberFormat("es-MX", { maximumFractionDigits: 2 });
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let storageWorks = true;
let savedData = {};

try {
  const rawData = JSON.parse(localStorage.getItem(storageKey) || "{}");
  if (rawData && typeof rawData === "object" && !Array.isArray(rawData)) savedData = rawData;
} catch {
  storageWorks = false;
}

const favoriteIds = new Set(Array.isArray(savedData.favorites) ? savedData.favorites.filter(id => recipeById.has(id)) : []);
const kitchenStates = new Map();
const activeTimers = new Map();
const filters = { category: "all", search: "", difficulty: "all", time: "all", sort: "featured" };
let visibleCount = 6;
let currentRecipeId = null;
let cookingMode = false;
let timerStepIndex = null;
let previouslyFocused = null;
let toastTimeout;
let audioContext;
let wakeLock;
const spotifyDefaultUrl = normalizeSpotifyUrl(SPOTIFY_PLAYLIST_URL);
let spotifyUrl = savedData.spotifyDefaultUrl === spotifyDefaultUrl ? normalizeSpotifyUrl(savedData.spotifyUrl) || spotifyDefaultUrl || "" : spotifyDefaultUrl || normalizeSpotifyUrl(savedData.spotifyUrl) || "";

const pageShell = document.getElementById("page-shell");
const experienceLayer = document.getElementById("experience-layer");
const recipeOverlay = document.getElementById("recipe-overlay");
const recipeDialog = document.getElementById("recipe-dialog");
const recipeDetail = document.getElementById("recipe-detail");
const recipeGrid = document.getElementById("recipe-grid");
const favoritesGrid = document.getElementById("favorites-grid");
const musicPlayer = document.getElementById("music-player");
const playerBody = document.getElementById("player-body");
const recipeSearch = document.getElementById("recipe-search");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
let recipeCardObserver = null;
let tiltedRecipeCard = null;
let cardTiltFrame = 0;
let pendingCardTilt = null;
const heroRecipeChoices = ["cheesecake-de-fresa", "brownies-de-chocolate", "galletas-red-velvet"];
const heroRecipeCaptions = ["FRESAS + UN POCO DE MAGIA", "CHOCOLATE, PORQUE SÍ.", "ALGO FUERA DE LO COMÚN."];
let heroRecipeId = heroRecipeChoices[0];
let heroImageRequest = 0;
let heroSwipeStart = null;
let heroSwipeConsumed = false;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
}

function icon(name, extraClass = "") {
  return `<svg class="icon ${escapeHTML(extraClass)}" aria-hidden="true"><use href="#i-${escapeHTML(name)}"/></svg>`;
}

function totalMinutes(recipe) {
  return recipe.prep + recipe.cook + recipe.rest;
}

function formatDuration(minutes) {
  if (minutes === 0) return "Sin espera";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} h${remainingMinutes ? ` ${remainingMinutes} min` : ""}`;
}

function normalizeSearch(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function kitchenState(recipe) {
  if (kitchenStates.has(recipe.id)) return kitchenStates.get(recipe.id);
  const stored = savedData.kitchen && typeof savedData.kitchen === "object" ? savedData.kitchen[recipe.id] : null;
  const state = {
    servings: stored && Number.isInteger(stored.servings) && stored.servings >= 1 && stored.servings <= 60 ? stored.servings : recipe.servings,
    checked: new Set(stored && Array.isArray(stored.checked) ? stored.checked.filter(index => Number.isInteger(index) && index >= 0 && index < recipe.ingredients.length) : []),
    completed: new Set(stored && Array.isArray(stored.completed) ? stored.completed.filter(index => Number.isInteger(index) && index >= 0 && index < recipe.steps.length) : []),
    currentStep: stored && Number.isInteger(stored.currentStep) ? Math.max(0, Math.min(stored.currentStep, recipe.steps.length)) : 0
  };
  kitchenStates.set(recipe.id, state);
  return state;
}

function persistData() {
  const kitchen = {};
  for (const recipe of recipeCatalog) {
    const state = kitchenState(recipe);
    kitchen[recipe.id] = { servings: state.servings, checked: [...state.checked], completed: [...state.completed], currentStep: state.currentStep };
  }
  const data = { favorites: [...favoriteIds], kitchen, spotifyUrl, spotifyDefaultUrl, timers: [...activeTimers.values()] };
  savedData = data;
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
    storageWorks = true;
  } catch {
    if (storageWorks) showToast("El navegador no permite guardar cambios. Se conservarán durante esta visita.");
    storageWorks = false;
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.hidden = false;
  toastTimeout = setTimeout(() => { toast.hidden = true; }, 4200);
}

function imageMarkup(recipe, width = 800, lazy = true) {
  if (recipe.photo.startsWith("https://")) return `<img src="${escapeHTML(recipe.photo)}"${recipe.photoFocus ? ` data-photo-focus="${escapeHTML(recipe.photoFocus)}"` : ""} width="1280" height="960" alt="${escapeHTML(recipe.photoAlt)}" loading="${lazy ? "lazy" : "eager"}" decoding="async"><span class="photo-fallback" hidden>${escapeHTML(recipe.name)}</span>`;
  const base = `https://images.unsplash.com/${recipe.photo}?auto=format&fit=crop`;
  return `<img src="${base}&w=${width}&q=80" srcset="${base}&w=400&q=75 400w, ${base}&w=800&q=80 800w, ${base}&w=1200&q=80 1200w" sizes="${lazy ? "(max-width: 650px) calc(100vw - 40px), (max-width: 900px) 44vw, 370px" : "(max-width: 650px) calc(100vw - 20px), 285px"}" width="800" height="600" alt="${escapeHTML(recipe.photoAlt)}" ${lazy ? 'loading="lazy"' : 'loading="eager"'} decoding="async"><span class="photo-fallback" hidden>${escapeHTML(recipe.name)}</span>`;
}

function favoriteLabel(recipe) {
  return `${favoriteIds.has(recipe.id) ? "Quitar" : "Guardar"} ${recipe.name} ${favoriteIds.has(recipe.id) ? "de" : "en"} favoritas`;
}

function cardMarkup(recipe) {
  const saved = favoriteIds.has(recipe.id);
  const badge = recipe.id === "arroz-con-leche" ? "El favorito de Ángel" : recipe.tags.includes("nuevas") ? "Nuevo antojo" : recipe.tags.includes("sin-horno") ? "Sin horno" : recipe.difficulty === "Fácil" ? "Fácil de querer" : "Hecho con calma";
  return `<article class="recipe-card" data-recipe-card="${recipe.id}"><div class="card-photo"><button class="card-open-image" type="button" data-open-recipe="${recipe.id}" aria-label="Ver receta de ${escapeHTML(recipe.name)}">${imageMarkup(recipe)}</button><span class="card-badge">${badge}</span><button class="favorite-button${saved ? " is-saved" : ""}" type="button" data-favorite="${recipe.id}" aria-pressed="${saved}" aria-label="${escapeHTML(favoriteLabel(recipe))}">${icon("heart")}</button></div><div class="card-copy"><p class="card-category">${escapeHTML(recipe.categoryLabel)}</p><h3 class="card-title"><button type="button" data-open-recipe="${recipe.id}">${escapeHTML(recipe.name)}</button></h3><p class="card-description">${escapeHTML(recipe.description)}</p><div class="card-meta"><span>${icon("clock")}${formatDuration(totalMinutes(recipe))}</span><span><i class="difficulty-dot" aria-hidden="true"></i>${recipe.difficulty}</span><button class="card-arrow" type="button" data-open-recipe="${recipe.id}" aria-label="Preparar ${escapeHTML(recipe.name)}">${icon("arrow")}</button></div></div></article>`;
}

function filteredRecipes() {
  const words = normalizeSearch(filters.search).split(/\s+/).filter(Boolean);
  const matches = recipeCatalog.filter(recipe => {
    const searchText = normalizeSearch([recipe.name, recipe.description, recipe.categoryLabel, ...recipe.tags.map(tag => categoryNames[tag]), ...recipe.ingredients.map(item => item.name)].join(" "));
    return (filters.category === "all" || recipe.tags.includes(filters.category)) &&
      (filters.difficulty === "all" || recipe.difficulty === filters.difficulty) &&
      (filters.time === "all" || recipe.prep <= Number(filters.time)) &&
      words.every(word => searchText.includes(word));
  });
  if (filters.sort === "quick") matches.sort((first, second) => totalMinutes(first) - totalMinutes(second));
  if (filters.sort === "alphabetical") matches.sort((first, second) => first.name.localeCompare(second.name, "es"));
  return matches;
}

function renderRecipeCards(container, recipes) {
  const replacingCards = container.childElementCount > 0;
  if (recipeCardObserver) container.querySelectorAll(".recipe-card").forEach(card => recipeCardObserver.unobserve(card));
  if (tiltedRecipeCard && container.contains(tiltedRecipeCard)) resetCardTilt();
  container.innerHTML = recipes.map(cardMarkup).join("");
  if (replacingCards && !reducedMotion.matches && container.animate) {
    container.getAnimations().forEach(animation => animation.cancel());
    container.animate([{ opacity: .5, translate: "0 7px" }, { opacity: 1, translate: "0 0" }], { duration: 260, easing: "cubic-bezier(.2,.75,.3,1)" });
  }
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
  if (!recipeCardObserver) {
    recipeCardObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!reducedMotion.matches) entry.target.classList.add("card-reveal");
        recipeCardObserver.unobserve(entry.target);
      }
    }, { threshold: .08 });
  }
  container.querySelectorAll(".recipe-card").forEach(card => recipeCardObserver.observe(card));
}

function renderRecipes() {
  const recipes = filteredRecipes();
  const visibleRecipes = recipes.slice(0, visibleCount);
  renderRecipeCards(recipeGrid, visibleRecipes);
  document.getElementById("results-count").textContent = `${recipes.length} ${recipes.length === 1 ? "receta encontrada" : "recetas encontradas"}${recipes.length > visibleCount ? ` · ${visibleRecipes.length} a la vista` : ""}`;
  document.getElementById("no-results").hidden = recipes.length !== 0;
  document.getElementById("load-more").hidden = visibleCount >= recipes.length;
  document.getElementById("clear-filters").hidden = !filters.search && filters.category === "all" && filters.difficulty === "all" && filters.time === "all";
  document.querySelectorAll("[data-filter]").forEach(button => {
    const selected = button.dataset.filter === filters.category;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll("[data-category-shortcut]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.categoryShortcut === filters.category)));
}

function renderFavorites() {
  const recipes = recipeCatalog.filter(recipe => favoriteIds.has(recipe.id));
  renderRecipeCards(favoritesGrid, recipes);
  favoritesGrid.hidden = recipes.length === 0;
  document.getElementById("favorites-empty").hidden = recipes.length !== 0;
  document.getElementById("nav-favorite-count").textContent = recipes.length;
  document.getElementById("favorite-collection-count").textContent = `TU COLECCIÓN · ${String(recipes.length).padStart(2, "0")}`;
}

function toggleFavorite(id, sourceButton) {
  const recipe = recipeById.get(id);
  if (!recipe) return;
  const favoriteButtons = [...favoritesGrid.querySelectorAll("[data-favorite]")];
  const previousIndex = favoriteButtons.indexOf(sourceButton);
  if (favoriteIds.has(id)) favoriteIds.delete(id);
  else favoriteIds.add(id);
  persistData();
  renderFavorites();
  document.querySelectorAll(`[data-favorite="${id}"]`).forEach(button => {
    button.classList.toggle("is-saved", favoriteIds.has(id));
    button.setAttribute("aria-pressed", String(favoriteIds.has(id)));
    button.setAttribute("aria-label", favoriteLabel(recipe));
    button.classList.remove("pop");
    requestAnimationFrame(() => button.classList.add("pop"));
  });
  if (previousIndex >= 0) {
    const remainingButtons = favoritesGrid.querySelectorAll("[data-favorite]");
    const nextFocus = remainingButtons[Math.min(previousIndex, remainingButtons.length - 1)] || document.querySelector("#favorites-empty a");
    nextFocus?.focus({ preventScroll: true });
  }
  showToast(favoriteIds.has(id) ? `${recipe.name}: guardada con cariño.` : `${recipe.name}: eliminada de favoritas.`);
}

function resetFilters() {
  Object.assign(filters, { category: "all", search: "", difficulty: "all", time: "all", sort: "featured" });
  recipeSearch.value = "";
  document.getElementById("difficulty-filter").value = "all";
  document.getElementById("time-filter").value = "all";
  document.getElementById("sort-recipes").value = "featured";
  visibleCount = 6;
  renderRecipes();
}

function formatIngredientAmount(item, multiplier) {
  const amount = item.amount * multiplier;
  let quantity = numberFormatter.format(amount);
  let unit = item.unit;
  if (/^pza/.test(unit)) {
    const whole = Math.floor(amount);
    const fraction = amount - whole;
    const fractionSymbols = [[.25, "¼"], [.5, "½"], [.75, "¾"], [1 / 3, "⅓"], [2 / 3, "⅔"]];
    const match = fractionSymbols.find(([decimal]) => Math.abs(decimal - fraction) < .0001);
    if (match) quantity = `${whole || ""}${match[1]}`;
    unit = Math.abs(amount - 1) < .0001 ? "pza." : "pzas.";
  }
  return `${quantity} ${unit}`;
}

function ingredientListMarkup(recipe) {
  const state = kitchenState(recipe);
  let previousGroup;
  return recipe.ingredients.map((item, index) => {
    const groupHeading = item.group !== previousGroup ? `<h4 class="ingredient-group">${escapeHTML(item.group)}</h4>` : "";
    previousGroup = item.group;
    return `${groupHeading}<label class="ingredient-item"><input type="checkbox" data-ingredient="${index}" ${state.checked.has(index) ? "checked" : ""}><span><span class="ingredient-quantity">${formatIngredientAmount(item, state.servings / recipe.servings)}</span> ${escapeHTML(item.name)}</span></label>`;
  }).join("");
}

function stepsMarkup(recipe) {
  const state = kitchenState(recipe);
  return recipe.steps.map((step, index) => `<li class="recipe-step${state.completed.has(index) ? " is-complete" : ""}" data-step-index="${index}" ${cookingMode && state.currentStep !== index ? "hidden" : ""}><button class="step-complete" type="button" data-complete-step="${index}" data-step-number="${String(index + 1).padStart(2, "0")}" aria-label="${state.completed.has(index) ? "Desmarcar" : "Completar"} paso ${index + 1}: ${escapeHTML(step.title)}" aria-pressed="${state.completed.has(index)}">${icon("check")}</button><h4${cookingMode && state.currentStep === index ? ' id="current-step-title" tabindex="-1"' : ""}>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.text)}</p>${step.minutes ? `<button class="step-timer-button" type="button" data-step-timer="${index}">${icon("clock")} Temporizador · ${formatDuration(step.minutes)}</button>` : ""}</li>`).join("");
}

function timerFormMarkup(recipe) {
  if (timerStepIndex === null || !recipe.steps[timerStepIndex]) return "";
  const step = recipe.steps[timerStepIndex];
  return `<form class="timer-config" id="timer-form"><h4>Un momento para esperar</h4><p>Paso ${timerStepIndex + 1} · ${escapeHTML(step.title)}</p><div class="timer-config-row"><label for="timer-minutes">Minutos</label><input id="timer-minutes" type="number" min="0.1" max="1440" step="0.1" value="${step.minutes || 5}" required><button class="button button-primary" type="submit">Iniciar ${icon("clock")}</button><button class="text-button" type="button" data-action="timer-cancel">Cancelar</button></div></form>`;
}

function renderDetail() {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe) return;
  const state = kitchenState(recipe);
  const finishedRoute = cookingMode && state.currentStep === recipe.steps.length;
  recipeDialog.classList.toggle("is-cooking", cookingMode);
  const cookNavigation = cookingMode && !finishedRoute ? `<div class="cook-navigation"><button class="button button-outline" type="button" data-action="previous-step" ${state.currentStep === 0 ? "disabled" : ""}>${icon("arrow", "back-arrow")} Anterior</button><span class="cook-position">Paso ${state.currentStep + 1} de ${recipe.steps.length}</span><button class="button button-primary" type="button" data-action="next-step">${state.currentStep === recipe.steps.length - 1 ? "Terminar" : "Completar y seguir"} ${icon("arrow")}</button></div>` : "";
  const completion = finishedRoute ? `<div class="cook-completion"><p class="handwritten">${state.completed.size === recipe.steps.length ? "Algo rico acaba de nacer." : "Llegaste al final del recorrido."}</p><p>${state.completed.size} de ${recipe.steps.length} pasos marcados. ${state.completed.size === recipe.steps.length ? "Disfruta lo que preparaste, Maribel." : "Puedes volver a revisar los pasos que te falten."}</p><button class="button button-outline" type="button" data-action="review-steps">Volver a los pasos ${icon("arrow")}</button></div>` : "";
  recipeDetail.innerHTML = `<div class="detail-intro"><div class="detail-photo">${imageMarkup(recipe, 800, false)}</div><div class="detail-summary"><p class="eyebrow">${escapeHTML(recipe.categoryLabel)}</p><h2 id="detail-title" tabindex="-1">${escapeHTML(recipe.name)}</h2><p>${escapeHTML(recipe.description)}</p><div class="detail-stats"><div class="detail-stat"><small>Preparación</small><strong>${formatDuration(recipe.prep)}</strong></div><div class="detail-stat"><small>Cocción</small><strong>${recipe.cook ? formatDuration(recipe.cook) : "Sin cocción"}</strong></div><div class="detail-stat"><small>Reposo / frío</small><strong>${recipe.rest ? formatDuration(recipe.rest) : "Sin reposo"}</strong></div><div class="detail-stat"><small>Porciones</small><strong id="detail-yield">${state.servings}</strong></div><div class="detail-stat"><small>Nivel</small><strong>${recipe.difficulty}</strong></div><div class="detail-stat"><small>Horno</small><strong>${recipe.oven ? `${recipe.oven} °C` : "Sin horno"}</strong></div></div><div class="detail-actions"><button class="button ${cookingMode ? "button-outline" : "button-primary"}" type="button" data-action="toggle-cook" aria-pressed="${cookingMode}">${icon("cook")}${cookingMode ? "Ver receta completa" : "Modo cocina"}</button><button class="button button-outline detail-favorite${favoriteIds.has(recipe.id) ? " is-saved" : ""}" type="button" data-favorite="${recipe.id}" aria-pressed="${favoriteIds.has(recipe.id)}" aria-label="${escapeHTML(favoriteLabel(recipe))}">${icon("heart")} Favorita</button><button class="icon-button" type="button" data-action="share" aria-label="Compartir ${escapeHTML(recipe.name)}">${icon("share")}</button><button class="icon-button" type="button" data-music-open aria-label="Abrir música mientras cocinas">${icon("music")}</button></div><div class="share-fallback" id="share-fallback" hidden><label for="share-url">Copia este enlace para compartir la receta</label><input id="share-url" readonly></div></div></div><div class="detail-columns"><section class="ingredients-pane" aria-labelledby="ingredients-title"><h3 id="ingredients-title">Lo que necesitas</h3><div class="servings-control"><span>Porciones</span><div class="servings-stepper"><button type="button" data-action="less-portions" aria-label="Reducir una porción" ${state.servings <= 1 ? "disabled" : ""}>${icon("minus")}</button><output id="portion-output" aria-live="polite">${state.servings}</output><button type="button" data-action="more-portions" aria-label="Aumentar una porción" ${state.servings >= 60 ? "disabled" : ""}>${icon("plus")}</button></div></div><p class="portion-note">Cantidades base para ${recipe.servings}. Si necesitas una fracción de huevo, bátelo y pesa esa proporción. Ajusta el molde; los tiempos no se multiplican.</p><div id="ingredient-list">${ingredientListMarkup(recipe)}</div><p class="ingredients-progress" id="ingredients-progress">${state.checked.size} de ${recipe.ingredients.length} ingredientes listos</p><p class="portion-note">${escapeHTML(recipe.equipment)}</p></section><section class="steps-pane" aria-labelledby="steps-title"><div class="steps-title-row"><h3 id="steps-title">${cookingMode ? "A tu ritmo, paso a paso." : "Manos a la masa"}</h3><span class="steps-progress" id="steps-progress">${state.completed.size}/${recipe.steps.length} listos</span></div>${timerFormMarkup(recipe)}<ol class="steps-list" aria-label="Pasos de preparación">${stepsMarkup(recipe)}</ol>${completion}${cookNavigation}<aside class="recipe-tips"><h4>Una nota de tu recetario</h4><p>${escapeHTML(recipe.tips)}</p></aside></section></div><p class="recipe-credit">Fotografía ilustrativa: <a href="${escapeHTML(recipe.photoSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(recipe.photographer)} en ${escapeHTML(recipe.photoPlatform || "Unsplash")}</a>${recipe.photoLicense ? ` · <a href="${escapeHTML(recipe.photoLicenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(recipe.photoLicense)}</a> · encuadre adaptado` : ""}. La presentación puede variar. Tiempo total estimado: ${formatDuration(totalMinutes(recipe))}; los levados y la cocción dependen de tu cocina.</p>`;
}

function recipeLink(id) {
  const url = new URL(window.location.href);
  url.searchParams.set("receta", id);
  url.hash = "recetas";
  return url.href;
}

function openRecipe(id, updateHistory = true) {
  const recipe = recipeById.get(id);
  if (!recipe) return;
  if (!currentRecipeId) previouslyFocused = document.activeElement;
  currentRecipeId = id;
  cookingMode = false;
  timerStepIndex = null;
  recipeOverlay.hidden = false;
  document.body.classList.add("modal-open");
  pageShell.inert = true;
  document.querySelector(".skip-link").inert = true;
  pageShell.setAttribute("aria-hidden", "true");
  experienceLayer.setAttribute("role", "dialog");
  experienceLayer.setAttribute("aria-modal", "true");
  experienceLayer.setAttribute("aria-labelledby", "detail-title");
  renderDetail();
  recipeOverlay.scrollTop = 0;
  if (updateHistory && new URL(window.location.href).searchParams.get("receta") !== id) history.pushState({ recipe: id }, "", recipeLink(id));
  requestAnimationFrame(() => document.getElementById("detail-title")?.focus({ preventScroll: true }));
}

function closeRecipe(updateHistory = true, restoreFocus = true) {
  if (!currentRecipeId) return;
  currentRecipeId = null;
  cookingMode = false;
  timerStepIndex = null;
  recipeOverlay.hidden = true;
  document.body.classList.remove("modal-open");
  pageShell.inert = false;
  document.querySelector(".skip-link").inert = false;
  pageShell.removeAttribute("aria-hidden");
  experienceLayer.removeAttribute("role");
  experienceLayer.removeAttribute("aria-modal");
  experienceLayer.removeAttribute("aria-labelledby");
  releaseWakeLock();
  if (updateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.delete("receta");
    history.replaceState(null, "", url.href);
  }
  if (restoreFocus) {
    const focusTarget = previouslyFocused?.isConnected && previouslyFocused !== document.body ? previouslyFocused : document.getElementById("recipes-title");
    focusTarget.focus({ preventScroll: true });
  }
}

function updateServings(change) {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe) return;
  const state = kitchenState(recipe);
  state.servings = Math.max(1, Math.min(60, state.servings + change));
  document.getElementById("portion-output").textContent = state.servings;
  document.getElementById("detail-yield").textContent = state.servings;
  document.getElementById("ingredient-list").innerHTML = ingredientListMarkup(recipe);
  document.querySelector('[data-action="less-portions"]').disabled = state.servings <= 1;
  document.querySelector('[data-action="more-portions"]').disabled = state.servings >= 60;
  persistData();
}

function setStepComplete(index) {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe || !recipe.steps[index]) return;
  const state = kitchenState(recipe);
  if (state.completed.has(index)) state.completed.delete(index);
  else state.completed.add(index);
  persistData();
  const button = recipeDetail.querySelector(`[data-complete-step="${index}"]`);
  const completed = state.completed.has(index);
  button.setAttribute("aria-pressed", String(completed));
  button.setAttribute("aria-label", `${completed ? "Desmarcar" : "Completar"} paso ${index + 1}: ${recipe.steps[index].title}`);
  button.closest(".recipe-step").classList.toggle("is-complete", completed);
  document.getElementById("steps-progress").textContent = `${state.completed.size}/${recipe.steps.length} listos`;
}

async function requestWakeLock() {
  if (!cookingMode || document.visibilityState !== "visible" || !("wakeLock" in navigator) || wakeLock) return;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => { wakeLock = null; }, { once: true });
    if (!cookingMode) releaseWakeLock();
  } catch {
    wakeLock = null;
  }
}

function releaseWakeLock() {
  if (wakeLock) {
    const currentLock = wakeLock;
    wakeLock = null;
    currentLock.release().catch(() => { wakeLock = null; });
  }
}

function toggleCookingMode() {
  cookingMode = !cookingMode;
  timerStepIndex = null;
  renderDetail();
  recipeOverlay.scrollTo({ top: 0, behavior: reducedMotion.matches ? "instant" : "smooth" });
  recipeDetail.querySelector('[data-action="toggle-cook"]')?.focus({ preventScroll: true });
  if (cookingMode) requestWakeLock();
  else releaseWakeLock();
}

function advanceCookStep(direction) {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe) return;
  const state = kitchenState(recipe);
  if (direction > 0 && state.currentStep < recipe.steps.length) state.completed.add(state.currentStep);
  state.currentStep = Math.max(0, Math.min(recipe.steps.length, state.currentStep + direction));
  timerStepIndex = null;
  persistData();
  renderDetail();
  const target = document.getElementById("current-step-title") || recipeDetail.querySelector('[data-action="review-steps"]');
  target?.focus({ preventScroll: true });
}

async function shareRecipe() {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe) return;
  const url = recipeLink(recipe.id);
  if (navigator.share) {
    try {
      await navigator.share({ title: `${recipe.name} · Sweet Notes`, text: `Un antojo para compartir: ${recipe.name}.`, url });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(url);
      showToast("Enlace copiado. Compártelo con alguien especial.");
      return;
    } catch {
      showManualShare(url);
      return;
    }
  }
  showManualShare(url);
}

function showManualShare(url) {
  if (!currentRecipeId) return;
  document.getElementById("share-fallback").hidden = false;
  const field = document.getElementById("share-url");
  field.value = url;
  field.focus();
  field.select();
  showToast("Copia el enlace seleccionado para compartir tu receta.");
}

function prepareTimerSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume().catch(() => { audioContext = null; });
  } catch {
    audioContext = null;
  }
}

function playTimerSound() {
  if (!audioContext || audioContext.state !== "running") return;
  for (let index = 0; index < 3; index += 1) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = audioContext.currentTime + index * .35;
    oscillator.frequency.value = 660 + index * 110;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(.12, start + .03);
    gain.gain.exponentialRampToValueAtTime(.001, start + .25);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + .26);
    oscillator.addEventListener("ended", () => { oscillator.disconnect(); gain.disconnect(); }, { once: true });
  }
}

function restoreTimers() {
  if (!Array.isArray(savedData.timers)) return;
  for (const timer of savedData.timers.slice(0, 30)) {
    if (!timer || typeof timer !== "object") continue;
    const recipe = recipeById.get(timer.recipeId);
    if (!recipe || !Number.isInteger(timer.stepIndex) || !recipe.steps[timer.stepIndex]) continue;
    if (!Number.isFinite(timer.durationMs) || timer.durationMs < 6000 || timer.durationMs > 86400000) continue;
    if (!Number.isFinite(timer.remainingMs) || timer.remainingMs < 0 || timer.remainingMs > 86400000) continue;
    if (!Number.isFinite(timer.deadline) || timer.deadline < 0 || timer.deadline > Date.now() + 86400000) continue;
    const key = `${recipe.id}:${timer.stepIndex}`;
    activeTimers.set(key, { key, recipeId: recipe.id, stepIndex: timer.stepIndex, durationMs: timer.durationMs, remainingMs: timer.remainingMs, deadline: timer.deadline, paused: timer.paused === true, finished: timer.finished === true });
  }
}

function timerRemaining(timer) {
  if (timer.finished) return 0;
  return Math.max(0, timer.paused ? timer.remainingMs : timer.deadline - Date.now());
}

function formatCountdown(milliseconds) {
  const seconds = Math.ceil(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}` : `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function renderTimerTray() {
  document.getElementById("timer-tray").hidden = activeTimers.size === 0;
  document.getElementById("timer-list").innerHTML = [...activeTimers.values()].map(timer => {
    const recipe = recipeById.get(timer.recipeId);
    return `<div class="timer-item${timer.finished ? " is-finished" : ""}" data-timer-item="${timer.key}"><div class="timer-item-info"><button type="button" data-timer-open="${timer.key}">${escapeHTML(recipe.name)}</button><span>Paso ${timer.stepIndex + 1}${timer.paused ? " · En pausa" : ""}</span></div><span class="timer-time" role="timer" aria-label="Tiempo restante">${timer.finished ? "¡Listo!" : formatCountdown(timerRemaining(timer))}</span>${!timer.finished ? `<button class="icon-button" type="button" data-timer-toggle="${timer.key}" aria-label="${timer.paused ? "Reanudar" : "Pausar"} temporizador de ${escapeHTML(recipe.name)}">${icon(timer.paused ? "play" : "pause")}</button>` : ""}<button class="icon-button" type="button" data-timer-reset="${timer.key}" aria-label="Reiniciar temporizador de ${escapeHTML(recipe.name)}"><span aria-hidden="true">↻</span></button><button class="icon-button" type="button" data-timer-dismiss="${timer.key}" aria-label="Eliminar temporizador de ${escapeHTML(recipe.name)}">${icon("close")}</button></div>`;
  }).join("");
}

function tickTimers() {
  let finishedNow = false;
  for (const timer of activeTimers.values()) {
    const remaining = timerRemaining(timer);
    if (!timer.paused && !timer.finished && remaining <= 0) {
      timer.finished = true;
      timer.remainingMs = 0;
      finishedNow = true;
      showToast(`${recipeById.get(timer.recipeId).name}: terminó el temporizador del paso ${timer.stepIndex + 1}. Revisa tu preparación.`);
    }
    const output = document.querySelector(`[data-timer-item="${timer.key}"] .timer-time`);
    if (output) output.textContent = timer.finished ? "¡Listo!" : formatCountdown(remaining);
  }
  if (finishedNow) {
    playTimerSound();
    persistData();
    renderTimerTray();
  }
}

function beginTimer(minutes) {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe || timerStepIndex === null || !Number.isFinite(minutes) || minutes < .1 || minutes > 1440) return;
  const key = `${recipe.id}:${timerStepIndex}`;
  const previous = activeTimers.get(key);
  if (previous && !previous.finished) {
    showToast("Este paso ya tiene un temporizador. Puedes pausarlo o reiniciarlo en la esquina inferior.");
    return;
  }
  const durationMs = Math.round(minutes * 60000);
  activeTimers.set(key, { key, recipeId: recipe.id, stepIndex: timerStepIndex, durationMs, remainingMs: durationMs, deadline: Date.now() + durationMs, paused: false, finished: false });
  prepareTimerSound();
  timerStepIndex = null;
  persistData();
  renderTimerTray();
  renderDetail();
  recipeDetail.querySelector(`[data-step-timer="${key.split(":")[1]}"]`)?.focus({ preventScroll: true });
  showToast(`Temporizador iniciado: ${numberFormatter.format(minutes)} min. Sigue activo al cerrar la receta; para avisarte, mantén la página abierta.`);
}

function handleTimerAction(action, key, sourceButton) {
  const timer = activeTimers.get(key);
  if (!timer) return;
  if (action === "open") {
    openRecipe(timer.recipeId);
    cookingMode = true;
    kitchenState(recipeById.get(timer.recipeId)).currentStep = timer.stepIndex;
    renderDetail();
    requestWakeLock();
    return;
  }
  if (action === "dismiss") activeTimers.delete(key);
  if (action === "toggle") {
    const remaining = timerRemaining(timer);
    timer.paused = !timer.paused;
    timer.remainingMs = remaining;
    if (!timer.paused) timer.deadline = Date.now() + remaining;
  }
  if (action === "reset") {
    timer.remainingMs = timer.durationMs;
    timer.deadline = Date.now() + timer.durationMs;
    timer.paused = false;
    timer.finished = false;
    prepareTimerSound();
  }
  const shouldRestore = document.activeElement === sourceButton;
  persistData();
  renderTimerTray();
  if (shouldRestore) {
    const target = document.querySelector(`[data-timer-${action}="${key}"]`) || document.querySelector("#timer-list button") || (currentRecipeId ? document.getElementById("close-recipe") : previouslyFocused);
    target?.focus({ preventScroll: true });
  }
}

function normalizeSpotifyUrl(value) {
  if (typeof value !== "string" || !value.trim() || value === "PEGAR_AQUI_MI_ENLACE_DE_SPOTIFY") return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" || url.hostname !== "open.spotify.com" || url.username || url.password || url.port) return null;
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts[0] && /^intl-[a-z-]+$/i.test(parts[0])) parts.shift();
    if (parts[0] === "embed") parts.shift();
    if (parts.length !== 2 || !["playlist", "album"].includes(parts[0]) || !/^[A-Za-z0-9]{22}$/.test(parts[1])) return null;
    return `https://open.spotify.com/${parts[0]}/${parts[1]}`;
  } catch {
    return null;
  }
}

function updateSpotify() {
  const configured = Boolean(spotifyUrl);
  document.getElementById("spotify-url").value = spotifyUrl;
  document.getElementById("playlist-state-title").textContent = configured ? "Tu playlist ya está aquí." : "Tu playlist, tu toque final.";
  document.getElementById("playlist-state-text").textContent = configured ? "Toca Ver canciones y elige un tema de la lista. Puedes cambiarlo sin salir del recetario." : "Pega la playlist que preparaste para Maribel y hazla parte del recetario.";
  document.getElementById("player-status").textContent = configured ? "Elegir canción · tu playlist" : "Tu playlist está por llegar";
  document.getElementById("player-placeholder").hidden = configured;
  document.getElementById("player-guide").hidden = !configured;
  document.getElementById("restore-default-playlist").hidden = !spotifyDefaultUrl || spotifyUrl === spotifyDefaultUrl;
  document.getElementById("player-footnote").hidden = !configured;
  document.getElementById("spotify-page-link").hidden = !configured;
  if (!configured) return;
  for (const id of ["spotify-page-link", "spotify-player-link"]) document.getElementById(id).href = spotifyUrl;
  const container = document.getElementById("spotify-embed");
  const currentEmbed = container.querySelector("iframe");
  if (currentEmbed?.dataset.playlistUrl === spotifyUrl) return;
  const iframe = document.createElement("iframe");
  iframe.src = spotifyUrl.replace("open.spotify.com/", "open.spotify.com/embed/") + "?utm_source=generator&theme=0";
  iframe.dataset.playlistUrl = spotifyUrl;
  iframe.title = "Spotify: elige o cambia una canción de tu playlist";
  iframe.setAttribute("aria-describedby", "player-howto");
  iframe.width = "100%";
  iframe.height = "432";
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.loading = "eager";
  iframe.addEventListener("error", () => showToast("No se pudo cargar Spotify. Puedes abrir tu playlist con el enlace del reproductor."));
  container.replaceChildren(iframe);
}

function setPlayerExpanded(expanded) {
  musicPlayer.classList.toggle("is-collapsed", !expanded);
  playerBody.inert = !expanded;
  playerBody.setAttribute("aria-hidden", String(!expanded));
  const button = document.getElementById("toggle-player");
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute("aria-label", expanded ? "Contraer reproductor" : "Ver canciones de Spotify");
  document.getElementById("player-launch").setAttribute("aria-expanded", String(expanded));
  document.getElementById("player-status").textContent = spotifyUrl ? expanded ? "Elige un tema de la lista de Spotify" : "Elegir canción · tu playlist" : "Agrega tu playlist";
  document.body.classList.toggle("music-expanded", expanded && !musicPlayer.hidden);
}

function openMusicPlayer() {
  musicPlayer.hidden = false;
  document.body.classList.add("music-visible");
  setPlayerExpanded(true);
  document.getElementById("toggle-player").focus({ preventScroll: true });
}

function setMobileMenu(open) {
  document.getElementById("main-nav").classList.toggle("is-open", open);
  const button = document.getElementById("menu-toggle");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  button.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
}

function visibleFocusableElements() {
  return [...experienceLayer.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), iframe, [tabindex="0"]')].filter(element => element.getClientRects().length && window.getComputedStyle(element).visibility !== "hidden" && !element.closest("[hidden], [inert]"));
}

function syncRecipeWithLocation() {
  const id = new URL(window.location.href).searchParams.get("receta");
  if (id && recipeById.has(id)) {
    if (currentRecipeId !== id) openRecipe(id, false);
  } else if (currentRecipeId) closeRecipe(false);
}

document.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;
  const heroChoice = event.target.closest("[data-hero-recipe]");
  if (heroChoice) { setHeroRecipe(heroChoice.dataset.heroRecipe); return; }
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) { toggleFavorite(favoriteButton.dataset.favorite, favoriteButton); return; }
  const openButton = event.target.closest("[data-open-recipe]");
  if (openButton) { openRecipe(openButton.dataset.openRecipe); return; }
  if (event.target.closest("[data-surprise]")) {
    const candidates = recipeCatalog.filter(recipe => recipe.id !== currentRecipeId);
    const recipe = candidates[Math.floor(Math.random() * candidates.length)];
    openRecipe(recipe.id);
    return;
  }
  if (event.target.closest("[data-music-open]")) { openMusicPlayer(); return; }
  const shortcut = event.target.closest("[data-category-shortcut]");
  if (shortcut) {
    resetFilters();
    filters.category = shortcut.dataset.categoryShortcut;
    renderRecipes();
    document.getElementById("recetas").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth" });
    document.getElementById("recipes-title").focus({ preventScroll: true });
    return;
  }
  const filter = event.target.closest("[data-filter]");
  if (filter) { filters.category = filter.dataset.filter; visibleCount = 6; renderRecipes(); return; }
  const stepButton = event.target.closest("[data-complete-step]");
  if (stepButton) { setStepComplete(Number(stepButton.dataset.completeStep)); return; }
  const timerButton = event.target.closest("[data-step-timer]");
  if (timerButton && currentRecipeId) {
    timerStepIndex = Number(timerButton.dataset.stepTimer);
    renderDetail();
    document.getElementById("timer-minutes")?.focus();
    return;
  }
  for (const action of ["open", "toggle", "reset", "dismiss"]) {
    const button = event.target.closest(`[data-timer-${action}]`);
    if (button) { handleTimerAction(action, button.getAttribute(`data-timer-${action}`), button); return; }
  }
  const actionButton = event.target.closest("[data-action]");
  if (actionButton && currentRecipeId) {
    const action = actionButton.dataset.action;
    if (action === "toggle-cook") toggleCookingMode();
    if (action === "more-portions") updateServings(1);
    if (action === "less-portions") updateServings(-1);
    if (action === "share") shareRecipe();
    if (action === "next-step") advanceCookStep(1);
    if (action === "previous-step") advanceCookStep(-1);
    if (action === "timer-cancel") {
      const stepIndex = timerStepIndex;
      timerStepIndex = null;
      renderDetail();
      recipeDetail.querySelector(`[data-step-timer="${stepIndex}"]`)?.focus({ preventScroll: true });
    }
    if (action === "review-steps") {
      kitchenState(recipeById.get(currentRecipeId)).currentStep = 0;
      persistData();
      renderDetail();
      document.getElementById("current-step-title")?.focus({ preventScroll: true });
    }
  }
});

document.addEventListener("change", event => {
  const input = event.target;
  if (input instanceof HTMLInputElement && input.matches("[data-ingredient]") && currentRecipeId) {
    const recipe = recipeById.get(currentRecipeId);
    const state = kitchenState(recipe);
    const index = Number(input.dataset.ingredient);
    if (input.checked) state.checked.add(index);
    else state.checked.delete(index);
    persistData();
    document.getElementById("ingredients-progress").textContent = `${state.checked.size} de ${recipe.ingredients.length} ingredientes listos`;
  }
});

document.addEventListener("submit", event => {
  if (event.target.id === "timer-form") {
    event.preventDefault();
    const form = event.target;
    if (form.reportValidity()) beginTimer(Number(document.getElementById("timer-minutes").value));
  }
  if (event.target.id === "spotify-form") {
    event.preventDefault();
    const field = document.getElementById("spotify-url");
    const error = document.getElementById("spotify-error");
    const normalized = normalizeSpotifyUrl(field.value);
    if (!normalized) {
      error.textContent = "Usa el enlace completo de una playlist o álbum: https://open.spotify.com/playlist/… No se admiten enlaces acortados.";
      error.hidden = false;
      field.setAttribute("aria-invalid", "true");
      field.focus();
      return;
    }
    spotifyUrl = normalized;
    error.hidden = true;
    field.removeAttribute("aria-invalid");
    persistData();
    updateSpotify();
    openMusicPlayer();
    showToast("Enlace guardado. Pulsa reproducir en los controles de Spotify.");
  }
});

document.addEventListener("error", event => {
  if (event.target instanceof HTMLImageElement) {
    const image = event.target;
    const fallback = image.parentElement.querySelector(".photo-fallback");
    if (fallback) { image.hidden = true; fallback.hidden = false; }
  }
}, true);

recipeSearch.addEventListener("input", () => { filters.search = recipeSearch.value; visibleCount = 6; renderRecipes(); });
document.getElementById("difficulty-filter").addEventListener("change", event => { filters.difficulty = event.target.value; visibleCount = 6; renderRecipes(); });
document.getElementById("time-filter").addEventListener("change", event => { filters.time = event.target.value; visibleCount = 6; renderRecipes(); });
document.getElementById("sort-recipes").addEventListener("change", event => { filters.sort = event.target.value; renderRecipes(); });
document.getElementById("clear-filters").addEventListener("click", resetFilters);
document.getElementById("reset-search").addEventListener("click", () => { resetFilters(); recipeSearch.focus(); });
document.getElementById("load-more").addEventListener("click", () => {
  const previousCount = visibleCount;
  visibleCount += 6;
  renderRecipes();
  recipeGrid.querySelectorAll(".card-title button")[previousCount]?.focus({ preventScroll: true });
});
document.getElementById("close-recipe").addEventListener("click", () => closeRecipe());
recipeOverlay.addEventListener("click", event => { if (event.target === recipeOverlay) closeRecipe(); });
document.getElementById("player-launch").addEventListener("click", openMusicPlayer);
document.getElementById("restore-default-playlist").addEventListener("click", () => {
  if (!spotifyDefaultUrl) return;
  spotifyUrl = spotifyDefaultUrl;
  document.getElementById("spotify-error").hidden = true;
  document.getElementById("spotify-url").removeAttribute("aria-invalid");
  persistData();
  updateSpotify();
  openMusicPlayer();
  showToast("Tu playlist original está de vuelta.");
});
document.getElementById("toggle-player").addEventListener("click", () => setPlayerExpanded(musicPlayer.classList.contains("is-collapsed")));
document.getElementById("go-music-settings").addEventListener("click", () => {
  closeRecipe(true, false);
  setPlayerExpanded(false);
  document.getElementById("musica").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth" });
  document.getElementById("spotify-url").focus({ preventScroll: true });
});
document.getElementById("menu-toggle").addEventListener("click", () => setMobileMenu(document.getElementById("menu-toggle").getAttribute("aria-expanded") !== "true"));
document.querySelectorAll("#main-nav a").forEach(anchor => anchor.addEventListener("click", () => setMobileMenu(false)));
document.addEventListener("click", event => {
  if (!document.getElementById("site-header").contains(event.target)) setMobileMenu(false);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (currentRecipeId) closeRecipe();
    else if (document.getElementById("menu-toggle").getAttribute("aria-expanded") === "true") { setMobileMenu(false); document.getElementById("menu-toggle").focus(); }
    else if (!musicPlayer.hidden && !musicPlayer.classList.contains("is-collapsed")) { setPlayerExpanded(false); document.getElementById("toggle-player").focus(); }
    return;
  }
  if (event.key === "/" && !currentRecipeId && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest("input, textarea, select, [contenteditable]")) {
    event.preventDefault();
    recipeSearch.focus();
  }
  if (event.key === "Tab" && currentRecipeId) {
    const focusable = visibleFocusableElements();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (!first) { event.preventDefault(); recipeDialog.focus(); return; }
    if (event.shiftKey && (active === first || !focusable.includes(active))) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && (active === last || !focusable.includes(active))) { event.preventDefault(); first.focus(); }
  }
});

window.addEventListener("popstate", syncRecipeWithLocation);
document.addEventListener("visibilitychange", () => {
  tickTimers();
  if (document.visibilityState === "visible" && cookingMode) requestWakeLock();
});
window.addEventListener("pagehide", persistData);

const navigationAnchors = [...document.querySelectorAll("#main-nav a")];
const navigationSections = navigationAnchors.map(anchor => document.querySelector(anchor.getAttribute("href"))).sort((first, second) => first.offsetTop - second.offsetTop);
let scrollScheduled = false;
function updateScrollState() {
  document.getElementById("site-header").classList.toggle("scrolled", window.scrollY > 25);
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  document.documentElement.style.setProperty("--page-progress", String(scrollRange > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollRange)) : 0));
  const hero = document.getElementById("inicio");
  const heroProgress = reducedMotion.matches ? 0 : Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / hero.offsetHeight));
  document.documentElement.style.setProperty("--hero-progress", String(heroProgress));
  let currentSection = navigationSections[0];
  for (const section of navigationSections) {
    if (section.getBoundingClientRect().top <= 155) currentSection = section;
  }
  if (document.documentElement.dataset.scene !== currentSection.id) document.documentElement.dataset.scene = currentSection.id;
  for (const anchor of navigationAnchors) {
    const current = anchor.getAttribute("href") === `#${currentSection.id}`;
    anchor.classList.toggle("is-current", current);
    if (current) anchor.setAttribute("aria-current", "location");
    else anchor.removeAttribute("aria-current");
  }
  scrollScheduled = false;
}
window.addEventListener("scroll", () => {
  if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScrollState); }
}, { passive: true });

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-ready");
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }
  }, { threshold: .06 });
  document.querySelectorAll(".section-reveal").forEach(element => revealObserver.observe(element));
  document.documentElement.classList.add("motion-ready");
  const motionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle("motion-in-view", entry.isIntersecting);
  }, { rootMargin: "80px 0px", threshold: 0 });
  document.querySelectorAll(".motion-surface").forEach(element => motionObserver.observe(element));
}

function animateButtonFeedback(event) {
  if (reducedMotion.matches || !(event.target instanceof Element)) return;
  const button = event.target.closest(".button, .category-link, .filter-chip, .icon-button");
  if (!button || !button.isConnected || button.disabled) return;
  const box = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "button-ripple";
  ripple.setAttribute("aria-hidden", "true");
  ripple.style.setProperty("--ripple-size", `${Math.max(box.width, box.height) * 2.2}px`);
  ripple.style.setProperty("--ripple-x", `${event.detail ? event.clientX - box.left : box.width / 2}px`);
  ripple.style.setProperty("--ripple-y", `${event.detail ? event.clientY - box.top : box.height / 2}px`);
  button.querySelectorAll(".button-ripple").forEach(previous => previous.remove());
  button.append(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  setTimeout(() => ripple.remove(), 800);
}

function resetCardTilt() {
  if (cardTiltFrame) cancelAnimationFrame(cardTiltFrame);
  cardTiltFrame = 0;
  pendingCardTilt = null;
  if (tiltedRecipeCard) {
    tiltedRecipeCard.style.removeProperty("--card-tilt-x");
    tiltedRecipeCard.style.removeProperty("--card-tilt-y");
    tiltedRecipeCard = null;
  }
}

function updateCardTilt() {
  cardTiltFrame = 0;
  const pending = pendingCardTilt;
  if (!pending || !pending.card.isConnected || reducedMotion.matches) return;
  if (tiltedRecipeCard && tiltedRecipeCard !== pending.card) {
    tiltedRecipeCard.style.removeProperty("--card-tilt-x");
    tiltedRecipeCard.style.removeProperty("--card-tilt-y");
  }
  tiltedRecipeCard = pending.card;
  const box = pending.card.getBoundingClientRect();
  const horizontal = Math.max(-.5, Math.min(.5, (pending.x - box.left) / box.width - .5));
  const vertical = Math.max(-.5, Math.min(.5, (pending.y - box.top) / box.height - .5));
  pending.card.style.setProperty("--card-tilt-x", `${-vertical * 3}deg`);
  pending.card.style.setProperty("--card-tilt-y", `${horizontal * 3}deg`);
}

for (const grid of [recipeGrid, favoritesGrid]) {
  grid.addEventListener("pointermove", event => {
    if (reducedMotion.matches || !finePointer.matches || event.pointerType !== "mouse" || window.innerWidth <= 650) return;
    const card = event.target.closest(".recipe-card");
    if (!card) { resetCardTilt(); return; }
    pendingCardTilt = { card, x: event.clientX, y: event.clientY };
    if (!cardTiltFrame) cardTiltFrame = requestAnimationFrame(updateCardTilt);
  }, { passive: true });
  grid.addEventListener("pointerleave", resetCardTilt);
}

function updateMotionActivity() {
  document.getElementById("replay-intro").hidden = reducedMotion.matches;
  document.documentElement.classList.toggle("motion-paused", document.hidden || reducedMotion.matches);
  if (document.hidden || reducedMotion.matches) resetCardTilt();
}

document.addEventListener("click", animateButtonFeedback);
document.addEventListener("visibilitychange", updateMotionActivity);
window.addEventListener("blur", resetCardTilt);
if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", updateMotionActivity);
updateMotionActivity();

function setHeroRecipe(id) {
  const index = heroRecipeChoices.indexOf(id);
  if (index < 0) return;
  const recipe = recipeById.get(id);
  const request = ++heroImageRequest;
  const frame = document.getElementById("hero-photo-frame");
  const status = document.getElementById("hero-gallery-status");
  frame.setAttribute("aria-busy", "true");
  status.textContent = `Cargando ${recipe.name}…`;
  const preview = new Image();
  preview.onload = () => {
    if (request !== heroImageRequest) return;
    heroRecipeId = id;
    const photo = document.getElementById("hero-feature-photo");
    photo.src = preview.src;
    photo.alt = recipe.photoAlt;
    photo.hidden = false;
    const fallback = frame.querySelector(".photo-fallback");
    fallback.hidden = true;
    fallback.textContent = recipe.name;
    const openButton = document.getElementById("hero-feature-button");
    openButton.dataset.openRecipe = id;
    openButton.setAttribute("aria-label", `Ver receta de ${recipe.name}`);
    document.getElementById("hero-feature-name").textContent = recipe.name;
    document.getElementById("hero-feature-category").textContent = heroRecipeCaptions[index];
    document.getElementById("hero-feature-index").textContent = `${String(index + 1).padStart(2, "0")} / 03`;
    document.querySelectorAll("[data-hero-recipe]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.heroRecipe === id)));
    frame.removeAttribute("aria-busy");
    status.textContent = `Mostrando ${recipe.name}. Puedes abrir su receta.`;
    if (!reducedMotion.matches && photo.animate) photo.animate([{ opacity: .25, transform: "scale(1.045)" }, { opacity: 1, transform: "scale(1)" }], { duration: 550, easing: "cubic-bezier(.2,.75,.3,1)" });
  };
  preview.onerror = () => {
    if (request !== heroImageRequest) return;
    frame.removeAttribute("aria-busy");
    status.textContent = `No se pudo cargar la fotografía de ${recipe.name}.`;
    showToast("Esa fotografía no cargó. Puedes encontrar la receta en el recetario.");
  };
  preview.src = `https://images.unsplash.com/${recipe.photo}?auto=format&fit=crop&w=1000&q=85`;
}

const heroSwitcher = document.querySelector(".hero-switcher");
heroSwitcher.addEventListener("keydown", event => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const focusedChoice = event.target.closest("[data-hero-recipe]")?.dataset.heroRecipe || heroRecipeId;
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const nextIndex = (heroRecipeChoices.indexOf(focusedChoice) + direction + heroRecipeChoices.length) % heroRecipeChoices.length;
  const nextId = heroRecipeChoices[nextIndex];
  heroSwitcher.querySelector(`[data-hero-recipe="${nextId}"]`).focus({ preventScroll: true });
  setHeroRecipe(nextId);
});

const heroPhotoFrame = document.getElementById("hero-photo-frame");
heroPhotoFrame.addEventListener("pointerdown", event => {
  if (!event.isPrimary || event.target.closest("button")) return;
  heroSwipeStart = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
});
heroPhotoFrame.addEventListener("pointerup", event => {
  if (!heroSwipeStart || event.pointerId !== heroSwipeStart.pointerId) return;
  const horizontal = event.clientX - heroSwipeStart.x;
  const vertical = event.clientY - heroSwipeStart.y;
  heroSwipeStart = null;
  if (Math.abs(horizontal) < 40 || Math.abs(horizontal) < Math.abs(vertical) * 1.4) return;
  const direction = horizontal < 0 ? 1 : -1;
  const index = (heroRecipeChoices.indexOf(heroRecipeId) + direction + heroRecipeChoices.length) % heroRecipeChoices.length;
  heroSwipeConsumed = true;
  setHeroRecipe(heroRecipeChoices[index]);
  setTimeout(() => { heroSwipeConsumed = false; }, 350);
});
heroPhotoFrame.addEventListener("pointercancel", () => { heroSwipeStart = null; });
heroPhotoFrame.addEventListener("click", event => {
  if (!heroSwipeConsumed) return;
  event.preventDefault();
  event.stopPropagation();
  heroSwipeConsumed = false;
}, true);

function resetMagneticButtons() {
  document.querySelectorAll(".magnetic-button").forEach(button => {
    button.style.removeProperty("--magnet-x");
    button.style.removeProperty("--magnet-y");
  });
}

document.querySelectorAll(".magnetic-button").forEach(button => {
  button.addEventListener("pointermove", event => {
    if (reducedMotion.matches || !finePointer.matches || event.pointerType !== "mouse") return;
    const box = button.getBoundingClientRect();
    button.style.setProperty("--magnet-x", `${((event.clientX - box.left) / box.width - .5) * 9}px`);
    button.style.setProperty("--magnet-y", `${((event.clientY - box.top) / box.height - .5) * 7}px`);
  }, { passive: true });
  button.addEventListener("pointerleave", resetMagneticButtons);
  button.addEventListener("blur", resetMagneticButtons);
});
window.addEventListener("blur", resetMagneticButtons);
if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", resetMagneticButtons);

const heroCollage = document.querySelector(".hero-collage");
heroCollage.addEventListener("animationend", event => { if (event.target === heroCollage) heroCollage.style.animation = "none"; });
document.querySelector(".hero").addEventListener("pointermove", event => {
  if (reducedMotion.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const box = event.currentTarget.getBoundingClientRect();
  heroCollage.style.setProperty("--collage-x", `${(event.clientX - box.left - box.width / 2) / 100}px`);
  heroCollage.style.setProperty("--collage-y", `${(event.clientY - box.top - box.height / 2) / 100}px`);
});
document.querySelector(".hero").addEventListener("pointerleave", () => { heroCollage.style.setProperty("--collage-x", "0px"); heroCollage.style.setProperty("--collage-y", "0px"); });

renderRecipes();
renderFavorites();
updateSpotify();
if (spotifyUrl) {
  musicPlayer.hidden = false;
  document.body.classList.add("music-visible");
  setPlayerExpanded(false);
}
restoreTimers();
renderTimerTray();
tickTimers();
if (savedData.spotifyDefaultUrl !== spotifyDefaultUrl) persistData();
setInterval(tickTimers, 500);
updateScrollState();
syncRecipeWithLocation();
if (!storageWorks) showToast("El almacenamiento del navegador no está disponible. Tus cambios durarán esta visita.");

function playPageEntrance(force = false) {
  const intro = document.getElementById("page-intro");
  if (!intro || !intro.hidden || reducedMotion.matches || currentRecipeId) return;
  if (!force && window.location.hash && window.location.hash !== "#inicio") return;
  const previousFocus = document.activeElement;
  const shellWasInert = pageShell.inert;
  const experienceWasInert = experienceLayer.inert;
  let finished = false;
  let revealTimer;
  let finishTimer;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(revealTimer);
    clearTimeout(finishTimer);
    const restoreFocus = force || intro.contains(document.activeElement);
    document.documentElement.classList.remove("intro-active", "intro-showing");
    intro.hidden = true;
    intro.classList.remove("is-entering");
    pageShell.inert = shellWasInert;
    experienceLayer.inert = experienceWasInert;
    intro.removeEventListener("pointerdown", skipPointer);
    intro.removeEventListener("animationend", animationFinished);
    document.removeEventListener("keydown", skipKey, true);
    window.removeEventListener("pagehide", finish);
    reducedMotion.removeEventListener?.("change", motionChanged);
    if (restoreFocus) {
      const focusTarget = previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected && !previousFocus.closest("[inert]") ? previousFocus : document.querySelector(".header-inner .brand");
      focusTarget?.focus({ preventScroll: true });
    }
  };
  const skipPointer = event => { event.preventDefault(); event.stopPropagation(); finish(); };
  const skipKey = event => {
    if (["Shift", "Control", "Alt", "Meta", "CapsLock"].includes(event.key)) return;
    if (["Enter", " ", "Escape"].includes(event.key)) { event.preventDefault(); event.stopPropagation(); }
    finish();
  };
  const motionChanged = () => { if (reducedMotion.matches) finish(); };
  const animationFinished = event => { if (event.animationName === "intro-open-right") finish(); };
  pageShell.inert = true;
  experienceLayer.inert = true;
  intro.hidden = false;
  document.documentElement.classList.add("intro-active", "intro-showing");
  intro.classList.add("is-entering");
  revealTimer = setTimeout(() => document.documentElement.classList.remove("intro-active"), 2050);
  finishTimer = setTimeout(finish, 3200);
  intro.addEventListener("pointerdown", skipPointer);
  intro.addEventListener("animationend", animationFinished);
  document.addEventListener("keydown", skipKey, true);
  window.addEventListener("pagehide", finish);
  reducedMotion.addEventListener?.("change", motionChanged);
}

let atmosphereFrame = 0;
let pendingAtmospherePointer = null;
function resetAtmospherePointer() {
  if (atmosphereFrame) cancelAnimationFrame(atmosphereFrame);
  atmosphereFrame = 0;
  pendingAtmospherePointer = null;
  document.documentElement.style.setProperty("--ambient-x", "0");
  document.documentElement.style.setProperty("--ambient-y", "0");
}

function updateAtmospherePointer() {
  atmosphereFrame = 0;
  if (!pendingAtmospherePointer || reducedMotion.matches || document.hidden || currentRecipeId) return;
  document.documentElement.style.setProperty("--ambient-x", pendingAtmospherePointer.x.toFixed(3));
  document.documentElement.style.setProperty("--ambient-y", pendingAtmospherePointer.y.toFixed(3));
}

document.addEventListener("pointermove", event => {
  if (reducedMotion.matches || !finePointer.matches || event.pointerType !== "mouse" || currentRecipeId || document.documentElement.classList.contains("intro-active")) return;
  pendingAtmospherePointer = { x: Math.max(-1, Math.min(1, event.clientX / window.innerWidth * 2 - 1)), y: Math.max(-1, Math.min(1, event.clientY / window.innerHeight * 2 - 1)) };
  if (!atmosphereFrame) atmosphereFrame = requestAnimationFrame(updateAtmospherePointer);
}, { passive: true });
document.addEventListener("pointerleave", resetAtmospherePointer);
window.addEventListener("blur", resetAtmospherePointer);
document.addEventListener("visibilitychange", () => { if (document.hidden) resetAtmospherePointer(); });
if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", resetAtmospherePointer);
window.addEventListener("resize", () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScrollState); } }, { passive: true });
document.getElementById("replay-intro").addEventListener("click", () => playPageEntrance(true));
playPageEntrance();
