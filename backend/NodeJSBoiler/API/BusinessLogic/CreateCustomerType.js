const  Model  = require("../BusinessLogic/Modules/CustomerType");

class CreateCustomerType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.USERNAME = req.body.username;
            message.PASSWORD = req.body.password;
           message.ENTITYID = req.body.entityId;

           
    }
    async process(message)
    {
        await Model.createCustomerType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Customer Type added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateCustomerType();
