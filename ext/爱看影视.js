// 一级筛选数字验证
// 搜索数字验证
muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.tab-item';
var rule={
    title:'爱看',
    模板:'mxpro',
    host:'https://ikanys.tv',
    url:'/vodtype/fyclass/',
    class_parse: '.navbar-items&&li;a&&title;a&&href;/(\\d+)/',
    pagecount:{"1":1,"2":1,"3":1,"4":1,"15":1,"16":1,"14":1,"20":1},

    searchUrl:'/index.php/ajax/suggest?mid=1&wd=**',
    detailUrl:'/voddetail/fyid/', //非必填,二级详情拼接链接
    搜索:'json:list;name;pic;;id',
}