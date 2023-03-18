const express = require('express');
const orgmodel = require('../models/organizationmodel.js')
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

orgRouter.post('/updateName',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { name: req.body.name };

    await orgmodel.findOneAndUpdate(filter, update)

    res.send("update request completed")
})

orgRouter.post('/updatePassword',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { password: req.body.password };

    await orgmodel.findOneAndUpdate(filter, update)
    res.send("update request completed")
})

orgRouter.post('/updateAddress',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { address: req.body.address };

    await orgmodel.findOneAndUpdate(filter, update)
    res.send("update request completed")
})

orgRouter.post('/updateTagline',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { tagline: req.body.tagline };

    await orgmodel.findOneAndUpdate(filter, update)
    res.send("update request completed")
})

orgRouter.post('/addOpportunity',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {title,desc} = req.body;
    let status = "active";

    let op = {id,title,desc,status,views:0};

    const filter = {email: req.body.email};


    await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
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

    //await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
})

orgRouter.post('/addMessage',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {to,message} = req.body;

    const filter = {email: req.body.email};
    let obj = {to,message};

    await orgmodel.findOneAndUpdate(filter, { $push: { messages: obj } });
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

orgRouter.get('/getSpecificUsers' , async (req,res) => {

    orgmodel.findOne({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})

orgRouter.post('/addNotification',async (req,res) => {
    
    let id = ()=>nanoid();
    let {title,desc} = req.body;
    let status = "active";

    let op = {id,title,desc,status};

    const filter = {email: req.body.email};


    await orgmodel.findOneAndUpdate(filter, { $push: { notifications: op } })
})


module.exports = {
    orgRouter
}