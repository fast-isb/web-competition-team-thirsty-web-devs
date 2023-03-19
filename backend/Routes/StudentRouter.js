const express = require('express');
const studentmodel = require('../models/studentmodel.js')
const applicationmodel = require('../models/applicationmodel')
const interviewmodel = require('../models/interviews.js')
const studentRouter = express.Router();


studentRouter.post('/addStudent',async (req,res) => {

    let {name,email,password,role} = req.body;
      
    var new_user = new studentmodel({
        name,
        email,
        password,
        role
    })
      
    await new_user.save(function(err,result){
        if (err){
            res.status(400).json("unable to add org")
        }
        else{
            res.status(200).json("Org Added")
        }
    })
})

studentRouter.post('/update',async (req,res) => {
    
    const filter = { email: req.body.email };
    const update = req.body ;

    await studentmodel.findOneAndUpdate(filter, update)

    res.send("update request completed")
})


studentRouter.post('/addEducation',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {degree,institute,startDate,enddate,Grade} = req.body;

    let op = {id,degree,institute,startDate,enddate,Grade};

    const filter = {email: req.body.email};


    await studentmodel.findOneAndUpdate(filter, { $push: { education: op } })
    res.send("Job added")
})

studentRouter.post('/addExperience',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {title,organization,startDate,enddate,Grade} = req.body;

    let op = {id,title,organization,startDate,enddate,Grade};

    const filter = {email: req.body.email};


    await studentmodel.findOneAndUpdate(filter, { $push: { exprerience: op } })
    res.send("Job added")
})

studentRouter.post('/getSpecificExperience',async (req,res)=> {
    studentmodel.findOne({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs.exprerience);
        }
    });
})

studentRouter.post('/getSpecificEducation',async (req,res)=> {
    studentmodel.findOne({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs.education);
        }
    });
})


studentRouter.post('/getNotifications',async (req,res)=> {
    studentmodel.findOne({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs.notifications);
        }
    });
})

studentRouter.post('/addMessage',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {to,message} = req.body;

    const filter = {email: req.body.email};
    let obj = {to,message};

    await studentmodel.findOneAndUpdate(filter, { $push: { messages: obj } });

    res.send("message added")
})

studentRouter.get('/getusers' , async (req,res) => {

    studentmodel.find({}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})

studentRouter.post('/getSpecificUsers' , async (req,res) => {

    studentmodel.findOne({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})

studentRouter.post('/addNotification',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {title,desc} = req.body;
    let status = "active";

    let op = {id,title,desc,status};

    const filter = {email: req.body.email};


    await studentmodel.findOneAndUpdate(filter, { $push: { notifications: op } })

    res.send("notification added");
})

studentRouter.post('/removeNotification',async (req,res) => {
    const filter = {email: req.body.email,"notifications.id":req.body.id};


    await studentmodel.updateOne(
        filter,
        {
            $set: {
                "notifications.$.status": "inactive",
             }
        }
    )

    res.send("notification status updated")
    //await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
})


studentRouter.post('/addWishlist',async (req,res) => {
    
    let id = Math.floor(Math.random() * 10000);
    let {jobId} = req.body;

    let op = {id,jobId};

    const filter = {email: req.body.email};


    await studentmodel.findOneAndUpdate(filter, { $push: { wishlist: op } })

    res.send("wishlist added");
})

studentRouter.post('/removeWishlist',async (req,res) => {

    const filter = {email: req.body.email};

    await studentmodel.findOneAndUpdate(filter, { $pullAll: { wishlist: id } })

    res.send("wishlist removed");
})

studentRouter.post('/applyJob',async (req,res)=> {
    let {email,oemail,opid,description} = req.body;
    let status = "active";
    
    var new_application = new applicationmodel({
        email,
        oemail,
        opid,
        status,
        description
    })
      
    await new_application.save(function(err,result){
        if (err){
            console.log(err);
            res.status(400).json("unable to add application")
        }
        else{
            console.log(result)
            res.status(200).json("application Added")
        }
    })
})

studentRouter.post('/removeApplication',async (req,res)=> {
    applicationmodel.findOneAndUpdate({email: req.body.email},{status:"inactive"});
})

studentRouter.post('/removeInterviews',async (req,res)=> {
    interviewmodel.findOneAndUpdate({email: req.body.email},{status:"inactive"});
})


studentRouter.post('/getSpecificInterview',async (req,res)=> {
    interviewmodel.find({email: req.body.email}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})

studentRouter.post('/getInterviews',async (req,res)=> {
    studentmodel.find({}, (err,docs)=>{
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).json(docs);
        }
    });
})


module.exports = {
    studentRouter
}