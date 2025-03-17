const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

function setRoutes(app) {
    router.get('/', indexController.getIndex.bind(indexController));
    // Add more routes here as needed

    app.use('/api', router);
}

module.exports = setRoutes;