const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class CustomerType
{
    async createCustomerType(message)
    {
    
        var results=await client.Query("Insert into customers (username,password,entity_Id) values(?,?,?)",
        [message.USERNAME, message.PASSWORD, message.ENTITYID]);
        
    }
    async getCustomerType(message)
    {
    
        var results=await client.Query("Select * from customers ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new CustomerType();