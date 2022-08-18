const { Router } = require('express');
const { check } = require('express-validator');
const { generateCode, usersGet, userPost } = require('../controllers');
const { emailExist } = require('../helpers');
const { validatorFields } = require('../middlewares/validator-fields');


const router = Router();

router.get('/', usersGet);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('email').custom(emailExist),
    check('country', 'El pais es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    check('job', 'El puesto de trabajo es obligatorio').not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validatorFields
], userPost)

router.post('/generate.code', [
    check('email', 'El email es obligatorio').isEmail(),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El Apellido es obligatorio').not().isEmpty(),
    check('title', 'el title no contiene ni REGISTRO ni WELCOME').isIn(['REGISTRO', 'WELCOME']),
    validatorFields
], generateCode);


module.exports = router;