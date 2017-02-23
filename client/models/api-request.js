class apiRequest{
    
    constructor(name, path, type){
        this.format = type
        this.name = name
        this.path = path
    }

    get getRequest(){
        return this.path + '?format='+this.format
    }
}

module.exports = apiRequest
module.exports.requestTypes = {
            json : "JSON",
            xml : "XML"
        }