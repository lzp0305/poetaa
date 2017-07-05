// 搜索框点击弹出效果
$(document).ready(function(){
	$(".search-btn").on("click", function(e){
		$(".search-text").css({"width":"180px","border-radius":"10px","border":"1px solid #012f7c"});
		$(".search-text").focus();
		$(document).one("click", function(){
			$(".search-text").css({"width":"0","border-radius":"0","border":"0"})
		});
		e.stopPropagation();
	});
	$(".search-text").on("click", function(e){
		e.stopPropagation();
	});
});



