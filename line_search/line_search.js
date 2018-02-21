function search(search_text){
    show_str = ""
    for(i = 0; i < line_data.length; i++){
        if(line_data[i][1].indexOf(search_text) >= 0 || line_data[i][2].indexOf(search_text) >= 0){
            show_str += "<li>" + button_str(line_data[i][0]) + line_data[i][1] + "</li>";
        }
    }
    document.getElementById("result").innerHTML = show_str;
}

function button_str(url_index){
    submit_button =  '<a href="javascript:ekikara_submit(\'' + url_index + '\')">Submit</a>';
    show_button = '<a href="http://ekikara.jp/newdata/line/' + url_index + '/down1_1.htm" target="blank">Show</a>';
    return submit_button + " " + show_button
}

function ekikara_submit(url_index){
    document.submitform.lineNumber.value = url_index;
    document.submitform.submit();
}

function search_from_url(){
    args = new Array();
    location.search.substring(1).split('&').forEach(function(item){
        var key_val_set = item.split('=');
        args[key_val_set[0]] = decodeURI(key_val_set[1]);
    });

    if(args["line"]){
        search(args["line"]);
        document.f.line.value = args["line"];
    }
}

window.onload=search_from_url;
