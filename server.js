const express = require('express');
const mongoose = require('mongoose');
const Trip = require('./modules/trip');
const State = require('./modules/state');
const Bus = require('./modules/bus');
const app = express()

// Middleware
app.use(express.json())

//Route 


//To access the home page
app.get('/',(req,res) => {
    res.send("Welcome to our home page");
})

//To access the Trip page
app.get('/trips',(req,res) => {
    res.send("Your in the Trip Page");
})

//To access the Location page
app.get('/states',(req,res) => {
    res.send("Your in the Location  Page");
})

//To access the Bus page
app.get('/buses',(req,res) => {
    res.send("Your in the Bus  Page");
})


app.get('/trip', async(req,res) => {
    try {
        const trip = await Trip.find({});
        res.status(200).json(trip); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/state', async(req,res) => {
    try {
        const state = await State.find({});
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

app.get('/bus', async(req,res) => {
    try {
        const bus = await Bus.find({});
        res.status(200).json(bus);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
})

//API for Trip
app.post('/Trip',async(req,res) => {
    try {
        const {date,from,to,busOwnerID,startTime,EndTime,category,SeatBooked,bus_no,animeties_list,busFare,busName} = req.body;
        const tripData = new Trip({
            date,
            from,
            to,
            busOwnerID,
            startTime,
            EndTime,
            category,
            SeatBooked,
            bus_no,
            animeties_list,
            busFare,
            busName
        })

        const trip = await tripData.save();
        res.status(200).json(trip);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


//API for State
app.post('/State', async(req,res) => {
    try {
        const {state,districts} = req.body;
        const stateData = new State({
            state,
            districts
        })

        const states = await stateData.save();
        res.status(200).json(states); 
    } catch (error) {
        console.log(error.message);
        res.status(404).json({message: error.message});
    }
})

//API for Bus
app.post('/Bus', async(req,res) => {
    try {
        const {name,totalSeats,rating,animeties} = req.body;
        const busData = new Bus({
            name,
            totalSeats,
            rating,
            animeties
        })

        const bus = await busData.save();
        res.status(200).json(bus);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({message: error.message})
    }
})




// app.get('/state', async(req,res) => {
//     try {
//         const state = await State.find({});
//         res.status(250).json(state);
//     } catch (error) {
//         res.status(100).json({message : error.message})
//     }
// })


// app.get('/Bus', async(req,res) => {
//     try {
//         const Bus = await Bus.find({});
//         res.status(500).json(Bus);
//     } catch (error) {
//         res.status(200).json({message : error.message})
//     }
// })






mongoose.connect('mongodb+srv://karanramalingam5:karanr55@almax.zpb1r8h.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to Mongodb database")
    app.listen(3000, () => {
        console.log("Server running in port 3000");
    });
}).catch((error) => {
    console.log(`NOT connected to Database ${error}` );
})