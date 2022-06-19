const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class NetworkInfo
{
    
    async getNetworkInfo(message)
    {
    
        var results=await client.Query("Select * from networktype where userId=95547");
        return results && results.length>0?results:[];
    }

}
module.exports=new NetworkInfo();