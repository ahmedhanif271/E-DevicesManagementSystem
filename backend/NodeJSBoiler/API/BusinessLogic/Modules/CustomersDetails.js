const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class CustomersDetails
{
    
    async getCustomersDetails(message)
    {
    
        var results=await client.Query("Select * from customers where id=?",
        [message.ID]);
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new CustomersDetails();