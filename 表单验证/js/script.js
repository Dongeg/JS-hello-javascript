$(function(){
	var inputs=$(".put");
	var prompts=$(".prompt");
	console.log(inputs[1].value);
	console.log(prompts[1]);
	$("#name").bind('blur',function(){
		if($(this).val()==""){
			$("#name-prompt").text("该字段不能为空");
		}
		else if(!($(this).val()=="")){
			$("#name-prompt").text("");
		}
	});
	$("#phone").bind('blur',function(){
		if($(this).val()==""){
			$("#phone-prompt").text("该字段不能为空");
		}
		else if(!($(this).val().match(/0?(13|14|15|18)[0-9]{9}/))){
			$("#phone-prompt").text("手机号码格式不正确");
		}
		else if(!($(this).val()=="")){
			$("#phone-prompt").text("");
		}
	});
	$("#email").bind('blur',function(){
		if($(this).val()==""){
			$("#email-prompt").text("该字段不能为空");
		}
		else if(!($(this).val().match(/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/))){
			$("#email-prompt").text("邮箱格式不正确");
		}
		else if(!($(this).val()=="")){
			$("#email-prompt").text("");
		}
	});	
	$("#password").bind('blur',function(){
		if($(this).val()==""){
			$("#password-prompt").text("该字段不能为空");
		}
		else if(!($(this).val().match(/^[A-Za-z0-9_-]+$/))){
			$("#password-prompt").text("邮箱格式不正确");
		}
		else if(!($(this).val()=="")){
			$("#password-prompt").text("");
		}
	});	
   $("#submit").bind('click',function(event){
   	    for(var i=0;i<inputs.length;i++){
   	    	var index=i;
   	    	//因为input[i]是数组中的一个对象，所以不能用val()
   	    	if(inputs[i].value==""){
   	    		event.preventDefault();
   	    		$(inputs[i]).parent().next().text("信息未填写或格式错误");
   	    	}
   	    }
// 	    for(var j=0;j<prompts.length;j++){
// 	    	console.log(prompts[j]);
// 	    	if(prompts[j]!=""){
// 	    		
// 	    		event.preventDefault();
// 	    	}
// 	    }
   })
})