const  Model  = require("../BusinessLogic/Modules/UnitsAlert");
const SMSModel = require("../BusinessLogic/Modules/SMSNotifications");

class CreateUnitsAlert
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
           message.ID = req.body.ID;
           message.METERID = req.body.meterID
           message.NETWORKID = req.body.networkID;
           message.UNITS = req.body.units;
           message.PHONE = req.body.phone;
          


           
    }
    async process(message)
    {
        await Model.createUnitsAlert(message)
        await SMSModel.send(message.PHONE, 'You have successfully created units alert..!!')




    }
    async output(res,message)
    {
        res.responseBody.message = "Units alert activated "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateUnitsAlert();