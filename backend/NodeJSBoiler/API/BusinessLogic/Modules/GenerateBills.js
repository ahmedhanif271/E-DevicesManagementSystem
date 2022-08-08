const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class GenerateBills
{

    async createGenerateBills(message)
    {
    
        var results=await client.Query("Insert into bills (meterID,createdon,lastlogId,currentcounter,amount) values(?,?,?,?,?)",
        [message.METERID, message.CREATEDON, message.LASTLOGID, message.CURRENTCOUNTER, message.AMOUNT ]);
    
    }

    async getfetchlastBillByMeterId(id)
    {
    
        var results=await client.Query("Select * from Bills where MeterID=? ORDER BY ID DESC ",
        [id]);
       
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new GenerateBills();