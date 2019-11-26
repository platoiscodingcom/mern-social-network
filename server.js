const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const app = express();

//connect to DB
mongoose.connect(db, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log(`connecting to database: ${db}`)
  })
  .catch(err => {
    console.log('Error while connecting to database')
    console.log('Terminating application...')
    process.exit()
  })

//init Middleware
app.use(express.json({extended: false}));


app.get('/', (req, res) => res.send('API Running'));

//define routes
app.use('/api/users', require('./routes/api/users') );
app.use('/api/auth', require('./routes/api/auth') );
app.use('/api/profile', require('./routes/api/profile') );
app.use('/api/posts', require('./routes/api/posts') );

const PORT =process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));