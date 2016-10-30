# JS-javascript

js获取css属性值
```js
function getStyle(element, attr) {

	if(element.currentStyle) {

		return element.currentStyle[attr];

	} else {

		return getComputedStyle(element, false)[attr];

	}

}
```
