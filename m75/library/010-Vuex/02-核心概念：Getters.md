[TOC]
## State
>getter接收state作为其第一个参数,getters作为第二个参数  

### 通过属性访问
```js
//访问
store.getters.xxx
```
### 通过方法访问
```js
getters:{
	getTodoById:(state)=>(id)=>{
		return state.todos.find(todo=> todo.id===id)//返回值是一个函数
	}
}
//访问
store.getters.getTodoById(2)
```

### mapGetters辅助函数
```js
import { mapGetters } from 'vuex'
export default {
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      anotherAlias:'anotherGetter',
    ])
  }
}

```
