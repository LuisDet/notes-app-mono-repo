require('dotenv').config();
require('./config/mongoose');
const express = require('express');
const cors = require('cors');
const noteRoute = require('./routes/note.routes');
const userRoute = require('./routes/user.routes');
const loginRoute = require('./routes/login.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('../app/build'));

app.use('/api/users', userRoute);
app.use('/api/login', loginRoute);
app.use('/api/notes', noteRoute);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(process.env.PORT);
