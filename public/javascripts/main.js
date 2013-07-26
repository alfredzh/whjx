// JavaScript Document

$(function(){
    //backguroundMusic();
    //slideImg();
	//mainBanner();
	bgAudioSwitch();
	//imgList();
	madiaList();
	mouseHoverWitch();
	//popup_init();
	jobsHoverEff();
	//MCTabSwitch();
	topMessage();
	chooseMediaPar();
	//corpMediaCarosal();
	surveyFunction.init();
	//commitQue();
	checkAccountAuth();
	Jh_Code();	
	routeControl();
	gamedataNav();
	//if(!$(".roles")[0]){gamedata('289')};
	//inputValidate($(".reg_id"),6,13,"uid");//普通注册--用户名
//	inputValidate($(".reg_pwd"),6,16);//普通注册--密码
//	inputValidate($(".reg_repwd"),6,16,false,$(".reg_pwd"));//普通注册--确认密码
//	inputValidate($(".reg_mail"),5,30,"email");//普通注册--邮箱
//	inputValidate($(".reg_rname"),2,6,"realname");//普通注册--真实姓名
//	inputValidate($(".reg_idnum"),18,18,"idnumber");//普通注册--身份证号码
	//regAndLogin();
	jobsTabSwitch();
	//gameDataShow.init();
	//submitForm();
});

//login.js	注册提交
/*function submitForm(){
	$(".login_subbtn a").click(function(){
		var id = $("#log_name").val();
		var pwd = $("#log_pwd").val();
		$.post("login_ajax", { id:id, pwd:pwd}, function (data, textStatus){
			if(data == 11){
				console.log("ok");
			}else{
				console.log(data)
			}
		},"text");
	});
};*/

//gamedata_hero.js	英雄页效果
/*var gameDataShow = {
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
}*/

//main.js	加入收藏夹
function addfavorite(){
	if (document.all){
		window.external.addFavorite('http://whjx.game080.com','王侯将相');
	}else if (window.sidebar){
		window.sidebar.addPanel('http://whjx.game080.com','王侯将相','');
	}else{
		alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
	}
};

//职业介绍 切换
function jobsTabSwitch(){
	$(".jobs_sextab").each(function(i){
		$(this).find("a").each(function(j) {
			$(this).click(function(){
				$(this).parent().addClass("active").siblings().removeClass("active");
				$(".jobs_sextab_img").eq(i).find("img").eq(j).fadeIn().siblings().fadeOut();
			});
		});
	});
	var maintab = $(".gamedata_jobsnav").find("a");
	var maindetail = $(".gamedata_jobsdetail").find("> li");
	maintab.each(function(i){
		$(this).click(function(){
			maindetail.eq(i).show().siblings().hide();
		});
	});
}

//login.js	注册 登录 功能
/*function regAndLogin(){
	var tabBd = $(".ral_mwp").find("> div");
	$(".reg_login_nav").find("li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("acitve")){
				$(this).addClass("active").siblings().removeClass("active");
				tabBd.eq(i).show().siblings().hide();
			}
		});
	});
}*/

