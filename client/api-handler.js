class apiHandler{
    constructor(aggregator){
        this._aggregator = aggregator;
        this._aggregator.on("api:search:request:advertiser", (request) => {
                this._aggregator.trigger("api:search:results:advertiser", {
                    "id": 1,
                    "name": "MockAd",
                    "external_id": "1",
                    "impressions": 53221221,
                    "clicks": 45121
                });
            // $.post('/search', request.Json, (data) => {
            //     this._aggregator.trigger("api:search:results:advertiser", data, idExtra);
            // },"json");
        });
    }
}

module.exports = apiHandler