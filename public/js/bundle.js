(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
if ( 'serviceWorker' in navigator ) {

    navigator.serviceWorker

        navigator.serviceWorker.register('/sw.js')

        .then(function (registration) {
            console.log("Service worker Registered at ", registration)
        })

        .catch(function (err) {
            console.log("Service worker failed to register at", err)
        })

}
},{}],2:[function(require,module,exports){
var online = navigator.onLine;
var offlineSymbol = document.getElementById('offline-symbol');

if(!online) {
    offlineSymbol.classList.remove('hidden');
} else {
    offlineSymbol.classList.add('hidden');
}
},{}],3:[function(require,module,exports){

if (window.location.pathname === '/search') {

    // show form if JS is avaidable
    var formToHide = document.getElementsByClassName('search-form')[0];

    console.log(formToHide);

    formToHide.classList.remove('hidden');

}

// searchSubmit button variable
var searchSubmit = document.querySelector('[type="submit"]');

// if searchSubmit on page
if(searchSubmit) {

// searchSubmit eventlistener when clicked send userInput to request.list
    searchSubmit.addEventListener('click', function () {

        var userInput = document.querySelector('[type="text"]').value;
        console.log(userInput);

        //Lets try to make a HTTP GET
        var url = 'https://www.cannabisreports.com/api/v1.0/strains/search/' + userInput;

        var request = new XMLHttpRequest();
        request.open("GET", url, false);

        request.send(null);
        var data = JSON.parse(request.responseText);
        console.log(data);

        var list = document.getElementsByClassName('strains-list')[0];
        console.log(list);

        for (i = 0; i < data.data.length; i++) {

            console.log('loping');

            var item = document.createElement('li');
            item.classList.add('strains-list__item');
            var anchor = document.createElement('a');
            anchor.innerHTML = data.data[i].name;
            anchor.href = '/strains/' + data.data[i].ucpc;

            item.appendChild(anchor)
            list.appendChild(item);

        }


    });

}
},{}]},{},[1,2,3]);
