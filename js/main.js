(function () {

  var map;

  function initialise() {
    var mapOptions = {
      center: new google.maps.LatLng(-41.169369, 174.825287),
      zoom: 13
    };
        map = new google.maps.Map(document.querySelector("#bb-map"), mapOptions);

            createMarkers();
  }

  google.maps.event.addDomListener(window, 'load', initialise);



  function createMarkers () {
  	// create the marker for fruity clothing
    var image = 'img/mini-logo.png';
  	var shopMarker = new google.maps.Marker({
  		'map': map,
  		'position': new google.maps.LatLng(-41.169369, 174.825287),
  		'title': "Beauty Bliss",
      'icon': image
  	});
  }

})();
