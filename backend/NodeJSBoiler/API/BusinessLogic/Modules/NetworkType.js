const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class NetworkType
{
    async createNetworkType(message)
    {
    
        var results=await client.Query("Insert into networktype (name,ip_address,port,userId) values(?,?,?,?)",
        [message.NAME, message.IP_ADDRESS, message.PORT, message.USERID]);
        
    }
    async getNetworkType(message)
    {
    
        var results=await client.Query("Select * from networktype ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new NetworkType();