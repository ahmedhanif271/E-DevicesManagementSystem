const  Model  = require("./Modules/CustomersDetails");

class GetCustomersDetails
{
    async input(req,message)
    { 
            message.ID = req.query.id;
           
    }
    async process(message)
    {
        message.LIST = await Model.getCustomersDetails(message)
        message.STATUS="Success";

    }
    async output(res,message)
    {
        res.responseBody.message = "Customer details added "
        res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new GetCustomersDetails();
