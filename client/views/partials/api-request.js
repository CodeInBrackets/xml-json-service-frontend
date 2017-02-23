var html = '<div id="_name_">                                                       \
                <div id="top">                                                      \
                    <h1 id="command_name"><h1/>                                     \
                    <div class="dropdown">                                          \
                        <button class="dropbtn">Dropdown</button>                   \
                        <div class="dropdown-content">                              \
                            <a">JSON</a>                                            \
                            <a>XML</a>                                              \
                        </div>                                                      \
                    </div>                                                          \
                </div>                                                              \
            <div id="request"><span id="command_path"></span></div>                 \
            <div id="response"><span id="command_response"></span></div>'

module.exports = function(name){
    return html.replace('_name_',name)
}