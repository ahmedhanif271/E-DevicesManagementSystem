const  Model  = require("../BusinessLogic/Modules/RolesType");

class CreateRolesType
{
    async input(req,message)
    {
            message.NAME = req.body.name;
            message.ROLE = req.body.role;

           
    }
    async process(message)
    {
        await Model.createRolesType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Role added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateRolesType();
