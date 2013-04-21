---
layout: post
title: "Sublime Text 2 使用笔记"
description: "<p>Sublime Text 2 是一个轻量、简洁、高效、跨平台的编辑器，方便的配色以及兼容 vim 快捷键等各种优点博得了很多前端开发人员的喜爱。Sublime Text 2 是共享软件，免费版和收费版基本无区别，只是偶尔会弹框让你去购买，这个基本不影响使用。</p><p>网友<a href='http://gchen.cn/2011/12/ten-amazing-features-of-sublime-text-2/' target='_blank'>Mike</a> 总结的 Sublime 十大优势</p><ul><li>Command Palette (cmd+shift+p)</li><li>Go to Anything (cmd+p)</li><li>Package Control</li><li>Modern UI</li><li>Distraction Free Mode (cmd+ctrl+shift＋f)</li><li>VI Mode</li><li>Mini Map</li><li>Multi-panel Editing (cmd+alt+1-4)</li><li>Auto Save</li><li>Multiple Selection</li><li>All Others Normal Editors Have</li></ul>"
category: program
tags: [sublime, js]
---
{% include JB/setup %}

Sublime Text is a sophisticated text editor for code, markup and prose.

You'll love the slick user interface, extraordinary features and amazing performance.

From [http://www.sublimetext.com/](http://www.sublimetext.com/)

网友 [Mike](http://gchen.cn/2011/12/ten-amazing-features-of-sublime-text-2/) 总结的 Sublime 十大优势

* Command Palette (cmd+shift+p)
* Go to Anything (cmd+p)
* Package Control
* Modern UI
* Distraction Free Mode (cmd+ctrl+shift＋f)
* VI Mode
* Mini Map
* Multi-panel Editing (cmd+alt+1-4)
* Auto Save
* Multiple Selection
* All Others Normal Editors Have

今天正式把 TextMate 从 Dock 中移除，集中精力学习使用 Sublime。

## 0. Online Tutorials

* [Sublime Text 2 入门及技巧](http://lucifr.com/2011/08/31/sublime-text-2-tricks-and-tips/)

* [Sublime Text 2 不完全使用手册](http://liuxiaofan.com/?p=1081)

* [Perfect Workflow in Sublime Text](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/)

* [Emmet Documentation](http://docs.emmet.io/)

* [Emmet Cheat Sheet](http://docs.emmet.io/cheat-sheet/)

持续学习中。

## 1. Package Control


<http://wbond.net/sublime_packages/package_control>

### 手工安装

1、Click the Preferences > Browse Packages… menu entry

2、Browse up a folder and then into the Installed Packages folder
Download [Package Control.sublime-package](http://sublime.wbond.net/Package%20Control.sublime-package) and copy it into the Installed Packages directory

or install through the Sublime Text 2 console. This is accessed via the **ctrl+`** shortcut. 

Once open, paste the following command into the console.

```python
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Please restart Sublime Text to finish installation')
```

3、Restart Sublime Text


`Ctrl + Shift + P` 调用命令面板，我们就会找到一些以“Package Control:”开头的命令，我们常用到的就是几个

* Install Package (安装扩展)

* List Packages (列出全部扩展)

* Remove Package (移除扩展)

* Upgrade Package (升级扩展)

### 推荐插件


* [ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8) GBK支持


* [Emmet](https://github.com/emmetio/emmet) [DOC](https://github.com/emmetio/emmet-docs) ZenCoding


* [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) 侧边栏


* [Alignment](http://wbond.net/sublime_packages/alignment)  `control + command + A` 对齐

* [PlainTasks](https://github.com/aziz/PlainTasks) A Simple TODOList

* [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) [How to Use](https://tutsplus.com/lesson/livereload/)


还有各种格式化 HTML JS 的插件，没有太多的高下之后，找自己喜欢的。

更多插件，见这两篇文章：

[http://net.tutsplus.com/tutorials/tools-and-tips/essential-sublime-text-2-plugins-and-extensions/](http://net.tutsplus.com/tutorials/tools-and-tips/essential-sublime-text-2-plugins-and-extensions/)

[http://www.qianduan.net/essential-to-sublime-the-text-2-plugins.html](http://www.qianduan.net/essential-to-sublime-the-text-2-plugins.html)

## 2. Program Config

### Java

默认的 Build Tools 需要增强：

{% highlight javascript%}
{
	"cmd": ["javac", "$file"],
	"file_regex": "^(...*?):([0-9]*):?([0-9]*)",
	"selector": "source.java",
	"encoding":"GBK",
	
	"variants":
        [
        {
            "name": "Run",
            "cmd" :  ["java", "$file_base_name"],
            "encoding":"GBK"
        }
	]
}
{% endhighlight %}

## 3. Hot Keys

### 键名

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td > ⇧ </td>
<td > = </td>
<td > shift </td>
</tr>
<tr>
<td > ⌃ </td>
<td > = </td>
<td > control </td>
</tr>
<tr>
<td > ⌥ </td>
<td > = </td>
<td > option / alt </td>
</tr>
<tr>
<td > ⌘ </td>
<td > = </td>
<td > command </td>
</tr>
<tr>
<td > ⌫ </td>
<td >= </td>
<td >delete</td>
</tr>
<tr>
<td >↩</td>
<td > = </td>
<td >return</td>
</tr>
</tbody></table>

### 打开/前往

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘T	 </td>
<td >前往文件</td>
</tr>
<tr>
<td >⌘⌃P	 </td>
<td >前往项目</td>
</tr>
<tr>
<td >⌘R	 </td>
<td >前往 method</td>
</tr>
<tr>
<td >⌘⇧P	</td>
<td > 命令提示</td>
</tr>
<tr>
<td >⌃G	 </td>
<td >前往行</td>
</tr>
<tr>
<td >⌘KB	 </td>
<td >开关侧栏</td>
</tr>
<tr>
<td >⌃ `	 </td>
<td >Python 控制台</td>
</tr>
<tr>
<td >⌘⇧N	 </td>
<td >新建窗口</td>
</tr>
</tbody></table>

### 编辑

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘L	 </td>
<td >选择行 (重复按下将下一行加入选择)</td>
</tr>
<tr>
<td >⌘D	 </td>
<td >选择词 (重复按下时多重选择相同的词进行多重编辑)</td>
</tr>
<tr>
<td >⌃⇧M	 </td>
<td >选择括号内的内容</td>
</tr>
<tr>
<td >⌘⇧↩	 </td>
<td >在当前行前插入新行</td>
</tr>
<tr>
<td >⌘↩	 </td>
<td >在当前行后插入新行</td>
</tr>
<tr>
<td >⌃⇧K	 </td>
<td >删除行</td>
</tr>
<tr>
<td >⌘KK	 </td>
<td >从光标处删除至行尾</td>
</tr>
<tr>
<td >⌘K⌫	 </td>
<td >从光标处删除至行首</td>
</tr>
<tr>
<td >⌘⇧D	 </td>
<td >复制(多)行</td>
</tr>
<tr>
<td >⌘J	 </td>
<td >合并(多)行</td>
</tr>
<tr>
<td >⌘KU	 </td>
<td >改为大写</td>
</tr>
<tr>
<td >⌘KL	 </td>
<td >改为小写</td>
</tr>
<tr>
<td >⌘ /	 </td>
<td >注释</td>
</tr>
<tr>
<td >⌘⌥ / </td>
<td >块注释</td>
</tr>
<tr>
<td >⌘Y	 </td>
<td >恢复或重复</td>
</tr>
<tr>
<td >⌘⇧V	 </td>
<td >粘贴并自动缩进</td>
</tr>
<tr>
<td >⌃ Space	 </td>
<td >自动完成(重复按下选择下一个提示)</td>
</tr>
<tr>
<td >⌃M	 </td>
<td >跳转至对应的括号</td>
</tr>
<tr>
<td >⌘U	 </td>
<td >软撤销（可撤销光标移动）</td>
</tr>
<tr>
<td >⌘⇧U	 </td>
<td >软重做（可重做光标移动）</td>
</tr>
<tr>
<td >⌘⇧A	 </td>
<td >选择标签内的内容(XML/HTML)</td>
</tr>
<tr>
<td >⌘⌥ .	 </td>
<td >闭合当前标签(XML/HTML)</td>
</tr>
</tbody></table>

### 查找/替换

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘F	 </td>
<td >查找</td>
</tr>
<tr>
<td >⌘⌥F	 </td>
<td >替换</td>
</tr>
<tr>
<td >⌘⌥G	 </td>
<td >查找下一个符合当前所选的内容</td>
</tr>
<tr>
<td >⌘⌃G	 </td>
<td >查找所有符合当前所选的内容进行多重编辑</td>
</tr>
<tr>
<td >⌘⇧F	 </td>
<td >在所有打开的文件中进行查找</td>
</tr>
</tbody></table>

### 拆分窗口/标签页

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘⌥1	 </td>
<td >单列</td>
</tr>
<tr>
<td >⌘⌥2	 </td>
<td >双列</td>
</tr>
<tr>
<td >⌘⌥5	 </td>
<td >网格 (4组)</td>
</tr>
<tr>
<td >⌃[1,2,3,4]	 </td>
<td >焦点移动至相应组</td>
</tr>
<tr>
<td >⌃⇧[1,2,3,4]	 </td>
<td >将当前文件移动至相应组</td>
</tr>
<tr>
<td >⌘[1,2,3…]	 </td>
<td >选择相应标签页</td>
</tr>
</tbody></table>

### 书签

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘F2	 </td>
<td >添加/去除书签</td>
</tr>
<tr>
<td >F2	 </td>
<td >下一个书签</td>
</tr>
<tr>
<td >⇧F2	 </td>
<td >前一个书签</td>
</tr>
<tr>
<td >⌘⇧F2	 </td>
<td >清除书签</td>
</tr>
</tbody></table>

### 标记

<table class="table table-bordered table-hover table-striped"><tbody>
<tr>
<td >⌘K Space	 </td>
<td >设置标记</td>
</tr>
<tr>
<td >⌘KW	 </td>
<td >从光标位置删除至标记</td>
</tr>
<tr>
<td >⌘KA	 </td>
<td >从光标位置选择至标记</td>
</tr>
<tr>
<td >⌘KG	 </td>
<td >清除标记</td>
</tr>
</tbody></table>


## 4. Custom UI

### Icons

[https://github.com/dmatarazzo/Sublime-Text-2-Icon](https://github.com/dmatarazzo/Sublime-Text-2-Icon)

[https://github.com/andytlr/Sublime-Text-Replacement-Icon](https://github.com/andytlr/Sublime-Text-Replacement-Icon)

Installation (Mac OS X)

Open the following folder:

`open /Applications/Sublime\ Text\ 2.app/Contents/Resources/`


Find the file Sublime Text 2.icns and replace with the one from this repository. The name needs to remain exactly the same.

### Theme

目前正在使用：

[soda-theme](https://github.com/buymeasoda/soda-theme)

{% highlight javascript %}
{
  "color_scheme": "Packages/Theme - Soda/Color Schemes/Monokai Soda.tmTheme",
  "font_size": 14,
  "ignored_packages":
  [
    "Vintage"
  ],
  "theme": "Soda Dark.sublime-theme"
}

//or

{
    "theme": "Soda Light.sublime-theme",
    "soda_classic_tabs": true
}

{% endhighlight %}

Colour Schemes

* Download colour-schemes.zip
* Unzip and place the extracted tmtheme files in the Sublime Text 2 Packages/User folder
* Enable the colour scheme via Preferences -> Color Scheme -> User

[aqua-theme](https://github.com/cafarm/aqua-theme) ✓

{% highlight javascript %}
{
  "color_scheme": "Packages/Theme - Aqua/Color Schemes/Espresso Aqua.tmTheme",
  "font_size": 14,
  "ignored_packages":
  [
    "Vintage"
  ],
  "theme": "AppKit.sublime-theme"
}
{% endhighlight %}


[phoenix-theme](https://github.com/netatoo/phoenix-theme)

{% highlight javascript %}
{
  "color_scheme": "Packages/Theme - Aqua/Color Schemes/Monokai Aqua.tmTheme",
  "font_size": 14,
  "ignored_packages":
  [
    "Vintage"
  ],
  "phoenix_color_expanded_folder": true,
  "phoenix_color_green": true,
  "phoenix_dirty_bottom_bar": true,
  "phoenix_dirty_bottom_bar_red": true,
  "phoenix_eighties": true,
  "phoenix_highlight_current_tab": true,
  "phoenix_sidebar_tree_large": true,
  "phoenix_solid_current_tab": true,
  "theme": "Phoenix Dark.sublime-theme"
}
{% endhighlight %}

全文完。
