$(function(){
	gameDataShow.init();
});

//gamedata_hero.js	英雄页效果
var gameDataShow = {
	init:function(){
		this.tabSwitch();
		this.autoFillNode();
		this.pageScroll();
		this.navActive();
		this.autoSwitch();
	},
	tabSwitch:function(){
		var tabBd = $(".gd_hero_dbtab").find("li");
		var tabNav = $(".gd_hero_nav_list").find("li");
		tabNav.each(function(index, element) {
			$(this).click(function(){
				if(!tabBd.eq(index).is(":animated")){
					if($(this).children().length > 0){
						tabBd.fadeOut().eq(index).fadeIn();
						$(this).find("b").animate({"opacity":1}).parent().addClass("active").siblings().removeClass("active").find("b").animate({"opacity":0});
					}
				}
			});
		});
	},
	autoFillNode:function(){
		var tabNav = $(".gd_hero_nav_list").find("li");
		var NodesLeft = tabNav.length % 6;
		if(NodesLeft != 0){
			NodesLeft = 6 - NodesLeft;
			for(i=0;i < NodesLeft;i++){
				tabNav.parent().append("<li></li>");
			}
		}
	},
	curPage:0,
	pageScroll:function(){
		var prevBtn = $(".gd_hero_nav_wp").find(".prev");
		var nextBtn = $(".gd_hero_nav_wp").find(".next");
		var scrollDistance = -$(".gd_hero_nav_list").width();
		var tabNav = $(".gd_hero_nav_list").find("li");
		var tabScroller = $(".gd_hero_nav_list").find("ul");
		var tabNavLen = tabNav.length;
		var totalPages = tabNavLen / 6;
		//var curPage = 0;
		nextBtn.click(function(){
			if(!tabScroller.is(":animated")){
				if(totalPages-1 > gameDataShow.curPage){
					tabScroller.animate({"left":scrollDistance * (gameDataShow.curPage+1)});
					gameDataShow.curPage++;
				}
			}
		});
		prevBtn.click(function(){
			if(!tabScroller.is(":animated")){
				if(gameDataShow.curPage+1 > 1){
					tabScroller.animate({"left":scrollDistance * (gameDataShow.curPage-1)});
					gameDataShow.curPage--;
				}
			}
		});
	},
	navActive:function(){
		$(".gd_hero_nav_list").find("li").hover(function(){
			if(!$(this).hasClass("active")){
				$(this).find("b").stop().animate({"opacity":1});
			}
		},function(){
			if(!$(this).hasClass("active")){
				$(this).find("b").stop().animate({"opacity":0});
			}
		});
		
	},
	autoSwitch:function(){
		var totalObj = $(".gd_hero_nav_list > ul > li").find("img").length;
		var switchVar = true;
		$(".gd_hero_sp_wp").hover(function(){
			switchVar = false;
		},function(){
			switchVar = true;
		});
		var s = setInterval(function(){
				clickToNext();
			},5000);
		function clickToNext(){
			if(switchVar){
				var index;
				$(".gd_hero_nav_list > ul").find("li").each(function(i){
					if($(this).hasClass("active")){
						if( i < totalObj - 1){
							index = i+1;
							if((i + 1) % 6 == 0){
								$(".gd_hero_nav_wp").find(".next").trigger("click");
							}
						}else{
							index = 0;
							$(".gd_hero_nav_list").find("ul").animate({left:0});
							gameDataShow.curPage = 0;
						}
						
					}
				});
				$(".gd_hero_nav_list > ul").find("li").eq(index).trigger("click");
			}
		}
	}
}