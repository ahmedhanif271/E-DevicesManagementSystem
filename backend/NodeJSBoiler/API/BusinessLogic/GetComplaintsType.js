const  Model  = require("../BusinessLogic/Modules/ComplaintsType");

class GetComplaintsType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.METERID = req.body.meterId;
            message.NAME = req.body.name;
            message.DETAILS = req.body.details;
            message.PHONE = req.body.phone;
        

           
    }
    async process(message)
    {
        message.LIST = await Model.getComplaintsType(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Complaint Type added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetComplaintsType();
