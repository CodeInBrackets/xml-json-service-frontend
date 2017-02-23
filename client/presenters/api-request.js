module.exports = class requestApiPresenter{
    constructor(document, aggregator, model){
        this._document = document;
        this._aggregator = aggregator;
        this._model = model;
        this._initializeData()
        this._initializeEvents()
    }

    _initializeData(){
        this._document.getElementById('command_name')
            .insertAdjacentHTML('beforeend', this._model.name);
    }
    
    _initializeEvents(){
        this._aggregator.on("api:search:results:advertiser")
        
    }
    
}