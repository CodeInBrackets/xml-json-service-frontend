function initialize(){
    var Aggregator = require('./event-aggregator.js');
    var APIHandler = require('./api-handler.js');

    var mainView = require('./views/partials/main.js');

    var apiRequestModel= require('./models/api-request.js');
    var apiRequestPresenter = require('./presenters/api-request.js');
    var apiRequestView = require('./views/partials/api-request.js');

    var IndexStyle = require('./views/styles/main.styl');
    var apiRequestStyle = require('./views/styles/api-request.styl');

    var aggregatorHandler  = new Aggregator(); 
    var apihandler = new APIHandler(aggregatorHandler);

    var advertiserListView = apiRequestView("AdvertiserList");

    document.getElementById('app').insertAdjacentHTML('beforeend', mainView);
    document.getElementById('content').insertAdjacentHTML('beforeend', advertiserListView);
    
    var advertiserList = new apiRequestModel("Advertiser List", "/advertiser/", apiRequestModel.requestTypes.json)
    var advertiserListPresenter =new apiRequestPresenter(document, aggregatorHandler, advertiserList, apiRequestModel.requestTypes)
}

window.init = initialize