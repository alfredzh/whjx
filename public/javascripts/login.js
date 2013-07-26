$(function(){
	regAndLogin();
	submitForm();
	//inputValidate($(".reg_id"),6,13,"uid");//普通注册--用户名
//	inputValidate($(".reg_pwd"),6,16);//普通注册--密码
//	inputValidate($(".reg_repwd"),6,16,false,$(".reg_pwd"));//普通注册--确认密码
//	inputValidate($(".reg_mail"),5,30,"email");//普通注册--邮箱
//	inputValidate($(".reg_rname"),2,6,"realname");//普通注册--真实姓名
//	inputValidate($(".reg_idnum"),18,18,"idnumber");//普通注册--身份证号
	$.validator.addMethod("idtype",function(value,element){
		return this.optional(element) || (/^([a-zA-Z0-9_]*)+$/.test(value));
	},"格式错误!")
	$.validator.addMethod("",function(value,element){
		return this.optional(element) || (/^([a-zA-Z0-9_]*)+$/.test(value));
	},"格式错误!")
	$("#login_wp").validate({
		errorElement: "p",
		errorPlacement:function(error,element){
			element.siblings("p").html(error)//.insertAfter(element);
			element.animate({opacity:1});
		},
		success:function(element){
			element.animate({opacity:0});
		},
		rules:{
			log_name:{
				required:true,
				rangelength : [6,13],
				idtype :true
			},
			log_pwd:{
				required:true,
				minlength : 6,
				maxlength : 13
			},
			rcode:{
				required:true,
				rangelength:4
			}
		},
		messages:{
			log_name:{
				required:"必填",
				rangelength:"长度必须6-13"
			}
		},
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				type:"post",
				url:"login_ajax",
				success:function(data){console.log(data)}
			})
			return false;
		}
	});
});

//注册 登录 功能
function regAndLogin(){
	var tabBd = $(".ral_mwp").find("> div");
	$(".reg_login_nav").find("li").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("acitve")){
				$(this).addClass("active").siblings().removeClass("active");
				tabBd.eq(i).show().siblings().hide();
			}
		});
	});
}
//login.js	注册提交
function submitForm(){
	$(".login_subbtn a").click(function(){
		var id = $("#log_name").val();
		var pwd = $("#log_pwd").val();
		$.post("login_ajax", { id:id, pwd:pwd}, function (data, textStatus){
			if(data == 11){
				console.log("ok");
			}else{
				console.log(data)
			}
		},"json");
	});
	$(".reg_subbtn a").click(function(){
		var id = $("#reg_name").val()
		   ,pwd = $("#reg_pwd").val()
		   ,re_pwd = $("#reg_repassword").val()
		   ,email = $("#email").val()
		   ,realname = $("#realname").val()
		   ,idcard = $("#idcard").val()
		   ,rcode = $("#vcode").val();
	});
};



//main.js	--input验证  ngClass错误提示图标 okClass正确提示图标 attElement信息提示容器
function inputValidate(obj,minlen,maxlen,type,equ){
	var obj_input = obj.find("input");
	var attElement = "em";
	var ngClass = "general_iptatt_ng";
	var okClass = "general_iptatt_ok";
	var msg;
	var minlenError=numError=valEque=valType=true;
	//错误提示信息
	var minLenthMsg = "长额度不能小于"+minlen+"位！";
	var maxLenthMsg = "长额度不能大于"+maxlen+"位！";
	var typeNumMsg = "必须是数字！";
	var reTypeMsg = "两次输入不一致！";
	var emailMsg = "邮箱格式错误！";
	var CHNMsg = "请输入真实姓名！";
	var idNumMsg = "请输入18位身份证号！如:320102198205201439";
	var uidTypeMsg = "用户名须以字母开头";
	var uidExistMsg = "用户名已存在";
	//绑定blur事件
	obj_input.blur(function(){
		validateLen();
		validateEque();
		validateType();
		labelErrorDetect();
		$(this).siblings("em").animate({"opacity":1});
		if($(this).val() == ""){
			$(this).siblings("label").fadeIn();
		}
	});
	obj_input.focus(function(){
		if($(this).val() == ""){
			$(this).siblings("label").fadeOut();
		}
	});
	//判断是否有错误
	function labelErrorDetect(){
		if(lenError && valEque && valType){
			obj.find(attElement).text("");
			addAttClass(true);
		}else{
			obj.find(attElement).text(msg);
			addAttClass(false);
		}
		obj.find(attElement).fadeIn("fast");
	}
	//修改提示效果
	function addAttClass(att){
		if(att){
			obj.find(attElement).removeClass(ngClass).addClass(okClass);
		}else{
			obj.find(attElement).removeClass(okClass).addClass(ngClass);
		}
	}
	//判断长度
	function validateLen(){
		var val = obj_input.val().length;
		if (val < minlen){
			msg = minLenthMsg;
			lenError = false;
		}else if(val > maxlen){
			msg = maxLenthMsg;
			lenError = false;
		}else{
			lenError = true;
		}
	}
	//判断2次输入是否相同
	function validateEque(){
		if(equ){
			var valSub = equ.find("input").val();
			var val = obj_input.val();
			if(valSub != val){
				msg = reTypeMsg;
				valEque = false;
			}else{
				valEque = true;
			}
		}else{
			valEque = true;
		}
	}
	function validateType(){
		var val = obj_input.val();
		switch(type){
			case "realname":
				var isCHN = /[^\u4e00-\u9fa5]/.test(val);
				if(isCHN){
					valType = false;
					msg = CHNMsg;
				}else{
					valType = true;
				}
			break;
			case "number":
				var isNum = /^[0-9]*$/.test(val);
				if(!isNum){
					valType = false;
					msg = typeNumMsg;
				}else{
					valType = true;
				}
			break;
			case "email":
				var isEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val);
				if(!isEmail){
					msg = emailMsg;
					valType = false;
				}else{
					valType = true;
				}
			break;
			case "idnumber":
				if(excuteIdNum()){
					valType = true;
				}else{
					valType = false;
					msg = idNumMsg;
				}
			break;
			case "uid":
				var isUid = /^[a-z]{1}[a-z0-9]{5,12}$/.test(val);
				if(isUid){
					if(valdUser(val)){
						valType = true;
					}else{
						valType = false;
						msg = uidExistMsg;
					}
				}else{
					valType = false;
					msg = uidTypeMsg;
				}
		}
	}
	//身份证验证函数
	function excuteIdNum(){
		var num = obj_input.val();
		var theCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "}
		num = num.toUpperCase(); 
		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
		if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))){		
			return false;
		}
		if(theCity[parseInt(num.substr(0,2))]==null)return false;
		
		var len, re; 
		len = num.length; 
		
		if (len == 18){
			re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/); 
			var arrSplit = num.match(re);
			var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]); 
	
			if (arrSplit[2] < 1900 || arrSplit[2] > new Date().getFullYear()) {
				return false;
			}
			var bGoodDay; 
			bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
	
			if (!bGoodDay) {
				return false;
			}else{
				return true;
				var valnum; 
				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
				var nTemp = 0, i; 
				for(i = 0; i < 17; i ++) { 
					nTemp += num.substr(i, 1) * arrInt[i]; 
				}
				valnum = arrCh[nTemp % 11];
				if (valnum != num.substr(17, 1)) { 
					return false; 
				} 
				return true;
			} 
		}
	}
};