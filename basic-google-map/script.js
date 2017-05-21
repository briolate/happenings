var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.335115, lng: -83.040872},
    zoom: 8
  });
}
