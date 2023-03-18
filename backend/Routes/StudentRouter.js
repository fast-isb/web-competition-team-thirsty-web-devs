const express = require('express');
const studentmodel = require('../models/studentmodel.js')
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
            console.log(err);
            res.status(400).json("unable to add org")
        }
        else{
            console.log(result)
            res.status(200).json("Org Added")
        }
    })
})

studentRouter.post('/updateName',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { name: req.body.name };

    await studentmodel.findOneAndUpdate(filter, update)

    res.send("update request completed")
})

studentRouter.post('/updatePassword',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { password: req.body.password };

    await studentmodel.findOneAndUpdate(filter, update)
    res.send("update request completed")
})

studentRouter.post('/updateAddress',async (req,res) => {
    const filter = { email: req.body.email };
    const update = { address: req.body.address };

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


// studentRouter.post('/removeOpportunity',async (req,res) => {
//     const filter = {email: req.body.email,"opportunitiesposted.id":req.body.id};


//     await orgmodel.updateOne(
//         filter,
//         {
//             $set: {
//                 "opportunitiesposted.$.status": "inactive",
//              }
//         }
//     )

//     res.send("Job status updated")
//     //await orgmodel.findOneAndUpdate(filter, { $push: { opportunitiesposted: op } })
// })

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



module.exports = {
    studentRouter
}