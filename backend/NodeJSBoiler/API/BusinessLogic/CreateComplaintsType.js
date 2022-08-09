const  Model  = require("../BusinessLogic/Modules/ComplaintsType");
const SMSModel = require("../BusinessLogic/Modules/SMSNotifications");

class CreateComplaintsType
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
        await Model.createComplaintsType(message)
        await SMSModel.send(message.PHONE, 'Your Complaint has been launched...!!')




    }
    async output(res,message)
    {
        res.responseBody.message = "Customer added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateComplaintsType();