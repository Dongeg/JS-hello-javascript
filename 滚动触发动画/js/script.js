$(function(){
	if($(window).scrollTop()>100){
		$(".one-main-img").css('transform','translate(0,0)')
		$(".one-main-img").css('opacity','1');
	}
	if($(window).scrollTop()>300){
		$(".two-main-img").css('transform','translate(0,0)')
		$(".two-main-img").css('opacity','1');	
		setTimeout(function(){
			$(".two-main-img2").attr('src','img/02-computer2.png')
		},800);
	}
	if($(window).scrollTop()>900){
		$(".three-main-img").css('transform','translate(-290.5px,0)')
		$(".three-main-img").css('opacity','1');	
	}
	
	
	
	
	
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".one-main-img").css('transform','translate(0,0)')
			$(".one-main-img").css('opacity','1');
		}
		if($(window).scrollTop()>300){
			$(".two-main-img").css('transform','translate(0,0)')
			$(".two-main-img").css('opacity','1');	
			setTimeout(function(){
				$(".two-main-img2").attr('src','img/02-computer2.png')
			},800);
		}
		if($(window).scrollTop()>900){
			$(".three-main-img").css('transform','translate(-290.5px,0)')
			$(".three-main-img").css('opacity','1');	
		}	
	})


});