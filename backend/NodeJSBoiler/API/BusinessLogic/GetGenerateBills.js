const  Model  = require("./Modules/GenerateBills");
const DeviceModel = require("./Modules/DeviceType");
const LogModel = require("./Modules/MeterLogs");
const MeterLogs = require("./Modules/MeterLogs");
const GenerateBills = require("./Modules/GenerateBills");
class GetGenerateBills
{
    async input(req,message)
    { 
           // message.METERID = req.query.meterID;
          
           
    }
    async process(message)
    {
        message.LIST = await DeviceModel.getDeviceType(message)
       
        for(var i=0;i<message.LIST.length;i++)
        {
            var bill=await Model.getfetchlastBillByMeterId(message.LIST[i].ID)
          if(bill)
          {
            var lastlog = await MeterLogs.getlastLogByID(message.LIST[i].ID);
            var billog = lastlog?await MeterLogs.getLogByID(bill.lastlogId):null;
            console.log(lastlog,billog,bill.meterID,"check");
            var netKwh=(lastlog?lastlog.kwh:0)-(billog?billog.kwh:0);
            var amount=netKwh*10;
            var createdon = await MeterLogs.getlastLogByID(message.CREATEDON);
          }   

          else
          {
            var lastlog = await MeterLogs.getlastLogByID(message.LIST[i].ID);  
            var netKwh=lastlog?lastlog.kwh:0;
            var amount=netKwh*10;
            //var month= (new Date()).getMonth(message.CREATEDON)
            var createdon = await MeterLogs.getlastLogByID(message.CREATEDON);
            
          }
          Model.createGenerateBills({METERID:message.LIST[i].ID,AMOUNT:amount,LASTLOGID:lastlog?lastlog.id:'',CREATEDON:createdon,CURRENTCOUNTER:netKwh})
        }
        
       
       // message.LIST = await Model.getfetchlastBillByMeterId(message)
        message.STATUS="Success";
        
           
        

    }
    async output(res,message)
    {
        res.responseBody.message = "Bill generated Successfully "
       // res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    
    
}
module.exports= new GetGenerateBills();
