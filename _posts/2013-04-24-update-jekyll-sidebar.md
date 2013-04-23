---
layout: post
title: "优化 Jekyll 侧边栏"
description: "<p>周末在家将 Jekyll 改为两栏结构，当时处理了手机兼容，但后来发现，在低分辨率（屏幕宽度小于 1200 px）和 IE8 下，还有一些显示问题，故今天又抽时间优化了一下。</p><p>其中显隐侧边栏，从思路上做了调整，原来是默认都显示，发现手机 UA ，再隐藏，大多数情况下，都无看到侧边栏的闪烁。现在改为默认隐藏，条件合适，再显示出来。</p><p>到目前为止，IE 7 8 9 10, Firefox, Chrome, Safari, Opera，之下，都有不错的体验，IE 6 下比之前也要好不少。</p>"
category: jquery
tags: [css, jquery]
---
{% include JB/setup %}

周末在家将 Jekyll 改为两栏结构，当时处理了手机兼容，但后来发现，在低分辨率（屏幕宽度小于 1200 px）和 IE8 下，还有一些显示问题，故今天又抽时间优化了一下。

1. 只在高分辨率下才显示侧边栏，IE6 下始终不显示

	```html
	<style>
		.mt60{
	      margin-top: 60px;
	      display: none;
	    }
	</style>

	<script>
		if($(window).width() > 1200  && !ie6){
	        $(".mt60").show();
	      }

	    $(window).resize(function() {
	      if ($(window).width() > 1200 && !ie6) {
	        $(".mt60").show();
	      } else{
	        $(".mt60").hide();
	      }
	    }); 
	</script>
	```

2. 如果 IE 版本低于 8，提示用户使用现代浏览器

	```html
	<style>
	    .hint {
	      display: block;
	      position: absolute;
	      left: 0;
	      right: 0;
	      bottom: 50px;      
	      background-color: #000000;
	      /* this works in IE6, IE7, and IE8 */
	      filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
	      color: #EEE;
	      text-align: center;        
	      font-size: 32px;
	      padding: 20px;     
	      z-index: 999;
	    }
	 </style>

	 <!--[if lt IE 8]>
	  <div class="hint">
	    <p>For better experience please use <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b>.</p>
	</div>
	 <![endif]-->
	```

3. IE 7 8 调整左栏，IE6 调整主栏的定位

	```javascript
	if (ie7 || ie8) {
		$("#sidebar").css("margin-left", "-50px");
	};

	if (ie6) {
		$("#mainContent").css("margin-left", "20px");
	};
	```

4. 将 jQuery 版本降为 1.8.3

其中显隐侧边栏，从思路上做了调整，原来是默认都显示，发现手机 UA ，再隐藏，大多数情况下，都无看到侧边栏的闪烁。现在改为默认隐藏，条件合适，再显示出来。去掉手机 UA 检查，只要窗口不够大，就不显示侧边。

到目前为止，IE 7 8 9 10, Firefox, Chrome, Safari, Opera，之下，都有不错的体验，IE 6 下比之前也要好不少。


	