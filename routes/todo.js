const express = require('express'),
    router = express.Router(),
    Task = require('../models/todo');

router.get("/", (req, res)=>{
    let tasks;
    Task.find({}).then(data=>{
        tasks = JSON.stringify(data);
        //console.log("Get req");
        res.send(tasks);
    }).catch(err=>{
        console.log(err)
    })
})

router.get("/:id", (req, res)=>{
    let tasks;
    Task.findById(req.params.id).then(data=>{
        tasks = JSON.stringify(data);
        //console.log("Get req");
        res.send(tasks);
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/", (req, res)=>{
    let tasks;
    let obj = {
        name: req.body.name,
        status: req.body.status
    }
    //console.log(req.body);
    Task.create(obj, (err, data)=>{
        if(err){
            console.log(err)
        }else{
            tasks = JSON.stringify(data)
            res.send(tasks);
        }
    })
})

router.put("/:id", (req, res)=>{
    let task;
    //console.log(req.body);
    Task.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false}).then((data)=>{
        task = JSON.stringify(data)
        res.send(task);
    }).catch(err=>{
        res.status(404).send("Task Not Found");
    })
})

router.delete("/:id", (req, res)=>{
    Task.findByIdAndDelete(req.params.id, {useFindAndModify: false}).then((data)=>{
        res.send("Deleted")
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;