require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const contactRoutes = require('./src/routes/contactRoutes'); 
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes); 
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});