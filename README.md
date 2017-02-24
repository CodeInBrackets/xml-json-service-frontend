# xml-json-service-frontend

The front-end has been defined using the ```MVP``` patern for separation of concerns:
- ```Model```: javascript class or objects that represent information (found on path /client/models)
- ```Presenters```: javascript class in charged of defining the Jquery interactions (found on path /client/presenters)
- ```views```: 
    - ```partials```:  html partial classes for the UI devinition (found on path /client/views/partials)
    - ```styles```: ui styles defined using ```stylus``` (found on path /client/views/styles)

All the code is writen using ```ES6``` and transpiled for compatibility browser reasons using ```webpacks``` in conjuction with  ```babel```.
There are also 2 important clasese dded to improve extensibility:
- `event-aggregator` is a centralized aggregator to allow the independance of each of the component. 
- `api-handler` it is used as central hadler for the requests to the backend.