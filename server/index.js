const express = require('express');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(authRoute);
app.use(profileRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
