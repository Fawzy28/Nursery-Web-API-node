
const{validationResult} = require("express-validator")
module.exports = (request,response,next)=>{
    result = validationResult(request)
    console.log(result)
    if(result.errors.length>0)
        {
            let msgg = (result.errors).reduce(((total,current)=>{return total+current.msg +" ,,, "}),"")            //reduce method it's used to get the accumulative value
            const error = new Error(msgg);
            error.status = 422;
            next(error)
        }
        else {

            next()
        }
}