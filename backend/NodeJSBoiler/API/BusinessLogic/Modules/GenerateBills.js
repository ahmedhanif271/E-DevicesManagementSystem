const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class GenerateBills
{

    async createGenerateBills(message)
    {
    console.log(message);
        var results=await client.Query("Insert into bills (meterID,lastlogId,currentcounter,amount,createdon) values(?,?,?,?,CURRENT_TIMESTAMP)",

    [message.METERID,message.LASTLOGID,message.CURRENTCOUNTER,message.AMOUNT]);
    
    }

    async getfetchlastBillByMeterId(id)
    {
    
        var results=await client.Query("Select * from bills where meterID=? ORDER BY ID DESC ",
        [id]);
       
        return results && results.length>0?results[0]:null;
    }

}
module.exports=new GenerateBills();