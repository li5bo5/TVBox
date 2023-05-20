// 搜索功能需登录使用
var rule = {
    title: 'JustLive',
    host: 'http://live.yj1211.work',
    // homeUrl: '/api/live/getRecommend?page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    homeUrl: '/api/live/getRecommendByPlatformArea?platform=douyu&area=炉石传说&page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    url: '/api/live/getRecommendByPlatformArea?platform=fyclass&area=fyfilter&page=fypage&size=20', //网站的分类页面链接
    class_name: '斗鱼&虎牙&哔哩',
    class_url: 'douyu&huya&bilibili',
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter: {
        "douyu":[{"key":"area","name":"分区","value":[{"n":"英雄联盟","v":"英雄联盟"},{"n":"炉石传说","v":"炉石传说"},{"n":"LOL手游","v":"LOL手游"},{"n":"和平精英","v":"和平精英"},{"n":"绝地求生","v":"热门游戏"},{"n":"JJ斗地主","v":"JJ斗地主"},{"n":"纪录片","v":"纪录片"}]}],
        "huya":[{"key":"area","name":"分区","value":[{"n":"炉石传说","v":"炉石传说"},{"n":"炉石战棋","v":"炉石战棋"},{"n":"英雄联盟","v":"英雄联盟"},{"n":"英雄联盟手游","v":"英雄联盟手游"},{"n":"绝地求生","v":"天天吃鸡"}]}],
        "bilibili":[{"key":"area","name":"分区","value":[{"n":"游戏赛事","v":"游戏赛事"}]}]
		
		},
    filter_def:{
        douyu:{area:'英雄联盟'},
        huya:{area:'英雄联盟'},
        bilibili:{area:'游戏赛事'}
		
    },
    // detailUrl: '/index/liveRoom?platform=fyclass&roomId=fyid',//二级详情拼接链接(json格式用)
    detailUrl: '/api/live/getRoomInfo?uid=&platform=fyclass&roomId=fyid',//二级详情拼接链接(json格式用)
    searchUrl: '/api/live/search?platform=all&keyWords=**&isLive=0',
    // searchable: 2,
    searchable: 0,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '*',
    一级: 'json:data;roomName;roomPic;ownerName;roomId',
    // 二级: 'js:var d=[];var jo=JSON.parse(request(input)).data;VOD={vod_id:jo.roomId,vod_name:jo.roomName,vod_pic:jo.roomPic,type_name:jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"."+jo.categoryName,vod_content:"🏷分区："+jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"·"+jo.categoryName+" 🏷UP主："+jo.ownerName+" 🏷人气："+jo.online+(jo.isLive===1?" 🏷状态：正在直播":"状态：未开播")};var playurl=JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform="+jo.platForm+"&roomId="+jo.roomId)).data;var name={"OD":"原画","FD":"流畅","LD":"标清","SD":"高清","HD":"超清","2K":"2K","4K":"4K","FHD":"全高清","XLD":"极速","SQ":"普通音质","HQ":"高音质"};Object.keys(playurl).forEach(function(key){if(!/ayyuid|to/.test(key)){d.push({title:name[key],url:playurl[key]})}});VOD.vod_play_from="选择画质";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d)',
    二级: 'js:var d=[];input=/platform=&/.test(input)?input.replace("platform=","platform=bilibili"):input;var jo=JSON.parse(request(input)).data;VOD={vod_id:jo.roomId,vod_name:jo.roomName,vod_pic:jo.roomPic,type_name:jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"."+jo.categoryName,vod_content:"🏷分区："+jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"·"+jo.categoryName+" 🏷UP主："+jo.ownerName+" 🏷人气："+jo.online+(jo.isLive===1?" 🏷状态：正在直播":"状态：未开播")};var playurl=JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform="+jo.platForm+"&roomId="+jo.roomId)).data;var name={"OD":"原画","FD":"流畅","LD":"标清","SD":"高清","HD":"超清","2K":"2K","4K":"4K","FHD":"全高清","XLD":"极速","SQ":"普通音质","HQ":"高音质"};Object.keys(playurl).forEach(function(key){if(!/ayyuid|to/.test(key)){d.push({title:name[key],url:playurl[key]})}});VOD.vod_play_from="选择画质";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d)',
    搜索: '*',
}