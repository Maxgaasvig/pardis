
/* Creating a map with the use of token from mapbox. */

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4Z2Fhc3ZpZyIsImEiOiJja2Zxa2VzNnYwZzNkMzNycHQxMmZudXVrIn0.lZeXYy7GPNaOr14eOgyDuw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/maxgaasvig/ckfqkpo890ah11ammqe5ytdgv', // style URL
    center : [10.194, 56.141], // starting position [lng, lat]
    zoom: 16 // Starting zoom position
});

/* Creating a popup with an set text for information */
var popup = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Pardis Cut i hjertet af Århus C'
);


/* Creating a marker for the map, setting the Lng and Lat and then adding the popup message to the marker and adds the marker to the specific Map.*/
new mapboxgl.Marker()
    .setLngLat([10.194, 56.141])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);



/* Creating button functions with location.href to different underpages of the website. */
function btnBooking() {
    location.href = "booking.html";
}

function btnMand() {
    location.href = "mand.html";
}

function btnKvinde() {
    location.href = "kvinde.html";
}

function btnDreng() {
    location.href = "dreng.html";
}

function btnReturn() {
    location.href = "inspiration.html";
}