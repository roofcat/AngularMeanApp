var mongoose = require( 'mongoose' );

var MovieSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	url:{ 
		type: String,
		required: true,
	},
});

// Exportar el modulo
module.exports =  MovieSchema;