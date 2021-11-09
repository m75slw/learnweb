[TOC]
## Mutations 
>更改Vuex的Store中的状态唯一方法是提交mutation，每一个mutation都有字符串的`事件类型(type)`和一个`回调函数(handler)`。回调函数进行状态更改，第一个参数为state
```js
mutations:{
	increment(state){
		state.count++
	}
}

//使用
store.commit('increment')
```  
### (提交载荷)Payload
```js
mutations:{
	increment(state,n){
		state.count+=n;
	}
}
//使用
store.commit('increment',10);
srore.commit({type:'increment',count:10});//包含type的对象
```



