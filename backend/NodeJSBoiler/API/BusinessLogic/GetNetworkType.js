const  Model  = require("../Modules/NetworkType");

class GetNetworkType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.TYPENAME = req.body.typeName;
            message.TYPEIP = req.body.typeIp;
            message.TYPEPORT = req.body.typePort;

           
    }
    async process(message)
    {
        message.LIST = await Model.getNetworkType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Network Type added "
        res.responseBody.list = message.LIST

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetNetworkType();
