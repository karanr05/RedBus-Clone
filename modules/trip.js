const mongoose = require('mongoose');

const TripSchema = mongoose.Schema(
    {
        "date": Number, 
        "from": String, "to": String, "busOwnerID": Number , 
        "startTime":Number , 
        "EndTime": Number, 
        "category": String, "SeatBooked": Array, "bus_no": Number, 
        "animeties_list": Array, 
        "busFare": Number, 
        "busName": String },
)  


const Trip = mongoose.model('Trip', TripSchema);
module.exports = Trip;