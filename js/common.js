/*
* @Author: Crystallily
* @Date:   2017-06-03 10:44:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-16 14:15:50
*/
// 默认排序切换
$(function(){
	$(".wj_screen div").click(function(){
		if($(this).hasClass('active')){
			$(".sort_pop_fixed_op").toggle();
			$(".switch_part:eq( "+ $(this).index() +" )").toggle();
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			$(".sort_pop_fixed_op").show();
			$(".switch_part").hide();
			$(".switch_part:eq( "+ $(this).index() +" )").fadeIn(100);
		}
	});
	// 点击清空，删除
	// 点击更多，弹出删除和保存
	$(".fb_clear_btn").click(function(){
		$(".fd_fixed_box").toggle();
	});
	$(".fd_fixed_box .row_box").click(function(){
		$(".fd_fixed_box").hide();
	});
	// 我的圈子-点击下拉，出现，取消关注、屏蔽举报
	$('.ff_pop_gnBox').center();
	
	$(".each_user_row .right_icon").click(function(){
		$('.ff_pop_fixed_op').show();
		$('.ff_pop_gnBox').toggle();

		// $(this).parents('.ff_user_row').find('.ff_pop_gnBox').toggle();
	});
	$(".ff_pop_gnRow").click(function() {
		$(this).parent('.ff_pop_gnBox').hide();
		$(".ff_pop_fixed_op").hide();
	});
	// 用户圈子主页,点击更多弹出取消关注、屏蔽、举报
	$(".each_user_row .right_icon").click(function(){
		$(this).parents('.ff_user_row').find('.fg_pop_gnBox').toggle();
		
	});
	$(".fg_pop_gnRow").click(function() {
		$(this).parent('.fg_pop_gnBox').hide();
	});
	// 支付成功，选择支付方式
	$('.pay_way_row > .pay_way_row_c').click(function() {
		$(this).addClass('active').parent().siblings('').children('.pay_way_row_c').removeClass('active');
	});
	// 支付成功，商品是否损坏
	$('.is_damage_btn').click(function() {
		$(this).addClass('active').siblings('.is_damage_btn').removeClass('active');
	});
	$(".th_pop_main").center();
	$(".th_qh_close").click(function() {
		$(".th_pop_main").hide();
		$(".th_pop_bg").hide();
	});
	// 购物车的选择
	$('.check_goods').click(function() {
		if($(this).hasClass('checked')){
			$(this).removeClass('checked');
		}else{
			$(this).addClass('checked');
		}
		
	});
	$('.car_cheackAll').click(function() {
		if($(this).hasClass('all_checked')){
			$(this).removeClass('all_checked');
			$('.check_goods').removeClass('checked');
		}else{
			$(this).addClass('all_checked');
			$('.check_goods').addClass('checked');
		}
		
	});
	// 我的订单，切换
	$(".f_od_tab>div").click(function(event) {
		/* Act on the event */
		$(this).addClass('active').siblings().removeClass('active');
		
		$(this).parent().next(".switch_box").find(".switch_part:eq("+ $(this).index() +")").show().siblings().hide();
		return false;
	});
	// 我的优惠券-代金券,切换
	$(".f_coupon_tab_e").click(function(event) {
		/* Act on the event */
		$(this).addClass('active').siblings().removeClass('active');
		
		$(this).parent().next(".switch_box").find(".switch_part:eq("+ $(this).index() +")").show().siblings().hide();
		
	});
	// 动态登录的，输入框点击，提示消失
	$(".login_input").focus(function() {
		var txt_value = $(this).val();
		if(txt_value == this.defaultValue){
			$(this).val("");//清空文本框内容
		}
	});
	$(".login_input").blur(function() {
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val(this.defaultValue);//设置文本内容为默认
		}
	});
	// 宝宝信息-填写框
	$(".baby_info").blur(function() {
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val(this.defaultValue);//设置文本内容为默认
		}
	});
	$(".baby_info").blur(function() {
		var txt_value = $(this).val();
		if(txt_value == ""){
			$(this).val(this.defaultValue);//设置文本内容为默认
		}
	});
	// 选择宝宝性别
	$(".baby_icon").click(function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
})
