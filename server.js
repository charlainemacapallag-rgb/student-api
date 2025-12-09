require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

app.get('/', (req, res) => res.json({ success: true, message: 'Student API' }));

app.use('/students', studentRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(process.env.MONGO_URI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
