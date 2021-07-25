# uniApp

## 1.uniApp简介

  1)使用 Vue.js 开发所有前端应用的框架
  2)可发布到iOS、Android、H5、以及各种小程序、快应用等多个平台
  3)uni-app在手，做啥都不愁。即使不跨端

## 2.HbuilerX基本使用及设置

  1)创建项目->选择uni-app项目
  2)配置浏览器以及微信小程序开发工具地址
  3)小程序中开启服务器端口
  4)配置Chrome的安装地址

## 3.uniApp项目文件介绍

  1)manifest.json,用于配置当前项目的基础信息	对应小程序中的project.config.json
  2)pages.json,在框架->配置中查看全局配置		对应小程序中的app.json
	uniapp		小程序		作用
	pages		pages+页面配置	配置页面路径
	globalStyle	window		设置窗口样式
  3)main.js,该项目的入口文件	对应小程序中的app.js内部的App(),挂载App
  4)App.vue,该项目的根实例	对应小程序中的App()所需传入的配置对象
  5)unpackage文件夹,只有运行小程序才会出现,内部存着打包成原生小程序的文件
  6)pages,用于存储该项目的所有页面

