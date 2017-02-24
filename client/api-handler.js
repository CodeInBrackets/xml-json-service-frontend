class apiHandler{
    constructor(aggregator){
        this._aggregator = aggregator;
        this._aggregator.on("api:search:request:advertiser", (request) => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        this._aggregator.trigger("api:search:results:advertiser",{
                            method: "GET",
                            typeRequest: "HTTP",
                            statusText: xhttp.statusText,
                            status: xhttp.status,
                            content: xhttp.responseText.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
                                        return '&#'+i.charCodeAt(0)+';';
                                    }),
                            headers: xhttp.getAllResponseHeaders()
                        })
                    }
                }.bind(this);
                xhttp.open("GET", request.getRequest(), true);
                xhttp.send();
        });
    }
}

module.exports = apiHandler