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
<h3>js中left和offsetleft的区别</h3>

```
offsetLeft 获取的是相对于父对象的左边距

left 获取或设置相对于 具有定位属性(position定义为relative)的父对象 的左边距

如果父div的position定义为relative,子div的position定义为absolute，那么子div的style.left的值是相对于父div的值，
这同offsetLeft是相同的，区别在于：
1. style.left 返回的是字符串，如28px，offsetLeft返回的是数值28，如果需要对取得的值进行计算，
还用offsetLeft比较方便。

2. style.left是读写的，offsetLeft是只读的，所以要改变div的位置，只能修改style.left。

3. style.left的值需要事先定义，否则取到的值为空。且要用上面那个方法取到

offsetLeft则仍然能够取到，无需事先定义div的位置。
```
