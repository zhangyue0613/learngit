/**
 * 
*  rem.js
*  @file 站点通用适配
 * @author Zhangyue<zhangyue1630@163.com>
 * 
 **/

//适配
! function(n) {
	var e = n.document,
		t = e.documentElement,
		i = 375,
		d = i / 20,
		o = "orientationchange" in n ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth || 320;
			n > 375 && (n = 375);
			t.style.fontSize = n / d + "px"
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);