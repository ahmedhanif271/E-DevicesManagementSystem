const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class UnitsAlert
{
    async createUnitsAlert(message)
    {
    
        var results=await client.Query("Insert into unit (ID, meterID, networkID, units, phone) values(?,?,?,?,?)",
        [message.ID, message.METERID, message.NETWORKID, message.UNITS, message.PHONE]);
        
    }
    async getUnitsAlert(message)
    {
    
        var results=await client.Query("Select * from unit ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new UnitsAlert();