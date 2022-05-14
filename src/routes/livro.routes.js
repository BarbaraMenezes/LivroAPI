const express = require('express');

const router = express.Router()

const livroController = require('../controller/livro.controller');

router.get('/',livroController.findAll);
router.post('/',livroController.create);
router.get('/:id',livroController.findById);
router.put('/:id',livroController.update);
router.delete('/:id',livroController.delete);

module.exports = router