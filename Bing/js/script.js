$(function(){
    var w= document.documentElement.clientWidth|| document.body.clientWidth;
    var h= document.documentElement.clientHeight|| document.body.clientHeight;
    $("body").css('width',w);
    $("body").css('height',h);
	$(".seting").bind('click',function(event){
		event.stopPropagation();
		$("#seting-main").toggle();
	});
	$(window).click(function(){
		$("#seting-main").hide();
	})
//----------------ajax部分-------------------------------------------------	
	$(".search-main").bind('keyup',function(){
		//keyup实时获取用户输入值
		var searchText=$(this).val();
		//输入值为空直接return，否则ajax会报错
		if(searchText=="")return;
		//输入值转化为正则表达式的样子，只是样子
        var searchTextZZ="/"+searchText+"/";
        //getJSON读取json文件，他直接把json解析成了对象，不用我们手动转换了
		$.getJSON("data.json",function(data){
			//读取到的数据（这里就是一个数组）赋值给dataValue
			var dataValue=data.contentValue
			//用于存放正则表达式通过的变量
			var valueList='';
			for(var i=0;i<dataValue.length;i++){
				//eval()函数进行转译，把"/"+searchText+"/"转换为正则表达式
				if(eval(searchTextZZ).test(dataValue[i])){
					//通过正则的变量存入valueList
					valueList+='<li>'+dataValue[i]+'</li>';
				}
			}
			//插入DOM节点
			$("#search-result").html(valueList);
			$(".prompt").show();
		})
		
//		var searchText=$(this).val();
//		$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
//			var d=d.AS.Results[0].Suggests;
//			var valueList='';
//			for(var i=0;i<d.length;i++){
//				valueList+='<li>'+d[i].text()+'</li>';
//			}
//			$("#search-result").html(valueList);
//			$(".prompt").show();
//		},'json');
		
	});
	$(".search-main").bind('focus',function(){
		$(".focus-bg").css('display','block');
		setTimeout(function(){
		  $(".focus-bg").css('opacity','1');			
		},30)

	});
	$(".search-main").bind('blur',function(){
		$(".focus-bg").css('opacity','0');
		$(".prompt").hide();
		setTimeout(function(){
		  $(".focus-bg").css('display','none');		  			
		},350)
	    
	});	
	$("#shear").bind('mouseover',function(){
			$('.shear-content').css('opacity','1');
			$('.shear-content').css('transform','translate(0,0)');         	
	})
	$("#shear").bind('mouseout',function(){
		$('.shear-content').css('opacity','0');
		$('.shear-content').css('transform','translate(10px,0)');
	})	
	$(".ma").bind('mouseover',function(){
		$(".ma-main").css('display','block');
		$(".line").css('display','block');
	})
	$(".ma").bind('mouseout',function(){
		$(".ma-main").css('display','none');
		$(".line").css('display','none');
	})	
	//背景切换
	var carouselArray = new Array(4);
	carouselArray[1] = "url(img/2.jpg)";
	carouselArray[2] = "url(img/3.jpg)";
	carouselArray[3] = "url(img/4.jpg)";
	carouselArray[4] = "url(img/5.jpg)";
	var i=1;
	$(".turn-right").bind('click',function(){
		if(i>=4){
			$(this).css('opacity',0.7);
			i==4;
		}
		else{
			$(this).css('opacity',1);
			$(".turn-left").css('opacity','1');
			$('.bg-toggle').css('opacity','1');
			$("body").css('background-image',carouselArray[++i]);
			setTimeout(function(){			
			$('.bg-toggle').css('opacity','0');	
			},500);			
		}
        console.log(i);
	});
	$(".turn-left").bind('click',function(){
		if(i<=1){
			$(this).css('opacity',0.7);
			i==1;
		}
		else{
			$(this).css('opacity',1);
			$(".turn-right").css('opacity','1');
			$('.bg-toggle').css('opacity','1');
			$("body").css('background-image',carouselArray[--i]);
			setTimeout(function(){
			$('.bg-toggle').css('opacity','0');	
			},500);			
		}

	});
});