////main.js	--input验证  ngClass错误提示图标 okClass正确提示图标 attElement信息提示容器
//function inputValidate(obj,minlen,maxlen,type,equ){
//	var obj_input = obj.find("input");
//	var attElement = "em";
//	var ngClass = "general_iptatt_ng";
//	var okClass = "general_iptatt_ok";
//	var msg;
//	var minlenError=numError=valEque=valType=true;
//	//错误提示信息
//	var minLenthMsg = "长额度不能小于"+minlen+"位！";
//	var maxLenthMsg = "长额度不能大于"+maxlen+"位！";
//	var typeNumMsg = "必须是数字！";
//	var reTypeMsg = "两次输入不一致！";
//	var emailMsg = "邮箱格式错误！";
//	var CHNMsg = "请输入真实姓名！";
//	var idNumMsg = "请输入18位身份证号！如:320102198205201439";
//	var uidTypeMsg = "用户名须以字母开头";
//	var uidExistMsg = "用户名已存在";
//	//绑定blur事件
//	obj_input.blur(function(){
//		validateLen();
//		validateEque();
//		validateType();
//		labelErrorDetect();
//		$(this).siblings("em").animate({"opacity":1});
//		if($(this).val() == ""){
//			$(this).siblings("label").fadeIn();
//		}
//	});
//	obj_input.focus(function(){
//		if($(this).val() == ""){
//			$(this).siblings("label").fadeOut();
//		}
//	});
//	//判断是否有错误
//	function labelErrorDetect(){
//		if(lenError && valEque && valType){
//			obj.find(attElement).text("");
//			addAttClass(true);
//		}else{
//			obj.find(attElement).text(msg);
//			addAttClass(false);
//		}
//		obj.find(attElement).fadeIn("fast");
//	}
//	//修改提示效果
//	function addAttClass(att){
//		if(att){
//			obj.find(attElement).removeClass(ngClass).addClass(okClass);
//		}else{
//			obj.find(attElement).removeClass(okClass).addClass(ngClass);
//		}
//	}
//	//判断长度
//	function validateLen(){
//		var val = obj_input.val().length;
//		if (val < minlen){
//			msg = minLenthMsg;
//			lenError = false;
//		}else if(val > maxlen){
//			msg = maxLenthMsg;
//			lenError = false;
//		}else{
//			lenError = true;
//		}
//	}
//	//判断2次输入是否相同
//	function validateEque(){
//		if(equ){
//			var valSub = equ.find("input").val();
//			var val = obj_input.val();
//			if(valSub != val){
//				msg = reTypeMsg;
//				valEque = false;
//			}else{
//				valEque = true;
//			}
//		}else{
//			valEque = true;
//		}
//	}
//	function validateType(){
//		var val = obj_input.val();
//		switch(type){
//			case "realname":
//				var isCHN = /[^\u4e00-\u9fa5]/.test(val);
//				if(isCHN){
//					valType = false;
//					msg = CHNMsg;
//				}else{
//					valType = true;
//				}
//			break;
//			case "number":
//				var isNum = /^[0-9]*$/.test(val);
//				if(!isNum){
//					valType = false;
//					msg = typeNumMsg;
//				}else{
//					valType = true;
//				}
//			break;
//			case "email":
//				var isEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val);
//				if(!isEmail){
//					msg = emailMsg;
//					valType = false;
//				}else{
//					valType = true;
//				}
//			break;
//			case "idnumber":
//				if(excuteIdNum()){
//					valType = true;
//				}else{
//					valType = false;
//					msg = idNumMsg;
//				}
//			break;
//			case "uid":
//				var isUid = /^[a-z]{1}[a-z0-9]{5,12}$/.test(val);
//				if(isUid){
//					if(valdUser(val)){
//						valType = true;
//					}else{
//						valType = false;
//						msg = uidExistMsg;
//					}
//				}else{
//					valType = false;
//					msg = uidTypeMsg;
//				}
//		}
//	}
//	//身份证验证函数
//	function excuteIdNum(){
//		var num = obj_input.val();
//		var theCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "}
//		num = num.toUpperCase(); 
//		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
//		if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))){		
//			return false;
//		}
//		if(theCity[parseInt(num.substr(0,2))]==null)return false;
//		
//		var len, re; 
//		len = num.length; 
//		
//		if (len == 18){
//			re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/); 
//			var arrSplit = num.match(re);
//			var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]); 
//	
//			if (arrSplit[2] < 1900 || arrSplit[2] > new Date().getFullYear()) {
//				return false;
//			}
//			var bGoodDay; 
//			bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
//	
//			if (!bGoodDay) {
//				return false;
//			}else{
//				return true;
//				var valnum; 
//				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
//				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
//				var nTemp = 0, i; 
//				for(i = 0; i < 17; i ++) { 
//					nTemp += num.substr(i, 1) * arrInt[i]; 
//				}
//				valnum = arrCh[nTemp % 11];
//				if (valnum != num.substr(17, 1)) { 
//					return false; 
//				} 
//				return true;
//			} 
//		}
//	}
//};

//gamealldata.js	nav tab effect
function gamedataNav(){
	var dl = $(".gamealldata_nav > dl");
	var dlHeight = new Array();
	dl.each(function(index, element) {
		var orgHeight = $(this).height();
        dlHeight.push(orgHeight);
		$(this).find(">dt").click(function(){
			//if($(this).parent().height() == 74){
//				$(this).parent().animate({"height":dlHeight[index]});
//			}else{
//				$(this).parent().animate({"height":74});
//				//dl.find(">dt").animate({"height":74});
//			}
			$(this).parent().animate({"height":dlHeight[index]}).siblings().animate({"height":74});
			//$(this).parent().animate({"height":dlHeight[index]});
		});
    });
	dl.height(74);
	dl.eq(0).height(dlHeight[0]);
}

