var online = navigator.onLine;
var offlineSymbol = document.getElementById('offline-symbol');

if(!online) {
    offlineSymbol.classList.remove('hidden');
} else {
    offlineSymbol.classList.add('hidden');
}