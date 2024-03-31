// Initialize Leaflet map centered on Calgary, Alberta
const map = L.map('map').setView([51.0447, -114.0719], 13);

// Add a tile layer (you can choose any other tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let polyline;
let simplifiedPolyline;
let drawing = false;

// Event handler for starting drawing
document.getElementById('startDrawing').addEventListener('click', () => {
    if (!drawing) {
        polyline = L.polyline([], { color: 'blue' }).addTo(map);
        map.on('click', addPoint);
        drawing = true;
    }
});

// Event handler for stopping drawing (right-click)
map.on('contextmenu', () => {
    if (drawing) {
        map.off('click', addPoint);
        drawing = false;
    }
});

// Function to add points to the polyline
function addPoint(e) {
    polyline.addLatLng(e.latlng);
}

// Event handler for simplifying the polyline
document.getElementById('simplifyPolyline').addEventListener('click', () => {
    if (polyline && polyline.getLatLngs().length > 1) {
        const simplified = turf.simplify(polyline.toGeoJSON(), { tolerance: 0.001 });
        simplifiedPolyline = L.geoJSON(simplified, { color: 'red' }).addTo(map);
    }
});

// Event handler for removing the polyline
document.getElementById('removePolyline').addEventListener('click', () => {
    if (polyline) {
        map.removeLayer(polyline);
        polyline = null;
    }
    if (simplifiedPolyline) {
        map.removeLayer(simplifiedPolyline);
        simplifiedPolyline = null;
    }
    // Allow the user to draw a new polyline
    drawing = false;
});