//main.js	敬请期待
function waitForAvalible(obj){
	//var str = "敬请期待";
//	if($(obj).hasClass("main_activeacount")){
//		str = "账号激活";
//	}else if($(obj).hasClass("main_faq")){
//		str = "";
//	}else if($(obj).hasClass("main_accheck")){
//		str = "资格查询";
//	}else if($(obj).hasClass("main_fdown")){
//		str = "客户端下载";
//	}
	alert('敬请关注测试时间');
};

//survey.js	survey function
var surveyFunction = {
	init:function(){
		this.btns();
		this.othIpt();
	},
	radio:function(){	
		var min_chk = $(".main_ask_que").find("li:visible").find("p").attr("rel");	
		$(".main_ask_que").find("li:visible").each(function(index, element) {
			if($(this).find("input:radio").length > 0){
				if($(this).find("input:radio:checked").length == 0){
					surveyFunction.warnFun();	
				}else{				   
					if(!$(".main_ask_que").find("li:last").is(":visible")){
						$(".main_ask_que").find("li:visible").hide().next().show();
					}
				}
			}else if($(this).find("input:checkbox").length > 0){
				if($(this).find("input:checkbox:checked").length == 0){
					surveyFunction.warnFun();
				}
				if($(this).find("input:checkbox:checked").length <= min_chk && $(this).find("input:checkbox:checked").length > 0){
					if(!$(".main_ask_que").find("li:last").is(":visible")){
						$(".main_ask_que").find("li:visible").hide().next().show();
					}
				}else if($(this).find("input:checkbox:checked").length > min_chk){
					alert("最多可选"+ min_chk+"项");
				}
			}
		});
	},
	showprevbtn:function(){
		if($(".main_ask_que").find("li:first").is(":visible")){
			$(".prev_que").css("visibility","hidden");
		}else{
			$(".prev_que").css("visibility","visible");
		}
		if($(".main_ask_que").find("li:last").is(":visible")){
			$(".next_que").text("下一步>");
		}else{
			$(".next_que").text("下一题>");
		}
	},
	warnFun:function(){
		alert("请至少勾选一项!");
	},
	othIpt:function(){
		$(".main_ask_que").find("input:text").siblings("input:checkbox").parent("label").click(function(e){
			e.preventDefault();
		});
		$(".main_ask_que").find("input:text").focus(function(){
			$(this).siblings("input").prop("checked",true);
		});
		$(".main_ask_que").find("input:text").blur(function(){
			if($(this).val() == ""){
				$(this).siblings("input").removeAttr("checked");
			}
		});
	},
	progress:function(index){
		var progressWp = $(".ask_pg_hoverbg");
		switch(index){
			case 0:
				$(".ask_pg_hoverbg").width("275");
				break;
			case 1:
				$(".ask_pg_hoverbg").width("95");
				$(".ask_tab_bd").find(">div").hide().last().show();
				break;
		}
	},
	btns:function(){
		$(".next_que").click(function(){
			var ct = true;
			if($(".main_ask_que").find("li:last").is(":visible")){
				$(".ask_tab_bd").find("> div").each(function(i){
					if($(this).find("input:radio:checked").length > 0){
						if($(this).is(":visible") && ct){
							$(this).hide().next().show();
							surveyFunction.progress(i);
							ct = false;
						}
					}
				});
			}
			surveyFunction.radio();
			surveyFunction.showprevbtn();
		});
		$(".prev_que").click(function(){
			$(".main_ask_que").find("li:visible").hide().prev().show();
			surveyFunction.showprevbtn();
		});
	}
}

