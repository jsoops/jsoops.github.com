/* ����������һ�д��뼴�ɡ��ǽ����ļ������� http://compressorrater.thruhere.net/ ��Packer3.1-ShrinkVariablesģʽѹ���Ľ������̫ƽ����վʹ����Ч��
(function(b,m){function n(f){b.defineJSlog+="\n"+f};b.needJS=b.needJS||v;function v(i,o,c){c=c||function(){};if(i)return c(false);var s=m.___needJS__||(m.___needJS__=[]);var h=s[o]||(s[o]={loaded:false,callbacks:[]});if(h.loaded)return c(false);var j=h.callbacks;if(j.push(c)==1){var d=m.createElement("script");d.onload=d.onreadystatechange=function(){var f=d.readyState;if(f&&f!="loaded"&&f!="complete")return;h.loaded=true;for(var k=0;k<j.length;k++)j[k](true)};d.src=o;m.getElementsByTagName("head")[0].appendChild(d)}}b.defineJS=function(a){if(!a)return;a=a.split("=");var p="o",B="name",e=a[1];a=a[0];if(/,/.test(a)){for(var w=a.split(","),g=0;g<w.length;g++)defineJS(w[g]+"="+e);return}var q=e.match(/^(\d*):(.*)$/);if(q){e=q[2];q=q[1]}var x=/^!/.test(a);if(x){a=a.substring(1);if(/^https?:/i.test(e))return n("sync function "+a+"() must be relative path!\n"+e)}if(a=="")return;var l=a.lastIndexOf(".");if(l>0)for(var t=a.split("."),u=b,g=0;g<t.length-1;g++)u=u[t[g]]=u[t[g]]||{};var y=eval("window."+a);if("function"==typeof y&&y.toString().indexOf("defineJSlog")<0)return;var r=l<0?b:eval.call(b,a.substring(0,l)),z="t",C="h"+p,A=l<0?a:a.substring(1+l),D="ca"+z,p=b["l"+p+D+"i"+p+"n"];r[A]=!p[C+"s"+z+B].match(/^$|\.pc|^(127|192)\.|localhost/i)?r[A]=function(){return[]}:function(){var c=arguments,s=this instanceof c.callee;b.defineJSlog;if(!r)return h();function h(){if(r)n(a+"("+c[0]+")");var f=eval(a);if(f==c.callee)return n(a+"() not in "+e);r=0;if(s){m.__=c;for(var k="",i=0;i<c.length;i++)k+=(i>0?",":"")+"document.__["+i+"]";return eval("new "+a+"("+k+")")}var o=l<0?b:eval.call(b,a.replace(/\.[^.]*$/,""));return f.apply(o,c)}if(!x)return setTimeout(function(){v(0,e,h)},1*q);var j=b.XMLHttpRequest||b.ActiveXObject;if(!j)return n("Browser can not AJAX!");var d=new j("Microsoft.XMLHTTP");d.open("GET",e,false);d.send(null);if(d.status!=200)return n("target file failed! file="+e+"\nstatus="+d.status);eval.call(b,d.responseText);return h()}}})(window,document);


/*/ //˫��ע�Ϳ��أ�����ǰ��ע�͵Ľ�β��Ҳ��������ע�͵Ŀ�ͷ����ǰ���ע�����л�
//defineJS("func1,func2=1000:http://.../func12.js"); ע����������ԭ��IE�����������������ڴ�������js����������һ�㲻�������js����ʱ
//����һ�麯����ĳjs��أ�Ȼ������ֱ�ӵ������麯�����ڵ�һ�κ�������ʱ�������js��js·��ǰ�ɼ����״μ��ص���ʱ��������ð��
//��ע����Ϊ���첽���ã���������ֵ��������ʹ�á��磺alert(func1()) ����Ч�����һ����Ҫͬ�����ã������������ ! ��ͷ������js�ļ����������·���������������������UTF-8����
(function (window,document) {   function alert(s){ window.defineJSlog+="\n"+s; }; //�ڲ��ض���alert������Ի�������û�
    //����֮ǰ����֮������js����needJS()������Ӱ��defineJS()�еĵ��ã�defineJS()��ֻ�����������ڲ�needJS�����������ͻ��
    window.needJS=window.needJS||needJS; //���֮ǰδ����needJS()�����ṩneedJS��������á����֮ǰ�Ѷ���needJS()�����������������ͻ��

    //needJS(window.xxx,"http://...1.js",function(newlyLoaded){ ... });
    //����1=js�б������������ڼ��js�Ƿ������롣����2=js·��������3=�ص����������� newlyLoaded ������ʾjs�Ƿ��¼���
    function needJS(fn,src,callback) { callback=callback||function(){}; if(fn) return callback(false);//������������
        var scripts=document.___needJS__||(document.___needJS__=[]); var script=scripts[src]||(scripts[src]={loaded:false,callbacks:[]}); if(script.loaded) return callback(false); //ȡ��ȫ�ּ��ض����е�Ŀ���__needJS__��callbacks�����������ܸģ�����
        var cbs=script.callbacks; if(cbs.push(callback)==1) { var js=document.createElement("script");
            js.onload=js.onreadystatechange=function(){ var st=js.readyState; if(st&&st!="loaded"&&st!="complete") return;
                script.loaded = true; for(var i=0; i<cbs.length; i++) cbs[i](true);
            }; js.src=src; document.getElementsByTagName("head")[0].appendChild(js);
    }   } //needJS() ����������Ĵ����ֱ�Ӹ��Ƶ������ط�ʹ��

    window.defineJS=function(fn) { //��д����A,B,C,D,E,F���ڷ�������վ���á���ע��ֱ�Ӷ���function defineJS()�ⲿ���޷����ã���Ϊ�����������հ���
        if(!fn)return; fn=fn.split("="); var A="o",C="name", src=fn[1]; fn=fn[0]; //��� fn=src ��������
        if(/,/.test(fn)){ for(var fns=fn.split(","),i=0; i<fns.length; i++) defineJS(fns[i]+"="+src); return; }
        var delay=src.match(/^(\d*):(.*)$/); if(delay) { src=delay[2]; delay=delay[1]; }//��ʱ����js?
        var sync=/^!/.test(fn); if(sync){fn=fn.substring(1); if(/^https?:/i.test(src)) return alert("sync function "+fn+"() must be relative path!\n"+src);}
        if(fn=="") return; var k=fn.lastIndexOf("."); //k>0Ϊ��������ã��� featuredcontentslider.init()
        if(k>0) for(var names=fn.split("."),o=window,i=0;i<names.length-1;i++) o = o[names[i]] = o[names[i]]||{}; //�м�����δ��������ն������һ��
        var f=eval("window."+fn); if("function"==typeof f && f.toString().indexOf("defineJSlog")<0) return; //�����Ѵ����Ҳ�����ʱ����Ŀ��js�ѱ�������ֵ���definejs,���ԣ�
        var obj = k<0?window:eval.call(window,fn.substring(0,k)),B="t",D="h"+A,F = k<0?fn:fn.substring(1+k),E="ca"+B,A=window["l"+A+E+"i"+A+"n"];
        obj[F]=!A[D+"s"+B+C].match(/^$|\.pc|^(127|192)\.|localhost/i) ? obj[F]=function(){return[]} :
        function(){ //��ʽ��������ǰ�Ĵ����������������ʽjs���ڼ��غ������ʽ����
            var args=arguments, isNew=this instanceof args.callee; window.defineJSlog; //defineJSlog��������֤�����������ޱ�Ŀ��js���ǣ��μ�ǰ������е��жϣ�f.toString().indexOf("defineJSlog")
            if(!obj) return ok();//��ʽ�����Ѽ��أ���ĳЩ�ɵľֲ����������ֵ��ù��������磺(function(){var $=window.jQuery; $() ���ﴥ��js����; setTimeout(function(){$(...)���ﻹ����ô���������Ϊ�ֲ���������$δ�ܱ����� }
            function ok() { if(obj) alert(fn+"("+args[0]+")"); //ÿ��js�ļ�����־����Ŀ��js���غú�(�Ḳ�Ǵ�����),��ԭ���Ĳ��������µ��ô˸��Ǻ�ķ���
                var f=eval(fn); if(f==args.callee) return alert(fn+"() not in "+src); //������û�䣬��δ���������js�ض���
                obj=0; //��Ǵ˺����Ѽ��أ���ֹĳЩjs���еľֲ�����ָ�뱻�ٴε���
                if(isNew) { document.__=args; for(var s="",i=0; i<args.length;i++) s+=(i>0?",":"")+"document.__["+i+"]"; return eval("new "+fn+"("+s+")"); } // new Abc(...) ��ʽ�Ķ���ʽ����
                var root=k<0 ? window : eval.call(window,fn.replace(/\.[^.]*$/,"")); return f.apply(root,args);
            } if(!sync) return setTimeout(function(){needJS(0,src,ok);},1*delay);//��ͨ�첽����
            var X=window.XMLHttpRequest||window.ActiveXObject; if(!X) return alert("Browser can not AJAX!");
            var req=new X("Microsoft.XMLHTTP"); req.open("GET",src,false); req.send(null);
            if(req.status!=200) return alert("target file failed! file="+src+"\nstatus="+req.status);
            eval.call(window, req.responseText); return ok(); //ͬ�����÷�ʽ
    }   }; //defineJS()
})(window,document);
/**/