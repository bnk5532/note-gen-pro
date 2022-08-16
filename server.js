const express = require('express');
const apiRoutes = require('./routes/apiRoutes/indexAPI');
const htmlRoutes = require('./routes/htmlRoutes/indexHTML');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));