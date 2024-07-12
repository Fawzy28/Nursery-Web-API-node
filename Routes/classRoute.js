const express = require("express");
const classController = require("./../controller/classController")
const router = express.Router();          




router
.route('/class')                     
.get(classController.getAllClasses)
.post(
    //express.json(),
    classController.addClass)
//.put(classController.updateClass)
.delete(classController.deleteClass)


router
.get('/class/child/:id',classController.getClassChild)

router
.get('/class/teacher/:id',classController.getClassTeacher)

router
.get('/class/:id',classController.getClass)

module.exports=router;