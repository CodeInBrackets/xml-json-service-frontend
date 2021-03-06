class requestApiPresenter{
    constructor(document, aggregator, model, types){
        this._document = document;
        this._aggregator = aggregator;
        this._model = model;
        this._types = types;
        this._initializeData()
        this._initializeEvents()
    }

    _initializeData(){
        this._document.getElementById('command_name')
            .insertAdjacentHTML('beforeend', this._model.name);
        this._document.getElementById('command_dropdown_button').innerHTML = this._model.format
        for(var type in this._types)
            this._document.getElementById('command_dropdown_content')
                .insertAdjacentHTML('beforeend', '<a id=command_dropdown_'+this._types[type]+'>'+this._types[type]+'</a>');
                
        
    }
    
    _initializeEvents(){
        for(var type in this._types)
            this._document.getElementById('command_dropdown_'+this._types[type])
                .addEventListener("click", this._selectType.bind(this, this._types[type]), false)
        this._document.getElementById('command_dropdown_button')
                .addEventListener("click", this._callApi.bind(this), false)
        this._aggregator.on("api:search:results:advertiser",this._populateApiCall.bind(this))
    }

    _selectType(type){
        this._document.getElementById('command_dropdown_button').innerHTML = type
        this._model.format = type
    }

    _callApi(){
        this._aggregator.trigger("api:search:request:advertiser", this._model)
    }

    _populateApiCall(result){
        this._document.getElementById('request').innerHTML = '<pre><code>' + result.method + " " + this._model.getRequest();+'</code></pre>'
        this._document.getElementById('response').innerHTML =   '<pre><code>' + result.typeRequest + " " + result.status + " " + result.statusText + '\n' + 
                                                                result.headers + '\n' + 
                                                                result.content+'</code></pre>'
    }
    
}

module.exports = requestApiPresenter