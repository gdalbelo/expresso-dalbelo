const router = require('express').Router();
const Frete = require('../models/Frete');

router.post('/', async (req, res) => {
    const frete = new Frete({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        distancia: req.body.distancia
    });

    try{
        const savedFrete = await frete.save();
        res.json({
            success: true,  
            data: savedFrete
        });
    }catch(err) {
        res.json({
            success: false,
            message: err
        });
    }
})

router.get('/', async (req, res) => {
    try{
        const fretes = await Frete.find();

        res.json({
            success: true,
            data: fretes
        });
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
});

router.get('/:slug', async (req, res) => {
    try{
        const frete = await Frete.findOne({
            slug: req.params.slug
        });
        res.json({
            success: true,
            data: frete
        });
    }catch(err){
        res.json({
            success: false,
            message: err
        });
    }
});

router.patch('/:slug', async (req, res) => {
    try{
        const updateFrete = await Frete.updateOne({
            slug: req.params.slug
        },
        {
            titulo: req.body.titulo,
            descricao: req.body.descricao
        });
        res.json({
            success: true,
            updated: updateFrete.nModified
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
});

router.delete('/:slug', async (req, res) => {
    try {
        const deletedFrete = await Frete.deleteOne({
            slug: req.params.slug
        });
        res.json({
            success: true,
            deleted: deletedFrete.deletedCount
        });
    } catch(err) {
        res.json({
            success: false,
            message: err
        });
    }
});

module.exports = router;