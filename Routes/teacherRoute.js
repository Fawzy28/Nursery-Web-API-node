const express = require("express");
const teacherController = require("./../controller/teacherController")
const router = express.Router();          //creating object from the class (function router () )
const {getTeachervalid,addTeachervalid,update_deleteTeachervalid}=require("../validationMiddleWare/validations/TeacherValidations")
const validator = require("../validationMiddleWare/validator/validator")


router
.route('/teachers')                     //  endpoint /teachers.exports.getAllStudents = (request, response, next) => {
.get(teacherController.getAllTeachers)
.post(addTeachervalid,validator,teacherController.addTeacher)
//.put(update_deleteTeachervalid,validator,teacherController.updateTeacher)
.delete(update_deleteTeachervalid,validator,teacherController.deleteTeacher)


router
.get('/teachers/supervisors',teacherController.getSupervisors)
router
.get('/teachers/:id',getTeachervalid,validator,teacherController.getTeacher)

module.exports=router;