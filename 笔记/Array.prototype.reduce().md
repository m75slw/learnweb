**Array.prototype.reduce(callback[,initValue]) **

- callback(acc,curValue[,curIndex[,srcArray]]):执行数组中每个值的函数（如果没有提供初始值则第一个除外），包含四个参数：
  - acc：累计器(回调函数)回调的返回值；它是上一次调用时返回的累积值，或初始值。
  - curValue：数组正在处理的元素。
  - curIndex：正在处理的元素的索引，如果提供了初始值，则起始索引号为0，否则索引从1开始。
  - srcArray：调用reduce的数组。
- initValue:初始值
  - 作为第一次调用callback函数时的第一个参数值。如果没有提供初始值，则将使用数组中的第一个元素。

> 在没有初始值的空数组上调用reduce将报错