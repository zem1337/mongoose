const ContactModel = require("../models/ContactModel")

exports.addcontact = async(req,res)=>{
    try {
        const found= await ContactModel.findOne({email :req.body.email})
        if (found){
            return res.status(400).send("email already exists") 
        } 
        const newcontact = new ContactModel(req.body)
        await newcontact.save()
        res.status(200).send({msg : "added new contact", newcontact})
    } catch (error) {
        res.status(500).send({msg : " could not add new contact"})
    }
}
exports.getallcontacts=async(req,res)=>{
    try {
        const contacts = await ContactModel.find()
        res.status(200).send({msg : "contact list ",contacts})
    } catch (error) {
        res.status(500).send({msg : " could not get the contact list"})
        
    }
}
exports.getonecontact=async(req,res)=>{
    try {
        const {id} = req.params
        const contactbyid=  await ContactModel.findById(id)
        res.status(200).send({msg : "contact found ",contactbyid})
    } catch (error) {
        res.status(500).send({msg : " could not get the contact "})
    }
}
exports.deletecontact= async(req,res)=>{
    try {
        const {id}=req.params
        await ContactModel.findByIdAndDelete(id)
        res.status(200).send({msg : "contact deleted"})
    } catch (error) {
        res.status(500).send({msg : " could not delete the contact "})
    }
}
exports.updatecontact=async(req,res)=>{
    try {
        const {id}=req.params
        await ContactModel.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({msg : "contact updated"})
    } catch (error) {
        res.status(500).send({msg : " could not update the contact "})
    }
}