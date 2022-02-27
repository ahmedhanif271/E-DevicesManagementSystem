const  Model  = require("./Modules/BillType");

class CreateBillType
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
        await Model.createBillType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Bill Type added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreateBillType();
