const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trading-book-store')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({ type: '*/*' }))

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));


app.use('/api', routes)

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
