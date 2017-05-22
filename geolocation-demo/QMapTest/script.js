(function(window, google){



//map options

var options= {
  center:{lat:42.3314, lng:-83.0458},
  zoom:15


},
element = document.getElementById('map-canvas');

//map
map = new google.maps.Map(element, options);
// var maker = new google.maps.Marker({
//   position:{lat:42.3314, lng:-83.0458},
//   map:map
// });

infoWindow = new google.maps.InfoWindow;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    // var maker = new google.maps.Marker({
    //   position:{lat: position.coords.latitude,
    //   lng: position.coords.longitude},
    //   map:map
    // });
    var GeoMarker = new GeolocationMarker(map);

    infoWindow.setPosition(pos);
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
    map.setCenter(pos);
    map.setZoom(17);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}


function handleLocationError(browserHasGeolocation, infoWindow, pos){
infoWindow.setPosition(marker);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}

}(window, google));
