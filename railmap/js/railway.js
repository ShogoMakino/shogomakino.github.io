$(function() {
    var pt = new google.maps.LatLng(41.925926, 143.240137);
    var mapOptions = {
        center: pt,
        zoom: 7
    };
    var map = new google.maps.Map(
        document.getElementById('disp_space'),
        mapOptions
    );



    $("#disp_button").click(function(e){
        var section_id = $("#id_txt").val();
        util.getJson(
            'section_small.json',
            {
                gml_id: section_id
            },
            function (errCode, result){
                console.log(errCode);
                console.log(result);
                if(errCode){ return; }
                alert(result[0].railway_line_name);

            },
            function(){
                //sent
            },
            function(){
                //finished
            }
        );
    });
});
