const express = require('express');
const app = express();
const userRoute = express.Router();

// User model

const ctrl = require('../controllers/usercontroller');


userRoute.post('/create',ctrl.create)
userRoute.get('/readall',ctrl.getAll)


module.exports = userRoute;