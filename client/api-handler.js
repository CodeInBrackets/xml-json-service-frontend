class apiHandler{
    constructor(aggregator){
        this._aggregator = aggregator;
        this._aggregator.on("api:search:request:advertiser", (request) => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        this._aggregator.trigger("api:search:results:advertiser",xhttp.responseText);
                    }
                }.bind(this);
                xhttp.open("GET", request.getRequest(), true);
                xhttp.send();
        });
    }
}

module.exports = apiHandler