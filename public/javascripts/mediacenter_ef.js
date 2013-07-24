// JavaScript Document

$(function(){
	mediaShow.init();
	popup_init();
	MCTabSwitch();
});
var mediaShow = {
	init:function(){
		this.initOthPos($(".video"));
		this.initOthPos($(".mmplayer"));
		this.initOthPos($(".snapshot"));
		this.mainPos();
		this.video();
		this.mmplayer();
		this.snapshot();
		this.hoverfun($(".video"));
		this.hoverfun($(".mmplayer"));
		this.hoverfun($(".snapshot"));
	},
	margin:20,
	hoverfun:function(obj){
		obj.hover(function(){
			$(this).find("b").stop().fadeIn();
		},function(){
			$(this).find("b").stop().fadeOut();
		});
	},
	initpos:function(pics){
		var x = y = base = nodeClass = nodeId = new Object();
		for(i=0;i < pics.length;i++){
			x = pics[i].xpos;
			y = pics[i].ypos;
			base = [165,98];
			nodeClass = pics[i].name;
			nodeId = Number(pics[i].id);
			for(j = 0; j < $(".gamedetail_mediashow").find("."+nodeClass).length; j++){
				if(j == nodeId){
					var xcurpos = x * base[0];
					var ycurpos = y * base[1];
					$(".gamedetail_mediashow").find("."+nodeClass).eq(nodeId).animate({"transform":"translate("+xcurpos+","+ycurpos+") scale(1,1)","opacity":1},10);
				}
			}
		}
		$(".gamedetail_mediashow").height(1100);
	},
	initOthPos:function(obj){
		var nodeWidth = parseInt(obj.find("img").attr("width"));
		var nodeHeight = parseInt(obj.find("img").attr("height"));
		var wpWidth = obj.parent().width();
		var nodePerPage = parseInt(wpWidth / nodeWidth);
		var ypos = 0;
		var xpos = 0;
		obj.each(function(index){
			if(index == 0){
				xpos++;
				$(this).css({"transform":"scale(0.2)","opacity":0});
			}else if(index % nodePerPage == 0){
				ypos++;
				xpos=0;
				var y = (ypos * (nodeHeight + mediaShow.margin)) + "px";
				$(this).css({"transform":"translate(0,"+y+") scale(0.2)","opacity":0});
				xpos++;
			}else if(ypos == 0){
				var x = ((nodeWidth + mediaShow.margin) * xpos) + "px";
				$(this).css({"transform":"translate("+x+",0) scale(0.2)","opacity":0});
				xpos++;
			}else{
				var x = ((nodeWidth + mediaShow.margin) * xpos) + "px";
				var y = (ypos * (nodeHeight + mediaShow.margin)) + "px";
				var m = "matrix(0.2,0,0,0.2," + x + "," + y +")";
				$(this).css({"transform":"translate("+x+","+y+") scale(0.2)","opacity":0});
				xpos++;
			}
		});
	},
	video:function(){
		$(".video_btn").click(function(){
			mediaShow.zoomFun($(".mmplayer"));
			mediaShow.zoomFun($(".snapshot"));
			mediaShow.posCal($(".video"));
		});
	},
	mmplayer:function(){
		$(".mmplayer_btn").click(function(){
			mediaShow.zoomFun($(".video"));
			mediaShow.zoomFun($(".snapshot"));
			mediaShow.posCal($(".mmplayer"));
		});
	},
	snapshot:function(){
		$(".snapshot_btn").click(function(){
			mediaShow.zoomFun($(".video"));
			mediaShow.zoomFun($(".mmplayer"));
			mediaShow.posCal($(".snapshot"));
		});
	},
	main:function(pics){
		$(".main_btn").click(function(){
			calMain($(".video"));
			calMain($(".mmplayer"));
			calMain($(".snapshot"));
		});
		function calMain(obj){
			var x = y = base = nodeClass = nodeId = new Object();
			for(i=0;i < obj.length;i++){
				var ac = true;
				for(j=0;j < pics.length;j++){
					x = pics[j].xpos;
					y = pics[j].ypos;
					base = [165,98];
					nodeClass = pics[j].name;
					nodeId = Number(pics[j].id);
					if(obj.eq(i).hasClass(nodeClass) && i == nodeId){
						var xcurpos = x * base[0];
						var ycurpos = y * base[1];
						obj.eq(i).animate({transform:"translate("+xcurpos+","+ycurpos+") scale(1)",opacity:1});
						ac = false;
						break;
					}
				}
				var curm = obj.eq(i).css("transform").split("(");
				var curm = curm[1].split(")")[0];
				var curm = curm.split(",");
				if(ac){
					obj.eq(i).animate({transform:"translate("+ curm[4] +","+ curm[5] +") scale(0.2)",opacity:0});
				}
			}
			obj.parent().height(1100);
		}
	},
	mainPos:function(){
		$.ajax({url:"data/media.json",
			dataType:"json",
			success:function(data){
							pics = data.main;
							mediaShow.initpos(pics);
							mediaShow.main(pics);
					}
			})
	},
	posCal:function(obj,init){
		var nodeWidth = parseInt(obj.find("img").attr("width"));
		var nodeHeight = parseInt(obj.find("img").attr("height"));
		var wpWidth = obj.parent().width();
		var nodePerPage = parseInt(wpWidth / nodeWidth);
		var ypos = 0;
		var xpos = 0;
		obj.each(function(index){
			if(index == 0){
				xpos++;
				$(this).animate({transform:"scale(1)","opacity":1});
			}else if(index % nodePerPage == 0){
				ypos++;
				xpos=0;
				var y = (ypos * (nodeHeight + mediaShow.margin)) + "px";
				var m = "matrix(1,0,0,1,0," + y +")";
				$(this).animate({transform:m,"opacity":1});
				xpos++;
			}else if(ypos == 0){
				var x = ((nodeWidth + mediaShow.margin) * xpos) + "px";
				var m = "matrix(1,0,0,1," + x + "," + 0 +")";
				$(this).animate({transform:m,"opacity":1});
				xpos++;
			}else{
				var x = ((nodeWidth + mediaShow.margin) * xpos) + "px";
				var y = (ypos * (nodeHeight + mediaShow.margin)) + "px";
				var m = "matrix(1,0,0,1," + x + "," + y +")";
				$(this).animate({transform:m,"opacity":1});
				xpos++;
			}
		});
		obj.parent().height((ypos + 1) * (nodeHeight + mediaShow.margin));
	},
	zoomFun:function(obj){
		var nodeWidth = parseInt(obj.find("img").attr("width"));
		var nodeHeight = parseInt(obj.find("img").attr("height"));
		var wpWidth = obj.parent().width();
		var nodePerPage = parseInt(wpWidth / nodeWidth);
		var ypos = 0;
		var xpos = 0;
		obj.each(function(index){
			var curm = $(this).css("transform").split("(");
			var curm = curm[1].split(")")[0];
			var curm = curm.split(",");
			$(this).animate({transform:"translate("+ curm[4] +","+ curm[5] +") scale(0.2)","opacity":0});
		});
	}
}
//mediacenter.js	popup_window height initial
function popup_init(){
	$(".popup_video_close").click(function(){
		$(".popup_video_wp").fadeOut();
		$(".popup_video").find("object").remove();
	});
	$(".popup_snapshot_close ,.popup_snapshot_wp").click(function(){
		$(".popup_snapshot_wp").fadeOut();
		$(".popup_snapshot").find("img").remove();
	});
	popup_video($(".video"));
	popup_img($(".snapshot"));
	popup_img($(".mmplayer"));
}
//mediacenter.js	popup_window class
function popup_video(obj){
	var Src = new Array();
	var flv = new Array();
	obj.each(function(i){
		Src[i] = obj.eq(i).find("> img").prop("id");
		flv[i] = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="610" height="475" id="FLVPlayer"><param name="movie" value="'+ Src[i] +'" /><param name="quality" value="high"><param name="wmode" value="opaque"><param name="scale" value="noscale"><param name="salign" value="lt"><param name="FlashVars" value="&amp;MM_ComponentVersion=1&amp;skinName=Corona_Skin_3&amp;streamName=../Flv/20100831013931&amp;autoPlay=true&amp;autoRewind=true" /><embed src="'+ Src[i] +'" flashvars="&MM_ComponentVersion=1&skinName=Corona_Skin_3&streamName=../Flv/20100831013931&autoPlay=true&autoRewind=true" quality="high" wmode="opaque" scale="noscale" width="610" height="475" name="FLVPlayer" salign="lt" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>';
		obj.eq(i).on("click",function(){
			var h = $("body").height();
			$(".popup_bg").height(h);
			/*$(".popup_video_wp ,.popup_snapshot_wp").height(h);*/
			$(".popup_video").append(flv[i]);
			$(".popup_video_wp").fadeIn();
			if(!$(".header_nav_audio").find("b").hasClass("off")){
				$(".header_nav_audio").find("b").trigger("click");
			}
		});
	});
}
//mediacenter.js
function popup_img(obj){
	var Src = new Array();
	var img = new Array();
	obj.each(function(i){
		Src[i] = obj.eq(i).find("> img").attr("rel");
		img[i] = '<img src="'+ Src[i] +'"/>';
		obj.eq(i).on("click",function(){
			var h = $("body").height();
			$(".popup_bg").height(h);
			var wp = $(".popup_snapshot");
			$(".popup_video_wp ,.popup_snapshot_wp").height(h);
			wp.append(img[i]);
			$(".popup_snapshot_wp").fadeIn();
			wp.find("img").animate({"transform":"scale(1)","opacity":1}
									,800
									,function(){
										var imgPosTop = wp.find("img")[0].offsetTop - 26;
										var imgPosLeft = wp.find("img")[0].offsetLeft;
										var imgWidth = wp.find("img").width();
										$(".popup_snapshot_close").css({top:imgPosTop,left:imgPosLeft + imgWidth,opacity:1});
									});
		});
	});
}
//mediacenter.js	tabswitch
function MCTabSwitch(){
	$(".gamedetail_ms_nav").find("li").each(function(index, element) {
        $(this).click(function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active").siblings().removeClass("active");
			}
		});
    });
};
