const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class DeviceType
{
    async createDeviceType(message)
    {
    
        var results=await client.Query("Insert into devicetype (network,entity,serial) values(?,?,?)",
        [message.NETWORK, message.ENTITY, message.SERIAL]);
        
    }
    async getDeviceType(message)
    {
    
        var results=await client.Query("Select * from devicetype ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new DeviceType();