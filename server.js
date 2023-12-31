const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const bodyParser = require('body-parser');

// Import the book model

const app = express();

// Set up middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());


// Connect to the MongoDB database
mongoose.connect('mongodb+srv://aashish:aashish@bookexchange.ozkb8vk.mongodb.net/?retryWrites=true&w=majority', {
// mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//Routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/store', storeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
