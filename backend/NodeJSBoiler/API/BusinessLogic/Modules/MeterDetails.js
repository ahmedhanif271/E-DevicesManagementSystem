const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class MeterDetails
{
   
    async getMeterDetails(message)
    {
    
        var results=await client.Query("Select * from devicetype ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new MeterDetails();