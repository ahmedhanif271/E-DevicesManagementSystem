const  Model  = require("../BusinessLogic/Modules/BillHistory");

class GetBillHistory
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.METERID = req.body.meterID;
            message.LASTLOGID = req.body.lastlogId;
            message.CURRENTCOUNTER = req.body.currentcounter;
            message.AMOUNT = req.body.amount;
            message.CREATEDON = req.body.createdon;

           
    }
    async process(message)
    {
        message.LIST = await Model.getBillHistory(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Bill History available "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetBillHistory();
