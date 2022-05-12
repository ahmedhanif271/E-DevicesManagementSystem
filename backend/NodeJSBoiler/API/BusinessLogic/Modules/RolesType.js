const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class RolesType
{
    async createRolesType(message)
    {
    
        var results=await client.Query("Insert into roles (name,role) values(?,?)",
        [message.NAME, message.ROLE]);
        
    }
    async getRolesType(message)
    {
    
        var results=await client.Query("Select * from roles ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new RolesType();