const dbmgr=require('../../../custom_modules/dbInstance');
var client=dbmgr.getDbClient();

class CustomerType
{
    async createCustomerType(message)
    {
    
        var results=await client.Query("Insert into customers (username,password,cnic,phone,address,dob,gender,userId) values(?,?,?,?,?,?,?,?)",
        [message.USERNAME, message.PASSWORD, message.CNIC, message.PHONE, message.ADDRESS, message.DOB, message.GENDER, message.USERID ]);
        
    }
    async getCustomerType(message)
    {
    
        var results=await client.Query("Select * from customers ",
        []);
        return results && results.length>0?results:[];
    }

}
module.exports=new CustomerType();