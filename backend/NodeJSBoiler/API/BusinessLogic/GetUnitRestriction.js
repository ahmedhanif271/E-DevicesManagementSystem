const  Model  = require("../BusinessLogic/Modules/UnitRestriction");

class GetUnitRestriction
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.METERID = req.body.meterID;
            message.NETWORKID = req.body.networkID;
            message.UNITS = req.body.units;

           
    }
    async process(message)
    {
        message.LIST = await Model.getUnitRestriction(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Unit Restriction added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetUnitRestriction();
