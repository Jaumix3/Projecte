// Product Detail Page Logic

const productDatabase = {
    'prod-1': {
        id: 'prod-1',
        name: "Mesa de mezclas JJ'S Sound Systems Pro 56sm",
        price: 49.99,
        image: '../assets/img/ChatGPT Image Dec 2, 2025, 01_45_00 PM.png',
        stock: 'disponible',
        description: "La mesa de mezclas JJ'S Sound Systems Pro 56sm es ideal para estudios pequeños, productores y entusiastas. Ofrece calidad de sonido profesional y controles intuitivos para un flujo de trabajo eficiente.",
        specs: [
            '56 canales de mezcla',
            'Calidad de sonido profesional',
            'Entradas XLR balanceadas',
            'Salida estéreo principal',
            'Conectividad versátil',
            'Diseño compacto y fácil de transportar'
        ]
    },
    'prod-2': {
        id: 'prod-2',
        name: "Tarjeta de sonido JJ'S Sound Systems 2ch",
        price: 89.99,
        image: '../assets/img/ChatGPT Image Dec 2, 2025, 01_52_49 PM.png',
        stock: 'disponible',
        description: 'Tarjeta de sonido de 2 canales diseñada para usuarios que buscan calidad profesional en entornos domésticos. Ideal para grabación casera, podcasts y producción de audio.',
        specs: [
            '2 canales de entrada',
            'Resolución 24-bit / 192 kHz',
            'Latencia ultrabaja',
            'Entradas XLR y Jack 1/4"',
            'Salida de auriculares independiente',
            'Alimentación por USB',
            'Incluye controlador'
        ]
    },
    'prod-3': {
        id: 'prod-3',
        name: "Altavoces JJ'S Sound Systems Pro 789",
        price: 129.99,
        image: '../assets/img/altavoces.jpg',
        stock: 'agotado',
        description: 'Altavoces profesionales pensados para conciertos y eventos en vivo. Ofrecen un sonido potente y claro, adecuados para actuaciones y refuerzo sonoro en directo.',
        specs: [
            'Potencia: 500 W RMS',
            'Respuesta en frecuencia: 45 Hz - 20 kHz',
            'Sensibilidad: 95 dB SPL',
            'Caja de madera',
            'Conectores XLR estándar',
            'Diseño optimizado para directo'
        ]
    },
    'prod-4': {
        id: 'prod-4',
        name: 'Micrófono Shure SM58',
        price: 59.99,
        image: '../assets/img/shure-sm58-lce.jpg',
        stock: 'disponible',
        description: 'El micrófono Shure SM58 es una referencia entre los vocalistas y para actuaciones en directo. Ofrece un sonido claro y una construcción robusta ideal para uso profesional.',
        specs: [
            'Patrón polar cardioide',
            'Respuesta en frecuencia: 50 - 15.000 Hz',
            'Sensibilidad: -37 dBV/Pa',
            'Impedancia: 310 Ω',
            'Conector XLR balanceado',
            'Construcción resistente',
            'Paraviento incluido'
        ]
    },
    'prod-5': {
        id: 'prod-5',
        name: 'Auriculares JJ\'S Sound Systems Studio Monitor PRO',
        price: 199.99,
        image: '../assets/img/auriculares.png',
        stock: 'disponible',
        description: 'Auriculares profesionales de estudio con sonido plano y equilibrado. Perfectos para monitoreo, mezcla y masterización. Cómodos para sesiones largas de trabajo.',
        specs: [
            'Transductores de 40mm',
            'Respuesta en frecuencia: 20 Hz - 20 kHz',
            'Impedancia: 32 Ω',
            'Sensibilidad: 98 dB SPL',
            'Cable destacable',
            'Diseño cerrado',
            'Almohadillas de espuma viscoelástica',
            'Incluye cable adaptador'
        ]
    },
    'prod-6': {
        id: 'prod-6',
        name: 'Micrófono dinámico JJ\'S Sound Systems Studio',
        price: 79.99,
        image: '../assets/img/microfono.png',
        stock: 'agotado',
        description: 'Micrófono dinámico de calidad studio para grabación de voces y instrumentos. Excelente relación calidad-precio para estudios semiprofesionales.',
        specs: [
            'Tipo: Dinámico cardioide',
            'Respuesta en frecuencia: 40 Hz - 15 kHz',
            'Sensibilidad: -35 dBV/Pa',
            'Impedancia: 600 Ω',
            'Conector XLR balanceado',
            'Filtro de viento incluido',
            'Soporte de micrófono'
        ]
    },
    'prod-7': {
        id: 'prod-7',
        name: 'Cable XLR profesional JJ\'S Sound Systems 10m',
        price: 24.99,
        image: '../assets/img/xlr.png',
        stock: 'disponible',
        description: 'Cable de micrófono XLR de 10 metros con conectores de calidad profesional. Ideal para conexiones de audio balanceado en estudio o directo.',
        specs: [
            'Longitud: 10 metros',
            'Conectores XLR macho/hembra',
            'Blindaje doble',
            'Núcleo de cobre de alta pureza',
            'Bajo nivel de ruido',
            'Flexible y duradero',
            'Disponible en negro'
        ]
    },
    'prod-8': {
        id: 'prod-8',
        name: 'Interface de audio USB JJ\'S Sound Systems 4x4',
        price: 149.99,
        image: '../assets/img/interfaceaudio.png',
        stock: 'disponible',
        description: 'Interface de audio versátil con 4 entradas y 4 salidas. Ideal para productores y músicos que necesitan múltiples canales de grabación.',
        specs: [
            '4 entradas de línea',
            '4 salidas de línea',
            'Resolución 24-bit / 192 kHz',
            'Conectividad USB 2.0',
            'Monitoreo cero latencia',
            'Incluye software DAW'
        ]
    },
    'prod-9': {
        id: 'prod-9',
        name: 'Micrófono condensador JJ\'S Sound Systems C47',
        price: 139.99,
        image: '../assets/img/microfonocondensadpr.png',
        stock: 'agotado',
        description: 'Micrófono condensador de diafragma grande para grabaciones vocales y de instrumentos acústicos. Sensibilidad excepcional.',
        specs: [
            'Tipo: Condensador cardioide',
            'Respuesta en frecuencia: 20 Hz - 20 kHz',
            'Sensibilidad: -35 dBV/Pa',
            'Requiere alimentación fantasma 48V',
            'Conector XLR balanceado',
            'Incluye soporte y capsula'
        ]
    },
    'prod-10': {
        id: 'prod-10',
        name: 'Atril de monitor de estudio JJ\'S Sound Systems Pro',
        price: 34.99,
        image: '../assets/img/monitorstudio.png',
        stock: 'disponible',
        description: 'Atril ajustable para colocar monitores de estudio a la altura y ángulo ideal. Fabricado en acero robusto.',
        specs: [
            'Altura ajustable de 15 a 30 cm',
            'Soporta hasta 10 kg',
            'Ángulo de inclinación ajustable',
            'Base antideslizante',
            'Material acero pintado',
            'Fácil montaje sin herramientas'
        ]
    },
    'prod-11': {
        id: 'prod-11',
        name: 'Ecualizador gráfico JJ\'S Sound Systems 10 bandas',
        price: 89.99,
        image: '../assets/img/equalizador.png',
        stock: 'disponible',
        description: 'Ecualizador de 10 bandas para ajustar el sonido según tus preferencias. Control preciso de frecuencias.',
        specs: [
            '10 bandas de ecualizador',
            'Rango de frecuencia: 31 Hz - 16 kHz',
            'Ganancia de ±12 dB',
            'Entrada y salida XLR',
            'Indicador LED de nivel',
            'Diseño profesional rackeable'
        ]
    },
    'prod-12': {
        id: 'prod-12',
        name: 'Espuma acústica JJ\'S Sound Systems 24 piezas',
        price: 59.99,
        image: '../assets/img/espumaacustica.png',
        stock: 'disponible',
        description: 'Paneles de espuma acústica para mejorar la calidad sonora de tu estudio. Fácil instalación.',
        specs: [
            '24 paneles de 30x30 cm',
            'Espesor: 5 cm',
            'Absorción de ruido: NRC 0.8',
            'Ignífugo',
            'Color negro',
            'Incluye adhesivo'
        ]
    },
    'prod-13': {
        id: 'prod-13',
        name: 'Pedal de control para estudio JJ\'S Sound Systems',
        price: 44.99,
        image: '../assets/img/pedalcontrol.png',
        stock: 'agotado',
        description: 'Pedal de control para manejar funciones de grabación y reproducción desde el pie.',
        specs: [
            'Conexión USB',
            'Función grab/stop',
            'LED indicador',
            'Cable de 2 metros',
            'Compatible DAWs principales',
            'Batería recargable'
        ]
    },
    'prod-14': {
        id: 'prod-14',
        name: 'Micrófono inalámbrico JJ\'S Sound Systems VHF',
        price: 179.99,
        image: '../assets/img/microfonoinalambrico.png',
        stock: 'disponible',
        description: 'Sistema de micrófono inalámbrico profesional con receptor de escritorio. Ideal para presentaciones.',
        specs: [
            'Frecuencia: VHF 200 MHz',
            'Alcance: 50 metros',
            'Batería de larga duración',
            'Receptor con pantalla LCD',
            'Conector XLR salida',
            'Incluye 2 micrófonos'
        ]
    },
    'prod-15': {
        id: 'prod-15',
        name: 'Preamp de tubo JJ\'S Sound Systems Vintage',
        price: 299.99,
        image: '../assets/img/preamp.png',
        stock: 'disponible',
        description: 'Preamplificador de tubo que añade calidez y características a las grabaciones vocales.',
        specs: [
            'Tubo de vacío ECC83',
            'Ganancia variable 0-60 dB',
            'Entrada micrófono XLR',
            'Salida de línea XLR',
            'Phantom power 48V',
            'Transformador de salida'
        ]
    },
    'prod-16': {
        id: 'prod-16',
        name: 'Compresor de audio JJ\'S Sound Systems Digital',
        price: 199.99,
        image: '../assets/img/compressor.png',
        stock: 'agotado',
        description: 'Compresor digital con múltiples opciones para control dinámico del audio.',
        specs: [
            'Ratio: 1.5:1 a ∞:1',
            'Attack: 0.1 a 100 ms',
            'Release: 10 ms a 5 s',
            'Entrada y salida XLR',
            'Medidor LED',
            'Bypass incluido'
        ]
    },
    'prod-17': {
        id: 'prod-17',
        name: 'Pantalla acústica para micrófono JJ\'S Sound Systems',
        price: 29.99,
        image: '../assets/img/pantallaacustica.png',
        stock: 'disponible',
        description: 'Pantalla de aislamiento acústico para reducir reflejos de sonido en grabaciones.',
        specs: [
            'Tamaño: 60x60 cm',
            'Material: Espuma absorbente',
            'Aislamiento de ruido ambiental',
            'Soporte metálico ajustable',
            'Peso: 1.5 kg',
            'Color gris oscuro'
        ]
    },
    'prod-18': {
        id: 'prod-18',
        name: 'Software DAW JJ\'S Sound Systems Studio Pro',
        price: 99.99,
        image: '../assets/img/DAW.png',
        stock: 'disponible',
        description: 'Software completo de grabación y producción musical con herramientas profesionales.',
        specs: [
            '128 pistas de audio',
            'Synth virtual incluido',
            'Efectos de reverb y delay',
            'Compatible Windows y Mac',
            'Licencia perpetua',
            'Actualizaciones incluidas'
        ]
    },
    'prod-19': {
        id: 'prod-19',
        name: 'Entrada MIDI USB JJ\'S Sound Systems Pro',
        price: 69.99,
        image: '../assets/img/entrada midiusb.png',
        stock: 'disponible',
        description: 'Controlador MIDI con teclado para producción musical y DAWs.',
        specs: [
            '25 teclas sensibles a velocidad',
            '8 botones de control',
            'Faders deslizantes',
            'Conexión USB',
            'Software incluido',
            'Alimentación USB'
        ]
    },
    'prod-20': {
        id: 'prod-20',
        name: 'Cable Jack 6.35mm TRS JJ\'S Sound Systems 5m',
        price: 19.99,
        image: '../assets/img/jack 3.5.png',
        stock: 'disponible',
        description: 'Cable profesional balanceado para conexiones de línea. Excelente para patching.',
        specs: [
            'Longitud: 5 metros',
            'Conectores Jack 6.35mm TRS',
            'Blindaje triple',
            'Baja capacitancia',
            'Color negro',
            'Flexible y duradero'
        ]
    },
    'prod-21': {
        id: 'prod-21',
        name: 'Monitor de estudio JJ\'S Sound Systems 5"',
        price: 249.99,
        image: '../assets/img/monitor 5\'\'.png',
        stock: 'agotado',
        description: 'Monitor de referencia de 5 pulgadas para mezcla y masterización precisa.',
        specs: [
            'Woofer 5"',
            'Tweeter de cúpula 1"',
            'Potencia: 100W',
            'Respuesta: 50 Hz - 20 kHz',
            'Filtros de sala',
            'XLR e RCA entrada'
        ]
    },
    'prod-22': {
        id: 'prod-22',
        name: 'Amplificador de auriculares JJ\'S Sound Systems Portable',
        price: 119.99,
        image: '../assets/img/Amplificador Auriculares.png',
        stock: 'disponible',
        description: 'Amplificador portátil para auriculares con batería recargable.',
        specs: [
            'Potencia: 1W RMS',
            'Entrada 3.5mm',
            'Entrada óptica S/PDIF',
            'Batería recargable 8h',
            'Control de volumen',
            'Tamaño compacto'
        ]
    },
    'prod-23': {
        id: 'prod-23',
        name: 'Oscilador de prueba JJ\'S Sound Systems Digital',
        price: 79.99,
        image: '../assets/img/osciladorp.png',
        stock: 'disponible',
        description: 'Generador de tono para calibración de equipos de audio.',
        specs: [
            'Rango: 20 Hz a 20 kHz',
            'Forma de onda: Senoidal',
            'Salida XLR',
            'Control de frecuencia y nivel',
            'LED indicador',
            'Acabado profesional'
        ]
    },
    'prod-24': {
        id: 'prod-24',
        name: 'Protector de picos JJ\'S Sound Systems 8 tomas',
        price: 39.99,
        image: '../assets/img/Pasted image.png',
        stock: 'disponible',
        description: 'Regleta de protección contra picos de tensión para tu equipamiento.',
        specs: [
            '8 tomas eléctricas',
            'Protección contra sobretensión',
            'Filtro de ruido EMI',
            'Interruptor independiente',
            'Cable de 3 metros',
            'Certificado de seguridad'
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId || !productDatabase[productId]) {
        document.body.innerHTML = '<main><p style="text-align: center; margin-top: 50px;">Producto no encontrado.</p></main>';
        return;
    }

    const product = productDatabase[productId];
    displayProduct(product);
    setupBuyButton(product);
});

