import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';

// App Config
const App = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
App.use(express.json());
App.use(cors());

//api endpoints/ (ROUTES)
App.get('/', (req, res) => {
    res.send("API Working");
})

//Start server
App.listen(port, ()=> {
    console.log(`Server running on port : ${port}`);
});