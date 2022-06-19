const  Model  = require("../BusinessLogic/Modules/ConnectedDevices");

class GetConnectedDevices
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.METERID = req.body.meterId;
            message.DEVICES = req.body.devices;

           
    }
    async process(message)
    {
        message.LIST = await Model.getConnectedDevices(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Device Type added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetConnectedDevices();
