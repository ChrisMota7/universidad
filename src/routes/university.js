const { Router } = require('express');
const router = Router();

const subjects = require('../controller/controller.js');

router.get('/getSubjectsBySpecialty/:id', subjects.getBySpecialty);
router.post('/subjects', subjects.createSubject);
router.put('/subjects/:id', subjects.updateSubject);
router.delete('/subjects/:id', subjects.deleteSubject);

module.exports = router;
