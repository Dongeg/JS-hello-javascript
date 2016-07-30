//编写模块，模块内外无法交互，只能通过暴露接口（return出来的）
define(['jquery'],function(){

	return{
		isEmpty:function(){},
		checkLength:function(){},
		isEqual:function isEqual(str1,str2){
		        return str1==str2;
	     }
	}
});