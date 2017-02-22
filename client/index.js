function initialize(){
    var Aggregator = require('./event-aggregator.js');
    var APIHandler = require('./api-handler.js');

    var mainView = require('./views/partials/main.js');

    var apiRequestModel= require('./models/api-request.js');
    var apiRequestPresenter = require('./presenters/api-request.js');
    var apiRequestView = require('./views/partials/api-request.js');

    var IndexStyle = require('./views/styles/main.styl');
    var apiRequestStyle = require('./views/styles/api-request.styl');

    document.getElementById('app')
        .insertAdjacentHTML('beforeend', mainView);

    document.getElementById('content')
        .insertAdjacentHTML('beforeend', apiRequestView);
}

window.init = initialize