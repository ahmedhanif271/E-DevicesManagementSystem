const  Model  = require("../BusinessLogic/Modules/CustomerType");
const SMSModel = require("../BusinessLogic/Modules/SMSNotifications");

class CreateCustomerType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
           message.USERNAME = req.body.username;
           message.PASSWORD = req.body.password;
           message.CNIC = req.body.cnic;
           message.PHONE = req.body.phone;
           message.ADDRESS = req.body.address;
           message.DOB = req.body.dob;
           message.GENDER = req.body.gender;
           message.USERID = req.body.userId;


           
    }
    async process(message)
    {
        await Model.createCustomerType(message)
        await SMSModel.send(message.PHONE, 'Your Customer Registration is Successfull...!!')




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
module.exports= new CreateCustomerType();