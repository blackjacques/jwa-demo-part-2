const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/jwtauth', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/checking', function(req, res){
   res.json({
      "Response": "I hear you loud and clear!"
   });
});

app.use('/user', user);

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});