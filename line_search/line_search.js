function search(){
    show_str = ""
    text = document.f.line.value;
    for(i = 0; i < line_data.length; i++){
        if(line_data[i][1].indexOf(text) >= 0 || line_data[i][2].indexOf(text) >= 0){
            show_str += button_str(line_data[i][0]) + line_data[i][1] + "<br>";
        }
    }
    document.getElementById("result").innerHTML = show_str;
}

function button_str(url_index){
    submit_button =  '<a href="javascript:ekikara_submit(' + url_index + ')">Submit</a>';
    show_button = '<a href="http://ekikara.jp/newdata/line/' + url_index + '/down1_1.htm" target="blank">Show</a>';
    return submit_button + " " + show_button
}

function ekikara_submit(url_index){
    document.submitform.lineNumber.value = url_index;
    document.submitform.submit();
}
