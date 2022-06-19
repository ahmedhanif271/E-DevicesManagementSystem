const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class ConnectedDevices
{
   
    async getConnectedDevices(message)
    {
    
        var results=await client.Query("Select * from connecteddevices ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new ConnectedDevices();