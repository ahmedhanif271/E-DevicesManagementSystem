const  Model  = require("../BusinessLogic/Modules/RolesType");

class GetRolesType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.NAME = req.body.name;
            message.ROLE = req.body.role;
           
    }
    async process(message)
    {
        message.LIST = await Model.getRolesType(message)
        message.STATUS="Success";


    }
    async output(res,message)
    {
        res.responseBody.message = "Role added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetRolesType();