//checkAccountAuth
function checkAccountAuth(){
	var nav = $(".checkac_nav").find(">li");
	var tab = $(".checkac_bd_tab").find(">li");
	var exc = ["checkac_downlink","checkac_getcodelink"];
	nav.each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass(exc[0]) && !$(this).hasClass(exc[1])){
				$(this).addClass("active").siblings().removeClass("active");
				tab.eq(i-1).show().siblings().hide();
			}
		});
	});
};
//main.js
function madiaList(){
	$.ajax({url:'data/medialist.json',type: 'get',dataType: 'json',
		success: function(data){
			var imgNode = new Array();
			var txtNode = new Array();
			for( i = 0; i < data.imglink.length; i++ ){
				var targetLink = data.imglink[i].link;
				var imgLink = data.imglink[i].imgsrc;
				imgNode.push('<li><a href="'+targetLink+'" target="_blank"><img src="'+imgLink+'" width="260" height="83"/></a></li>');
			}
			$(".news_bd_sc_imgsclp > ul").append(imgNode);
			for( i = 0; i < data.txtlink.length; i++ ){
				var targetLink = data.txtlink[i].link;
				var txttit = data.txtlink[i].des;
				txtNode.push('<li><a href="'+targetLink+'" target="_blank">'+txttit+'</a></li>');
			}
			$(".news_bd_sc_select > ul").append(txtNode);
			corpMediaCarosal();
		},
		error: function(data){}
	});
	//main.js corp-media carosal
	function corpMediaCarosal(){
		var objClipper = $(".news_bd_sc_imgsclp").find("ul");
		var objNode = objClipper.find("li");
		var widthPerPage = objNode.find("img").width();
		var hover = false;
		objClipper.css({left:-widthPerPage}).find("li").last().remove().insertBefore($(".news_bd_sc_imgsclp").find("li").first());
		$(".news_bd_sc_imgs").find(".prev_btn").click(function(){
			if(!objClipper.is(":animated")){
				objClipper.animate({left:0},function(){objClipper.css({left:-widthPerPage}).find("li").last().remove().insertBefore($(".news_bd_sc_imgsclp").find("li").first());});
			}
		});
		$(".news_bd_sc_imgs").find(".next_btn").click(function(){
			if(!objClipper.is(":animated")){
				objClipper.animate({left:-widthPerPage * 2},function(){objClipper.css({left:-widthPerPage}).find("li").first().remove().insertAfter($(".news_bd_sc_imgsclp").find("li").last());});
			}
		});
		$(".news_bd_sc_imgs").hover(function(){
			hover = true;
		},function(){
			hover = false;
		});
		var t = setInterval(function(){if(!hover)$(".news_bd_sc_imgs").find(".next_btn").trigger("click")},3000);
	};
}

//main.js 
function chooseMediaPar(){
	var isHover = false;
	$(".news_bd_sc_select").find("li").first().click(function(){
		var obj = $(".news_bd_sc_select").find("li");
		var objHeight = obj.height();
		var totalOjbHeight = obj.length * objHeight;
		var parentHeight = $(".news_bd_sc_select").find("ul").height();
		if(parentHeight == objHeight){
			$(this).parent().animate({height:150},function(){$(this).css({"overflow":"auto"})});
		}else{
			$(this).parent().animate({height:objHeight},function(){$(this).scrollTop(0).css({"overflow":"hidden"})});
		}
	});
	$(".news_bd_sc_select").hover(function(){
		isHover = true;
	},function(){
		isHover = false;
	});
	$(window).click(function(){
		var obj = $(".news_bd_sc_select").find("li");
		var objHeight = obj.height();
		if(!isHover){
			$(".news_bd_sc_select").find("ul").animate({height:objHeight},function(){$(this).scrollTop(0).css({"overflow":"hidden"})});
		}
	});
}

