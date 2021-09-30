// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>Zum Ausführen Console aufrufen!</h1>';

let a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
let a2: Aktie = new Aktie(2, 117.26, 'BAYER', 50.00);
let s1: Schmuck = new Schmuck(3, 99.99, 'Brosche');
let tresor: Tresor = new Tresor();