const  Model  = require("./Modules/MeterInfo");

class GetMeterInfo
{
    async input(req,message)
    { 
            
           
    }
    async process(message)
    {
        message.LIST = await Model.getMeterInfo(message)
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
module.exports= new GetMeterInfo();
