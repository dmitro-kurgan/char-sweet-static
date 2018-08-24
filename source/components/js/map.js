GoogleMapsLoader.KEY = 'AIzaSyCN5o9zAJkcBFqvFeSb4oFP47aMk06zDvQ';
GoogleMapsLoader.LANGUAGE = 'ua';
if(document.getElementById('map')) {
  function map1() {
    GoogleMapsLoader.load(function(google) {
      var myLatLng = {lat: 50.048124, lng: 36.293307};
      var map = new google.maps.Map(document.getElementById('map'), {
      	center: myLatLng,
        scrollwheel:false,
        zoom: 17
      });
      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Чарівний sweet'
      });
    });
  }
  map1(); 
} 
if(document.getElementById('map2')) {
  // -----second-map-----
  function map2() {    
    GoogleMapsLoader.load(function(google) {
      var myLatLng = {lat: 50.001174, lng: 36.244302};
      var map = new google.maps.Map(document.getElementById('map2'), {
        center: myLatLng,
        scrollwheel:false,
        zoom: 17
      });
      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Чарівний sweet'
      });
    });
  }
  map2();
}
