var html = '<div id="_name_">                                                       \
                <div id="top">                                                      \
                    <h1 id="command_name"><h1/>                                     \
                    <div id="command_dropdown" class="dropdown">                    \
                        <button id="command_dropdown_button" class="dropbtn">Dropdown</button>                   \
                        <div id="command_dropdown_content" class="dropdown-content">\
                        </div>                                                      \
                    </div>                                                          \
                <div id="request"></div>                 \
                <div id="response"></div>\
            </div> '

module.exports = function(name){
    return html.replace('_name_',name)
}