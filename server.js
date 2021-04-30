const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors')

// aRdtW866UT4yfqdZ

// Set up Mongoose
const MONGO_URI = 'mongodb+srv://alex:aRdtW866UT4yfqdZ@cluster0.jsu7b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// create schema
const userSchema = new mongoose.Schema({
  email: String,
  items: Object,
  columns: Object,
  colors: Object,
  history: Array,
  monthlyHabitsCount: Object
});

// create Model
const User = mongoose.model("User", userSchema);

const app = express();
app.use(cors())
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// --------- /API METHODS ---------- //

// pull from mongodb
app.post('/api/ameyo/pull', async (req, res) => {
  const userEmail = req.body.email
  const userQuery = { 'email': userEmail}
  await User.findOne(userQuery, (err, mongoRes) => res.json(mongoRes))
  console.log('pull success')
})

// push to mongodb
app.post('/api/ameyo/push', (req, res) => {
  const userEmail = req.body.email
  const localUserData = req.body.data

  // if nothing sent
  if (!req.body.data){res.send("No data sent")}

  const userQuery = { 'email': userEmail}
  User.findOne(userQuery, async (err, mongoRes) => {
    if (err) { throw Error("Error querying MongoDB") }
    
    // if user in database
    else if (mongoRes) {
      await User.updateOne(userQuery, {
          email: userEmail,
          items: localUserData.items,
          columns: localUserData.columns,
          colors: localUserData.colors,
          history: localUserData.history,
          monthlyHabitsCount: localUserData.monthlyHabitsCount
      })
      console.log("push success")
    }
    
    // if need to create user
    else {
      let newUser = new User({
        email: userEmail,
        items: localUserData.items,
        columns: localUserData.columns,
        colors: localUserData.colors,
        history: localUserData.history,
        monthlyHabitsCount: localUserData.monthlyHabitsCount
      });

      // save new person
      newUser.save((err, data) => {
        if (err) { return console.error(err) }
        else { return console.log('user saved') }
      })
    }
  })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
  console.log(req.url)
});

const port = process.env.PORT || 3000;
// console.log(process.env)
app.listen(port);

console.log(`Password generator listening on ${port}!`);