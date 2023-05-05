const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGOurl,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Подключение успешно')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB