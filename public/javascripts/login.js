$(function(){
	regAndLogin();
	submitForm();
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
};