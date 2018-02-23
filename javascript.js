function initMap() {
    var center1 = {lat: 43.664764, lng:  -79.367940};
    var map1 = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 18,
        center: center1
    }); 
    var marker2 = new google.maps.Marker({
        position: center2,
        map: map2
    });
}

