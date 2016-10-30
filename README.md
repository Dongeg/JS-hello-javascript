# JS-javascript

js获取css属性值
```js
function getStyle(element, attr) {

	if(element.currentStyle) {   //IE

		return element.currentStyle[attr];

	} else {

		return getComputedStyle(element, false)[attr];    //DOM

	}

}
//注：如果要获取当前对象的颜色信息，IE返回的是16进制的'#ffffff'，而其他返回的是rgb(255,255,255) 
```
