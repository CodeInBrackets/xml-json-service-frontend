var html = '<div id="_name_">                                                       \
                <div id="top">                                                      \
                    <h1 id="command_name"><h1/>                                     \
                    <div id="command_dropdown" class="dropdown">                    \
                        <button id="command_dropdown_button" class="dropbtn">Dropdown</button>                   \
                        <div id="command_dropdown_content" class="dropdown-content">\
                        </div>                                                      \
                    </div>                                                          \
                </div>                                                              \
            <div id="request"><span id="command_path"></span></div>                 \
            <div id="response"><span id="command_response"></span></div>'

module.exports = function(name){
    return html.replace('_name_',name)
}