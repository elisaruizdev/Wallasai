const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Plant = require('../models/Plant.model');


const plants = [
    {
        "name": "Acer palmatum",
        "specie": "Tree",
        "img": "https://i.imgur.com/At9ZP9O.jpg",
        "price": "182 €",
        "description": "Arce japones que se cultiva en regiones templadas, perfecto para jardin pequeño.",
    },
    {
        "name": "Aesculus pavia",
        "specie": "Tree",
        "img": "https://i.imgur.com/I0nrNJa.jpg",
        "price": "142 €",
        "description": "Conocido como castaño de Indias, puede superar los 30 metros de altura. Si te encantan sus hojas palmeadas y de gran tamaño, pero no tienes mucho espacio, no dudes en comprarlo.",
    },
    {
        "name": "Albizia julibrissin ‘Summer chocolate’",
        "specie": "Tree",
        "img": "https://i.imgur.com/yMwYxpj.jpg",
        "price": "131 €",
        "description": "Variedad de 'Albizia julibrissin' pero con hojas verde oscuro, muy cuidada y a buen precio.",
    },
    {
        "name": "Brachychiton acerifolius",
        "specie": "Tree",
        "img": "https://i.imgur.com/OKKPrm7.jpg",
        "price": "145 €",
        "description": "Es conocido como árbol de fuego o árbol de la llama, ya que cuando florece, produce numerosas flores de color rojo fuego que cubren casi por completo su follaje.",
    },
    {
        "name": "Dracaena draco",
        "specie": "Tree",
        "img": "https://i.imgur.com/62zIBhi.jpg",
        "price": "1000 €",
        "description": "Tiene 80 años y esta en perfecto estado, ideal para cualquier amante de los árboles.",
    },
    {
        "name": "Delonix regia",
        "specie": "Tree",
        "img": "https://i.imgur.com/mM7naOO.jpg",
        "price": "400 €",
        "description": "Es muy bonito, pero lamentablemente no soporta las heladas, solo compradores que sepan cuidarlo, tiene 10 años.",
    },
    {
        "name": "Erythrina crista-galli",
        "specie": "Tree",
        "img": "https://i.imgur.com/sl4M4wg.jpg",
        "price": "104 €",
        "description": "Conocido como 'Cresta de Gallo' por el color rojo de sus flores, este arbol bonito y elegante encaja en cualquier entorno. Tiene 10 años de edad",
    },
    {
        "name": "Lagerstroemia indica",
        "specie": "Tree",
        "img": "https://i.imgur.com/dNqtQOV.jpg",
        "price": "333 €",
        "description": "Conocida como árbol de Júpiter, este es un árbol caducifolio ideal para jardines pequeños.",
    },
    {
        "name": "Picea glauca",
        "specie": "Tree",
        "img": "https://i.imgur.com/afMflKT.jpg",
        "price": "100 €",
        "description": "Es una conífera perennifolia que alcanza una altura máxima de 30 metros, perfecto si vives en un clima frío.",
    },
    {
        "name": "Pseudobombax ellipticum",
        "specie": "Tree",
        "img": "https://i.imgur.com/CUORyWD.jpg",
        "price": "120 €",
        "description": "Conocido como 'Coquito', árbol en perfecto estado con mas de 8 años.",
    },
    {
        "name": "Cedrus deodara",
        "specie": "Tree",
        "img": "https://i.imgur.com/uIBJ0eI.jpg",
        "price": "112 €",
        "description": "Comúnmente llamado cedro del Himalaya, solo gente que venga a buscarlo.",
    },
    {
        "name": "Lagerstroemia indica",
        "specie": "Tree",
        "img": "https://i.imgur.com/m8xEpM9.jpg",
        "price": "129 €",
        "description": "También conocido como 'árbol de Jupiter' usado principalmente para ornamentación, está en perfecto estado y tiene 8 años.",
    },
    {
        "name": "Brachychiton acerifolius",
        "specie": "Tree",
        "img": "https://i.imgur.com/QSEquSP.jpg",
        "price": "137 €",
        "description": "Llamado árbol de fuego illawarra, es una especie arbórea nativa de regiones subtropicales de la costa este de Australia. Es famoso por sus brillantes flores rojas acampanadas, que con frecuencia cubren todo el árbol cuando aún está sin hojas.",
    },
    {
        "name": "Aesculus pavia",
        "specie": "Tree",
        "img": "https://i.imgur.com/sl4M4wg.jpg",
        "price": "151 €",
        "description": "El falso castaño de flor roja, es una especie de pequeño árbol de hoja caduca o arbusto perteneciente a la familia de las sapindáceas. Es natural de las zonas meridionales de Estados Unidos.",
    },
    {
        "name": "Acer palmatum",
        "specie": "Tree",
        "img": "https://i.imgur.com/1ZhZtqV.jpg",
        "price": "182 €",
        "description": "Si te gustan los arces japoneses tenemos varios aparte del de la foto, no dudes en preguntar cualquier cosa.",
    },
    {
        "name": "Brachychiton acerifolius",
        "specie": "Tree",
        "img": "https://i.imgur.com/uIBJ0eI.jpg",
        "price": "148 €",
        "description": "También intercambio por otro árbol de características similares.",
    },

    {
        "name": "Drosera",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/RPQvrBQ.jpg",
        "price": "9,50€",
        "description": "Venta por sobre cultivo, varios tipos, buen precio",

    },

    {
        "name": "Cephalotus follicularis",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/ddecd5ff-9f06-4b66-86cf-c5f4f64be912",
        "price": "11€",
        "description": "se alimenta mediante unas copas o jarros que sus hojas forman, en las que los insectos se ahogan.",

    },
    {
        "name": "Drosera",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/1rM1qKN.jpg",
        "price": "9€",
        "description": "generan unas gotas de un líquido pegajoso y rico en azúcares que hace quedarse pegados a los insectos que vienen a alimentarse de él.",

    },
    {
        "name": "Cephalotus follicularis",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/fd0edb4b-e0b1-4ccf-b9e1-e15e81a1ac93",
        "price": "7,30€",
        "description": "Cultivadas con amor,mudanza, si coges más te hago precio",

    },
    {
        "name": "Nepenthes",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/R7MotmX.jpg",
        "price": "8€",
        "description": "muy llamativas por sus bonitas trampas jarra, llenas de un liquido almibarado que atrae a los insectos. ",

    },
    {
        "name": "Aldrovanda vesiculosa",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/3805c13a-1ac3-427d-9a6e-a5655f974c7d",
        "price": "8",
        "description": " planta carnívora acuática que podemos encontrar flotando en aguas quietas.  ",

    },

    {
        "name": "Aldrovanda vesiculosa",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/q0vgnlW.jpg",
        "price": "6€",
        "description": "Intento de mezcla con DIonasea ",

    },
    {
        "name": "Dionaea muscipula ",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/ece3659d-f454-4c0a-b64d-7aea005e38d4",
        "price": "7,50€",
        "description": "Sus peculiares trampas, que asemejan mandíbulas rodeadas de dientes, se cierran cuando detectan que se ha posado en ellas un insecto  ",

    },
    {
        "name": "Darlingtonia californica ",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/xq6Vyye.jpg",
        "price": "10€",
        "description": "su aspecto de serpiente irguiéndose y sacando la lengua, exactamente como una cobra.",

    },
    {
        "name": "Drosophyllum lusitanicum ",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/XLQAhDh.jpg",
        "price": "13€",
        "description": "Sus hojas pegajosas están cubiertas de mucílagos y al pegarse a ellas los insectos acaban siendo digeridos.",

    },
    {
        "name": "Dionaea muscipula ",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/3c7e3c27-ad00-45e4-999a-ab7dee346f04",
        "price": "2€",
        "description": "Se la regalé a mi mujer, al día siguiente se fué de casa... no la quiero,prácticamente regalada ",

    },
    {
        "name": "Drosophyllum lusitanicum ",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/dxxrGtJ.jpg",
        "price": "11€",
        "description": "Sus hojas pegajosas están cubiertas de mucílagos y al pegarse a ellas los insectos acaban siendo digeridos.",

    },
    {
        "name": "Darlingtonia californica ",
        "specie": "Planta Carnívora",
        "img": "https://imgur.com/d93ccc4c-7671-4e98-a908-8e16cc0dab97.jpg",
        "price": "15€",
        "description": "2 por precio de 15€,tengo demasiadas...",

    },
    {
        "name": "Pinguicula grandiflora",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/mIj6hbF.jpg",
        "price": "15",
        "description": " No cuenta con trampa realmente, pero sus hojas pegajosas atrapan a veces a insectos pequeños, de los que se alimenta.",

    },
    {
        "name": "Pinguicula grandiflora",
        "specie": "Planta Carnívora",
        "img": "https://i.imgur.com/erTJDu1.jpg",
        "price": "17€",
        "description": " Cuktivada en tierras pantanosas,cuidado al cambiar de clima....",

    },
    {
        "name": "Ariocarpus retusus",
        "specie": "cactus",
        "img": "https://i.imgur.com/ZVRmYym.jpg",
        "price": "45€",
        "description": "Vendo varios ejemplares de Ariocarpus retusus procedente del noreste de México. Tiene un año. Puede llegar a medir 25 cm de anchura por unos 10-12 cm de altura. Acepto intercambios.",
    },
    {
        "name": "Astrophytum asterias",
        "specie": "cactus",
        "img": "https://i.imgur.com/1qjmjGk.jpg",
        "price": "52€",
        "description": "Cactus Astrophytum asterias o Falso peyote del sur de Texas. Resistente a las sequías pero mejor cuidar en sombra ligera. Vendo varios ejemplares. A partir de 3 unidades la unidad sale a 40€. Si quieres más información escríbeme por privado.",
    },
    {
        "name": "Aztekium hintonii",
        "specie": "cactus",
        "img": "https://imgur.com/deb66d46-4c5c-4770-8898-f72c11654b42.jpg",
        "price": "195€",
        "description": "Vendo este ejemplar de Aztekium hintonii. Es originaria de Nuevo León, México. Tiene 8 años y está cuidada como una joya. Precio no negociable ",
    },
    {
        "name": "Cephalocereus senilis",
        "specie": "cactus",
        "img": "https://i.imgur.com/zBvmKjD.jpg",
        "price": "25€",
        "description": "Tengo un vivero con muchos ejemplares. Mejor ver.",
    },
    {
        "name": "Ferocactus glaucescens",
        "specie": "cactus",
        "img": "https://imgur.com/216282d7-0fb8-45de-8dc5-ccd90d89ea8c.jpg",
        "price": "170€",
        "description": "Raro ejemplar de Ferocactus glaucescens. Prefiero intercambiar a vender, qué me ofreces?.",
    },
    {
        "name": "Frailea castanea",
        "specie": "cactus",
        "img": "https://i.imgur.com/Zbmj4rj.jpg",
        "price": "300€",
        "description": "Tengo un ejemplar de este cactus pieza de coleccionista. Puedo negociar el precio, pero no mucho.",
    },
    {
        "name": "Leuchtenbergia principis",
        "specie": "cactus",
        "img": "https://imgur.com/0ffc0b82-a6af-4838-a442-b77c8ad76278.jpg",
        "price": "38€",
        "description": "Tengo 10 ejemplares. Vendo por separado. No se negocia el precio.",
    },
    {
        "name": "Stenocactus albatus",
        "specie": "cactus",
        "img": "https://i.imgur.com/FcocfVN.jpg",
        "price": "60€",
        "description": "Superbien cuidado. Tiene 6 años.",
    },
    {
        "name": "Sulcorebutia rauschii cv violacidermis",
        "specie": "cactus",
        "img": "https://imgur.com/af82d208-8c44-42bb-a4a6-37e4fc417750.jpg",
        "price": "122€",
        "description": "Tengo 4 ejemplares. Envío internacional.",
    },
    {
        "name": "Matucana haynei",
        "specie": "cactus",
        "img": "https://i.imgur.com/NrwF1Bq.jpg",
        "price": "320€",
        "description": "SOLO intercambio por Frailea castanea que provenga de Nuevo México.",
    },
    {
        "name": "M. Darwinii",
        "specie": "cactus",
        "img": "https://i.imgur.com/TVCmS2G.jpg",
        "price": "35€",
        "description": "URGENTE!!! Vendo cactus Darwinii con hojas bien carnosas, con espinillas y flores como se ve en la foto. Prefiero recogida en mi domicilio",
    },
    {
        "name": "Rebutia",
        "specie": "cactus",
        "img": "https://i.imgur.com/jB7IJHf.jpg",
        "price": "70€",
        "description": "Cactus rebutia. Muy bien cuidado. Vendo por traslado. Precio NEGOCIABLE.",
    },
    {
        "name": "Aztekium ritteri",
        "specie": "cactus",
        "img": "https://i.imgur.com/dF1TUKh.jpg",
        "price": "120€",
        "description": "Pieza de coleccionista, es muy raro encontrar este tipo de cactus. Precio NO negociable.",
    },
    {
        "name": "Crassula Morgan",
        "specie": "cactus",
        "img": "https://imgur.com/e9593300-286d-4951-8f82-c90b6c4f009e.jpg",
        "price": "55€",
        "description": "Maravilloso ejemplar de Crassula Morgan. Una ganga. Tiene 5 años y está muy bien cuidado. Acepto intercambios pero prefiero el dinero.",
    },
    {
        "name": "Tephrocactus geometricus",
        "specie": "cactus",
        "img": "https://i.imgur.com/4c4YhYr.jpg",
        "price": "45€",
        "description": "Vendo dos ejemplares de este cactus que es de coleccionista. Vendo por separado pero prefiero vender los dos juntos. Si quieres los dos corro con los gastos de entrega.",
    },
    {
        "name":"Hachi-Uye",
        "specie":"bonsai",
        "img":"https://i.imgur.com/9vTwMYX.jpg",
        "price":"1970",
        "description":"Estos bonsáis grandes son los más gigantescos de todos. Por lo general logran pasar los 120 centímetros, suelen ser pinos o árboles que se dan en zonas muy boscosas. Al igual que los otros les queda bien ser colocados en espacios exteriores, y el tratamiento que reciben, debe ser de gran constancia."
    },
    {
        "name":"Omono",
        "specie":"bonsai",
        "img":"https://i.imgur.com/7ga49uq.jpg",
        "price":"1740",
        "description":"Estos bonsáis miden entre 60 y 120 centímetros. Suelen ser formaciones que asemejan pinos o árboles boscosos; pueden ser colocados al exterior, en macetas de tamaño grande. Aunque no son muy comunes para trabajarse con la técnica bonsái, tienen una forma de belleza artística muy grata."
    },
    {
        "name":"Chumono",
        "specie":"bonsai",
        "img":"https://i.imgur.com/kMcqfxE.jpg",
        "price":"736",
        "description":"Aunque este bonsái se cataloga como uno mediano, o de poco peso, su altura puede sobrepasar el medio metro. Este tiene un tronco ligeramente uniforme, y sus ramificaciones logran asemejarse a las de árboles de muchos metros de alto. Con estos se pueden lograr formas variadas, y el control de sus hojas, puede dar diversas esculturas."
    },
    {
        "name":"Shito o Keshitsubu",
        /* "id":"1", */
        "specie":"bonsai",
        "img":"https://i.imgur.com/VK6WFNY.jpg",
        "price":"42",
        "description":"Es la categoría de bonsáis más pequeña que existe. El árbol o arbusto mide menos de 5 centímetros de altura, que es algo que se consigue sembrando la semilla directamente en la maceta -macetita más bien 🙂 – e ir podando la plántula. Por una cuestión de tamaño y de falta de espacio, por lo general solo tiene una o dos ramas muy cortas y algunas pocas hojas."
    },
    {
        "name":"Mame",
        "specie":"bonsai",
        "img":"https://i.imgur.com/TJc7GZx.jpg",
        "price":"63",
        "description":"El bonsái mame mide entre 5 y 15 centímetros. Para conseguir tener una planta sana, también se puede optar por sembrar la semilla en la maceta, o bien en conseguir un esqueje que nos parezca bonito y plantarlo ahí. Su mantenimiento consiste en ir pinzando las ramitas, y en regarlo muy a menudo para que no se seque."
    },
    {
        "name":"Shohin",
        "specie":"bonsai",
        "img":"https://i.imgur.com/TPdwbqt.jpg",
        "price":"554",
        "description":"Los Shohin son bonsáis que miden entre los 15 y los 25 centímetros. Suelen ser los más fáciles de encontrar, ya que este es un tamaño muy atractivo, y que además, como las raíces tienen una bandeja algo más grande, pueden conseguir los nutrientes que necesitan para que el árbol sea una planta relativamente sencilla de cuidar. Por todo ello, son los más adecuados para los principiantes."
    },
    {
        "name":"Komono o Kotate Mochi",
        "specie":"bonsai",
        "img":"https://i.imgur.com/L2TJI3y.jpg",
        "price":"650",
        "description":"Estos bonsáis miden entre los 15 y los 31 centímetros. Al igual que los Shohin, no son muy difíciles de mantener. Con este tamaño recomiendo mucho darles un estilo de bosque que ahora veremos, o los azotados por el viento, pero debes saber que cualquiera puede quedar bien -respetando el árbol, eso sí-. "
    },
    {
        "name":"Chokkan",
        "specie":"bonsai",
        "img":"https://i.imgur.com/OPNZZwq.jpg",
        "price":"1276",
        "description":"El Chokkan es el estilo de bonsái más común y más fácil de hacer. Se caracteriza por su tronco recto y unas ramas colocadas de tal manera que, si vemos a la planta desde una cierta distancia, distinguimos una silueta triangular."
    },
    {
        "name":"Moyogi",
        "specie":"bonsai",
        "img":"https://i.imgur.com/4rpj5Cd.jpg",
        "price":"366",
        "description":"El tronco no es recto, sino sinuoso. También es muy fácil de conseguir, pues son muchos los árboles que se adaptan a este estilo, como las coníferas."
    },
    {
        "name":"Shakan",
        "specie":"bonsai",
        "img":"https://i.imgur.com/XOLcGBS.jpg",
        "price":"560",
        "description":"Se trata de un árbol o arbusto cuyo tronco se ha trabajado inclinándolo no más de 45º. Su copa es triangular."
    },
    {
        "name":"Kengai",
        "specie":"bonsai",
        "img":"https://i.imgur.com/jH1RQnv.jpg",
        "price":"717",
        "description":"Es uno de los estilos más curiosos. Kengai, o cascada, es un estilo en el que el ápice del tronco se encuentra por debajo del borde de la maceta. "
    },
    {
        "name":"Han Kengai",
        "specie":"bonsai",
        "img":"https://i.imgur.com/cDIB6O2.jpg",
        "price":"1265",
        "description":"O semi-cascada. Parecido al Kengai, pero el ápice se encuentra por debajo del borde de la maceta pero por encima de la base de la misma."
    },
    {
        "name":"Fukinagashi",
        "specie":"bonsai",
        "img":"https://i.imgur.com/Rrfixy6.jpg",
        "price":"717",
        "description":"O barrido por el viento. Este estilo intenta imitar a los árboles que viven en zonas donde el viento sopla con tanta fuerza y regularidad que impide que crezcan ramas en algún lateral de la planta. El tronco se encuentra inclinado también, en la misma dirección que siguen las ramas."
    },
    {
        "name":"Neagari",
        "specie":"bonsai",
        "img":"https://i.imgur.com/IGKT4kR.jpg",
        "price":"1042",
        "description":"Este es un estilo que exige tener conocimientos y bastante experiencia en el cultivo de bonsáis, pues de lo contrario será difícil mantenerlo. Estas plantas crecen con las raíces expuestas, generalmente sobre una roca."
    },
    {
        "name":"Bunjin o Literati",
        "specie":"bonsai",
        "img":"https://i.imgur.com/uoTzgFy.jpg",
        "price":"512",
        "description":"Es un estilo de origen chino, que busca simular la caligrafía oriental. Estas plantas apenas tienen ramas, solo en el ápice de las mismas, y un tronco muy esbelto."
    },
    {
        "name":"Sokan",
        "specie":"bonsai",
        "img":"https://i.imgur.com/E95RHVt.jpg",
        "price":"680",
        "description":"Es un árbol con doble tronco, o »padre-hijo». Juntos deben de formar una especie de triángulo."
    },
    {
        "name":"Ikadabuki",
        "specie":"bonsai",
        "img":"https://i.imgur.com/DVuCsL8.jpg",
        "price":"820",
        "description":"Es el estilo balsa, en el que varias ramas surgen de un mismo tronco que se encuentra semi-enterrado en el suelo de manera longitudinal. Se trabaja como si fueran un grupo de árboles."
    },
    {
        "name":"Yose-Ue",
        "specie":"bonsai",
        "img":"https://i.imgur.com/nU24hDX.jpg",
        "price":"875",
        "description":"Se plantan, siempre en número impar, una serie de árboles que, tanto en conjunto como de forma individual, deben de respetar las reglas de la triangularidad."
    },
    {
        "name":"Kabudachi",
        "specie":"bonsai",
        "img":"https://i.imgur.com/BqJl2tq.jpg",
        "price":"715",
        "description":"Es un bonsái de tronco múltiple que brota de un solo nebari. Así y todo, se trabaja como si fuera un bosque."
    },
    {
        "name":"Hokidachi",
        "specie":"bonsai",
        "img":"https://i.imgur.com/jUVoFQf.jpg",
        "price":"1141",
        "description":"Es el estilo »en escoba», es uno de los más frecuentes. Las ramas brotan de un mismo punto del tronco, y se disponen en abanico hacia arriba."
    },
    {
        "name":"Sekijoju",
        "specie":"bonsai",
        "img":"https://i.imgur.com/TAPxgcU.jpg",
        "price":"612",
        "description":"Es un árbol o grupo de árboles que se plantan en las oquedades de una roca."
    },
];


mongoose
    .connect("mongodb+srv://plant:plant1234@cluster0.exk5r.mongodb.net/Wallasai?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {

        const allPlants = await Plant.find();

        if (allPlants.length) {
            await Plant.collection.drop();
            console.log('Drop database')
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {

        await Plant.insertMany(plants);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))

    .finally(() => mongoose.disconnect());