# NEXUS - Hardware Gaming Premium Shop

![NEXUS Logo](https://img.shields.io/badge/NEXUS-Hardware_Gaming_Premium-blue?style=for-the-badge&logo=gamejolt)

## 🎮 Descrizione del Progetto

**NEXUS** è un e-commerce moderno e responsive per la vendita di hardware gaming premium. Il sito offre un'esperienza di acquisto fluida e intuitiva per appassionati di gaming e professionisti alla ricerca di componenti PC di alta qualità.

### ✨ Caratteristiche Principali

- 🛒 **Carrello Intelligente** - Sistema di carrello con persistenza in localStorage
- 🔍 **Ricerca Avanzata** - Overlay di ricerca per trovare rapidamente i prodotti
- 📱 **Design Responsive** - Ottimizzato per desktop, tablet e mobile
- 🎯 **Filtri per Categoria** - RAM, GPU, CPU, SSD, Case, Alimentatori, Raffreddamento
- 📊 **Ordinamento Prodotti** - Per prezzo (crescente/decrescente) e nome
- 💳 **Checkout Completo** - Processo di acquisto guidato
- 🌟 **Rating e Recensioni** - Sistema di valutazione prodotti
- 🏷️ **Badge Prodotti** - "Hot", "Nuovo", "Offerta"
- 📄 **Pagine Dettaglio** - Informazioni complete su ogni prodotto

## 🛠️ Tecnologie Utilizzate

| Tecnologia            | Utilizzo                           |
| --------------------- | ---------------------------------- |
| **HTML5**             | Struttura semantica del sito       |
| **CSS3**              | Styling moderno con Flexbox e Grid |
| **JavaScript (ES6+)** | Logica dell'applicazione           |
| **Serve**             | Server statico per sviluppo        |
| **Google Fonts**      | Tipografia Inter                   |
| **SVG Icons**         | Icone vettoriali leggere           |

## 📁 Struttura del Progetto

```
NEXUS-Hardware-Gaming-Premium-shop/
├── package.json
└── public/
    ├── index.html          # Homepage principale
    ├── product.html        # Pagina dettaglio prodotto
    ├── checkout.html       # Pagina checkout
    ├── styles.css          # Stili CSS
    ├── script.js           # JavaScript principale
    ├── product-script.js   # Logica pagina prodotto
    ├── checkout-script.js  # Logica checkout
    └── shared/
        ├── data.js         # Database prodotti
        ├── cart.js         # Gestione carrello
        └── utils.js        # Funzioni utility
```

## 🚀 Installazione e Avvio

### Prerequisiti

- **Node.js** (versione 14 o superiore)
- **npm** (incluso con Node.js)

### Passaggi

1. **Clona il repository**

   ```bash
   git clone https://github.com/Luis-Miha/NEXUS-Hardware-Gaming-Premium-shop.git
   cd NEXUS-Hardware-Gaming-Premium-shop
   ```

2. **Installa le dipendenze**

   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**

   ```bash
   npm run dev
   ```

4. **Apri il browser**
   ```
   http://localhost:3000
   ```

## 📜 Comandi NPM

| Comando         | Descrizione                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Avvia il server di sviluppo su porta 3000 |
| `npm start`     | Alias per `npm run dev`                   |
| `npm run build` | Nessun build necessario (sito statico)    |

## 🛍️ Categorie Prodotti

- **RAM** - Memorie DDR5 ad alte prestazioni (G.Skill, Corsair, Kingston, Crucial)
- **Schede Video** - GPU NVIDIA e AMD di ultima generazione
- **Processori** - CPU Intel e AMD per gaming e workstation
- **SSD** - Storage NVMe ultra-veloce
- **Case** - Cabinet con design premium e ottimo airflow
- **Alimentatori** - PSU modulari ad alta efficienza
- **Raffreddamento** - Soluzioni di dissipazione ad aria e liquido

## 💡 Funzionalità Tecniche

### Sistema di Carrello

- Aggiunta/rimozione prodotti
- Calcolo automatico totale
- Persistenza dati con localStorage
- Sidebar carrello interattiva

### Ricerca e Filtri

- Overlay di ricerca fullscreen
- Filtri per categoria (8 categorie)
- Ordinamento per prezzo e nome
- Aggiornamento dinamico griglia prodotti

### Pagine Prodotto

- Galleria immagini
- Specifiche tecniche dettagliate
- Compatibilità componenti
- Prodotti correlati
- Aggiunta al carrello

### Checkout

- Riepilogo ordine
- Form di spedizione
- Selezione metodo di pagamento
- Conferma ordine

## 🎨 Design System

### Colori

- **Primario**: `#0a0a0a` (nero)
- **Secondario**: `#ffffff` (bianco)
- **Accent**: `#3b82f6` (blu)
- **Badge Hot**: `#ef4444` (rosso)
- **Badge New**: `#10b981` (verde)
- **Badge Sale**: `#f59e0b` (arancione)

### Tipografia

- **Font Family**: Inter (Google Fonts)
- **Pesi**: 400, 500, 600, 700

## 🔧 Configurazione

### package.json

```json
{
  "name": "nexus-gaming",
  "version": "0.1.0",
  "scripts": {
    "dev": "npx serve public -l 3000",
    "build": "echo 'Static site - no build needed'",
    "start": "npx serve public -l 3000"
  },
  "dependencies": {
    "serve": "^14.2.0"
  }
}
```

## 📱 Responsive Design

Il sito è ottimizzato per:

- **Desktop**: Layout completo con sidebar carrello
- **Tablet**: Grid adattiva e navigazione compatta
- **Mobile**: Menu hamburger e layout single-column

## 🛡️ Best Practices

- ✅ HTML semantico e accessibile
- ✅ CSS organizzato e manutenibile
- ✅ JavaScript modulare (ES6 Modules)
- ✅ Lazy loading immagini
- ✅ Performance ottimizzata
- ✅ SEO-friendly (meta tags)

## 📈 Funzionalità Future

- [ ] Autenticazione utenti
- [ ] Wishlist prodotti
- [ ] Sistema di recensioni
- [ ] Filtri avanzati (prezzo, brand, rating)
- [ ] Integrazione pagamento reale
- [ ] Pannello amministrativo
- [ ] Notifiche in-app
- [ ] Supporto multi-lingua

## 👨‍💻 Autore

**Luis Mihalache**

- GitHub: [@Luis-Miha](https://github.com/Luis-Miha)

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT.

---

<div align="center">
  <p>⭐ Se ti piace il progetto, lascia una stella su GitHub! ⭐</p>
  <p>Built with ❤️ by Luis Mihalache</p>
</div>
