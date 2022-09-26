const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class MeterLogs
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
    
    async  getlastLogByID(id)
    {
    
        var results=await client.Query("Select * from meterlogs Where meterId=1 ORDER BY id DESC ",
        [id]);
        return results && results.length>0?results[0]:null;
    }
    async getLogByID(id)
    {
        
        var results=await client.Query("Select * from meterlogs WHERE id=?  ",
        [id]); 
        return results && results.length>0?results[0]:null;
    }
    async getMeterID(id)
    {
        
        var results=await client.Query("Select meterID from bills ",
        [id]);
        return results && results.length>0?results[0]:null;
    }
    async getCreatedonByID(id)
    {
        
        var results=await client.Query("Select createdon from bills Where meterId=?  ",
        [id]);
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new MeterLogs();