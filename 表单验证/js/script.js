$(function(){
	var inputs=$(".put");
	var prompts=$(".prompt");
	console.log(inputs);
	console.log(prompts);
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
//	for(var i=0;i<inputs.length;i++){
//		if($(prompts[i].text())!=""){
//			$("#submit").click(function(event){ event.preventDefault(); })
//		}
//	}
})