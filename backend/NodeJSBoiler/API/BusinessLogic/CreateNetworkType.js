const  Model  = require("../BusinessLogic/Modules/NetworkType");

class CreateNetworkType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.NAME = req.body.name;
            message.IP_ADDRESS = req.body.ip_address;
            message.PORT = req.body.port;
            message.USERID = req.body.userId;

           
    }
    async process(message)
    {
        await Model.createNetworkType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Network Type added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateNetworkType();
