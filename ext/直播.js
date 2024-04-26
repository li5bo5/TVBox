//添加播放源，删除图标
var rule = {
    title:'斗鱼直播',
    host:'https://m.douyu.com',
    homeUrl:'/api/home/mix',
    url:'/api/room/list?page=fypage&type=fyfilter',
    filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter:{},
	filter_def:{
		How:{cateId:'How'},
		LOL:{cateId:'LOL'},
		rmyx:{cateId:'rmyx'},
		hpjy:{cateId:'hpjy'},
		LOLM:{cateId:'LOLM'},
		jj:{cateId:'jj'}
    },
	class_name:'炉石传说&英雄联盟&热门游戏&和平精英&LOL手游&JJ斗地主',
	class_url:'How&LOL&rmyx&hpjy&LOLM&jj',
    // detailUrl:'/fyid',//二级详情拼接链接(json格式用)
    detailUrl: 'http://live.yj1211.work/api/live/getRoomInfo?uid=&platform=douyu&roomId=fyid',// JustLive
    searchUrl:'/api/search/liveRoom?#did=10000000000000000000000000001501&limit=20&offset=0&sk=**;post',
    searchable:1,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    推荐:`js:
        let d = [];
        let jo = JSON.parse(request(input)).data;
        jo.forEach((it,idex) => {
            let slist = jo[idex].list ;
            slist.forEach(it => {
                d.push({
                    url: it.rid,
                    title: it.roomName,
                    img: it.roomSrc,
                    desc: '👥' + it.hn + '　' + '👤' + it.nickname,
                })
            });
        });
        setResult(d);
    `,
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
					{title: "斗鱼解析1",url: "http://43.138.170.29:35455/douyu/" + jo.roomId },
					{title: "斗鱼解析2",url: "https://www.aois.eu.org/live/douyu/" + jo.roomId }, 
					{title: "斗鱼解析3",url: "https://www.goodiptv.club/douyu/" + jo.roomId}
				  );
			VOD.vod_play_from = "播放源";
			VOD.vod_play_url = d.map(function(it) {
            return it.title + "$" + it.url
			}).join("#");
			setResult(d);
			`,
    搜索:'json:data.list;roomName;roomSrc;nickname;roomId',
}
