const  Model  = require("../BusinessLogic/Modules/NetworkType");

class CreateNetworkType
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
