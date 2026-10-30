"use strict";

const SPOTIFY_CLIENT_ID = "dc4c539ceaa54f74bd4c93eb7a77ea54";
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/6OmAX1bqcYFhDRPzAGpbg2";

const recipeCatalog = [
  {
    "id": "brownies-de-chocolate",
    "name": "Brownies de chocolate",
    "categoryLabel": "Chocolate y costrita crujiente",
    "tags": [
      "chocolate",
      "pasteles",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 12,
    "prep": 20,
    "cook": 25,
    "rest": 30,
    "oven": 180,
    "description": "Costrita crujiente, centro suave y chocolate en cada pequeño bocado.",
    "photo": "photo-1740742765588-28dca095f46d",
    "photoAlt": "Brownies de chocolate apilados en una rejilla",
    "photographer": "Mitchell Soeharsono",
    "photoSource": "https://unsplash.com/photos/AcE36ro-PCM",
    "equipment": "Molde cuadrado de 20 × 20 cm, papel para hornear y batidor manual.",
    "ingredients": [
      {
        "name": "chocolate semiamargo",
        "amount": 200,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "mantequilla sin sal",
        "amount": 120,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar",
        "amount": 180,
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
        "name": "harina de trigo",
        "amount": 90,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "cacao sin azúcar",
        "amount": 25,
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
        "title": "Prepara tu rincón",
        "text": "Precalienta el horno a 180 °C, con calor arriba y abajo. Forra el molde con papel para hornear. Deja papel sobresaliendo por dos lados del molde para levantar el bloque una vez frío. Engrasa ligeramente las zonas que queden descubiertas.",
        "minutes": 0,
        "cue": "El molde está cubierto y el horno ya alcanzó la temperatura."
      },
      {
        "title": "Derrite el chocolate",
        "text": "Funde el chocolate con la mantequilla a baño María suave, sin que el recipiente toque el agua. Retira y deja que la mezcla esté tibia. Trocea el chocolate para que funda parejo y remueve con espátula. Evita que caigan gotas de agua en el recipiente.",
        "minutes": 0,
        "cue": "Chocolate liso y brillante, sin trozos ni sensación de calor intenso."
      },
      {
        "title": "Mezcla sin prisa",
        "text": "Bate a mano el azúcar con los huevos y la vainilla hasta integrar. Añade el chocolate tibio. Bate hasta que el azúcar quede bien repartida; no necesitas montar los huevos. Vierte el chocolate en hilo mientras remueves.",
        "minutes": 0,
        "cue": "Mezcla uniforme, espesa y sin vetas de huevo."
      },
      {
        "title": "Incorpora los secos",
        "text": "Tamiza harina, cacao y sal sobre la mezcla. Integra con espátula, solo hasta que no se vea harina. Raspa el fondo y los costados del tazón para integrar la harina escondida. Detente en cuanto desaparezcan las zonas secas.",
        "minutes": 0,
        "cue": "Masa brillante, sin harina visible y sin batido prolongado."
      },
      {
        "title": "Al horno",
        "text": "Vierte en el molde y hornea a 180 °C durante 25 minutos. Comprueba el centro: un palillo debe salir con migas húmedas, sin masa líquida. Revisa desde el minuto 22. Introduce el palillo cerca del centro, evitando un trozo de chocolate. Si sale masa líquida, continúa en intervalos breves y revisa de nuevo.",
        "minutes": 25,
        "cue": "Bordes firmes y palillo con migas húmedas, sin masa cruda."
      },
      {
        "title": "La espera más rica",
        "text": "Deja enfriar en el molde durante 30 minutos antes de cortar en porciones. No cortes mientras el centro siga muy caliente: todavía es frágil. Levanta con el papel y limpia el cuchillo entre cortes.",
        "minutes": 30,
        "cue": "El bloque mantiene su forma al levantarlo y cortarlo."
      }
    ],
    "tips": "Para un centro húmedo, evita batir de más al añadir la harina. Conserva en un recipiente cerrado hasta 3 días a temperatura ambiente fresca; refrigera si hace calor.",
    "beforeYouStart": [
      "Pesa los ingredientes antes de empezar y utiliza el molde de 20 × 20 cm: uno más amplio produce brownies más delgados y rápidos de cocer.",
      "Deja los huevos perder el frío del refrigerador y espera a que el chocolate fundido esté tibio antes de mezclarlos.",
      "Precalienta completamente el horno y coloca la rejilla en la posición central. Estas temperaturas corresponden a horno convencional."
    ],
    "doneWhen": [
      "La superficie forma una película fina y los bordes se separan apenas del molde.",
      "El centro está húmedo al comerlo, pero no es una mezcla líquida."
    ],
    "troubleshooting": [
      {
        "problem": "Quedaron secos",
        "solution": "Suele deberse a exceso de horno o a un molde demasiado amplio. Revisa antes la siguiente tanda y retira con migas húmedas en el palillo."
      },
      {
        "problem": "Se rompen al cortar",
        "solution": "Deja que enfríen más. Un cuchillo limpio y cortes firmes ayudan; no intentes corregir la textura añadiendo harina después de hornear."
      }
    ],
    "storage": "Guarda completamente fríos en un recipiente hermético hasta 3 días en un lugar fresco; si hace calor, refrigera. Puedes congelar porciones bien envueltas hasta 1 mes.",
    "servingTip": "Sírvelos a temperatura ambiente para apreciar el centro suave. Corta 12 porciones cuando el bloque ya esté estable."
  },
  {
    "id": "galletas-con-chispas",
    "name": "Galletas con chispas",
    "categoryLabel": "Galletas con chispas",
    "tags": [
      "galletas",
      "chocolate",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 16,
    "prep": 20,
    "cook": 12,
    "rest": 40,
    "oven": 180,
    "description": "Bordes doraditos, chispas generosas y ese olor que llena toda la casa.",
    "photo": "photo-1519682214708-973477a2529a",
    "photoAlt": "Galletas caseras con chispas de chocolate",
    "photographer": "charlesdeluvio",
    "photoSource": "https://unsplash.com/photos/Ms9xBg3Gtr8",
    "equipment": "Dos charolas, papel para hornear y batidora o cuchara firme.",
    "ingredients": [
      {
        "name": "mantequilla suave sin sal",
        "amount": 115,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar morena",
        "amount": 100,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar blanca",
        "amount": 60,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "huevo grande, sin cáscara",
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
        "amount": 190,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "bicarbonato de sodio",
        "amount": 3,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "chispas de chocolate semiamargo",
        "amount": 160,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Una base cremosa",
        "text": "Bate la mantequilla con ambos azúcares hasta obtener una mezcla cremosa. Incorpora huevo y vainilla. Raspa las paredes del tazón antes de añadir el huevo. Integra cada ingrediente antes de continuar y evita calentar la mantequilla al batir demasiado.",
        "minutes": 0,
        "cue": "Crema homogénea, sin charcos de mantequilla."
      },
      {
        "title": "Añade las chispas",
        "text": "Mezcla harina, bicarbonato y sal. Incorpora a la base sin sobrebatir y agrega las chispas. Reparte primero el bicarbonato y la sal en la harina. Añade las chispas con espátula para distribuirlas sin seguir batiendo la masa.",
        "minutes": 0,
        "cue": "No quedan bolsas de harina y las chispas están repartidas."
      },
      {
        "title": "Un descanso en frío",
        "text": "Cubre la masa y refrigera 30 minutos. Mientras tanto, precalienta el horno a 180 °C y prepara las charolas. Extiende la masa en un recipiente poco profundo para enfriarla de forma uniforme. Si sigue muy blanda después del reposo, espera a que sea manejable.",
        "minutes": 30,
        "cue": "Puedes formar una bola sin que se desparrame."
      },
      {
        "title": "Forma las galletas",
        "text": "Divide en porciones iguales, forma bolas y distribúyelas dejando al menos 5 cm entre ellas. Divide la masa en 16 partes de tamaño similar; una báscula ayuda a que se horneen al mismo tiempo. No las aplastes hasta dejarlas delgadas.",
        "minutes": 0,
        "cue": "Bolitas parejas con espacio libre a su alrededor."
      },
      {
        "title": "Dora los bordes",
        "text": "Hornea a 180 °C por 12 minutos, o hasta que los bordes estén dorados y el centro todavía suave. Si no caben, hornea en tandas. Mira los bordes, no esperes a que toda la superficie se dore. El centro suave termina de asentarse con el calor de la charola.",
        "minutes": 12,
        "cue": "Bordes dorados y centro opaco, todavía tierno."
      },
      {
        "title": "Déjalas asentarse",
        "text": "Deja las galletas 10 minutos en la charola antes de pasarlas a una rejilla. Terminan de afirmarse al enfriarse. Muévelas con una espátula plana cuando se sostengan sin doblarse. No las encierres tibias, porque el vapor ablanda los bordes.",
        "minutes": 10,
        "cue": "Se levantan enteras y terminan de enfriar en la rejilla."
      }
    ],
    "tips": "La mantequilla debe estar suave, sin estar derretida. El tiempo de cocción indicado es por tanda. Guarda las galletas frías en un recipiente cerrado hasta 4 días.",
    "beforeYouStart": [
      "La mantequilla debe ceder al presionarla, conservando su forma; si está derretida, las galletas se extenderán demasiado.",
      "Pesa la harina sin compactarla y utiliza charolas frías, no la que acaba de salir del horno.",
      "Los 12 minutos son por tanda; deja espacio entre las porciones para que puedan extenderse."
    ],
    "doneWhen": [
      "Los bordes se sienten firmes y el centro conserva suavidad al enfriar.",
      "La base está dorada, sin un aro negro o sabor a quemado."
    ],
    "troubleshooting": [
      {
        "problem": "Se unen unas con otras",
        "solution": "Enfría mejor la masa, revisa la separación y utiliza una charola fría para la siguiente tanda."
      },
      {
        "problem": "Están demasiado duras",
        "solution": "Se han horneado de más o llevan exceso de harina. Pesa los ingredientes y retira cuando el centro todavía parezca suave."
      }
    ],
    "storage": "Guarda las galletas completamente frías en un recipiente hermético hasta 4 días. La masa cruda porcionada se puede congelar bien cerrada hasta 1 mes; hornea comprobando el punto.",
    "servingTip": "Espera a que las chispas dejen de quemar antes de probarlas. Para servir, reparte una o dos galletas por persona según el antojo."
  },
  {
    "id": "cheesecake-de-fresa",
    "name": "Cheesecake de fresa",
    "categoryLabel": "Cheesecake sin horno",
    "tags": [
      "frios",
      "sin-horno",
      "pasteles"
    ],
    "difficulty": "Intermedia",
    "servings": 8,
    "prep": 35,
    "cook": 5,
    "rest": 360,
    "oven": null,
    "description": "Una base crujiente, relleno cremoso y fresas para darle el toque final.",
    "photo": "photo-1642646806325-6ed5108bc92f",
    "photoAlt": "Cheesecake con cobertura roja de fresa",
    "photographer": "Giuliana Catachura",
    "photoSource": "https://unsplash.com/photos/1AdLhPn7KEg",
    "equipment": "Molde desmontable de 20 cm, batidora y refrigerador.",
    "ingredients": [
      {
        "name": "galletas María",
        "amount": 200,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida",
        "amount": 90,
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
        "amount": 90,
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
        "name": "fresas lavadas, desinfectadas y sin tallo",
        "amount": 300,
        "unit": "g",
        "group": "Cobertura"
      },
      {
        "name": "azúcar",
        "amount": 50,
        "unit": "g",
        "group": "Cobertura"
      },
      {
        "name": "jugo de limón",
        "amount": 15,
        "unit": "ml",
        "group": "Cobertura"
      }
    ],
    "steps": [
      {
        "title": "Haz la base",
        "text": "Tritura las galletas y mezcla con la mantequilla. Presiona en el fondo del molde y refrigera mientras preparas el relleno. Tritura hasta obtener migas finas y presiona con la base de un vaso. Compacta sin convertir la base en una capa excesivamente gruesa.",
        "minutes": 0,
        "cue": "Base pareja que no se desmorona al tocarla suavemente."
      },
      {
        "title": "Hidrata la grenetina",
        "text": "Espolvorea la grenetina sobre el agua fría. Deja hidratar 5 minutos y después calienta suavemente hasta disolver, sin hervir. Distribuye la grenetina por toda el agua para evitar un bloque seco. Después de hidratar, calienta con suavidad y remueve hasta disolver.",
        "minutes": 0,
        "cue": "Líquido transparente o ligeramente dorado, sin granos."
      },
      {
        "title": "Una nube de crema",
        "text": "Bate el queso crema con el azúcar glass y la vainilla. En otro recipiente bate la crema fría a picos suaves. Suaviza el queso antes de incorporar la crema. Bate la crema en un recipiente limpio y detente cuando el pico se doble al levantar las varillas.",
        "minutes": 0,
        "cue": "Queso sin grumos y crema aireada de picos suaves."
      },
      {
        "title": "Integra el relleno",
        "text": "Mezcla unas cucharadas de queso con la grenetina tibia; devuelve esa mezcla al queso restante. Incorpora la crema con movimientos envolventes y vierte sobre la base. Templar la grenetina evita que cuaje en hilos. Añade la crema con movimientos desde el fondo hacia arriba, conservando el aire.",
        "minutes": 0,
        "cue": "Relleno liso, espeso y sin hebras de grenetina."
      },
      {
        "title": "Dale su tiempo",
        "text": "Cubre y refrigera el cheesecake al menos 6 horas, hasta que el centro esté firme. No lo congeles para acortar este reposo. Cubre sin apoyar el plástico sobre la superficie y evita mover el molde durante el cuajado. El reposo de 6 horas no se sustituye por unos minutos de congelador.",
        "minutes": 360,
        "cue": "El centro se sostiene y ya no se mueve como líquido."
      },
      {
        "title": "Prepara las fresas",
        "text": "Mientras cuaja, cocina las fresas troceadas con el azúcar y el jugo de limón a fuego medio, manteniendo un hervor suave durante 5 minutos. Deja enfriar por completo y refrigera la cobertura. Remueve para que el azúcar se disuelva y la fruta suelte jugo. Aparta del fuego y enfría en un recipiente amplio antes de refrigerar.",
        "minutes": 5,
        "cue": "Cobertura con fruta suave y jugo ligeramente espeso."
      },
      {
        "title": "El toque final",
        "text": "Desmolda con cuidado y coloca la cobertura fría sobre el cheesecake firme, justo antes de servir. Pasa con cuidado una espátula delgada por el borde y abre el aro lentamente. Añade la fresa fría al final para mantener limpia la presentación.",
        "minutes": 0,
        "cue": "Rebanadas que conservan el borde y una cobertura fría."
      }
    ],
    "tips": "La cobertura puede enfriarse mientras el cheesecake cuaja. Usa crema para batir, no media crema. Conserva cubierto en refrigeración y consume en 3 días.",
    "beforeYouStart": [
      "Usa queso crema suave y crema para batir muy fría con al menos 35 % de grasa; la media crema no monta igual.",
      "Deja libre un espacio nivelado en el refrigerador para el molde de 20 cm antes de comenzar.",
      "Prepara la cobertura con tiempo para que esté completamente fría al tocar el relleno."
    ],
    "doneWhen": [
      "Al cortar, el relleno sostiene una rebanada definida.",
      "La base está compacta y la cobertura no derrite la crema."
    ],
    "troubleshooting": [
      {
        "problem": "No cuaja",
        "solution": "Comprueba que la grenetina se hidrató y disolvió por completo, que se usó la cantidad indicada y que tuvo suficiente frío. Si está líquido, sírvelo en vasitos y mantenlo refrigerado."
      },
      {
        "problem": "Tiene grumos o hilos",
        "solution": "El queso estaba demasiado frío o la grenetina cuajó al contacto. En la siguiente preparación templa la grenetina y suaviza bien el queso."
      }
    ],
    "storage": "Conserva tapado en refrigeración a 4 °C o menos y consume en 3 días. Guarda la cobertura aparte si todavía no vas a servirlo y evita dejarlo fuera del frío durante periodos largos.",
    "servingTip": "Corta con un cuchillo tibio, sécalo y límpialo entre porciones. Añade la fresa justo antes de llevarlo a la mesa."
  },
  {
    "id": "tiramisu",
    "name": "Tiramisú sin huevo",
    "categoryLabel": "Café y mascarpone",
    "tags": [
      "frios",
      "sin-horno"
    ],
    "difficulty": "Intermedia",
    "servings": 6,
    "prep": 25,
    "cook": 0,
    "rest": 360,
    "oven": null,
    "description": "Capas de café, mascarpone y cacao. Un pequeño viaje sin salir de casa.",
    "photo": "photo-1763585055859-a1fffe9cb8f0",
    "photoAlt": "Tiramisú en capas con crema y cacao",
    "photographer": "Mr. Pugo",
    "photoSource": "https://unsplash.com/photos/9k2WSgIcgW8",
    "equipment": "Refractario de aproximadamente 18 × 22 cm y batidora.",
    "ingredients": [
      {
        "name": "queso mascarpone frío",
        "amount": 250,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "crema para batir fría, mínimo 35 % grasa",
        "amount": 250,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar glass",
        "amount": 80,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "soletas o bizcochos de soletilla",
        "amount": 200,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "café preparado y frío",
        "amount": 250,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "cacao sin azúcar",
        "amount": 15,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Prepara el café",
        "text": "Prepara el café con anticipación y deja enfriar por completo. Colócalo en un plato hondo. Vierte el café en un plato lo bastante ancho para pasar una soleta entera. No añadas el café caliente directamente a la mezcla de queso.",
        "minutes": 0,
        "cue": "Café frío o a temperatura ambiente, sin vapor."
      },
      {
        "title": "Bate la crema",
        "text": "Bate la crema fría con el azúcar glass y la vainilla hasta formar picos suaves. Suaviza aparte el mascarpone con una espátula. Empieza a velocidad baja y aumenta progresivamente. Al levantar las varillas, la crema debe formar una punta que se inclina, no una masa rígida.",
        "minutes": 0,
        "cue": "Crema con volumen, lisa y sin aspecto cortado."
      },
      {
        "title": "Une las texturas",
        "text": "Incorpora la crema batida al mascarpone en varias adiciones, con movimientos envolventes. Añade una pequeña parte de la crema para aligerar el queso y después incorpora el resto. Raspa el fondo con la espátula.",
        "minutes": 0,
        "cue": "Crema uniforme y aireada, sin bloques de queso."
      },
      {
        "title": "Crea las capas",
        "text": "Pasa rápidamente las soletas por el café, sin remojarlas hasta deshacerlas. Cubre el fondo del refractario, agrega la mitad de la crema y repite las capas. Da a cada soleta una pasada rápida por el café. Acomódalas juntas sin aplastarlas y extiende la crema en una capa pareja.",
        "minutes": 0,
        "cue": "Soletas húmedas por fuera que conservan su forma."
      },
      {
        "title": "Deja que tome forma",
        "text": "Cubre sin tocar la superficie y refrigera por lo menos 6 horas. Apoya la cubierta sin tocar la crema y refrigera sobre una superficie nivelada. El reposo permite que las capas se humedezcan de manera uniforme.",
        "minutes": 360,
        "cue": "La crema se sostiene y las capas ya no se deslizan."
      },
      {
        "title": "Un velo de cacao",
        "text": "Tamiza el cacao sobre el tiramisú justo antes de servir. Corta con una espátula limpia. Usa un colador fino y espolvorea una película delgada. Hazlo al final: el cacao se humedece si permanece mucho tiempo sobre la crema.",
        "minutes": 0,
        "cue": "Superficie cubierta de cacao fino, sin montones."
      }
    ],
    "tips": "Esta versión no utiliza huevo crudo. Si las soletas absorben mucho, basta un toque de café por cada lado. Conserva refrigerado y consume en 2 días.",
    "beforeYouStart": [
      "El café debe estar frío antes de mojar las soletas; el café caliente las ablanda demasiado y afecta a la crema.",
      "Mantén mascarpone y crema fríos. Trabaja en un recipiente limpio y evita batir en exceso el mascarpone.",
      "Ten listo el refractario y separa las soletas para formar dos capas completas."
    ],
    "doneWhen": [
      "Una porción se sostiene sobre la espátula después del reposo.",
      "La soleta está húmeda y tierna, sin un charco de café en el fondo."
    ],
    "troubleshooting": [
      {
        "problem": "Queda aguado",
        "solution": "Las soletas absorbieron demasiado café o la crema quedó poco montada. Mantén en frío y sirve en copas si no se sostiene."
      },
      {
        "problem": "La crema se ve cortada",
        "solution": "Puede ocurrir al batir demasiado o al usar ingredientes a temperaturas distintas. Bate lo justo y mezcla con espátula al unir las cremas."
      }
    ],
    "storage": "Mantén tapado en refrigeración a 4 °C o menos y consume en 2 días. Esta versión no lleva huevo crudo, pero los lácteos siguen necesitando frío.",
    "servingTip": "Para marcar porciones limpias, utiliza una espátula ancha y limpia entre cortes. El cacao se agrega al servir."
  },
  {
    "id": "pastel-de-zanahoria",
    "name": "Pastel de zanahoria",
    "categoryLabel": "Zanahoria, nuez y canela",
    "tags": [
      "pasteles"
    ],
    "difficulty": "Intermedia",
    "servings": 10,
    "prep": 30,
    "cook": 40,
    "rest": 60,
    "oven": 175,
    "description": "Miga suave, un abrazo de canela y un betún de queso que lo dice todo.",
    "photo": "photo-1676300186098-9b5ae9916e3c",
    "photoAlt": "Rebanada de pastel de zanahoria con betún de queso y nuez",
    "photographer": "Orkun Orcan",
    "photoSource": "https://unsplash.com/photos/EvfXG4aK9d8",
    "equipment": "Molde redondo de 20 cm, rallador y batidora.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 220,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "zanahoria finamente rallada",
        "amount": 250,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "azúcar morena",
        "amount": 180,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "aceite vegetal neutro",
        "amount": 130,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 3,
        "unit": "pzas",
        "group": "Pastel"
      },
      {
        "name": "polvo para hornear",
        "amount": 8,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "canela molida",
        "amount": 5,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "nuez picada",
        "amount": 60,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "queso crema suave",
        "amount": 180,
        "unit": "g",
        "group": "Betún"
      },
      {
        "name": "mantequilla suave sin sal",
        "amount": 80,
        "unit": "g",
        "group": "Betún"
      },
      {
        "name": "azúcar glass tamizada",
        "amount": 120,
        "unit": "g",
        "group": "Betún"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Betún"
      }
    ],
    "steps": [
      {
        "title": "Deja listo el molde",
        "text": "Precalienta a 175 °C. Engrasa el molde y forra la base. Mezcla harina, polvo para hornear, canela y sal. Distribuye bien la canela y los impulsores en la harina. Forrar el fondo facilita desmoldar sin romper una miga todavía delicada.",
        "minutes": 0,
        "cue": "Molde listo y secos mezclados de forma uniforme."
      },
      {
        "title": "Haz la mezcla",
        "text": "Bate a mano huevos, azúcar y aceite. Incorpora la zanahoria rallada, después los secos y finalmente la nuez. No sobrebatas. Mezcla con movimientos amplios y detente cuando desaparezca la harina. Reparte la nuez al final, sin trabajar de más la masa.",
        "minutes": 0,
        "cue": "Masa espesa y uniforme, con zanahoria bien distribuida."
      },
      {
        "title": "Hornea con calma",
        "text": "Vierte en el molde y hornea a 175 °C por unos 40 minutos. Revisa con un palillo en el centro; debe salir sin masa cruda. Puede necesitar algunos minutos más según tu horno. No abras el horno durante la primera parte de la cocción. Comprueba el centro sin confundir un trozo de nuez con masa cruda.",
        "minutes": 40,
        "cue": "Centro firme y palillo sin masa líquida."
      },
      {
        "title": "Enfría por completo",
        "text": "Deja reposar en el molde 15 minutos. Desmolda sobre una rejilla y deja enfriar otros 45 minutos, o hasta que ya no esté tibio. Deja salir el vapor sobre una rejilla. Si todavía notas tibieza en el centro, espera más antes de poner el betún.",
        "minutes": 60,
        "cue": "El pastel está frío también en su parte central."
      },
      {
        "title": "El betún",
        "text": "Bate la mantequilla con el azúcar glass. Añade el queso crema y la vainilla, batiendo solo hasta obtener una textura uniforme. Raspa el recipiente y añade el queso al final. Batirlo durante demasiado tiempo puede volver el betún más blando.",
        "minutes": 0,
        "cue": "Betún liso que conserva la marca de la espátula."
      },
      {
        "title": "Decora a tu manera",
        "text": "Extiende el betún sobre el pastel frío. Si deseas capas, corta el pastel horizontalmente y reparte el betún entre el centro y la superficie. Extiende primero una capa delgada para recoger migas y después completa la cobertura. No aprietes el pastel con la espátula.",
        "minutes": 0,
        "cue": "Cobertura pareja y miga sin aplastarse."
      }
    ],
    "tips": "Ralla la zanahoria fina para obtener una miga uniforme. Refrigera el pastel después de poner el betún; se conserva cubierto hasta 3 días.",
    "beforeYouStart": [
      "Ralla la zanahoria fina y pésala después de pelarla; los trozos grandes dificultan una miga uniforme.",
      "Prepara el molde de 20 cm y comprueba que el polvo para hornear esté dentro de su fecha de uso.",
      "El queso crema y la mantequilla del betún deben estar suaves, pero el pastel tendrá que estar completamente frío para decorarlo."
    ],
    "doneWhen": [
      "El centro recupera ligeramente su forma al tocarlo.",
      "La miga está húmeda, pero no deja pasta cruda en el cuchillo."
    ],
    "troubleshooting": [
      {
        "problem": "Se hunde en el centro",
        "solution": "Puede faltarle cocción, haberse abierto el horno pronto o llevar demasiado impulsor. Comprueba el centro antes de retirar."
      },
      {
        "problem": "El betún se derrite",
        "solution": "El pastel está tibio o el betún demasiado caliente. Enfría ambos antes de continuar; no intentes arreglarlo batiendo sin parar."
      }
    ],
    "storage": "Una vez cubierto con betún de queso, guarda tapado en refrigeración y consume en 3 días. Refrigera también las porciones restantes después de servir.",
    "servingTip": "Deja la porción unos minutos fuera del refrigerador antes de comer para que la miga y el betún recuperen suavidad."
  },
  {
    "id": "cupcakes-de-vainilla",
    "name": "Cupcakes de vainilla",
    "categoryLabel": "Vainilla y betún",
    "tags": [
      "pasteles"
    ],
    "difficulty": "Intermedia",
    "servings": 12,
    "prep": 25,
    "cook": 20,
    "rest": 30,
    "oven": 175,
    "description": "Esponjositos, con vainilla de verdad y una corona de betún suave.",
    "photo": "photo-1519869325930-281384150729",
    "photoAlt": "Cupcakes de vainilla con betún blanco y chispitas de colores",
    "photographer": "Unsplash",
    "photoSource": "https://unsplash.com/s/photos/cupcakes",
    "equipment": "Molde para 12 cupcakes, capacillos y batidora.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 180,
        "unit": "g",
        "group": "Cupcakes"
      },
      {
        "name": "mantequilla suave sin sal",
        "amount": 120,
        "unit": "g",
        "group": "Cupcakes"
      },
      {
        "name": "azúcar",
        "amount": 150,
        "unit": "g",
        "group": "Cupcakes"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 2,
        "unit": "pzas",
        "group": "Cupcakes"
      },
      {
        "name": "leche a temperatura ambiente",
        "amount": 120,
        "unit": "ml",
        "group": "Cupcakes"
      },
      {
        "name": "polvo para hornear",
        "amount": 8,
        "unit": "g",
        "group": "Cupcakes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Cupcakes"
      },
      {
        "name": "sal",
        "amount": 1,
        "unit": "g",
        "group": "Cupcakes"
      },
      {
        "name": "mantequilla suave sin sal",
        "amount": 120,
        "unit": "g",
        "group": "Betún"
      },
      {
        "name": "azúcar glass tamizada",
        "amount": 180,
        "unit": "g",
        "group": "Betún"
      },
      {
        "name": "leche",
        "amount": 20,
        "unit": "ml",
        "group": "Betún"
      },
      {
        "name": "chispitas de azúcar",
        "amount": 15,
        "unit": "g",
        "group": "Decoración"
      }
    ],
    "steps": [
      {
        "title": "Prepara los capacillos",
        "text": "Precalienta el horno a 175 °C. Coloca capacillos en el molde. Mezcla harina, polvo para hornear y sal. Coloca los capacillos antes de empezar a batir. Mezcla los secos por separado para distribuir el polvo para hornear.",
        "minutes": 0,
        "cue": "Molde estable y 12 cavidades preparadas."
      },
      {
        "title": "Una mezcla esponjosa",
        "text": "Bate la mantequilla del bizcocho con el azúcar hasta que se aclare. Incorpora los huevos uno a uno y la vainilla. Añade cada huevo cuando el anterior ya esté integrado. Raspa el tazón para que la mantequilla no quede pegada en los bordes.",
        "minutes": 0,
        "cue": "Crema clara y homogénea, sin trozos de mantequilla."
      },
      {
        "title": "Alterna y mezcla",
        "text": "Añade los secos en tres partes, alternando con la leche. Mezcla solo hasta integrar. Llena los capacillos a dos tercios de su capacidad. Empieza y termina con los secos y mezcla a velocidad baja o con espátula. Reparte porciones semejantes para que se cuezan al mismo tiempo.",
        "minutes": 0,
        "cue": "Masa suave y capacillos llenos solo a dos tercios."
      },
      {
        "title": "Al horno",
        "text": "Hornea a 175 °C durante 20 minutos. Comprueba con un palillo: debe salir limpio. Introduce el palillo en un cupcake del centro del molde. La superficie debe recuperar su forma con una presión muy ligera.",
        "minutes": 20,
        "cue": "Palillo limpio y copete firme, sin exceso de dorado."
      },
      {
        "title": "Enfría antes de decorar",
        "text": "Retira del molde con cuidado y deja enfriar en una rejilla durante unos 30 minutos, hasta que estén completamente fríos. No los dejes enfriando encerrados dentro de un recipiente: el vapor moja el papel. Espera a que la base también esté fría.",
        "minutes": 30,
        "cue": "Cupcakes fríos y capacillos sin humedad acumulada."
      },
      {
        "title": "Haz el betún",
        "text": "Bate la mantequilla del betún con el azúcar glass, primero a velocidad baja. Añade la leche poco a poco y bate hasta que quede ligero. Decora y termina con chispitas. Añade la leche del betún de manera gradual. Debe quedar fácil de extender, pero sostener una roseta o la marca de una cuchara.",
        "minutes": 0,
        "cue": "Betún uniforme y con suficiente cuerpo para decorar."
      }
    ],
    "tips": "El betún se derrite sobre un cupcake tibio: dale tiempo a enfriarse. Conserva en un recipiente cerrado hasta 2 días a temperatura fresca o 4 días refrigerados.",
    "beforeYouStart": [
      "Separa la mantequilla, leche y vainilla de la masa de las cantidades reservadas para el betún.",
      "Usa ingredientes de la masa a temperatura ambiente y prepara 12 capacillos del mismo tamaño.",
      "Ten una rejilla lista: decorar cupcakes tibios derrite la mantequilla del betún."
    ],
    "doneWhen": [
      "La miga está esponjosa y no presenta un centro pegajoso.",
      "El betún conserva su forma sobre el cupcake frío."
    ],
    "troubleshooting": [
      {
        "problem": "Quedan densos",
        "solution": "Puede haberse batido demasiado la harina o usado mantequilla muy fría. Mezcla los secos solo hasta integrar."
      },
      {
        "problem": "El betún está muy líquido",
        "solution": "Comprueba la temperatura y la cantidad de leche. Enfríalo brevemente si está demasiado tibio antes de volver a mezclar."
      }
    ],
    "storage": "Guarda en un recipiente cerrado hasta 2 días en un lugar fresco; si hace calor, refrigera. Refrigerados se conservan hasta 4 días. Evita cambios de temperatura repetidos.",
    "servingTip": "Decora después de enfriar por completo. Puedes extender el betún con una cuchara si no tienes manga pastelera."
  },
  {
    "id": "roles-de-canela",
    "name": "Roles de canela",
    "categoryLabel": "Masa suave con canela",
    "tags": [
      "pasteles"
    ],
    "difficulty": "Elaborada",
    "servings": 12,
    "prep": 45,
    "cook": 25,
    "rest": 105,
    "oven": 180,
    "description": "Espirales de canela, masa tierna y un glaseado para lamer la cuchara.",
    "photo": "photo-1559745757-f6219279c3e5",
    "photoAlt": "Roles de canela horneados",
    "photographer": "J Williams",
    "photoSource": "https://unsplash.com/photos/fitwDsD6gxM",
    "equipment": "Refractario de 23 × 33 cm, rodillo y un lugar templado para fermentar.",
    "ingredients": [
      {
        "name": "harina de trigo de fuerza",
        "amount": 450,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "leche tibia, aproximadamente 35 °C",
        "amount": 220,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "levadura seca instantánea",
        "amount": 7,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 60,
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
        "name": "mantequilla suave sin sal",
        "amount": 60,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 5,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "mantequilla suave sin sal",
        "amount": 60,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "azúcar morena",
        "amount": 100,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "canela molida",
        "amount": 12,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "queso crema suave",
        "amount": 100,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "azúcar glass",
        "amount": 70,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "leche",
        "amount": 15,
        "unit": "ml",
        "group": "Glaseado"
      }
    ],
    "steps": [
      {
        "title": "Amasa",
        "text": "Mezcla harina, levadura, azúcar y sal. Agrega leche tibia y huevo. Amasa e incorpora la mantequilla de la masa poco a poco. Continúa unos 10 minutos hasta que esté lisa y elástica. La masa empieza pegajosa y se vuelve más elástica al trabajarla. Evita añadir puñados de harina: cambia la proporción y endurece los roles.",
        "minutes": 0,
        "cue": "Masa lisa y elástica que se estira sin romperse inmediatamente."
      },
      {
        "title": "Primer levado",
        "text": "Coloca en un recipiente engrasado, cubre y deja crecer unos 60 minutos en un lugar templado, hasta duplicar el volumen. Guíate por el tamaño de la masa. Marca visualmente el nivel inicial del recipiente. Deja crecer cubierta, en un lugar templado y sin calor directo intenso.",
        "minutes": 60,
        "cue": "El volumen se aproxima al doble del inicial."
      },
      {
        "title": "Rellena",
        "text": "Estira sobre una superficie ligeramente enharinada formando un rectángulo de unos 35 × 45 cm. Unta la mantequilla del relleno y espolvorea azúcar morena mezclada con canela. Forma un rectángulo de grosor parejo. La mantequilla del relleno debe untarse, no estar líquida, para que la canela no se escurra.",
        "minutes": 0,
        "cue": "Relleno distribuido hasta cerca de los bordes."
      },
      {
        "title": "Forma los roles",
        "text": "Enrolla por el lado largo, corta porciones iguales y acomoda en el refractario engrasado, dejando espacio entre ellas. Enrolla sin aplastar la masa y corta con cuchillo afilado o hilo sin sabor apto para este uso. Coloca los cortes hacia arriba.",
        "minutes": 0,
        "cue": "Doce espirales de tamaño similar, con espacio para crecer."
      },
      {
        "title": "Segundo levado",
        "text": "Cubre y deja crecer unos 30 minutos, hasta que los roles se vean inflados. Mientras tanto, precalienta el horno a 180 °C. No te saltes este reposo: los roles deben verse más esponjados antes de hornear. La masa fría o apretada tarda más en expandirse.",
        "minutes": 30,
        "cue": "Las espirales están infladas y ocupan más espacio en el molde."
      },
      {
        "title": "Hornea",
        "text": "Hornea a 180 °C unos 25 minutos, hasta que estén dorados y el centro cocido. Si se doran demasiado rápido, cubre suavemente con aluminio. Revisa el rol central, que suele ser el último en cocerse. Debe verse cocido entre las capas, sin masa brillante o pegajosa.",
        "minutes": 25,
        "cue": "Superficie dorada y centro sin tiras de masa cruda."
      },
      {
        "title": "Glasea",
        "text": "Deja reposar 15 minutos. Bate el queso crema con azúcar glass y leche, y extiende sobre los roles tibios. Bate el glaseado hasta eliminar grumos. Sobre roles tibios se funde un poco; sobre roles calientes desaparece casi por completo.",
        "minutes": 15,
        "cue": "Glaseado cremoso repartido sobre roles ya reposados."
      }
    ],
    "tips": "Los levados varían con la temperatura de tu cocina. La leche caliente puede dañar la levadura. Refrigera los roles glaseados en un recipiente cerrado y consume en 3 días.",
    "beforeYouStart": [
      "Utiliza harina de fuerza y leche tibia, no caliente. Una temperatura cercana a 35 °C favorece el levado sin dañar la levadura.",
      "Los levados se guían por el volumen de la masa; en una cocina fría pueden tardar más de lo indicado.",
      "Separa las cantidades de mantequilla de masa y relleno, y prepara el refractario de 23 × 33 cm."
    ],
    "doneWhen": [
      "Las capas se separan con facilidad y la miga está tierna.",
      "El centro del refractario está cocido, no solo las orillas."
    ],
    "troubleshooting": [
      {
        "problem": "La masa no crece",
        "solution": "Puede estar fría o la levadura haberse deteriorado. Busca un lugar templado y espera al cambio de volumen, sin calentar la masa de forma agresiva."
      },
      {
        "problem": "Quedan duros",
        "solution": "Revisa que no hayas añadido demasiada harina y que ambos levados se completaran. Un horneado excesivo también los reseca."
      }
    ],
    "storage": "Guarda los roles con glaseado de queso en refrigeración, bien tapados, y consume en 3 días. Recalienta solo la porción que vayas a servir para evitar secarlos.",
    "servingTip": "Sírvelos tibios. Para recuperar suavidad, calienta brevemente una porción y comprueba que el centro no queme."
  },
  {
    "id": "fresas-con-crema",
    "name": "Fresas con crema",
    "categoryLabel": "Fresas con crema",
    "tags": [
      "frios",
      "sin-horno",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 4,
    "prep": 15,
    "cook": 0,
    "rest": 0,
    "oven": null,
    "description": "Fresas frescas, crema dulce y una receta que siempre se siente bonita.",
    "photo": "photo-1673646961362-659b4680b9ee",
    "photoAlt": "Fresas frescas y crema servidas en un plato",
    "photographer": "Natalia Gusakova",
    "photoSource": "https://unsplash.com/photos/uzjs9GRK32c",
    "equipment": "Tabla, cuchillo, un tazón y cuatro vasitos.",
    "ingredients": [
      {
        "name": "fresas lavadas y desinfectadas",
        "amount": 500,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "crema ácida o crema mexicana refrigerada",
        "amount": 250,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "leche condensada",
        "amount": 90,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Prepara la fruta",
        "text": "Lava y desinfecta las fresas siguiendo las instrucciones de tu desinfectante para alimentos. Escurre, seca y retira los tallos. Manipula la fruta con manos y utensilios limpios. Después de desinfectar, escúrrela y sécala con cuidado, sin aplastarla.",
        "minutes": 0,
        "cue": "Fresas limpias, secas y sin partes deterioradas."
      },
      {
        "title": "Corta",
        "text": "Parte las fresas en mitades o cuartos, según su tamaño. Mantén la fruta fría. Procura que los trozos sean de tamaño parecido para que cada cucharada tenga fruta y crema. Usa un cuchillo limpio.",
        "minutes": 0,
        "cue": "Trozos firmes que no han soltado demasiado jugo."
      },
      {
        "title": "La crema dulce",
        "text": "Mezcla la crema con la leche condensada y la vainilla hasta obtener una textura uniforme. Añade la leche condensada de forma gradual y mezcla con cuchara o batidor manual; no necesitas montar esta crema.",
        "minutes": 0,
        "cue": "Crema lisa y de color uniforme."
      },
      {
        "title": "Sirve",
        "text": "Reparte las fresas y la crema entre los vasitos. Puedes mezclarlas o servirlas en capas. Disfruta enseguida o conserva en refrigeración. Reparte la fruta y añade la crema al final. Mezclar con demasiada anticipación hace que las fresas suelten más líquido.",
        "minutes": 0,
        "cue": "Vasitos fríos y crema que recubre la fruta."
      }
    ],
    "tips": "Secar la fruta evita que suelte agua de más. Para la mejor textura, mezcla poco antes de servir. Conserva los ingredientes fríos y consume la preparación en 24 horas.",
    "beforeYouStart": [
      "Elige fresas firmes y retira las que tengan moho o deterioro. Mantén la fruta y los lácteos refrigerados.",
      "Lava la fruta antes de quitar el tallo y sigue la dilución y el tiempo del desinfectante para alimentos.",
      "Seca bien las fresas: el agua sobrante diluye la crema."
    ],
    "doneWhen": [
      "La crema cubre las fresas sin verse aguada.",
      "La fruta sigue firme y fresca al servir."
    ],
    "troubleshooting": [
      {
        "problem": "La crema está muy líquida",
        "solution": "Puede haber quedado agua en la fruta. Escurre y seca mejor en la siguiente preparación; sirve la mezcla actual en vasitos y mantenla fría."
      },
      {
        "problem": "La fruta se ablanda",
        "solution": "El corte y el contacto prolongado con el azúcar liberan jugo. Prepara los componentes por separado y mezcla justo antes de servir."
      }
    ],
    "storage": "Conserva en refrigeración a 4 °C o menos y consume dentro de 24 horas. Para mejor textura, mantén la crema y las fresas separadas hasta servir. No congeles la preparación terminada.",
    "servingTip": "Prepara cuatro vasitos individuales y reparte la crema entre todos para mantener la proporción de la receta."
  },
  {
    "id": "mousse-de-chocolate",
    "name": "Mousse de chocolate",
    "categoryLabel": "Chocolate semiamargo",
    "tags": [
      "chocolate",
      "frios",
      "sin-horno"
    ],
    "difficulty": "Intermedia",
    "servings": 4,
    "prep": 20,
    "cook": 5,
    "rest": 180,
    "oven": null,
    "description": "Intenso, aireado y sin huevo. Para disfrutarlo cucharadita a cucharadita.",
    "photo": "photo-1621792907495-5403ce8f2c6e",
    "photoAlt": "Mousse de chocolate cremoso en una cuchara y una copa",
    "photographer": "Unsplash",
    "photoSource": "https://unsplash.com/photos/N7mti4DiDIU",
    "equipment": "Cuatro copas, cacerola, batidora y espátula.",
    "ingredients": [
      {
        "name": "chocolate semiamargo, aproximadamente 55 % cacao",
        "amount": 180,
        "unit": "g",
        "group": "Ganache"
      },
      {
        "name": "crema para batir, mínimo 35 % grasa",
        "amount": 120,
        "unit": "ml",
        "group": "Ganache"
      },
      {
        "name": "crema para batir fría, mínimo 35 % grasa",
        "amount": 240,
        "unit": "ml",
        "group": "Crema montada"
      },
      {
        "name": "azúcar glass",
        "amount": 20,
        "unit": "g",
        "group": "Crema montada"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Crema montada"
      }
    ],
    "steps": [
      {
        "title": "Calienta la crema",
        "text": "Pica el chocolate. Calienta la crema de la ganache a fuego bajo durante unos 5 minutos, hasta que salga vapor, sin dejar hervir. Pica el chocolate en trozos pequeños mientras se calienta la crema. Mantén el fuego bajo y remueve para evitar que se pegue.",
        "minutes": 5,
        "cue": "La crema desprende vapor y pequeñas burbujas en el borde."
      },
      {
        "title": "Funde el chocolate",
        "text": "Vierte la crema caliente sobre el chocolate. Espera un minuto y mezcla desde el centro hasta que esté liso. Deja enfriar hasta que esté apenas tibio y siga fluido. Remueve desde el centro en círculos pequeños hasta emulsionar. Antes de continuar, comprueba que la mezcla siga fluida pero ya no esté caliente.",
        "minutes": 0,
        "cue": "Ganache brillante, lisa y apenas tibia."
      },
      {
        "title": "Bate con aire",
        "text": "Bate la crema fría de la segunda parte con azúcar glass y vainilla a picos suaves. Detente antes de que se ponga granulosa. La crema debe mantener volumen sin ponerse rígida. Si pierde brillo y se vuelve granulosa, se está batiendo de más.",
        "minutes": 0,
        "cue": "Picos suaves que se doblan al levantar las varillas."
      },
      {
        "title": "Integra suavemente",
        "text": "Mezcla primero una pequeña parte de la crema montada con la ganache para aligerarla. Incorpora el resto con espátula y movimientos envolventes. Aligera primero la ganache con una pequeña parte de crema. Después gira el tazón y dobla con la espátula sin aplastar las burbujas.",
        "minutes": 0,
        "cue": "Color uniforme y textura aireada, sin vetas blancas."
      },
      {
        "title": "Tiempo de frío",
        "text": "Reparte en copas, cubre y refrigera por lo menos 3 horas antes de servir. Reparte sin golpear demasiado las copas contra la mesa. Cubre para evitar olores del refrigerador.",
        "minutes": 180,
        "cue": "Mousse firme al enfriar, con textura suave al tomarlo con cuchara."
      }
    ],
    "tips": "Si el chocolate está caliente al añadir la crema montada, perderá el aire. Si está demasiado frío, puede formar grumos. Conserva refrigerado hasta 2 días.",
    "beforeYouStart": [
      "Utiliza chocolate semiamargo real y crema para batir de al menos 35 % de grasa. La cantidad de cacao del chocolate modifica la firmeza.",
      "Separa la crema que se calienta para la ganache de la que debe mantenerse muy fría para montar.",
      "Ten listas las cuatro copas para repartir el mousse en cuanto termines de mezclar."
    ],
    "doneWhen": [
      "La cuchara deja una cavidad que no se llena de líquido.",
      "El mousse está aireado y se funde al comerlo."
    ],
    "troubleshooting": [
      {
        "problem": "Tiene grumos de chocolate",
        "solution": "La ganache estaba demasiado fría al incorporar la crema. Antes de mezclar, debe mantenerse fluida y apenas tibia."
      },
      {
        "problem": "Quedó pesado o líquido",
        "solution": "El chocolate estaba caliente o se perdió el aire al mezclar. Enfría el postre y, para la siguiente preparación, integra con movimientos envolventes."
      }
    ],
    "storage": "Guarda cubierto en refrigeración a 4 °C o menos y consume en 2 días. Mantén frío hasta servir, especialmente en días calurosos.",
    "servingTip": "Saca las copas justo antes de servir y utiliza cucharas pequeñas para apreciar mejor la textura aireada."
  },
  {
    "id": "pay-de-limon",
    "name": "Pay de limón",
    "categoryLabel": "Limón sin horno",
    "tags": [
      "pasteles",
      "frios"
    ],
    "difficulty": "Intermedia",
    "servings": 8,
    "prep": 25,
    "cook": 18,
    "rest": 240,
    "oven": 170,
    "description": "Cremoso, cítrico y con una base de galleta que equilibra cada bocado.",
    "photo": "photo-1681329142517-6daaa56d3670",
    "photoAlt": "Pay de limón sobre una rejilla",
    "photographer": "Yuliia Dementsova",
    "photoSource": "https://unsplash.com/photos/TNuD_SN6zrs",
    "equipment": "Molde para pay de 22 cm y horno.",
    "ingredients": [
      {
        "name": "galletas María",
        "amount": 180,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida",
        "amount": 80,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "leche condensada",
        "amount": 397,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "yogur griego natural sin azúcar",
        "amount": 170,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "yema de huevo",
        "amount": 3,
        "unit": "pzas",
        "group": "Relleno"
      },
      {
        "name": "jugo de limón recién exprimido y colado",
        "amount": 120,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "ralladura fina de limón, sin parte blanca",
        "amount": 2,
        "unit": "g",
        "group": "Relleno"
      }
    ],
    "steps": [
      {
        "title": "Una base crujiente",
        "text": "Precalienta a 170 °C. Tritura las galletas, mezcla con la mantequilla y presiona en el fondo y los lados del molde. Tritura finamente las galletas y compacta con el fondo de un vaso. Procura que la base tenga grosor uniforme en el fondo y los lados.",
        "minutes": 0,
        "cue": "Base compacta sin zonas que se deshacen al tocarlas."
      },
      {
        "title": "Haz el relleno",
        "text": "Mezcla leche condensada, yogur, yemas y ralladura sin incorporar demasiado aire. Añade el jugo de limón poco a poco, removiendo hasta integrar. Usa un batidor manual con movimientos suaves, no una batidora a máxima velocidad. Raspa el fondo para integrar las yemas por completo.",
        "minutes": 0,
        "cue": "Relleno espeso, liso y con pocas burbujas."
      },
      {
        "title": "Hornea",
        "text": "Vierte sobre la base. Hornea a 170 °C durante unos 18 minutos, hasta que los bordes estén firmes y el centro tiemble suavemente, sin verse líquido. Mueve apenas el molde para observar el centro. Debe temblar como una sola pieza, no formar ondas de líquido.",
        "minutes": 18,
        "cue": "Bordes firmes y centro con un temblor suave."
      },
      {
        "title": "Deja enfriar",
        "text": "Coloca sobre una rejilla y deja enfriar unos 60 minutos. No lo desmoldes caliente. Apoya el molde en una superficie que permita circular aire. Evita moverlo o cortarlo mientras el relleno está caliente.",
        "minutes": 60,
        "cue": "El molde pierde el calor y el relleno se mantiene estable."
      },
      {
        "title": "Al refrigerador",
        "text": "Cubre y refrigera al menos 3 horas para que termine de asentarse. Sirve frío. El frío es parte de la receta: termina de dar cuerpo al relleno. Corta con un cuchillo limpio después del reposo completo.",
        "minutes": 180,
        "cue": "Rebanadas firmes con superficie lisa."
      }
    ],
    "tips": "Este pay lleva una cocción breve; no es una receta sin horno. Usa solo la parte coloreada de la cáscara para evitar amargor. Conserva refrigerado hasta 3 días.",
    "beforeYouStart": [
      "Esta receta sí se hornea y lleva yemas. No la prepares como un pay frío sin cocción.",
      "Usa yogur griego natural sin azúcar y cuela el jugo para retirar semillas y restos de pulpa.",
      "Ralla solo la parte coloreada de la cáscara; la parte blanca puede amargar."
    ],
    "doneWhen": [
      "El centro está cocido y se sostiene después de refrigerar.",
      "El sabor es ácido y dulce, sin amargor de la cáscara."
    ],
    "troubleshooting": [
      {
        "problem": "El centro queda líquido",
        "solution": "Le faltó horno o suficiente enfriado. No lo sirvas como si estuviera listo; comprueba la cocción de las yemas y el reposo completo."
      },
      {
        "problem": "La superficie se agrieta",
        "solution": "Suele ocurrir por exceso de cocción o batido. Retira con un temblor suave y mezcla sin introducir mucho aire."
      }
    ],
    "storage": "Guarda cubierto en refrigeración a 4 °C o menos y consume en 3 días. No dejes el pay al sol o en una cocina caliente mientras esperas para servir.",
    "servingTip": "Sírvelo frío en ocho porciones. Limpia el cuchillo entre cortes para conservar la base y el borde."
  },
  {
    "id": "galletas-red-velvet",
    "name": "Galletas Red Velvet",
    "categoryLabel": "Galletas red velvet",
    "tags": [
      "galletas",
      "chocolate",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 16,
    "prep": 20,
    "cook": 12,
    "rest": 40,
    "oven": 175,
    "description": "Cacao suave, chispas de chocolate blanco y un color que roba miradas.",
    "photo": "photo-1673412810103-27c233f77da6",
    "photoAlt": "Galletas rojas con chispas de chocolate blanco en una rejilla",
    "photographer": "Fetty Ghaessani",
    "photoSource": "https://unsplash.com/photos/pJw0R126F7I",
    "equipment": "Dos charolas, papel para hornear y batidora.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 200,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "cacao sin azúcar",
        "amount": 10,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "mantequilla suave sin sal",
        "amount": 100,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar",
        "amount": 130,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "huevo grande, sin cáscara",
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
        "name": "vinagre blanco",
        "amount": 5,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "colorante rojo en gel apto para alimentos",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "bicarbonato de sodio",
        "amount": 3,
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
        "name": "chispas de chocolate blanco",
        "amount": 120,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "La base",
        "text": "Bate mantequilla y azúcar hasta que estén cremosas. Incorpora huevo, vainilla, vinagre y colorante. Raspa el tazón para integrar bien el colorante. Añádelo poco a poco si su concentración es muy alta, sin modificar los demás líquidos.",
        "minutes": 0,
        "cue": "Color uniforme y crema sin partes de mantequilla."
      },
      {
        "title": "Mezcla los secos",
        "text": "Tamiza harina, cacao, bicarbonato y sal. Incorpora a la mezcla húmeda solo hasta unir. Agrega las chispas de chocolate blanco. Distribuye el bicarbonato en la harina antes de añadirla. Incorpora las chispas con espátula y detente al desaparecer los secos.",
        "minutes": 0,
        "cue": "Masa uniforme con chispas repartidas."
      },
      {
        "title": "Enfría la masa",
        "text": "Cubre y refrigera 30 minutos. Precalienta el horno a 175 °C y forra las charolas. El reposo ayuda a controlar cuánto se extienden las galletas. Si la masa se ablanda mientras trabajas, devuélvela un momento al frío.",
        "minutes": 30,
        "cue": "La masa se puede porcionar sin escurrirse."
      },
      {
        "title": "Forma y hornea",
        "text": "Divide en bolas iguales y colócalas separadas por al menos 5 cm. Hornea a 175 °C durante 12 minutos, hasta que los bordes estén firmes y el centro suave. Trabaja en tandas si hace falta. Forma 16 porciones semejantes y usa una charola fría. No esperes a que el centro esté duro dentro del horno.",
        "minutes": 12,
        "cue": "Bordes asentados y centro suave, sin masa líquida."
      },
      {
        "title": "El último descanso",
        "text": "Deja enfriar en la charola 10 minutos y después pasa a una rejilla. Al salir son delicadas: deja que se afirmen antes de levantarlas. Enfríalas por completo antes de apilarlas.",
        "minutes": 10,
        "cue": "Se levantan enteras y conservan un centro tierno."
      }
    ],
    "tips": "La intensidad del color cambia según la marca del colorante; respeta la dosis de su etiqueta. El tiempo de horno es por tanda. Conserva cerradas hasta 4 días.",
    "beforeYouStart": [
      "Utiliza colorante rojo en gel apto para alimentos; uno líquido cambia la humedad de la masa.",
      "Mantén la mantequilla suave, no derretida, y separa las charolas para hornear por tandas.",
      "Pesa el cacao: más cacao modifica el color y la absorción de la masa."
    ],
    "doneWhen": [
      "La base está cocida y el centro se mantiene suave al enfriar.",
      "Las chispas conservan su forma sin quemarse."
    ],
    "troubleshooting": [
      {
        "problem": "El color queda oscuro",
        "solution": "El cacao y el tipo de colorante influyen. Respeta la cantidad de cacao y usa gel concentrado apto para alimentos."
      },
      {
        "problem": "Se extienden demasiado",
        "solution": "La mantequilla o la charola estaban calientes. Enfría masa y charola antes de la siguiente tanda."
      }
    ],
    "storage": "Guarda frías en un recipiente hermético hasta 4 días en un lugar fresco. Si hace mucho calor, refrigera y deja templar la porción antes de comer.",
    "servingTip": "Reparte las porciones del mismo tamaño. El color del interior y la suavidad se aprecian mejor cuando ya han enfriado."
  },
  {
    "id": "panque-de-platano",
    "name": "Panqué de plátano",
    "categoryLabel": "Plátanos maduros",
    "tags": [
      "pasteles",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 8,
    "prep": 15,
    "cook": 55,
    "rest": 20,
    "oven": 175,
    "description": "El destino más rico para esos plátanos maduros que esperan en la cocina.",
    "photo": "photo-1569762404472-026308ba6b64",
    "photoAlt": "Panqué de plátano con nueces cortado en rebanadas",
    "photographer": "Unsplash",
    "photoSource": "https://unsplash.com/s/photos/banana-bread",
    "equipment": "Molde para panqué de aproximadamente 23 × 13 cm.",
    "ingredients": [
      {
        "name": "plátano muy maduro, sin cáscara",
        "amount": 300,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "harina de trigo",
        "amount": 220,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "azúcar morena",
        "amount": 130,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "mantequilla derretida y tibia",
        "amount": 80,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 2,
        "unit": "pzas",
        "group": "Ingredientes"
      },
      {
        "name": "leche",
        "amount": 60,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "polvo para hornear",
        "amount": 6,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "bicarbonato de sodio",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "nuez picada",
        "amount": 60,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Prepara",
        "text": "Precalienta a 175 °C. Engrasa y forra el molde. Machaca los plátanos con un tenedor. Machaca hasta obtener un puré con pequeños trozos, no es necesario licuarlo. Deja papel sobresaliendo para levantar el panqué.",
        "minutes": 0,
        "cue": "Puré suave y molde preparado."
      },
      {
        "title": "Los húmedos",
        "text": "Mezcla el puré de plátano con azúcar, mantequilla tibia, huevos y leche hasta integrar. Mezcla hasta integrar los huevos y dispersar el azúcar. Raspa el fondo para que no quede mantequilla separada.",
        "minutes": 0,
        "cue": "Mezcla húmeda uniforme."
      },
      {
        "title": "Los secos",
        "text": "Mezcla harina, polvo para hornear, bicarbonato y sal. Añade a los húmedos con una espátula e incorpora la nuez. Añade los secos en pocas adiciones y dobla con la espátula. Detente cuando no se vea harina; batir de más endurece la miga.",
        "minutes": 0,
        "cue": "Masa espesa, sin bolsas de harina."
      },
      {
        "title": "Al horno",
        "text": "Vierte en el molde y hornea a 175 °C durante unos 55 minutos. Revisa desde el minuto 50: el palillo debe salir limpio o con migas cocidas. Si se dora pronto, cubre con aluminio. Comprueba la parte más alta del centro. Un trozo de plátano puede dejar humedad, pero no debe aparecer pasta de harina cruda.",
        "minutes": 55,
        "cue": "Centro cocido y palillo con migas, sin masa pegajosa."
      },
      {
        "title": "Déjalo reposar",
        "text": "Espera 20 minutos antes de desmoldar y deja terminar de enfriar en una rejilla antes de rebanar. El panqué es frágil caliente. Levántalo con el papel y espera a que deje de soltar vapor antes de cortar o envolver.",
        "minutes": 20,
        "cue": "Rebanadas que se sostienen sin apelmazarse."
      }
    ],
    "tips": "Los plátanos con manchas oscuras aportan más sabor y dulzor. No mezcles de más después de añadir la harina. Conserva cerrado hasta 3 días en un lugar fresco.",
    "beforeYouStart": [
      "Pesa 300 g de plátano ya pelado; el número de piezas cambia según su tamaño.",
      "Elige plátanos con cáscara muy manchada y pulpa dulce, sin moho ni signos de deterioro.",
      "Usa el molde indicado y mantequilla derretida tibia, para no calentar los huevos."
    ],
    "doneWhen": [
      "La parte central recupera su forma al presionarla suavemente.",
      "La miga es húmeda y tierna, sin una franja cruda en la base."
    ],
    "troubleshooting": [
      {
        "problem": "Se dora por fuera y queda crudo",
        "solution": "El molde puede ser muy profundo o el horno estar demasiado fuerte. Protege la superficie con aluminio y continúa comprobando el centro."
      },
      {
        "problem": "La miga queda gomosa",
        "solution": "Puede haber exceso de plátano o de batido. Pesa la pulpa y mezcla la harina solo hasta incorporarla."
      }
    ],
    "storage": "Guarda completamente frío y bien cerrado hasta 2 días en un lugar fresco o hasta 4 días refrigerado. Congela rebanadas envueltas por separado hasta 1 mes.",
    "servingTip": "Es más fácil obtener rebanadas limpias cuando ya está frío. Puedes templar una rebanada antes de servirla."
  },
  {
    "id": "trufas-de-chocolate",
    "name": "Trufas de chocolate",
    "categoryLabel": "Chocolate para compartir",
    "tags": [
      "chocolate",
      "frios",
      "sin-horno",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 20,
    "prep": 20,
    "cook": 5,
    "rest": 120,
    "oven": null,
    "description": "Tres ingredientes para el centro y una capa de cacao. Así de especial.",
    "photo": "photo-1769433509476-bd68b1229916",
    "photoAlt": "Trufas de chocolate cubiertas de cacao en un tazón",
    "photographer": "Mila",
    "photoSource": "https://unsplash.com/photos/NOhJmWEuTKw",
    "equipment": "Cacerola pequeña, tazón y una cuchara para porcionar.",
    "ingredients": [
      {
        "name": "chocolate semiamargo, aproximadamente 60 % cacao",
        "amount": 250,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "crema para batir, mínimo 35 % grasa",
        "amount": 125,
        "unit": "ml",
        "group": "Ingredientes"
      },
      {
        "name": "mantequilla sin sal",
        "amount": 20,
        "unit": "g",
        "group": "Ingredientes"
      },
      {
        "name": "cacao sin azúcar para cubrir",
        "amount": 30,
        "unit": "g",
        "group": "Ingredientes"
      }
    ],
    "steps": [
      {
        "title": "Pica el chocolate",
        "text": "Coloca el chocolate finamente picado en un tazón resistente al calor. Los trozos pequeños se funden con el calor de la crema. Si hay bloques grandes, la mezcla puede enfriarse antes de que desaparezcan.",
        "minutes": 0,
        "cue": "Chocolate finamente picado en un tazón seco."
      },
      {
        "title": "Calienta la crema",
        "text": "Calienta la crema a fuego bajo durante unos 5 minutos, hasta que aparezca vapor sin hervir. Vierte sobre el chocolate. Vierte la crema caliente repartida sobre el chocolate. No la dejes hervir de forma intensa: perdería agua y cambiaría la proporción.",
        "minutes": 5,
        "cue": "Todo el chocolate queda en contacto con la crema."
      },
      {
        "title": "Forma la ganache",
        "text": "Deja reposar un minuto. Mezcla desde el centro y agrega la mantequilla hasta obtener una crema lisa. Empieza con círculos pequeños y amplía el movimiento al emulsionar. Incorpora la mantequilla hasta que no queden vetas.",
        "minutes": 0,
        "cue": "Ganache lisa, brillante y sin grasa separada."
      },
      {
        "title": "Enfría",
        "text": "Cubre y refrigera alrededor de 2 horas, hasta que la mezcla pueda moldearse con una cuchara. Cubre el recipiente para evitar que absorba olores. Debe endurecer lo suficiente para tomar una porción con cuchara.",
        "minutes": 120,
        "cue": "La porción conserva su forma y no se escurre."
      },
      {
        "title": "Dales forma",
        "text": "Forma porciones iguales con manos frescas y limpias. Haz bolitas rápidamente y pásalas por el cacao. Regresa al refrigerador hasta servir. Porciona primero y redondea después, tocándolas el menor tiempo posible. Si se ablandan, vuelve a enfriar antes de seguir.",
        "minutes": 0,
        "cue": "Bolitas firmes cubiertas con una capa delgada de cacao."
      }
    ],
    "tips": "Si la mezcla se ablanda, devuélvela al frío unos minutos. Usa chocolate de barra para repostería, no cobertura sucedánea. Conserva refrigeradas hasta 5 días.",
    "beforeYouStart": [
      "Utiliza chocolate semiamargo de alrededor de 60 % de cacao; cambiarlo por chocolate con leche altera la firmeza.",
      "Pica el chocolate muy fino y usa un recipiente completamente seco.",
      "Prepara una charola y el cacao antes de formar las trufas para trabajar rápido."
    ],
    "doneWhen": [
      "La trufa mantiene su forma fuera del recipiente.",
      "El centro es cremoso y no está separado en grasa y sólidos."
    ],
    "troubleshooting": [
      {
        "problem": "La ganache no endurece",
        "solution": "Revisa la proporción y el tipo de chocolate. Dale más frío antes de añadir ingredientes que cambiarían la receta."
      },
      {
        "problem": "Se pegan mucho a las manos",
        "solution": "La mezcla o las manos están calientes. Trabaja en porciones pequeñas y enfría de nuevo la ganache."
      }
    ],
    "storage": "Guarda en un recipiente cerrado en refrigeración y consume en 5 días. Mantén protegidas de humedad y olores; sácalas unos minutos antes de servir, sin dejarlas al calor.",
    "servingTip": "Para obtener 20 trufas de tamaño similar, divide primero toda la mezcla con una cuchara y después redondea las porciones."
  },
  {
    "id": "donas-glaseadas",
    "name": "Donas glaseadas",
    "categoryLabel": "Donas al horno",
    "tags": [
      "pasteles",
      "faciles"
    ],
    "difficulty": "Fácil",
    "servings": 12,
    "prep": 25,
    "cook": 12,
    "rest": 30,
    "oven": 180,
    "description": "Donas horneadas, suaves y con un glaseado de vainilla que brilla solito.",
    "photo": "photo-1573519939879-57c40b9cea5d",
    "photoAlt": "Donas redondas con glaseado claro en una charola",
    "photographer": "Jovan Vasiljević",
    "photoSource": "https://unsplash.com/photos/fiKPM-x3oiQ",
    "equipment": "Molde para 12 donas horneadas y una rejilla.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 220,
        "unit": "g",
        "group": "Donas"
      },
      {
        "name": "azúcar",
        "amount": 100,
        "unit": "g",
        "group": "Donas"
      },
      {
        "name": "polvo para hornear",
        "amount": 8,
        "unit": "g",
        "group": "Donas"
      },
      {
        "name": "sal",
        "amount": 2,
        "unit": "g",
        "group": "Donas"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 2,
        "unit": "pzas",
        "group": "Donas"
      },
      {
        "name": "leche",
        "amount": 160,
        "unit": "ml",
        "group": "Donas"
      },
      {
        "name": "mantequilla derretida y tibia",
        "amount": 50,
        "unit": "g",
        "group": "Donas"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Donas"
      },
      {
        "name": "azúcar glass tamizada",
        "amount": 150,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "leche",
        "amount": 30,
        "unit": "ml",
        "group": "Glaseado"
      },
      {
        "name": "extracto de vainilla",
        "amount": 2,
        "unit": "ml",
        "group": "Glaseado"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Precalienta a 180 °C y engrasa el molde para donas. Mezcla harina, azúcar, polvo para hornear y sal. Mezcla los secos de forma uniforme y revisa que no haya grumos en el polvo para hornear. Ten el horno caliente antes de combinar la masa.",
        "minutes": 0,
        "cue": "Molde preparado y secos bien repartidos."
      },
      {
        "title": "Mezcla",
        "text": "Bate aparte huevos, leche, mantequilla tibia y vainilla de la masa. Une con los secos, sin sobrebatir. Vierte los líquidos sobre los secos y mezcla solo hasta humedecer toda la harina. No busques una masa extremadamente lisa a base de batir.",
        "minutes": 0,
        "cue": "Masa espesa que cae de la espátula, sin harina seca."
      },
      {
        "title": "Rellena y hornea",
        "text": "Llena las cavidades hasta dos tercios. Hornea a 180 °C por unos 12 minutos, hasta que recuperen su forma al presionarlas suavemente y un palillo salga limpio. Puedes usar una manga o una bolsa apta para alimentos para llenar sin manchar el centro. El tiempo indicado es por tanda.",
        "minutes": 12,
        "cue": "Donas infladas que recuperan su forma al tocarlas."
      },
      {
        "title": "Enfría",
        "text": "Espera 5 minutos antes de desmoldar. Deja sobre una rejilla unos 15 minutos más, hasta que estén frías. Desmolda con cuidado cuando se sostengan. Déjalas sobre rejilla para que la base no acumule vapor.",
        "minutes": 20,
        "cue": "Donas frías por arriba y por la base."
      },
      {
        "title": "Glasea",
        "text": "Mezcla azúcar glass, leche y vainilla del glaseado, añadiendo la leche gradualmente. Sumerge la cara superior de cada dona, deja escurrir y espera unos 10 minutos para que se asiente. Añade la leche del glaseado poco a poco: quizá no necesites verterla toda de golpe. Debe caer en una cinta espesa.",
        "minutes": 10,
        "cue": "Glaseado que cubre y escurre lentamente, sin desaparecer."
      }
    ],
    "tips": "Son donas de masa tipo bizcocho y necesitan molde; no llevan levadura ni fritura. Si tu molde es de 6 cavidades, hornea dos tandas. Conserva cerradas hasta 2 días.",
    "beforeYouStart": [
      "Estas donas son horneadas, con miga tipo bizcocho; no necesitan levadura ni fritura.",
      "Separa la leche y la vainilla del glaseado de las cantidades de la masa.",
      "Engrasa bien los bordes y el tubo central de cada cavidad para facilitar el desmoldado."
    ],
    "doneWhen": [
      "El palillo sale limpio y la miga tiene textura de bizcocho.",
      "El glaseado se asienta sobre la dona fría."
    ],
    "troubleshooting": [
      {
        "problem": "Se rompe al desmoldar",
        "solution": "La cavidad no estaba bien engrasada o la dona sigue demasiado caliente. Espera a que se afirme y despega el borde suavemente."
      },
      {
        "problem": "El glaseado se absorbe",
        "solution": "Las donas estaban tibias o el glaseado demasiado líquido. Enfría por completo y controla la leche al mezclarlo."
      }
    ],
    "storage": "Guarda las donas frías con el glaseado seco en un recipiente cerrado hasta 2 días en un lugar fresco. Si hace calor, refrigera. La textura es mejor el día de preparación.",
    "servingTip": "Coloca una charola bajo la rejilla al glasear para recoger los escurrimientos y evitar que la base quede sumergida."
  },
  {
    "id": "mini-cheesecakes",
    "name": "Mini cheesecakes",
    "categoryLabel": "Porciones individuales",
    "tags": [
      "pasteles",
      "frios"
    ],
    "difficulty": "Intermedia",
    "servings": 12,
    "prep": 25,
    "cook": 22,
    "rest": 210,
    "oven": 160,
    "description": "Todo lo que te gusta del cheesecake, en pequeños bocados con frutos rojos.",
    "photo": "photo-1772729514583-016639ee5d3b",
    "photoAlt": "Mini cheesecakes individuales con cobertura de frutos rojos",
    "photographer": "Sofia Lasheva",
    "photoSource": "https://unsplash.com/photos/abPH32tSrqY",
    "equipment": "Molde de 12 cupcakes, capacillos y batidora.",
    "ingredients": [
      {
        "name": "galletas María",
        "amount": 140,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida",
        "amount": 60,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "queso crema a temperatura ambiente",
        "amount": 360,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "azúcar",
        "amount": 90,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "huevo grande, sin cáscara",
        "amount": 2,
        "unit": "pzas",
        "group": "Relleno"
      },
      {
        "name": "crema ácida",
        "amount": 120,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "extracto de vainilla",
        "amount": 5,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "mermelada de frutos rojos",
        "amount": 120,
        "unit": "g",
        "group": "Cobertura"
      }
    ],
    "steps": [
      {
        "title": "Pequeñas bases",
        "text": "Precalienta a 160 °C. Pon capacillos en el molde. Tritura galletas, mezcla con mantequilla y reparte presionando en las bases. Compacta cada base con un objeto pequeño y plano que entre en la cavidad. Procura que todas tengan la misma cantidad de galleta.",
        "minutes": 0,
        "cue": "Bases parejas que no dejan migas sueltas."
      },
      {
        "title": "El relleno",
        "text": "Bate queso crema y azúcar a velocidad baja hasta suavizar. Agrega los huevos uno a uno, después crema ácida y vainilla. Evita incorporar demasiado aire. Bate a velocidad baja y raspa el tazón antes de seguir. Añade cada huevo al integrar el anterior para evitar grumos y exceso de aire.",
        "minutes": 0,
        "cue": "Relleno liso con pocas burbujas."
      },
      {
        "title": "Al horno",
        "text": "Reparte sin llenar hasta el borde. Hornea a 160 °C durante unos 22 minutos, hasta que los bordes estén firmes y el centro se mueva ligeramente, sin estar líquido. Deja espacio hasta el borde del capacillo. Comprueba una pieza del centro: debe temblar ligeramente, sin ondas líquidas.",
        "minutes": 22,
        "cue": "Bordes firmes y centro apenas móvil."
      },
      {
        "title": "Enfría despacito",
        "text": "Deja enfriar en el molde unos 30 minutos. Retira con cuidado hacia una rejilla si todavía están tibios y espera a que pierdan el calor. No retires los capacillos mientras el relleno siga caliente. Deja que el calor se disipe antes de tapar las piezas.",
        "minutes": 30,
        "cue": "Las piezas se sostienen y ya no desprenden vapor."
      },
      {
        "title": "Un descanso frío",
        "text": "Cubre y refrigera por lo menos 3 horas antes de quitar los capacillos. Acomoda sin apilar y cubre para que no absorban olores. El reposo termina de dar cuerpo al queso.",
        "minutes": 180,
        "cue": "Relleno firme y capacillo que se retira sin deshacer la pieza."
      },
      {
        "title": "Termina con frutos rojos",
        "text": "Reparte la mermelada fría sobre cada cheesecake justo antes de servir. Pon la cobertura solo sobre piezas frías y evita cargar demasiado el centro. Reparte la cantidad indicada entre las doce.",
        "minutes": 0,
        "cue": "Cobertura fría y porciones estables."
      }
    ],
    "tips": "El queso crema suave evita grumos. No sobrehornees: el centro termina de asentarse al enfriarse. Conserva cubiertos en refrigeración y consume en 3 días.",
    "beforeYouStart": [
      "Usa capacillos en un molde de 12 cavidades y deja los ingredientes del relleno perder el frío intenso.",
      "Reparte la base y el relleno por igual para que las piezas se horneen al mismo tiempo.",
      "Mantén la mermelada refrigerada hasta el momento de decorar."
    ],
    "doneWhen": [
      "Se mantienen enteros al retirar el capacillo.",
      "La textura es cremosa y no está líquida en el centro."
    ],
    "troubleshooting": [
      {
        "problem": "Se hunden o se agrietan",
        "solution": "Puede haber exceso de aire o de cocción. Bate poco y retira con un pequeño temblor central."
      },
      {
        "problem": "El capacillo se pega mucho",
        "solution": "Todavía les falta frío. Refrigera el tiempo completo antes de quitar el papel."
      }
    ],
    "storage": "Conserva tapados en refrigeración a 4 °C o menos y consume en 3 días. Si los vas a transportar, mantenlos fríos y añade la cobertura al llegar.",
    "servingTip": "Pela el capacillo lentamente después del reposo. Sirve una o dos piezas por persona según el tamaño del postre."
  },
  {
    "id": "cheesecake-de-galleta",
    "name": "Cheesecake de galleta",
    "categoryLabel": "Galleta y queso crema",
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
        "text": "Tritura las galletas de la base con su crema. Mezcla con la mantequilla y presiona sobre el fondo del molde. Refrigera mientras preparas el relleno. Tritura las galletas de la base hasta que no queden trozos grandes. Presiona con un vaso para compactar y deja enfriar mientras haces el relleno.",
        "minutes": 0,
        "cue": "Base uniforme que se mantiene unida."
      },
      {
        "title": "Hidrata la grenetina",
        "text": "Espolvorea la grenetina sobre el agua fría. Espera 5 minutos y después calienta en intervalos cortos, solo hasta disolverla, sin hervir. Esparce la grenetina por toda la superficie del agua. Cuando se hinche, calienta lo justo para que vuelva a estar líquida, sin hervir.",
        "minutes": 5,
        "cue": "Grenetina disuelta y sin granos visibles."
      },
      {
        "title": "Prepara las dos cremas",
        "text": "Bate el queso con el azúcar glass y la vainilla hasta suavizar. En otro recipiente, bate la crema fría hasta obtener picos suaves. Bate el queso hasta suavizar antes de incorporar otros ingredientes. Monta la crema por separado y detente en picos suaves.",
        "minutes": 0,
        "cue": "Dos mezclas lisas; la crema conserva volumen."
      },
      {
        "title": "Todo se encuentra",
        "text": "Mezcla unas cucharadas del queso con la grenetina tibia y devuelve al resto del queso. Incorpora la crema batida con movimientos envolventes y añade las galletas troceadas. Primero templa la grenetina con unas cucharadas de queso para evitar hilos. Agrega las galletas al final para conservar pequeños trozos.",
        "minutes": 0,
        "cue": "Relleno aireado y uniforme, sin hebras de grenetina."
      },
      {
        "title": "Su descanso en frío",
        "text": "Vierte sobre la base, alisa y cubre. Refrigera por lo menos 6 horas, hasta que el centro esté firme. Alisa la superficie y cubre sin tocarla. Evita mover el molde y respeta el reposo completo, especialmente si el refrigerador está muy lleno.",
        "minutes": 360,
        "cue": "El centro está firme y no se desplaza como líquido."
      },
      {
        "title": "El toque de galleta",
        "text": "Desmolda con cuidado y decora con las galletas restantes justo antes de servir. Corta con un cuchillo limpio entre cada porción. Abre el aro lentamente y decora al servir. Las galletas decorativas pierden su textura si pasan demasiado tiempo sobre la crema húmeda.",
        "minutes": 0,
        "cue": "Corte estable y decoración recién colocada."
      }
    ],
    "tips": "No retires la crema de las galletas: está contemplada en estas cantidades. La grenetina debe estar tibia y fluida al mezclarla. Mantén refrigerado y consume en 3 días.",
    "beforeYouStart": [
      "Las galletas tipo sándwich se pesan con su crema: no la retires, porque está incluida en la receta.",
      "Mantén fría la crema para batir y utiliza queso crema suave para evitar grumos.",
      "Prepara un molde desmontable de 20 cm y reserva espacio nivelado en el refrigerador."
    ],
    "doneWhen": [
      "El relleno sostiene la rebanada al separarla.",
      "La base permanece unida y los trozos de galleta se distinguen en la crema."
    ],
    "troubleshooting": [
      {
        "problem": "El relleno no se sostiene",
        "solution": "Revisa el tipo de crema, la disolución de la grenetina y el tiempo de refrigeración. Si no queda firme, conserva frío y sirve en copas."
      },
      {
        "problem": "La base queda demasiado dura",
        "solution": "Puede estar muy compactada o haberse enfriado hasta casi congelarse. Corta con un cuchillo firme y evita una base excesivamente gruesa."
      }
    ],
    "storage": "Conserva cubierto en refrigeración a 4 °C o menos y consume en 3 días. Mantén las galletas para decorar aparte hasta servir.",
    "servingTip": "Corta con un cuchillo limpio entre porciones. Si quieres la superficie más crujiente, coloca las galletas de decoración al último momento."
  },
  {
    "id": "galletas-de-mantequilla",
    "name": "Galletas de mantequilla",
    "categoryLabel": "Mantequilla y vainilla",
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
        "text": "Bate la mantequilla con el azúcar glass hasta obtener una crema uniforme, sin batir en exceso. Incorpora la yema y la vainilla. Bate hasta unir y aclarar ligeramente, sin buscar un volumen enorme. Raspa el tazón para que no queden partes sin mezclar.",
        "minutes": 0,
        "cue": "Crema suave y uniforme, no líquida."
      },
      {
        "title": "Forma la masa",
        "text": "Añade la harina y la sal. Mezcla solo hasta que la masa se una; no la amases como pan. Presiona con la espátula o las manos hasta unir los secos. No amases durante varios minutos: eso vuelve más duras las galletas.",
        "minutes": 0,
        "cue": "Masa compacta que no se deshace al presionarla."
      },
      {
        "title": "Enfría antes de cortar",
        "text": "Forma un disco, cubre y refrigera 30 minutos. Precalienta el horno a 170 °C y prepara las charolas. Forma un disco poco grueso para que enfríe de manera uniforme. Si está demasiado rígido al salir, espera unos momentos antes de estirar.",
        "minutes": 30,
        "cue": "Masa firme pero flexible bajo el rodillo."
      },
      {
        "title": "Dales forma",
        "text": "Estira entre dos hojas de papel para hornear hasta un grosor de 5 mm. Corta las galletas y acomódalas separadas en las charolas. Si la masa se ablanda, enfríala de nuevo. Mantén el grosor de 5 mm en toda la lámina y reúne los recortes con el mínimo trabajo posible. Coloca juntas las piezas de tamaño similar.",
        "minutes": 0,
        "cue": "Cortes limpios y galletas de grosor parejo."
      },
      {
        "title": "Dorado suave",
        "text": "Hornea a 170 °C unos 14 minutos por tanda, hasta que los bordes apenas cambien de color. El centro debe permanecer claro. Observa la base y los bordes: no deben dorarse por completo. Hornea tandas de tamaño semejante para controlar el tiempo.",
        "minutes": 14,
        "cue": "Borde apenas dorado y superficie todavía clara."
      },
      {
        "title": "Espera el primer bocado",
        "text": "Deja reposar 10 minutos en la charola y termina de enfriar sobre una rejilla antes de guardarlas. Al salir del horno son delicadas. Espera antes de levantarlas y no las apiles hasta que hayan perdido el calor.",
        "minutes": 10,
        "cue": "Galletas firmes que se levantan sin quebrarse."
      }
    ],
    "tips": "Usa mantequilla, no margarina, para conservar el sabor y la textura. El tiempo de horno es por tanda. Guarda las galletas completamente frías en una lata o recipiente hermético hasta 5 días.",
    "beforeYouStart": [
      "La mantequilla debe estar suave, sin verse aceitosa. El azúcar glass ayuda a una textura delicada.",
      "Pesa la yema separada de la clara; esta receta utiliza solo la yema.",
      "Deja espacio en el refrigerador para enfriar la masa cuando se ablande al trabajarla."
    ],
    "doneWhen": [
      "Los bordes conservan la forma del cortador.",
      "La textura es delicada y la base está cocida, sin oscurecerse demasiado."
    ],
    "troubleshooting": [
      {
        "problem": "Pierden la forma",
        "solution": "La masa estaba muy caliente. Enfría los cortes antes de hornear y evita charolas calientes."
      },
      {
        "problem": "Quedan duras",
        "solution": "Puede haberse amasado demasiado o usado mucha harina al estirar. Estira entre papel y trabaja solo hasta unir."
      }
    ],
    "storage": "Guarda completamente frías en una lata o recipiente hermético hasta 5 días en un lugar fresco y seco. No las encierres tibias: el vapor afecta a la textura.",
    "servingTip": "Usa cortadores de tamaño parecido y sirve cuando hayan enfriado. Una galleta fría permite apreciar mejor el sabor de la mantequilla."
  },
  {
    "id": "galletas-de-naranja",
    "name": "Galletas de naranja",
    "categoryLabel": "Ralladura de naranja",
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
        "text": "Frota la ralladura con el azúcar usando los dedos. Bate con la mantequilla hasta formar una crema; añade el huevo y el jugo de la masa. Frotar la ralladura con el azúcar libera sus aceites aromáticos. Raspa después los bordes del tazón para integrar la mantequilla.",
        "minutes": 0,
        "cue": "Crema aromática, sin líquido separado."
      },
      {
        "title": "Integra los secos",
        "text": "Mezcla harina, polvo para hornear y sal. Incorpora a la crema sin sobrebatir. Distribuye primero el polvo para hornear en la harina. Mezcla con espátula y detente al desaparecer las zonas secas.",
        "minutes": 0,
        "cue": "Masa suave y uniforme, sin exceso de trabajo."
      },
      {
        "title": "Una pausa en frío",
        "text": "Cubre y refrigera 25 minutos. Precalienta el horno a 175 °C y prepara las charolas. Cubre para que no se reseque. Si la cocina está caliente, devuelve la masa al frío entre tandas.",
        "minutes": 25,
        "cue": "Masa que puede porcionarse sin desparramarse."
      },
      {
        "title": "Porciones parejitas",
        "text": "Divide la masa en 20 bolitas, colócalas con unos 5 cm de separación y aplástalas ligeramente. Divide en veinte partes parecidas y aplasta de forma ligera, no hasta dejarlas planas. Mantén la separación indicada.",
        "minutes": 0,
        "cue": "Porciones de tamaño y altura similares."
      },
      {
        "title": "Al horno",
        "text": "Hornea a 175 °C aproximadamente 14 minutos por tanda, hasta que la base esté dorada y la superficie firme. No esperes un dorado intenso. Revisa la base levantando una galleta con espátula cuando ya se sostenga. El color de la superficie puede seguir siendo claro.",
        "minutes": 14,
        "cue": "Base ligeramente dorada y centro firme, todavía tierno."
      },
      {
        "title": "Enfría y glasea",
        "text": "Deja enfriar por completo, unos 15 minutos. Mezcla el azúcar glass con el jugo del glaseado y dibuja hilos sobre las galletas. Deja secar antes de apilarlas. Añade el jugo del glaseado poco a poco y remueve hasta obtener una cinta espesa. Glasea únicamente sobre galletas completamente frías.",
        "minutes": 15,
        "cue": "Glaseado visible que no desaparece dentro de la galleta."
      }
    ],
    "tips": "Lava y seca la naranja antes de rallarla; evita la parte blanca, que amarga. El tiempo de horno es por tanda. Conserva las galletas frías y con el glaseado seco en un recipiente hermético hasta 4 días.",
    "beforeYouStart": [
      "Lava y seca la naranja antes de rallarla. Toma solo la capa coloreada y evita la parte blanca.",
      "Separa el jugo de la masa del reservado para el glaseado; añadir todo a la masa cambia su humedad.",
      "Usa mantequilla suave y charolas frías para controlar cuánto se extienden."
    ],
    "doneWhen": [
      "La base está cocida y la galleta se sostiene al enfriar.",
      "El aroma a naranja es claro, sin amargor de la cáscara."
    ],
    "troubleshooting": [
      {
        "problem": "La masa queda muy blanda",
        "solution": "Comprueba la cantidad de jugo y la temperatura de la mantequilla. Refrigera antes de añadir harina extra que pueda endurecerlas."
      },
      {
        "problem": "El glaseado es demasiado líquido",
        "solution": "Añade el jugo gradualmente. Debe caer despacio de la cuchara; no glasees cuando las galletas estén tibias."
      }
    ],
    "storage": "Espera a que el glaseado se seque y guarda en un recipiente hermético hasta 4 días en un lugar fresco. Si apilas, separa las capas con papel para hornear.",
    "servingTip": "Glasea en hilos para que se siga apreciando la galleta. Deja secar antes de trasladarlas o apilarlas."
  },
  {
    "id": "empanadas-dulces-de-pina",
    "name": "Empanadas dulces de piña",
    "categoryLabel": "Empanadas de piña",
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
        "text": "Calienta la piña con el azúcar y la canela a fuego medio durante unos 12 minutos. Disuelve la fécula en el agua, incorpora y cocina 3 minutos más, removiendo, hasta tener un relleno espeso. Pasa a un recipiente amplio y deja enfriar por completo. Remueve especialmente al añadir la fécula para evitar grumos. Extiende el relleno en un recipiente amplio para que pierda calor antes de usarlo.",
        "minutes": 15,
        "cue": "Relleno espeso, sin un charco de jugo al apartarlo con cuchara."
      },
      {
        "title": "Una masa sin prisa",
        "text": "Mezcla harina, azúcar y sal. Incorpora la mantequilla fría con las yemas de los dedos hasta obtener migas. Añade el huevo y la leche poco a poco, solo hasta unir. No amases en exceso. Mezcla la mantequilla con los secos sin calentarla demasiado con las manos. Añade la leche de forma gradual y detente cuando la masa se una.",
        "minutes": 0,
        "cue": "Masa compacta y manejable, sin amasado prolongado."
      },
      {
        "title": "Descansa en frío",
        "text": "Cubre la masa y refrigera 30 minutos; durante ese tiempo termina de enfriarse el relleno. Precalienta el horno a 180 °C. Cubre la masa para que no forme costra. Comprueba también el relleno: debe haber perdido por completo el calor antes del armado.",
        "minutes": 30,
        "cue": "Masa firme y relleno frío."
      },
      {
        "title": "Rellena y sella",
        "text": "Estira la masa a 3 mm y corta 12 discos de unos 12 cm, reuniendo los recortes sin sobreamasar. Reparte el relleno frío, dejando el borde libre. Dobla, humedece apenas los bordes con agua y sella con un tenedor. Deja libre el borde, dobla sin estirar en exceso y expulsa con cuidado el aire grande. Presiona el sellado, sin perforar la masa.",
        "minutes": 0,
        "cue": "Bordes unidos por completo y masa sin grietas."
      },
      {
        "title": "Dorado de panadería",
        "text": "Acomoda en una charola con papel. Barniza con el huevo batido y haz una pequeña ranura para que salga el vapor. Hornea a 180 °C unos 25 minutos, hasta que estén doradas y la base cocida. El pequeño corte superior permite salir al vapor. Barniza sin acumular huevo alrededor del borde para que no se queme en la charola.",
        "minutes": 25,
        "cue": "Superficie dorada, base cocida y uniones cerradas."
      },
      {
        "title": "Que no queme el antojo",
        "text": "Deja reposar 20 minutos antes de comer: el relleno conserva mucho calor. El relleno retiene calor incluso cuando la superficie parece templada. Espera antes de dar el primer bocado.",
        "minutes": 20,
        "cue": "Empanada estable y relleno que ya no quema."
      }
    ],
    "tips": "El relleno debe estar frío y espeso antes de cerrar las empanadas. No las llenes de más. El tiempo de horno es por tanda si no caben juntas. Conserva refrigeradas hasta 3 días y recalienta para recuperar la textura.",
    "beforeYouStart": [
      "Pica la piña en trozos pequeños para repartir el relleno sin romper los discos de masa.",
      "El relleno debe estar frío y espeso antes de cerrar las empanadas; no rellenes con fruta caliente.",
      "Mantén la mantequilla y la leche frías y prepara un cortador o plato de unos 12 cm para los discos."
    ],
    "doneWhen": [
      "La base se siente cocida y no tiene franjas de masa húmeda.",
      "El relleno se mantiene dentro y el borde conserva el sellado."
    ],
    "troubleshooting": [
      {
        "problem": "Se abren en el horno",
        "solution": "Puede haber exceso de relleno, bordes mal unidos o relleno todavía caliente. Deja más margen y sella completamente."
      },
      {
        "problem": "La base queda húmeda",
        "solution": "El relleno tenía demasiado jugo o faltó cocción inferior. Cocina bien la piña con la fécula y comprueba la base al hornear."
      }
    ],
    "storage": "Deja que pierdan el calor y guarda tapadas en refrigeración hasta 3 días. Recalienta solo las que vas a consumir, preferentemente en horno para recuperar la base.",
    "servingTip": "Sirve tibias, después del reposo. Si preparas varias tandas, no coloques masa nueva sobre una charola todavía caliente."
  },
  {
    "id": "tarta-de-manzana",
    "name": "Tarta de manzana",
    "categoryLabel": "Manzana y canela",
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
        "text": "Mezcla harina, azúcar y sal. Integra la mantequilla fría hasta formar migas; añade el huevo y une sin amasar de más. Forma un disco y cubre. Deshaz la mantequilla en los secos hasta obtener migas, conservándola fría. Añade el huevo y presiona solo hasta formar un disco.",
        "minutes": 0,
        "cue": "Masa unida, sin grasa derretida en la superficie."
      },
      {
        "title": "Un descanso necesario",
        "text": "Refrigera la masa 30 minutos. Precalienta el horno a 190 °C y engrasa ligeramente el molde. Una masa fría es más fácil de estirar y conserva mejor el borde. Si se endurece mucho, deja que ceda un poco antes de pasar el rodillo.",
        "minutes": 30,
        "cue": "Masa firme, que se estira sin romperse en pedazos."
      },
      {
        "title": "Prepara las manzanas",
        "text": "Corta las manzanas en láminas de unos 2 mm. Mezcla con limón, azúcar, canela y fécula de maíz justo antes de armar la tarta. Mezcla la fruta con azúcar y fécula cerca del armado para no extraer demasiado jugo con anticipación. Reparte el condimento de forma uniforme.",
        "minutes": 0,
        "cue": "Láminas parejas ligeramente recubiertas."
      },
      {
        "title": "Arma tu tarta",
        "text": "Estira la masa a 3 mm y cubre el fondo y los lados del molde. Pincha la base con un tenedor. Distribuye la manzana en capas, sin amontonar demasiado el centro, y reparte la mantequilla del relleno. Acomoda sin dejar grandes huecos y sin amontonar toda la fruta en el centro. No estires la masa al cubrir el molde, porque después se encoge.",
        "minutes": 0,
        "cue": "Base sin roturas y fruta distribuida en capas."
      },
      {
        "title": "Al horno",
        "text": "Coloca el molde sobre una charola y hornea a 190 °C unos 45 minutos, hasta que la base esté dorada, la manzana tierna y los jugos burbujeen. Cubre suavemente los bordes si se doran antes. El burbujeo de los jugos indica que el relleno se está calentando y espesando. Comprueba que la manzana del centro esté tierna.",
        "minutes": 45,
        "cue": "Borde dorado y láminas tiernas al pincharlas."
      },
      {
        "title": "Dale tiempo de asentarse",
        "text": "Deja reposar al menos 30 minutos antes de desmoldar y cortar, para que el relleno se asiente. El relleno se asienta al perder calor. Desmolda sujetando la base, sin tirar del borde frágil de la masa.",
        "minutes": 30,
        "cue": "Una porción se sostiene sin soltar abundante jugo."
      }
    ],
    "tips": "Combina manzanas ácidas y dulces si te gusta el contraste. Para una base más crujiente, coloca el molde en la mitad inferior del horno. Refrigera las sobras cubiertas y consume en 3 días.",
    "beforeYouStart": [
      "Pesa la manzana después de pelarla y quitar el corazón. Utiliza fruta firme que conserve algo de forma al hornear.",
      "Mantén fría la mantequilla de la base y evita trabajar la masa durante demasiado tiempo.",
      "Prepara el molde de 24 cm y corta las láminas de manzana de unos 2 mm para cocción uniforme."
    ],
    "doneWhen": [
      "La manzana está tierna y la base cocida por debajo.",
      "Los jugos se han espesado y no inundan el plato al cortar."
    ],
    "troubleshooting": [
      {
        "problem": "La base queda húmeda",
        "solution": "La fruta podía tener exceso de jugo o la tarta se colocó demasiado arriba en el horno. Hornea en la mitad inferior y comprueba el fondo."
      },
      {
        "problem": "La masa se rompe al estirar",
        "solution": "Puede estar demasiado fría o seca. Deja que se vuelva flexible y estira entre papel, sin añadir harina a puñados."
      }
    ],
    "storage": "Guarda las sobras tapadas en refrigeración y consume en 3 días. Para recuperar la base, templa la porción brevemente en horno en lugar de recalentar toda la tarta varias veces.",
    "servingTip": "Espera el reposo antes de cortar. Sirve tibia o a temperatura ambiente, evitando levantar las porciones por el borde de masa."
  },
  {
    "id": "pay-de-queso",
    "name": "Pay de queso",
    "categoryLabel": "Queso crema al horno",
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
        "text": "Precalienta el horno a 170 °C. Tritura las galletas y mezcla con la mantequilla. Presiona en el fondo y los lados del molde para pay. Tritura las galletas finas y compacta un grosor uniforme. Presiona también la unión entre el fondo y los lados, para que no se desmorone al cortar.",
        "minutes": 0,
        "cue": "Base firme y pareja, sin agujeros."
      },
      {
        "title": "Licúa con suavidad",
        "text": "Licúa el queso crema, la leche condensada, los huevos, la vainilla y el limón solo hasta obtener una mezcla lisa, sin incorporar demasiado aire. Licúa solo hasta eliminar los grumos. Detén el aparato y raspa con espátula si el queso queda pegado, antes de seguir.",
        "minutes": 0,
        "cue": "Relleno liso, sin espuma abundante."
      },
      {
        "title": "Llena el molde",
        "text": "Vierte sobre la base. Da unos golpecitos suaves contra la mesa para liberar las burbujas grandes y coloca el molde sobre una charola. Vierte despacio y evita llenar hasta desbordar. Los golpes deben ser suaves para liberar burbujas sin romper la base.",
        "minutes": 0,
        "cue": "Superficie pareja con pocas burbujas grandes."
      },
      {
        "title": "Al horno",
        "text": "Hornea a 170 °C unos 45 minutos. Los bordes deben estar firmes y el centro debe temblar ligeramente como gelatina, sin verse líquido. Si se dora demasiado pronto, cubre suavemente con aluminio. Mueve apenas el molde para observar el centro. No esperes a que quede rígido: eso suele producir grietas y una textura más seca.",
        "minutes": 45,
        "cue": "Bordes firmes y centro que tiembla como gelatina."
      },
      {
        "title": "Enfría poco a poco",
        "text": "Apaga el horno, deja la puerta entreabierta y espera 20 minutos. Retira y deja enfriar otros 40 minutos, hasta que pierda el calor. El enfriado gradual reduce el cambio brusco de temperatura. No cortes ni desmoldes mientras la base del molde siga muy caliente.",
        "minutes": 60,
        "cue": "El pay pierde el calor sin grandes grietas."
      },
      {
        "title": "Una pausa en el refrigerador",
        "text": "Cubre y refrigera por lo menos 4 horas antes de cortar. Sirve frío. Coloca sobre una superficie nivelada y no lo apiles. El frío termina de dar firmeza al centro.",
        "minutes": 240,
        "cue": "Rebanadas frías que se levantan sin deshacerse."
      }
    ],
    "tips": "El pay termina de asentarse al enfriar; hornearlo hasta que el centro esté completamente rígido puede agrietarlo. Ajusta el tiempo según tu horno. Conserva refrigerado y consume en 3 días.",
    "beforeYouStart": [
      "El queso crema debe estar suave para licuarse sin grumos. No utilices queso untable muy líquido.",
      "Esta versión es horneada y lleva huevos; necesita completar cocción, enfriado y refrigeración.",
      "Usa un molde para pay de 22 cm y una charola para trasladarlo con mayor estabilidad."
    ],
    "doneWhen": [
      "El centro se sostiene después del reposo frío.",
      "La textura es cremosa y la base permanece unida."
    ],
    "troubleshooting": [
      {
        "problem": "Tiene grietas grandes",
        "solution": "Puede haberse sobrebatido o sobrehorneado. Mezcla lo justo y retira con un pequeño temblor central."
      },
      {
        "problem": "No se sostiene al cortar",
        "solution": "Todavía está tibio o no tuvo suficiente refrigeración. Respeta el frío y comprueba que la cocción se completó."
      }
    ],
    "storage": "Conserva cubierto en refrigeración a 4 °C o menos y consume en 3 días. Después de servir, devuelve las porciones sobrantes al frío.",
    "servingTip": "Corta frío, con un cuchillo limpio entre porciones. Apoya la espátula bajo toda la base al levantar la rebanada."
  },
  {
    "id": "pan-de-elote",
    "name": "Pan de elote",
    "categoryLabel": "Elote y leche condensada",
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
        "text": "Precalienta el horno a 180 °C. Engrasa el molde y forra la base con papel para hornear. Forra completamente el fondo y engrasa los costados para proteger una miga húmeda que puede pegarse. Ten el horno caliente antes de mezclar los secos.",
        "minutes": 0,
        "cue": "Molde cubierto y horno precalentado."
      },
      {
        "title": "Licúa el elote",
        "text": "Licúa los granos de elote con la leche, la leche condensada, los huevos y la vainilla hasta obtener una mezcla espesa. Puede conservar pequeños trocitos de elote. Procesa en tandas si la licuadora es pequeña. La mezcla debe ser espesa y no necesita convertirse en un líquido completamente liso.",
        "minutes": 0,
        "cue": "Elote bien triturado, con trocitos pequeños."
      },
      {
        "title": "Integra la mantequilla",
        "text": "Añade la mantequilla derretida y tibia. Mezcla la harina con el polvo para hornear y la sal; incorpora a la mezcla de elote solo hasta integrar. Vierte la mantequilla tibia, no caliente. Incorpora los secos con espátula hasta que desaparezcan los grumos de harina.",
        "minutes": 0,
        "cue": "Masa espesa y homogénea, sin harina seca."
      },
      {
        "title": "Dorado y húmedo",
        "text": "Vierte en el molde y hornea a 180 °C unos 50 minutos. Comprueba con un palillo en el centro: debe salir sin masa líquida. Si hace falta, continúa en intervalos de 5 minutos; cubre si la superficie ya está dorada. Introduce el palillo en la zona central y revisa que no lleve masa líquida. Un elote especialmente húmedo puede requerir más tiempo.",
        "minutes": 50,
        "cue": "Centro cocido y superficie dorada, sin quemarse."
      },
      {
        "title": "Enfría antes de cortar",
        "text": "Deja reposar 15 minutos en el molde. Desmolda con cuidado y espera otros 15 minutos antes de cortar. No encierres el pan caliente: la condensación humedece la corteza. Desmolda con apoyo suficiente para no romper el fondo.",
        "minutes": 30,
        "cue": "El pan mantiene su forma y se corta sin pasta cruda."
      }
    ],
    "tips": "Usa elote fresco y tierno, no maíz seco ni maíz para pozole. Su humedad cambia según la variedad: revisa siempre el centro. Es un pan húmedo, no un bizcocho seco. Guarda cubierto en refrigeración hasta 3 días.",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "photoPlatform": "Wikimedia Commons",
    "beforeYouStart": [
      "Utiliza granos de elote fresco y tierno, pesados después de desgranar. No sustituyas por maíz seco o para pozole.",
      "La humedad cambia según el elote; guíate por el punto del centro además del tiempo del horno.",
      "Deja tibia la mantequilla derretida y prepara el molde redondo de 22 cm."
    ],
    "doneWhen": [
      "La miga es húmeda, con textura de elote, pero no está líquida.",
      "El centro se sostiene al cortar una rebanada después del reposo."
    ],
    "troubleshooting": [
      {
        "problem": "Se dora y sigue crudo",
        "solution": "Protege suavemente la superficie con aluminio y continúa revisando el centro. Comprueba el tamaño del molde y la temperatura del horno."
      },
      {
        "problem": "Se rompe al desmoldar",
        "solution": "Puede seguir demasiado caliente o haberse pegado a la base. Usa papel y espera el reposo indicado."
      }
    ],
    "storage": "Por su humedad, guarda tapado en refrigeración y consume en 3 días. Espera a que pierda el calor intenso antes de tapar, pero no lo dejes toda la noche a temperatura ambiente.",
    "servingTip": "Sírvelo ligeramente tibio para apreciar el elote. Recalienta una porción a la vez y evita resecar la superficie."
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
        "text": "Enjuaga brevemente el arroz y escúrrelo. Coloca en la cacerola con el agua, la canela en rama y la sal. El enjuague debe ser breve; escurre bien antes de añadir el agua medida. La canela en rama se infusiona desde el inicio para repartir su aroma.",
        "minutes": 0,
        "cue": "Arroz escurrido, agua medida y canela dentro de la cacerola."
      },
      {
        "title": "Que se abra el grano",
        "text": "Lleva a hervor y baja el fuego. Cocina con la tapa entreabierta unos 15 minutos, hasta que el arroz absorba casi toda el agua. Si todavía está muy duro y se queda seco, agrega un poco de agua caliente. Mantén un hervor suave y revisa el fondo al acercarse el final. La leche se añade cuando el arroz ya está parcialmente cocido, no completamente seco o pegado.",
        "minutes": 15,
        "cue": "El arroz ha absorbido casi toda el agua y empieza a ablandarse."
      },
      {
        "title": "La parte cremosa",
        "text": "Añade la leche entera y mantén un hervor muy suave, con la cacerola destapada. Cocina unos 20 minutos, removiendo seguido y pasando la cuchara por el fondo para que no se pegue. El arroz debe quedar tierno. Remueve con movimientos amplios por el fondo y las esquinas. El hervor debe ser suave, con burbujas pequeñas; una ebullición fuerte aumenta el riesgo de que se derrame.",
        "minutes": 20,
        "cue": "Granos tiernos, sin un centro duro al probar uno."
      },
      {
        "title": "El toque dulce",
        "text": "Incorpora la leche condensada y la vainilla. Cocina 5 minutos más a fuego bajo, removiendo. Retira la canela en rama. Déjalo un poco más líquido de lo que quieres: se espesa al reposar. Añade la leche condensada después de ablandar el arroz. Prueba la textura antes de retirar y recuerda que el enfriado concentra la mezcla.",
        "minutes": 5,
        "cue": "Mezcla cremosa, todavía un poco más fluida de lo deseado."
      },
      {
        "title": "A tu gusto, Ángel",
        "text": "Retira del fuego y deja reposar 10 minutos. Sirve tibio con la canela molida repartida por encima, o refrigera para disfrutar frío. Retira la canela en rama antes de repartir. Para servir frío, divide en recipientes poco profundos y lleva al refrigerador sin esperar toda la tarde.",
        "minutes": 10,
        "cue": "Arroz suave y cremoso, con canela repartida al servir."
      }
    ],
    "tips": "Si lo prefieres más suelto después de enfriar, añade un chorrito de leche. Para servir frío, reparte en recipientes poco profundos y refrigera dentro de las 2 horas siguientes a la cocción. Conserva refrigerado y consume en 3 días.",
    "beforeYouStart": [
      "Usa arroz blanco, no arroz integral: el tiempo y la cantidad de líquido cambian con otra variedad.",
      "Elige una cacerola de fondo grueso de al menos 3 litros para que la leche no se desborde al calentarse.",
      "Mantén una cuchara a mano durante la cocción con leche; remover el fondo evita que el arroz se pegue y se queme."
    ],
    "doneWhen": [
      "Un grano de arroz se aplasta con facilidad y no tiene centro duro.",
      "La mezcla cubre la cuchara y conserva algo de movimiento antes de enfriar."
    ],
    "troubleshooting": [
      {
        "problem": "Se pega al fondo",
        "solution": "El fuego está alto o se ha dejado de remover. Si se quemó, pasa solo la parte superior a otra olla sin raspar el fondo, para no repartir el sabor quemado."
      },
      {
        "problem": "Queda muy espeso en frío",
        "solution": "Es normal que el arroz absorba más líquido al reposar. Añade un poco de leche y mezcla hasta recuperar la textura que te guste."
      }
    ],
    "storage": "Divide en recipientes poco profundos y refrigera dentro de las 2 horas posteriores a la cocción. Conserva a 4 °C o menos y consume en 3 días. Recalienta solo la porción que vayas a comer.",
    "servingTip": "El favorito de Ángel se puede servir tibio o frío. Reparte la canela molida al final y ajusta la consistencia con un poco de leche si ya ha reposado."
  },
  {
    "id": "flan-napolitano",
    "name": "Flan napolitano",
    "categoryLabel": "Caramelo y sobremesa",
    "tags": [
      "frios",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 10,
    "prep": 25,
    "cook": 70,
    "rest": 300,
    "oven": 160,
    "description": "Una rebanada fría, caramelo que cae por los lados y ganas de repetir.",
    "equipment": "Molde redondo de aluminio de 20 cm y 6 cm de alto, charola profunda, licuadora, colador y aluminio.",
    "ingredients": [
      {
        "name": "azúcar",
        "amount": 120.0,
        "unit": "g",
        "group": "Caramelo"
      },
      {
        "name": "agua",
        "amount": 30.0,
        "unit": "ml",
        "group": "Caramelo"
      },
      {
        "name": "queso crema a temperatura ambiente",
        "amount": 190.0,
        "unit": "g",
        "group": "Flan"
      },
      {
        "name": "leche condensada",
        "amount": 397.0,
        "unit": "g",
        "group": "Flan"
      },
      {
        "name": "leche evaporada",
        "amount": 360.0,
        "unit": "ml",
        "group": "Flan"
      },
      {
        "name": "huevos grandes",
        "amount": 4.0,
        "unit": "pzas",
        "group": "Flan"
      },
      {
        "name": "extracto de vainilla",
        "amount": 10.0,
        "unit": "ml",
        "group": "Flan"
      }
    ],
    "steps": [
      {
        "title": "Haz el caramelo",
        "text": "Calienta azúcar y agua a fuego medio sin meter cucharas; mueve suavemente el cazo si hace falta. Al tomar color ámbar, vierte en el molde y gíralo con guantes. No toques ni pruebes el caramelo caliente.",
        "minutes": 0,
        "cue": "Ámbar claro, sin humo."
      },
      {
        "title": "Mezcla sin espuma",
        "text": "Precalienta el horno a 160 °C. Licúa queso, ambas leches, huevos y vainilla solo hasta integrar. Deja reposar 5 minutos y pasa por un colador al molde caramelizado para quitar grumos y parte de la espuma.",
        "minutes": 0,
        "cue": "Crema lisa y sin trozos de queso."
      },
      {
        "title": "Prepara el baño María",
        "text": "Cubre el molde con aluminio y colócalo dentro de la charola, sobre la rejilla del horno. Vierte agua caliente alrededor, sin que entre al flan. Usa una jarra para evitar mover una charola llena.",
        "minutes": 0,
        "cue": "El agua llega a media altura del molde."
      },
      {
        "title": "Hornea con calma",
        "text": "Hornea unos 60–75 minutos. Comprueba desde el minuto 60: al mover apenas el molde, el centro debe temblar unido, sin olas líquidas. Si sigue líquido, añade tandas de 5–10 minutos; no esperes que quede completamente rígido.",
        "minutes": 70,
        "cue": "Bordes firmes y centro que tiembla como gelatina."
      },
      {
        "title": "Enfría y refrigera",
        "text": "Saca el molde del agua con cuidado y deja templar aproximadamente 1 hora. Refrigera tapado al menos 4 horas; una noche facilita el desmolde. No dejes el flan toda la tarde a temperatura ambiente.",
        "minutes": 300,
        "cue": "Flan totalmente frío y firme al tacto suave."
      },
      {
        "title": "Dale la vuelta",
        "text": "Pasa un cuchillo fino por el contorno. Apoya el fondo 15 segundos en agua tibia si el caramelo se pegó. Cubre con un plato con borde y voltea de una vez, sujetando ambas piezas. Levanta el molde despacio.",
        "minutes": 0,
        "cue": "El flan se separa del borde y el caramelo fluye."
      }
    ],
    "tips": "Una mezcla poco aireada y el baño María suave ayudan a conseguir una textura más fina.",
    "beforeYouStart": [
      "Saca el queso del refrigerador con anticipación para que no deje grumos.",
      "Elige un molde metálico de una sola pieza, no desmontable.",
      "Ten listo el plato de servir: debe contener el caramelo."
    ],
    "doneWhen": [
      "El centro tiembla en bloque al terminar el horneado.",
      "Después del frío, la rebanada mantiene su forma."
    ],
    "troubleshooting": [
      {
        "problem": "Tiene muchos agujeritos.",
        "solution": "El horno o el agua estaban demasiado calientes. En la próxima tanda usa 160 °C y evita un hervor fuerte."
      },
      {
        "problem": "No se desprende.",
        "solution": "Entibia únicamente el fondo unos segundos y vuelve a soltar el borde; no lo sacudas con fuerza."
      }
    ],
    "storage": "Refrigera tapado hasta 3 días. No congeles si quieres conservar una textura uniforme.",
    "servingTip": "Sirve frío, con una cucharada de su propio caramelo en cada plato.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Flan_napolitano.png/960px-Flan_napolitano.png",
    "photoAlt": "Flan napolitano con caramelo en un plato",
    "photographer": "Giovanni Alfredo Garciliano Diaz",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Flan_napolitano.png",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/4.0"
  },
  {
    "id": "pastel-tres-leches",
    "name": "Pastel tres leches",
    "categoryLabel": "Esponjoso y bien mojadito",
    "tags": [
      "pasteles",
      "frios",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 12,
    "prep": 35,
    "cook": 30,
    "rest": 270,
    "oven": 175,
    "description": "Bizcocho ligero que se toma las tres leches despacito. Mejor al día siguiente.",
    "equipment": "Molde de 23 × 33 cm y al menos 5 cm de alto, batidora, espátula y brocheta.",
    "ingredients": [
      {
        "name": "huevos grandes a temperatura ambiente",
        "amount": 5.0,
        "unit": "pzas",
        "group": "Bizcocho"
      },
      {
        "name": "azúcar",
        "amount": 150.0,
        "unit": "g",
        "group": "Bizcocho"
      },
      {
        "name": "harina de trigo",
        "amount": 160.0,
        "unit": "g",
        "group": "Bizcocho"
      },
      {
        "name": "polvo para hornear",
        "amount": 6.0,
        "unit": "g",
        "group": "Bizcocho"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Bizcocho"
      },
      {
        "name": "leche entera",
        "amount": 60.0,
        "unit": "ml",
        "group": "Bizcocho"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Bizcocho"
      },
      {
        "name": "leche condensada",
        "amount": 397.0,
        "unit": "g",
        "group": "Baño"
      },
      {
        "name": "leche evaporada",
        "amount": 360.0,
        "unit": "ml",
        "group": "Baño"
      },
      {
        "name": "leche entera",
        "amount": 200.0,
        "unit": "ml",
        "group": "Baño"
      },
      {
        "name": "crema para batir fría",
        "amount": 300.0,
        "unit": "ml",
        "group": "Cubierta"
      },
      {
        "name": "azúcar glass",
        "amount": 25.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "fresas lavadas, secas y rebanadas",
        "amount": 150.0,
        "unit": "g",
        "group": "Cubierta"
      }
    ],
    "steps": [
      {
        "title": "Prepara todo",
        "text": "Precalienta a 175 °C. Separa claras y yemas sin dejar grasa en el recipiente de las claras. Mezcla harina, polvo de hornear y sal. Engrasa ligeramente el molde; el pastel se servirá dentro de él.",
        "minutes": 0,
        "cue": "Molde ligeramente engrasado y secos tamizados."
      },
      {
        "title": "Bate los huevos",
        "text": "Bate las claras hasta espumar y agrega 75 g de azúcar poco a poco. En otro recipiente bate yemas y los otros 75 g hasta aclarar. Incorpora a las yemas la leche y la vainilla.",
        "minutes": 0,
        "cue": "Claras brillantes con picos medios, no secas."
      },
      {
        "title": "Conserva el aire",
        "text": "Añade los secos a las yemas en dos tandas. Afloja con un tercio de las claras y después incorpora el resto con movimientos envolventes. Vierte en el molde sin golpearlo sobre la mesa.",
        "minutes": 0,
        "cue": "Masa ligera sin bolsas de harina."
      },
      {
        "title": "Hornea el bizcocho",
        "text": "Hornea de 25 a 30 minutos en la rejilla central. Deja enfriar 30 minutos en su molde. Si se dora demasiado rápido, cubre flojamente con aluminio al final; no abras el horno durante los primeros 20 minutos.",
        "minutes": 30,
        "cue": "Superficie elástica y brocheta sin masa cruda."
      },
      {
        "title": "Baña por tandas",
        "text": "Mezcla las tres leches. Pincha el bizcocho con una brocheta y vierte el baño en tres tandas, esperando a que absorba cada una. Tapa y refrigera al menos 4 horas dentro del molde.",
        "minutes": 240,
        "cue": "La leche entra en el bizcocho sin desbordarse."
      },
      {
        "title": "Termina con crema",
        "text": "Bate crema fría con azúcar glass hasta que mantenga su forma; detente antes de que se vea granulosa. Extiende sobre el pastel frío y añade las fresas justo antes de servir. Corta dentro del molde con una espátula.",
        "minutes": 0,
        "cue": "Crema con picos firmes y suaves."
      }
    ],
    "tips": "El molde profundo es parte de la receta: contiene el baño y evita perder leche al servir.",
    "beforeYouStart": [
      "Usa crema con al menos 35 % de grasa para que monte.",
      "Pesa el azúcar en dos porciones de 75 g.",
      "Reserva espacio en el refrigerador para el molde completo."
    ],
    "doneWhen": [
      "La brocheta sale limpia antes de añadir las leches.",
      "El bizcocho frío está húmedo por dentro, sin masa cruda."
    ],
    "troubleshooting": [
      {
        "problem": "Se bajó mucho en el horno.",
        "solution": "Bate a picos medios e incorpora sin aplastar. No abras antes de que la estructura se fije."
      },
      {
        "problem": "La crema se ve granulosa.",
        "solution": "Se batió de más. Si apenas comienza, integra un poco de crema líquida fría a mano; si ya se separó, prepara otra tanda."
      }
    ],
    "storage": "Mantén tapado y refrigerado hasta 3 días. Agrega fruta fresca el día de servir.",
    "servingTip": "Sirve en platos con borde: esa cucharadita de leche del fondo también se disfruta.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Tres_leches_cake%2C_Germany.jpg/960px-Tres_leches_cake%2C_Germany.jpg",
    "photoAlt": "Porción de pastel tres leches con salsas encima; presentación ilustrativa",
    "photographer": "Struppig taucher",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Tres_leches_cake,_Germany.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/4.0"
  },
  {
    "id": "chocoflan",
    "name": "Chocoflan",
    "categoryLabel": "Dos capas, un solo antojo",
    "tags": [
      "chocolate",
      "pasteles",
      "frios",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Elaborada",
    "servings": 12,
    "prep": 40,
    "cook": 85,
    "rest": 360,
    "oven": 170,
    "description": "Chocolate abajo, flan arriba y caramelo por todas partes. La espera sí tiene premio.",
    "equipment": "Molde de rosca de 24 cm y capacidad mínima de 2.5 litros, charola profunda, aluminio y licuadora.",
    "ingredients": [
      {
        "name": "mantequilla para engrasar",
        "amount": 15.0,
        "unit": "g",
        "group": "Molde"
      },
      {
        "name": "cajeta",
        "amount": 120.0,
        "unit": "g",
        "group": "Molde"
      },
      {
        "name": "harina de trigo",
        "amount": 140.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "cocoa sin azúcar",
        "amount": 35.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "polvo para hornear",
        "amount": 6.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "azúcar",
        "amount": 120.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Pastel"
      },
      {
        "name": "aceite vegetal",
        "amount": 80.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "leche entera",
        "amount": 150.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "queso crema suave",
        "amount": 190.0,
        "unit": "g",
        "group": "Flan"
      },
      {
        "name": "leche condensada",
        "amount": 397.0,
        "unit": "g",
        "group": "Flan"
      },
      {
        "name": "leche evaporada",
        "amount": 360.0,
        "unit": "ml",
        "group": "Flan"
      },
      {
        "name": "huevos grandes",
        "amount": 4.0,
        "unit": "pzas",
        "group": "Flan"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Calienta el horno a 170 °C. Engrasa con mantequilla y reparte la cajeta por el fondo. Pon agua a calentar para el baño María. Usa un molde cerrado de una sola pieza para que no entre agua.",
        "minutes": 0,
        "cue": "Molde bien engrasado, incluida la chimenea."
      },
      {
        "title": "Mezcla el pastel",
        "text": "Tamiza harina, cocoa, polvo de hornear y sal. En otro recipiente bate azúcar con los 2 huevos; incorpora aceite, leche y vainilla. Añade los secos y mezcla solo hasta integrar. Vierte sobre la cajeta.",
        "minutes": 0,
        "cue": "Masa uniforme de chocolate, sin harina visible."
      },
      {
        "title": "Añade el flan",
        "text": "Licúa el queso, las dos leches y los 4 huevos del flan a velocidad baja. Vierte lentamente sobre el reverso de una cuchara encima de la masa. Durante el horneado las capas cambiarán de posición; no las remuevas.",
        "minutes": 0,
        "cue": "Mezcla lisa y vertido suave."
      },
      {
        "title": "Hornea a baño María",
        "text": "Cubre con aluminio, coloca en la charola y agrega agua caliente hasta media altura. Hornea unos 80–95 minutos. Comprueba el pastel con una brocheta y el flan con un movimiento suave; añade 10 minutos si aún hay zonas líquidas.",
        "minutes": 85,
        "cue": "Brocheta del pastel sin masa cruda y flan cuajado."
      },
      {
        "title": "Deja que se asiente",
        "text": "Retira del agua con guantes y deja templar 1 hora. Refrigera tapado al menos 5 horas, preferiblemente de un día para otro. Desmoldar tibio puede romper la unión de las capas.",
        "minutes": 360,
        "cue": "Molde frío y capas estables."
      },
      {
        "title": "Desmolda sin prisa",
        "text": "Despega con cuidado el contorno exterior y la chimenea. Entibia el fondo unos segundos en agua tibia. Coloca un plato con borde sobre el molde, sujeta bien y voltea. Espera unos segundos antes de levantar el molde.",
        "minutes": 0,
        "cue": "Bordes sueltos alrededor y en el centro."
      }
    ],
    "tips": "No llenes más de tres cuartas partes del molde. Si tu molde es menor, prepara el sobrante por separado y ajusta su cocción.",
    "beforeYouStart": [
      "Comprueba la capacidad del molde con agua antes de empezar y luego sécalo.",
      "El queso suave evita tener que licuar demasiado el flan.",
      "Lee los ingredientes por grupo: los huevos del pastel y del flan son distintos."
    ],
    "doneWhen": [
      "La brocheta atraviesa la parte de pastel sin masa pegajosa.",
      "El flan tiene movimiento suave, sin líquido suelto."
    ],
    "troubleshooting": [
      {
        "problem": "Las capas se rompieron al voltear.",
        "solution": "Déjalo enfriar completamente y suelta también la chimenea antes de desmoldar."
      },
      {
        "problem": "El centro sigue crudo.",
        "solution": "Revisa que el baño tenga agua y continúa cubierto en tandas de 10 minutos; el tamaño del molde cambia el tiempo."
      }
    ],
    "storage": "Guarda tapado en el refrigerador hasta 3 días.",
    "servingTip": "Corta rebanadas con un cuchillo húmedo y límpialo entre cortes.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Chocochocoflan.jpg/960px-Chocochocoflan.jpg",
    "photoAlt": "Rebanadas de chocoflan con sus capas de chocolate y flan",
    "photographer": "Srodriguez2014",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chocochocoflan.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "jericallas",
    "name": "Jericallas",
    "categoryLabel": "Vainilla, canela y costrita",
    "tags": [
      "frios",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 6,
    "prep": 20,
    "cook": 50,
    "rest": 150,
    "oven": 180,
    "description": "Pequeñas, cremosas y con esa superficie tostada que se busca con la cuchara.",
    "equipment": "6 ramequines aptos para horno de 150 ml, charola profunda, colador y batidor manual.",
    "ingredients": [
      {
        "name": "leche entera",
        "amount": 750.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "azúcar",
        "amount": 100.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "rama de canela",
        "amount": 1.0,
        "unit": "pza",
        "group": "Crema"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "huevos grandes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Crema"
      },
      {
        "name": "yemas",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Crema"
      }
    ],
    "steps": [
      {
        "title": "Perfuma la leche",
        "text": "Calienta leche, azúcar y canela hasta que aparezcan pequeñas burbujas en el borde. Apaga, tapa y deja infusionar 10 minutos. Retira la canela y agrega vainilla. No necesitas reducir la leche.",
        "minutes": 10,
        "cue": "Leche humeante con aroma a canela."
      },
      {
        "title": "Templa los huevos",
        "text": "Precalienta a 180 °C. Bate a mano huevos y yemas solo para unir. Añade poco a poco una taza de leche caliente mientras bates; después incorpora el resto. Pasa por un colador y retira espuma con una cuchara.",
        "minutes": 0,
        "cue": "Mezcla fluida, sin hebras de huevo cocido."
      },
      {
        "title": "Reparte y prepara el agua",
        "text": "Distribuye en los 6 ramequines. Colócalos en la charola ya sobre la rejilla del horno. Añade agua caliente alrededor hasta media altura de los recipientes, evitando salpicar la crema.",
        "minutes": 0,
        "cue": "Porciones parejas, con un poco de borde libre."
      },
      {
        "title": "Hornea hasta cuajar",
        "text": "Hornea 40–50 minutos. Retira los recipientes cuando la crema esté cuajada pero flexible. No esperes que quede dura: seguirá asentándose al enfriar. Si unos se hacen antes, retíralos individualmente con pinzas y guantes.",
        "minutes": 45,
        "cue": "Bordes firmes y centro que aún tiembla unido."
      },
      {
        "title": "Dora la superficie",
        "text": "Si hace falta color, coloca los ramequines fuera del agua bajo el grill 1–3 minutos, vigilando todo el tiempo. Usa solo recipientes que soporten grill. Si no tienes esa función, conserva el dorado natural del horno.",
        "minutes": 3,
        "cue": "Manchas tostadas, sin quemar toda la crema."
      },
      {
        "title": "Enfría",
        "text": "Deja templar 30 minutos y refrigera al menos 2 horas. Tapa cuando estén frías para evitar condensación sobre la costra. Sirve en los mismos recipientes; estas cremas no se desmoldan.",
        "minutes": 150,
        "cue": "Interior frío y textura de crema firme."
      }
    ],
    "tips": "La costra se forma al dorar la propia crema; no lleva la capa de azúcar de una crème brûlée.",
    "beforeYouStart": [
      "Usa recipientes del mismo tamaño para una cocción pareja.",
      "No batas hasta espumar los huevos.",
      "Confirma que tus ramequines soporten horno y, si lo usarás, grill."
    ],
    "doneWhen": [
      "El centro se mueve ligeramente sin parecer leche líquida.",
      "La superficie muestra zonas doradas y no está carbonizada."
    ],
    "troubleshooting": [
      {
        "problem": "La crema quedó cortada.",
        "solution": "El calor fue excesivo. La próxima vez retira antes y mantén el baño María sin hervor fuerte."
      },
      {
        "problem": "No tomó color.",
        "solution": "Usa unos minutos de grill con vigilancia constante, solo si los recipientes son adecuados."
      }
    ],
    "storage": "Refrigera tapadas hasta 3 días. No congeles.",
    "servingTip": "Sírvelas frías y rompe primero la parte tostada con la cuchara.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Jericalla_en_taquer%C3%ADa_El_Tomate.jpg/960px-Jericalla_en_taquer%C3%ADa_El_Tomate.jpg",
    "photoAlt": "Jericalla de superficie tostada acompañada de fruta",
    "photographer": "ProtoplasmaKid",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Jericalla_en_taquer%C3%ADa_El_Tomate.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "bunuelos-mexicanos",
    "name": "Buñuelos mexicanos",
    "categoryLabel": "Crujientes con canela",
    "tags": [
      "de-casa",
      "sin-horno",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 10,
    "prep": 40,
    "cook": 25,
    "rest": 30,
    "oven": 0,
    "description": "Discos delgaditos que crujen al partirse, con azúcar y canela en los dedos.",
    "equipment": "Rodillo, sartén profunda de 24 cm, termómetro de cocina, pinzas y rejilla.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 250.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "polvo para hornear",
        "amount": 3.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevo grande",
        "amount": 1.0,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "mantequilla derretida y tibia",
        "amount": 30.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "agua tibia, aproximadamente",
        "amount": 90.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "harina extra",
        "amount": 20.0,
        "unit": "g",
        "group": "Estirado"
      },
      {
        "name": "aceite vegetal para freír",
        "amount": 750.0,
        "unit": "ml",
        "group": "Fritura"
      },
      {
        "name": "azúcar",
        "amount": 80.0,
        "unit": "g",
        "group": "Acabado"
      },
      {
        "name": "canela molida",
        "amount": 4.0,
        "unit": "g",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Une la masa",
        "text": "Mezcla harina, polvo de hornear y sal. Añade huevo y mantequilla; incorpora el agua poco a poco, reservando la última cucharada hasta ver si hace falta. Amasa 8 minutos hasta alisar. No debe estar pegajosa ni seca.",
        "minutes": 0,
        "cue": "Masa suave que se reúne sin deshacerse."
      },
      {
        "title": "Deja reposar",
        "text": "Divide en 10 bolitas, úntalas apenas con una gota del aceite y tapa con un paño. Reposa 30 minutos. Mezcla aparte azúcar y canela para tenerlas listas al salir de la fritura.",
        "minutes": 30,
        "cue": "La masa se estira sin encogerse enseguida."
      },
      {
        "title": "Estira muy fino",
        "text": "Enharina ligeramente la mesa y estira una bola del centro hacia afuera. Gira entre pasadas y retira el exceso de harina. Si se encoge, déjala reposar 5 minutos y trabaja otra. Mantén los discos separados sobre paños limpios.",
        "minutes": 0,
        "cue": "Discos de unos 18–20 cm, casi translúcidos."
      },
      {
        "title": "Calienta el aceite",
        "text": "Vierte suficiente aceite para alcanzar unos 3 cm, sin superar la mitad de la sartén. Calienta a 175 °C. Ten pinzas y rejilla a mano. No dejes agua cerca del aceite ni apiles los discos crudos.",
        "minutes": 0,
        "cue": "Aceite estable alrededor de 175 °C."
      },
      {
        "title": "Fríe uno por uno",
        "text": "Desliza un disco con cuidado. Fríe 30–60 segundos por lado, sujetándolo ligeramente con pinzas si se infla demasiado. Ajusta el fuego entre piezas para mantener 170–180 °C. Escurre sobre la rejilla; repite con los demás.",
        "minutes": 0,
        "cue": "Dorado claro con burbujas crujientes."
      },
      {
        "title": "Espolvorea y sirve",
        "text": "Espolvorea azúcar con canela cuando cada buñuelo siga caliente. Deja enfriar sin tapar para conservar el crujido. El aceite indicado es para la sartén: no se incorpora completo a la masa.",
        "minutes": 0,
        "cue": "Azúcar adherida y buñuelo firme al enfriar."
      }
    ],
    "tips": "Estirar parejo y delgado importa más que lograr un círculo perfecto.",
    "beforeYouStart": [
      "Deja espacio alrededor de la sartén y usa utensilios completamente secos.",
      "Prepara una rejilla para que el vapor salga por debajo.",
      "No llenes demasiado la sartén de aceite."
    ],
    "doneWhen": [
      "Los dos lados están dorados claros, sin zonas húmedas de masa.",
      "Al enfriar, el disco se rompe con un crujido."
    ],
    "troubleshooting": [
      {
        "problem": "Se encogen al estirar.",
        "solution": "El gluten necesita descanso. Tapa y espera 5–10 minutos antes de insistir."
      },
      {
        "problem": "Quedan grasosos y blandos.",
        "solution": "El aceite estaba frío o la masa gruesa. Verifica 175 °C y estira más fino la siguiente pieza."
      }
    ],
    "storage": "Ya fríos, guarda en recipiente hermético a temperatura ambiente hasta 2 días. Evita el refrigerador.",
    "servingTip": "Ponlos al centro de la mesa y rómpelos para compartir; un café les queda muy bien.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Bu%C3%B1uelos_con_helado.jpg/960px-Bu%C3%B1uelos_con_helado.jpg",
    "photoAlt": "Buñuelo crujiente servido con helado",
    "photographer": "Wotancito",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Bu%C3%B1uelos_con_helado.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "churros-con-chocolate",
    "name": "Churros con chocolate",
    "categoryLabel": "De la sartén a la taza",
    "tags": [
      "chocolate",
      "sin-horno",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 6,
    "prep": 30,
    "cook": 25,
    "rest": 15,
    "oven": 0,
    "description": "Churros recién hechos, azúcar con canela y chocolate espeso para acompañar.",
    "equipment": "Cazo, manga resistente con boquilla de estrella abierta de 12 mm, sartén profunda y termómetro.",
    "ingredients": [
      {
        "name": "agua",
        "amount": 250.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "mantequilla",
        "amount": 20.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 10.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 150.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "aceite vegetal",
        "amount": 750.0,
        "unit": "ml",
        "group": "Fritura"
      },
      {
        "name": "azúcar",
        "amount": 60.0,
        "unit": "g",
        "group": "Acabado"
      },
      {
        "name": "canela molida",
        "amount": 3.0,
        "unit": "g",
        "group": "Acabado"
      },
      {
        "name": "leche entera",
        "amount": 250.0,
        "unit": "ml",
        "group": "Chocolate"
      },
      {
        "name": "chocolate semiamargo picado",
        "amount": 120.0,
        "unit": "g",
        "group": "Chocolate"
      },
      {
        "name": "fécula de maíz",
        "amount": 8.0,
        "unit": "g",
        "group": "Chocolate"
      }
    ],
    "steps": [
      {
        "title": "Cocina la masa",
        "text": "Lleva a hervor agua, mantequilla, 10 g de azúcar y sal. Retira del fuego, añade toda la harina y remueve con firmeza. Regresa a fuego bajo 1–2 minutos, moviendo hasta que no haya harina seca y se forme una bola.",
        "minutes": 0,
        "cue": "Bola compacta que se separa del cazo."
      },
      {
        "title": "Prepara la manga",
        "text": "Deja templar 15 minutos. Amasa brevemente con una espátula y llena una manga reforzada, presionando bien para expulsar aire. Esta versión no lleva huevo. Usa boquilla de estrella: las estrías ayudan a una fritura uniforme.",
        "minutes": 15,
        "cue": "Masa tibia y uniforme, sin huecos de aire."
      },
      {
        "title": "Forma los churros",
        "text": "Forma las tiras sobre papel para hornear y córtalas con tijeras. Despégalas con cuidado antes de freír, sin introducir papel al aceite. Si la masa no sale, revisa que la boquilla no sea demasiado estrecha; no revientes una manga débil.",
        "minutes": 0,
        "cue": "Tiras estriadas de 10–12 cm."
      },
      {
        "title": "Fríe en tandas",
        "text": "Calienta 4 cm de aceite a 175–180 °C, sin llenar más de la mitad de la sartén. Fríe pocas piezas 4–5 minutos, girándolas. Mantén distancia y usa pinzas largas; no dejes que se amontonen ni que el aceite humee.",
        "minutes": 0,
        "cue": "Dorado parejo y centro cocido."
      },
      {
        "title": "Pasa por azúcar",
        "text": "Escurre en una rejilla unos segundos y después rueda en los 60 g de azúcar mezclados con canela. Abre el primer churro: debe verse cocido, sin una franja de masa cruda; ajusta grosor o tiempo si hace falta.",
        "minutes": 0,
        "cue": "Exterior seco y ligeramente azucarado."
      },
      {
        "title": "Haz el chocolate",
        "text": "Disuelve la fécula en un poco de la leche fría. Calienta el resto con el chocolate picado, moviendo. Añade la fécula disuelta y cocina a hervor suave 1–2 minutos hasta espesar. Sirve caliente junto a los churros recién hechos.",
        "minutes": 5,
        "cue": "Chocolate liso que cubre la cuchara."
      }
    ],
    "tips": "No sustituyas la boquilla estriada por una redonda: usa una manga fuerte y evita bolsas de aire en la masa.",
    "beforeYouStart": [
      "Prepara el acabado antes de encender la fritura.",
      "Usa una boquilla de 12 mm para no hacer churros demasiado gruesos.",
      "El aceite es para freír, no para incorporarlo a la receta."
    ],
    "doneWhen": [
      "El interior del primer churro no tiene masa húmeda cruda.",
      "La superficie está dorada y cruje al morder."
    ],
    "troubleshooting": [
      {
        "problem": "Se doran y siguen crudos dentro.",
        "solution": "Baja un poco el fuego y revisa el grosor; piezas muy gruesas necesitan más tiempo."
      },
      {
        "problem": "La manga se rompe.",
        "solution": "Detente y usa una manga reforzada o churrera apta; no fuerces una boquilla estrecha."
      }
    ],
    "storage": "Los churros se disfrutan el mismo día. Refrigera el chocolate sobrante hasta 2 días y recalienta removiendo.",
    "servingTip": "Sirve el chocolate en tazas pequeñas y los churros sin tapar para que no suden.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Chocolate_con_churros_20180604_094957.jpg/960px-Chocolate_con_churros_20180604_094957.jpg",
    "photoAlt": "Churros dorados acompañados de chocolate",
    "photographer": "Jorge Castro Ruso",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chocolate_con_churros_20180604_094957.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
  },
  {
    "id": "capirotada",
    "name": "Capirotada",
    "categoryLabel": "Pan, piloncillo y canela",
    "tags": [
      "de-casa",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 8,
    "prep": 25,
    "cook": 35,
    "rest": 20,
    "oven": 180,
    "description": "Pan doradito que absorbe miel de piloncillo, con pasas, cacahuates y queso.",
    "equipment": "Refractario de 20 × 25 cm, charola, cazo y colador.",
    "ingredients": [
      {
        "name": "bolillo del día anterior en rebanadas de 1.5 cm",
        "amount": 350.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida",
        "amount": 45.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "piloncillo troceado",
        "amount": 200.0,
        "unit": "g",
        "group": "Miel"
      },
      {
        "name": "agua",
        "amount": 600.0,
        "unit": "ml",
        "group": "Miel"
      },
      {
        "name": "rama de canela",
        "amount": 1.0,
        "unit": "pza",
        "group": "Miel"
      },
      {
        "name": "clavos de olor",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Miel"
      },
      {
        "name": "pasas",
        "amount": 70.0,
        "unit": "g",
        "group": "Capas"
      },
      {
        "name": "cacahuates tostados sin sal",
        "amount": 60.0,
        "unit": "g",
        "group": "Capas"
      },
      {
        "name": "queso fresco desmoronado",
        "amount": 150.0,
        "unit": "g",
        "group": "Capas"
      }
    ],
    "steps": [
      {
        "title": "Tuesta el pan",
        "text": "Precalienta a 180 °C. Reserva 5 g de mantequilla para el refractario y pincela el pan con el resto. Tuesta en una charola 10–12 minutos, volteando a la mitad. Así conserva algo de estructura al recibir la miel.",
        "minutes": 12,
        "cue": "Rebanadas secas y doradas en los bordes."
      },
      {
        "title": "Prepara la miel",
        "text": "Calienta agua, piloncillo, canela y clavos. Al hervir, baja el fuego y cocina unos 10 minutos. Cuela para retirar especias. Debe quedar una miel ligera que pueda penetrar el pan, no un caramelo espeso.",
        "minutes": 10,
        "cue": "Piloncillo completamente disuelto."
      },
      {
        "title": "Arma la primera capa",
        "text": "Engrasa el refractario con la mantequilla reservada. Coloca la mitad del pan y reparte la mitad de pasas, cacahuates y queso. Vierte lentamente la mitad de la miel caliente sobre toda la superficie.",
        "minutes": 0,
        "cue": "Pan cubriendo el fondo sin comprimir."
      },
      {
        "title": "Completa y humedece",
        "text": "Añade el resto del pan y los complementos, seguido de la miel restante. Deja absorber 10 minutos y presiona apenas con una cuchara. No tritures las rebanadas: deben seguir distinguiéndose.",
        "minutes": 10,
        "cue": "Pan húmedo por dentro, sin charcos excesivos."
      },
      {
        "title": "Hornea",
        "text": "Cubre con aluminio y hornea 15 minutos. Destapa y hornea 8–10 minutos más. Si la superficie se seca muy rápido, vuelve a cubrir. La capirotada debe quedar húmeda, no convertirse en pan crujiente por dentro.",
        "minutes": 23,
        "cue": "Centro caliente, queso suave y bordes tostados."
      },
      {
        "title": "Deja reposar",
        "text": "Espera 10 minutos fuera del horno. Sirve con cuchara grande tomando todas las capas. Prueba antes de añadir más dulzor: el piloncillo y las pasas ya aportan bastante.",
        "minutes": 10,
        "cue": "Las porciones se sirven sin deshacerse del todo."
      }
    ],
    "tips": "El pan de ayer absorbe mejor; si solo tienes fresco, sécalo unos minutos más en el horno.",
    "beforeYouStart": [
      "Usa queso fresco que puedas desmoronar.",
      "Trocea el piloncillo para disolverlo sin reducir demasiado el agua.",
      "Reparte los complementos antes de bañar para no dejarlos todos arriba."
    ],
    "doneWhen": [
      "No hay zonas de pan secas en el centro.",
      "La miel se ha absorbido y las orillas están ligeramente tostadas."
    ],
    "troubleshooting": [
      {
        "problem": "Quedó seca.",
        "solution": "El pan absorbió más líquido de lo esperado. Humedece la porción con una pequeña cantidad de agua caliente y recalienta cubierta."
      },
      {
        "problem": "Quedó apelmazada.",
        "solution": "Evita presionar fuerte y usa rebanadas tostadas, no pan blando recién cortado."
      }
    ],
    "storage": "Refrigera tapada hasta 3 días. Recalienta porciones cubiertas para conservar humedad.",
    "servingTip": "Tibia es especialmente rica; sirve un poco de queso de cada capa.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Capirotada%2C_Postre.jpg/960px-Capirotada%2C_Postre.jpg",
    "photoAlt": "Capirotada de pan, queso y frutos secos en un recipiente de barro",
    "photographer": "Alejandro Lugo",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Capirotada,_Postre.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "cocadas",
    "name": "Cocadas",
    "categoryLabel": "Coco tostado y bordes dorados",
    "tags": [
      "de-casa",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 16,
    "prep": 15,
    "cook": 20,
    "rest": 20,
    "oven": 170,
    "description": "Montoncitos de coco con un centro tierno y puntas bien doraditas.",
    "equipment": "Charola, papel para hornear, báscula y cuchara para porcionar.",
    "ingredients": [
      {
        "name": "coco rallado seco sin azúcar",
        "amount": 250.0,
        "unit": "g",
        "group": "Mezcla"
      },
      {
        "name": "leche condensada",
        "amount": 200.0,
        "unit": "g",
        "group": "Mezcla"
      },
      {
        "name": "claras de huevo grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Mezcla"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Mezcla"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Mezcla"
      }
    ],
    "steps": [
      {
        "title": "Prepara la charola",
        "text": "Coloca la rejilla al centro y precalienta el horno. Forra una charola con papel para hornear; no papel encerado. Si tu coco viene muy grueso, pícalo un poco para que las porciones no se desarmen.",
        "minutes": 0,
        "cue": "Horno a 170 °C y charola forrada."
      },
      {
        "title": "Hidrata el coco",
        "text": "Mezcla coco con leche condensada y vainilla. Deja reposar 5 minutos para que absorba humedad. Usa coco sin azúcar: el endulzado cambia mucho el equilibrio de esta mezcla.",
        "minutes": 5,
        "cue": "Coco uniformemente húmedo, sin líquido separado."
      },
      {
        "title": "Incorpora las claras",
        "text": "Bate las claras con sal a mano hasta que hagan espuma, sin montarlas firmes. Incorpora al coco con una espátula, raspando el fondo para repartirlas. No debe quedar una capa líquida debajo.",
        "minutes": 0,
        "cue": "Mezcla que se mantiene unida al apretarla."
      },
      {
        "title": "Porciona",
        "text": "Divide en 16 porciones y forma pequeños montículos con dos cucharas o manos apenas húmedas. Compacta suavemente la base y deja 3 cm entre piezas. Recoge las hebras sueltas para que no se quemen.",
        "minutes": 0,
        "cue": "16 montoncitos compactos de tamaño parecido."
      },
      {
        "title": "Hornea",
        "text": "Hornea 18–22 minutos. Gira la charola si tu horno dora más de un lado. Si las puntas se oscurecen antes de fijarse la base, baja la charola un nivel y cubre flojamente con aluminio.",
        "minutes": 20,
        "cue": "Puntas doradas y base firme al levantar con espátula."
      },
      {
        "title": "Enfría antes de mover",
        "text": "Deja 10 minutos en la charola y después pasa a una rejilla con una espátula. Espera otros 10 minutos antes de guardar. Recién salidas son delicadas: se afirman mientras pierden calor.",
        "minutes": 20,
        "cue": "Las piezas se desprenden enteras del papel."
      }
    ],
    "tips": "Humedece apenas las manos para formar; demasiada agua dificulta el dorado.",
    "beforeYouStart": [
      "Comprueba que el coco sea seco y sin azúcar.",
      "Prepara porciones parejas para que se horneen al mismo tiempo.",
      "No uses una charola recién salida del horno para una segunda tanda."
    ],
    "doneWhen": [
      "La base mantiene la forma y las puntas tienen color dorado.",
      "El centro permanece tierno, sin clara líquida."
    ],
    "troubleshooting": [
      {
        "problem": "Se abren al hornear.",
        "solution": "Compacta mejor las porciones y verifica que las claras estén bien distribuidas."
      },
      {
        "problem": "Se pegan al retirarlas.",
        "solution": "Espera los 10 minutos iniciales y levanta con una espátula plana; el papel para hornear facilita el desprendido."
      }
    ],
    "storage": "Conserva ya frías en recipiente hermético hasta 3 días a temperatura ambiente fresca.",
    "servingTip": "Van bien con café; si te apetece, sirve un poco de chocolate derretido aparte.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Coconut_macaroons.jpg/960px-Coconut_macaroons.jpg",
    "photoAlt": "Bocados de coco horneados con puntas doradas",
    "photographer": "Stacy",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Coconut_macaroons.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "besos-de-nuez",
    "name": "Besos de nuez",
    "categoryLabel": "Pequeños y nevados",
    "tags": [
      "galletas",
      "de-casa",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 24,
    "prep": 25,
    "cook": 18,
    "rest": 50,
    "oven": 170,
    "description": "Galletitas de nuez que se deshacen al morder y dejan azúcar en las manos.",
    "equipment": "Charola, papel para hornear, batidora o espátula y rejilla.",
    "ingredients": [
      {
        "name": "mantequilla suave",
        "amount": 170.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar glass",
        "amount": 50.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 220.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "nuez finamente picada",
        "amount": 100.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar glass",
        "amount": 100.0,
        "unit": "g",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Prepara la nuez",
        "text": "Pica la nuez a cuchillo o con pulsos cortos en un procesador. Reserva. Forra una charola y pesa por separado el azúcar de la masa y el del acabado para no confundirlos.",
        "minutes": 0,
        "cue": "Trocitos pequeños, sin convertirlos en pasta."
      },
      {
        "title": "Haz una crema",
        "text": "Bate mantequilla con los 50 g de azúcar glass durante 2 minutos. Incorpora vainilla. No hace falta que doble su volumen: solo busca una crema lisa y sin grumos grandes.",
        "minutes": 0,
        "cue": "Mantequilla suave y azúcar integrados."
      },
      {
        "title": "Une la masa",
        "text": "Añade harina, sal y nuez. Mezcla con espátula hasta que no queden secos; puede verse arenosa al principio. Junta con las manos sin amasar de más. Tapa y refrigera 30 minutos.",
        "minutes": 30,
        "cue": "Masa compacta que se reúne al apretarla."
      },
      {
        "title": "Forma las bolitas",
        "text": "Precalienta a 170 °C. Divide y rueda porciones del mismo tamaño. Coloca separadas 3 cm sobre la charola fría. Si la masa se desmorona, aprieta la porción con la palma antes de redondearla.",
        "minutes": 0,
        "cue": "24 piezas de unos 22 g, sin grietas profundas."
      },
      {
        "title": "Hornea",
        "text": "Hornea 16–20 minutos. No esperes que se doren por encima: se resecarían. Deja reposar 8 minutos sobre la charola antes de tocarlas; todavía calientes son muy frágiles.",
        "minutes": 18,
        "cue": "Base apenas dorada y parte superior pálida."
      },
      {
        "title": "Ponles su abrigo",
        "text": "Pasa con cuidado las galletas tibias por azúcar glass. Deja enfriar por completo en rejilla y vuelve a espolvorear o rodar en azúcar para un acabado más blanco. Guarda solo cuando estén frías.",
        "minutes": 20,
        "cue": "Capa blanca de azúcar sin humedad atrapada."
      }
    ],
    "tips": "La nuez debe quedar fina pero con textura; si la mueles hasta soltar aceite, cambia la consistencia.",
    "beforeYouStart": [
      "La mantequilla debe ceder al presionarla, sin verse derretida.",
      "Deja libre una rejilla para enfriar.",
      "Reserva dos recipientes distintos para las cantidades de azúcar."
    ],
    "doneWhen": [
      "Las bases están doradas claras y la superficie permanece pálida.",
      "Una pieza fría se rompe con textura corta, sin centro pastoso."
    ],
    "troubleshooting": [
      {
        "problem": "Se desmoronan al cubrirlas.",
        "solution": "Espera unos minutos más; recién salidas no soportan el movimiento."
      },
      {
        "problem": "Se expandieron demasiado.",
        "solution": "La mantequilla estaba muy caliente. Enfría las bolitas antes de hornear la siguiente tanda."
      }
    ],
    "storage": "Guarda herméticas en un lugar fresco hasta 5 días, separando capas con papel.",
    "servingTip": "Sirve en una bandeja pequeña y ten cerca una servilleta: el azúcar es parte del encanto.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Russian_teacakes_%288307560889%29.jpg/960px-Russian_teacakes_%288307560889%29.jpg",
    "photoAlt": "Galletitas de nuez cubiertas con azúcar glass sobre una rejilla",
    "photographer": "Stacy Spensley",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Russian_teacakes_(8307560889).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "alfajores-de-maicena",
    "name": "Alfajores de maicena",
    "categoryLabel": "Dulce de leche entre dos nubes",
    "tags": [
      "galletas",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 18,
    "prep": 35,
    "cook": 12,
    "rest": 60,
    "oven": 170,
    "description": "Tapitas suaves, una buena capa de dulce de leche y coco en el borde.",
    "equipment": "Batidora, rodillo, cortador de 5 cm, charolas y papel para hornear.",
    "ingredients": [
      {
        "name": "mantequilla suave",
        "amount": 150.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "azúcar glass",
        "amount": 90.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "yemas grandes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Tapitas"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Tapitas"
      },
      {
        "name": "fécula de maíz",
        "amount": 200.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "harina de trigo",
        "amount": 100.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "polvo para hornear",
        "amount": 5.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Tapitas"
      },
      {
        "name": "dulce de leche repostero",
        "amount": 300.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "coco rallado seco",
        "amount": 50.0,
        "unit": "g",
        "group": "Relleno"
      }
    ],
    "steps": [
      {
        "title": "Haz la base",
        "text": "Bate mantequilla con azúcar glass 2–3 minutos. Incorpora las yemas una a una y después la vainilla. Raspa los lados del recipiente para que no queden zonas sin mezclar.",
        "minutes": 0,
        "cue": "Crema lisa, sin mantequilla líquida."
      },
      {
        "title": "Une y enfría",
        "text": "Tamiza fécula, harina, polvo de hornear y sal. Incorpora a la crema con una espátula. Junta sin amasar, aplana en un disco, envuelve y refrigera 40 minutos. La masa fría se corta mejor.",
        "minutes": 40,
        "cue": "Masa suave que se junta sin pegarse demasiado."
      },
      {
        "title": "Estira y corta",
        "text": "Precalienta a 170 °C. Estira entre dos papeles para hornear hasta 5 mm. Corta círculos de 5 cm y coloca en charolas dejando 2 cm. Junta recortes con suavidad y vuelve a enfriar si se ablandan.",
        "minutes": 0,
        "cue": "Tapitas de 5 mm y diámetro uniforme."
      },
      {
        "title": "Hornea pálidas",
        "text": "Hornea por tandas 10–12 minutos. Las tapitas deben permanecer claras arriba. Espera 5 minutos en la charola antes de pasar a una rejilla. El rendimiento aproximado es de 36 tapitas para 18 alfajores.",
        "minutes": 12,
        "cue": "Bases firmes con apenas un toque de color."
      },
      {
        "title": "Rellena con cuidado",
        "text": "Pon dulce de leche en la cara plana de una tapita y cubre con otra, presionando apenas. Usa dulce de leche espeso de repostería para que no escurra al sostener el alfajor.",
        "minutes": 0,
        "cue": "Tapitas frías y relleno que sostiene la segunda capa."
      },
      {
        "title": "Rueda por coco",
        "text": "Pasa el borde por coco rallado y acomoda sin apilar de inmediato. Deja reposar 20 minutos en un lugar fresco. Para una textura aún más tierna, guarda unas horas antes de servir.",
        "minutes": 20,
        "cue": "Borde cubierto y alfajores asentados."
      }
    ],
    "tips": "Presiona las tapitas lo mínimo al rellenar: son delicadas por la proporción de fécula.",
    "beforeYouStart": [
      "Usa fécula de maíz blanca sin saborizantes.",
      "Busca dulce de leche repostero, más firme que una salsa.",
      "La medida de 5 mm ayuda a que no queden demasiado frágiles."
    ],
    "doneWhen": [
      "La base se despega del papel y la parte superior sigue clara.",
      "Una tapita fría se sostiene entera antes de rellenarla."
    ],
    "troubleshooting": [
      {
        "problem": "La masa se agrieta al estirar.",
        "solution": "Déjala templar unos minutos y estira entre papeles, sin añadir demasiada harina."
      },
      {
        "problem": "El relleno se sale.",
        "solution": "Usa menos cantidad o un dulce de leche más espeso; no aplastes las tapitas."
      }
    ],
    "storage": "Guarda herméticos en lugar fresco hasta 3 días, o refrigera hasta 5 días. Déjalos templar unos minutos antes de servir.",
    "servingTip": "Sírvelos al día siguiente si prefieres las tapitas más suaves.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Alfajores-de-maicena-biscuits-recipe.jpg/960px-Alfajores-de-maicena-biscuits-recipe.jpg",
    "photoAlt": "Alfajores con dulce de leche y coco en los bordes",
    "photographer": "Sara McCleary",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Alfajores-de-maicena-biscuits-recipe.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "galletas-de-avena-y-pasas",
    "name": "Galletas de avena y pasas",
    "categoryLabel": "Canela y centro suave",
    "tags": [
      "galletas",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 20,
    "prep": 25,
    "cook": 12,
    "rest": 40,
    "oven": 180,
    "description": "Bordes dorados, avena con textura y pasas que se encuentran en cada mordida.",
    "equipment": "Batidora o espátula, dos charolas, papel para hornear y rejilla.",
    "ingredients": [
      {
        "name": "mantequilla suave",
        "amount": 115.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar mascabado",
        "amount": 100.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar blanca",
        "amount": 40.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevo grande",
        "amount": 1.0,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 140.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "bicarbonato",
        "amount": 3.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "canela molida",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "avena en hojuelas tradicionales",
        "amount": 150.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "pasas",
        "amount": 100.0,
        "unit": "g",
        "group": "Masa"
      }
    ],
    "steps": [
      {
        "title": "Prepara los secos",
        "text": "Mezcla harina, bicarbonato, canela y sal. Revisa que la avena sea en hojuelas, no harina de avena ni mezcla instantánea saborizada. Forra dos charolas para hornear por tandas.",
        "minutes": 0,
        "cue": "Harina sin grumos y avena medida aparte."
      },
      {
        "title": "Bate la mantequilla",
        "text": "Bate mantequilla y ambos azúcares 2 minutos. Añade huevo y vainilla; mezcla hasta unir, raspando el recipiente. La mantequilla debe estar suave, no caliente ni derretida.",
        "minutes": 0,
        "cue": "Crema uniforme con el azúcar bien repartido."
      },
      {
        "title": "Incorpora avena y pasas",
        "text": "Agrega los secos y mezcla solo hasta desaparecer la harina. Incorpora avena y pasas con espátula. Tapa y refrigera 30 minutos para hidratar las hojuelas y controlar la expansión.",
        "minutes": 30,
        "cue": "Masa espesa con pasas distribuidas."
      },
      {
        "title": "Porciona",
        "text": "Precalienta a 180 °C. Forma porciones de unos 35 g y acomoda con 5 cm de separación. Aplana apenas la parte superior; no las conviertas en discos finos. Mantén la masa sobrante fría.",
        "minutes": 0,
        "cue": "20 montoncitos de tamaño parecido."
      },
      {
        "title": "Hornea en tandas",
        "text": "Hornea 10–13 minutos. Retira cuando los bordes se vean firmes aunque el centro parezca un poco blando. No uses el color del centro como única señal: seguirán cocinándose unos instantes en la charola.",
        "minutes": 12,
        "cue": "Borde dorado y centro todavía algo suave."
      },
      {
        "title": "Deja que terminen de fijarse",
        "text": "Espera 5 minutos en la charola y pasa a una rejilla otros 5–10 minutos. Usa charolas frías para cada tanda. Guarda solo cuando se haya ido todo el calor para que no se humedezcan.",
        "minutes": 10,
        "cue": "Galletas que se levantan enteras."
      }
    ],
    "tips": "Para un centro más suave, retíralas con los bordes firmes; hornearlas hasta estar duras las reseca.",
    "beforeYouStart": [
      "Usa avena en hojuelas tradicionales.",
      "Separa bien las porciones: la masa se extiende.",
      "La masa puede quedarse tapada en frío hasta el día siguiente."
    ],
    "doneWhen": [
      "El contorno se ve dorado y seco.",
      "Una galleta fría mantiene un centro tierno, sin masa cruda."
    ],
    "troubleshooting": [
      {
        "problem": "Salieron muy planas.",
        "solution": "Enfría la masa y evita charolas calientes entre tandas."
      },
      {
        "problem": "Quedaron duras.",
        "solution": "Reduce 1–2 minutos la próxima tanda y pesa porciones parejas para no sobrecocer las pequeñas."
      }
    ],
    "storage": "Conserva herméticas hasta 4 días. Congela porciones crudas hasta 1 mes y hornea desde frías, dando algo más de tiempo.",
    "servingTip": "Acompáñalas con leche fría o café y guarda unas para el día siguiente.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Oatmeal_Raisin_cookie.jpg/960px-Oatmeal_Raisin_cookie.jpg",
    "photoAlt": "Galleta de avena con pasas y superficie dorada",
    "photographer": "Gaurav Dhwaj Khadka",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Oatmeal_Raisin_cookie.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "galletas-de-jengibre",
    "name": "Galletas de jengibre",
    "categoryLabel": "Especias y formas bonitas",
    "tags": [
      "galletas",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 24,
    "prep": 35,
    "cook": 12,
    "rest": 85,
    "oven": 175,
    "description": "Canela, jengibre y bordes bien definidos para cortar la forma que se te ocurra.",
    "equipment": "Rodillo, cortadores de unos 7 cm, charolas, papel para hornear y rejilla.",
    "ingredients": [
      {
        "name": "mantequilla suave",
        "amount": 115.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar mascabado",
        "amount": 90.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "melaza de caña, no blackstrap",
        "amount": 100.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevo grande",
        "amount": 1.0,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 330.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "bicarbonato",
        "amount": 3.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "jengibre molido",
        "amount": 6.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "canela molida",
        "amount": 4.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "clavo molido",
        "amount": 1.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar glass",
        "amount": 100.0,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "agua, aproximadamente",
        "amount": 15.0,
        "unit": "ml",
        "group": "Glaseado"
      }
    ],
    "steps": [
      {
        "title": "Perfuma la harina",
        "text": "Mezcla harina, bicarbonato, jengibre, canela, clavo y sal. El jengibre de esta receta es seco y molido; el fresco aporta agua y no se cambia en la misma cantidad.",
        "minutes": 0,
        "cue": "Especias y bicarbonato sin grumos."
      },
      {
        "title": "Haz la crema",
        "text": "Bate mantequilla y azúcar mascabado 2 minutos. Agrega melaza y huevo, mezclando bien. Usa melaza de caña de sabor suave; la blackstrap puede resultar demasiado amarga.",
        "minutes": 0,
        "cue": "Mezcla oscura y uniforme."
      },
      {
        "title": "Une y enfría",
        "text": "Incorpora los secos sin amasar de más. Divide en dos discos, envuelve y refrigera 1 hora. Si sigue muy blanda por el calor de la cocina, dale algo más de frío antes de estirar.",
        "minutes": 60,
        "cue": "Masa firme que se puede estirar."
      },
      {
        "title": "Corta tus formas",
        "text": "Precalienta a 175 °C. Estira entre papeles a 5 mm y corta figuras. Pasa a la charola con una espátula, dejando 3 cm. Enfría las figuras 10 minutos antes de hornear y junta recortes sin sobreamasar.",
        "minutes": 10,
        "cue": "Piezas de 5 mm de grosor sin bordes deformados."
      },
      {
        "title": "Hornea",
        "text": "Hornea 9–12 minutos según el tamaño del cortador. Retira las piezas pequeñas antes si se doran. Espera 5 minutos en la charola y enfría completamente sobre rejilla antes de decorar.",
        "minutes": 12,
        "cue": "Bordes firmes y centro seco por encima."
      },
      {
        "title": "Dibuja con glaseado",
        "text": "Mezcla azúcar glass con el agua cucharadita a cucharadita; quizá no necesites toda. Pon en una manga pequeña y dibuja sobre galletas frías. Deja secar al aire antes de apilar; los dibujos gruesos necesitarán más tiempo.",
        "minutes": 15,
        "cue": "Glaseado espeso que cae en un hilo lento."
      }
    ],
    "tips": "Corta todas las piezas de una tanda con tamaño parecido; las puntas pequeñas se doran antes.",
    "beforeYouStart": [
      "Pesa la melaza directamente en el recipiente para no perderla en la taza.",
      "Reserva sitio en el refrigerador para las figuras cortadas.",
      "El agua del glaseado se añade de a poco, según la consistencia."
    ],
    "doneWhen": [
      "Los bordes sostienen la forma y no se hunden al tocarlos suavemente.",
      "La superficie no tiene brillo de masa húmeda."
    ],
    "troubleshooting": [
      {
        "problem": "Las figuras pierden la forma.",
        "solution": "Enfría los cortes antes de hornear y usa una charola a temperatura ambiente."
      },
      {
        "problem": "El glaseado se escurre.",
        "solution": "Incorpora azúcar glass poco a poco hasta que mantenga una línea al dibujar."
      }
    ],
    "storage": "Guarda en recipiente hermético hasta 5 días una vez seco el glaseado.",
    "servingTip": "Unos puntitos y una sonrisa bastan; también quedan bonitas sin decorar.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Gingerbread_Cookies_on_Table.jpg/960px-Gingerbread_Cookies_on_Table.jpg",
    "photoAlt": "Galletas de jengibre decoradas con diferentes formas",
    "photographer": "GutMaze",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Gingerbread_Cookies_on_Table.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "conchas-de-vainilla",
    "name": "Conchas de vainilla",
    "categoryLabel": "Pan de casa, recién hecho",
    "tags": [
      "de-casa",
      "pasteles",
      "recientes"
    ],
    "difficulty": "Elaborada",
    "servings": 12,
    "prep": 45,
    "cook": 20,
    "rest": 150,
    "oven": 180,
    "description": "Pan suave con cubierta de vainilla que se rompe en pequeñas líneas al hornearse.",
    "equipment": "Báscula, charolas, papel para hornear, batidora con gancho opcional y cuchillo fino.",
    "ingredients": [
      {
        "name": "harina de trigo de fuerza media",
        "amount": 500.0,
        "unit": "g",
        "group": "Pan"
      },
      {
        "name": "levadura seca instantánea",
        "amount": 7.0,
        "unit": "g",
        "group": "Pan"
      },
      {
        "name": "azúcar",
        "amount": 90.0,
        "unit": "g",
        "group": "Pan"
      },
      {
        "name": "sal",
        "amount": 6.0,
        "unit": "g",
        "group": "Pan"
      },
      {
        "name": "leche tibia, no caliente",
        "amount": 180.0,
        "unit": "ml",
        "group": "Pan"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Pan"
      },
      {
        "name": "mantequilla suave",
        "amount": 80.0,
        "unit": "g",
        "group": "Pan"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Pan"
      },
      {
        "name": "mantequilla suave",
        "amount": 100.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "azúcar glass",
        "amount": 100.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "harina de trigo",
        "amount": 120.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Cubierta"
      }
    ],
    "steps": [
      {
        "title": "Forma la masa",
        "text": "Mezcla harina, levadura y azúcar; añade sal, leche tibia, huevos y vainilla. Amasa hasta reunir todo. La leche debe sentirse apenas tibia al tacto, unos 30–35 °C; el calor excesivo perjudica la levadura.",
        "minutes": 0,
        "cue": "Masa reunida, aún algo pegajosa."
      },
      {
        "title": "Integra la mantequilla",
        "text": "Añade los 80 g de mantequilla en trozos, amasando hasta absorber cada uno. Trabaja 12–18 minutos a mano o unos 8–12 con gancho a velocidad baja-media. Evita añadir harina en exceso aunque al principio esté pegajosa.",
        "minutes": 0,
        "cue": "Masa elástica que se estira en una membrana fina."
      },
      {
        "title": "Primer levado",
        "text": "Coloca en un recipiente ligeramente engrasado, tapa y deja en un lugar templado de 60 a 90 minutos. El volumen manda sobre el reloj. Mientras, mezcla los ingredientes de la cubierta hasta obtener una pasta homogénea y guarda a temperatura fresca.",
        "minutes": 90,
        "cue": "La masa aproximadamente duplica su volumen."
      },
      {
        "title": "Forma y cubre",
        "text": "Desgasifica con suavidad y divide en 12 porciones iguales. Bolea y separa al menos 7 cm en charolas. Divide la cubierta en 12, aplana discos entre papeles y acomoda sobre el pan sin comprimirlo.",
        "minutes": 0,
        "cue": "12 bolas lisas, con la unión por debajo."
      },
      {
        "title": "Marca y deja crecer",
        "text": "Haz líneas curvas poco profundas en la cubierta sin cortar el pan. Tapa flojamente y deja levar 45–60 minutos. Precalienta a 180 °C al final del levado. Si la cocina está fría, el proceso puede tardar más.",
        "minutes": 60,
        "cue": "Panes visiblemente esponjados y cubierta marcada."
      },
      {
        "title": "Hornea y enfría",
        "text": "Hornea 18–22 minutos; si usas dos charolas, hazlo por tandas para un dorado uniforme. Deja en rejilla. Espera unos 15 minutos antes de abrir una: la miga termina de asentarse al perder calor.",
        "minutes": 20,
        "cue": "Bases doradas y pan ligero, sin centro pastoso."
      }
    ],
    "tips": "La masa enriquecida leva más despacio. Mira cuánto crece en lugar de aumentar el calor para apresurarla.",
    "beforeYouStart": [
      "Usa levadura seca instantánea; revisa su fecha y consérvala bien cerrada.",
      "La mantequilla del pan y la cubierta se pesan por separado.",
      "No dejes la cubierta al sol o cerca del horno caliente."
    ],
    "doneWhen": [
      "El pan recupera lentamente la forma tras una presión ligera antes de hornear.",
      "La base está dorada y la miga se separa en hebras suaves."
    ],
    "troubleshooting": [
      {
        "problem": "La masa no crece.",
        "solution": "Dale más tiempo en un sitio templado. Si no muestra actividad, revisa la levadura y la temperatura de la leche para la próxima tanda."
      },
      {
        "problem": "La cubierta se desliza.",
        "solution": "Estaba demasiado caliente o el disco era grueso. Enfría un poco la pasta y reparte una capa uniforme."
      }
    ],
    "storage": "Guarda ya frías en bolsa o recipiente cerrado hasta 2 días. Congela hasta 1 mes y recalienta suavemente.",
    "servingTip": "Tibia, con café o chocolate; parte una para ver la miga antes de llevarlas a la mesa.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Concha_%28pan%29.jpg/960px-Concha_%28pan%29.jpg",
    "photoAlt": "Concha de pan dulce con cubierta clara marcada en líneas",
    "photographer": "Koffermejia",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Concha_(pan).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "orejas-de-hojaldre",
    "name": "Orejas de hojaldre",
    "categoryLabel": "Dos pliegues y mucho crujido",
    "tags": [
      "galletas",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 20,
    "prep": 20,
    "cook": 18,
    "rest": 25,
    "oven": 200,
    "description": "Hojaldre caramelizado por los dos lados, con azúcar en cada vuelta.",
    "equipment": "Rodillo, cuchillo afilado, charola y papel para hornear.",
    "ingredients": [
      {
        "name": "hojaldre de mantequilla refrigerado",
        "amount": 400.0,
        "unit": "g",
        "group": "Orejas"
      },
      {
        "name": "azúcar",
        "amount": 100.0,
        "unit": "g",
        "group": "Orejas"
      },
      {
        "name": "canela molida",
        "amount": 2.0,
        "unit": "g",
        "group": "Orejas"
      }
    ],
    "steps": [
      {
        "title": "Prepara el hojaldre",
        "text": "Si está congelado, descongélalo dentro del refrigerador siguiendo el envase. Mezcla azúcar y canela. Esparce un tercio en la mesa y coloca el hojaldre encima. Evita trabajar junto al horno caliente.",
        "minutes": 0,
        "cue": "Masa fría pero flexible, sin grietas."
      },
      {
        "title": "Extiende con azúcar",
        "text": "Reparte otro tercio de azúcar encima y pasa el rodillo suavemente para adherir. Estira sin aplastar las capas. Mantén bordes razonablemente rectos; si la mantequilla comienza a verse blanda, enfría antes de seguir.",
        "minutes": 0,
        "cue": "Rectángulo de unos 30 × 35 cm y 3 mm."
      },
      {
        "title": "Pliega hacia el centro",
        "text": "Dobla ambos lados largos hacia el centro y vuelve a doblarlos hacia el centro una vez más. Cierra una mitad sobre la otra como un libro. Envuelve y enfría 20 minutos. Reserva el azúcar restante.",
        "minutes": 20,
        "cue": "Dos rollos simétricos que se encuentran al medio."
      },
      {
        "title": "Corta las orejas",
        "text": "Precalienta a 200 °C. Corta con movimientos firmes y coloca las piezas acostadas sobre papel para hornear, dejando 5 cm entre ellas. Espolvorea el azúcar reservado. Abre apenas las dos puntas para sugerir la forma.",
        "minutes": 0,
        "cue": "Rebanadas de 1 cm, sin comprimir las capas."
      },
      {
        "title": "Hornea por ambos lados",
        "text": "Hornea 10–12 minutos hasta dorar la base. Voltea con una espátula y hornea otros 5–7 minutos. Vigila al final: el azúcar pasa de caramelo a quemado rápidamente. Retira las más pequeñas si se adelantan.",
        "minutes": 18,
        "cue": "Color ámbar y capas crujientes."
      },
      {
        "title": "Deja enfriar",
        "text": "Espera 2 minutos en la charola y pásalas con espátula a una rejilla antes de que el caramelo se pegue. El azúcar está muy caliente: no las tomes con los dedos. Deja enfriar antes de probar.",
        "minutes": 5,
        "cue": "Orejas firmes que se despegan del papel."
      }
    ],
    "tips": "El hojaldre debe llegar frío al horno; ese cambio de temperatura ayuda a separar sus capas.",
    "beforeYouStart": [
      "Compra hojaldre en lámina sin relleno.",
      "Usa papel apto para horno a 200 °C.",
      "Deja bastante espacio: las orejas se abren al cocinarse."
    ],
    "doneWhen": [
      "Los dos lados presentan un dorado ámbar, sin masa gris translúcida.",
      "Las capas se sienten secas y crujen una vez frías."
    ],
    "troubleshooting": [
      {
        "problem": "No se abrieron las capas.",
        "solution": "La masa se calentó al manipularla. Enfría el rollo antes de cortar y usa el horno precalentado."
      },
      {
        "problem": "Se quemó el azúcar.",
        "solution": "Baja una posición la charola y revisa unos minutos antes; cada horno dora distinto."
      }
    ],
    "storage": "Guarda frías y herméticas hasta 2 días. No refrigeres: la humedad ablanda el hojaldre.",
    "servingTip": "Sirve cuando se hayan enfriado; el caramelo crujiente necesita esos minutos.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Palmeras_de_hojaldre_1.jpg/960px-Palmeras_de_hojaldre_1.jpg",
    "photoAlt": "Orejas de hojaldre doradas con capas de azúcar",
    "photographer": "jytyl",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Palmeras_de_hojaldre_1.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "madeleines",
    "name": "Madeleines",
    "categoryLabel": "Conchitas de limón",
    "tags": [
      "pasteles",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 18,
    "prep": 25,
    "cook": 11,
    "rest": 135,
    "oven": 200,
    "description": "Pequeños bizcochos de mantequilla con aroma a limón y una pancita en el centro.",
    "equipment": "Molde metálico para madeleines, batidor, brocha y rejilla.",
    "ingredients": [
      {
        "name": "mantequilla",
        "amount": 100.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 90.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "miel",
        "amount": 15.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 120.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "polvo para hornear",
        "amount": 4.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "limón, solo la ralladura",
        "amount": 1.0,
        "unit": "pza",
        "group": "Masa"
      },
      {
        "name": "mantequilla extra",
        "amount": 10.0,
        "unit": "g",
        "group": "Molde"
      },
      {
        "name": "harina extra",
        "amount": 10.0,
        "unit": "g",
        "group": "Molde"
      }
    ],
    "steps": [
      {
        "title": "Derrite y perfuma",
        "text": "Derrite los 100 g de mantequilla y deja templar. Frota la ralladura de limón con el azúcar para soltar su aroma. Evita la parte blanca de la piel, que puede dar amargor.",
        "minutes": 0,
        "cue": "Mantequilla líquida y tibia, no caliente."
      },
      {
        "title": "Mezcla los huevos",
        "text": "Bate huevos, azúcar aromatizada y miel 2–3 minutos a mano o con batidora. Añade vainilla. No necesitas montar un merengue ni alcanzar una masa muy voluminosa.",
        "minutes": 0,
        "cue": "Mezcla algo espumosa, de color más claro."
      },
      {
        "title": "Incorpora y enfría",
        "text": "Tamiza harina, polvo de hornear y sal. Incorpora con espátula y después añade la mantequilla tibia en hilo. Tapa y refrigera al menos 2 horas; puede reposar hasta la noche siguiente.",
        "minutes": 120,
        "cue": "Masa espesa y homogénea, bien fría."
      },
      {
        "title": "Prepara el molde",
        "text": "Precalienta a 200 °C. Pincela cada cavidad con mantequilla extra y espolvorea harina; sacude el sobrante. Enfría el molde 10 minutos. Llena cada hueco a tres cuartas partes con masa fría sin extenderla.",
        "minutes": 0,
        "cue": "Cavidades engrasadas con película fina, sin charcos."
      },
      {
        "title": "Hornea",
        "text": "Hornea 9–12 minutos sin abrir durante los primeros 8. La pancita depende del frío de la masa, el molde y el horno; lo esencial es que estén cocidas y suaves. No sobrellenes para intentar hacerla más grande.",
        "minutes": 11,
        "cue": "Bordes dorados y centro elástico."
      },
      {
        "title": "Desmolda tibias",
        "text": "Espera 2 minutos, despega los bordes suavemente y pasa a una rejilla. Antes de otra tanda, enfría, limpia y vuelve a preparar el molde. Deja templar unos minutos antes de servir.",
        "minutes": 15,
        "cue": "Piezas que se desprenden con los bordes enteros."
      }
    ],
    "tips": "Masa fría y molde bien preparado valen más que batir de más. Evita poner masa en un molde caliente.",
    "beforeYouStart": [
      "Usa un molde específico de madeleines para esta forma y tiempo.",
      "Lava y seca el limón antes de rallarlo.",
      "Planea el reposo de 2 horas antes de empezar."
    ],
    "doneWhen": [
      "El centro vuelve a su sitio al tocarlo suavemente.",
      "Los bordes están dorados y no hay masa húmeda en una brocheta."
    ],
    "troubleshooting": [
      {
        "problem": "Se pegan al molde.",
        "solution": "Engrasa cada estría y retira a los 2 minutos, sin esperar a que se enfríen dentro."
      },
      {
        "problem": "Quedaron secas.",
        "solution": "Reduce el horneado de la siguiente tanda; son pequeñas y se pasan rápido."
      }
    ],
    "storage": "Se disfrutan el día de horneado. Guarda herméticas hasta 2 días o congela hasta 1 mes.",
    "servingTip": "Sírvelas apenas tibias junto a una taza de té.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Madeleines_de_Commercy.jpg/960px-Madeleines_de_Commercy.jpg",
    "photoAlt": "Madeleines de mantequilla con forma de concha",
    "photographer": "myself (Bernard Leprêtre)",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Madeleines_de_Commercy.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 2.5",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/2.5"
  },
  {
    "id": "muffins-de-arandanos",
    "name": "Muffins de arándanos",
    "categoryLabel": "Fruta azul y copete dorado",
    "tags": [
      "pasteles",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 12,
    "prep": 20,
    "cook": 23,
    "rest": 15,
    "oven": 190,
    "description": "Arándanos que se revientan dentro de una miga suave. De los que se parten con las manos.",
    "equipment": "Molde metálico de 12 muffins estándar, capacillos, espátula y rejilla.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 250.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar",
        "amount": 140.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "polvo para hornear",
        "amount": 10.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Masa"
      },
      {
        "name": "aceite vegetal",
        "amount": 120.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "leche entera",
        "amount": 180.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "arándanos azules frescos o congelados",
        "amount": 200.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "harina extra",
        "amount": 10.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "azúcar",
        "amount": 20.0,
        "unit": "g",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Precalienta a 190 °C. Coloca capacillos en un molde metálico estándar. Si usas arándanos frescos, lávalos y sécalos muy bien. Si usas congelados, mantenlos congelados hasta incorporarlos.",
        "minutes": 0,
        "cue": "12 cavidades con capacillos y horno caliente."
      },
      {
        "title": "Separa secos y líquidos",
        "text": "Mezcla harina, 140 g de azúcar, polvo de hornear y sal. En otro recipiente bate a mano huevos, aceite, leche y vainilla hasta integrar. No necesitas airear la mezcla con batidora.",
        "minutes": 0,
        "cue": "Dos mezclas uniformes antes de unir."
      },
      {
        "title": "Une lo justo",
        "text": "Vierte los líquidos sobre los secos y mezcla con espátula en pocas vueltas. Detente en cuanto no queden bolsas de harina. Una masa completamente lisa por exceso de batido puede dar muffins duros.",
        "minutes": 0,
        "cue": "Masa con pequeños grumos, sin harina seca."
      },
      {
        "title": "Añade la fruta",
        "text": "Mezcla la fruta con los 10 g de harina extra e incorpora con 3–4 movimientos envolventes. Reparte en los capacillos hasta tres cuartas partes. Espolvorea los 20 g de azúcar sobre las porciones.",
        "minutes": 0,
        "cue": "Arándanos repartidos sin teñir toda la masa."
      },
      {
        "title": "Hornea",
        "text": "Hornea 20–25 minutos. Con fruta congelada puede tomar algunos minutos más. Inserta la brocheta en una zona de miga, no a través de un arándano. No abras el horno antes del minuto 18.",
        "minutes": 23,
        "cue": "Copete dorado y brocheta sin masa cruda."
      },
      {
        "title": "Enfría fuera del molde",
        "text": "Espera 5 minutos en el molde y mueve a una rejilla. Deja otros 10 minutos antes de partir. Guardarlos aún calientes humedece el capacillo y la superficie.",
        "minutes": 15,
        "cue": "Bases sin vapor atrapado y miga asentada."
      }
    ],
    "tips": "No descongeles los arándanos antes de añadirlos; se rompen y tiñen más la masa.",
    "beforeYouStart": [
      "Usa arándanos azules; los rojos secos son un ingrediente distinto.",
      "Sécalos bien si son frescos.",
      "Coloca el molde en el centro del horno para dorar parejo."
    ],
    "doneWhen": [
      "Una brocheta en la miga sale sin masa cruda.",
      "El copete recupera su forma después de tocarlo suavemente."
    ],
    "troubleshooting": [
      {
        "problem": "La miga quedó dura.",
        "solution": "Mezcla menos después de unir secos y líquidos y evita sobrehornear."
      },
      {
        "problem": "Se pegaron los capacillos.",
        "solution": "Déjalos enfriar y usa capacillos de buena calidad; calientes se adhieren más."
      }
    ],
    "storage": "Guarda herméticos hasta 2 días en un lugar fresco, o congela ya fríos hasta 1 mes.",
    "servingTip": "Parte uno tibio; los arándanos calientes pueden soltar jugo, así que espera unos minutos.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Muffin_NIH.jpg/960px-Muffin_NIH.jpg",
    "photoAlt": "Muffin de arándanos con copete dorado y capacillo de papel",
    "photographer": "National Cancer Institute, Renee Comet (photographer)",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Muffin_NIH.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "Public domain",
    "photoLicenseUrl": "https://commons.wikimedia.org/wiki/File:Muffin_NIH.jpg"
  },
  {
    "id": "pastel-de-chocolate-con-ganache",
    "name": "Pastel de chocolate con ganache",
    "categoryLabel": "Chocolate, sin distraerse",
    "tags": [
      "chocolate",
      "pasteles",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 10,
    "prep": 35,
    "cook": 35,
    "rest": 100,
    "oven": 175,
    "description": "Un pastel de chocolate de una capa con una cubierta brillante y generosa.",
    "equipment": "Molde redondo de 22 cm y 5 cm de alto, papel para hornear, batidor y rejilla.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 180.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "cocoa sin azúcar",
        "amount": 50.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "azúcar",
        "amount": 180.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "polvo para hornear",
        "amount": 6.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "bicarbonato",
        "amount": 3.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Pastel"
      },
      {
        "name": "yogur natural sin azúcar",
        "amount": 120.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "aceite vegetal",
        "amount": 90.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "café recién hecho caliente",
        "amount": 160.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "chocolate semiamargo picado",
        "amount": 200.0,
        "unit": "g",
        "group": "Ganache"
      },
      {
        "name": "crema para batir",
        "amount": 200.0,
        "unit": "ml",
        "group": "Ganache"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Precalienta a 175 °C. Engrasa el molde y cubre el fondo con un círculo de papel para hornear. Tamiza harina, cocoa, polvo de hornear, bicarbonato y sal; mezcla con el azúcar.",
        "minutes": 0,
        "cue": "Molde engrasado y fondo con papel."
      },
      {
        "title": "Mezcla líquidos",
        "text": "Bate a mano los huevos con yogur, aceite y vainilla. Incorpora esta mezcla a los secos con movimientos amplios. Raspa los lados y el fondo para eliminar bolsas de harina.",
        "minutes": 0,
        "cue": "Huevos, yogur y aceite completamente unidos."
      },
      {
        "title": "Añade el café",
        "text": "Vierte el café caliente en dos tandas mientras mezclas despacio para no salpicar. La masa quedará más líquida que otras masas de pastel: es esperado. Pasa de inmediato al molde sin superar tres cuartas partes.",
        "minutes": 0,
        "cue": "Masa fluida y uniforme."
      },
      {
        "title": "Hornea y enfría",
        "text": "Hornea 32–40 minutos. Revisa desde el minuto 32. Deja 15 minutos en el molde, desmolda y retira el papel. Enfría sobre rejilla al menos 1 hora antes de cubrir.",
        "minutes": 35,
        "cue": "Centro elástico y brocheta con migas, sin masa líquida."
      },
      {
        "title": "Haz la ganache",
        "text": "Calienta la crema hasta que humee, sin hervor fuerte. Viértela sobre el chocolate picado y deja quieta 2 minutos. Remueve desde el centro hacia afuera hasta alisar. No batas para evitar burbujas.",
        "minutes": 5,
        "cue": "Emulsión brillante, sin trozos de chocolate."
      },
      {
        "title": "Cubre el pastel",
        "text": "Deja templar la ganache 25–40 minutos hasta que cubra la cuchara. Extiende sobre el pastel totalmente frío, dejando caer un poco por los lados. Si sigue muy líquida, espera un poco más antes de usarla.",
        "minutes": 40,
        "cue": "Ganache espesa pero todavía extendible."
      }
    ],
    "tips": "El café realza el chocolate. Puedes usar la misma cantidad de agua caliente si prefieres evitarlo.",
    "beforeYouStart": [
      "Usa cocoa pura sin azúcar, no polvo para preparar bebida.",
      "Pica fino el chocolate de la cubierta.",
      "No cubras el pastel caliente: derretiría la ganache."
    ],
    "doneWhen": [
      "La brocheta no arrastra masa cruda del centro.",
      "La ganache se extiende en una capa estable al enfriarse."
    ],
    "troubleshooting": [
      {
        "problem": "La ganache tiene trozos.",
        "solution": "Pon el recipiente sobre agua apenas caliente y remueve suavemente hasta fundir."
      },
      {
        "problem": "El pastel quedó seco.",
        "solution": "Revisa antes la próxima vez; retira con migas húmedas en la brocheta, sin esperar a que salga completamente seca."
      }
    ],
    "storage": "Refrigera tapado hasta 3 días por la cubierta de crema. Deja templar la porción 20 minutos antes de servir.",
    "servingTip": "Corta con un cuchillo tibio y límpialo entre rebanadas para ver bien la cubierta.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Chocolate_Cake_with_a_Decadent_Ganache.jpg",
    "photoAlt": "Pastel de chocolate cubierto con ganache brillante",
    "photographer": "روتانا",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chocolate_Cake_with_a_Decadent_Ganache.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/4.0"
  },
  {
    "id": "pastel-invertido-de-pina",
    "name": "Pastel invertido de piña",
    "categoryLabel": "La fruta se queda arriba",
    "tags": [
      "pasteles",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 10,
    "prep": 25,
    "cook": 40,
    "rest": 15,
    "oven": 175,
    "description": "Piña dorada sobre un bizcocho de mantequilla. Se voltea antes de que se enfríe.",
    "equipment": "Molde redondo metálico de 23 cm y 5 cm de alto, batidora y plato resistente al calor con borde.",
    "ingredients": [
      {
        "name": "mantequilla",
        "amount": 50.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "azúcar mascabado",
        "amount": 100.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "aros de piña en almíbar, escurridos",
        "amount": 7.0,
        "unit": "pzas",
        "group": "Cubierta"
      },
      {
        "name": "cerezas en almíbar, escurridas",
        "amount": 7.0,
        "unit": "pzas",
        "group": "Cubierta"
      },
      {
        "name": "mantequilla suave",
        "amount": 100.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "azúcar",
        "amount": 120.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Pastel"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Pastel"
      },
      {
        "name": "harina de trigo",
        "amount": 200.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "polvo para hornear",
        "amount": 8.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Pastel"
      },
      {
        "name": "leche entera",
        "amount": 120.0,
        "unit": "ml",
        "group": "Pastel"
      }
    ],
    "steps": [
      {
        "title": "Coloca la fruta",
        "text": "Precalienta a 175 °C. Derrite los 50 g de mantequilla y reparte con azúcar mascabado en el fondo del molde. Acomoda los aros de piña y las cerezas en sus centros. Seca la fruta con papel si tiene mucho almíbar.",
        "minutes": 0,
        "cue": "Piña bien escurrida y fondo cubierto sin amontonar."
      },
      {
        "title": "Bate la mantequilla",
        "text": "Bate los 100 g de mantequilla suave con los 120 g de azúcar durante 3 minutos. Añade huevos de uno en uno y vainilla. Raspa el recipiente entre adiciones para integrar por completo.",
        "minutes": 0,
        "cue": "Crema más clara y esponjosa."
      },
      {
        "title": "Completa la masa",
        "text": "Mezcla harina, polvo de hornear y sal. Incorpora a la crema alternando con leche: secos, leche y secos. Mezcla a velocidad baja o con espátula solo hasta unir, sin seguir batiendo.",
        "minutes": 0,
        "cue": "Masa suave sin harina seca."
      },
      {
        "title": "Cubre sin mover los aros",
        "text": "Pon cucharadas de masa sobre la fruta y nivela con suavidad desde el centro hacia los bordes. No viertas de golpe: podrías desplazar la piña. Da un pequeño giro al molde para comprobar que quedó nivelado.",
        "minutes": 0,
        "cue": "Masa repartida de manera uniforme."
      },
      {
        "title": "Hornea",
        "text": "Hornea 35–45 minutos en la rejilla central. Prueba la miga con una brocheta evitando llegar al caramelo del fondo. Si se dora muy pronto, cubre flojamente al final.",
        "minutes": 40,
        "cue": "Superficie dorada y brocheta sin masa cruda."
      },
      {
        "title": "Voltea aún tibio",
        "text": "Deja reposar 10–15 minutos, pasa un cuchillo por el borde y coloca un plato con borde encima. Con guantes, sujeta y voltea con cuidado por el caramelo caliente. Espera 1 minuto antes de retirar el molde; recoloca cualquier aro que se haya quedado pegado.",
        "minutes": 15,
        "cue": "Bordes sueltos y caramelo todavía fluido."
      }
    ],
    "tips": "Un molde de una sola pieza contiene el caramelo mejor que uno desmontable.",
    "beforeYouStart": [
      "Escurre y seca bien la fruta antes de comenzar.",
      "Separa la mantequilla y el azúcar por grupos.",
      "Ten listo el plato de servir antes de sacar el pastel del horno."
    ],
    "doneWhen": [
      "La brocheta sale sin masa cruda al probar solo la miga.",
      "La superficie vuelve a su lugar al tocarla suavemente."
    ],
    "troubleshooting": [
      {
        "problem": "La piña se quedó pegada.",
        "solution": "Voltea antes de que el caramelo enfríe por completo; si un aro queda en el molde, levántalo y acomódalo con una espátula."
      },
      {
        "problem": "La miga está muy húmeda alrededor de la fruta.",
        "solution": "Escurre mejor la piña y hornea hasta que la miga esté cocida, sin probar dentro de un aro."
      }
    ],
    "storage": "Refrigera tapado hasta 3 días. Deja templar un poco antes de servir.",
    "servingTip": "Sirve mostrando la piña; una cucharada de yogur natural acompaña bien el caramelo.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Pineapple_Upside-Down_Cake_%288442873817%29.jpg/960px-Pineapple_Upside-Down_Cake_%288442873817%29.jpg",
    "photoAlt": "Pastel invertido con piña caramelizada sobre la superficie",
    "photographer": "Neil Conway from Oakland, USA",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Pineapple_Upside-Down_Cake_(8442873817).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "tarta-de-frutos-rojos",
    "name": "Tarta de frutos rojos",
    "categoryLabel": "Crema de vainilla y fruta fresca",
    "tags": [
      "pasteles",
      "frios",
      "recientes"
    ],
    "difficulty": "Elaborada",
    "servings": 8,
    "prep": 50,
    "cook": 35,
    "rest": 150,
    "oven": 180,
    "description": "Base crujiente, crema pastelera y fruta acomodada sin demasiadas reglas.",
    "equipment": "Molde de tarta desmontable de 23 cm, rodillo, papel para hornear, pesos de repostería y colador.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 200.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla fría en cubos",
        "amount": 100.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "azúcar glass",
        "amount": 50.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "yema grande",
        "amount": 1.0,
        "unit": "pza",
        "group": "Base"
      },
      {
        "name": "agua fría, aproximadamente",
        "amount": 25.0,
        "unit": "ml",
        "group": "Base"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "leche entera",
        "amount": 400.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "yemas grandes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Crema"
      },
      {
        "name": "azúcar",
        "amount": 75.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "fécula de maíz",
        "amount": 35.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "mantequilla",
        "amount": 20.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "fresas, frambuesas y arándanos lavados y secos",
        "amount": 400.0,
        "unit": "g",
        "group": "Fruta"
      }
    ],
    "steps": [
      {
        "title": "Haz la masa",
        "text": "Mezcla harina, azúcar glass y sal; frota con la mantequilla fría hasta obtener arena gruesa. Añade yema y agua poco a poco, solo la necesaria para unir. Forma un disco sin amasar, envuelve y enfría 30 minutos.",
        "minutes": 30,
        "cue": "Masa unida sin vetas grandes de mantequilla."
      },
      {
        "title": "Forra y enfría",
        "text": "Estira entre papeles, forra el molde y presiona suavemente las esquinas. Recorta sobrantes y pincha el fondo. Enfría 20 minutos mientras precalientas a 180 °C. El frío ayuda a que no se encoja.",
        "minutes": 20,
        "cue": "Base de unos 3 mm, sin estirarla a la fuerza."
      },
      {
        "title": "Hornea la base vacía",
        "text": "Cubre con papel y pesos de repostería. Hornea 18 minutos, retira con cuidado papel y pesos y hornea 10–15 minutos más hasta dorar el fondo. Enfría por completo antes de rellenar.",
        "minutes": 30,
        "cue": "Fondo seco y bordes dorados claros."
      },
      {
        "title": "Cocina la crema",
        "text": "Calienta la leche hasta humear. Bate yemas con azúcar y fécula. Añade media leche poco a poco y regresa todo al cazo. Cocina a fuego medio batiendo; desde el primer hervor suave, mantén 1 minuto para cocer la fécula.",
        "minutes": 5,
        "cue": "Crema espesa y lisa que conserva el surco del batidor."
      },
      {
        "title": "Enfría protegida",
        "text": "Retira del fuego e incorpora vainilla y mantequilla. Pasa a un recipiente bajo, cubre a contacto con película apta para alimentos y deja templar brevemente. Refrigera unos 90 minutos. Remueve con batidor para recuperar una textura lisa.",
        "minutes": 90,
        "cue": "Crema fría, sin costra seca."
      },
      {
        "title": "Monta la tarta",
        "text": "Extiende la crema en la base fría. Acomoda los frutos enteros o cortados; seca bien las fresas antes de ponerlas. Desmolda sosteniendo la base, no presionando el fondo sin apoyo. Sirve el mismo día para disfrutar el crujido.",
        "minutes": 0,
        "cue": "Fruta seca y crema fría en una base crujiente."
      }
    ],
    "tips": "Monta la tarta pocas horas antes de servir; la crema ablanda la base con el paso del tiempo.",
    "beforeYouStart": [
      "Lava la fruta con tiempo para que se seque completamente.",
      "Los pesos se retiran después del primer horneado; no forman parte de los ingredientes.",
      "Separa la yema de la base de las tres de la crema."
    ],
    "doneWhen": [
      "La base está dorada también en el centro, sin masa translúcida.",
      "La crema hierve suavemente un minuto y queda espesa sin sabor a fécula cruda."
    ],
    "troubleshooting": [
      {
        "problem": "La base se encogió.",
        "solution": "No estires la masa al acomodarla y respeta ambos reposos en frío."
      },
      {
        "problem": "La crema tiene grumos.",
        "solution": "Pásala por un colador fino mientras aún está caliente y cúbrela a contacto para enfriar."
      }
    ],
    "storage": "Refrigera la tarta montada hasta 2 días; la base pierde crujido. Guarda base y crema por separado si la preparas con anticipación.",
    "servingTip": "Corta con cuchillo de sierra fino para atravesar la base sin aplastarla.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Berry_Tart_from_La_Farine%2C_Rockridge%2C_2009.jpg",
    "photoAlt": "Tarta cubierta con fresas, frambuesas y moras",
    "photographer": "www.bluewaikiki.com",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Berry_Tart_from_La_Farine,_Rockridge,_2009.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "creme-brulee",
    "name": "Crème brûlée",
    "categoryLabel": "La primera cucharada cruje",
    "tags": [
      "frios",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 6,
    "prep": 25,
    "cook": 40,
    "rest": 270,
    "oven": 150,
    "description": "Crema de vainilla bien fría debajo de una capa fina de caramelo recién hecho.",
    "equipment": "6 ramequines bajos de 120 ml, charola profunda, colador y soplete de cocina.",
    "ingredients": [
      {
        "name": "crema para batir",
        "amount": 500.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "yemas grandes",
        "amount": 5.0,
        "unit": "pzas",
        "group": "Crema"
      },
      {
        "name": "azúcar",
        "amount": 70.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "extracto de vainilla",
        "amount": 10.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "azúcar blanca fina",
        "amount": 45.0,
        "unit": "g",
        "group": "Caramelo"
      }
    ],
    "steps": [
      {
        "title": "Calienta la crema",
        "text": "Precalienta a 150 °C. Calienta la crema con vainilla hasta que aparezcan pequeñas burbujas en los bordes. Retira del fuego. Pon agua a calentar aparte para el baño María.",
        "minutes": 0,
        "cue": "Crema humeante, sin hervor fuerte."
      },
      {
        "title": "Templa las yemas",
        "text": "Bate yemas, 70 g de azúcar y sal solo hasta unir. Añade lentamente la crema caliente sin dejar de mover. Cuela y retira la espuma de la superficie con una cuchara para que el acabado quede liso.",
        "minutes": 0,
        "cue": "Mezcla lisa, con muy poca espuma."
      },
      {
        "title": "Prepara los recipientes",
        "text": "Reparte en ramequines bajos, dejando algo de borde libre. Coloca en la charola sobre la rejilla del horno y añade agua caliente alrededor. Evita que entre agua dentro de la crema.",
        "minutes": 0,
        "cue": "Porciones parejas y agua a media altura."
      },
      {
        "title": "Hornea suavemente",
        "text": "Hornea 30–45 minutos según la profundidad del ramequín. Empieza a revisar a los 30. Retira cuando el centro se mueva como gelatina suave, sin estar líquido. La crema muy rígida en el horno suele quedar sobrecocida.",
        "minutes": 40,
        "cue": "Bordes fijos y centro con un temblor pequeño."
      },
      {
        "title": "Enfría por completo",
        "text": "Saca del baño con guantes, deja templar unos 30 minutos y refrigera al menos 4 horas. Tapa cuando esté fría. Si aparece condensación, sécala suavemente con papel antes de caramelizar.",
        "minutes": 270,
        "cue": "Crema firme y totalmente fría."
      },
      {
        "title": "Haz la costra al servir",
        "text": "Reparte el azúcar del acabado en una película delgada sobre cada crema. Con soplete de cocina, calienta moviéndolo continuamente hasta fundir y dorar. Apoya los ramequines en una superficie resistente al calor. Espera 1 minuto y sirve; no caramelices horas antes.",
        "minutes": 0,
        "cue": "Capa fina ámbar que se endurece en 1 minuto."
      }
    ],
    "tips": "Una capa delgada de azúcar se rompe con facilidad y permite que la crema siga fría.",
    "beforeYouStart": [
      "Usa ramequines bajos de capacidad similar.",
      "Esta versión requiere soplete de cocina para el acabado.",
      "Reserva las claras para otra preparación; aquí solo se usan yemas."
    ],
    "doneWhen": [
      "La crema cuajada tiembla ligeramente, sin ondas de líquido.",
      "El azúcar forma una lámina ámbar firme, sin zonas negras."
    ],
    "troubleshooting": [
      {
        "problem": "La crema quedó granulosa.",
        "solution": "Se calentó demasiado. Hornea a menor temperatura y retira en cuanto el centro conserve un ligero temblor."
      },
      {
        "problem": "El caramelo se ablanda.",
        "solution": "La humedad del refrigerador lo disuelve. Carameliza justo antes de servir y seca primero la superficie."
      }
    ],
    "storage": "La crema sin caramelizar se conserva tapada en el refrigerador hasta 2 días.",
    "servingTip": "Llévala a la mesa poco después del soplete para que cada quien rompa su costra.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Cr%C3%A8me_br%C3%BBl%C3%A9e_at_restaurant_in_Zushi.jpg/960px-Cr%C3%A8me_br%C3%BBl%C3%A9e_at_restaurant_in_Zushi.jpg",
    "photoAlt": "Crème brûlée en un ramequín blanco con caramelo dorado",
    "photographer": "Syced",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Cr%C3%A8me_br%C3%BBl%C3%A9e_at_restaurant_in_Zushi.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  {
    "id": "panna-cotta-de-vainilla",
    "name": "Panna cotta de vainilla",
    "categoryLabel": "Cremosa y con un pequeño temblor",
    "tags": [
      "frios",
      "sin-horno",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 6,
    "prep": 20,
    "cook": 5,
    "rest": 250,
    "oven": 0,
    "description": "Vainilla y crema en vasitos, con una salsa de fresas para terminar.",
    "equipment": "6 vasitos de 150 ml, cazo, colador y báscula con precisión de gramos.",
    "ingredients": [
      {
        "name": "crema para batir",
        "amount": 500.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "leche entera",
        "amount": 150.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "azúcar",
        "amount": 70.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "grenetina sin sabor en polvo, aproximadamente 200 bloom",
        "amount": 7.0,
        "unit": "g",
        "group": "Crema"
      },
      {
        "name": "agua fría",
        "amount": 35.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "vainilla",
        "amount": 10.0,
        "unit": "ml",
        "group": "Crema"
      },
      {
        "name": "fresas picadas",
        "amount": 200.0,
        "unit": "g",
        "group": "Salsa"
      },
      {
        "name": "azúcar",
        "amount": 25.0,
        "unit": "g",
        "group": "Salsa"
      },
      {
        "name": "jugo de limón",
        "amount": 10.0,
        "unit": "ml",
        "group": "Salsa"
      }
    ],
    "steps": [
      {
        "title": "Hidrata la grenetina",
        "text": "Espolvorea la grenetina sobre los 35 ml de agua fría en un recipiente pequeño. No viertas el agua sobre un montón de polvo. Deja hidratar 10 minutos sin calentar todavía.",
        "minutes": 10,
        "cue": "Esponja uniforme, sin polvo seco."
      },
      {
        "title": "Calienta la base",
        "text": "Calienta crema, leche y 70 g de azúcar a fuego medio-bajo, removiendo. Retira cuando humee, antes de hervir. Incorpora vainilla y deja perder el calor más intenso durante 1 minuto.",
        "minutes": 0,
        "cue": "Azúcar disuelta y líquido humeante."
      },
      {
        "title": "Disuelve y reparte",
        "text": "Añade la grenetina hidratada a la base caliente fuera del fuego. Remueve hasta disolver por completo y cuela. Reparte en los vasitos dejando espacio para la salsa. Esta versión se sirve en vaso y no necesita desmolde.",
        "minutes": 0,
        "cue": "Mezcla sin granitos de grenetina."
      },
      {
        "title": "Refrigera",
        "text": "Deja templar unos 10 minutos, tapa y refrigera al menos 4 horas. No muevas los vasos durante el primer cuajado. Si todavía está líquida, dale más tiempo: el tamaño del recipiente y la temperatura influyen.",
        "minutes": 240,
        "cue": "Crema que tiembla suavemente pero no fluye."
      },
      {
        "title": "Cocina la salsa",
        "text": "Calienta las fresas con 25 g de azúcar y limón durante unos 5 minutos, removiendo. Aplasta algunas con un tenedor y deja otras en trozos. Pasa a un recipiente y enfría completamente.",
        "minutes": 5,
        "cue": "Fresas suaves y jugo ligeramente espeso."
      },
      {
        "title": "Termina los vasos",
        "text": "Añade una o dos cucharadas de salsa a cada vaso justo antes de servir. No pongas salsa caliente: derrite la capa superior de la panna cotta. Sirve directamente del refrigerador.",
        "minutes": 0,
        "cue": "Salsa fría sobre una crema ya cuajada."
      }
    ],
    "tips": "Pesa la grenetina; añadir de más por precaución vuelve la crema gomosa.",
    "beforeYouStart": [
      "Usa grenetina sin sabor, no gelatina de sabores.",
      "La fuerza puede variar por marca; consulta el envase si indica una dosificación distinta.",
      "Prepara vasos pequeños para que la crema cuaje uniformemente."
    ],
    "doneWhen": [
      "Al inclinar apenas un vaso, la crema permanece unida.",
      "La textura cede a la cuchara y no se siente como goma."
    ],
    "troubleshooting": [
      {
        "problem": "No cuajó.",
        "solution": "Comprueba el tiempo de frío y que la grenetina estuviera hidratada y totalmente disuelta. No la agregues en polvo a los vasos fríos."
      },
      {
        "problem": "Tiene pequeños grumos.",
        "solution": "La grenetina no se disolvió bien; cuela la mezcla caliente antes de repartir en la siguiente preparación."
      }
    ],
    "storage": "Refrigera los vasos tapados hasta 3 días y la salsa por separado. No congeles.",
    "servingTip": "Deja la salsa con algunos trozos para contrastar con la crema lisa.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Vanilla_Pannakotta.jpg/960px-Vanilla_Pannakotta.jpg",
    "photoAlt": "Panna cotta de vainilla desmoldada y decorada; presentación ilustrativa",
    "photographer": "Mujeeb2002",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vanilla_Pannakotta.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "gelatina-de-mosaico",
    "name": "Gelatina de mosaico",
    "categoryLabel": "Cubitos de colores, crema de vainilla",
    "tags": [
      "frios",
      "sin-horno",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 12,
    "prep": 35,
    "cook": 10,
    "rest": 540,
    "oven": 0,
    "description": "Cada rebanada guarda un dibujo distinto. Primero cuajan los colores, luego todo lo demás.",
    "equipment": "3 recipientes bajos, molde de 2 litros, báscula, cazo y espátula.",
    "ingredients": [
      {
        "name": "sobre de gelatina de fresa, dosificado para 500 ml",
        "amount": 1.0,
        "unit": "pza",
        "group": "Cubos"
      },
      {
        "name": "sobre de gelatina de limón, dosificado para 500 ml",
        "amount": 1.0,
        "unit": "pza",
        "group": "Cubos"
      },
      {
        "name": "sobre de gelatina de uva, dosificado para 500 ml",
        "amount": 1.0,
        "unit": "pza",
        "group": "Cubos"
      },
      {
        "name": "agua, 300 ml por sabor",
        "amount": 900.0,
        "unit": "ml",
        "group": "Cubos"
      },
      {
        "name": "leche condensada",
        "amount": 397.0,
        "unit": "g",
        "group": "Base blanca"
      },
      {
        "name": "leche evaporada",
        "amount": 360.0,
        "unit": "ml",
        "group": "Base blanca"
      },
      {
        "name": "leche entera",
        "amount": 150.0,
        "unit": "ml",
        "group": "Base blanca"
      },
      {
        "name": "grenetina sin sabor en polvo, aproximadamente 200 bloom",
        "amount": 25.0,
        "unit": "g",
        "group": "Base blanca"
      },
      {
        "name": "agua fría",
        "amount": 125.0,
        "unit": "ml",
        "group": "Base blanca"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Base blanca"
      },
      {
        "name": "aceite neutro",
        "amount": 5.0,
        "unit": "ml",
        "group": "Molde"
      }
    ],
    "steps": [
      {
        "title": "Prepara los colores",
        "text": "Usa sobres cuya etiqueta rinda 500 ml cada uno, pero prepara cada sabor con 300 ml de agua total para obtener cubos firmes: disuelve en 150 ml hirviendo y añade 150 ml fría. Vierte por separado en recipientes bajos y refrigera al menos 4 horas.",
        "minutes": 240,
        "cue": "Tres gelatinas firmes que se pueden cortar."
      },
      {
        "title": "Corta los cubitos",
        "text": "Pasa un cuchillo por los recipientes y corta las gelatinas en cubos. Desprende con espátula y conserva en frío. Engrasa apenas el molde con el aceite y retira el exceso con papel; no deben quedar gotas.",
        "minutes": 0,
        "cue": "Dados de 1.5–2 cm con bordes definidos."
      },
      {
        "title": "Hidrata y funde",
        "text": "Espolvorea los 25 g de grenetina sobre 125 ml de agua fría y espera 10 minutos. Funde a baño María suave, removiendo. Retira en cuanto se disuelva; un hervor prolongado no es necesario.",
        "minutes": 10,
        "cue": "Grenetina completamente líquida, sin hervir."
      },
      {
        "title": "Prepara la base",
        "text": "Mezcla las tres leches y vainilla. Incorpora primero unas cucharadas de esta mezcla a la grenetina fundida para templarla y luego une todo en hilo, removiendo. Deja templar si sigue caliente: una base caliente derrite los cubos.",
        "minutes": 0,
        "cue": "Mezcla blanca fluida a temperatura ambiente."
      },
      {
        "title": "Monta el mosaico",
        "text": "Reparte los cubos en el molde y vierte la base blanca con suavidad. Mueve apenas con una espátula para distribuir, sin romper. Tapa y refrigera al menos 5 horas, mejor de un día para otro.",
        "minutes": 300,
        "cue": "Cubos distribuidos y base completamente cuajada."
      },
      {
        "title": "Desmolda",
        "text": "Despega suavemente el contorno con dedos limpios. Sumerge solo el exterior del molde 5–10 segundos en agua tibia, seca y voltea sobre un plato. Repite unos segundos si hace falta; no uses agua hirviendo.",
        "minutes": 0,
        "cue": "La gelatina se separa sin licuarse en los bordes."
      }
    ],
    "tips": "Los sobres varían de tamaño: importa que cada uno esté dosificado para 500 ml de líquido según su etiqueta.",
    "beforeYouStart": [
      "Empieza por los cubos con varias horas de anticipación.",
      "Comprueba una capacidad mínima de 2 litros en el molde.",
      "La base blanca debe estar templada antes de tocar los colores."
    ],
    "doneWhen": [
      "Los cubos conservan sus bordes dentro de la mezcla blanca.",
      "La rebanada fría mantiene su forma al cortarla."
    ],
    "troubleshooting": [
      {
        "problem": "Los colores se mezclaron.",
        "solution": "La base estaba caliente o los cubos no estaban firmes. Enfría ambos antes de unir."
      },
      {
        "problem": "No se desprende del molde.",
        "solution": "Entibia solo el exterior unos segundos más y suelta el borde con suavidad; no tires de la gelatina."
      }
    ],
    "storage": "Conserva tapada en el refrigerador hasta 4 días. No congeles.",
    "servingTip": "Corta con un cuchillo liso humedecido y muestra el mosaico de cada rebanada.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Gelatina_de_mosaico.jpg/960px-Gelatina_de_mosaico.jpg",
    "photoAlt": "Gelatina blanca de rosca con cubos de colores y fruta encima",
    "photographer": "Photo.MarioVG",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Gelatina_de_mosaico.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "paletas-de-fresa-con-yogur",
    "name": "Paletas de fresa con yogur",
    "categoryLabel": "Para una tarde de calor",
    "tags": [
      "frios",
      "sin-horno",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 8,
    "prep": 20,
    "cook": 0,
    "rest": 360,
    "oven": 0,
    "description": "Fresa, yogur y pequeños remolinos rosados. Solo hay que esperar a que se congelen.",
    "equipment": "8 moldes de paleta de unos 90 ml, palitos y licuadora.",
    "ingredients": [
      {
        "name": "fresas maduras lavadas y sin hojas",
        "amount": 350.0,
        "unit": "g",
        "group": "Paletas"
      },
      {
        "name": "yogur griego natural sin azúcar",
        "amount": 300.0,
        "unit": "g",
        "group": "Paletas"
      },
      {
        "name": "miel",
        "amount": 70.0,
        "unit": "g",
        "group": "Paletas"
      },
      {
        "name": "jugo de limón",
        "amount": 15.0,
        "unit": "ml",
        "group": "Paletas"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Paletas"
      }
    ],
    "steps": [
      {
        "title": "Prepara la fruta",
        "text": "Retira hojas y partes dañadas. Trocea las fresas y reserva 70 g en cubitos pequeños. Revisa la capacidad de los moldes: el rendimiento cambia si son mucho mayores o menores que 90 ml.",
        "minutes": 0,
        "cue": "Fresas limpias, maduras y bien escurridas."
      },
      {
        "title": "Licúa la fresa",
        "text": "Licúa los 280 g restantes de fresas con limón y 35 g de miel. No añadas agua: diluye el sabor y aumenta los cristales de hielo. Si la fruta no gira, aplástala un poco antes de encender.",
        "minutes": 0,
        "cue": "Puré uniforme con semillas finas."
      },
      {
        "title": "Prepara el yogur",
        "text": "Mezcla yogur con vainilla y los otros 35 g de miel. Prueba ambas mezclas; deben sentirse un poco más dulces de lo que buscas al servir, porque el frío reduce la percepción del dulzor.",
        "minutes": 0,
        "cue": "Yogur liso y ligeramente dulce."
      },
      {
        "title": "Llena con remolinos",
        "text": "Alterna cucharadas de yogur y puré. Reparte los cubitos de fresa y pasa un palito una o dos veces para dibujar vetas, sin unir todo por completo. Deja un pequeño espacio para la expansión.",
        "minutes": 0,
        "cue": "Moldes casi llenos, con 5 mm libres."
      },
      {
        "title": "Congela sin mover",
        "text": "Inserta los palitos y congela en una superficie nivelada al menos 6 horas, preferiblemente toda la noche. Evita abrir el congelador repetidamente durante las primeras horas. No intentes desmoldar cuando el centro siga blando.",
        "minutes": 360,
        "cue": "Paletas sólidas hasta el centro."
      },
      {
        "title": "Desmolda al servir",
        "text": "Pasa el exterior del molde por agua tibia 5–10 segundos y tira suavemente del palito. Si no sale, repite brevemente en lugar de jalar fuerte. Sirve de inmediato o guarda individualmente envueltas en el congelador.",
        "minutes": 0,
        "cue": "La paleta sale entera y conserva su forma."
      }
    ],
    "tips": "El yogur griego entero aporta una textura más cremosa que uno muy líquido o sin grasa.",
    "beforeYouStart": [
      "Ten espacio nivelado en el congelador para el molde.",
      "Usa palitos adecuados para alimentos.",
      "Si la miel está cristalizada, entíbiala aparte y deja enfriar antes de mezclar."
    ],
    "doneWhen": [
      "El centro está totalmente sólido antes de retirar el molde.",
      "La paleta sale sin que el palito se desprenda."
    ],
    "troubleshooting": [
      {
        "problem": "Salieron muy duras y con hielo.",
        "solution": "Evita añadir agua y usa yogur espeso; deja templar la paleta 1 minuto antes de comer."
      },
      {
        "problem": "El palito se sale solo.",
        "solution": "Faltó congelación o se calentó demasiado el molde. Vuelve a congelar y entibia apenas el exterior."
      }
    ],
    "storage": "Guarda envueltas o en recipiente cerrado en el congelador hasta 3 semanas.",
    "servingTip": "Saca solo las que vayas a servir para que las demás no se derritan y recongelen.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Hokkyoku-no-Ice_Candy_Strawberry.jpg/960px-Hokkyoku-no-Ice_Candy_Strawberry.jpg",
    "photoAlt": "Paleta helada de fresa de color rosa claro; presentación ilustrativa",
    "photographer": "Tokumeigakarinoaoshima",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Hokkyoku-no-Ice_Candy_Strawberry.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "helado-de-vainilla-sin-maquina",
    "name": "Helado de vainilla sin máquina",
    "categoryLabel": "Cucharadas suaves, cero complicaciones",
    "tags": [
      "frios",
      "sin-horno",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 10,
    "prep": 20,
    "cook": 0,
    "rest": 375,
    "oven": 0,
    "description": "Crema montada y vainilla para tener un helado casero esperando en el congelador.",
    "equipment": "Batidora, recipiente frío, espátula y molde con tapa de unos 1.5 litros.",
    "ingredients": [
      {
        "name": "crema para batir muy fría, mínimo 35 % de grasa",
        "amount": 500.0,
        "unit": "ml",
        "group": "Helado"
      },
      {
        "name": "leche condensada fría",
        "amount": 397.0,
        "unit": "g",
        "group": "Helado"
      },
      {
        "name": "extracto de vainilla",
        "amount": 10.0,
        "unit": "ml",
        "group": "Helado"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Helado"
      }
    ],
    "steps": [
      {
        "title": "Enfría el equipo",
        "text": "Coloca recipiente y batidores 15 minutos en el refrigerador o unos minutos en el congelador. Mantén crema y leche condensada frías. No uses media crema: no monta igual que la crema para batir.",
        "minutes": 15,
        "cue": "Recipiente y batidores bien fríos."
      },
      {
        "title": "Perfuma la leche condensada",
        "text": "Mezcla leche condensada, vainilla y sal en un recipiente amplio. Ten lista una espátula para incorporar después la crema sin perder todo el aire. Esta versión no lleva huevo ni necesita cocción.",
        "minutes": 0,
        "cue": "Base lisa con vainilla bien repartida."
      },
      {
        "title": "Monta la crema",
        "text": "Bate la crema fría empezando suave y aumentando la velocidad. Detente cuando mantenga picos que se doblan apenas en la punta. Si se ve granulosa, ya va demasiado batida: no busques una textura de mantequilla.",
        "minutes": 0,
        "cue": "Picos medios a firmes, lisos y brillantes."
      },
      {
        "title": "Une con suavidad",
        "text": "Incorpora un tercio de la crema a la leche condensada para aligerarla. Añade el resto en dos tandas con movimientos envolventes desde el fondo. No uses la batidora después de unir ambas mezclas.",
        "minutes": 0,
        "cue": "Mezcla aireada sin vetas blancas grandes."
      },
      {
        "title": "Congela tapado",
        "text": "Vierte en el molde, alisa sin aplastar y cubre a contacto con película apta para alimentos antes de poner la tapa. Congela al menos 6 horas, mejor toda la noche. No necesita removerse durante la congelación.",
        "minutes": 360,
        "cue": "Helado firme, con el centro completamente congelado."
      },
      {
        "title": "Sirve con paciencia",
        "text": "Deja el recipiente 5–10 minutos en el refrigerador antes de servir, según la temperatura de tu congelador. Usa una cuchara ligeramente tibia y seca. Devuelve al frío de inmediato el helado que no vayas a servir.",
        "minutes": 0,
        "cue": "La cuchara entra sin romper el helado en bloques."
      }
    ],
    "tips": "El aire de la crema montada es lo que sustituye el trabajo de una máquina; incorpórala con suavidad.",
    "beforeYouStart": [
      "Usa crema de al menos 35 % de grasa, sin sustitutos vegetales.",
      "No uses leche evaporada en lugar de condensada.",
      "Elige un recipiente con tapa para evitar olores del congelador."
    ],
    "doneWhen": [
      "La mezcla conserva volumen antes de ir al congelador.",
      "Tras el reposo, el centro está firme y se puede servir después de templarlo brevemente."
    ],
    "troubleshooting": [
      {
        "problem": "Quedó denso.",
        "solution": "La crema se incorporó sin montar suficiente o perdió el aire al mezclar. Usa movimientos suaves."
      },
      {
        "problem": "Está muy duro al sacarlo.",
        "solution": "Es normal en un congelador frío. Témplalo unos minutos en el refrigerador y usa una cuchara tibia."
      }
    ],
    "storage": "Conserva bien tapado en el congelador hasta 3 semanas. Evita derretir y volver a congelar.",
    "servingTip": "Vainilla sola ya está bien; también acompaña el crumble de durazno de este recetario.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Vanilla_ice_cream_%2843128938082%29.jpg/960px-Vanilla_ice_cream_%2843128938082%29.jpg",
    "photoAlt": "Helado claro de vainilla servido en un plato",
    "photographer": "Joey Doll",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vanilla_ice_cream_(43128938082).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "banoffee-pie",
    "name": "Banoffee pie",
    "categoryLabel": "Plátano, dulce de leche y crema",
    "tags": [
      "frios",
      "sin-horno",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 8,
    "prep": 30,
    "cook": 0,
    "rest": 150,
    "oven": 0,
    "description": "Base de galleta, plátano en rebanadas y una nube de crema para terminar.",
    "equipment": "Molde de tarta de 22 cm, procesador o bolsa y rodillo, espátula y batidora.",
    "ingredients": [
      {
        "name": "galletas tipo Digestive o María",
        "amount": 220.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla derretida",
        "amount": 100.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "dulce de leche repostero listo para usar",
        "amount": 300.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "plátanos medianos maduros pero firmes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Relleno"
      },
      {
        "name": "crema para batir fría",
        "amount": 300.0,
        "unit": "ml",
        "group": "Cubierta"
      },
      {
        "name": "azúcar glass",
        "amount": 15.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Cubierta"
      },
      {
        "name": "cocoa sin azúcar",
        "amount": 5.0,
        "unit": "g",
        "group": "Cubierta"
      }
    ],
    "steps": [
      {
        "title": "Tritura las galletas",
        "text": "Muele las galletas o tritúralas en una bolsa resistente con rodillo. Mezcla con mantequilla derretida hasta humedecer todas las migas. Si quedan trozos grandes, la base se romperá más al cortar.",
        "minutes": 0,
        "cue": "Migas finas que se compactan al apretarlas."
      },
      {
        "title": "Forma la base",
        "text": "Presiona las migas en el molde con el fondo de un vaso, cubriendo fondo y laterales sin dejarlos demasiado gruesos. Refrigera al menos 2 horas. Esta base no se hornea y necesita el frío para sostenerse.",
        "minutes": 120,
        "cue": "Fondo y bordes firmes, de grosor parejo."
      },
      {
        "title": "Extiende el dulce de leche",
        "text": "Remueve el dulce de leche para suavizarlo y extiende sobre la base fría con una espátula. Usa un producto ya preparado; esta receta no requiere hervir latas cerradas ni cocinar leche condensada.",
        "minutes": 0,
        "cue": "Capa uniforme sin arrastrar las migas."
      },
      {
        "title": "Acomoda el plátano",
        "text": "Pela y corta los plátanos justo en este momento para reducir la oxidación. Acomoda en una o dos capas sin amontonar en el centro. Elige fruta madura con pulpa firme, no demasiado blanda.",
        "minutes": 0,
        "cue": "Rebanadas de 5 mm cubriendo el relleno."
      },
      {
        "title": "Monta la cubierta",
        "text": "Bate crema fría con azúcar glass y vainilla hasta que mantenga su forma. Extiende encima de todo el plátano para cubrirlo. Haz ondas con el dorso de una cuchara, sin comprimir la crema.",
        "minutes": 0,
        "cue": "Crema con picos firmes y superficie lisa."
      },
      {
        "title": "Termina y enfría",
        "text": "Tamiza cocoa sobre la crema y refrigera 30 minutos antes de servir. Si usaste molde desmontable, retira el aro con cuidado manteniendo apoyada la base. Corta con un cuchillo liso y sirve con espátula ancha.",
        "minutes": 30,
        "cue": "Tarta fría y relleno estable al cortar."
      }
    ],
    "tips": "Añade el plátano el día de servir; la base y el dulce de leche sí pueden quedar preparados desde la víspera.",
    "beforeYouStart": [
      "Usa dulce de leche espeso y listo para consumir.",
      "Enfría la crema y las varillas antes de batir.",
      "Busca plátanos amarillos con pocas manchas y pulpa firme."
    ],
    "doneWhen": [
      "La base fría se sostiene al sacar una porción.",
      "La crema mantiene las ondas y el dulce de leche no escurre como salsa."
    ],
    "troubleshooting": [
      {
        "problem": "La base se desarma.",
        "solution": "Tritura más fino, reparte bien la mantequilla y presiona antes de enfriar."
      },
      {
        "problem": "El plátano se oscurece.",
        "solution": "Córtalo justo al montar y cúbrelo por completo con crema; prepara la tarta el mismo día."
      }
    ],
    "storage": "Refrigera tapada hasta 2 días. La fruta luce mejor el primer día.",
    "servingTip": "Sirve porciones pequeñas al principio: el dulce de leche es generoso.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Banoffee_pie_with_chocolate_dusting%2C_January_2009.jpg/960px-Banoffee_pie_with_chocolate_dusting%2C_January_2009.jpg",
    "photoAlt": "Banoffee pie con rebanadas de plátano, crema y chocolate espolvoreado",
    "photographer": "Sarah",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Banoffee_pie_with_chocolate_dusting,_January_2009.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "crumble-de-durazno",
    "name": "Crumble de durazno",
    "categoryLabel": "Fruta tibia y migas crujientes",
    "tags": [
      "pasteles",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 6,
    "prep": 25,
    "cook": 35,
    "rest": 20,
    "oven": 180,
    "description": "Duraznos jugosos bajo una capa irregular de avena y mantequilla. Se sirve con cuchara.",
    "equipment": "Refractario de 20 × 20 cm o 22 cm redondo, recipiente y tenedor.",
    "ingredients": [
      {
        "name": "duraznos maduros firmes, ya sin hueso",
        "amount": 800.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "azúcar",
        "amount": 50.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "fécula de maíz",
        "amount": 15.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "jugo de limón",
        "amount": 15.0,
        "unit": "ml",
        "group": "Fruta"
      },
      {
        "name": "canela molida",
        "amount": 3.0,
        "unit": "g",
        "group": "Fruta"
      },
      {
        "name": "harina de trigo",
        "amount": 120.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "avena en hojuelas",
        "amount": 60.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "azúcar mascabado",
        "amount": 80.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "mantequilla fría en cubos",
        "amount": 100.0,
        "unit": "g",
        "group": "Cubierta"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Cubierta"
      }
    ],
    "steps": [
      {
        "title": "Corta los duraznos",
        "text": "Precalienta a 180 °C. Lava los duraznos, retira huesos y corta. Puedes dejar la piel si está fina. Los 800 g corresponden a fruta ya limpia; compra un poco más para compensar huesos y partes que retires.",
        "minutes": 0,
        "cue": "Gajos de unos 1.5 cm con tamaño parecido."
      },
      {
        "title": "Sazona la fruta",
        "text": "Mezcla azúcar, fécula y canela. Añade a los duraznos junto con limón y revuelve. Reparte en el refractario sin compactar demasiado. La fécula espesará los jugos durante el horneado.",
        "minutes": 0,
        "cue": "Gajos cubiertos de una capa fina, sin fécula suelta."
      },
      {
        "title": "Prepara las migas",
        "text": "Mezcla harina, avena, azúcar mascabado y sal. Añade mantequilla fría y frota con los dedos o un tenedor. Detente cuando haya migas de varios tamaños; no formes una masa lisa ni derritas la mantequilla.",
        "minutes": 0,
        "cue": "Mezcla arenosa con trozos del tamaño de un chícharo."
      },
      {
        "title": "Cubre sin aplastar",
        "text": "Distribuye las migas sobre la fruta, llegando a los bordes. No presiones: las aberturas dejan salir vapor y favorecen el crujido. Coloca el refractario sobre una charola si está muy lleno para recoger posibles jugos.",
        "minutes": 0,
        "cue": "Capa suelta con pequeñas aberturas para el vapor."
      },
      {
        "title": "Hornea",
        "text": "Hornea 30–40 minutos. No te guíes solo por el color: el relleno debe hervir suavemente para espesar la fécula. Si las migas ya están doradas y la fruta sigue firme, cubre con aluminio y continúa unos minutos.",
        "minutes": 35,
        "cue": "Cubierta dorada y jugo burbujeando también cerca del centro."
      },
      {
        "title": "Deja reposar",
        "text": "Espera 15–20 minutos fuera del horno. Sirve con una cuchara grande tomando fruta y cubierta. El reposo evita que los jugos salgan demasiado líquidos y permite comerlo tibio sin quemarse.",
        "minutes": 20,
        "cue": "Jugos algo espesos y fruta tierna."
      }
    ],
    "tips": "Con fruta más madura puede hacer falta menos tiempo; busca gajos tiernos y jugos que burbujeen.",
    "beforeYouStart": [
      "Usa duraznos frescos firmes para este tiempo y proporción.",
      "Mantén la mantequilla de la cubierta fría hasta usarla.",
      "El refractario debe tener al menos 4 cm de profundidad."
    ],
    "doneWhen": [
      "Un cuchillo entra con facilidad en un gajo del centro.",
      "Los jugos burbujean bajo las migas y la cubierta está dorada."
    ],
    "troubleshooting": [
      {
        "problem": "El relleno está aguado.",
        "solution": "Necesita hervir durante el horneado y reposar al salir; no lo retires solo porque la cubierta tomó color."
      },
      {
        "problem": "La cubierta parece una costra dura.",
        "solution": "Se compactó o se mezcló demasiado. Deja migas sueltas de distintos tamaños en la próxima preparación."
      }
    ],
    "storage": "Refrigera tapado hasta 3 días. Recalienta destapado en horno a 170 °C para recuperar parte del crujido.",
    "servingTip": "Una bola del helado de vainilla del recetario sobre el crumble tibio queda muy bien.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Leftover_peach_crumble_at_3PM_on_a_Saturday%3F_Sure%2C_why_not%3F_%289328443401%29.jpg",
    "photoAlt": "Crumble de durazno con una cubierta de migas horneadas",
    "photographer": "Neil Conway from Oakland, USA",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Leftover_peach_crumble_at_3PM_on_a_Saturday%3F_Sure,_why_not%3F_(9328443401).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0"
  },
  {
    "id": "profiteroles-con-crema",
    "name": "Profiteroles con crema",
    "categoryLabel": "Huecos por dentro, llenos al final",
    "tags": [
      "pasteles",
      "chocolate",
      "recientes"
    ],
    "difficulty": "Elaborada",
    "servings": 20,
    "prep": 45,
    "cook": 35,
    "rest": 60,
    "oven": 200,
    "description": "Pequeñas piezas de pasta choux con crema de vainilla y chocolate por encima.",
    "equipment": "Cazo, espátula firme, manga pastelera, charola, papel para hornear y batidora.",
    "ingredients": [
      {
        "name": "agua",
        "amount": 125.0,
        "unit": "ml",
        "group": "Pasta choux"
      },
      {
        "name": "leche entera",
        "amount": 125.0,
        "unit": "ml",
        "group": "Pasta choux"
      },
      {
        "name": "mantequilla",
        "amount": 100.0,
        "unit": "g",
        "group": "Pasta choux"
      },
      {
        "name": "azúcar",
        "amount": 5.0,
        "unit": "g",
        "group": "Pasta choux"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Pasta choux"
      },
      {
        "name": "harina de trigo",
        "amount": 150.0,
        "unit": "g",
        "group": "Pasta choux"
      },
      {
        "name": "huevos grandes, puede sobrar parte del último",
        "amount": 4.0,
        "unit": "pzas",
        "group": "Pasta choux"
      },
      {
        "name": "crema para batir muy fría",
        "amount": 350.0,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "azúcar glass",
        "amount": 30.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "chocolate semiamargo picado",
        "amount": 120.0,
        "unit": "g",
        "group": "Chocolate"
      },
      {
        "name": "crema para batir",
        "amount": 120.0,
        "unit": "ml",
        "group": "Chocolate"
      }
    ],
    "steps": [
      {
        "title": "Cocina la panada",
        "text": "Precalienta a 200 °C. Hierve agua, leche, mantequilla, azúcar y sal. Retira, agrega toda la harina y remueve. Regresa a fuego medio-bajo 2–3 minutos, moviendo, hasta que la masa se una y deje una fina película en el cazo.",
        "minutes": 0,
        "cue": "Bola de masa y una película fina en el fondo del cazo."
      },
      {
        "title": "Añade huevo poco a poco",
        "text": "Pasa a un recipiente y deja templar 5–10 minutos. Bate los huevos aparte y agrégalos en pequeñas tandas, mezclando por completo entre cada una. Detente al conseguir la V lenta de la espátula; quizá no necesites todo el huevo.",
        "minutes": 10,
        "cue": "Masa brillante que cae de la espátula formando una V."
      },
      {
        "title": "Forma las piezas",
        "text": "Pon la masa en una manga con boquilla lisa grande. Forma montículos separados 5 cm sobre la charola forrada. Baja las puntas con un dedo apenas húmedo para evitar que se quemen. No aplastes las piezas.",
        "minutes": 0,
        "cue": "20 montículos de unos 4 cm, con puntas alisadas."
      },
      {
        "title": "Hornea y seca",
        "text": "Hornea 15 minutos a 200 °C y, sin abrir, baja a 180 °C otros 18–22 minutos. No abras durante los primeros 25 minutos. Al dorarse, perfora un lateral con una brocheta y deja 5 minutos en el horno apagado, puerta entreabierta, para sacar vapor.",
        "minutes": 35,
        "cue": "Piezas bien infladas, doradas y ligeras."
      },
      {
        "title": "Prepara el relleno",
        "text": "Enfría las piezas en rejilla unos 30 minutos. Bate los 350 ml de crema fría con azúcar glass y vainilla hasta picos firmes. Abre cada pieza por la mitad y rellena con manga o cuchara. Refrigera mientras terminas el chocolate.",
        "minutes": 50,
        "cue": "Piezas frías y crema firme pero lisa."
      },
      {
        "title": "Termina con chocolate",
        "text": "Calienta los 120 ml de crema hasta humear y vierte sobre el chocolate. Espera 2 minutos y remueve desde el centro. Deja templar para que no derrita el relleno y vierte una pequeña cantidad sobre los profiteroles justo antes de servir.",
        "minutes": 0,
        "cue": "Salsa lisa que cae en una cinta."
      }
    ],
    "tips": "La cantidad de huevo depende de cuánto se secó la panada; la textura en V es más fiable que vaciar los cuatro de golpe.",
    "beforeYouStart": [
      "Pesa todos los ingredientes antes de encender el fuego.",
      "Reserva el último huevo batido para añadirlo por cucharadas.",
      "El horno debe estar bien caliente y no se abre al principio."
    ],
    "doneWhen": [
      "La corteza está dorada también en los pliegues, no solo en las puntas.",
      "Una pieza abierta tiene un hueco interior y paredes cocidas, sin pasta húmeda gruesa."
    ],
    "troubleshooting": [
      {
        "problem": "Se desinflaron al salir.",
        "solution": "Faltó cocción o secado. Dora bien toda la pieza y libera el vapor al final."
      },
      {
        "problem": "La masa se extendió como un disco.",
        "solution": "Se añadió demasiado huevo. En la siguiente tanda incorpora el último poco a poco y detente al formar la V."
      }
    ],
    "storage": "Las piezas vacías se conservan hasta 1 día en recipiente seco o se congelan 1 mes. Rellenas, refrigera y consume el mismo día.",
    "servingTip": "Rellena poco antes de servir para conservar el contraste entre corteza y crema.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Homemade_profiteroles.jpg/960px-Homemade_profiteroles.jpg",
    "photoAlt": "Profiteroles caseros cubiertos con salsa de chocolate",
    "photographer": "Bellunese",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Homemade_profiteroles.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  {
    "id": "panque-de-limon",
    "name": "Panqué de limón",
    "categoryLabel": "Ralladura, glaseado y una rebanada más",
    "tags": [
      "pasteles",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 10,
    "prep": 25,
    "cook": 50,
    "rest": 60,
    "oven": 175,
    "description": "Miga de mantequilla y una capa fina de glaseado de limón que cae por los lados.",
    "equipment": "Molde de panqué de 23 × 13 cm, papel para hornear, rallador y batidora.",
    "ingredients": [
      {
        "name": "mantequilla suave",
        "amount": 150.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "azúcar",
        "amount": 170.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "huevos grandes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Panqué"
      },
      {
        "name": "harina de trigo",
        "amount": 220.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "polvo para hornear",
        "amount": 8.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "yogur natural sin azúcar",
        "amount": 100.0,
        "unit": "g",
        "group": "Panqué"
      },
      {
        "name": "limones, solo ralladura",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Panqué"
      },
      {
        "name": "jugo de limón",
        "amount": 30.0,
        "unit": "ml",
        "group": "Panqué"
      },
      {
        "name": "azúcar glass",
        "amount": 100.0,
        "unit": "g",
        "group": "Glaseado"
      },
      {
        "name": "jugo de limón, aproximadamente",
        "amount": 20.0,
        "unit": "ml",
        "group": "Glaseado"
      }
    ],
    "steps": [
      {
        "title": "Perfuma el azúcar",
        "text": "Precalienta a 175 °C. Engrasa y forra el molde dejando papel que sobresalga a los lados. Lava y seca los limones. Frota su ralladura con el azúcar, sin llegar a la parte blanca de la piel.",
        "minutes": 0,
        "cue": "Azúcar húmeda y aromática."
      },
      {
        "title": "Bate la base",
        "text": "Bate mantequilla y azúcar aromatizada 3 minutos. Incorpora los huevos uno a uno, raspando el recipiente entre cada adición. Si la mezcla se ve algo cortada, sigue con los secos; no calientes la masa.",
        "minutes": 0,
        "cue": "Crema clara, sin grandes grumos de mantequilla."
      },
      {
        "title": "Completa la mezcla",
        "text": "Mezcla harina, polvo de hornear y sal. Incorpora a la crema alternando con yogur y los 30 ml de jugo. Termina de unir con espátula en cuanto desaparezca la harina. Vierte y alisa en el molde.",
        "minutes": 0,
        "cue": "Masa espesa y homogénea, sin sobrebatir."
      },
      {
        "title": "Hornea",
        "text": "Hornea 45–55 minutos. Revisa el centro con una brocheta, porque los bordes se cuecen antes. Si la superficie dora demasiado, cubre flojamente con aluminio después del minuto 35.",
        "minutes": 50,
        "cue": "Grieta central cocida y brocheta sin masa cruda."
      },
      {
        "title": "Enfría",
        "text": "Espera 15 minutos en el molde. Levanta usando el papel y pasa a una rejilla para enfriar otros 45 minutos, o hasta estar completamente frío. Retira el papel antes de glasear.",
        "minutes": 60,
        "cue": "Panqué firme y sin calor al tocar el centro."
      },
      {
        "title": "Pon el glaseado",
        "text": "Mezcla azúcar glass con el jugo del glaseado de a cucharaditas; quizá no necesites todo. Vierte sobre el panqué frío y deja que se asiente antes de cortar. Un glaseado sobre pan caliente se absorberá en la miga.",
        "minutes": 0,
        "cue": "Cubierta espesa que cae lentamente de la cuchara."
      }
    ],
    "tips": "La ralladura aporta mucho aroma sin añadir líquido de más; ralla antes de exprimir los limones.",
    "beforeYouStart": [
      "Saca huevos y mantequilla con anticipación para que estén a temperatura ambiente.",
      "Usa yogur natural espeso, sin fruta.",
      "Reserva el jugo del glaseado por separado."
    ],
    "doneWhen": [
      "La brocheta sale con algunas migas, sin pasta cruda.",
      "La grieta del centro se ve cocida, no brillante y líquida."
    ],
    "troubleshooting": [
      {
        "problem": "Se doró arriba pero está crudo.",
        "solution": "Cubre flojamente y continúa en tandas de 5 minutos; comprueba el tamaño del molde."
      },
      {
        "problem": "El glaseado está transparente.",
        "solution": "Añade un poco más de azúcar glass y espera a que el panqué esté completamente frío."
      }
    ],
    "storage": "Guarda hermético hasta 3 días en lugar fresco. Congela rebanadas sin glasear hasta 1 mes.",
    "servingTip": "Corta rebanadas gruesas y acompaña con té o café.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Lemon_Drizzle_Slice_-_Caf%C3%A9_W_2025-12-26.jpg/960px-Lemon_Drizzle_Slice_-_Caf%C3%A9_W_2025-12-26.jpg",
    "photoAlt": "Rebanada de pastel de limón glaseado servida en un plato",
    "photographer": "Andy Li",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Lemon_Drizzle_Slice_-_Caf%C3%A9_W_2025-12-26.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  {
    "id": "natillas-de-vainilla",
    "name": "Natillas de vainilla",
    "categoryLabel": "Cuchara, canela y galleta",
    "tags": [
      "frios",
      "sin-horno",
      "de-casa",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 6,
    "prep": 20,
    "cook": 8,
    "rest": 135,
    "oven": 0,
    "description": "Una crema suave de vainilla con su galleta encima y una pizca de canela.",
    "equipment": "Cazo de fondo grueso, batidor, colador y 6 recipientes pequeños.",
    "ingredients": [
      {
        "name": "leche entera",
        "amount": 600.0,
        "unit": "ml",
        "group": "Natillas"
      },
      {
        "name": "yemas grandes",
        "amount": 4.0,
        "unit": "pzas",
        "group": "Natillas"
      },
      {
        "name": "azúcar",
        "amount": 75.0,
        "unit": "g",
        "group": "Natillas"
      },
      {
        "name": "fécula de maíz",
        "amount": 20.0,
        "unit": "g",
        "group": "Natillas"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Natillas"
      },
      {
        "name": "galletas María",
        "amount": 6.0,
        "unit": "pzas",
        "group": "Acabado"
      },
      {
        "name": "canela molida",
        "amount": 2.0,
        "unit": "g",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Reserva leche fría",
        "text": "Separa 100 ml de la leche y disuelve en ella la fécula. Calienta los otros 500 ml en un cazo hasta que humee, sin dejar que se derrame. Prepara los recipientes antes de empezar a espesar.",
        "minutes": 0,
        "cue": "Fécula completamente disuelta, sin grumos."
      },
      {
        "title": "Mezcla las yemas",
        "text": "Bate yemas con azúcar hasta unir, sin dejar reposar el azúcar sobre las yemas sin mezclar. Añade la leche fría con fécula y remueve. Usa solo las yemas; las claras pueden reservarse para otra receta.",
        "minutes": 0,
        "cue": "Base amarilla uniforme."
      },
      {
        "title": "Templa la mezcla",
        "text": "Vierte la mitad de la leche caliente poco a poco sobre las yemas mientras bates. Regresa todo al cazo con el resto de la leche y mezcla antes de volver al fuego.",
        "minutes": 0,
        "cue": "Yemas integradas sin hebras cocidas."
      },
      {
        "title": "Cocina removiendo",
        "text": "Cocina a fuego medio-bajo, raspando fondo y esquinas. Cuando aparezcan las primeras burbujas suaves y espese, cocina 1 minuto más sin dejar de mover. Retira, añade vainilla y cuela si notas algún grumo.",
        "minutes": 8,
        "cue": "Crema que cubre la cuchara y conserva un surco suave."
      },
      {
        "title": "Reparte y enfría",
        "text": "Vierte en los recipientes y deja templar unos 15 minutos. Tapa a contacto con película apta para alimentos si no quieres costra y refrigera al menos 2 horas. No intentes desmoldarlas: son una crema suave.",
        "minutes": 135,
        "cue": "Crema fría y más firme, todavía de cuchara."
      },
      {
        "title": "Termina al servir",
        "text": "Retira la película, coloca una galleta sobre cada porción y espolvorea canela. Si prefieres la galleta blanda, colócala mientras la crema aún está templada y refrigera todo junto.",
        "minutes": 0,
        "cue": "Galleta colocada sin romper la superficie."
      }
    ],
    "tips": "La fécula requiere un breve hervor suave; remover de forma continua evita que el fondo se pegue.",
    "beforeYouStart": [
      "Disuelve la fécula únicamente en leche fría.",
      "Ten los recipientes listos: la crema espesa rápido.",
      "La galleta se puede añadir al final para que conserve algo de crujido."
    ],
    "doneWhen": [
      "La crema cubre el dorso de una cuchara y no tiene sabor a fécula cruda.",
      "En frío conserva una textura suave, sin líquido separado."
    ],
    "troubleshooting": [
      {
        "problem": "Hay grumos.",
        "solution": "Cuela aún caliente y bate suavemente. La próxima vez templa las yemas más despacio."
      },
      {
        "problem": "Se pegó el fondo.",
        "solution": "Pasa la parte superior a otro recipiente sin raspar lo quemado; usa fuego más bajo y remueve las esquinas."
      }
    ],
    "storage": "Mantén tapadas en el refrigerador hasta 3 días. No congeles.",
    "servingTip": "Sirve bien frías, con una cuchara pequeña y canela recién espolvoreada.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Natillas-caseras-con-galleta-venta-aurelio-restaurante-chipiona.JPG",
    "photoAlt": "Natillas de vainilla con galleta María y canela",
    "photographer": "Venta Aurelio",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Natillas-caseras-con-galleta-venta-aurelio-restaurante-chipiona.JPG",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 3.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  {
    "id": "merenguitos",
    "name": "Merenguitos",
    "categoryLabel": "Pequeños, ligeros y crujientes",
    "tags": [
      "galletas",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 30,
    "prep": 25,
    "cook": 90,
    "rest": 60,
    "oven": 100,
    "description": "Un bocado de vainilla que primero cruje y luego se deshace.",
    "equipment": "Batidora, recipiente de metal o vidrio, manga con boquilla y dos charolas.",
    "ingredients": [
      {
        "name": "claras de huevo, aproximadamente 3 grandes",
        "amount": 100.0,
        "unit": "g",
        "group": "Merengue"
      },
      {
        "name": "azúcar blanca fina",
        "amount": 200.0,
        "unit": "g",
        "group": "Merengue"
      },
      {
        "name": "jugo de limón",
        "amount": 5.0,
        "unit": "ml",
        "group": "Merengue"
      },
      {
        "name": "vainilla",
        "amount": 3.0,
        "unit": "ml",
        "group": "Merengue"
      }
    ],
    "steps": [
      {
        "title": "Limpia el equipo",
        "text": "Precalienta a 100 °C. Forra las charolas con papel para hornear. Pesa las claras: la proporción usa el doble de azúcar que de claras por peso. Una pequeña cantidad de grasa dificulta el montado.",
        "minutes": 0,
        "cue": "Recipiente y varillas sin grasa ni yema."
      },
      {
        "title": "Empieza a batir",
        "text": "Bate las claras a velocidad media hasta espumar. Añade limón y continúa hasta obtener picos suaves. No añadas toda el azúcar desde el principio porque tarda más en incorporar aire.",
        "minutes": 0,
        "cue": "Espuma blanca con burbuja fina."
      },
      {
        "title": "Añade azúcar despacio",
        "text": "Agrega el azúcar cucharada a cucharada, batiendo 15–20 segundos entre adiciones. Continúa hasta que el merengue mantenga una punta firme. Incorpora vainilla al final. No debe verse opaco ni separado.",
        "minutes": 0,
        "cue": "Picos firmes y brillantes, casi sin grano al frotar."
      },
      {
        "title": "Forma los bocados",
        "text": "Pasa a una manga y forma pequeños besos sobre el papel, dejando 2 cm de separación. Para fijar el papel, pon una gotita de merengue debajo de las esquinas. Evita hacer piezas muy grandes junto a pequeñas.",
        "minutes": 0,
        "cue": "30 montículos de unos 3 cm, separados."
      },
      {
        "title": "Seca a temperatura baja",
        "text": "Hornea 75–90 minutos a 100 °C. Deben secarse sin dorarse. Revisa uno: si el centro sigue pegajoso, prolonga en tandas de 10 minutos. Si toman color, baja la temperatura unos 10 °C.",
        "minutes": 90,
        "cue": "Superficie seca y pieza que se despega del papel."
      },
      {
        "title": "Enfría dentro",
        "text": "Apaga el horno y deja enfriar dentro con la puerta entreabierta aproximadamente 1 hora. Guarda de inmediato cuando estén fríos; absorben humedad del ambiente con facilidad. Comprueba el centro de una pieza antes de envasar.",
        "minutes": 60,
        "cue": "Interior seco y crujiente al partir una pieza fría."
      }
    ],
    "tips": "En un día húmedo pueden tardar más en secarse y se ablandan antes; guárdalos herméticamente.",
    "beforeYouStart": [
      "Usa un recipiente de metal o vidrio muy limpio.",
      "Pesa las claras en gramos para mantener la proporción.",
      "El secado es largo y a temperatura baja; no intentes acelerarlo con calor fuerte."
    ],
    "doneWhen": [
      "Una pieza fría se despega sin dejar una base húmeda.",
      "El interior está seco, sin una franja pegajosa gruesa."
    ],
    "troubleshooting": [
      {
        "problem": "No montaron.",
        "solution": "Puede haber grasa o yema. Limpia el equipo y comienza con claras nuevas."
      },
      {
        "problem": "Se pusieron pegajosos después.",
        "solution": "Absorbieron humedad. Puedes secarlos otra vez a 90 °C unos minutos y enfriar antes de cerrar."
      }
    ],
    "storage": "Conserva en recipiente hermético en lugar seco hasta 1 semana. No refrigeres.",
    "servingTip": "Sirve algunos solos y usa los pequeños para acompañar fruta y crema.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Vegan_meringue_kisses_%28cropped%29_1.jpg",
    "photoAlt": "Pequeños merengues blancos de forma estriada; presentación ilustrativa",
    "photographer": "Hagar Or Ringel Maman (הגר אור רינגל ממן)",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vegan_meringue_kisses_(cropped)_1.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 3.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  {
    "id": "tarta-de-pera-y-almendra",
    "name": "Tarta de pera y almendra",
    "categoryLabel": "Fruta dorada y crema de almendra",
    "tags": [
      "pasteles",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 8,
    "prep": 45,
    "cook": 45,
    "rest": 60,
    "oven": 180,
    "description": "Peras en abanico sobre un relleno de almendra que se dora alrededor.",
    "equipment": "Molde de tarta de 23 cm, rodillo, papel para hornear y batidora o espátula.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 200.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla fría",
        "amount": 100.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "azúcar glass",
        "amount": 50.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "yema",
        "amount": 1.0,
        "unit": "pza",
        "group": "Base"
      },
      {
        "name": "agua fría, aproximadamente",
        "amount": 25.0,
        "unit": "ml",
        "group": "Base"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Base"
      },
      {
        "name": "mantequilla suave",
        "amount": 80.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "azúcar",
        "amount": 80.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "almendra molida",
        "amount": 100.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "huevo grande",
        "amount": 1.0,
        "unit": "pza",
        "group": "Relleno"
      },
      {
        "name": "harina de trigo",
        "amount": 10.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Relleno"
      },
      {
        "name": "peras medianas maduras pero firmes",
        "amount": 3.0,
        "unit": "pzas",
        "group": "Fruta"
      },
      {
        "name": "jugo de limón",
        "amount": 10.0,
        "unit": "ml",
        "group": "Fruta"
      }
    ],
    "steps": [
      {
        "title": "Haz la base",
        "text": "Frota harina, azúcar glass y sal con mantequilla fría hasta obtener migas. Incorpora yema y agua poco a poco, solo hasta unir. Aplana en un disco, envuelve y refrigera 30 minutos.",
        "minutes": 30,
        "cue": "Masa que se une sin amasar demasiado."
      },
      {
        "title": "Forra el molde",
        "text": "Estira entre papeles y acomoda en el molde sin tirar de la masa. Recorta el borde, pincha el fondo y refrigera 15 minutos. Precalienta a 180 °C. La base se hornea junto con el relleno, sin pesos.",
        "minutes": 15,
        "cue": "Base de 3 mm bien apoyada en las esquinas."
      },
      {
        "title": "Prepara la almendra",
        "text": "Mezcla mantequilla suave con azúcar hasta alisar. Añade huevo y vainilla; incorpora almendra molida y los 10 g de harina. No batas para meter mucho aire: busca una pasta uniforme.",
        "minutes": 0,
        "cue": "Crema homogénea y fácil de extender."
      },
      {
        "title": "Acomoda las peras",
        "text": "Pela, parte y retira el corazón de las peras. Frota con limón y corta cada mitad en láminas sin separarlas del todo. Extiende la crema de almendra sobre la base fría y acomoda las mitades, abriéndolas apenas.",
        "minutes": 0,
        "cue": "Láminas finas con forma de abanico."
      },
      {
        "title": "Hornea",
        "text": "Hornea 40–50 minutos en una posición media-baja para cocinar el fondo. Comprueba la crema entre las peras con una brocheta: no debe salir pasta líquida. Si el borde dora antes, protégelo con tiras de aluminio.",
        "minutes": 45,
        "cue": "Relleno dorado y firme también junto a la fruta."
      },
      {
        "title": "Deja que se asiente",
        "text": "Deja templar al menos 15 minutos antes de retirar el aro, siempre con el fondo apoyado. Sirve tibia o termina de enfriar sobre rejilla. No la cortes recién salida: el relleno aún es muy delicado.",
        "minutes": 15,
        "cue": "Relleno estable y base que se sostiene."
      }
    ],
    "tips": "Peras demasiado duras pueden quedar crudas; usa fruta madura que aún se pueda cortar en láminas limpias.",
    "beforeYouStart": [
      "La almendra molida debe ser fina, no mantequilla de almendra.",
      "Separa la mantequilla fría de la base y la suave del relleno.",
      "Escoge peras de tamaño similar para una cocción pareja."
    ],
    "doneWhen": [
      "El relleno de almendra está dorado y no tiembla como líquido.",
      "Un cuchillo entra en las peras sin resistencia fuerte."
    ],
    "troubleshooting": [
      {
        "problem": "La base quedó pálida.",
        "solution": "Coloca en una rejilla algo más baja y verifica la cocción del fondo antes de retirar."
      },
      {
        "problem": "El relleno se hundió al cortar.",
        "solution": "Faltó cocción o reposo. Comprueba la zona junto a la fruta y deja templar antes de servir."
      }
    ],
    "storage": "Refrigera tapada hasta 3 días. Recalienta suavemente si la quieres tibia.",
    "servingTip": "Una porción tibia y una cucharada de crema sin azúcar son suficientes.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Tarte_Bourdaloue.jpg/960px-Tarte_Bourdaloue.jpg",
    "photoAlt": "Tarta de pera con relleno dorado y fruta en abanico",
    "photographer": "traaf",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Tarte_Bourdaloue.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
  },
  {
    "id": "blondies-de-chocolate-blanco",
    "name": "Blondies de chocolate blanco",
    "categoryLabel": "Vainilla, nuez y centro tierno",
    "tags": [
      "chocolate",
      "pasteles",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 16,
    "prep": 20,
    "cook": 25,
    "rest": 60,
    "oven": 175,
    "description": "Cuadritos de mantequilla y azúcar mascabado con chocolate blanco en trozos.",
    "equipment": "Molde cuadrado de 20 × 20 cm, papel para hornear, batidor manual y espátula.",
    "ingredients": [
      {
        "name": "mantequilla derretida y tibia",
        "amount": 150.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "azúcar mascabado",
        "amount": 180.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Masa"
      },
      {
        "name": "vainilla",
        "amount": 10.0,
        "unit": "ml",
        "group": "Masa"
      },
      {
        "name": "harina de trigo",
        "amount": 190.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "polvo para hornear",
        "amount": 3.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "sal",
        "amount": 2.0,
        "unit": "g",
        "group": "Masa"
      },
      {
        "name": "chocolate blanco picado",
        "amount": 120.0,
        "unit": "g",
        "group": "Trozos"
      },
      {
        "name": "nuez picada",
        "amount": 70.0,
        "unit": "g",
        "group": "Trozos"
      }
    ],
    "steps": [
      {
        "title": "Prepara el molde",
        "text": "Precalienta a 175 °C. Coloca papel para hornear en el molde y engrasa apenas los lados expuestos. Derrite la mantequilla y deja que pierda el calor fuerte antes de mezclar con huevo.",
        "minutes": 0,
        "cue": "Molde forrado con papel que sobresale por dos lados."
      },
      {
        "title": "Une azúcar y mantequilla",
        "text": "Mezcla mantequilla tibia con azúcar mascabado a mano durante 1 minuto. Añade huevos y vainilla, batiendo solo para integrar. No hace falta montar mucho aire: buscamos una textura compacta y tierna.",
        "minutes": 0,
        "cue": "Mezcla espesa y brillante."
      },
      {
        "title": "Incorpora los secos",
        "text": "Mezcla harina, polvo de hornear y sal. Incorpora con espátula hasta que apenas desaparezcan los secos. Detente antes de seguir trabajando la masa; el batido excesivo puede endurecer los cuadritos.",
        "minutes": 0,
        "cue": "Masa uniforme, sin harina en el fondo."
      },
      {
        "title": "Reparte los trozos",
        "text": "Añade chocolate blanco y nuez. Vierte en el molde y extiende con la espátula hasta nivelar. Reserva algunos trozos si quieres ponerlos por encima, presionando ligeramente para que se adhieran.",
        "minutes": 0,
        "cue": "Chocolate y nuez distribuidos hasta las esquinas."
      },
      {
        "title": "Hornea",
        "text": "Hornea 23–28 minutos. Prueba el centro evitando un trozo de chocolate derretido. No esperes que la brocheta salga totalmente seca; deben mantener humedad sin quedar crudos.",
        "minutes": 25,
        "cue": "Bordes firmes y centro con migas húmedas, no masa líquida."
      },
      {
        "title": "Enfría y corta",
        "text": "Deja enfriar en el molde al menos 1 hora. Levanta por el papel y corta 16 cuadrados con cuchillo limpio. Para cortes más definidos, refrigera brevemente una vez frío y deja templar antes de servir.",
        "minutes": 60,
        "cue": "La pieza se levanta del molde sin doblarse demasiado."
      }
    ],
    "tips": "El chocolate blanco se funde al probar con brocheta: revisa también la miga para no confundirlo con masa cruda.",
    "beforeYouStart": [
      "Usa mantequilla tibia, nunca recién hirviendo.",
      "Pica chocolate y nuez en trozos pequeños.",
      "El molde de 20 cm determina el grosor y el tiempo."
    ],
    "doneWhen": [
      "Los bordes se ven firmes y el centro no tiene movimiento líquido.",
      "Al enfriar, el interior es tierno y compacto."
    ],
    "troubleshooting": [
      {
        "problem": "Quedaron secos.",
        "solution": "Reduce unos minutos el horneado y retira con migas húmedas en la brocheta."
      },
      {
        "problem": "Se rompen al levantar.",
        "solution": "Espera a que enfríen en el molde; calientes todavía no tienen estructura para cortarse."
      }
    ],
    "storage": "Guarda herméticos hasta 3 días en lugar fresco o congela hasta 1 mes.",
    "servingTip": "Corta cuadritos pequeños: van muy bien con café sin demasiado azúcar.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Blondies_caseros_postre.jpg/960px-Blondies_caseros_postre.jpg",
    "photoAlt": "Cuadrados de blondie de miga dorada; presentación ilustrativa",
    "photographer": "Almanutri",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Blondies_caseros_postre.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
  },
  {
    "id": "pudin-de-chia-con-arandanos",
    "name": "Pudín de chía con arándanos",
    "categoryLabel": "Vasitos de fruta y vainilla",
    "tags": [
      "frios",
      "sin-horno",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 4,
    "prep": 20,
    "cook": 0,
    "rest": 250,
    "oven": 0,
    "description": "Chía hidratada, yogur y arándanos en capas para sacar del refrigerador.",
    "equipment": "Recipiente con tapa, batidor, licuadora o tenedor y 4 vasos.",
    "ingredients": [
      {
        "name": "leche entera o bebida vegetal sin azúcar",
        "amount": 400.0,
        "unit": "ml",
        "group": "Pudín"
      },
      {
        "name": "semillas de chía",
        "amount": 70.0,
        "unit": "g",
        "group": "Pudín"
      },
      {
        "name": "miel",
        "amount": 30.0,
        "unit": "g",
        "group": "Pudín"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Pudín"
      },
      {
        "name": "arándanos azules frescos",
        "amount": 300,
        "unit": "g",
        "group": "Capas"
      },
      {
        "name": "yogur natural sin azúcar",
        "amount": 150.0,
        "unit": "g",
        "group": "Capas"
      },
      {
        "name": "jugo de limón",
        "amount": 10.0,
        "unit": "ml",
        "group": "Capas"
      }
    ],
    "steps": [
      {
        "title": "Mezcla la base",
        "text": "Bate leche, miel y vainilla hasta disolver. Añade chía en lluvia mientras remueves con el batidor. Raspa el fondo y los lados para que las semillas no queden amontonadas en una zona.",
        "minutes": 0,
        "cue": "Semillas repartidas sin grupos secos."
      },
      {
        "title": "Remueve otra vez",
        "text": "Deja reposar 10 minutos y vuelve a remover bien. Este segundo mezclado separa los grumos antes de que terminen de hidratarse. Si ves alguno, deshazlo con la cuchara ahora, no al final del frío.",
        "minutes": 10,
        "cue": "La mezcla empieza a espesar de manera uniforme."
      },
      {
        "title": "Hidrata en frío",
        "text": "Tapa y refrigera al menos 4 horas, mejor toda la noche. Remueve al sacar. Si quedó más espeso de lo que prefieres, añade una cucharada de leche por vez; no lo diluyas de golpe.",
        "minutes": 240,
        "cue": "Textura espesa de cuchara, sin una capa de leche separada."
      },
      {
        "title": "Prepara los arándanos",
        "minutes": 0,
        "cue": "Fruta limpia y bien escurrida.",
        "text": "Lava y seca los arándanos. Aplasta 200 g con un tenedor y mezcla con el limón; deja los otros 100 g enteros. No añadas agua al puré. Prueba la fruta antes de endulzar más."
      },
      {
        "title": "Arma las capas",
        "text": "Reparte el pudín entre los vasos. Agrega una capa de yogur y después los arándanos aplastados. Usa el dorso de una cuchara para poner las capas suavemente y mantenerlas visibles.",
        "minutes": 0,
        "cue": "Cuatro vasos con pudín, yogur y mango."
      },
      {
        "title": "Termina y sirve",
        "text": "Reparte los arándanos enteros por encima. Sirve frío o tapa cada vaso y devuelve al refrigerador hasta el momento de comer. Si preparas con anticipación, la fruta luce mejor añadida el mismo día.",
        "minutes": 0,
        "cue": "Cubitos frescos y vasos fríos."
      }
    ],
    "tips": "El segundo mezclado a los 10 minutos evita casi todos los grumos de semillas sin hidratar.",
    "beforeYouStart": [
      "Compra chía entera, no molida.",
      "Usa arándanos azules frescos, lavados y bien secos.",
      "El reposo es indispensable aunque la mezcla parezca espesa al principio."
    ],
    "doneWhen": [
      "Las semillas tienen una capa de gel visible y no están secas por dentro.",
      "Al remover, la mezcla mantiene una textura uniforme sin leche separada."
    ],
    "troubleshooting": [
      {
        "problem": "Quedaron grumos.",
        "solution": "Sepáralos con batidor y deja más tiempo de hidratación; remueve de nuevo a los 10 minutos la próxima vez."
      },
      {
        "problem": "Está demasiado líquido.",
        "solution": "Dale el reposo completo y comprueba las cantidades; la chía necesita varias horas para hidratarse."
      }
    ],
    "storage": "Refrigera tapado hasta 3 días. Añade los arándanos enteros el día de servir.",
    "servingTip": "Usa vasos transparentes para ver las capas y mezcla con la cuchara al comer.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Chia_jars_with_bleuberries_%28Unsplash%29.jpg/960px-Chia_jars_with_bleuberries_%28Unsplash%29.jpg",
    "photoAlt": "Vasos de pudín de chía con yogur, arándanos y kiwi; presentación ilustrativa",
    "photographer": "Brenda Godinez cravethebenefits",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chia_jars_with_bleuberries_(Unsplash).jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
  },
  {
    "id": "crepas-con-cajeta",
    "name": "Crepas con cajeta",
    "categoryLabel": "Dobladitas y recién hechas",
    "tags": [
      "sin-horno",
      "de-casa",
      "recientes"
    ],
    "difficulty": "Intermedia",
    "servings": 6,
    "prep": 30,
    "cook": 20,
    "rest": 30,
    "oven": 0,
    "description": "Crepas finas, cajeta tibia y nueces por encima. Dos por persona para empezar.",
    "equipment": "Sartén antiadherente de 20–22 cm, licuadora o batidor, cucharón y espátula fina.",
    "ingredients": [
      {
        "name": "harina de trigo",
        "amount": 125.0,
        "unit": "g",
        "group": "Crepas"
      },
      {
        "name": "huevos grandes",
        "amount": 2.0,
        "unit": "pzas",
        "group": "Crepas"
      },
      {
        "name": "leche entera",
        "amount": 300.0,
        "unit": "ml",
        "group": "Crepas"
      },
      {
        "name": "mantequilla derretida y tibia",
        "amount": 25.0,
        "unit": "g",
        "group": "Crepas"
      },
      {
        "name": "azúcar",
        "amount": 10.0,
        "unit": "g",
        "group": "Crepas"
      },
      {
        "name": "sal",
        "amount": 1.0,
        "unit": "g",
        "group": "Crepas"
      },
      {
        "name": "vainilla",
        "amount": 5.0,
        "unit": "ml",
        "group": "Crepas"
      },
      {
        "name": "mantequilla extra",
        "amount": 10.0,
        "unit": "g",
        "group": "Sartén"
      },
      {
        "name": "cajeta",
        "amount": 250.0,
        "unit": "g",
        "group": "Salsa"
      },
      {
        "name": "leche entera",
        "amount": 50.0,
        "unit": "ml",
        "group": "Salsa"
      },
      {
        "name": "nuez picada",
        "amount": 50.0,
        "unit": "g",
        "group": "Acabado"
      }
    ],
    "steps": [
      {
        "title": "Licúa la masa",
        "text": "Licúa harina, huevos, leche, mantequilla tibia, azúcar, sal y vainilla unos segundos hasta unir. También puedes batir a mano incorporando la leche gradualmente. No necesitas una mezcla espumosa.",
        "minutes": 0,
        "cue": "Masa líquida y sin grumos."
      },
      {
        "title": "Deja reposar",
        "text": "Tapa y deja reposar 30 minutos en el refrigerador. Remueve antes de usar. Debe cubrir el fondo de la sartén en una película fina; si quedó demasiado espesa, añade leche de cucharada en cucharada.",
        "minutes": 30,
        "cue": "La espuma baja y la masa sigue siendo fluida."
      },
      {
        "title": "Prepara la sartén",
        "text": "Calienta la sartén a fuego medio y pincela apenas con mantequilla extra. Vierte un pequeño cucharón y gira de inmediato para cubrir el fondo. La primera crepa sirve para ajustar temperatura y cantidad.",
        "minutes": 0,
        "cue": "Superficie caliente, sin humo ni charcos de mantequilla."
      },
      {
        "title": "Cocina las crepas",
        "text": "Cocina 45–60 segundos hasta que los bordes se despeguen. Voltea con espátula y cocina 15–30 segundos más. Apila en un plato y cubre flojamente. Repite engrasando apenas cuando haga falta; salen unas 12 crepas.",
        "minutes": 0,
        "cue": "Bordes secos y base con manchas doradas claras."
      },
      {
        "title": "Entibia la cajeta",
        "text": "Calienta cajeta con los 50 ml de leche a fuego bajo, removiendo. Retira cuando se alise. No hace falta hervir; si la marca de cajeta ya es muy líquida, añade la leche poco a poco.",
        "minutes": 0,
        "cue": "Salsa fluida que todavía cubre la cuchara."
      },
      {
        "title": "Dobla y termina",
        "text": "Extiende una cucharada fina de salsa en cada crepa y dobla en cuatro. Sirve dos por persona, añade un hilo de salsa por encima y reparte nuez. Lleva a la mesa antes de que se enfríen.",
        "minutes": 0,
        "cue": "Crepas tibias con salsa repartida."
      }
    ],
    "tips": "Una sartén apenas engrasada facilita extender la masa: demasiada mantequilla hace que se deslice sin cubrir.",
    "beforeYouStart": [
      "Usa una sartén antiadherente en buen estado.",
      "Ten a mano plato, espátula y un paño limpio para cubrir la pila.",
      "La masa reposa para que la harina se hidrate y se vuelva más fácil de extender."
    ],
    "doneWhen": [
      "La crepa se despega por los bordes antes de voltearla.",
      "Queda flexible y fina, sin una capa gruesa de masa húmeda."
    ],
    "troubleshooting": [
      {
        "problem": "Se rompe al voltear.",
        "solution": "Dale unos segundos más y revisa que cubra el fondo sin quedar demasiado delgada."
      },
      {
        "problem": "La masa no se extiende.",
        "solution": "Puede estar espesa o la sartén demasiado caliente. Añade una cucharada de leche y reduce un poco el fuego."
      }
    ],
    "storage": "Refrigera las crepas sin salsa, separadas con papel, hasta 2 días. Recalienta brevemente en sartén y añade la cajeta al servir.",
    "servingTip": "Sirve en plato tibio para mantenerlas suaves mientras llega el café.",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/8/85/Crepas_de_cajeta.jpg",
    "photoAlt": "Crepas dobladas con cajeta y azúcar espolvoreada",
    "photographer": "Vale.Val12",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Crepas_de_cajeta.jpg",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/4.0"
  },
  {
    "id": "manzanas-al-horno",
    "name": "Manzanas al horno",
    "categoryLabel": "Canela hasta el centro",
    "tags": [
      "de-casa",
      "faciles",
      "recientes"
    ],
    "difficulty": "Fácil",
    "servings": 4,
    "prep": 20,
    "cook": 40,
    "rest": 10,
    "oven": 180,
    "description": "Manzanas enteras con nuez y pasas, horneadas hasta que la cuchara entre sin esfuerzo.",
    "equipment": "Refractario pequeño, descorazonador o cuchillo de punta y cuchara.",
    "ingredients": [
      {
        "name": "manzanas medianas firmes tipo Golden",
        "amount": 4.0,
        "unit": "pzas",
        "group": "Manzanas"
      },
      {
        "name": "azúcar mascabado",
        "amount": 40.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "nuez picada",
        "amount": 40.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "pasas",
        "amount": 30.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "canela molida",
        "amount": 3.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "mantequilla suave",
        "amount": 25.0,
        "unit": "g",
        "group": "Relleno"
      },
      {
        "name": "agua",
        "amount": 100.0,
        "unit": "ml",
        "group": "Fondo"
      },
      {
        "name": "jugo de limón",
        "amount": 15.0,
        "unit": "ml",
        "group": "Fondo"
      }
    ],
    "steps": [
      {
        "title": "Prepara las manzanas",
        "text": "Precalienta a 180 °C. Lava y seca las manzanas. Retira el corazón desde arriba dejando aproximadamente 1 cm de base para contener el relleno. Amplía un poco el hueco con una cuchara pequeña.",
        "minutes": 0,
        "cue": "Cavidad limpia sin atravesar la base."
      },
      {
        "title": "Marca la piel",
        "text": "Haz un corte poco profundo alrededor del ecuador de cada manzana, solo atravesando la piel. Ayuda a controlar dónde se abre al expandirse. Trabaja sobre tabla y gira la fruta con cuidado.",
        "minutes": 0,
        "cue": "Corte superficial alrededor de la mitad de la fruta."
      },
      {
        "title": "Mezcla el relleno",
        "text": "Une azúcar mascabado, nuez, pasas, canela y mantequilla suave. Divide entre las cuatro cavidades sin comprimir demasiado. Deja un pequeño montículo encima de cada manzana.",
        "minutes": 0,
        "cue": "Pasta suelta con nuez y pasas repartidas."
      },
      {
        "title": "Prepara el fondo",
        "text": "Coloca las frutas en el refractario juntas pero sin apretarlas. Mezcla agua y limón y vierte al fondo. El líquido evita que se quemen los jugos y ayuda a cocinar la base.",
        "minutes": 0,
        "cue": "Manzanas de pie con líquido alrededor, no sobre el relleno."
      },
      {
        "title": "Hornea",
        "text": "Hornea 35–45 minutos, bañando una vez con el jugo del fondo. Revisa desde el minuto 30: tamaño y variedad cambian el tiempo. Si la nuez dora antes de ablandarse la fruta, cubre flojamente con aluminio.",
        "minutes": 40,
        "cue": "Pulpa tierna al insertar un cuchillo fino en un lateral."
      },
      {
        "title": "Sirve tibias",
        "text": "Deja reposar 10 minutos. Sirve cada manzana con una cucharada de sus jugos. Comprueba que no queden semillas en el hueco antes de llevar a la mesa; el relleno interior conserva mucho calor.",
        "minutes": 10,
        "cue": "Centro caliente y fruta suave que conserva la forma."
      }
    ],
    "tips": "Elige cuatro manzanas parecidas en tamaño para que queden listas al mismo tiempo.",
    "beforeYouStart": [
      "Usa fruta firme que soporte el horneado.",
      "No perfores el fondo al sacar el corazón.",
      "El refractario debe sostener las manzanas de pie sin quedar demasiado grande."
    ],
    "doneWhen": [
      "Un cuchillo entra fácilmente en la pulpa cerca del centro.",
      "La manzana sigue de pie y los jugos del fondo no están quemados."
    ],
    "troubleshooting": [
      {
        "problem": "Se abrieron demasiado.",
        "solution": "Estaban muy maduras o se pasaron de cocción. Revisa antes y usa fruta firme."
      },
      {
        "problem": "El fondo se secó.",
        "solution": "Añade un poco de agua caliente al refractario y sigue vigilando; no viertas agua fría sobre vidrio caliente."
      }
    ],
    "storage": "Refrigera tapadas hasta 3 días. Recalienta en porciones con un poco de sus jugos.",
    "servingTip": "Una cucharada de yogur o helado de vainilla acompaña bien la fruta tibia.",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Brat%C3%A4pfel_1.JPG/960px-Brat%C3%A4pfel_1.JPG",
    "photoAlt": "Manzanas asadas enteras con relleno de frutos secos",
    "photographer": "Brücke-Osteuropa",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Brat%C3%A4pfel_1.JPG",
    "photoPlatform": "Wikimedia Commons",
    "photoLicense": "CC BY-SA 3.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/3.0"
  }
];

const storageKey = "sweet-notes.v1";
const recipeById = new Map(recipeCatalog.map(recipe => [recipe.id, recipe]));
const categoryNames = { chocolate: "Chocolate", pasteles: "Pasteles", galletas: "Galletas", frios: "Postres fríos", "sin-horno": "Sin horno", faciles: "Recetas fáciles", nuevas: "Primeras incorporaciones", recientes: "Recién llegadas", "de-casa": "Sabores de casa" };
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
const mobileLayout = window.matchMedia("(max-width: 650px)");
let activeRecipeTab = "ingredients";
let musicSheetModal = false;
let musicPreviousFocus = null;
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
  const badge = recipe.id === "arroz-con-leche" ? "El favorito de Ángel" : recipe.tags.includes("recientes") ? "Nuevo antojo" : recipe.tags.includes("sin-horno") ? "Sin horno" : recipe.difficulty === "Fácil" ? "Fácil" : "Para preparar con tiempo";
  return `<article class="recipe-card" data-recipe-card="${recipe.id}"><div class="card-photo"><button class="card-open-image" type="button" data-open-recipe="${recipe.id}" aria-label="Ver receta de ${escapeHTML(recipe.name)}">${imageMarkup(recipe)}</button><span class="card-badge">${badge}</span><button class="favorite-button${saved ? " is-saved" : ""}" type="button" data-favorite="${recipe.id}" aria-pressed="${saved}" aria-label="${escapeHTML(favoriteLabel(recipe))}">${icon("heart")}</button></div><div class="card-copy"><p class="card-category">${escapeHTML(recipe.categoryLabel)}</p><h3 class="card-title"><button type="button" data-open-recipe="${recipe.id}">${escapeHTML(recipe.name)}</button></h3><p class="card-description">${escapeHTML(recipe.description)}</p><p class="card-baking-note"><span>Rinde: ${recipe.servings}</span><span>${recipe.oven ? `Horno a ${recipe.oven} °C` : "Sin horno"}</span><span>${recipe.steps.length} pasos</span></p><div class="card-meta"><span>${icon("clock")}${formatDuration(totalMinutes(recipe))}</span><span><i class="difficulty-dot" aria-hidden="true"></i>${recipe.difficulty}</span><button class="card-arrow" type="button" data-open-recipe="${recipe.id}" aria-label="Preparar ${escapeHTML(recipe.name)}">${icon("arrow")}</button></div></div></article>`;
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
  if (filters.sort === "featured") {
    const highlights = ["flan-napolitano", "muffins-de-arandanos", "churros-con-chocolate", "tarta-de-pera-y-almendra", "blondies-de-chocolate-blanco", "helado-de-vainilla-sin-maquina"];
    const rank = recipe => { const index = highlights.indexOf(recipe.id); return index < 0 ? highlights.length : index; };
    matches.sort((first, second) => rank(first) - rank(second));
  }
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
  return recipe.steps.map((step, index) => `<li class="recipe-step${state.completed.has(index) ? " is-complete" : ""}" data-step-index="${index}" ${cookingMode && state.currentStep !== index ? "hidden" : ""}><button class="step-complete" type="button" data-complete-step="${index}" data-step-number="${String(index + 1).padStart(2, "0")}" aria-label="${state.completed.has(index) ? "Desmarcar" : "Completar"} paso ${index + 1}: ${escapeHTML(step.title)}" aria-pressed="${state.completed.has(index)}">${icon("check")}</button><h4${cookingMode && state.currentStep === index ? ' id="current-step-title" tabindex="-1"' : ""}>${escapeHTML(step.title)}</h4><p>${escapeHTML(step.text)}</p>${step.cue ? `<p class="step-cue">${icon("check")}<span><strong>Punto correcto:</strong> ${escapeHTML(step.cue)}</span></p>` : ""}${step.minutes ? `<button class="step-timer-button" type="button" data-step-timer="${index}">${icon("clock")} Temporizador · ${formatDuration(step.minutes)}</button>` : ""}</li>`).join("");
}

function timerFormMarkup(recipe) {
  if (timerStepIndex === null || !recipe.steps[timerStepIndex]) return "";
  const step = recipe.steps[timerStepIndex];
  return `<form class="timer-config" id="timer-form"><h4>Un momento para esperar</h4><p>Paso ${timerStepIndex + 1} · ${escapeHTML(step.title)}</p><div class="timer-config-row"><label for="timer-minutes">Minutos</label><input id="timer-minutes" type="number" min="0.1" max="1440" step="0.1" value="${step.minutes || 5}" required><button class="button button-primary" type="submit">Iniciar ${icon("clock")}</button><button class="text-button" type="button" data-action="timer-cancel">Cancelar</button></div></form>`;
}

function recipeAdviceMarkup(recipe) {
  const bullets = items => items.map(text => `<li>${escapeHTML(text)}</li>`).join("");
  return `<section class="recipe-advice" id="recipe-panel-advice" aria-labelledby="recipe-advice-title"><p class="eyebrow">LOS DETALLES HACEN LA DIFERENCIA.</p><h3 id="recipe-advice-title">Que te quede como lo imaginas.</h3><div class="recipe-advice-grid"><div class="recipe-advice-block"><h4>${icon("check")} Cómo reconocer el punto</h4><ul>${bullets(recipe.doneWhen)}</ul></div><div class="recipe-advice-block"><h4>${icon("clock")} Cómo conservarlo</h4><p>${escapeHTML(recipe.storage)}</p></div><div class="recipe-advice-block recipe-troubleshooting"><h4>Si algo no sale como esperabas</h4>${recipe.troubleshooting.map(item => `<details class="recipe-fix"><summary>${escapeHTML(item.problem)}${icon("chevron")}</summary><p>${escapeHTML(item.solution)}</p></details>`).join("")}</div><div class="recipe-advice-block serving-note"><span class="handwritten">el último toque.</span><h4>A la mesa</h4><p>${escapeHTML(recipe.servingTip)}</p></div></div></section>`;
}

function syncRecipePanels() {
  if (!currentRecipeId) return;
  if (cookingMode) activeRecipeTab = "steps";
  const mobile = mobileLayout.matches && !cookingMode;
  const headings = { ingredients: "ingredients-title", steps: "steps-title", advice: "recipe-advice-title" };
  for (const key of Object.keys(headings)) {
    const panel = document.getElementById(`recipe-panel-${key}`);
    const button = document.getElementById(`recipe-tab-${key}`);
    if (!panel || !button) continue;
    panel.hidden = mobile && key !== activeRecipeTab;
    panel.setAttribute("role", mobile ? "tabpanel" : "region");
    panel.setAttribute("aria-labelledby", mobile ? button.id : headings[key]);
    button.setAttribute("aria-selected", String(key === activeRecipeTab));
    button.tabIndex = key === activeRecipeTab ? 0 : -1;
  }
}

function setRecipeTab(key, focus = false) {
  if (!["ingredients", "steps", "advice"].includes(key)) return;
  activeRecipeTab = key;
  syncRecipePanels();
  const tab = document.getElementById(`recipe-tab-${key}`);
  if (focus) tab?.focus({ preventScroll: true });
  if (mobileLayout.matches) {
    const tabs = document.getElementById("recipe-tabs");
    const toolbar = document.querySelector(".dialog-toolbar");
    if (tabs && toolbar) recipeOverlay.scrollTo({ top: Math.max(0, recipeOverlay.scrollTop + tabs.getBoundingClientRect().top - toolbar.getBoundingClientRect().bottom), behavior: reducedMotion.matches ? "instant" : "smooth" });
  }
}

function syncMusicSheet(expanded) {
  const sheet = mobileLayout.matches && expanded && !musicPlayer.hidden;
  recipeOverlay.inert = sheet && Boolean(currentRecipeId);
  document.getElementById("music-backdrop").hidden = !sheet;
  document.body.classList.toggle("music-sheet-open", sheet && !currentRecipeId);
  document.getElementById("mobile-music").setAttribute("aria-expanded", String(sheet));
  if (sheet && !currentRecipeId) {
    musicSheetModal = true;
    pageShell.inert = true;
    pageShell.setAttribute("aria-hidden", "true");
    document.querySelector(".skip-link").inert = true;
    experienceLayer.setAttribute("role", "dialog");
    experienceLayer.setAttribute("aria-modal", "true");
    experienceLayer.setAttribute("aria-labelledby", "player-title");
  } else if (musicSheetModal) {
    musicSheetModal = false;
    if (!currentRecipeId) {
      pageShell.inert = false;
      pageShell.removeAttribute("aria-hidden");
      document.querySelector(".skip-link").inert = false;
      experienceLayer.removeAttribute("role");
      experienceLayer.removeAttribute("aria-modal");
      experienceLayer.removeAttribute("aria-labelledby");
    }
  }
  if (currentRecipeId) experienceLayer.setAttribute("aria-labelledby", sheet ? "player-title" : "detail-title");
}

function renderDetail() {
  const recipe = recipeById.get(currentRecipeId);
  if (!recipe) return;
  const state = kitchenState(recipe);
  const finishedRoute = cookingMode && state.currentStep === recipe.steps.length;
  recipeDialog.classList.toggle("is-cooking", cookingMode);
  const cookNavigation = cookingMode && !finishedRoute ? `<div class="cook-navigation"><button class="button button-outline" type="button" data-action="previous-step" ${state.currentStep === 0 ? "disabled" : ""}>${icon("arrow", "back-arrow")} Anterior</button><span class="cook-position">Paso ${state.currentStep + 1} de ${recipe.steps.length}</span><button class="button button-primary" type="button" data-action="next-step">${state.currentStep === recipe.steps.length - 1 ? "Terminar" : "Completar y seguir"} ${icon("arrow")}</button></div>` : "";
  const completion = finishedRoute ? `<div class="cook-completion"><p class="handwritten">${state.completed.size === recipe.steps.length ? "Algo rico acaba de nacer." : "Llegaste al final del recorrido."}</p><p>${state.completed.size} de ${recipe.steps.length} pasos marcados. ${state.completed.size === recipe.steps.length ? "Disfruta lo que preparaste, Maribel." : "Puedes volver a revisar los pasos que te falten."}</p><button class="button button-outline" type="button" data-action="review-steps">Volver a los pasos ${icon("arrow")}</button></div>` : "";
  recipeDetail.innerHTML = `<div class="detail-intro"><div class="detail-photo">${imageMarkup(recipe, 800, false)}</div><div class="detail-summary"><p class="eyebrow">${escapeHTML(recipe.categoryLabel)}</p><h2 id="detail-title" tabindex="-1">${escapeHTML(recipe.name)}</h2><p>${escapeHTML(recipe.description)}</p><div class="detail-stats"><div class="detail-stat"><small>Preparación</small><strong>${formatDuration(recipe.prep)}</strong></div><div class="detail-stat"><small>Cocción</small><strong>${recipe.cook ? formatDuration(recipe.cook) : "Sin cocción"}</strong></div><div class="detail-stat"><small>Reposo / frío</small><strong>${recipe.rest ? formatDuration(recipe.rest) : "Sin reposo"}</strong></div><div class="detail-stat"><small>Porciones</small><strong id="detail-yield">${state.servings}</strong></div><div class="detail-stat"><small>Nivel</small><strong>${recipe.difficulty}</strong></div><div class="detail-stat"><small>Horno</small><strong>${recipe.oven ? `${recipe.oven} °C` : "Sin horno"}</strong></div></div><div class="detail-actions"><button class="button ${cookingMode ? "button-outline" : "button-primary"}" type="button" data-action="toggle-cook" aria-pressed="${cookingMode}">${icon("cook")}${cookingMode ? "Ver receta completa" : "Modo cocina"}</button><button class="button button-outline detail-favorite${favoriteIds.has(recipe.id) ? " is-saved" : ""}" type="button" data-favorite="${recipe.id}" aria-pressed="${favoriteIds.has(recipe.id)}" aria-label="${escapeHTML(favoriteLabel(recipe))}">${icon("heart")} Favorita</button><button class="icon-button" type="button" data-action="share" aria-label="Compartir ${escapeHTML(recipe.name)}">${icon("share")}</button><button class="icon-button" type="button" data-music-open aria-label="Abrir música mientras cocinas">${icon("music")}</button></div><div class="share-fallback" id="share-fallback" hidden><label for="share-url">Copia este enlace para compartir la receta</label><input id="share-url" readonly></div></div></div><div class="recipe-tabs" id="recipe-tabs" role="tablist" aria-label="Secciones de la receta"><button id="recipe-tab-ingredients" type="button" role="tab" data-recipe-tab="ingredients" aria-controls="recipe-panel-ingredients" aria-selected="true">Ingredientes</button><button id="recipe-tab-steps" type="button" role="tab" data-recipe-tab="steps" aria-controls="recipe-panel-steps" aria-selected="false" tabindex="-1">Preparación</button><button id="recipe-tab-advice" type="button" role="tab" data-recipe-tab="advice" aria-controls="recipe-panel-advice" aria-selected="false" tabindex="-1">Consejos</button></div><div class="detail-columns"><section class="ingredients-pane" id="recipe-panel-ingredients" aria-labelledby="ingredients-title"><h3 id="ingredients-title">Lo que necesitas</h3><div class="servings-control"><span>Porciones</span><div class="servings-stepper"><button type="button" data-action="less-portions" aria-label="Reducir una porción" ${state.servings <= 1 ? "disabled" : ""}>${icon("minus")}</button><output id="portion-output" aria-live="polite">${state.servings}</output><button type="button" data-action="more-portions" aria-label="Aumentar una porción" ${state.servings >= 60 ? "disabled" : ""}>${icon("plus")}</button></div></div><p class="portion-note">Cantidades base para ${recipe.servings}. Si necesitas una fracción de huevo, bátelo y pesa esa proporción. Ajusta el molde; los tiempos no se multiplican.</p><details class="recipe-prep"><summary>Antes de empezar ${icon("chevron")}</summary><ul>${recipe.beforeYouStart.map(text => `<li>${escapeHTML(text)}</li>`).join("")}</ul></details><div id="ingredient-list">${ingredientListMarkup(recipe)}</div><p class="ingredients-progress" id="ingredients-progress">${state.checked.size} de ${recipe.ingredients.length} ingredientes listos</p><p class="portion-note">${escapeHTML(recipe.equipment)}</p><button class="button button-primary ingredients-next" type="button" data-recipe-tab="steps">Seguir con la preparación ${icon("arrow")}</button></section><section class="steps-pane" id="recipe-panel-steps" aria-labelledby="steps-title"><div class="steps-title-row"><h3 id="steps-title">${cookingMode ? "A tu ritmo, paso a paso." : "Manos a la masa"}</h3><span class="steps-progress" id="steps-progress">${state.completed.size}/${recipe.steps.length} listos</span></div>${timerFormMarkup(recipe)}<ol class="steps-list" aria-label="Pasos de preparación">${stepsMarkup(recipe)}</ol>${completion}${cookNavigation}<aside class="recipe-tips"><h4>Una nota de tu recetario</h4><p>${escapeHTML(recipe.tips)}</p></aside></section>${recipeAdviceMarkup(recipe)}</div><p class="recipe-credit">Fotografía ilustrativa: <a href="${escapeHTML(recipe.photoSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(recipe.photographer)} en ${escapeHTML(recipe.photoPlatform || "Unsplash")}</a>${recipe.photoLicense ? ` · <a href="${escapeHTML(recipe.photoLicenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(recipe.photoLicense)}</a> · encuadre adaptado` : ""}. La presentación puede variar. Tiempo total estimado: ${formatDuration(totalMinutes(recipe))}; los levados y la cocción dependen de tu cocina.</p>`;
  syncRecipePanels();
  document.body.classList.toggle("cooking-active", cookingMode);
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
  if (mobileLayout.matches && !musicPlayer.classList.contains("is-collapsed")) setPlayerExpanded(false);
  activeRecipeTab = "ingredients";
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
  if (mobileLayout.matches && !musicPlayer.classList.contains("is-collapsed")) setPlayerExpanded(false);
  document.body.classList.remove("cooking-active");
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
  activeRecipeTab = "steps";
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
  document.getElementById("player-status").textContent = configured ? "Elegir canción · tu playlist" : "Tu playlist está por llegar";
  document.getElementById("player-guide").hidden = !configured;
  document.getElementById("player-footnote").hidden = !configured;
  if (!configured) return;
  document.getElementById("spotify-player-link").href = spotifyUrl;
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
  document.dispatchEvent(new Event("spotify-playlist-changed"));
}

function setPlayerExpanded(expanded) {
  const wasExpanded = !musicPlayer.classList.contains("is-collapsed");
  musicPlayer.classList.toggle("is-collapsed", !expanded);
  playerBody.inert = !expanded;
  playerBody.setAttribute("aria-hidden", String(!expanded));
  const button = document.getElementById("toggle-player");
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute("aria-label", expanded ? mobileLayout.matches ? "Cerrar música" : "Contraer reproductor" : "Ver canciones de Spotify");
  document.getElementById("player-launch").setAttribute("aria-expanded", String(expanded));
  document.getElementById("player-status").textContent = spotifyUrl ? expanded ? "Elige un tema de la lista de Spotify" : "Elegir canción · tu playlist" : "Agrega tu playlist";
  document.body.classList.toggle("music-expanded", expanded && !musicPlayer.hidden);
  syncMusicSheet(expanded);
  document.dispatchEvent(new Event("music-visibility-changed"));
  if (!expanded && wasExpanded && mobileLayout.matches && musicPreviousFocus?.isConnected && !musicPreviousFocus.closest("[inert]")) musicPreviousFocus.focus({ preventScroll: true });
}

function openMusicPlayer() {
  if (musicPlayer.hidden || musicPlayer.classList.contains("is-collapsed")) musicPreviousFocus = document.activeElement;
  setMobileMenu(false);
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
  const root = mobileLayout.matches && !musicPlayer.hidden && !musicPlayer.classList.contains("is-collapsed") ? musicPlayer : experienceLayer;
  return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), summary, iframe, [tabindex="0"]')].filter(element => element.getClientRects().length && window.getComputedStyle(element).visibility !== "hidden" && !element.closest("[hidden], [inert]"));
}

function syncRecipeWithLocation() {
  const id = new URL(window.location.href).searchParams.get("receta");
  if (id && recipeById.has(id)) {
    if (currentRecipeId !== id) openRecipe(id, false);
  } else if (currentRecipeId) closeRecipe(false);
}

document.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;
  const recipeTab = event.target.closest("[data-recipe-tab]");
  if (recipeTab) { setRecipeTab(recipeTab.dataset.recipeTab, true); return; }
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
    if (input.checked && state.checked.size === recipe.ingredients.length) celebrateIngredients();
  }
});

document.addEventListener("submit", event => {
  if (event.target.id === "timer-form") {
    event.preventDefault();
    const form = event.target;
    if (form.reportValidity()) beginTimer(Number(document.getElementById("timer-minutes").value));
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
document.getElementById("toggle-player").addEventListener("click", () => setPlayerExpanded(musicPlayer.classList.contains("is-collapsed")));
document.getElementById("menu-toggle").addEventListener("click", () => setMobileMenu(document.getElementById("menu-toggle").getAttribute("aria-expanded") !== "true"));
document.querySelectorAll("#main-nav a").forEach(anchor => anchor.addEventListener("click", () => setMobileMenu(false)));
document.addEventListener("click", event => {
  if (!document.getElementById("site-header").contains(event.target)) setMobileMenu(false);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (mobileLayout.matches && !musicPlayer.hidden && !musicPlayer.classList.contains("is-collapsed")) { setPlayerExpanded(false); return; }
    if (currentRecipeId) closeRecipe();
    else if (document.getElementById("menu-toggle").getAttribute("aria-expanded") === "true") { setMobileMenu(false); document.getElementById("menu-toggle").focus(); }
    else if (!musicPlayer.hidden && !musicPlayer.classList.contains("is-collapsed")) { setPlayerExpanded(false); document.getElementById("toggle-player").focus(); }
    return;
  }
  if (event.key === "/" && !currentRecipeId && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest("input, textarea, select, [contenteditable]")) {
    event.preventDefault();
    recipeSearch.focus();
  }
  if (event.key === "Tab" && (currentRecipeId || musicSheetModal)) {
    const focusable = visibleFocusableElements();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (!first) { event.preventDefault(); (musicSheetModal ? document.getElementById("toggle-player") : recipeDialog).focus(); return; }
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
  document.querySelectorAll(".mobile-tabs a[data-section]").forEach(anchor => {
    const section = currentSection.id === "categorias" ? "recetas" : currentSection.id;
    if (anchor.dataset.section === section) anchor.setAttribute("aria-current", "location");
    else anchor.removeAttribute("aria-current");
  });
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
  if (!force && (new URLSearchParams(location.search).has("code") || new URLSearchParams(location.search).has("error"))) return;
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

recipeDetail.addEventListener("keydown", event => {
  if (!event.target.closest("[role=tab]") || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const keys = ["ingredients", "steps", "advice"];
  const index = keys.indexOf(activeRecipeTab);
  const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : (index + (event.key === "ArrowRight" ? 1 : -1) + 3) % 3;
  setRecipeTab(keys[next], true);
});
document.getElementById("filter-toggle").addEventListener("click", () => {
  const panel = document.querySelector(".filter-panel");
  const expanded = panel.classList.toggle("filters-open");
  document.getElementById("filter-toggle").setAttribute("aria-expanded", String(expanded));
});
document.getElementById("music-backdrop").addEventListener("click", () => setPlayerExpanded(false));
document.querySelectorAll(".mobile-tabs a").forEach(anchor => anchor.addEventListener("click", () => setMobileMenu(false)));
if (mobileLayout.addEventListener) mobileLayout.addEventListener("change", () => {
  syncRecipePanels();
  syncMusicSheet(!musicPlayer.classList.contains("is-collapsed"));
});

class SpotifyRequestError extends Error {
  constructor(message, status = 0, code = "") {
    super(message);
    this.name = "SpotifyRequestError";
    this.status = status;
    this.code = code;
  }
}

class SpotifyAccountClient {
  constructor(clientId, environment = {}) {
    this.clientId = clientId.trim();
    this.fetch = environment.fetch || window.fetch.bind(window);
    this.crypto = environment.crypto || window.crypto;
    this.now = environment.now || Date.now;
    this.storage = null;
    try { this.storage = environment.storage === undefined ? window.sessionStorage : environment.storage; } catch {}
    this.sessionKey = "sweet-notes.spotify.session.v1";
    this.pendingKey = "sweet-notes.spotify.pkce.v1";
    this.generation = 0;
    this.refreshPromise = null;
    this.rateLimitUntil = 0;
    this.onSessionExpired = () => {};
    const stored = this.read(this.sessionKey);
    this.session = stored?.clientId === this.clientId && typeof stored.accessToken === "string" && stored.accessToken && Number.isFinite(stored.expiresAt) ? stored : null;
  }

  static redirectURI(value) {
    try {
      const url = new URL(value);
      if (url.hostname === "localhost" || url.username || url.password) return null;
      const loopback = ["127.0.0.1", "[::1]"].includes(url.hostname);
      if (url.protocol !== "https:" && !(url.protocol === "http:" && loopback)) return null;
      return url.origin + url.pathname;
    } catch { return null; }
  }

  static base64URL(bytes) {
    return btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  read(key) {
    try { return JSON.parse(this.storage?.getItem(key) || "null"); } catch { return null; }
  }

  write(key, value) {
    try {
      if (!this.storage) return false;
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    } catch { return false; }
  }

  remove(key) {
    try { this.storage?.removeItem(key); } catch {}
  }

  disconnect() {
    this.generation++;
    this.session = null;
    this.refreshPromise = null;
    this.remove(this.sessionKey);
    this.remove(this.pendingKey);
  }

  async authorizationURL(currentURL) {
    const redirectUri = SpotifyAccountClient.redirectURI(currentURL);
    if (!redirectUri) throw new SpotifyRequestError("Abre la web con http://127.0.0.1 y Live Server, o con HTTPS. Vuelve a abrir tu página y pulsa conectar.");
    if (!this.clientId) throw new SpotifyRequestError("Falta configurar el Client ID de la aplicación.");
    if (!this.crypto?.subtle) throw new SpotifyRequestError("Este navegador necesita una conexión segura para iniciar sesión. Usa 127.0.0.1 con Live Server o HTTPS.");
    const verifier = SpotifyAccountClient.base64URL(this.crypto.getRandomValues(new Uint8Array(64)));
    const state = SpotifyAccountClient.base64URL(this.crypto.getRandomValues(new Uint8Array(32)));
    const digest = await this.crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
    const returnTo = new URL(currentURL);
    for (const key of ["code", "state", "error", "error_description"]) returnTo.searchParams.delete(key);
    const pending = { clientId: this.clientId, verifier, state, redirectUri, returnTo: returnTo.href, createdAt: this.now() };
    if (!this.write(this.pendingKey, pending)) throw new SpotifyRequestError("Permite el almacenamiento de esta pestaña para completar el inicio de sesión.");
    const url = new URL("https://accounts.spotify.com/authorize");
    url.search = new URLSearchParams({ client_id: this.clientId, response_type: "code", redirect_uri: redirectUri, scope: "streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state", state, code_challenge_method: "S256", code_challenge: SpotifyAccountClient.base64URL(digest) }).toString();
    return url.href;
  }

  async finishAuthorization(currentURL, cleanURL = () => {}) {
    const url = new URL(currentURL);
    if (!url.searchParams.has("code") && !url.searchParams.has("error")) return false;
    const pending = this.read(this.pendingKey);
    const clean = new URL(url);
    for (const key of ["code", "state", "error", "error_description"]) clean.searchParams.delete(key);
    let returnTo = clean.href;
    try {
      const savedReturn = new URL(pending?.returnTo);
      if (savedReturn.origin === url.origin && savedReturn.pathname === url.pathname) returnTo = savedReturn.href;
    } catch {}
    cleanURL(returnTo);
    this.remove(this.pendingKey);
    if (!pending || pending.clientId !== this.clientId || pending.state !== url.searchParams.get("state") || pending.redirectUri !== SpotifyAccountClient.redirectURI(url.href) || !Number.isFinite(pending.createdAt) || this.now() - pending.createdAt > 600000 || pending.createdAt > this.now() + 60000 || typeof pending.verifier !== "string" || !/^[A-Za-z0-9._~-]{43,128}$/.test(pending.verifier)) {
      throw new SpotifyRequestError("No se pudo verificar el inicio de sesión. Pulsa Conectar con Spotify para empezar de nuevo.");
    }
    if (url.searchParams.has("error")) throw new SpotifyRequestError(url.searchParams.get("error") === "access_denied" ? "Cancelaste el acceso. Puedes seguir usando la playlist o conectarte cuando quieras." : "Spotify no pudo autorizar esta aplicación. Revisa su configuración e inténtalo de nuevo.");
    const code = url.searchParams.get("code");
    if (!code) throw new SpotifyRequestError("Spotify no devolvió un código de autorización. Vuelve a conectar tu cuenta.");
    const generation = this.generation;
    const data = await this.tokenRequest({ client_id: this.clientId, grant_type: "authorization_code", code, redirect_uri: pending.redirectUri, code_verifier: pending.verifier });
    this.saveSession(data, null, generation);
    return true;
  }

  saveSession(data, previous, generation) {
    if (generation !== this.generation) throw new SpotifyRequestError("La conexión fue cancelada.");
    if (typeof data.access_token !== "string" || !data.access_token || !Number.isFinite(Number(data.expires_in)) || Number(data.expires_in) <= 0) throw new SpotifyRequestError("Spotify no devolvió una sesión válida. Vuelve a conectar tu cuenta.");
    this.session = { clientId: this.clientId, accessToken: data.access_token, refreshToken: data.refresh_token || previous?.refreshToken || "", expiresAt: this.now() + Number(data.expires_in) * 1000 };
    this.write(this.sessionKey, this.session);
    return this.session.accessToken;
  }

  async fetchJSON(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await this.fetch(url, { ...options, signal: controller.signal, cache: "no-store", credentials: "omit", referrerPolicy: "no-referrer" });
      const raw = response.status === 204 ? "" : await response.text();
      let data = null;
      try { data = raw ? JSON.parse(raw) : null; } catch {}
      return { response, data };
    } catch {
      throw new SpotifyRequestError("No se pudo contactar con Spotify. Comprueba tu conexión e inténtalo de nuevo.");
    } finally { clearTimeout(timeout); }
  }

  async tokenRequest(parameters) {
    const { response, data } = await this.fetchJSON("https://accounts.spotify.com/api/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(parameters) });
    if (!response.ok) {
      const message = ["invalid_client", "unauthorized_client"].includes(data?.error) ? "Spotify rechazó el Client ID. Confirma el valor en los ajustes de tu aplicación." : data?.error === "invalid_grant" ? "La autorización caducó o ya se utilizó. Vuelve a conectar tu cuenta." : "No se pudo completar la autorización con Spotify. Revisa la dirección de regreso en tu aplicación.";
      throw new SpotifyRequestError(message, response.status, data?.error || "");
    }
    return data || {};
  }

  async accessToken(force = false) {
    if (!this.session) throw new SpotifyRequestError("Conecta tu cuenta de Spotify para continuar.", 401);
    if (!force && this.session.expiresAt > this.now() + 60000) return this.session.accessToken;
    if (this.refreshPromise) return this.refreshPromise;
    const previous = this.session;
    const generation = this.generation;
    this.refreshPromise = (async () => {
      try {
        if (!previous.refreshToken) throw new SpotifyRequestError("Tu sesión terminó. Vuelve a conectar Spotify.", 401);
        const data = await this.tokenRequest({ grant_type: "refresh_token", refresh_token: previous.refreshToken, client_id: this.clientId });
        return this.saveSession(data, previous, generation);
      } catch (error) {
        if (generation === this.generation && (error.status === 400 || error.status === 401)) {
          this.disconnect();
          this.onSessionExpired();
        }
        throw error;
      } finally { if (generation === this.generation) this.refreshPromise = null; }
    })();
    return this.refreshPromise;
  }

  async api(path, options = {}, retry = true) {
    if (!/^\/me(?:\/|\?|$)/.test(path)) throw new SpotifyRequestError("Solicitud de Spotify no válida.");
    if (this.now() < this.rateLimitUntil) throw new SpotifyRequestError("Spotify pidió una pausa. Espera un momento antes de volver a intentar.", 429);
    const generation = this.generation;
    const accessToken = await this.accessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    const { response, data } = await this.fetchJSON("https://api.spotify.com/v1" + path, { method: options.method || "GET", headers, ...(options.body === undefined ? {} : { body: JSON.stringify(options.body) }) });
    if (generation !== this.generation) throw new SpotifyRequestError("La conexión fue cancelada.");
    if (response.status === 401 && retry) {
      await this.accessToken(true);
      return this.api(path, options, false);
    }
    if (!response.ok) {
      if (response.status === 401) { this.disconnect(); this.onSessionExpired(); }
      if (response.status === 429) {
        const seconds = Number(response.headers.get("Retry-After"));
        this.rateLimitUntil = this.now() + Math.max(1000, (Number.isFinite(seconds) && seconds > 0 ? seconds : 30) * 1000);
      }
      const message = response.status === 401 ? "Tu sesión terminó. Vuelve a conectar Spotify." : response.status === 403 ? "Spotify no permitió esta acción. Revisa que tu cuenta tenga Premium, esté autorizada en Users and Access y haya aceptado los permisos." : response.status === 404 ? "No se encontró un dispositivo disponible. Abre Spotify en tu equipo y actualiza los dispositivos, o elige Este navegador." : response.status === 429 ? "Spotify pidió una pausa. Espera un momento antes de volver a intentar." : "Spotify no pudo completar esta acción. Inténtalo de nuevo.";
      throw new SpotifyRequestError(message, response.status);
    }
    return data;
  }
}

function spotifyListeningView(playback, connected, fresh = true) {
  const item = connected ? playback?.item : null;
  const hasItem = Boolean(item?.name && playback?.currently_playing_type !== "ad");
  const isEpisode = item?.type === "episode" || playback?.currently_playing_type === "episode";
  const artists = hasItem ? item.artists?.map(artist => artist.name).filter(Boolean).join(", ") || item.show?.name || "Spotify" : connected ? "Pon una canción y sus datos aparecerán aquí." : "Conecta tu Spotify para ver la canción aquí.";
  const title = hasItem ? item.name : connected ? "Elige una canción" : "¿Qué está sonando?";
  const release = hasItem ? item.album?.release_date || item.release_date || "" : "";
  const image = hasItem ? item.album?.images?.[0]?.url || item.images?.[0]?.url || "" : "";
  const milliseconds = Number(item?.duration_ms);
  const seconds = Number.isFinite(milliseconds) && milliseconds > 0 ? Math.floor(milliseconds / 1000) : 0;
  const query = hasItem && !isEpisode ? `${title} ${artists}` : "";
  return {
    hasItem,
    title,
    artists,
    album: hasItem ? item.album?.name || item.show?.name || "—" : "—",
    year: /^\d{4}/.test(release) ? release.slice(0, 4) : "—",
    duration: hasItem && seconds ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}` : "—",
    image: /^https:\/\//i.test(image) ? image : "",
    status: hasItem ? fresh ? playback.is_playing ? "SONANDO" : "EN PAUSA" : "SIN ACTUALIZAR" : connected ? "CONECTADO" : "TU MÚSICA",
    note: hasItem ? fresh ? playback?.device?.name ? `En ${playback.device.name}` : "Desde tu cuenta de Spotify." : "No se pudo actualizar. Esta es la última canción recibida." : connected ? "Puedes elegir una canción desde el reproductor o desde Spotify." : "Tu playlist sigue en el reproductor.",
    lyricsURL: query ? `https://www.musixmatch.com/search/${encodeURIComponent(query)}/tracks` : "",
    lyricsNote: query ? `Busca la letra de «${title}» de ${artists} en Musixmatch.` : hasItem && isEpisode ? "Este audio es un episodio; no tiene letra de canción." : "Cuando pongas una canción, tendrás aquí el acceso a su letra."
  };
}

function initializeSpotifyControls() {
  const client = new SpotifyAccountClient(SPOTIFY_CLIENT_ID);
  const byId = id => document.getElementById(id);
  const panel = byId("spotify-controls-panel");
  const errorBox = byId("spotify-control-error");
  const connectionState = byId("spotify-connection-state");
  const deviceSelect = byId("spotify-device");
  const seek = byId("spotify-seek");
  const volume = byId("spotify-volume");
  let mode = "embed";
  let busy = false;
  let premiumRequired = false;
  let devices = [];
  let playback = null;
  let playbackAt = 0;
  let playbackFresh = true;
  let musicSectionVisible = false;
  let pollPromise = null;
  let pollTimer = 0;
  let sdk = null;
  let sdkDeviceId = "";
  let sdkLoadPromise = null;
  let sdkConnectPromise = null;
  let sdkGeneration = 0;

  function setError(error) {
    errorBox.textContent = error?.message || "No se pudo completar la acción con Spotify.";
    errorBox.hidden = false;
  }

  function clearError() { errorBox.hidden = true; errorBox.textContent = ""; }

  function clock(milliseconds) {
    const seconds = Math.max(0, Math.floor((Number(milliseconds) || 0) / 1000));
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function chosenDeviceId() {
    return deviceSelect.value === "browser" ? sdkDeviceId : deviceSelect.value === "active" ? playback?.device?.id || devices.find(device => device.is_active)?.id || "" : deviceSelect.value;
  }

  function onChosenDevice() {
    const id = chosenDeviceId();
    return Boolean(id && playback?.device?.id === id && !playback.device.is_restricted);
  }

  function actionBlocked(name) {
    const actions = playback?.actions;
    return Boolean(actions?.disallows?.[name] ?? actions?.[name]);
  }

  function updateHeader() {
    if (mode !== "controls") return;
    const track = playback?.item;
    byId("player-status").textContent = client.session ? track?.name ? `${playback.is_playing ? "Sonando" : "En pausa"} · ${track.name}` : "Tu cuenta está conectada" : "Conecta tu cuenta · Spotify Premium";
  }

  function renderProgress() {
    const duration = Number(playback?.item?.duration_ms) || 0;
    const elapsed = Math.min(duration, Math.max(0, (Number(playback?.progress_ms) || 0) + (playback?.is_playing ? Date.now() - playbackAt : 0)));
    if (document.activeElement !== seek) {
      seek.value = duration ? Math.round(elapsed / duration * 100) : 0;
      seek.setAttribute("aria-valuetext", duration ? `${clock(elapsed)} de ${clock(duration)}` : "Sin reproducción");
      byId("spotify-elapsed").textContent = clock(elapsed);
    }
    byId("spotify-duration").textContent = clock(duration);
  }

  function renderListeningCard() {
    const view = spotifyListeningView(playback, Boolean(client.session), playbackFresh);
    const text = (id, value) => { if (byId(id).textContent !== value) byId(id).textContent = value; };
    text("listening-title", view.title);
    text("listening-artists", view.artists);
    text("listening-album", view.album);
    text("listening-year", view.year);
    text("listening-duration", view.duration);
    text("listening-state", view.status);
    text("listening-note", view.note);
    text("listening-lyrics-note", view.lyricsNote);
    byId("listening-facts").hidden = !view.hasItem;
    byId("listening-connect").hidden = Boolean(client.session);
    byId("listening-card").dataset.playing = String(view.hasItem && playbackFresh && Boolean(playback?.is_playing));
    const image = byId("listening-cover-image");
    image.hidden = !view.image;
    byId("listening-cover-placeholder").toggleAttribute("hidden", Boolean(view.image));
    if (view.image && image.getAttribute("src") !== view.image) image.src = view.image;
    if (!view.image) image.removeAttribute("src");
    const lyrics = byId("listening-lyrics-link");
    lyrics.hidden = !view.lyricsURL;
    if (view.lyricsURL) {
      lyrics.href = view.lyricsURL;
      lyrics.setAttribute("aria-label", `Buscar la letra de ${view.title} en Musixmatch, se abre en otra pestaña`);
    } else {
      lyrics.removeAttribute("href");
      lyrics.removeAttribute("aria-label");
    }
  }

  function render() {
    const connected = Boolean(client.session);
    byId("spotify-connect-card").hidden = connected;
    byId("spotify-account-controls").hidden = !connected;
    byId("spotify-connect").disabled = busy;
    byId("spotify-connect").setAttribute("aria-busy", String(busy));
    const track = playback?.item;
    const activeTarget = onChosenDevice();
    const available = connected && !busy && !premiumRequired;
    const playing = activeTarget && Boolean(playback?.is_playing);
    byId("spotify-play").disabled = !available || (activeTarget && actionBlocked(playing ? "pausing" : "resuming"));
    byId("spotify-play").setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
    byId("spotify-play").querySelector("use").setAttribute("href", playing ? "#i-pause" : "#i-play");
    byId("spotify-previous").disabled = !available || !activeTarget || !track || actionBlocked("skipping_prev");
    byId("spotify-next").disabled = !available || !activeTarget || !track || actionBlocked("skipping_next");
    seek.disabled = !available || !activeTarget || !track?.duration_ms || actionBlocked("seeking");
    const supportsVolume = activeTarget && (deviceSelect.value === "browser" || playback?.device?.supports_volume === true);
    volume.disabled = !available || !supportsVolume;
    byId("spotify-start-playlist").disabled = !available || !spotifyUrl || (activeTarget && actionBlocked("interrupting_playback"));
    deviceSelect.disabled = !connected || busy;
    byId("spotify-refresh-devices").disabled = !connected || busy;
    byId("spotify-track-title").textContent = track?.name || "Elige dónde escuchar";
    byId("spotify-track-artist").textContent = track ? track.artists?.map(artist => artist.name).join(", ") || track.show?.name || "Spotify" : "Tu música aparecerá al reproducir.";
    const trackURL = track?.external_urls?.spotify;
    byId("spotify-track-link").href = typeof trackURL === "string" && trackURL.startsWith("https://open.spotify.com/") ? trackURL : spotifyUrl || "https://open.spotify.com/";
    const photo = track?.album?.images?.[0]?.url || track?.images?.[0]?.url;
    const img = byId("spotify-track-image");
    const hasPhoto = typeof photo === "string" && photo.startsWith("https://");
    img.hidden = !hasPhoto;
    byId("spotify-art-placeholder").toggleAttribute("hidden", hasPhoto);
    if (hasPhoto && img.getAttribute("src") !== photo) img.src = photo;
    if (!hasPhoto) img.removeAttribute("src");
    if (document.activeElement !== volume) {
      const value = Number(playback?.device?.volume_percent);
      if (supportsVolume && playback?.device?.volume_percent !== null && Number.isFinite(value)) volume.value = value;
      byId("spotify-volume-value").textContent = supportsVolume ? `${volume.value}%` : "Desde el dispositivo";
    }
    byId("spotify-device-note").textContent = playback?.device?.name ? `Ahora: ${playback.device.name}. El destino cambia al pulsar reproducir.` : "El dispositivo cambia al pulsar reproducir. Abre Spotify si quieres usar otro equipo.";
    renderProgress();
    renderListeningCard();
    updateHeader();
  }

  function setMode(next) {
    mode = next;
    panel.hidden = mode !== "controls";
    byId("spotify-embed-panel").hidden = mode !== "embed";
    document.querySelectorAll("[data-spotify-mode]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.spotifyMode === mode)));
    if (mode === "embed") byId("player-status").textContent = "Elegir canción · tu playlist";
    else if (client.session) schedulePoll(0);
    render();
  }

  function pollingVisible() {
    return Boolean(client.session && !busy && !document.hidden && (musicSectionVisible || (mode === "controls" && !musicPlayer.hidden && !musicPlayer.classList.contains("is-collapsed"))));
  }

  function schedulePoll(delay = 8000) {
    clearTimeout(pollTimer);
    if (!pollingVisible()) return;
    pollTimer = setTimeout(async () => {
      try { await readPlayback(); } catch (error) { if (client.session) setError(error); }
      schedulePoll(Math.max(8000, client.rateLimitUntil - Date.now()));
    }, Math.max(delay, client.rateLimitUntil - Date.now(), 0));
  }

  async function readPlayback() {
    if (pollPromise) return pollPromise;
    pollPromise = (async () => {
      const data = await client.api("/me/player");
      playback = data;
      playbackAt = Date.now();
      playbackFresh = true;
      render();
      return data;
    })();
    try { return await pollPromise; } catch (error) { playbackFresh = false; renderListeningCard(); throw error; } finally { pollPromise = null; }
  }

  async function readDevices() {
    const result = await client.api("/me/player/devices");
    devices = Array.isArray(result?.devices) ? result.devices.filter(device => device.id && !device.is_restricted) : [];
    const selected = deviceSelect.value;
    const options = [new Option("Este navegador", "browser"), new Option("Dispositivo activo de Spotify", "active")];
    for (const device of devices.filter(device => device.id !== sdkDeviceId)) options.push(new Option(`${device.name}${device.is_active ? " · sonando aquí" : ""}`, device.id));
    deviceSelect.replaceChildren(...options);
    deviceSelect.value = [...deviceSelect.options].some(option => option.value === selected) ? selected : "active";
    render();
  }

  function unloadSDK() {
    sdkGeneration++;
    sdk?.disconnect();
    sdk = null;
    sdkDeviceId = "";
    sdkConnectPromise = null;
  }

  function loadSDK() {
    if (window.Spotify?.Player) return Promise.resolve();
    if (sdkLoadPromise) return sdkLoadPromise;
    sdkLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      const timeout = setTimeout(() => { script.remove(); sdkLoadPromise = null; reject(new SpotifyRequestError("El reproductor tardó demasiado en cargar. Prueba otra vez o elige un dispositivo de Spotify.")); }, 15000);
      window.onSpotifyWebPlaybackSDKReady = () => { clearTimeout(timeout); resolve(); };
      script.onerror = () => { clearTimeout(timeout); script.remove(); sdkLoadPromise = null; reject(new SpotifyRequestError("No se pudo cargar el reproductor. Revisa los bloqueadores del navegador o controla otro dispositivo.")); };
      document.head.append(script);
    });
    return sdkLoadPromise;
  }

  async function connectSDK() {
    if (sdk && sdkDeviceId) return sdkDeviceId;
    if (sdkConnectPromise) return sdkConnectPromise;
    sdk?.disconnect();
    sdk = null;
    const generation = ++sdkGeneration;
    const pending = (async () => {
      await loadSDK();
      if (!client.session || generation !== sdkGeneration) throw new SpotifyRequestError("La conexión fue cancelada.");
      return new Promise((resolve, reject) => {
        const player = new window.Spotify.Player({ name: "Sweet Notes · Maribel", volume: .65, getOAuthToken: callback => { client.accessToken().then(callback).catch(error => { callback(""); setError(error); }); } });
        sdk = player;
        let settled = false;
        const timeout = setTimeout(() => fail("Spotify no pudo preparar este navegador. Prueba otra vez o elige otro dispositivo."), 20000);
        const fail = message => {
          if (generation !== sdkGeneration) { clearTimeout(timeout); if (!settled) { settled = true; reject(new SpotifyRequestError("La conexión fue cancelada.")); } return; }
          const error = new SpotifyRequestError(message);
          setError(error);
          clearTimeout(timeout);
          player.disconnect();
          if (sdk === player) { sdk = null; sdkDeviceId = ""; }
          if (!settled) { settled = true; reject(error); }
          render();
        };
        player.addListener("ready", ({ device_id }) => {
          if (generation !== sdkGeneration) { player.disconnect(); clearTimeout(timeout); if (!settled) { settled = true; reject(new SpotifyRequestError("La conexión fue cancelada.")); } return; }
          sdkDeviceId = device_id;
          const duplicate = [...deviceSelect.options].find(option => option.value === device_id);
          if (duplicate && deviceSelect.value !== device_id) duplicate.remove();
          clearTimeout(timeout);
          if (!settled) { settled = true; resolve(device_id); }
          connectionState.textContent = "Este navegador está listo. Pulsa reproducir cuando quieras.";
          render();
        });
        player.addListener("not_ready", () => { if (sdk === player) { sdkDeviceId = ""; setError(new SpotifyRequestError("Este navegador perdió la conexión con Spotify. Vuelve a reproducir o elige otro dispositivo.")); render(); } });
        player.addListener("player_state_changed", () => { if (sdk === player) schedulePoll(350); });
        player.addListener("autoplay_failed", () => setError(new SpotifyRequestError("Tu navegador necesita otro toque para permitir el audio. Pulsa Reproducir de nuevo.")));
        player.addListener("initialization_error", () => fail("Este navegador no pudo preparar el audio protegido. Actualízalo o elige otro dispositivo de Spotify."));
        player.addListener("authentication_error", () => fail("Spotify no pudo validar la sesión. Desconecta y vuelve a conectar tu cuenta."));
        player.addListener("account_error", () => { premiumRequired = true; fail("Para escuchar con estos controles necesitas una cuenta de Spotify Premium. Puedes seguir usando La playlist."); });
        player.addListener("playback_error", () => setError(new SpotifyRequestError("No se pudo reproducir esta canción. Prueba la siguiente o abre tu playlist en Spotify.")));
        player.connect().then(connected => { if (!connected) fail("No se pudo conectar el navegador con Spotify. Vuelve a intentarlo."); }).catch(() => fail("No se pudo conectar el navegador con Spotify. Vuelve a intentarlo."));
      });
    })();
    sdkConnectPromise = pending;
    try { return await pending; } finally { if (sdkConnectPromise === pending) sdkConnectPromise = null; }
  }

  async function targetDevice() {
    if (deviceSelect.value === "browser") return connectSDK();
    if (deviceSelect.value === "active") {
      await readDevices();
      const active = devices.find(device => device.is_active);
      if (!active) throw new SpotifyRequestError("Abre Spotify y reproduce algo en el dispositivo que quieres controlar; después actualiza la lista.");
      return active.id;
    }
    return deviceSelect.value;
  }

  async function command(action) {
    if (busy) return;
    busy = true;
    clearTimeout(pollTimer);
    clearError();
    render();
    try { if (pollPromise) await pollPromise.catch(() => {}); await action(); }
    catch (error) { setError(error); }
    finally { busy = false; render(); schedulePoll(800); }
  }

  async function startPlayback(startPlaylist = false) {
    const target = await targetDevice();
    const query = `?device_id=${encodeURIComponent(target)}`;
    const sameDevice = playback?.device?.id === target;
    if (!startPlaylist && sameDevice && playback?.is_playing) {
      await client.api("/me/player/pause" + query, { method: "PUT" });
    } else {
      if (!sameDevice) await client.api("/me/player", { method: "PUT", body: { device_ids: [target], play: false } });
      const body = startPlaylist || !playback?.item ? { context_uri: `spotify:${new URL(spotifyUrl).pathname.split("/").filter(Boolean).join(":")}` } : undefined;
      await client.api("/me/player/play" + query, { method: "PUT", ...(body ? { body } : {}) });
    }
    connectionState.textContent = "Controles conectados a Spotify.";
    await readPlayback();
  }

  async function restoreAccount() {
    const profile = await client.api("/me");
    byId("spotify-account-name").textContent = profile?.display_name || "Cuenta de Spotify conectada";
    premiumRequired = Boolean(profile?.product && profile.product !== "premium");
    if (premiumRequired) setError(new SpotifyRequestError("Estos controles requieren Spotify Premium. La playlist sigue disponible en la otra pestaña."));
    connectionState.textContent = "Tu cuenta está conectada. Elige dónde escuchar.";
    render();
    await readDevices();
    await readPlayback();
    if (deviceSelect.value === "browser" && !premiumRequired) {
      try { await connectSDK(); } catch (error) { setError(error); }
    }
    schedulePoll();
  }

  function resetAccount() {
    unloadSDK();
    clearTimeout(pollTimer);
    playback = null;
    playbackFresh = true;
    devices = [];
    premiumRequired = false;
    byId("spotify-account-name").textContent = "Cuenta conectada";
    connectionState.textContent = "Conecta tu cuenta para usar los controles.";
    deviceSelect.replaceChildren(new Option("Este navegador", "browser"), new Option("Dispositivo activo de Spotify", "active"));
    render();
  }

  client.onSessionExpired = resetAccount;
  document.querySelectorAll("[data-spotify-mode]").forEach(button => button.addEventListener("click", () => setMode(button.dataset.spotifyMode)));
  document.querySelectorAll("[data-spotify-open]").forEach(button => button.addEventListener("click", () => { openMusicPlayer(); setMode("controls"); }));
  byId("spotify-connect").addEventListener("click", () => command(async () => {
    connectionState.textContent = "Abriendo el inicio de sesión de Spotify…";
    try { window.location.assign(await client.authorizationURL(location.href)); }
    catch (error) { connectionState.textContent = "Conecta tu cuenta para usar los controles."; throw error; }
  }));
  byId("spotify-disconnect").addEventListener("click", () => { client.disconnect(); resetAccount(); clearError(); showToast("Cuenta desconectada de esta pestaña."); byId("spotify-connect").focus(); });
  byId("spotify-play").addEventListener("click", () => {
    if (deviceSelect.value === "browser" && sdk) sdk.activateElement().catch(() => {});
    command(() => startPlayback());
  });
  byId("spotify-start-playlist").addEventListener("click", () => {
    if (deviceSelect.value === "browser" && sdk) sdk.activateElement().catch(() => {});
    command(() => startPlayback(true));
  });
  for (const [id, endpoint] of [["spotify-previous", "previous"], ["spotify-next", "next"]]) byId(id).addEventListener("click", () => command(async () => {
    await client.api(`/me/player/${endpoint}?device_id=${encodeURIComponent(chosenDeviceId())}`, { method: "POST" });
    await readPlayback();
  }));
  seek.addEventListener("input", () => {
    const position = Number(seek.value) / 100 * (playback?.item?.duration_ms || 0);
    seek.setAttribute("aria-valuetext", `${clock(position)} de ${clock(playback?.item?.duration_ms)}`);
    byId("spotify-elapsed").textContent = clock(position);
  });
  seek.addEventListener("change", () => command(async () => {
    const position = Math.round(Number(seek.value) / 100 * (playback?.item?.duration_ms || 0));
    await client.api(`/me/player/seek?position_ms=${position}&device_id=${encodeURIComponent(chosenDeviceId())}`, { method: "PUT" });
    await readPlayback();
  }));
  volume.addEventListener("input", () => { byId("spotify-volume-value").textContent = `${volume.value}%`; });
  volume.addEventListener("change", () => command(async () => {
    if (deviceSelect.value === "browser" && sdk) await sdk.setVolume(Number(volume.value) / 100);
    else await client.api(`/me/player/volume?volume_percent=${Number(volume.value)}&device_id=${encodeURIComponent(chosenDeviceId())}`, { method: "PUT" });
    await readPlayback();
  }));
  byId("spotify-refresh-devices").addEventListener("click", () => command(async () => { await readDevices(); await readPlayback(); connectionState.textContent = "Lista de dispositivos actualizada."; }));
  deviceSelect.addEventListener("change", () => command(async () => {
    render();
    if (deviceSelect.value === "browser" && !premiumRequired) await connectSDK();
    connectionState.textContent = "Destino elegido. Pulsa reproducir para escuchar allí.";
  }));
  byId("spotify-track-image").addEventListener("error", () => { byId("spotify-track-image").hidden = true; byId("spotify-art-placeholder").removeAttribute("hidden"); });
  byId("listening-cover-image").addEventListener("error", () => { byId("listening-cover-image").hidden = true; byId("listening-cover-placeholder").removeAttribute("hidden"); });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      musicSectionVisible = entries.some(entry => entry.isIntersecting);
      schedulePoll(0);
    }, { threshold: 0 });
    observer.observe(byId("musica"));
  } else {
    musicSectionVisible = true;
  }
  document.addEventListener("spotify-playlist-changed", render);
  document.addEventListener("music-visibility-changed", () => { render(); schedulePoll(0); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(pollTimer); else schedulePoll(0); });
  window.addEventListener("pagehide", () => { clearTimeout(pollTimer); unloadSDK(); });
  window.addEventListener("pageshow", event => { if (event.persisted) schedulePoll(0); });
  setInterval(() => { if (pollingVisible()) renderProgress(); }, 1000);
  render();

  const callback = new URL(location.href).searchParams;
  if (callback.has("code") || callback.has("error")) {
    busy = true;
    setMode("controls");
    connectionState.textContent = "Comprobando la autorización de Spotify…";
    render();
    client.finishAuthorization(location.href, url => history.replaceState(history.state, "", url)).then(async () => {
      syncRecipeWithLocation();
      openMusicPlayer();
      await restoreAccount();
    }).catch(error => { syncRecipeWithLocation(); openMusicPlayer(); connectionState.textContent = "La conexión necesita otro intento."; setError(error); }).finally(() => { busy = false; render(); schedulePoll(0); });
  } else if (client.session) {
    restoreAccount().catch(error => { setError(error); render(); });
  }
}

initializeSpotifyControls();

function initializeHiddenQuokka() {
  const corner = document.getElementById("secret-corner");
  const trigger = document.getElementById("secret-paw");
  const note = document.getElementById("secret-quokka");
  const dismiss = document.getElementById("secret-dismiss");

  function setOpen(open, restoreFocus = true) {
    trigger.setAttribute("aria-expanded", String(open));
    note.hidden = !open;
    corner.classList.toggle("secret-open", open);
    if (open) {
      note.focus({ preventScroll: true });
      const bounds = note.getBoundingClientRect();
      const topLimit = mobileLayout.matches ? 104 : 110;
      const bottomLimit = window.innerHeight - (mobileLayout.matches ? 96 : 22);
      const adjustment = bounds.top < topLimit ? bounds.top - topLimit : Math.max(0, bounds.bottom - bottomLimit);
      if (adjustment) window.scrollBy({ top: adjustment, behavior: reducedMotion.matches ? "instant" : "smooth" });
    } else if (restoreFocus && !trigger.closest("[inert]")) trigger.focus({ preventScroll: true });
  }

  trigger.addEventListener("click", () => setOpen(note.hidden));
  dismiss.addEventListener("click", () => setOpen(false));
  document.addEventListener("click", event => {
    if (!note.hidden && !corner.contains(event.target)) setOpen(false, false);
  });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape" || note.hidden || pageShell.inert) return;
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);
  }, true);
}

initializeHiddenQuokka();

function initializeCollectionDetails() {
  const batch = document.getElementById("new-batch");
  if (batch && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      batch.classList.add("batch-arrived");
      observer.disconnect();
    }, { threshold: .25 });
    observer.observe(batch);
  }
}

function celebrateIngredients() {
  if (reducedMotion.matches) return;
  const progress = document.getElementById("ingredients-progress");
  if (!progress) return;
  progress.querySelectorAll(".ingredient-spark").forEach(spark => spark.remove());
  for (let index = 0; index < 7; index += 1) {
    const spark = document.createElement("span");
    const angle = -Math.PI + index * Math.PI / 6;
    spark.className = "ingredient-spark";
    spark.setAttribute("aria-hidden", "true");
    spark.style.setProperty("--spark-x", `${Math.cos(angle) * 38}px`);
    spark.style.setProperty("--spark-y", `${Math.sin(angle) * 32 - 8}px`);
    spark.style.setProperty("--spark-turn", `${index * 57 - 120}deg`);
    spark.style.setProperty("--spark-color", index % 2 ? "#8f87ad" : "#52677d");
    progress.append(spark);
    spark.addEventListener("animationend", () => spark.remove(), { once: true });
    setTimeout(() => spark.remove(), 850);
  }
}

initializeCollectionDetails();