//
function topMessage(){
	var $obj=$("#con_one_1 ul li:first").find("a");
	$(".header_gn_news a").attr("href",$obj.attr("href")).text($obj.attr("title"));
}
//
function getQuery(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

function routeControl(){
	var fileName = window.location.href;
	fileName = fileName.split("/");
	fileName = fileName[fileName.length-1].split(".")[0];
	if(fileName == "checkaccount" && getQuery("item") == "act"){
		$(".checkac_nav").find(">li").eq(3).trigger("click");
	}
}

//
function jobsHoverEff(){
	var obj = $(".gamedetail_jobs_list").find("li");
	obj.each(function(i){
		$(this).hover(function(){
			if(!$(this).hasClass("active")){
				$(this).find("b").stop().animate({"opacity":1},600);
			}
		},function(){
			if(!$(this).hasClass("active")){
				$(this).find("b").stop().animate({"opacity":0},600);
			}
		});
		$(this).click(function(){
			if(!$(this).hasClass("active")){
				var curObj = $(this).siblings();
				$(this).addClass("active").siblings().find("b").stop().animate({"opacity":0},600);
				$(this).addClass("active").siblings().removeClass("active");
				$(".gamedetail_jobs_detail").find("li").eq(i).stop().animate({"opacity":1}).siblings().stop().animate({"opacity":0});
			}
		});
	});
}

//mediacenter.js	popup_window height initial
/*function popup_init(){
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
}*/
//mediacenter.js	popup_window class
/*function popup_video(obj){
	var Src = new Array();
	var flv = new Array();
	obj.each(function(i){
		Src[i] = obj.eq(i).find("> img").prop("id");
		flv[i] = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="610" height="475" id="FLVPlayer"><param name="movie" value="'+ Src[i] +'" /><param name="quality" value="high"><param name="wmode" value="opaque"><param name="scale" value="noscale"><param name="salign" value="lt"><param name="FlashVars" value="&amp;MM_ComponentVersion=1&amp;skinName=Corona_Skin_3&amp;streamName=../Flv/20100831013931&amp;autoPlay=true&amp;autoRewind=true" /><embed src="'+ Src[i] +'" flashvars="&MM_ComponentVersion=1&skinName=Corona_Skin_3&streamName=../Flv/20100831013931&autoPlay=true&autoRewind=true" quality="high" wmode="opaque" scale="noscale" width="610" height="475" name="FLVPlayer" salign="lt" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>';
		obj.eq(i).on("click",function(){
			var h = $("body").height();
			$(".popup_bg").height(h);
			//$(".popup_video_wp ,.popup_snapshot_wp").height(h);
			$(".popup_video").append(flv[i]);
			$(".popup_video_wp").fadeIn();
			if(!$(".header_nav_audio").find("b").hasClass("off")){
				$(".header_nav_audio").find("b").trigger("click");
			}
		});
	});
}*/
//mediacenter.js
/*function popup_img(obj){
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
}*/

//mediacenter.js	tabswitch
/*function MCTabSwitch(){
	$(".gamedetail_ms_nav").find("li").each(function(index, element) {
        $(this).click(function(){
			if(!$(this).hasClass("active")){
				$(this).addClass("active").siblings().removeClass("active");
			}
		});
    });
};*/

//main.js	audio switch btn
function bgAudioSwitch(){
	var objBtn = $(".header_nav_audio").find("b");
	var mp3 = $(".mp3").find("embed");
	objBtn.on("click",function(){
		if ($(this).hasClass("off")){
			$(".mp3").html(mp3);$(".header_nav_audio>b").attr("title","关闭背景音乐");
		}else{
			$(".mp3").html("");$(".header_nav_audio>b").attr("title","开启背景音乐");
		}
		$(this).toggleClass("off");
	});
};

//index.js banner
/*function mainBanner(){
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
};*/
//main.js
function mouseHoverWitch(){
	$(".main_cn_nav ul li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
}
//main.js
function AgentsAndVersion(){
	if(navigator.appName == "Microsoft Internet Explorer"){
		return true;
	}
}
//survey.js
function commitQue(){
	$(".index_bd a[href='javascript:void(0);']").removeAttr("target");
	$(".ask_pinfo_submit>.sbumit").click(function(){
		var str="",n=0;
		$(".main_ask_que").find("li").each(function() {
             if($(this).find("input:radio").length > 0){
                  var $o=$(this).find("input:radio:checked");
                  if ($o.length==0) { n=1;}
                  else{
                     if($o.siblings("input")[0]){
                          var $txt=$o.siblings("input");
                          str+=$txt.attr('id')+'>>'+$txt.val();
                     }else{
                         str+=$o.attr('name')+'_'+$o.val();
                     }  
                     str+='|';
                  }         
             }else{
                 var $o=$(this).find("input:checkbox:checked");
                  if ($o.length==0) { n=1;}
                  else{   
                     $o.each(function() {
                        $oc=$(this);
                        if($oc.siblings("input")[0]){
                          var $txt=$oc.siblings("input");
                          str+=$txt.attr('id')+'>>'+$txt.val()+',';
                        }else{
                          str+=$oc.attr('name')+'_'+$oc.val()+',';
                        }
                     });
                     str=str.substring(0,str.length-1);
                     str+='|';
                  }
             }
        });
        str=str.substring(0,str.length-1); 
        if (n==1) {
           alert('问卷信息不完整!');return;
        }
        var username=$(".username").val();
        if(!username.isRealName()){alert('请输入您的用户名!');return;} 
        var $o=$("[name='sex']:checked");  
        if($o.length==0){alert('请选择性别!');return;}
        var sex=$o.val();
        $o=$("[name='old']:checked");
        if($o.length==0){alert('请选择年龄!');return;}
        var old=$o.val();
        $o=$("[name='jobs']:checked");
        if($o.length==0){alert('请选择职业!');return;}
        var jobs=$o.val();
        var province=$("#province").find("option:selected").val();
        var city=$("#city").find("option:selected").val();;
        var county=$("#county").find("option:selected").val();
        if(province=='省份'){alert('请选择省份!');return;}
        if(city=='地级市'){alert('请选择地级市!');return;}
        if(county=='市、县级市、县'){alert('请选择市、县级市、县!');return;}
        city=province+'-'+city+"(市)"+county+"(市/县)";
        var email=$(".email").val();
        if(!email.isEmail()){alert('请填写正确的Email!');return;}
        var phone=$(".phone").val();
        if(!/^\d{11}$/.test(phone)){alert('您的手机号码不正确!');return;}
        $.ajaxSettings.async = false;
        $.post("Inc/ajax.aspx", { witch:"comitSurvys",Sur_name:username,Sex:sex,Age:old,Job:jobs,city:city,Email:email,Phone:phone,Datas:str}, function (data, textStatus){     	
            if(data=='true'){
                alert('提交成功.');
                surveyFunction.progress(1);
            }else if(data=='1'){
               alert('请等待官方审核!');
            }else{
                alert('提交失败.');
            }
	    });
    });
}
function Jh_Code(){
    if($(".has")[0]){$(".has").hide();}
    $(".search").click(function(){
        if($("#ulog").val()==""){alert('您还未登陆!请先登陆.');return;}
        var name=$(".search_name").val();
        if(name.length==0){alert('请输入您的账号!');return;}
        $.post("Inc/ajax.aspx", { witch:"qualification",username:name}, function (data, textStatus){
            if(data=='true'){
                alert('恭喜您,已获得本次内测资格.');
            }else{
                alert('对不起,您未获得本次内测资格.');
            }
	    });
    });
    $(".TheActivation").click(function(){
        var name=$.trim($(".username").val());
        //var actcode=$.trim($(".actcode").val());
		var actcode_1=$.trim($(".checkac_ec_codeipt")[0].value)
			,actcode_2=$.trim($(".checkac_ec_codeipt")[1].value)
			,actcode_3=$.trim($(".checkac_ec_codeipt")[2].value)
			,actcode = actcode_1 +'-'+ actcode_2 +'-'+ actcode_3;
        var vcode=$.trim($(".vcode").val());
        if(name.length==0){alert('请输入您的账号!');return;}
        if(valdUser(name)){alert('您输入的账号不存在!');return;}
        if(actcode.length==0){alert('请输入激活码!');return;}
        if(!GetCode(vcode)){alert('验证码不正确!');return;}
        $.post("Inc/activation.aspx", {whjx_witch:"activation","code":actcode,"vcode":vcode,"username":name}, function(data, textStatus){
 	        switch(data){
    	 	case "0": alert("您的帐号激活成功.");  break;
    	 	case "-1": alert("您的帐号激活失败!"); break;
    	 	case "1": alert("您的帐号已经激活!");  break;
    	 	case "2": alert("激活码已被使用!"); break;
    	 	case "3": alert("您输入的激活码有误!"); break;
    	 	default:{alert("您的帐号激活失败!");}
 	        }		
		});
    });
}

//function gamedata(id){  
//    var isredr=window.location.href;
//    var rex=/.*(req=jobs)+$/,rex1=/.#(\d+?)$/;
//    try{window.event.returnValue = false;}catch(ev){}
//    if (rex.test(isredr)) {
//      window.location=isredr.replace('?req=jobs','')+"#"+id;
//    }
//    if (rex1.test(isredr)) {
//      id=RegExp.$1;     
//      $(".gamealldata_nav a[rel='"+id+"']").parent().parent().removeAttr("style").siblings().css("height","74px");
//      window.location=window.location+'#';  
//    }
//    $.post("Inc/article.aspx", { witch:"gamedata",id:id}, function (data, textStatus){
//         var d=data.gdata;   	
//         if (d.length>0) {
//            $(".newsdetail_subtit.title").text(d[0].title);
//            //var context=decodeURIComponent(d[0].context).replace(/\$/g," ");           
//            var context=d[0].context;           
//            $(".content").html(context);//unsdecodeURI           
//         }
//	},"json");	
//}