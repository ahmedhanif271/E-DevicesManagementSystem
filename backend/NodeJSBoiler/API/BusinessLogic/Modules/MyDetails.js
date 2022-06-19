const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class MyDetails
{
    
    async getMyDetails(message)
    {
    
        var results=await client.Query("Select * from customers where userId=95547");
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new MyDetails();