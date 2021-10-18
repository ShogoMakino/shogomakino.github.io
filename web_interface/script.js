var ip = "192.168.10.1";
$(function(){
    $('#get_settings').click(function(){
	$.post(ip + "/get_settings")
	    .done(function(data){
		alert(data);
	    })
	    .fail(function(){
		alert("failed");
	    });
    });
    
    $('#start_shutter').click(function(){
	$.post(ip + "/start_shutter")
	    .done().fail();
    });
    
    $('#stop_shutter').click(function(){
	$.post(ip + "/stop_shutter")
	    .done().fail();
    });
    
    $('#open_shutter').click(function(){
	$.post(ip + "/open_shutter")
	    .done().fail();
    });
    
    $('#close_shutter').click(function(){
	$.post(ip + "/close_shutter")
	    .done().fail();
    });
    
    $('#add_profile').click(function(){
	var adding_elem = $('#master_profile').clone(true);
	adding_elem.attr('id','');
	adding_elem.find('.button').css('display', 'block');
	adding_elem.find('.edit').css('display', 'block');
	adding_elem.appendTo('ul');
    });

    $('.timer_profile .view').click(function(){
	$(this).parent().find('.button').toggle();
	$(this).parent().find('.edit').css('display', 'none');
    });

    $('.timer_profile .edit_profile').click(function(){
	$(this).parents('.edit').find('input[type="text"]').each(function(index, element){
	    $(element).val($(this).parents('.timer_profile').find('.view .' + $(element).attr('name')).text());
	});
	$(this).parents('.timer_profile').find('.edit').show();
    });
    $('.timer_profile .edit .save_profile').click(function(){
	$(this).parents('.edit').find('input[type="text"]').each(function(index, element){
	    $(this).parents('.timer_profile').find('.view .' + $(element).attr('name')).text($(element).val());
	});
	$(this).parents('.edit').hide();
    });
    $('.timer_profile .edit .discard_profile').click(function(){
	$(this).parents('.edit').hide();
    });

    $('.timer_profile .delete_profile').click(function(){
	$(this).parents('.timer_profile').remove();
    });

    $('.timer_profile .send_profile').click(function(){
	var settings={};
	$(this).parents('.timer_profile').find('.edit input[type="text"]').each(function(index, element){
	    settings[$(element).attr('name')] = $(this).parents('.timer_profile').find('.view .' + $(element).attr('name')).text();
	});
	alert(JSON.stringify(settings))
	$.post(ip + '/set_settings', settings)
	    .done().fail();
    });
});
