// Test Coordinates
var coordinates = [[37.2,-122.2],[37.3,-121.8],[37.5,-122.1]];

function initialize(){
  // var to define boundary of all coordinates
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = { mapTypeId: google.maps.MapTypeId.TERRAIN };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // place markers on map & extend zoom boundary
  for (var i = 0; i < coordinates.length; i++){
    var travelPoint = new google.maps.LatLng(coordinates[i][0], coordinates[i][1]);
    var marker = new google.maps.Marker({
      position: travelPoint,
      map: map,
      title:"Travel Point Test"
    });
    bounds.extend(travelPoint); // zoom boundary
  }
  map.fitBounds(bounds); // set center and zoom level
}

// Creates javascript tags and calls initialize function
function loadScript() {
  var script = document.createElement('script');
  var KEY = 'AIzaSyAxM-N66aK2aCq0yhxQrJJZMh-XYcEauUk&';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=' + KEY + 'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

