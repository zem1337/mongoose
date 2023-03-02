const express = require("express")
const { addcontact,getonecontact, deletecontact, updatecontact, getallcontacts} = require('../controllers/contactControllers')
const contactrouter = express.Router()
contactrouter.post('/addcontact',addcontact)
contactrouter.get('/allcontacts',getallcontacts)
contactrouter.get('/getonecontact/:id',getonecontact)
contactrouter.delete('/deletecontact/:id',deletecontact)
contactrouter.put('/updatecontact/:id',updatecontact)


module.exports = contactrouter

