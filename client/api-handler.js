class apiHandler{
    constructor(aggregator){
        this._aggregator = aggregator;
        aggregator.on("api:search:request:json", (request, idExtra) => {

        });
        aggregator.on("api:search:request:xml", (request, idExtra) => {

        });
    }
}

module.exports = apiHandler