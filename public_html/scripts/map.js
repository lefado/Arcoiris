/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function initialize() {
    
    // MAP 1
    var mapOptions = {
        center: new google.maps.LatLng(28.65744, -17.90384),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    //Add marker to the map
    var marker = new google.maps.Marker({
        position: {lat: 28.657268, lng: -17.905042},
        map: map      
    });
    
    
    
    
    // MAP 2
    var mapOptions2 = {
        center: new google.maps.LatLng(28.659914, -17.912371),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true
    };

    var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2);

    //Add marker to the map
    var marker2 = new google.maps.Marker({
        position: {lat: 28.659914, lng: -17.912371},
        map: map2      
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
