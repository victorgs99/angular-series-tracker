const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Serie } = require('../models/serie');
const { urlencoded } = require('body-parser');

// Obtiene todas las series
router.get('/api/series', (req, res) => {
    Serie.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Obtiene todas las series por ver
router.get('/api/series/por-ver', (req, res) => {
    Serie.find({episodios: {$size: 0}}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Obtiene todas las series que se estan viendo actualmente
router.get('/api/series/viendo-actualmente', (req, res) => {
    Serie.aggregate([
        {
            $match: {
                $expr: {
                    $and: [
                        { $ne: ['$numero_episodios', { $size: '$episodios' }] },
                        { $gt: [{ $size: '$episodios' }, 0] }
                    ]
                }
            }
        }
    ]).exec((err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Obtiene todas las series finalizadas
router.get('/api/series/finalizados', (req, res) => {
    Serie.aggregate([
        {
            $match: {
                $expr: {
                    $eq: [{ $size: '$episodios' }, '$numero_episodios']
                }
            }
        }
    ]).exec((err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Obtiene una serie por su ID
/*router.get('/api/serie/:id', (req, res) => {
    Serie.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});*/

// Obtiene una serie por su ID
router.get('/api/series/serie/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Serie.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        }else {
            console.log(err);
        }
    });
});


// Agregar serie
router.post('/api/series/serie/add', (req, res) => {
    const serie = new Serie({
        titulo: req.body.titulo,
        sinopsis: req.body.sinopsis,
        url_imagen: req.body.url_imagen,
        numero_episodios: req.body.numero_episodios
    });

    serie.save((err, data) => {
        if(!err) {
            //res.send(data);
            res.status(200).json({code: 200, message: 'La serie se agrego correctamente', addSerie: data})
        } else {
           console.log(err);
        }
    });
});

// Actualiza serie
router.put('/api/series/serie/update/:id', (req, res) => {
    const serie = {
        titulo: req.body.titulo,
        sinopsis: req.body.sinopsis,
        url_imagen: req.body.url_imagen,
        numero_episodios: req.body.numero_episodios
    };

    Serie.findByIdAndUpdate(req.params.id, { $set: serie }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Seria actualizada!', updateSerie: data})
        } else {
            console.log(err);
        }
    });
});

// Elimina serie por ID
router.delete('/api/series/serie/delete/:id', (req, res) => {
    Serie.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Serie eliminada', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});

// Agregar episodio a una serie por ID
router.post('/api/serie/episodio/add/:id', (req, res) => {
    const episodio = req.body;

    Serie.findByIdAndUpdate(req.params.id, { $push: {episodios: episodio} }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Episodio agregado!', agregaEpisodio: data})
        } else {
            console.log(err);
        }
    });
});

/* Modificar episodio de una serie por ID
router.put('/api/serie/:id_serie/episodio/:id_episodio/update', (req, res) => {
    const idSerie = req.params.id_serie;
    const idEpisodio = req.params.id_episodio;
    const episodio = req.body;

    Serie.findOneAndUpdate({_id: idSerie, 'episodios._id': idEpisodio}, { $set: {'episodios.$': episodio} }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Episodio actualizado!', updateEpisodio: data})
        } else {
            console.log(err);
        }
    });
});*/

// Elimina episodio por ID
router.delete('/api/serie/:id_serie/episodio/:id_episodio/delete', (req, res) => {
    Serie.findByIdAndUpdate(req.params.id_serie, {$pull: {episodios: {_id: req.params.id_episodio}}}, {new: true}, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Episodio eliminado', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});

module.exports = router;