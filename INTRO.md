#前端集成开发框架

## 框架特色
fis3 base有如下功能特色。
- commonjs
- ECMASCript2015
- [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [fis components](https://github.com/fis-components)
- [data.js](https://github.com/yanhaijing/data.js)
- [template.js](https://github.com/yanhaijing/template.js)
- html，js，css组件
- 本地模拟数据
- 开发，测试发布，发布多种模式



# 文档
这里说明文档。依赖fis3，如果你不了解fis3，请移步[fis3官网](http://fis.baidu.com/)。

## 依赖
fis依赖node，了解node请看这里[nodejs.org](http://nodejs.org/)。

第一步，用下面的命令安装fis3

	npm install -g fis3

第二步，安装fis插件

    npm install -g fis3-hook-commonjs

    npm install -g node-sass
    npm install -g fis-parser-node-sass

    npm install -g fis-parser-template
    npm install -g fis-parser-babel-5.x

    npm install -g fis-postprocessor-autoprefixer
    npm install -g fis3-postpackager-loader

更多插件可以看[这里](http://fis.baidu.com/fis3/docs/api/dev-plugin.html)。

第三步，接下来需要安装fis组件

    fis3 install

更多信息请看[fis用户文档](http://fis.baidu.com/fis3/docs/beginning/install.html)。


如何发布代码？
前端代码发布库：
http://gitlab.uns1066.com/shengfeng.zhu/ysb-fe-personal.git  
目前会定期更新分支：  ysb-personal-branch




## 如何运行
开启fis服务器

	fis3 server start

发布

	fis3 release
	fis3 release prd-debug # 本地查看发布产品库状态
	fis3 release prd # 发布产品库

更多命令请[查看这里](http://fis.baidu.com/fis3/docs/api/command.html)。

## 目录说明
项目的目录树如下：

    ┌─components
    ├─img
    ├─lib
    ├─modules
    │  ├─app
    │  ├─css
    │  ├─lib
    │  ├─ui
    │  └─util
		│  └─widget
    └─test

根目录下存放html文件。

- components fis 组件的目录
- img html中用到的图片
- lib 存放一些不打包的js库
- modules 项目的组件
	- app 项目用到的js
	- css 项目用到的css
	- lib 第三方js
	- ui UI 组件
	- util 工具组件
- test 模拟测试数据

## fis components
fis提供了大量组件，社区比较活跃的库一般都有组件存在，你可以在下面的链接查找对应组件。
https://github.com/fis-components

**注：**为了稳定，建议把components也加入版本控制库。

## 问题反馈
使用过程中的常见问题请见这里 [issue](https://github.com/taoqianbao/fis3-base/issues)。
