const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add_customer', services.add_customer)

route.get('/update_customer', services.update_customer)


//API
// route.post('/api/customer', controller.createcustomer);
// route.get('/api/customer', controller.find);

module.exports = route