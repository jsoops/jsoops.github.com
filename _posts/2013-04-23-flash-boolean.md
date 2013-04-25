---
layout: post
title: "ActionScript Boolean 定义"
description: "<p>现在 ActionScript 3.0 版本的广告素材越来越多，加流量监测的时候，一定要注意首次播放控制的写法，因为大多数广告还是基于时间轴的动画，默认会重复播放，如果按我们习惯的定义方法（比如 Java），Flash 重播的时候，会反复触发流量请求，最终导致过度曝光，后果严重。</p><p>我也不太确信，这算不算 Flash 的一个 Bug，反正陷阱应该算。</p><p>如果不是 Bug，难道 Flash 重播的时候，会重置变量？</p>"
category: flash
tags: [timer, urlloader, mouse]
---
{% include JB/setup %}

现在 ActionScript 3.0 版本的广告素材越来越多，加流量监测的时候，一定要注意首次播放控制的写法，因为大多数广告还是基于时间轴的动画，默认会重复播放，如果按我们习惯的定义方法（比如 Java），Flash 重播的时候，会反复触发流量请求，最终导致过度曝光，后果严重。

我也不太确信，这算不算 Flash 的一个 Bug，反正陷阱应该算。

如果不是 Bug，难道 Flash 重播的时候，会重置变量？

保持关注。

<blockquote class="warning">
会重复发起流量请求，导致过度曝光
</blockquote>

测试：[这里](/demo/impbug/test-1.html)

```actionscript
import flash.events.MouseEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.net.navigateToURL;
import flash.ui.Mouse;
import flash.ui.MouseCursor;

var tag:String = "http://v.admaster.com.cn/i/a12323,b200147754,c1350,i0,m201,h" + new Date().getTime();
var isControl:Boolean = true;

Mouse.cursor = MouseCursor.BUTTON;

try
{
	if (isControl)
	{
		new URLLoader().load(new URLRequest(tag));
		isControl = false;
	}
}
catch (error:Error)
{
	trace("unable to loader" + error);
}

stage.addEventListener(MouseEvent.CLICK, clickHandler);

function clickHandler(evt:MouseEvent):void
{
	var click_URL:String = "http://www.google.com/";
	navigateToURL(new URLRequest(click_URL));
}
```
<br/>

>下面这个写法是OK的

测试：[这里](/demo/impbug/test-2.html)


```actionscript
import flash.events.MouseEvent;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.net.navigateToURL;
import flash.ui.Mouse;
import flash.ui.MouseCursor;

var tag:String = "http://v.admaster.com.cn/i/a12323,b200147754,c1350,i0,m201,h" + new Date().getTime();
var isControl;

Mouse.cursor = MouseCursor.BUTTON;

try
{
	if (isControl == undefined)
	{
		new URLLoader().load(new URLRequest(tag));
		isControl = true;
	}
}
catch (error:Error)
{
	trace("unable to loader" + error);
}

stage.addEventListener(MouseEvent.CLICK, clickHandler);

function clickHandler(evt:MouseEvent):void
{
	var click_URL:String = "http://www.google.com/";
	navigateToURL(new URLRequest(click_URL));
}
```

<br/>

>在基于定时器的动画里，这个Bug不会触发

测试：[这里](/demo/impbug/test-3.html)

参考：

- <http://coursesweb.net/actionscript/animation-timer-class>

- <http://www.republicofcode.com/tutorials/flash/as3tweenclass/>


```actionscript
import flash.events.*;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.net.navigateToURL;
import flash.ui.Mouse;
import flash.ui.MouseCursor;
import fl.transitions.Tween;
import fl.transitions.easing.*;
import fl.transitions.TweenEvent;
import flash.external.ExternalInterface;

var tag:String = "http://v.admaster.com.cn/i/a12323,b200147754,c1350,i0,m201,h" + new Date().getTime();
var isControl:Boolean = true;

Mouse.cursor = MouseCursor.BUTTON;

function moveBox(evt:Event):void
{
	var myTween:Tween = new Tween(my_box,"x",Strong.easeOut,40,300,5,true);
}

var myTimer:Timer = new Timer(1500);
myTimer.addEventListener(TimerEvent.TIMER, moveBox);
myTimer.start();

try
{
	if (isControl)
	{
		new URLLoader  .load(new URLRequest(tag));
		if (ExternalInterface.available)
		{
			ExternalInterface.call("printImp", tag);
		}
		isControl = false;
	}
}
catch (error:Error)
{
	trace("unable to loader" + error);
}

stage.addEventListener(MouseEvent.CLICK, clickHandler);
//stage.addEventListener(Event.ENTER_FRAME, moveBox);

function clickHandler(evt:MouseEvent):void
{
	var click_URL:String = "http://www.google.com/";
	navigateToURL(new URLRequest(click_URL));
}
```

注：第三段代码加了 `ExternalInterface`，方便在页面直接看输出，不依赖控制台。