const express = require('express');
const hardware = require('./hardware');
const router = express.Router();

router.get('',async(req,res)=>{
    const hardwareList = await hardware.find();
    res.json(hardwareList);

});
router.get('/:id',async (req,res)=>{
    const item =await hardware.findOne({id:req.params.id});
    if(!item){
        return res.status(404).json({message:'Item not found'});
    }
    res.json(item); 
});
router.post('/add',async(req,res)=>{
    const item = new hardware(req.body);
    const ans= await item.save();
    res.json(ans);
});
router.patch('/update/:id',async(req,res)=>{
    const item = await hardware.findOneAndUpdate({id:req.params.id},req.body);
    res.json(item);

});
router.delete('/remove/:id',async(req,res)=>{
    const ans = await hardware.deleteOne({id:req.params.id});
    res.json(ans);
});

module.exports=router;