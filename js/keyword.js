var checktype = $(".changetype");
var type = $(".seach_type .type");
var seach_type = $(".seach_type");
var form = $("form");
var input = $("form .input");
var btn_search = $("form .btn_search");
var tbcolor = "#126AC1";
input.focus();
var search_types = {
	"types": [{
		name: "wd",
		action: "./search.php",
		value: "搜索本站",
		subcolor: "#126AC1",
		stype: "./images/sanjiao_03.png"
	},
	{
		name: "wd",
		action: "http://www.baidu.com/s",
		value: "百度一下",
		subcolor: "#126AC1",
		stype: "./images/sanjiao_03.png"
	},
	{
		name: "q",
		action: "http://www.so.com/s",
		value: "360搜索",
		subcolor: "#53C920",
		stype: "./images/sanjiao_04.png"
	},
	{
		name: "w",
		action: "http://www.soso.com/q",
		value: "腾讯搜索",
		subcolor: "#760AAA",
		stype: "./images/sanjiao_05.png"
	},
	{
		name: "query",
		action: "http://www.xuan369.com/so/qqkk8.jsp",
		value: "搜狗搜索",
		subcolor: "#F94F1B",
		stype: "./images/sanjiao_06.png"
	},
	{
		name: "q",
		action: "http://209.85.228.42/search",
		value: "谷歌搜索",
		subcolor: "#29C971",
		stype: "./images/sanjiao_07.png"
	}]
};
checktype.click(function() {
	seach_type.css({
		"display": "block",
		height: 0
	});
	seach_type.animate({
		height: (type.height() + 1) * type.length,
	},
	500);
});
type.click(function() {
	form.attr("action", search_types.types[$(this).index()].action);
	input.attr("name", search_types.types[$(this).index()].name);
	btn_search.val(search_types.types[$(this).index()].value);
	btn_search.css({
		background: search_types.types[$(this).index()].subcolor
	});
	tbcolor = search_types.types[$(this).index()].subcolor;
	checktype.css({
		"background": "url(" + search_types.types[$(this).index()].stype + ")"
	});
	btn_search.css({
		"box-shadow": "0 1px 2px " + search_types.types[$(this).index()].subcolor
	});
	input.focus();
	seach_type.animate({
		height: 0,
	},
	500,
	function() {
		seach_type.css({
			"display": "none",
			height: 0
		});
	});
});
seach_type.mouseleave(function() {
	seach_type.animate({
		height: 0,
	},
	500,
	function() {
		seach_type.css({
			"display": "none",
			height: 0
		});
	});
});
input0.oninput = function() {
	if (input0.value.trim()) {
		window.time = Date.now();
	} else {
		hideKeyword();
	}
};
function keydata(keys) {
	var len = keys.s.length;
	var keywordbox = $(".keyword");
	var input = $("form .input");
	var btn_search = $("form .btn_search");
	if (len == 0) {} else {
		keywordbox.css({
			display: "block"
		});
	}
	if (input.val() != "") {
		var spans = "";
		for (var i = 0; i < len; i++) {
			spans += "<span>" + keys.s[i] + "</span>"
		}
		keywordbox.html("<span>" + "翻译：" + input.val() + "</span>" + spans);
		quotebox.style.opacity = "0";
		keywordbox.animate({
			height: (keywordbox.children().height() + 1) * len
		},
		100);
	}
	input.keyup(function(event) {
		if (input.val() != "") {
			if (event.which != 40 && event.which != 38) {
				keywordbox.html("<span>" + "翻译：" + input.val() + "</span>" + spans);
				keywordbox.css({
					display: "block",
					height: "30px"
				});
			}
		}
	});
	keywordbox.children().click(function() {
		input.val($(this).html());
		var str = input.val();
		var finalStr = str.replace("翻译：", "");
		if (str.indexOf("翻译：") != -1) {
			form0.action = "https://fanyi.baidu.com/#en/zh/" + finalStr;
			input0.name = "";
		} else {
			switch (currentSearchEngine) {
			case 'baidu':
                form0.action = "https://www.baidu.com/s";
                input0.name = "word";
				break;
			case 'bing':
                form0.action = "https://www.bing.com/search";
                input0.name = "q";
				break;
			case 'google':
                form0.action = "https://www.google.com/search";
                input0.name = "q";
				break;
			}
		}
		keywordbox.animate({
			height: 0
		},
		100,
		function() {
			keywordbox.css({
				display: "none",
				height: "auto"
			});
			keywordbox.empty();
			numspan = 0;
		});
		input.focus();
		$("form").submit();
	});
	btn_search.focus(function() {
		keywordbox.animate({
			height: 0
		},
		100,
		function() {
			keywordbox.css({
				display: "none",
				height: "auto"
			});
			keywordbox.empty();
			numspan = 0;
		});
	});
	var numspan = 0;
	input.keydown(function(event) {
		if (event.which == 13) {
			keywordbox.animate({
				height: 0
			},
			100,
			function() {
				keywordbox.css({
					display: "none",
					height: "auto"
				});
				keywordbox.empty();
			});
		}
		if (event.which == 40) {
			if (numspan == len + 1) numspan = 0;
			for (var i = 0; i < len + 1; i++) {
				if (numspan == i) {
					keywordbox.children().eq(i).css({
						"background-color": "rgba(255,255,255,0.2)"
					});
				} else {
					keywordbox.children().eq(i).css({
						"background-color": "rgba(255,255,255,0.1)"
					});
				}
			}
			input.val(keywordbox.children().eq(numspan).html());
			numspan++;
		}
		if (event.which == 38) {
			numspan--;
			if (numspan == len + 1) numspan = 0;
			for (var i = 0; i < len + 1; i++) {
				if (numspan == i) {
					keywordbox.children().eq(i).css({
						"background-color": "rgba(255,255,255,0.2)"
					});
				} else {
					keywordbox.children().eq(i).css({
						"background-color": "rgba(255,255,255,0.1)"
					});
				}
			}
			input.val(keywordbox.children().eq(numspan).html());
		}
	});
}