function displayProduct(product) {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-price').textContent = product.price.toFixed(2);
    document.getElementById('product-description').textContent = product.description;

    // Stock status
    const stockElement = document.getElementById('product-stock');
    stockElement.textContent = product.stock === 'disponible' ? 'Disponibilidad: En stock' : 'Disponibilidad: Agotado';
    stockElement.parentElement.className = 'product-stock ' + product.stock;

    // Specs list
    const specsList = document.getElementById('product-specs-list');
    specsList.innerHTML = '';
    product.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Disable buy button if out of stock
    const buyBtn = document.getElementById('btn-compra');
    const quantityInput = document.getElementById('quantity');
    if (product.stock === 'agotado') {
        buyBtn.disabled = true;
        buyBtn.textContent = 'Agotado';
        quantityInput.disabled = true;
    }
}

function setupBuyButton(product) {
    const buyBtn = document.getElementById('btn-compra');
    const quantityInput = document.getElementById('quantity');

    if (product.stock === 'esgotat') return;

    buyBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        if (quantity < 1) {
            alert('La cantidad debe ser al menos 1');
            return;
        }

        for (let i = 0; i < quantity; i++) {
            agregarAlCarrito(product.id, product.name, product.price, product.image);
        }

        alert(`Se han añadido ${quantity} unidad${quantity > 1 ? 'es' : ''} al carrito.`);
        quantityInput.value = 1;
    });
}
