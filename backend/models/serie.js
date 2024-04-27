let mongoose = require('mongoose');

// Serie Schema
const Serie = mongoose.model('Serie', {
    titulo: {
        type: String,
        required:true
    }, 
    sinopsis: {
        type: String,
        required:true
    },
    url_imagen: {
        type: String,
        required:true
    },
    numero_episodios: {
        type: Number,
        required:true
    },
    episodios: [{
        numero_episodio: Number,
        fecha_vista: String,
        titulo_episodio: String,
    }]
});

module.exports = {Serie}