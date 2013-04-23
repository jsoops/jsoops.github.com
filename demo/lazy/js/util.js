function needJS(fn, src, callback) {
	callback = callback || function() {};
	if (fn) return callback(false); //功能早已载入
	var scripts = window.__needJS__ || (window.__needJS__ = []);
	var script = scripts[src] || (scripts[src] = {
		loaded: false,
		callbacks: []
	});
	if (script.loaded) return callback(false); //取得全局加载队列中的目标项。__needJS__和callbacks变量名绝不能改！！！
	var cbs = script.callbacks;
	if (cbs.push(callback) == 1) {
		var js = document.createElement("script");
		js.onload = js.onreadystatechange = function() {
			var st = js.readyState;
			if (st && st != "loaded" && st != "complete") return;
			script.loaded = true;
			for (var i = 0; i < cbs.length; i++) cbs[i](true);
		};
		js.src = src;
		document.getElementsByTagName("head")[0].appendChild(js);
	}
}