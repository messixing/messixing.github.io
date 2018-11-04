/*
 * @Author: xingwei
 * @Date:   2018-11-04 13:46:46
 * @Last Modified by:   xingwei
 * @Last Modified time: 2018-11-04 14:04:10
 */
jQuery(document).ready(function($) {
	var hearderhtml = '<div data-header="sticky" data-header-top="200" data-canvas="container" class="l-theme animated-css">' +
		'<div class="header-search open-search"><div class="container">' +
		'<div class="row"><div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">' +
		'<div class="navbar-search"><form class="search-global">' +
		'<input type="text" placeholder="请输入关键字" autocomplete="off" name="s" value="" class="search-global__input"/>' +
		'<button class="search-global__btn"><i class="icon stroke icon-Search"></i></button>' +
		'<div class="search-global__note">请输入您想搜索的文字或者句子</div>' +
		'</form></div></div></div></div><button type="button" class="search-close close"><i class="fa fa-times"></i></button>' +
		'</div><div data-off-canvas="mobile-slidebar left overlay">' +
		'<ul class="nav navbar-nav"><li><a href="home.html" >首页</a></li>' +
		'<li><a href="blog-main.html">资讯信息</a></li>' +
		'<li><a href="home.html">测评项目</a></li>' +
		'<li><a href="about.html">技术服务</a></li>' +
		'<li><a href="blog-main.html">学术研究</a></li>' +
		'<li><a href="contact.html">专业资源</a></li>' +
		'<li><a href="contact.html">关于我们</a></li>' +
		'</ul></div>' +
		'<div class="wrap-fixed-menu" id="fixedMenu">' +
		'<nav class="fullscreen-center-menu">' +
		'<div class="menu-main-menu-container"> ' +
		'<ul class="nav navbar-nav">' +
		'<li><a href="home.html" >首页</a></li>' +
		'<li><a href="blog-main.html">案例展示</a></li>' +
		'<li><a href="home.html">评价服务</a></li>' +
		'<li><a href="kaoshifuwu.html">考试服务</a></li>' +
		'<li><a href="blog-main.html">资讯动态</a></li>' +
		'<li><a href="contact.html">关于我们</a></li>' +
		'<li><a href="shiyanshi.html">实验室</a></li>' +
		'</ul></div></nav><button type="button" class="fullmenu-close"><i class="fa fa-times"></i></button></div>' +
		'<header class="header header-boxed-width header-background-trans header-logo-black header-topbarbox-1-left header-topbarbox-2-right header-navibox-1-left header-navibox-2-right header-navibox-3-right header-navibox-4-right">' +
		'<div class="top-bar">' +
		'<div class="container container-boxed-width">' +
		'<div class="container">' +
		'<div class="header-topbarbox-1">' +
		'<ul class="top-bar-contact">' +
		'<li class="top-bar-contact__item"><i class="icon icon-call-in"></i> 400-800-8888</li>' +
		'<li class="top-bar-contact__item"><i class="icon icon-envelope-open"></i> youxiao@youxiao.com</li>' +
		'<li class="top-bar-contact__item"><i class="icon icon-clock"></i> Mon – Fri  9.00 am – 6.00 pm</li>' +
		'</ul>' +
		'</div>' +
		'<div class="header-topbarbox-2">' +
		'<ul class="social-net list-inline">' +
		'<li class="social-net__item"><a href="twitter.com" class="social-net__link text-primary_h"><i class="icon fa fa-twitter"></i></a></li>' +
		'<li class="social-net__item"><a href="facebook.com" class="social-net__link text-primary_h"><i class="icon fa fa-facebook"></i></a></li>' +
		'<li class="social-net__item"><a href="plus.google.com" class="social-net__link text-primary_h"><i class="icon fa fa-google-plus"></i></a></li>' +
		'<li class="social-net__item"><a href="linkedin.com" class="social-net__link text-primary_h"><i class="icon fa fa-linkedin"></i></a></li>' +
		'</ul></div></div></div></div>' +
		'<div class="container container-boxed-width">' +
		'<nav id="nav" class="navbar">' +
		'<div class="container">' +
		'<div class="header-navibox-1">' +
		'<button class="menu-mobile-button visible-xs-block js-toggle-mobile-slidebar toggle-menu-button"><i class="toggle-menu-button-icon"><span></span><span></span><span></span><span></span><span></span><span></span></i></button>' +
		'<a href="index.html" class="navbar-brand scroll"><img src="assets/media/general/logo.png" alt="logo" class="normal-logo"/><img src="assets/media/general/logo-dark.png" alt="logo" class="scroll-logo hidden-xs"/></a></div><div class="header-navibox-3"><ul class="nav navbar-nav hidden-xs clearfix vcenter"><li><button class="js-toggle-screen toggle-menu-button"><i class="toggle-menu-button-icon"><span></span><span></span><span></span><span></span><span></span><span></span></i></button></li><li><a href="#" class="btn_header_search"><i class="fa fa-search"></i></a></li></ul></div><div class="header-navibox-2"><ul class="yamm main-menu nav navbar-nav"><li class="dropdown"><a href="index.html">首页</a></li><li><a href="anlizhanshi.html">案例展示</a></li><li class="dropdown"><a href="###">评价服务<b class="caret"></b></a><ul role="menu" class="dropdown-menu"><li><a href="jiaoyupinggu.html" >教育评估服务</a></li><li><a href="jiaoyupeixun.html" >教育培训服务</a></li><li><a href="pingjiaxitongkaifa.html" >评价系统开发</a></li></ul></li><li><a href="kaoshifuwu.html">考试服务</a></li><li class="dropdown"><a href="###">资讯动态<b class="caret"></b></a><ul role="menu" class="dropdown-menu"><li><a href="hangyedongtai.html" >行业动态</a></li><li><a href="yulunjiaodian.html" >舆论焦点</a></li><li><a href="zhengcefagui.html" >政策法规</a></li></ul></li><li class="dropdown"><a href="###">关于我们<b class="caret"></b></a><ul role="menu" class="dropdown-menu"><li><a href="aboutus.html" >中教优效介绍</a></li><li><a href="contact.html" >联系我们</a></li></ul></li><li class="dropdown"><a href="shiyanshi.html">实验室</a></li></ul></div></div></nav></div></header>'

	$("#main-slider").before(hearderhtml);
});