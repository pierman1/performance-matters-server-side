/*---------LOAD MODULES--------*/
var express  = require('express');
var app      = express();
var request = require('request');
var bodyParser = require('body-parser')
var compression = require('compression');

var path 	 = require('path');
var port	 = 3000;

// var loader = require('./public/js/loader.js');

// gzip using compression
app.use(compression());

// express static
app.use(express.static('public')); // to add CSS

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // set up ejs for templating

app.get('/error',function(req,res){
	res.render('index')
})

app.get('/about',function(req,res){

	res.render('about',{

		title: 'About Amsterdam Strains',
		content: 'Amsterdam Strains is all about the different kindes of Cannabis. Not only in Amsterdam but from around the world!'

	})
})

app.get('/strains',function(req,res){

	// console.log(loader.show());

    //Lets try to make a HTTP GET
    request({

    	url: 'https://www.cannabisreports.com/api/v1.0/strains?=972ea5f706ca0dc6dbe17db99a834085804ee594',
		method: 'GET'

	}, function (error, response, body) {

		if(error) {

			console.log('errorrrrr');


		} else {

			var data = JSON.parse(body);

            res.render('strains', {
                title: 'Strains',
                data : data,
				link: data
            })
		}

    });

});

app.get('/strains/:ucpc', function(req,res) {
	// console.log(req.params.strains);

	var strainId = req.params.ucpc;

    request({

        url: 'https://www.cannabisreports.com/api/v1.0/strains/' + strainId + '?=972ea5f706ca0dc6dbe17db99a834085804ee594',
        method: 'GET'

    }, function (error, response, body) {

        if(error) {

            console.log('errorrrrr');

        } else {

            var data = JSON.parse(body);

            res.render('strain-detail', {
                title: data,
                data : data
            })
        }

    });

})

app.get('/search', function (req, res) {
    res.render('search', {
        title: 'Search'
    });
});


app.get('/results/', function(req, res) {

    console.log('searched', req.query.strain);

    var searchQuery = req.query.strain;

    request({

        url: 'https://www.cannabisreports.com/api/v1.0/strains/search/' + searchQuery,
        method: 'GET'

    }, function (error, response, body) {

        if(error) {

            console.log('errorrrrr');


        } else {

            var data = JSON.parse(body);

            res.render('results', {
                title: 'Results',
                data: data
            })
        }

    });

});


app.get('*', function(req,res) {
	res.render('about',{
        title: 'About Amsterdam Strains',
        content: 'Amsterdam Strains is all about the different kindes of Cannabis. Not only in Amsterdam but from around the world!'
	})
});

app.listen(port);
console.log('App started on port: ' + port);