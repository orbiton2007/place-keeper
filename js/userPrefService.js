'use strict'

var gUserPref;

function setPreferences(backgroundColor,textColor,date,time,email,range){
    gUserPref = {
        backgroundColor: backgroundColor,
        textColor: textColor,
        date: date,
        time: time,
        email: email,
        range: range
    }
    saveToStorage('userData', gUserPref);
}

