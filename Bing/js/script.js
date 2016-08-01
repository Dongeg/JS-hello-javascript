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
	$(".search-main").bind('focus',function(){
		$(".focus-bg").css('display','block');
		setTimeout(function(){
		  $(".focus-bg").css('opacity','1');			
		},30)

	});
	$(".search-main").bind('blur',function(){
		$(".focus-bg").css('opacity','0');
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
			setTimeout(function(){
			$("body").css('background',carouselArray[++i]);
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
			setTimeout(function(){
			$("body").css('background',carouselArray[--i]);
			$('.bg-toggle').css('opacity','0');	
			},500);			
		}

	});
});
