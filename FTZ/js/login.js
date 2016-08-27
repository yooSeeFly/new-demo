//$(function(){
//	
////	
//$(".loginWarning").click(function(){
//	alert("hello");
//});
//});
//$(window).load(function(){
//	
//});
$(function(){
//		$("#loginWarning").mouseover(function(){
//			$("#hint").show().css({
//				top:$('.#loginWarning').offset().top+$("#loginWarning").width(),
//				left:$('.#oginWarning').offset().left,
//				position:'absolute'
//			});
//		});	
	
	var Warning=$(".loginWarning");
	var Set=$(".loginSet");
	var DataAnalysis=$(".loginDataAnalysis");
	var FailureRecovery=$(".loginFailureRecovery");
	var RemoteControl=$(".loginRemoteControl");
	var hint=$(".hint");
	Warning.mouseover(function(){
		hint.show().css({
			top:Warning.offset().top,
			left:Warning.offset().left+Warning.width()+5,
			position:"absolute",
			
		}).text("报警信息");
	}).mouseout(function(){
		hint.hide()
		});
		
	Set.mouseover(function(){
		hint.show().css({
			top:Set.offset().top,
			left:Set.offset().left-Set.width()-30,
			position:"absolute",
			
		}).text("基本设置");
	}).mouseout(function(){
		hint.hide()
		});
		
	DataAnalysis.mouseover(function(){
		hint.show().css({
			top:DataAnalysis.offset().top,
			left:DataAnalysis.offset().left+DataAnalysis.width()+5,
			position:"absolute",
			
		}).text("数据分析");
	}).mouseout(function(){
		hint.hide()
		});
		
		FailureRecovery.mouseover(function(){
		hint.show().css({
			top:FailureRecovery.offset().top,
			left:FailureRecovery.offset().left-FailureRecovery.width()-30,
			position:"absolute",
			
		}).text("故障巡检");
	}).mouseout(function(){
		hint.hide()
		});
		
		RemoteControl.mouseover(function(){
		hint.show().css({
			top:RemoteControl.offset().top,
			left:RemoteControl.offset().left+RemoteControl.width()+5,
			position:"absolute",
			
		}).text("远程控制");
	}).mouseout(function(){
		hint.hide()
		});
});