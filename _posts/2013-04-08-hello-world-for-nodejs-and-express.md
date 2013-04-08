---
layout: post
title: "Hello World for Node.js and Express"
description: "<p>从 Hexo 静态博客引擎，到网易的开源游戏框架 pomelo，再加上放假期间对 C Node Go Python Ruby 运算速度测试，重新提起了我对 Node.js 的兴趣。</p><p>人生太短，如果能多给我一些时间，享受编程的乐趣，多好。</p>"
category: node
tags: [node, javascript, brew]
---
{% include JB/setup %}

从 [Hexo](https://github.com/tommy351/hexo) 静态博客引擎，到网易的开源游戏框架 [pomelo](https://github.com/NetEase/pomelo)，再加上放假期间对 C Node Go Python Ruby 运算速度测试，重新提起了我对 Node.js 的兴趣。

人生太短，如果能多给我一些时间，享受编程的乐趣，多好。

### 1. Insatll Node.js

本机一的 Node.js，我是通过 brew 安装的：

```
brew install node
```

省心，升级也简单：

```
brew update
brew doctor
brew upgrade node
```

If it's not linked:

```
brew link node
//or
brew link --override
```

After installing, add the following path to your NODE_PATH environment variable to have npm libraries picked up:

```
/usr/local/lib/node_modules
```

注：我安装之初，未加以上环境变量，终端可用 node 命令，但是 Sublbime Text 需要另行配置：

```
open "/Users/Christen/Library/Application Support/Sublime Text 2/"
```

cmd: /usr/local/bin/node

我的 Lua 也是同样的方法安装，想来若出问题，也叫改命令：

cmd: /usr/local/bin/lua

### 2. Install Express

官方指南：<http://expressjs.com/guide.html>

``` 
$ sudo npm install -g express
```

添加 -g 参数，可在 Shell 中使用 express 命令。

官方文档写得很清楚了，这里不再赘述测试过程。

[ItEye witcheryne](http://witcheryne.iteye.com/blog/1172069) 对 Node / Express 颇有研究，推荐学习。

未来的网络世界，将是浏览器的天下，学好 Javasript，走遍天下都不怕。

### 3. Test App

命令行帮助做得非常好：

```
localhost:node Christen$ express --sessions --css stylus --ejs jspal

   create : jspal
   create : jspal/package.json
   create : jspal/app.js
   create : jspal/public
   create : jspal/public/javascripts
   create : jspal/public/images
   create : jspal/public/stylesheets
   create : jspal/public/stylesheets/style.styl
   create : jspal/routes
   create : jspal/routes/index.js
   create : jspal/routes/user.js
   create : jspal/views
   create : jspal/views/index.ejs

   install dependencies:
     $ cd jspal && npm install

   run the app:
     $ node app

localhost:node Christen$ 
```

`npm install` 命令要求联网，系统会自动下载相关的 node_modules。

暂完。


