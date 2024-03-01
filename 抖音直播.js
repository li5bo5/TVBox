//添加播放源，删除图标
var rule = {
    title:'抖音直播',
    host:'https://live.douyin.com',
	//homeUrl:'/',
    homeUrl:'/?enter_from_merge=page_refresh',
    url:'/category/fyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter:{
		"Usual":[{"key":"cateId","name":"类型","value":[{"n":"炉石传说","v":"1_2_1_1010397"},{"n":"英雄联盟","v":"1_2_1_1010014"},{"n":"绝地求生","v":"1_1_1_1010026"},{"n":"和平精英","v":"1_1_1_1010032"},{"n":"LOL手游","v":"1_2_1_1010023"},{"n":"JJ斗地主","v":"1_4_1_1010004"}]}],
		
		"1_1":[{"key":"cateId","name":"类型","value":[{"n":"和平精英","v":"1_1_1_1010032"},{"n":"无畏契约","v":"1_1_1_1010017"},{"n":"穿越火线","v":"1_1_1_1010037"},{"n":"绝地求生","v":"1_1_1_1010026"},{"n":"CSGO","v":"1_1_1_1010003"},{"n":"暗区突围","v":"1_1_1_1010018"},{"n":"逃离塔科夫","v":"1_1_1_1010104"},{"n":"Apex英雄","v":"1_1_1_1010002"},{"n":"使命召唤","v":"1_1_1_1010329"}]}],
		
		"1_2":[{"key":"cateId","name":"类型","value":[{"n":"英雄联盟","v":"1_2_1_1010014"},{"n":"王者荣耀","v":"1_2_1_1010045"},{"n":"永劫无间","v":"1_2_1_1010016"},{"n":"金铲铲之战","v":"1_2_1_1010055"},{"n":"英雄联盟手游","v":"1_2_1_1010023"},{"n":"QQ飞车手游","v":"1_2_1_1010033"},{"n":"魔兽争霸3","v":"1_2_1_1010350"},{"n":"红色警戒2","v":"1_2_1_1010102"},{"n":"炉石传说","v":"1_2_1_1010397"}]}],
		
		"1_3":[{"key":"cateId","name":"类型","value":[{"n":"我的世界","v":"1_3_1_1010022"},{"n":"劲舞团","v":"1_3_1_1010625"}]}],
		
		"1_4":[{"key":"cateId","name":"类型","value":[{"n":"微乐斗地主","v":"1_4_1_1010714"},{"n":"JJ斗地主","v":"1_4_1_1010004"},{"n":"指尖四川麻将","v":"1_4_1_1010040"},{"n":"JJ象棋","v":"1_4_1_1010063"},{"n":"腾讯欢乐麻将","v":"1_4_1_1010059"}]}],
		
		"1_5":[{"key":"cateId","name":"类型","value":[{"n":"开心消消乐","v":"1_5_1_1010520"},{"n":"球球大作战","v":"1_5_1_1010010"},{"n":"贪吃蛇大作战","v":"1_5_1_1010056"}]}]
    },
    filter_def:{
		Usual:{cateId:'1_1_1_1010032'},
        1_1:{cateId:'1_1_1_1010026'},
        1_2:{cateId:'1_2_1_1010014'},
		1_3:{cateId:'TVgame'},
        1_4:{cateId:'yqk'},
        1_5:{cateId:'smkj'}
    },
	class_name:'推荐&射击游戏&竞技游戏&单机游戏&棋牌游戏&休闲益智',
	class_url:'Usual&1_1&1_2&1_3&1_4&1_5',
    // detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    detailUrl:'http://live.yj1211.work/api/live/getRoomInfo?uid=&platform=douyin&roomId=fyid',// JustLive
    searchUrl:'',
    searchable:1,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    推荐:'',
    一级:`js:
        let d = [];
        let jo = JSON.parse(request(input)).data.list;
        jo.forEach(it => {
            d.push({
                url: it.rid,
                title: it.roomName,
                img: it.roomSrc,
                desc: '👥' + it.hn + '　' + '👤' + it.nickname,
            })
        });
        setResult(d);
		`,
    二级:`js:
		var d = [];
		var jo = JSON.parse(request(input)).data;
		VOD = {
			vod_id: jo.roomId,
			vod_name: jo.roomName,
			vod_pic: jo.roomPic,
			type_name: jo.platForm.replace("douyu","斗鱼") + "·" + jo.categoryName,
            vod_director: jo.ownerName,
			vod_actor: jo.ownerName,
			vod_content:'房间号：' + jo.roomId + " ｜ " + '热度：' + jo.online + " ｜ " + '状态：' + (jo.isLive == 1 ? "正在直播":"未开播"),
			};
			var playurl = JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform=" + jo.platForm + "&roomId=" + jo.roomId)).data;
			Object.keys(playurl).forEach(function(key){
				if(/OD/.test(key)){
					d.push({
						title: 'JustLive',
						url:playurl[key]
						})}});
			d.push(
					{title: "斗鱼解析1",url: "http://epg.112114.xyz/douyu/" + jo.roomId }, 
					{title: "斗鱼解析2",url: "https://www.aois.eu.org/live/douyu/" + jo.roomId }, 
					{title: "斗鱼解析3",url: "https://www.goodiptv.club/douyu/" + jo.roomId}, 
					{title: "斗鱼解析4",url: "http://maomao.kandiantv.cn/douyu1.php?id=" + jo.roomId}
				  );
			VOD.vod_play_from = "播放源";
			VOD.vod_play_url = d.map(function(it) {
            return it.title + "$" + it.url
			}).join("#");
			setResult(d);
			`,
    搜索:'',
}
