const { query,param,body } = require("express-validator")
module.exports.getTeachervalid = [param("id").isInt().withMessage("id shiould be number")]
module.exports.addTeachervalid = [
    body("fullname").isString().withMessage("fullname shiould be string"),
    body("password").isString().withMessage("password shiould be string"),
    body("email").isEmail().withMessage("email isn't valid"),
    body("image").isString().withMessage("image shiould be string"),
]
module.exports.update_deleteTeachervalid = [
    body("id").isInt().withMessage("id should be int"),
    body("fullname").isString().withMessage("fullname shiould be string"),
    body("password").isString().withMessage("password shiould be string"),
    body("email").isEmail().withMessage("email isn't valid"),
    body("image").isString().withMessage("image shiould be string"),
]

