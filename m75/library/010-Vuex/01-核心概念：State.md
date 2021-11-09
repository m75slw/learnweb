[TOC]
## store创建
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vue.Store({
	state:{//唯一数据来源
	
	},
	getters:{//couputed全局计算属性
	
	},
	mutations:{//唯一修改state的地方，同步操作
	
	},
	actions:{//异步操作
	
	},
	modules:{//子模块/子仓库
	
	}
})
export default store
```
## State
### 在Vue组件中获得Vuex状态
- this.$store.state.xxx
- 计算属性
```js
computed:{
	count(){
		return store.state.count
	}
}
```

- mapState辅助函数
```js
computed:mapState({
	//1.箭头函数
	count:state=>state.count,
	//2.传字符串
	contAlias:'count',
	//3.
	countPlusLocalState(state){
		return state.count + this.localCount
	}
})
```
### 对象展开运算符
```js
computed:{
    ...mapState({

    })
}
```

