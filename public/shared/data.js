// Shared Product Data
const products = [
  {
    id: 1,
    brand: "G.Skill",
    name: "Trident Z5 RGB DDR5",
    specs: "32GB (2x16GB) 6400MHz CL32",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviews: 342,
    category: "ram",
    badge: "hot",
    image: "https://m.media-amazon.com/images/I/71DiVTefKBL.jpg",
    description:
      "La serie Trident Z5 RGB DDR5 rappresenta il top di gamma per i giocatori e gli appassionati di overclock. Con frequenze fino a 6400MHz e tempi di latenza CL32, offre prestazioni estreme per i sistemi più esigenti. Il design RGB personalizzabile si integra perfettamente con qualsiasi build gaming, mentre la costruzione di alta qualità garantisce stabilità e affidabilità anche sotto carichi intensi.",
    features: [
      "Frequenza: 6400MHz",
      "Latency: CL32-39-39-96",
      "Tensione: 1.35V",
      "RGB Addressable",
      "Compatibile Intel XMP 3.0",
      "Garanzia a vita",
    ],
    compatibility:
      "Compatibile con Intel 12th/13th/14th Gen e AMD Ryzen 7000 Series",
  },
  {
    id: 2,
    brand: "NVIDIA X ROG",
    name: "GeForce RTX 5080 - Hatsune Miku Edition",
    specs: "16GB GDDR7 | Ray Tracing",
    price: 1899.0,
    rating: 4.9,
    reviews: 128,
    category: "gpu",
    badge: "new",
    image:
      "https://m.media-amazon.com/images/I/81N3DhIhgpL._AC_UF1000,1000_QL80_.jpg",
    description:
      "L'edizione speciale Hatsune Miku della GeForce RTX 5080 combina prestazioni da top di gamma con un design unico ispirato alla celebre vocaloid. Con 16GB di memoria GDDR7 e architettura Ada Lovelace, offre prestazioni straordinarie nel gaming 4K e nella creazione di contenuti. Il design esclusivo include illuminazione RGB personalizzabile e artwork dedicato.",
    features: [
      "Architettura Ada Lovelace",
      "16GB GDDR7 Memory",
      "Ray Tracing e DLSS 3",
      "Design esclusivo Hatsune Miku",
      "RGB Addressable",
      "Alimentazione 16-pin",
    ],
    compatibility: "Richiede alimentatore 850W 80+ Gold, slot PCIe 4.0 x16",
  },
  {
    id: 3,
    brand: "Corsair",
    name: "Dominator Platinum DDR5",
    specs: "64GB (2x32GB) 6000MHz",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 189,
    category: "ram",
    badge: "sale",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/CMT32GX5M2X5200C38/Gallery/DOMINATOR_RGB_PLATINUM_BLACK_DDR5_01.webp",
    description:
      "La serie Dominator Platinum DDR5 rappresenta l'eccellenza nell'hardware premium per PC. Con capacità fino a 64GB e frequenze fino a 6000MHz, offre prestazioni estreme per workstation professionali e sistemi high-end. Il design elegante con finitura platinum si abbina perfettamente ai sistemi più raffinati, mentre la tecnologia avanzata garantisce prestazioni stabili anche sotto carichi intensi.",
    features: [
      "Frequenza: 6000MHz",
      "Latency: CL30-36-36-76",
      "Tensione: 1.35V",
      "Dominator Platinum Design",
      "RGB iCUE Lighting",
      "Garanzia a vita limitata",
    ],
    compatibility: "Compatibile con Intel XMP 3.0 e AMD EXPO",
  },
  {
    id: 4,
    brand: "AMD",
    name: "Ryzen 9 9950X",
    specs: "16 Core | 5.7GHz Boost",
    price: 649.0,
    rating: 4.9,
    reviews: 256,
    category: "cpu",
    image: "https://cdn.nexths.it/scheda_prodotto/image/1000/100001277wof.jpg",
    description:
      "Il Ryzen 9 9950X è il processore flagship della serie Ryzen 9000, progettato per offrire prestazioni estreme sia nel gaming che nella creazione di contenuti. Con 16 core e 32 thread, raggiunge frequenze di boost fino a 5.7GHz, garantendo prestazioni imbattibili in ogni scenario. La tecnologia Zen 5 e il supporto a DDR5-5600 lo rendono ideale per sistemi high-end.",
    features: [
      "16 Core / 32 Thread",
      "Frequenza base: 4.3GHz",
      "Frequenza boost: 5.7GHz",
      "Cache L3: 64MB",
      "TDP: 170W",
      "Socket AM5",
      "Supporto DDR5-5600",
    ],
    compatibility:
      "Richiede scheda madre AM5, cooler high-performance raccomandato",
  },
  {
    id: 5,
    brand: "Samsung",
    name: "990 PRO NVMe SSD",
    specs: "2TB | 7450MB/s Read",
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.8,
    reviews: 892,
    category: "ssd",
    badge: "sale",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/it/mz-v9p1t0bw/gallery/it-990pro-nvme-m2-ssd-mz-v9p1t0bw-533746738?$Q90_1248_936_F_PNG$",
    description:
      "Il Samsung 990 PRO è uno degli SSD NVMe più veloci sul mercato, progettato per utenti professionali e gamer esigenti. Con velocità di lettura fino a 7450MB/s e scrittura fino a 6900MB/s, offre prestazioni straordinarie per il gaming, la creazione di contenuti e le applicazioni professionali. La tecnologia Samsung V-NAND e il controller Elpis garantiscono affidabilità e durata nel tempo.",
    features: [
      "Velocità lettura: 7450MB/s",
      "Velocità scrittura: 6900MB/s",
      "Capacità: 2TB",
      "Form factor: M.2 2280",
      "PCIe Gen4 x4",
      "TLC NAND 3D",
      "Gestione termica avanzata",
    ],
    compatibility: "Compatibile con slot M.2 NVMe PCIe 4.0 x4",
  },
  {
    id: 6,
    brand: "ASUS",
    name: "ROG Strix RTX 5090 OC",
    specs: "24GB GDDR7 | Triple Fan",
    price: 2299.0,
    rating: 5.0,
    reviews: 47,
    category: "gpu",
    badge: "new",
    image:
      "https://media.ldlc.com/r1600/ld/products/00/06/20/51/LD0006205114.jpg",
    description:
      "La ROG Strix RTX 5090 OC rappresenta il massimo delle prestazioni grafiche per i gamer e creatori più esigenti. Con 24GB di memoria GDDR7 e architettura Ada Lovelace, offre prestazioni straordinarie nel gaming 8K e nella creazione di contenuti professionali. Il sistema di raffreddamento Axial-tech con tre ventole garantisce temperature ottimali anche sotto carichi estremi.",
    features: [
      "Architettura Ada Lovelace",
      "24GB GDDR7 Memory",
      "Ray Tracing e DLSS 3",
      "Triple Fan Cooling",
      "ROG Strix Design",
      "Overclock Factory",
      "Alimentazione 16-pin",
    ],
    compatibility:
      "Richiede alimentatore 1000W 80+ Platinum, slot PCIe 4.0 x16",
  },
  {
    id: 7,
    brand: "Kingston",
    name: "Fury Beast DDR5",
    specs: "32GB (2x16GB) 5600MHz",
    price: 124.99,
    rating: 4.6,
    reviews: 521,
    category: "ram",
    image: "https://m.media-amazon.com/images/I/71UcVYxIL9L.jpg",
    description:
      "La serie Fury Beast DDR5 di Kingston offre un ottimo rapporto qualità-prezzo per chi cerca prestazioni affidabili senza spendere troppo. Con frequenze fino a 5600MHz e tempi di latenza ottimizzati, è ideale per gaming e produttività. Il design compatto si adatta a qualsiasi build, mentre la compatibilità garantita con le principali piattaforme assicura un'installazione senza problemi.",
    features: [
      "Frequenza: 5600MHz",
      "Latency: CL36-36-36-76",
      "Tensione: 1.35V",
      "Design compatto",
      "Compatibilità garantita",
      "Garanzia a vita",
    ],
    compatibility: "Compatibile con Intel XMP 3.0 e AMD EXPO",
  },
  {
    id: 8,
    brand: "Intel",
    name: "Core Ultra 9 285K",
    specs: "24 Core | 6.0GHz Boost",
    price: 699.0,
    rating: 4.7,
    reviews: 184,
    category: "cpu",
    badge: "new",
    image:
      "https://media.ldlc.com/r1600/ld/products/00/06/17/52/LD0006175263.jpg",
    description:
      "Il Core Ultra 9 285K è il processore flagship della serie Intel Core Ultra, progettato per prestazioni estreme in gaming e creazione di contenuti. Con 24 core (8 P-core + 16 E-core) e frequenze di boost fino a 6.0GHz, offre prestazioni imbattibili. La tecnologia Intel 7 e il supporto a DDR5-5600 lo rendono ideale per sistemi high-end, mentre l'integrazione della GPU Arc garantisce prestazioni grafiche integrate di alto livello.",
    features: [
      "24 Core (8P + 16E)",
      "32 Thread",
      "Frequenza boost: 6.0GHz",
      "Cache L3: 36MB",
      "TDP: 125W",
      "Socket LGA1700",
      "GPU Arc integrata",
      "Supporto DDR5-5600",
    ],
    compatibility:
      "Richiede scheda madre LGA1700, cooler high-performance raccomandato",
  },
  {
    id: 9,
    brand: "Corsair",
    name: "5000D Airflow RGB",
    specs: "Mid Tower | Tempered Glass",
    price: 174.99,
    rating: 4.8,
    reviews: 1247,
    category: "case",
    image:
      "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Cases/CC-9011242-WW/-CC-9011242-WW-Gallery-5000D-RGB-AIRFLOW-BLACK-01.webp",
    description:
      "Il case 5000D Airflow RGB di Corsair è progettato per massimizzare il flusso d'aria e le prestazioni di raffreddamento. Con pannelli in vetro temperato e supporto per radiatori fino a 360mm, offre sia prestazioni termiche eccellenti che un aspetto estetico premium. La gestione dei cavi integrata e lo spazio generoso per componenti high-end lo rendono ideale per build gaming e workstation.",
    features: [
      "Form factor: Mid Tower",
      "Pannelli in vetro temperato",
      "Supporto radiatori fino a 360mm",
      "Gestione cavi integrata",
      "Supporto GPU fino a 420mm",
      "RGB Controller integrato",
      "Filtro antipolvere rimovibile",
    ],
    compatibility: "Compatibile con ATX, Micro-ATX, Mini-ITX",
  },
  {
    id: 10,
    brand: "EVGA",
    name: "SuperNOVA 1000 G7",
    specs: "1000W | 80+ Gold | Modular",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.9,
    reviews: 632,
    category: "psu",
    badge: "sale",
    image:
      "https://m.media-amazon.com/images/I/71mjbTVylBL._AC_UF1000,1000_QL80_.jpg",
    description:
      "L'alimentatore SuperNOVA 1000 G7 di EVGA offre 1000W di potenza continua con efficienza 80+ Gold. Progettato per sistemi high-end e gaming, garantisce alimentazione stabile e silenziosa grazie al design completamente modulare e al controllo della ventola a zero RPM. La protezione completa contro sovratensioni, sottotensioni e cortocircuiti assicura la massima sicurezza per i componenti del sistema.",
    features: [
      "Potenza: 1000W",
      "Efficienza: 80+ Gold",
      "Design: Fully Modular",
      "Ventola: 135mm FDB",
      "Zero RPM Mode",
      "Protezioni complete",
      "Garanzia: 10 anni",
    ],
    compatibility: "Compatibile con ATX 2.4, EPS 12V",
  },
  {
    id: 11,
    brand: "Noctua",
    name: "NH-D15 chromax.black",
    specs: "Dual Tower | 150mm Height",
    price: 109.99,
    rating: 4.9,
    reviews: 2156,
    category: "cooling",
    image: "https://m.media-amazon.com/images/I/91t48GBv8TL.jpg",
    description:
      "Il NH-D15 chromax.black di Noctua è uno dei migliori dissipatori ad aria sul mercato, progettato per prestazioni di raffreddamento estreme con rumore minimo. Con doppia torre e sei heatpipe in rame, offre un'efficienza termica superiore. Il design chromax.black con finitura nera si integra perfettamente con build dark, mentre i ventili NF-A15 garantiscono flusso d'aria e pressione statica ottimali.",
    features: [
      "Design: Dual Tower",
      "Heatpipe: 6 in rame",
      "Ventole: 2x NF-A15",
      "Altezza: 158mm",
      "Compatibilità: Intel LGA1700/1200/115x, AMD AM4/AM5",
      "Finitura: chromax.black",
      "Garanzia: 6 anni",
    ],
    compatibility:
      "Compatibile con Intel LGA1700, LGA1200, LGA1151, LGA1150, LGA1155, LGA1156 e AMD AM4, AM5",
  },
  {
    id: 12,
    brand: "Crucial",
    name: "Pro DDR5 RGB",
    specs: "48GB (2x24GB) 5600MHz",
    price: 169.99,
    rating: 4.5,
    reviews: 89,
    category: "ram",
    badge: "hot",
    image:
      "https://m.media-amazon.com/images/I/51EJt5geVEL._AC_UF1000,1000_QL80_.jpg",
    description:
      "La serie Pro DDR5 RGB di Crucial combina prestazioni affidabili con un'estetica accattivante. Con capacità fino a 48GB e frequenze fino a 5600MHz, è ideale per gaming e produttività. L'illuminazione RGB indirizzabile permette una personalizzazione completa dell'aspetto del sistema, mentre la tecnologia avanzata garantisce stabilità e compatibilità con le principali piattaforme.",
    features: [
      "Frequenza: 5600MHz",
      "Latency: CL40-40-40-77",
      "Tensione: 1.35V",
      "RGB Addressable",
      "Compatibilità garantita",
      "Garanzia a vita limitata",
    ],
    compatibility: "Compatibile con Intel XMP 3.0 e AMD EXPO",
  },
];

// Utility functions
function getBadgeText(badge) {
  const badges = { hot: "Hot", new: "Nuovo", sale: "Offerta" };
  return badges[badge] || "";
}

function getStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = "★".repeat(fullStars);
  if (hasHalf) stars += "½";
  return stars;
}

function getCategoryName(category) {
  const categories = {
    ram: "RAM",
    gpu: "Schede Video",
    cpu: "Processori",
    ssd: "SSD",
    case: "Case",
    psu: "Alimentatori",
    cooling: "Raffreddamento",
  };
  return categories[category] || category;
}

export { products, getBadgeText, getStars, getCategoryName };
