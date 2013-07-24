$(function(){
	mainBanner();
});

//index.js banner
function mainBanner(){
	var mainObj = $(".main_banner_wrapper");
	var prevBtn = mainObj.find(".prev_btn");
	var nextBtn = mainObj.find(".next_btn");
	var HoverMoveDis = 0;
	var prevOrgPosition = prevBtn.css("left");
	var nextOrgPosition = nextBtn.css("right");
	
	var mainImgsWp = $(".main_banner_clipper ul");
	var mainImgsWpOrgPos = parseInt(mainImgsWp.css("left"));
	var mainImgs = mainImgsWp.find("img");
	var prevPreImgObj = new Array();
	var nextPreImgObj = new Array();
	var mainImgsWpMoveDisPrev = mainImgsWpOrgPos + mainImgs.width();
	var mainImgsWpMoveDisNext = mainImgsWpOrgPos - mainImgs.width();
	
	mainImgs.each(function(index, element) {
		prevPreImgObj[index] = '<i class="prev_img_prew"><img src='+ $(this).attr("src") +' width="258" height="77" /></i>';
		nextPreImgObj[index] = '<i class="next_img_prew '+index+'"><img src='+ $(this).attr("src") +' width="258" height="77" /></i>';
		prevBtn.append(prevPreImgObj[index]);
		nextBtn.append(nextPreImgObj[index]);
    });
	
	var prevImg = prevBtn.find(".prev_img_prew");
	var nextImg = nextBtn.find(".next_img_prew");
	var previewImgIndex = 0;
	var nextprevieImgIndex = 2;
	var previewImgMaxIndex = prevImg.length-1;
	function countCurImgIndex(dir){
		var leftPos = new Array();
		if(dir == "n"){
			if(nextprevieImgIndex == previewImgMaxIndex){
				nextprevieImgIndex = 0;
				leftPos[0] = nextprevieImgIndex;
			}else{
				nextprevieImgIndex++;
				leftPos[0] = nextprevieImgIndex;
			}
			if(previewImgIndex == previewImgMaxIndex){
				previewImgIndex = 0;
				leftPos[1] = previewImgIndex;
			}else{
				previewImgIndex++;
				leftPos[1] = previewImgIndex;
			}
			return leftPos;
		}else if(dir == "p"){
			if(nextprevieImgIndex == 0){
				nextprevieImgIndex = previewImgMaxIndex;
				leftPos[0] = nextprevieImgIndex;
			}else{
				nextprevieImgIndex--;
				leftPos[0] = nextprevieImgIndex;
			}
			if(previewImgIndex == 0){
				previewImgIndex = previewImgMaxIndex;
				leftPos[1] = previewImgIndex;
			}else{
				previewImgIndex--;
				leftPos[1] = previewImgIndex;
			}
			return leftPos;
		}
	}
	prevImg.eq(0).fadeIn();
	nextImg.eq(2).fadeIn();
	mainObj.find("p").hover(function(e){
		if(e.currentTarget.className == "prev_btn"){
			$(this).stop().animate({"left":HoverMoveDis},500);
		}else if(e.currentTarget.className == "next_btn"){
			$(this).stop().animate({"right":HoverMoveDis},500);
		}
	},function(e){
		if(e.currentTarget.className == "prev_btn"){
			$(this).stop().animate({"left":prevOrgPosition},500);
		}else if(e.currentTarget.className == "next_btn"){
			$(this).stop().animate({"right":nextOrgPosition},500);
		}
	});
	mainObj.find("p").click(function(e){
		if(!mainImgsWp.is(":animated")){
			if(e.currentTarget.className == "prev_btn"){
				var p = countCurImgIndex("p");
				nextImg.stop(true,true).fadeOut().eq(p[0]).stop(true,true).fadeIn();
				prevImg.stop(true,true).fadeOut().eq(p[1]).stop(true,true).fadeIn();
				mainImgsWp.animate({"left":-mainImgsWpMoveDisPrev}
										,function(){
													mainImgsWp.find("li").last().remove().insertBefore(mainImgsWp.find("li").first());
													mainImgsWp.css("left",mainImgsWpOrgPos);
													}
												);
			}else if(e.currentTarget.className == "next_btn"){
				var n = countCurImgIndex("n");
				nextImg.stop(true,true).fadeOut().eq(n[0]).stop(true,true).fadeIn();
				prevImg.stop(true,true).fadeOut().eq(n[1]).stop(true,true).fadeIn();
				mainImgsWp.animate({"left":mainImgsWpMoveDisNext}
										,function(){
													mainImgsWp.find("li").eq(0).remove().appendTo(mainImgsWp);
													mainImgsWp.css("left",mainImgsWpOrgPos);
													}
												);
			}
		}
	});
	var autos = true;
	$(".main_banner_wrapper").hover(function(){
		autos = false;
	},function(){
		autos = true;
	});
	function autoSlide(){
		if(autos){
			mainObj.find(".next_btn").trigger("click");
		}
	}
	var v = setInterval(autoSlide,5000);
};