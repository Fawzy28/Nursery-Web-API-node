const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
//const cors = require('cors')
const teacherRoute = require('./Routes/teacherRoute')
const classRoute = require('./Routes/classRoute')
const childsRoute = require('./Routes/childsRoute')

const server = express()
const port = process.env.PORT||8080

mongoose.connect("mongodb://127.0.0.1:27017/nurserydb")
.then(()=>{console.log("database is connected");
server.listen(port,(()=>{console.log(`**** server is here **** port :${port}`)}))         //server is ready to listen when the connection to db is done
})
.catch((error)=>{console.log("error in database")+error})

//MW1:loging                                                                               //use take acallback func of parameters : ( error , request , response , next )

server.use( morgan(':method :url') )


//     (request , response , next)=>{
//     console.log("url is: "+request.url , ", method is: "+request.method)               // without morgan
//     next()
// }
  


//mw2:authintication

server.use((request , response , next)=>{
     if(true)
     {
         next()
     }
     else
     {
        next(new Error("you are not Authenicated"))                               //the only case where next take aparameter which is an exception 
     }
})


//mw3 :routing

server.use(express.json())
//////////////

server.use(teacherRoute)
server.use(childsRoute)
server.use(classRoute)





//mw3 : error not found
server.use((request , response)=>{
    response.status(404).json({message:"error! not found"})
})


//mw4 : exceptions
server.use((error , request , response , next )=>{response.status(error.status || 500).json({message : "there is some thing wrong happened   => " + error.message } )})      //express know that it is the mw of errors because it have 4 param one of them is the error >> how did it know by getting the length of the properties of the function (class)


