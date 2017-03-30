
# Minor Web Development | Performance matters

## Server-side version - of wafs


## General

**About**

## Get it running

Follow the next steps to install the application.

**Clone this repo**

``$ git clone https://github.com/pierman1/performance-matters-server-side.git``

**Install dependencies**

1. Navigate to the cloned repository using ``$ cd``
2. Install all packages by using ```$ npm install```

**Start the server**

1. In the cloned folder type ```$ npm start```
2. Server will be started on port 3000
3. Go to the application ```http://localhost:3000/``` 
 
**NGROK**

1. Type  ```$ npm expose``` in your terminal to expose the application to the web.
2. Copy the https url to open the application.

**Browserify**

1. Type ``$ npm run build`` to bundle different files, mentioned in package.json scripts.

## Service Worker

> User story: Als ik even offline ben wegens een slechte internet connectie, wil ik nog naar de verschillende pagina's kunnen navigeren.

Met behulp van een [Service Worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) cache ik een aantal statische assets waardoor, 
de gebruiker nog steeds de app kan gebruiken als hij offline is.

```
'/offline/index.html',
'./css/main.css',
'https://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro',
'https://fonts.googleapis.com/css?family=Inconsolata'
```

## Wish-list

- resize images on server






