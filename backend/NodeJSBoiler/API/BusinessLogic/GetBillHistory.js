const  Model  = require("./Modules/BillHistory");

class GetBillHistory
{
    async input(req,message) {}
    
    async process(message)
    {
        message.LIST = await Model.getBillHistory(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Bill History available "
        res.responseBody.list = message.LIST

    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetBillHistory();
