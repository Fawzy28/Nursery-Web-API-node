const ChildsSchema = require("./../models/childsModel")


exports.getAllChilds = (request, response, next) => {
  ChildsSchema.find({})
  .then((data)=>{response.status(200).json({data}) }) 
  .catch((error)=>{next(error)})
  };

  exports.addChild= (request, response, next) => {
    const object = new TeachersSchema(request.body) 
    object.save()
    .then((data)=>{response.status(200).json(data);
      console.log(data)} ) 
      .catch ((error=>next(error)))
    };
    

  // exports.updateChild=(request, response, next) => {
  //   console.log(request.body);
  //   response.status(200).json({ data: "updated child" });
  // };

  exports.deleteChild=(request, response, next) => {
    ChildsSchema.deleteOne({_id:request.body._id})
    .then((object) => {
        response.status(200).send( "object has been deleted" );})
    .catch((error) => {
        next(error);
      });
    }


  /////////////
  exports.getChild= (request, response, next) => {
    ChildsSchema.findOne({_id:request.params.id})
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
