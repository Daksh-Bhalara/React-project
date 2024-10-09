const express=require("express");
const plastic = require('./plastic');
const route=express.Router();

route.get('',async(req,res)=>{
    const item = await plastic.find();
    res.json(item);
});
route.get('/:id',async(req,res)=>{
    const item = await plastic.findOne({id:req.params.id});
    if(!item) return res.status(404).json({msg:'Item not found'});
    res.json(item);
    });
    route.post('/add',async(req,res)=>{
        const new_pro=new plastic(req.body);
        const ans = await new_pro.save();
        res.json(ans);
    });
    route.patch('/update/:id',async(req,res)=>{
        const ans = await plastic.findOneAndUpdate({id:req.params.id},req.body);
        res.json(ans);
    });
    route.delete('/remove/:id',async(req,res)=>{
        const ans = await plastic.deleteOne({id:req.params.id});
        res.json(ans);
    })
    module.exports=route;
