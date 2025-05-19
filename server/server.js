const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/mysql');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running & DB connected!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
