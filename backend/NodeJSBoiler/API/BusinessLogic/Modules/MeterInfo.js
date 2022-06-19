const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class MeterInfo
{
    
    async getMeterInfo(message)
    {
    
        var results=await client.Query("Select * from devicetype where userId=95547");
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new MeterInfo();