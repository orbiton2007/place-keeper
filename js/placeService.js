'use strict'

var gMap, gInfoWindow;
var gPositions;
var gMarkedPlace;
var gId = 0;

function setPosintions() {
    gPositions = loadFromStorage('Places');
}

function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    // gMap = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: latLng });
    map.panTo(latLng);
    gPositions.push({ id: gId++, lat: marker.position.lat(), lng: marker.position.lng(), name: prompt('Enter name') });
    saveToStorage('Places', gPositions);
}

function setMyLocation() {
    gInfoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            gInfoWindow.setPosition(pos);
            gInfoWindow.setContent('my location');
            gInfoWindow.open(gMap);
            gMap.setCenter(pos);
        }, function () {
            handleLocationError(true, gInfoWindow, gMap.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, gInfoWindow, gMap.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(gMap);
}

function removePlace(idx) {
    gPositions.splice(idx, 1);
    saveToStorage('Places', gPositions);
}