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