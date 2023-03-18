const express = require('express');
const orgmodel = require('../models/organizationmodel.js')
const applicationmodel = require('../models/applicationmodel.js')
const studentmodel = require('../models/studentmodel.js')
const orgRouter = express.Router();

orgRouter.post('/addorg',async (req,res) => {

    let {name,email,password,role} = req.body;
      
    var new_user = new orgmodel({
        name,
        email,
        password,
        role
    })
      
    await new_user.save(function(err,result){
        if (err){
            console.log(err);
            res.status(400).json("unable to add org")
        }
        else{
            console.log(result)
            res.status(200).json("Org Added")
        }
    })
})

orgRouter.post('/update',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { name: req.body.name,password: req.body.password, location: req.body.location ,tagline: req.body.tagline };

    await orgmodel.findOneAndUpdate(filter, update)

    res.send("update request completed")
})

orgRouter.post('/addOpportunity',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {title,desc,location} = req.body;
    let status = "active";

    let op = {id,title,desc,status,views:0};

    const filter = {email: req.body.email};

    await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
    res.send("Job added")
})


orgRouter.post('/removeOpportunity',async (req,res) => {
    const filter = {email: req.body.email,"opportunitiesposted.id":req.body.id};


    await orgmodel.updateOne(
        filter,
        {
            $set: {
                "opportunitiesposted.$.status": "inactive",
             }
        }
    )

    res.send("notification status updated")
    //await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
})

orgRouter.post('/addMessage',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {to,message} = req.body;

    const filter = {email: req.body.email};
    let obj = {to,message};

    await orgmodel.findOneAndUpdate(filter, { $push: { messages: obj } });

    res.send("message added")
})

orgRouter.get('/getusers' , async (req,res) => {

    orgmodel.find({}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})

orgRouter.post('/getSpecificUsers' , async (req,res) => {
<<<<<<< HEAD
    
=======

>>>>>>> 0d9c57c37355685dac2527d0d4e81289de500706
    orgmodel.findOne({email: req.body.email}, (err,docs)=>{
        
        if(err){
            res.status(400).send(err);
        }
        else{
            res.send(docs);
        }
    });
})

orgRouter.post('/addNotification',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {title,desc} = req.body;
    let status = "active";

    let op = {id,title,desc,status};

    const filter = {email: req.body.email};


    await orgmodel.findOneAndUpdate(filter, { $push: { notifications: op } })

    res.send("notification added");
})

orgRouter.post('/approveApplication',async (req,res) => {
    applicationmodel.findOneAndUpdate({email: req.body.email},{status:"approved"});
})

orgRouter.post('/rejectApplication',async (req,res) => {
    applicationmodel.findOneAndUpdate({email: req.body.email},{status:"rejected"});
})

orgRouter.post('/getApproveApplication',async (req,res) => {
    applicationmodel.find({email: req.body.email , status:"approved"},(err,doc) => {
        if(err){
            res.status(400).json("error");
        }
        else {
            res.status(200).json(doc);
        }
    });
})

orgRouter.post('/scheduleInterview',async (req,res)=> {
    let {email,oemail,opid,description,scheduledTime} = req.body;
    let status = "active";
    
    var new_inter = new interviewmodel({
        email,
        oemail,
        opid,
        status,
        description,
        scheduledTime
    })
      
    await new_inter.save(async function(err,result){
        if (err){
            console.log(err);
            res.status(400).json("unable to schedule interview")
        }
        else{
            console.log(result)

            let id = Math.floor(Math.random() * 10000);
            let {title,desc} = req.body;
            let status = "active";

            let op = {id,title,desc,status};

            const filter = {email: req.body.email};


            await studentmodel.findOneAndUpdate(filter, { $push: { notifications: op } })

            res.send("notification added");

            res.status(200).json("interview scheduled")
        }
    })

})

module.exports = {
    orgRouter
}