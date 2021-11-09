[TOC]

## 网页主体标签
|标签|功能
|---|---
|`<html></html>`|此元素告知浏览器其自身是一个HTML文档
|`<head></head>`|用于定义文档的头部，他是所有头部元素的容器
|`<body></body>`|定义文档的主体，包含文档的所有内容
|`<title></title>`|定义文档的标题
|`<meta/>`|提供有关页面的元信息(meta-information),比如针对搜索引擎和更新频度的描述和关键词
|`<link/>`|定义文档与外部资源的关系，最常见的用途是链接样式表
|`<script></script>`|用于定义客户端脚本，元素既可以包含脚本语句，也可以通过src属性指向外部脚本文件
|`<style></style>`|用于为HTML文档定义样式信息

## 文本文字标签
|标签|功能
|---|---
|`<p></p>`|段落标签
|`<pre></pre>`|定义预格式化文本
|`<b></b>`|文本加粗
|`<i></i>`|文本倾斜
|h1~h6|标题标签
|`<a></a>`|超链接
|`<sapn></sapn>`|普通文本用来选中文字
|`<br/>`|文本强制换行
|`<hr/>`|水平分割线
|`<time></time>`|标签定义公历的时间(24小时制)或日期，时间和时区偏移可选

## 区域标签
|标签|功能
|---|---
|`<div></div>`|划分一个区域
|`<ul></ul>`|定义无序列表
|`<ol></ol>`|定义有序列表
|`<li></li>`|定义列表项目
|`<header></header>`|页面主体上的头部
|`<nav></nav>`|页面的导航部分
|`<main></main>`|网页的主体内容
|`<article></article>`|一篇文章的主体内容
|`<footer></footer>`|页面的底部
|`<aside></aside>`|用以表示注记、贴士、侧栏、摘要、插入的引用作为补充主体的内容
|`<code></code>`|表示一段代码块
|`<figure><figcaption></figcaption></figure>`|标签规定独立的流内容
|`<section></section>`|用于区域章节的表述

## 表单标签
|标签|功能
|---|---
|`<form></form>`|包含表单元素的区域
|`<input type="text">`|文本框
|`<input type="password">`|密码框
|`<input type="radio">`|单选框
|`<input type="checkbox">`|复选框
|`<input type="submit">`|提交按钮
|`<input type="search">`|搜索框
|`<input type="range">`|范围选择
|`<input type="color">`|颜色选择
|`<input type="date">`|日期选择
|`<input type="email">`|输入邮箱
|`<input type="hidden">`|隐藏文本框
|`<input type="file">`|文件域
|`<input type="button">`|普通按钮
|`<input type="reset">`|重置按钮
|`<input type="url">`|必须输入url地址的文本框
|`<input type="number">`|必须输入数值的文本框
|`<select><option value="值">描述</option></select>`|下拉列表
|`<textarea name=""></textarea>`|文本域
|`<button></button>`|按钮标签


## 表格标签
|标签|功能
|---|---
|`<table></table>`|定义表格
|`<tr></tr>`|定义表格中的行
|`<td></td>`|定义表格中的列
|`<th></th>`|表格中的表头内容
|`<caption></caption>`|表格的标题
|`<thead></thead>`|表格的表头
|`<tbody></tbody>`|定义表格主体
|`<tfoot></tfoot>`|定义表格页脚

> 不管thead、tbody、tfoot的代码先后顺序如何，html显示时，始终是先显示thead，再显示tbody，最后显示tfoot。

## 图片、音频、视频、画布、iframe
|标签|功能
|---|---
|`<img/>`|引入图片
|`<video></video>`|定义视频
|`<audio></audio>`|标签定义声音
|`<canvas></canvas>`|绘制图形
|`<iframe></iframe>`|创建区域


## H5其他
|标签|功能
|---|---
|`<embed></embed>`|嵌入各种媒体，外部应用或互动程序
|`<mark></mark>`|高亮显示文字,背景默认黄色，字体黑色
|`<progress></progress>`|显示javascript中耗费时间的函数进程,有value，max等属性,与js一起使用，显示任务进度
|`<meter></meter>`|表示度量衡，仅用于已知最大值和最小值的度量。必须定义度量的范围，既可以在元素中，也可在min/max属性中定义，用于磁盘使用情况，查询结果的相关性等，不能用作进度条
|`<ruby></ruby>`|ruby注释(中文注音或字符)
|`<rt></rt>`|表示字符的解释或发音
|`<rp></rp>`|在ruby注释中使用，以定义不支持ruby元素的浏览器所显示的内容
|`<wbr></wbr>`|软换行，当父级或浏览器足够宽时，不进行换行，当宽度不够时，主动在此处换行。wbr对字符型的语言用处比较大，但是对于中文，貌似没有多大用处。
|`<command></command>`|命令按钮
|`<details></details>`|表示用户要求得到并且可以得到的细节信息。与summary元素配合使用。summary元素提供标题或图例，标题是可见的用户点击标题时，会显示细节信息。
|`<datalist></datalist>`|表示可选数据的列表，与input元素配合使用，可以制作输入值的下拉列表
|`<datagrid></datagrid>`|表示可选数据的列表，它以树形列表显示
|`<keygen></keygen>`|生成密钥
|`<output></output>`|元素表示不同类型的输出，比如脚本的输出
|`<source></source>`|定义媒介资源
|`<menu></menu>`|表示菜单列表，
|`<dialog></dialog>`|表示对话框

