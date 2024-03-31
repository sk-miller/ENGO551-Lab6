# ENGO551-Lab6

# Project Title: ENGO551 Lab 5

## Description
This project is a simple web application that allows users to draw, simplify, and remove polylines on a Leaflet map. The map is centered on Calgary, Alberta.

## Files
The project consists of two main files:

1. `main.js`: This JavaScript file contains the logic for initializing the Leaflet map, drawing, simplifying, and removing polylines.

2. `index.html`: This HTML file sets up the web page structure, including the map container and buttons for user interaction. It also links to the necessary CSS and JavaScript files.

## Usage
To use this application, open `index.html` in your web browser. You will see a map and three buttons: "Start Drawing", "Simplify Polyline", and "Remove Polyline".

- Click "Start Drawing" to begin drawing a polyline on the map. Click on the map to add points to the polyline.
- Right-click anywhere on the map to stop drawing.
- Click "Simplify Polyline" to simplify the drawn polyline. The simplified polyline will be displayed in red.
- Click "Remove Polyline" to remove the drawn and simplified polylines from the map.

## Dependencies
This project uses the following libraries:
- [Leaflet 1.7.1](https://unpkg.com/leaflet@1.7.1/dist/leaflet.js) for the map functionality.
- [@turf/turf 6.5.0](https://unpkg.com/@turf/turf@6.5.0) for the polyline simplification functionality.

## License
This project is licensed under the terms of the MIT license.
