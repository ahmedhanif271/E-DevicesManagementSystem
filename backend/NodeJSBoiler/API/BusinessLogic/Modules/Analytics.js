const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class Analytics
{
    
    async getAnalytics(message)
    {
    
        var results=await client.Query("Select CURRENT, VOLTAGE, CREATEDON, AMOUNT from meterlogs WHERE meterId=192475",[]);
        return results && results.length>0?results:[];
    }

}
module.exports=new Analytics();