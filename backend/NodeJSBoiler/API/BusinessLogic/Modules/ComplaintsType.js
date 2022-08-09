const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class ComplaintsType
{
    async createComplaintsType(message)
    {
    
        var results=await client.Query("Insert into complaints (meterId,name,details,phone ) values(?,?,?,?)",
        [message.METERID, message.NAME, message.DETAILS, message.PHONE ]);
        
    }
    async getComplaintsType(message)
    {
    
        var results=await client.Query("Select * from complaints",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new ComplaintsType();