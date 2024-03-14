const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());


mongoose
.connect('mongodb://localhost:27017/WeekChallenge')
.then(()=> {console.log('Connected to mongodb compass database')})
.catch((err) => console.log('Error connecting to database: ', err));

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
});


const postRoutes = require('./Routes/Post.routes')
app.use('/Post',postRoutes)


app.use((err, req, res, next) => {
	console.log(err.stack)
	res.status(500).send('somthing brok!')
})

app.listen(5000, () => {
	console.log('listening to port 5000')
})