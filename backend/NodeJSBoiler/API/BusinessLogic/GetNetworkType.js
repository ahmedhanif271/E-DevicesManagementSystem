const  Model  = require("../BusinessLogic/Modules/NetworkType");

class GetNetworkType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.NAME = req.body.name;
            message.IP_ADDRESS = req.body.ip;
            message.PORT = req.body.port;

           
    }
    async process(message)
    {
        message.LIST = await Model.getNetworkType(message)
        message.STATUS="Success";


    }
    async output(res,message)
    {
        res.responseBody.message = "Network Type added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetNetworkType();
