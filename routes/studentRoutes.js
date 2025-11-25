const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentController');

router.post('/', ctrl.createStudent);           // POST /students
router.get('/', ctrl.getStudents);              // GET /students
router.get('/search', ctrl.searchStudents);     // GET /students/search?q=
router.get('/:id', ctrl.getStudentById);        // GET /students/:id
router.put('/:id', ctrl.replaceStudent);        // PUT /students/:id
router.patch('/:id', ctrl.updateStudent);       // PATCH /students/:id
router.delete('/:id', ctrl.deleteStudent);      // DELETE /students/:id

module.exports = router;
