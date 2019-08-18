const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());
