const  Model  = require("./Modules/Analytics");

class GetAnalytics
{
    async input(req,message)
    { 
            
           
    }
    async process(message)
    {
        message.LIST = await Model.getAnalytics(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Analytics List Available"
        res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetAnalytics();
