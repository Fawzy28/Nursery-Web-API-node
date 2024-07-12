const ClassesSchema = require("./../models/classModel")
const TeachersSchema = require("./../models/teacherModel")

exports.getAllClasses = (request, response, next) => {
  ClassesSchema.find({})
  .populate({path:"supervisorid",select:{_id:1}})
  .then((data)=>{response.status(200).json({data}) }) 
  .catch((error)=>{next(error)})
  };



exports.addClass= (request, response, next) => {
  const object = new ClassesSchema(request.body)

  //to make sure that the teacher(supervisor) in the class you want to add are exists 
  const supervisor_id = request.body.supervisorid ;
  const children_ids =request.body.childrenids;

  TeachersSchema.find({},{_id:1})
  .then((teachers_ids)=>{
    for(element in teachers_ids )
    {
      if (element._id===supervisor_id)                              //nowcheck if childreen exist
      {
        response.status(200).send("supervisor exists");
        ChildsSchema.find({},{_id:1})
        .then((allchilds_ids)=>
        {
          children_ids.forEach((elem)=> { if (!(elem in Object.values(allchilds_ids))) 
                                              {throw new Error("one of children or all doesn't exist")} })
          object.save()
             .then((data)=>{response.status(200).json(data);
                   console.log(data)} )
        })
      }
      else
      {
        throw new Error("supervisor  doesn't exist")
      }
    }
  })
  .catch((error)=>{next(error)})
}

  




// exports.updateClass=(request, response, next) => {
//     console.log(request.body);
//     response.status(200).json({ data: "updated class" });
//   };




exports.deleteClass=(request, response, next) => {
  ClassesSchema.deleteOne({_id:request.body._id})
  .then(() => {
      response.status(200).send( "object has been deleted" );})
  .catch((error) => {
      next(error);
    });
  }



  /////////////
exports.getClass= (request, response, next) => {
    ClassesSchema.findOne({_id:request.params.id})
    .populate({path:"supervisorid",select:{_id:1}})
    .populate({path:"childrenids",select:{_id:1}})
    .then((obj) => {
           if (!obj) 
            {
              throw new Error("there is nodata")
            };  
            response.status(200).json({obj});
          })                
    .catch((error)=>{next(error)})
   };



  exports.getClassChild= (request, response, next) => {
    ClassesSchema.findOne({_id:request.params.id},{childrenids:1})
    .then((obj) => {
           if (!obj) 
            {
              throw new Error("there is nodata")
            };  
            response.status(200).json({obj});
          })                
    .catch((error)=>{next(error)})
   };







  exports.getClassTeacher= (request, response, next) => {
    ClassesSchema.findOne({_id:request.params.id},{supervisorid:1})
    .then((obj) => {
           if (!obj) 
            {
              throw new Error("there is nodata")
            };  
            response.status(200).json({obj});
          })                
    .catch((error)=>{next(error)})
   };






 /////////////
