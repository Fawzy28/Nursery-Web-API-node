const TeachersSchema = require("./../models/teacherModel")




exports.getAllTeachers = (request, response, next) => {
  TeachersSchema.find({})
  .then((data)=>{response.status(200).json({data}) }) 
  .catch((error)=>{next(error)})
  };


  
  exports.addTeacher= (request, response, next) => {
    const object = new TeachersSchema(request.body) 
    
    
    object.save()
    .then((data)=>{response.status(200).json(data);
      console.log(data)} 
      )
      
      .catch ((error=>next(error)))
    };
    
    
    
    
    // exports.updateTeacher = (request, response, next) => {
    //   for (element in request.body)
    //   {
    //     console.log(element)
    //     switch (element)
    //     {
    //       case "fullname" :
    //         // if(request.body.fullname)
    //         TeachersSchema.updateOne({_id:request.body.id},{$set:{fullname:request.body.fullname}})
    //         .then(()=>{response.status(200).send( "fullname has been updated" );})
            
    //         break                      
    //       case "password" :
    //           if(request.body.password)
    //           {TeachersSchema.updateOne({_id:request.body.id},{$set:{password:request.body.password}})}
    //           break 
    //       case "email" :
    //             if(request.body.email)
    //             {TeachersSchema.updateOne({_id:request.body.id},{$set:{password:request.body.email}})}
    //             break
    //       case "image" :
    //               if(request.body.image)
    //               {TeachersSchema.updateOne({_id:request.body.id},{$set:{password:request.body.image}})}  
    //               break
    //       default :
    //               continue
   
                 
    //             }
    //           }

    //           response.status(200).send( "object has been updated" );

           
    //    } 
      
            
            


      exports.deleteTeacher=(request, response, next) => {
              TeachersSchema.deleteOne({_id:request.body._id})
              .then(() => {
                  response.status(200).send( "object has been deleted" );})
              .catch((error) => {
                  next(error);
                });
              }
              




      exports.getTeacher= (request, response, next) => {
           TeachersSchema.findOne({_id:request.params.id})
            .then((obj) => {
                   if (!obj) 
                    {
                      throw new Error("there is nodata")
                    };  
                    response.status(200).json({obj});
                  })                
            .catch((error)=>{next(error)})
           };
             
            
            
            
            
            //   }
            //     .then((object) => {
              //       if (!data) 
  //         {throw new Error("there is nodata")};  
  //       response.status(200).json({ object });
  //     .catch((error) => {
  //       next(error);
  //     });
  // };








// exports.deleteTeacher=(request, response, next) => {
//     console.log(request.body);
//     response.status(200).json({ data: "deleted teacher" });
//   };



  /////////////
  // exports.getTeacher= (request, response, next) => {
  //   console.log(request.params);
  //   response.status(200).json({ data: ` teacher with id ${request.params.id}` });
  // };




  ;


 /////////////
  exports.getSupervisors = (request, response, next) => {
    response.status(200).json({ data: "all supervisors data list" });
  };