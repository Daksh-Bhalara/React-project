const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const plastic_routes=require('./plastic_routes');
// const hardware_routes = require('./hardware_routes');




const connectionString="mongodb+srv://dakshpatel6064:Dsb%40060505@cluster0.yc9qf4t.mongodb.net/BSC(H)_138";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected to MongoDB");
    const app = express();
    app.use(cors());

    app.use(bodyParser.json());
    
    app.use('/plastic',plastic_routes);
    // app.use('/hardware',hardware_routes)

    app.listen(4000,()=>{
        console.log("Server is running  @ 4000");

    })

})
// app.get('/marwell' , async(req,res)=>{
    //     const result = await kichenwear.find();
    //     res.json(result);
    // });

    // app.get('/marwell/:id' , async(req,res)=>{
    //     const result = await kichenwear.findOne({id:req.params.id})
    //     res.json(result);
    // });

    // app.post('/marwell/add',async(req,res)=>{
    //     const new_pro = new kichenwear(req.body);
    //     const ans = await new_pro.save();
    //     res.json(ans);
    // });
    // app.patch('/marwell/update/:id',async(req,res)=>{
    //     const ans = await kichenwear.findOneAndUpdate({id:req.params.id},req.body);
    //     res.json(ans);
    //     });
    // app.delete('/marwell/remove/:id',async(req,res)=>{
    //     const ans = await kichenwear.deleteOne({id:req.params.id});
    //     res.json(ans);
    // });
    