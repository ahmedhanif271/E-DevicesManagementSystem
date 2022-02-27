const  Model  = require("../BusinessLogic/Modules/CustomerType");

class GetCustomerType
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
        message.LIST = await Model.getCustomerType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Customer Type added "
        res.responseBody.list = message.LIST

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetCustomerType();
