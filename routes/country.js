const { Router } = require('express');
const { check } = require('express-validator');
const { countryPost, countriesGet } = require('../controllers');
const { countryExist, abbrExist, codeExist } = require('../helpers');
const { validatorFields } = require('../middlewares/validator-fields');


const router = Router();

router.get('/', countriesGet);

router.post('/', [
    check('abbr', 'la abreviatura del pais es obligatorio').not().isEmpty(),
    check('name', 'El nombre del paies es obligatorio').not().isEmpty(),
    check('code', 'El codigo pais es obligatorio').isNumeric(),
    check('cant_phone', 'El cantidad de cifras telefonica es obligatorio').isNumeric(),
    check('example', 'El ejemplo de una numero telefonica es obligatorio').isNumeric(),
    check('name').custom(countryExist),
    check('abbr').custom(abbrExist),
    check('code').custom(codeExist),
    validatorFields 
], countryPost)

module.exports = router;