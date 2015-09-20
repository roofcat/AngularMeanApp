var express = require( 'express' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var methodOverride = require('method-override' );
var _ = require( 'lodash' );

// Creando la aplicacion
var app = express();


// Agregando los middlewares necesaario para uso de API Rest
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

// Soporte CORS
app.use( function ( req, res, next ) {
	res.header( 'Access-Control-Allow-Origin', '*' );
	res.header( 'Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Content-Type' );
	next();
});

// Ejemplo hola mundo
// app.use( '/hola', function ( req, res, next ) {
// 	res.send( 'Hola mundo!' );
// 	next();
// });

// Coneccion con MongoDB
mongoose.connect( 'mongodb://localhost/meanapp' );

mongoose.connection.once('open', function () {

	// Cargar los models
	app.models = require( './models/index' );

	// Cargar las rutas
	var routes = require( './routes' );

	_.each( routes, function ( controller, route ) {
		app.use( route, controller( app, route ) );
	});

	// Logging de inicio de la app
	console.log( 'Escuchando en el puerto 3000' );
	app.listen( 3000 );
});