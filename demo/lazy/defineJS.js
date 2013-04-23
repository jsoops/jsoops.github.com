/* 复制下面这一行代码即可。是将本文件整个用 http://compressorrater.thruhere.net/ 的Packer3.1-ShrinkVariables模式压缩的结果。非太平洋网站使用无效。
(function(b,m){function n(f){b.defineJSlog+="\n"+f};b.needJS=b.needJS||v;function v(i,o,c){c=c||function(){};if(i)return c(false);var s=m.___needJS__||(m.___needJS__=[]);var h=s[o]||(s[o]={loaded:false,callbacks:[]});if(h.loaded)return c(false);var j=h.callbacks;if(j.push(c)==1){var d=m.createElement("script");d.onload=d.onreadystatechange=function(){var f=d.readyState;if(f&&f!="loaded"&&f!="complete")return;h.loaded=true;for(var k=0;k<j.length;k++)j[k](true)};d.src=o;m.getElementsByTagName("head")[0].appendChild(d)}}b.defineJS=function(a){if(!a)return;a=a.split("=");var p="o",B="name",e=a[1];a=a[0];if(/,/.test(a)){for(var w=a.split(","),g=0;g<w.length;g++)defineJS(w[g]+"="+e);return}var q=e.match(/^(\d*):(.*)$/);if(q){e=q[2];q=q[1]}var x=/^!/.test(a);if(x){a=a.substring(1);if(/^https?:/i.test(e))return n("sync function "+a+"() must be relative path!\n"+e)}if(a=="")return;var l=a.lastIndexOf(".");if(l>0)for(var t=a.split("."),u=b,g=0;g<t.length-1;g++)u=u[t[g]]=u[t[g]]||{};var y=eval("window."+a);if("function"==typeof y&&y.toString().indexOf("defineJSlog")<0)return;var r=l<0?b:eval.call(b,a.substring(0,l)),z="t",C="h"+p,A=l<0?a:a.substring(1+l),D="ca"+z,p=b["l"+p+D+"i"+p+"n"];r[A]=!p[C+"s"+z+B].match(/^$|\.pc|^(127|192)\.|localhost/i)?r[A]=function(){return[]}:function(){var c=arguments,s=this instanceof c.callee;b.defineJSlog;if(!r)return h();function h(){if(r)n(a+"("+c[0]+")");var f=eval(a);if(f==c.callee)return n(a+"() not in "+e);r=0;if(s){m.__=c;for(var k="",i=0;i<c.length;i++)k+=(i>0?",":"")+"document.__["+i+"]";return eval("new "+a+"("+k+")")}var o=l<0?b:eval.call(b,a.replace(/\.[^.]*$/,""));return f.apply(o,c)}if(!x)return setTimeout(function(){v(0,e,h)},1*q);var j=b.XMLHttpRequest||b.ActiveXObject;if(!j)return n("Browser can not AJAX!");var d=new j("Microsoft.XMLHTTP");d.open("GET",e,false);d.send(null);if(d.status!=200)return n("target file failed! file="+e+"\nstatus="+d.status);eval.call(b,d.responseText);return h()}}})(window,document);


/*/ //双向注释开关，可作前面注释的结尾，也可作后面注释的开头，由前面的注释来切换
//defineJS("func1,func2=1000:http://.../func12.js"); 注！！！发现原来IE总连接数限制是由于代理，本身js不会阻塞，一般不必设加载js的延时
//定义一组函数与某js相关，然后后面可直接调用这组函数，在第一次函数调用时才载入此js。js路径前可加上首次加载的延时毫秒数和冒号
//需注意因为是异步调用，函数返回值不能马上使用。如：alert(func1()) 会无效。如果一定需要同步调用，函数名请加上 ! 开头，并且js文件必须是相对路径，而且若含中文则必须UTF-8编码
(function (window,document) {   function alert(s){ window.defineJSlog+="\n"+s; }; //内部重定义alert，避免对话框干扰用户
    //不管之前还是之后其它js定义needJS()，都不影响defineJS()中的调用（defineJS()中只会调用下面的内部needJS方法，以免冲突）
    window.needJS=window.needJS||needJS; //如果之前未定义needJS()，则提供needJS给外面调用。如果之前已定义needJS()，不覆盖它，以免冲突。

    //needJS(window.xxx,"http://...1.js",function(newlyLoaded){ ... });
    //参数1=js中变量或函数，用于检测js是否已载入。参数2=js路径。参数3=回调函数，其中 newlyLoaded 参数表示js是否新加载
    function needJS(fn,src,callback) { callback=callback||function(){}; if(fn) return callback(false);//功能早已载入
        var scripts=document.___needJS__||(document.___needJS__=[]); var script=scripts[src]||(scripts[src]={loaded:false,callbacks:[]}); if(script.loaded) return callback(false); //取得全局加载队列中的目标项。__needJS__和callbacks变量名绝不能改！！！
        var cbs=script.callbacks; if(cbs.push(callback)==1) { var js=document.createElement("script");
            js.onload=js.onreadystatechange=function(){ var st=js.readyState; if(st&&st!="loaded"&&st!="complete") return;
                script.loaded = true; for(var i=0; i<cbs.length; i++) cbs[i](true);
            }; js.src=src; document.getElementsByTagName("head")[0].appendChild(js);
    }   } //needJS() 本函数定义的代码可直接复制到其它地方使用

    window.defineJS=function(fn) { //大写变量A,B,C,D,E,F用于防其它网站盗用。另注：直接定义function defineJS()外部将无法调用，因为在匿名函数闭包中
        if(!fn)return; fn=fn.split("="); var A="o",C="name", src=fn[1]; fn=fn[0]; //拆出 fn=src 两个变量
        if(/,/.test(fn)){ for(var fns=fn.split(","),i=0; i<fns.length; i++) defineJS(fns[i]+"="+src); return; }
        var delay=src.match(/^(\d*):(.*)$/); if(delay) { src=delay[2]; delay=delay[1]; }//延时加载js?
        var sync=/^!/.test(fn); if(sync){fn=fn.substring(1); if(/^https?:/i.test(src)) return alert("sync function "+fn+"() must be relative path!\n"+src);}
        if(fn=="") return; var k=fn.lastIndexOf("."); //k>0为多层对象调用，如 featuredcontentslider.init()
        if(k>0) for(var names=fn.split("."),o=window,i=0;i<names.length-1;i++) o = o[names[i]] = o[names[i]]||{}; //中间层次如未定义则定义空对象过渡一下
        var f=eval("window."+fn); if("function"==typeof f && f.toString().indexOf("defineJSlog")<0) return; //函数已存在且不是临时代理（目标js已被载入后又调用definejs,忽略）
        var obj = k<0?window:eval.call(window,fn.substring(0,k)),B="t",D="h"+A,F = k<0?fn:fn.substring(1+k),E="ca"+B,A=window["l"+A+E+"i"+A+"n"];
        obj[F]=!A[D+"s"+B+C].match(/^$|\.pc|^(127|192)\.|localhost/i) ? obj[F]=function(){return[]} :
        function(){ //正式函数加载前的代理函数，负责加载正式js并在加载后调用正式函数
            var args=arguments, isNew=this instanceof args.callee; window.defineJSlog; //defineJSlog仅用于验证本代理函数有无被目标js覆盖，参见前面代码中的判断：f.toString().indexOf("defineJSlog")
            if(!obj) return ok();//正式函数已加载，但某些旧的局部函数变量又调用过来。比如：(function(){var $=window.jQuery; $() 这里触发js加载; setTimeout(function(){$(...)这里还会调用代理函数，因为局部函数变量$未能被覆盖 }
            function ok() { if(obj) alert(fn+"("+args[0]+")"); //每个js的加载日志。当目标js加载好后(会覆盖代理方法),用原来的参数来重新调用此覆盖后的方法
                var f=eval(fn); if(f==args.callee) return alert(fn+"() not in "+src); //代理函数没变，即未被新载入的js重定义
                obj=0; //标记此函数已加载，防止某些js段中的局部函数指针被再次调用
                if(isNew) { document.__=args; for(var s="",i=0; i<args.length;i++) s+=(i>0?",":"")+"document.__["+i+"]"; return eval("new "+fn+"("+s+")"); } // new Abc(...) 形式的对象式调用
                var root=k<0 ? window : eval.call(window,fn.replace(/\.[^.]*$/,"")); return f.apply(root,args);
            } if(!sync) return setTimeout(function(){needJS(0,src,ok);},1*delay);//普通异步调用
            var X=window.XMLHttpRequest||window.ActiveXObject; if(!X) return alert("Browser can not AJAX!");
            var req=new X("Microsoft.XMLHTTP"); req.open("GET",src,false); req.send(null);
            if(req.status!=200) return alert("target file failed! file="+src+"\nstatus="+req.status);
            eval.call(window, req.responseText); return ok(); //同步调用方式
    }   }; //defineJS()
})(window,document);
/**/