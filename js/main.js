'use strict'


function onInitHomepage() {
    setBodyHomepage();
}

function setBodyHomepage() {
    gUserPref = loadFromStorage('userData');
    document.querySelector('body').style.background = gUserPref.backgroundColor;
    document.querySelector('body').style.color = gUserPref.textColor;
}

function onSubmit(ev) {
    ev.preventDefault();
    var backgroundColor = document.querySelector('.background-color').value;
    var textColor = document.querySelector('.text-color').value;
    var date = document.querySelector('.date').value;
    var time = document.querySelector('.time').value;
    var email = document.querySelector('.email').value;
    var range = document.querySelector('.range').value;
    setPreferences(backgroundColor, textColor, date, time, email, range);
}


