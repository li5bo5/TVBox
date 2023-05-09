// 地址发布页 https://www.dmys.tv/
muban.mxpro.二级.desc = '.module-info-item:(3)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.img = '.lazyload&&src';
var rule = {
	title:'大米星球',
	模板:'mxpro',
	host:'https://www.dmxq.fun',
	// url:'/vodshow/fyclass--------fypage---/pjax/YES.html',
	url:'/vodshow/fyclassfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}',
	filter: {
		"35":[{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
	},
	class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',

	// searchUrl:'/vodsearch/**----------fypage---/pjax/NO.html',
	searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	搜索:'json:list;name;pic;;id',
}
