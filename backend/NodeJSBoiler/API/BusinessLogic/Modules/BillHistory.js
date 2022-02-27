const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class BillHistory
{
    async getBillHistory(message)
    {
    
        var results=await client.Query("Select * from bills where entity_Id = ? ",
        [message.API_USER_ID]);
        return results && results.length>0?results:[];
    }

}
module.exports=new BillHistory();