
var rule = {
    title:'虎牙直播',
    host:'https://www.huya.com',
    homeUrl:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=2135&tagAll=0&page=1',//用于"分类获取"和"推荐获取"
    url:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=fyfilter&tagAll=0&page=fypage',
    class_name:'网游&单机&手游&娱乐',
    class_url:'1&2&3&8',
    detailUrl:'http://live.yj1211.work/api/live/getRoomInfo?uid=&platform=huya&roomId=fyid',//二级详情拼接链接(json格式用)
    filterable: 1,
    filter_url: '{{fl.cateId}}',
    filter_def:{
        1:{cateId:'393'},
        2:{cateId:'7601'},
        3:{cateId:'2336'},
		8:{cateId:'2135'}
    },
    filter:{
        "1":[{"key":"cateId","name":"分类","value":[{"n":"炉石传说","v":"393"},{"n":"英雄联盟","v":"1"},{"n":"绝地求生","v":"2793"},{"n":"lol云顶之弈","v":"5485"},{"n":"穿越火线","v":"4"},{"n":"暴雪专区","v":"100043"},{"n":"地下城与勇士","v":"2"},{"n":"魔兽世界","v":"8"},{"n":"DOTA2","v":"7"},{"n":"CS:GO","v":"862"},{"n":"CFHD","v":"6079"},{"n":"DOTA1","v":"6"},{"n":"QQ飞车","v":"9"},{"n":"魔兽争霸3","v":"4615"},{"n":"网游竞技","v":"100023"},{"n":"射击综合游戏","v":"100141"},{"n":"体育游戏","v":"100135"},{"n":"反恐精英Online","v":"1918"},{"n":"NBA2KOL系列","v":"3959"},{"n":"星际争霸","v":"5"},{"n":"跑跑卡丁车","v":"162"},{"n":"剑网3","v":"900"},{"n":"反恐精英","v":"863"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"Dread Hunger","v":"7601"},{"n":"永劫无间","v":"6219"},{"n":"主机游戏","v":"100032"},{"n":"我的世界","v":"1732"},{"n":"方舟","v":"1997"},{"n":"单机热游","v":"100002"},{"n":"Apex英雄","v":"5011"},{"n":"逃离塔科夫","v":"3493"},{"n":"怀旧游戏","v":"100125"},{"n":"糖豆人：终极淘汰赛","v":"6083"},{"n":"育碧游戏","v":"100139"},{"n":"使命召唤系列","v":"100137"},{"n":"都市：天际线","v":"2201"},{"n":"任天堂专区","v":"100087"},{"n":"其他单机","v":"3069"},{"n":"微软模拟飞行2020","v":"6099"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"英雄联盟手游","v":"6203"},{"n":"和平精英","v":"3203"},{"n":"金铲铲之战","v":"7185"},{"n":"王者荣耀","v":"2336"},{"n":"英雄联盟电竞经理","v":"7177"},{"n":"综合手游","v":"100029"},{"n":"新游广场","v":"100052"},{"n":"CF手游","v":"2413"},{"n":"欢乐麻将","v":"1751"},{"n":"中国象棋","v":"1671"},{"n":"三国杀","v":"1669"},{"n":"欢乐斗地主","v":"1749"},{"n":"手游休闲","v":"100004"},{"n":"棋牌桌游","v":"100036"},{"n":"狼人杀手游","v":"100049"},{"n":"球球大作战","v":"2411"},{"n":"DNF手游","v":"4921"},{"n":"狼人杀","v":"2785"},{"n":"天天吃鸡手机版","v":"4341"},{"n":"红警OL","v":"4413"},{"n":"腾讯桌球","v":"2444"},{"n":"虎牙吃鸡","v":"7465"}] }],
        "8":[{"key":"cateId","name":"分类","value":[{"n":"一起看","v":"2135"},{"n":"旅游","v":"6791"},{"n":"放映厅","v":"6245"},{"n":"原创","v":"6861"},{"n":"体育","v":"2356"},{"n":"虎牙文化","v":"4089"},{"n":"音乐","v":"3793"},{"n":"趣分享","v":"5883"},{"n":"科技","v":"2408"}]}]

    },
    searchUrl:'https://search.cdn.huya.com/?m=Search&do=getSearchContent&q=**&uid=0&v=4&typ=-5&livestate=0&rows=40&start=0',
    searchable:0,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:'',
    lazy:`js:
        if (/m\\.huya/.test(input)) {
            rule.sniffer = 0
        }
    `,
    推荐:`js:
        let d = [];
        let jo = JSON.parse(request(input)).data.datas;
        jo.forEach(it => {
                d.push({
                    url: it.profileRoom,
                    title: it.introduction,
                    img: it.screenshot,
                    desc: '👥' + it.totalCount + ' 👤' + it.nick,
                })
        });
        setResult(d);
    `,
    一级:`js:
        let d = [];
        let jo = JSON.parse(request(input)).data.datas;
        jo.forEach(it => {
                d.push({
                    url: it.profileRoom,
                    title: it.introduction,
                    img: it.screenshot,
                    desc: '👥' + it.totalCount + ' 👤' + it.nick,
                })
        });
        setResult(d);
    `,
    二级: `js:
        try {
            if (typeof play_url === "undefined") {
                var play_url = ""
            }
            var jo = JSON.parse(request(input)).data;
            VOD = {
                vod_id: jo.roomId,
                vod_name: jo.roomName,
                vod_pic: jo.roomPic,
                type_name: jo.categoryName,
                vod_director: jo.ownerName,
                vod_content: "房间号：" + jo.roomId +" ｜ "+ "热度：" + jo.online + " ｜ " + "状态：" + (jo.isLive === 1 ? "正在直播":"未开播")
            };
            let episodes = JSON.parse(request("http://live.yj1211.work/api/live/getRealUrlMultiSource?platform=" + jo.platForm + "&roomId=" + jo.roomId)).data; //多线路
            if (Object.keys(episodes).length !== 0) {
                let playFrom = [];
                let playList = [];
                let kplayList = [];
                Object.keys(episodes).forEach(function(key) {
                    playFrom.append(key);
                    kplayList = episodes[key].map(function(it) {
                        let title = it.qualityName;
                        let playUrl = it.playUrl
                        return title + "$" + play_url + urlencode(playUrl)
                    }).join("#")
                    playList.append(kplayList);
                });
                let vod_play_from = playFrom.join("$$$");
                let vod_play_url = playList.join("$$$");
                VOD["vod_play_from"] = vod_play_from;
                VOD["vod_play_url"] = vod_play_url;
            } else {
                var d = [];
                episodes = JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform=" + jo.platForm + "&roomId=" + jo.roomId)).data; //单线路
                var name = {
                    "OD": "原画",
                    "FD": "流畅",
                    "LD": "标清",
                    "SD": "高清",
                    "HD": "超清",
                    "2K": "2K",
                    "4K": "4K",
                    "FHD": "全高清",
                    "XLD": "极速",
                    "SQ": "普通音质",
                    "HQ": "高音质"
                };
                Object.keys(episodes).forEach(function(key) {
                    if (!/ayyuid|to/.test(key)) {
                        d.push({
                            title: name[key],
                            url: episodes[key]
                        })
                    }
                });
                d.push(
                    {
                        title: "虎牙解析",
                        url: "http://cfss.cc/cdn/hy/" + jo.roomId + ".flv"
                    },
                    {
                        title: "解析1",
                        url: "http://epg.112114.xyz/huya/" + jo.roomId
                    },
                    {
                        title: "解析2",
                        url: "https://www.aois.eu.org/live/huya/" + jo.roomId
                    },
                    {
                        title: "解析3",
                        url: "https://www.goodiptv.club/huya/" + jo.roomId
                    },
                    {
                        title: "解析4",
                        url: "http://43.138.170.29:35455/huya/" + jo.roomId
                    },
                    {
                        title: "解析5",
                        url: "http://8.210.232.168/php/huya.php?id=" + jo.roomId
                    },
                    {
                        title: "原址嗅探",
                        url: "https://m.huya.com/" + jo.roomId
                    },
                );
                VOD["vod_play_from"] = "播放源";
                VOD["vod_play_url"] = d.map(function(it) {
                    return it.title + "$" + it.url
                }).join("#");
                setResult(d);
            }
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
    `,
    // 搜索:'json:response.3.docs;game_roomName;game_screenshot;game_nick;room_id',
    搜索: `js:
        var d = [];
        let jo = JSON.parse(request(input)).response[3].docs;
        jo.forEach(it => {
            d.push({
                url: it.room_id,
                title: it.game_roomName,
                img: it.game_screenshot,
                desc: '👥' + it.game_total_count + ' 👤' + it.game_nick,
            })
        });
        setResult(d);
    `,

    //是否启用辅助嗅探: 1,0
    sniffer:1,
    // 辅助嗅探规则js写法
    isVideo: `js:
        log(input);
        if(/\\/huya/.test(input)) {
            input = true
        } else if(/\\.flv?|\\.m3u8?|\\.mp4?/.test(input)){
            input = true
        }else{
            input = false
        }
    `,
}
