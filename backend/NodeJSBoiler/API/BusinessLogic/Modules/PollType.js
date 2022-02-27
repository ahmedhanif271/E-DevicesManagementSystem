const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class PollType
{
    async createPollType(message)
    {
    
        var results=await client.Query("Insert into polls (device_Id,counter,current,voltage,time) values(?,?,?,?,?)",
        [message.DEVICEID, message.COUNTER, message.CURRENT, message.VOLTAGE, message.TIME]);
        
    }
    async getPollType(message)
    {
    
        var results=await client.Query("Select * from polls ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new PollType();