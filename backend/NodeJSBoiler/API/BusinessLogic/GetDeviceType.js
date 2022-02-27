const  Model  = require("../Modules/DeviceType");

class GetDeviceType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.NETWORK = req.body.network;
            message.ENTITY = req.body.entity;
            message.SERIAL = req.body.serial;

           
    }
    async process(message)
    {
        message.LIST = await Model.getDeviceType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Device Type added "
        res.responseBody.list = message.LIST

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetDeviceType();
