const express = require("express");
const childsController = require("./../controller/childsController")
const router = express.Router();          




router
.route('/child')                     
.get(childsController.getAllChilds)
.post(childsController.addChild)
//.put(childsController.updateChild)
.delete(childsController.deleteChild)


router
.get('/child/:id',childsController.getChild)

module.exports=router;