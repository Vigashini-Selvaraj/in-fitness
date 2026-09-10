const fs = require('fs');
let html = fs.readFileSync('service-details.html', 'utf8');
const ids = [
    'dynamic-hero-img', 'dynamic-title', 'dynamic-desc', 'dynamic-duration', 
    'dynamic-intensity', 'dynamic-format', 'dynamic-focus', 'dynamic-about-1', 
    'dynamic-about-2', 'dynamic-trainer-name', 'dynamic-trainer-role', 
    'dynamic-benefits-container', 'dynamic-included'
];

let missing = false;
ids.forEach(id => {
    if (!html.includes('id="' + id + '"')) {
        console.log('MISSING ID: ' + id);
        missing = true;
    }
});
if (!missing) console.log('All IDs present!');
