const  Model  = require("../BusinessLogic/Modules/DeviceType");

class CreateDeviceType
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
        await Model.createDeviceType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Device Type added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateDeviceType();
