const  Model  = require("./Modules/MyDetails");

class GetMyDetails
{
    async input(req,message)
    { 
            
           
    }
    async process(message)
    {
        message.LIST = await Model.getMyDetails(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Customer details added"
        res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetMyDetails();
