const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const User = require("./models/User.js");
const Exercise = require("./models/Exercise.js");
const WorkOut = require("./models/Workout.js");

const app = express();
const allowedOrigins = [
    'http://localhost:5173', // for local development
    'https://workout-app-1-u0h5.onrender.com', // deployed frontend
  ];
  
  // Enable CORS
  app.use(cors({
    origin: function (origin, callback) {
      // Check if the origin is allowed
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow credentials
  }));
  
app.use(cookieParser());
app.use(express.json());

const bcryptSalt= bcrypt.genSaltSync(10);
const jwtSecret = 'GoddidGoddidGoddidGoddid';

mongoose.connect(process.env.MONGOURL);
app.get('/test',(req,res)=>{
    mongoose.connect(process.env.MONGO_URL);
    res.json('test ok')
});


//Signup
app.post('/signup', async(req,res)=>{
    const {name,userName,pass,checkboxes,gender,trainMethod,fitnessLevel} = req.body;
    try{
        const userDoc = await User.create({
            name,
            username:userName,
            password:bcrypt.hashSync(pass,bcryptSalt),
            checkboxes,gender,trainMethod,fitnessLevel,
        });
        res.json({userDoc});
    } catch(e){
        res.status(422).json(e);
    }
});

//Login
// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
  
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        // Sign the JWT
        jwt.sign(
          { username: userDoc.username, id: userDoc._id },
          jwtSecret,
          {},
          (err, token) => {
            if (err) throw err;
            
            // Set the token as a secure cookie
            res.cookie('token', token, {
              httpOnly: true,
              secure: true, // Use true in production (for HTTPS)
              sameSite: 'None' // Necessary for cross-origin requests
            }).json(userDoc); // Send response with user data
          }
        );
      } else {
        res.status(422).json('Invalid password');
      }
    } else {
      res.status(422).json('User not found');
    }
  });
  

//Getting user data
app.get('/profile', (req,res) =>{
    const {token} = req.cookies;
    if(token){
       jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        if(err) throw err;
        const {username} = await User.findById(userData.id);
        res.json({username});
       }); 
    }else{
        res.json(null);
    }
});

app.post('/exercise',async(req,res)=> {
    const {exerciseName,description,performExercise,targetedMuscles} = req.body;
    try{
        const exerciseDoc = await Exercise.create({
            exerciseName,description,performExercise,targetedMuscles
        });
        res.json({exerciseDoc});
    } catch(e){
        res.status(422).json(e);
    }
})

app.post('/workout',async(req,res)=> {
    const {workoutName,exerciseName,numberOfSets,numberofReps,requiredEquipments,tags} = req.body;
    try{
        const exerciseDoc = await WorkOut.create({
            workoutName,exerciseName,numberOfSets,numberofReps,requiredEquipments,tags
        });
        res.json({exerciseDoc});
    } catch(e){
        res.status(422).json(e);
    }
})

app.get('/exercises', async (req, res) => {
    const exercises = await Exercise.find({});
    res.send(exercises);
});

app.get('/exercises/:exerciseName', async (req, res) => {
    const exerciseName = req.params.exerciseName;
    const exercise = await Exercise.findOne({ exerciseName });
    res.send(exercise);
});

// app.get('/workouts', async (req, res) => {
//     const exercises = await WorkOut.find({});
//     res.send(exercises);
// });

app.get('/workout-list/:id', async (req, res) => {
    console.log("Incoming request to /workouts/:id"); // Check if the route is being hit
    
    const { id } = req.params;
    const { token } = req.cookies;
  
    console.log("Request params:", id); // Check if params are correct
    console.log("Request cookies:", req.cookies); // Check if cookies are being received
  
    if (!token) {
      console.error("No token found in cookies");
      return res.status(401).json({ error: 'No token provided' });
    }
  
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error('Token verification error:', err);
        return res.status(403).send({ error: 'Invalid token' });
      }
  
      console.log('userData from token:', userData); // Should log if token is valid
      
      const user = await User.findById(userData.id);
      if (!user) {
        console.error('User not found in database');
        return res.status(404).send({ error: 'User not found' });
      }
  
      console.log('User checkboxes:', user.checkboxes); // Debugging user preferences
      
      const { checkboxes } = user;
      const selectedTags = Object.keys(checkboxes).filter(key => checkboxes[key]);
      
      let exercises;
      if (selectedTags.length > 0) {
        exercises = await WorkOut.find({ tags: { $in: selectedTags } });
      } else {
        exercises = await WorkOut.find({});
      }
  
      console.log('Filtered exercises:', exercises); // Final step to confirm exercises
      res.send(exercises); // Send the response once
    });
  });
    
  


// Get workouts based on workout name and user preferences
app.get('/workoutdetails/:workoutName', async (req, res) => {
    const { token } = req.cookies;
    const workoutName = req.params.workoutName;

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const user = await User.findById(userData.id);
            if (!user) {
                return res.status(404).send({ error: 'User not found' });
            }

            // Extract user checkbox preferences
            const { checkboxes } = user;
            const selectedTags = Object.keys(checkboxes).filter(key => checkboxes[key]);

            // Filter workouts based on the selected tags and workout name
            let exercises;
            if (selectedTags.length > 0) {
                exercises = await WorkOut.find({
                    $and: [
                        { tags: { $in: selectedTags } },
                        { workoutName: workoutName }
                    ]
                });
            } else {
                exercises = await WorkOut.find({ workoutName: workoutName });
            }
            res.send(exercises);
        });
    } else {
        res.json(null);
    }
});



app.get('/profile/:id', async (req,res) =>{
    const{id} = req.params;
    res.json(await User.findById(id))
});
app.put('/profileupdate', async(req,res) =>{
    const {token} = req.cookies;
    const {id, username,checkboxes,gender,trainMethod,fitnessLevel} = req.body;
    jwt.verify(token, jwtSecret, {}, async (err, userData)=>{
        if(err) throw err;
        const userDoc = await User.findById(id);
        if(userData.id===userDoc.id){
            userDoc.set({
                username,checkboxes,gender,trainMethod,fitnessLevel
            });
            await userDoc.save();
            res.json('ok');
        }
    });
});
//Logout
app.post('/logout', (req,res)=>{
    res.cookie('token', '').json(true);
})


app.listen(4000);