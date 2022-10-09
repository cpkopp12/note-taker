//IMPORTS AND APP OBJECT-------------------------
// npm imports
const express = require('express');

//route file imports
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//set up port, instantiate app
const PORT = process.env.PORT || 3001;
const app = express();

//app.use(express.) statements
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
//app.use Route statements
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});