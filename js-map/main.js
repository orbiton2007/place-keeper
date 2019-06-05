'use strict'


function initMap() {
    setPosintions();
    if (gPositions && gPositions.length) renderList();
    else gPositions = [];
    setMap();
}

function setMap() {
    var pos = { lat: 29.55805, lng: 34.94821 };
    gMap = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: pos });
    new google.maps.Marker({ position: pos, map: gMap });

    gMap.addListener('click', function (e) {
        placeMarkerAndPanTo(e.latLng, gMap);
    });
    renderList();
}

function renderList() {
    var strHTML = '';
    gPositions.forEach(function (place, idx) {
        strHTML += `<div class="div-place-btn flex space-between">
        <a class="place-name" href="#">${place.name}</a>
        <button class="remove-btn" onclick="onRemovePlace('${idx}')">X</button>
        </div>`;
    });
    if (!gPositions.length) strHTML = '';
    document.querySelector('.list').innerHTML = strHTML;
}

function onRemovePlace(idx) {
    removePlace(idx);
    renderList();
}

function onMyLocation() {
    setMyLocation();
    renderList();
}

function onShowModal() {
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.close').onclick = function () {
        document.querySelector('.modal').style.display = "none";
    }   
}

