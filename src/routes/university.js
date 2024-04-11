const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const subjects = require('../controller/controller.js');

router.get('/getSubjectsBySpecialty/:id', subjects.getBySpecialty)

module.exports = router;