$(function(){
    util.getJson(
        'json_small_manual',
        {
            railway: "いわて銀河鉄道線",
            operation_company: "アイジーアールいわて銀河鉄道"
        },
        function (errCode, result) {
            //success
            console.log(errCode);
            console.log(result);
            if (errCode) {
                return;
            }
            var curve = result.Curve;
            var str = "";
            for(i in curve){
                str += curve[i].lat + ", " + curve[i].lng + "<br>";
            }
            $("#disp_space").html(str);
        },
        function() {
            //sent
        },
        function() {
            //finished
        }
    );
});
