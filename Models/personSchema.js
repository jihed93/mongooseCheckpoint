const mongoose=require('mongoose')

const personSchema=mongoose.Schema({
    name:String,
    age:Number,
    favoriteFoods:[String]
},{
    timestamps: true
  })


const person=mongoose.model('Person',personSchema)

module.exports=person

