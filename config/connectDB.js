const mongoose = require ('mongoose')

const connectDB=async()=>{
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("DataBase is connected")
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDB