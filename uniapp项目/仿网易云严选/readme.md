## 项目介绍

我们这个项目是仿照网易严选的移动端搭建的一个uni-app的商城项目

网易严选地址：[网易严选 - 以严谨的态度，为中国消费者甄选天下优品 (163.com)](http://you.163.com/)

这个地址点击进去是它们的pc端，只需要在检查里面更改为移动端，就可以看到我们要达到的项目效果

![image-20210725224333964](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210725224333964.png)

上图就是我们最终要达到的项目效果。

---



关于数据:

使用它们的开放的接口，然后由自己搭建一个服务器，进行中间转发（或者自己直接把它们的数据拷贝过来直接用）

里面的登录功能，有微信和邮箱，但是因为它们的邮箱接口没有开放，所以我们只能用微信进行登录。

网易严选原来把所有的数据都在页面中用一个script标签，把所有要用的数据切好放在里面，用一个变量保存，所以我们没有办法直接请求它的接口



我们在它的网络请求中进行查看，可以看到他们请求的数据，有哪些



## 创建项目并进行基础设置

新建一个uni-app项目，并删除里面不需要的文件

删除文件:

- uni.scss

- /static/logo.png





修改文件manifest.json

```
"appid" : "_UNI_zhousujuan",//随便写
```



微信小程序配置

![image-20210725231123506](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210725231123506.png)

# 首页头部样式

打开page/index/index.vue

将不需要的css样式，删除，然后把页面的代码写成我这个样子，再运行到微信小程序，进行测试

```vue


<template>
	<view class="indexContainer">
		indexContainer
	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {


		},
		methods: {
	
		}
	}

</script>

<style>

</style>


```

测试结果:

![image-20210725234334900](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210725234334900.png)

===》

## 选择小程序标签进行编写

uni-app这里，支持小程序标签也支持（兼容）h5标签

**这里，我们写小程序的标签，原因：**

我们展示一个效果：

我们这里用一个`<i>`标签来进行解释，这个标签，平常我们都是用来实现一个字体图标

在uni-app里面写：

```
<div>
	<i>111</i>
	<i>222</i>
</div>
```

这里，我们在小程序中会变成：

```
<view class="_div">
	<view class="_i">111<view>
	<view class="_i">222<view>
</view>

```

实现的效果不一样，在h5中的话，这里应该是并排显示，但是在小程序中变成了两行显示

===》推荐小程序的标签，是因为uni-app都做了兼容，

比如说，swipper标签，很明显我们h5中没有这个标签，但是uni-app会帮我们写一套swipper出来，所以uni-app对小程序的兼容会更好一点

h5中的`<i>`标签小程序识别不出来，所以没办法，正常来说，应该转换为`<text>`



===>也就是说，如果我们写小程序的标签，写的什么样展现的就是怎么样，在小程序和h5中的效果，都是一样，但是如果我们写h5的标签，在小程序中可能会废掉

===》我们要保持一致的话，最好用的是小程序的标签



## 修改pages.json

设置当前页的名称和当前顶部的背景颜色和文字颜色设置

```json
{
	"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/index/index",
			"style": {
				"navigationBarTitleText": "首页"//当前页名称
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "white",
		"navigationBarTitleText": "wangyiyanxuan",
		"navigationBarBackgroundColor": "#BB2C08"//头部颜色
	}
}

```

效果：![image-20210726002407645](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210726002407645.png)

