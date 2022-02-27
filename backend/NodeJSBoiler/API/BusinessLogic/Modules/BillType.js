const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class BillType
{
    async createBillType(message)
    {
    
        var results=await client.Query("Insert into bills (data,counter,amount,status,entity_Id) values(?,?,?,?,?)",
        [message.DATA , message.COUNTER, message.AMOUNT, message.STATUS, message.ENTITYID]);
        
    }
    async getBillType(message)
    {
    
        var results=await client.Query("Select * from bills ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new BillType();