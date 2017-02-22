function initialize(){
    var Aggregator = require('./event-aggregator.js');
    var APIHandler = require('./api-handler.js');

    var apiRequestModel= require('./models/api-request.js');
    var apiRequestPresenter = require('./presenters/api-request.js');
    var apiRequestView = require('./views/partials/api-request.js');

    var IndexStyle = require('./views/styles/index.styl');
    var apiRequestStyle = require('./views/styles/api-request.styl');

    document.getElementById('app')
        .insertAdjacentHTML('beforeend', apiRequestView);
}

window.init = initialize