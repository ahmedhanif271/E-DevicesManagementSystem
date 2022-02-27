const  Model  = require("./Modules/BillType");

class GetBillType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
            message.DATA = req.body.data;
           message.COUNTER = req.body.counter;
           message.AMOUNT = req.body.amount;
           message.STATUS = req.body.status;
           message.ENTITYID = req.body.entity_Id;

           
    }
    async process(message)
    {
        message.LIST = await Model.getBillType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Bill Type added "
        res.responseBody.list = message.LIST

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetBillType();
