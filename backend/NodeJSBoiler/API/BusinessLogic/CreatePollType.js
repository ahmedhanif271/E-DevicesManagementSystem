const  Model  = require("./Modules/PollType");

class CreatePollType
{
    async input(req,message)
    {
           // message.NAME=req.body.name;  
            //message.NAME=req.query.name; 
           message.DEVICEID = req.body.deviceId;
           message.COUNTER = req.body.counter;
           message.CURRENT = req.body.current;
           message.VOLTAGE = req.body.voltage;
           message.TIME = req.body.time;


           
    }
    async process(message)
    {
        await Model.createPollType(message)


    }
    async output(res,message)
    {
        res.responseBody.message = "Poll Type added "
        

        res.status="Success";
    }
    inputValidation(req)
    {

    }
    
}
module.exports= new CreatePollType();
