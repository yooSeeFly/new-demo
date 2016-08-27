

			$(function(){
				//头部导航栏中的li被点击，改变其背景颜色为绿色，其余li均为蓝色背景
				$(".nav").find("li").on("click",function(){
					$(this).css({
						"background":"url(img/GreenIcon.png) no-repeat",
						"background-size":"cover",
						"overflow":"hidden"
					}).siblings().css({
						"background":"url(img/BlueIcon.png) no-repeat",
						"background-size":"cover",
						"overflow":"hidden"
					});
				});
			});
			
		$(document).ready(function(){
			
			//点击右边;按钮 隐藏泵列表对话框
			$("#hideList").click(function(){
				$("#pumpList1").fadeOut(500);
				$("#showList").show();
				$(this).hide();
			});
			//点击左边按钮 泵列表对话框显示
			$("#showList").click(function(){
				$("#pumpList1").fadeIn(500);
				$("#hideList").show();
				$(this).hide();
			});
			//在线状态被点击 只显示在线的 泵
			$(".green").click(function(){
				$(this).css("background-color","rgb(129,181,43)")
				.parent().siblings().children("i").css("background-color","#d4d4d4");
				$("li.online").show();
				$(".List ul li:not(.online)").hide();
				//$("li.warning").hide();
				
			});
			//只显示离线的泵
			$(".pink").click(function(){
				$(this).css("background-color","rgb(160,160,160)")
				.parent().siblings().children("i").css("background-color","#d4d4d4");
				$("li.offline").show();
				$(".List ul li:not(.offline)").hide();
				//$("li.online").hide();
				//$("li.warning").hide();
			});
			//显示所有泵的没状态
			$(".blue").click(function(){
				$(this).css("background-color","rgb(76,182,249)")
				.parent().siblings().children("i").css("background-color","#d4d4d4");
				$("li.listItem").show();
			});
			//点击修改密码  弹出密码修改框
			$(".userDataSet").find("p").children("span").first().click(function(){
				$(".userDataSet").hide();
				$(".changePsd").show();
			});

			$(".changePsd").find("div").children("div").last().click(function(){
				$(".changePsd").hide();
				$(".userDataSet").fadeIn(300);
			});
			
			//$(".timeLineExitBtn").click(function(){
				//$(".Time").slideToggle(50);
			//	$(".timeLineOpen").show();
			//});
			$(".timeLineOpen").click(function(){
				$(".Time").slideToggle(50);
				//$(this).hide();
			});
			
			$(".defaultContainer,.select .triangle").click(function(){
			$(this).siblings(".dropDownMenu").show();
			//$(this).css({"border-top":"5px solid transparent","border-bottom":"10px solid rgb(27,107,161)"})
		});
  
		$(".dropDownMenu li").click(function(){
			$(this).parent().siblings(".defaultContainer").html($(this).html());
			$(this).parent().hide();
		});
//		$(".changePsdExit").click(function(){
//			
//		});
//		$('.setupfoldIco').click(function(){ 
//			$(this).children().css({
//				"background":"url(img/setupUnfoldIcon.png) no-repeat",
//				"background-size":"100%"});
//			$(this).next().toggle('normal');
//		
//		 		
//		}); 
		$(".info-list").hide();
		$('.setupfoldIco').click(function(){
			$(this).next().slideDown();
			//给dt添加一个类info-show
			$(this).parent('.setupListItem').addClass("info-show");
			//除了被点击的标题外其他的标题下的ul二级列表均隐藏,同时被隐藏的子元素li的背景变为none
			//$(".setfoldIco").not(this).next().slideUp();
			$(this).parent('.setupListItem').siblings().children('.info-list').slideUp().children('li').css("background","none");
			//移除除被点击标题外的所有标题父元素的info-show
			//$(".setupfoldIco").not(this).parent(".setupListItem").removeClass("info-show");
			$(this).parent('.setupListItem').siblings().removeClass('info-show');
		});
		$('.info-list').children('li').click(function(){
			$(this).css("background","rgb(20,100,134)").siblings().css("background","none");
		});
		$('.scrollUp').click(function(){
			var t=$('.left-list').first().scrollTop();
			$('.left-list').first().scrollTop(t-20);
		});
		$('.scrollDown').click(function(){
			var t=$('.left-list').first().scrollTop();
			$('.left-list').first().scrollTop(t+20);
		});
//		$('.scrollTableUp').click(function(){
//			var y=$('.tableName').first().scrollTop();
//			$('.tableName').first().scrollTop(y-20);
//		});
//		$('.scrollTableDown').click(function(){
//			var y=$('.tableName').first().scrollTop();
//			$('.tableName').first().scrollTop(y+20);
//		});
	});
