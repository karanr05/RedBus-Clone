const mongoose = require('mongoose');
const BusSchema = mongoose.Schema(

    { 
        "name": {
            type : String,
        }, 
        "totalSeats": {
            type : Number,
        }, 
        "rating": {
            type : Number,
        },  
        "animeties": {
            type : [String]
        } 
        },
     
)
    
const Bus = mongoose.model('Bus', BusSchema);
module.exports = Bus;

//{date: { type: Number, 
    //     required: true },
    //   from: { type: String, 
    //     required: true },
    //   to: { type: String, 
    //     required: true },
    //   busOwnerID: { type: Number, 
    //     required: true },
    //   startTime: { type: Numb
