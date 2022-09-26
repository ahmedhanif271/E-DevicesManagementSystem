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
           
          var bill=await GenerateBills.getfetchlastBillByMeterId(message.LIST[i].ID)
          console.log(bill, message.LIST[i].ID, "checking bill")
          if(bill)
          {
            console.log(message.LIST[i].ID, "check message");
            var lastlog = await MeterLogs.getlastLogByID(message.LIST[i].ID);
        console.log(lastlog, "check lastlog again")
            var billog = lastlog?await MeterLogs.getLogByID(bill.lastlogId):null;
            console.log(billog,bill.lastlogId, "check billog")
            var MeterID = await MeterLogs.getMeterID(bill.ID);
            console.log(lastlog, billog,bill.meterID,MeterID,"check1");
            var netKwh=(lastlog.kwh-billog.kwh);
            var amount=netKwh*10;
            console.log(netKwh,amount,"Amount & NETKWH")
           // var createdon = await GenerateBills.createGenerateBills(message.CREATEDON);
            //var month= (new Date()).getMonth(message.CREATEDON)
            Model.createGenerateBills({METERID:bill.meterID, LASTLOGID:lastlog?lastlog.id:'',CURRENTCOUNTER:netKwh,AMOUNT:amount})
          }   

         /* else
          {
           // var MeterID = await MeterLogs.getMeterID(bill.ID);
            var lastlog = await MeterLogs.getlastLogByID(message.LIST[i].ID);  
            var netKwh=lastlog;
            var amount=netKwh*10;
           // var createdon = await GenerateBills.createGenerateBills(message.CREATEDON);
            //console.log(createdon, "createdon");
            //var month= (new Date()).getMonth(message.CREATEDON)
            
          
        Model.createGenerateBills({METERID:message.LIST[i].ID, LASTLOGID:lastlog?lastlog.id:'',CURRENTCOUNTER:netKwh,AMOUNT:amount})
        }*/
      }
        
       
       //message.LIST = await Model.getfetchlastBillByMeterId(message)
        message.STATUS="Success";
        
           
        

    }
    async output(res,message)
    {
        res.responseBody.message = "Bill generated Successfully "
       res.responseBody.list = message.LIST
        res.status=message.STATUS;
    
    }
    
    
}
module.exports= new GetGenerateBills();