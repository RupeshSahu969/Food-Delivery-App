const mongoose = require('mongoose')

const mongoURL="mongodb+srv://rupeshsahukumar80:Rupeshsahu%401234@cluster0.xkfpezi.mongodb.net/gofoodmern?retryWrites=true&w=majority"

const mongoDB=async()=>{
    await mongoose.connect(mongoURL,{ useNewUrlParser:true },async(err,result) =>{
        if(err) console.log("---",err)
        else{
            console.log("connected")
            const fetched_data=await mongoose.connection.db.collection("food_item")
            fetched_data.find({}).toArray(async function(err,data){
              const foodCategory=await mongoose.connection.db.collection("foodCategory")
              foodCategory.find({}).toArray( function(err,catData){
                if(err) console.log(err);
                else {
                        global.food_item=data
                        global.foodCategory=catData
                        // console.log(global.food_item);
                     }
              })
                
            })
        }
    })
}

module.exports = mongoDB;
