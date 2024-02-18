// 搜索功能需登录使用
var rule = {
    title: 'JustLive',
    host: 'http://live.yj1211.work',
    // homeUrl: '/api/live/getRecommend?page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    homeUrl: '/api/live/getRecommendByPlatformArea?platform=bilibili&area=舞见&page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    url: '/api/live/getRecommendByPlatformArea?platform=fyclass&area=fyfilter&page=fypage&size=20', //网站的分类页面链接
    class_name: '斗鱼&虎牙&哔哩&网易&抖音',
    class_url: 'douyu&huya&bilibili&cc&douyin',
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter: {
        "douyu": [{"key": "area","name": "分区","value": [{"n": "原创IP","v": "原创IP"},{"n": "一起看","v": "一起看"},{"n": "二次元","v": "二次元"},{"n": "音乐","v": "音乐"},{"n": "户外","v": "户外"},{"n": "美食","v": "美食"},{"n": "心动派对","v": "心动派对"},{"n": "音遇恋人","v": "音遇恋人"},{"n": "星秀","v": "星秀"},{"n": "心动FM","v": "心动FM"},{"n": "娱乐推荐","v": "娱乐推荐"},{"n": "新选","v": "新选"},{"n": "颜值","v": "颜值"},{"n": "数码科技","v": "数码科技"},{"n": "纪录片","v": "纪录片"},{"n": "成年教育","v": "成年教育"},{"n": "人文社科","v": "人文社科"},{"n": "派对","v": "派对"},{"n": "心动FM.","v": "心动FM."},{"n": "一起玩","v": "一起玩"},{"n": "语音交友","v": "语音交友"},{"n": "音乐之声","v": "音乐之声"},{"n": "连麦互动","v": "连麦互动"},{"n": "娱乐开黑","v": "娱乐开黑"},{"n": "正能量","v": "正能量"},{"n": "英雄联盟","v": "英雄联盟"},{"n": "热门游戏","v": "热门游戏"},{"n": "穿越火线","v": "穿越火线"},{"n": "重生边缘","v": "重生边缘"},{"n": "无畏契约","v": "无畏契约"},{"n": "CFHD","v": "CFHD"},{"n": "命运方舟","v": "命运方舟"},{"n": "DNF","v": "DNF"},{"n": "DOTA2","v": "DOTA2"},{"n": "使命召唤","v": "使命召唤"},{"n": "炉石传说","v": "炉石传说"},{"n": "社交互动游戏","v": "社交互动游戏"},{"n": "幻兽帕鲁","v": "幻兽帕鲁"}]}],
        "huya": [{"key": "area","name": "分区","value": [{"n": "一起看","v": "一起看"},{"n": "放映厅","v": "放映厅"},{"n": "星秀","v": "星秀"},{"n": "户外","v": "户外"},{"n": "二次元","v": "二次元"},{"n": "虚拟偶像","v": "虚拟偶像"},{"n": "旅游","v": "旅游"},{"n": "娱乐天地","v": "娱乐天地"},{"n": "交友","v": "交友"},{"n": "组队","v": "组队"},{"n": "吃喝玩乐","v": "吃喝玩乐"},{"n": "原创","v": "原创"},{"n": "虎牙文化","v": "虎牙文化"},{"n": "体育","v": "体育"},{"n": "虎牙地方","v": "虎牙地方"},{"n": "颜值","v": "颜值"},{"n": "音乐","v": "音乐"},{"n": "趣分享","v": "趣分享"},{"n": "一起买","v": "一起买"},{"n": "科技","v": "科技"},{"n": "英雄联盟","v": "英雄联盟"},{"n": "CS2","v": "CS2"},{"n": "穿越火线","v": "穿越火线"},{"n": "lol云顶之弈","v": "lol云顶之弈"},{"n": "无畏契约","v": "无畏契约"},{"n": "从军","v": "从军"},{"n": "CFHD","v": "CFHD"},{"n": "逆战","v": "逆战"},{"n": "炉石传说","v": "炉石传说"}]}],
        "bilibili":[{"key": "area","name": "分区","value": [{"n":"电子榨菜","v":"电子榨菜"},{"n":"生活分享","v":"生活分享"},{"n":"手工绘画","v":"手工绘画"},{"n":"户外","v":"户外"},{"n":"时尚","v":"时尚"},{"n":"沉浸体验","v":"沉浸体验"},{"n":"视频唱见","v":"视频唱见"},{"n":"舞见","v":"舞见"},{"n":"颜值","v":"颜值"},{"n":"脱口秀","v":"脱口秀"},{"n": "游戏赛事","v": "游戏赛事"},{"n": "体育赛事","v": "体育赛事"},{"n": "赛事综合","v": "赛事综合"},{"n": "热门帮玩","v": "热门帮玩"},{"n": "手游帮玩","v": "手游帮玩"}]}],
        "cc":[{"key":"area","name":"分区","value":[{"n":"星秀","v":"星秀"},{"n":"二次元","v":"二次元"},{"n":"风华正茂","v":"风华正茂"},{"n":"正能量","v":"正能量"},{"n":"古风国色","v":"古风国色"},{"n":"巨好看","v":"巨好看"}]}],
        "douyin":[{"key":"area","name":"分区","value":[{"n":"全部","v":"全部"},{"n":"魔兽世界","v":"魔兽世界"},{"n":"永劫无间","v":"永劫无间"},{"n":"横版格斗","v":"横版格斗"},{"n":"拳皇系列","v":"拳皇系列"},{"n":"我的世界","v":"我的世界"},{"n":"魔兽争霸3","v":"魔兽争霸3"},{"n":"迷你世界","v":"迷你世界"},{"n":"糖豆人","v":"糖豆人"},{"n":"其他主机游戏","v":"其他主机游戏"},{"n":"星际争霸","v":"星际争霸"},{"n":"精灵宝可梦 剑/盾","v":"精灵宝可梦 剑/盾"},{"n":"斗地主","v":"斗地主"},{"n":"麻将","v":"麻将"},{"n":"象棋","v":"象棋"},{"n":"其他棋牌游戏","v":"其他棋牌游戏"},{"n":"最强的大脑","v":"最强的大脑"},{"n":"射击游戏","v":"射击游戏"},{"n":"吃鸡手游","v":"吃鸡手游"},{"n":"炉石传说","v":"炉石传说"},{"n":"运动","v":"运动"},{"n":"音乐","v":"音乐"},{"n":"人文艺术","v":"人文艺术"}]}]
    },
    filter_def:{
        douyu:{area:'原创IP'},
        huya:{area:'一起看'},
        bilibili:{area:'电子榨菜'},
        cc:{area:'星秀'},
        douyin:{area:'全部'}
    },
    // detailUrl: '/index/liveRoom?platform=fyclass&roomId=fyid',
    // detailUrl: '/api/live/getRoomInfo?uid=&platform=fyclass&roomId=fyid',
    detailUrl: 'fyid',
    searchUrl: '/api/live/search?platform=all&keyWords=**&isLive=0',
    // searchable: 2,
    searchable: 0,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    play_parse: true,
    lazy:`js:
        let purl = input.split("|")[0];
        let pfrom = input.split("|")[1];
        let cid = input.split("|")[2];
        print("purl:" + purl);
        print("pfrom:" + pfrom);
        print("cid:" + cid);
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + cid;
        if (/bilibili/.test(pfrom)){
            let result = {};
            result['parse'] = 0;
            result['playUrl'] = '';
            result['url'] = unescape(purl);
            result['header'] = {
                Referer: 'https://live.bilibili.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
            };
            result['danmaku'] = dan;
            if (/h5/.test(purl)) {
                result['contentType'] = '';
                input = result
            } else {
                result['contentType'] = 'video/x-flv';
                input = result
            }
        } else {
            input = purl
        }
    `,
    limit: 6,
    推荐: `js:
        var d = [];
        var html = JSON.parse(request(input)).data;
        html.forEach(it => {
            d.push({
                title: it.roomName,
                desc: '👁' + it.online + '  🆙' + it.ownerName,
                pic_url: it.roomPic,
                url: it.platForm + '|' + it.roomId
            });
        })
        setResult(d);
    `,
    一级: `js:
        var d = [];
        if (MY_CATE === 'douyin') {
            let area = MY_FL.area || '全部';
            if (area === '全部') {
                input = HOST + '/api/live/getRecommendByPlatform?platform=douyin&page='+MY_PAGE+'&size=20';
            }
        }
        var html = JSON.parse(request(input)).data;
        html.forEach(it => {
            d.push({
                title: it.roomName,
                desc: '👁' + it.online + '  🆙' + it.ownerName,
                pic_url: it.roomPic,
                url: it.platForm + '|' + it.roomId
            });
        })
        setResult(d);
    `,
    二级: `js:
        try {
            if (typeof play_url === "undefined") {
                var play_url = ""
            }
            let platform = input.split("|")[0].replace(HOST+'/','');
            let roomId = input.split("|")[1];
            let link = HOST + '/api/live/getRoomInfo?uid=&platform=' + platform + '&roomId=' + roomId;
            var jo = JSON.parse(request(link)).data;
            VOD = {
                vod_id: jo.roomId,
                vod_name: jo.roomName,
                vod_pic: jo.roomPic,
                type_name: jo.platForm.replace("huya", "虎牙").replace("douyu", "斗鱼").replace("cc", "网易CC").replace("bilibili", "哔哩哔哩").replace("douyin", "抖音") + "." + jo.categoryName,
                vod_director: '🆙 ' + jo.ownerName,
                vod_content: "🏷分区：" + jo.platForm.replace("huya", "虎牙").replace("douyu", "斗鱼").replace("cc", "网易CC").replace("bilibili", "哔哩哔哩").replace("douyin", "抖音") + "·" + jo.categoryName + " 🏷UP主：" + jo.ownerName + " 🏷人气：" + jo.online + (jo.isLive === 1 ? " 🏷状态：正在直播" : "状态：未开播")
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
                        // return title + "$" + play_url + urlencode(playUrl)
                        return title + "$" + play_url + urlencode(playUrl + "|" + jo.platForm + "|" + jo.roomId)
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
                        title: "解析1",
                        url: 'http://epg.112114.xyz/' + jo.platForm +'/' + jo.roomId
                    },
                    {
                        title: "解析2",
                        url: "https://www.aois.eu.org/live/" + jo.platForm + "/" + jo.roomId
                    },
                    {
                        title: "解析3",
                        url: "https://www.goodiptv.club/" + jo.platForm + "/" + jo.roomId
                    },
                    // {
                    //     title: "解析4",
                    //     url: "http://maomao.kandiantv.cn/" + jo.platForm + "1.php?id=" + jo.roomId
                    // },
                    {
                        title: "解析5",
                        url: "http://43.138.170.29:35455/" + jo.platForm + "/" + jo.roomId
                    },
                    {
                        title: "解析6",
                        url: "http://8.210.232.168/php/" + jo.platForm + ".php?id=" + jo.roomId
                    }
                );
                if (/huya/.test(jo.platForm)) {
                    d.push(
                        {
                            title: "虎牙解析",
                            url: "http://cfss.cc/cdn/hy/" + jo.roomId + ".flv"
                        }
                    );
                }
                VOD["vod_play_from"] = "选择画质";
                VOD["vod_play_url"] = d.map(function(it) {
                    return it.title + "$" + play_url + urlencode(it.url + "|" + jo.platForm + "|" + jo.roomId)
                }).join("#");
                setResult(d);
            }
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
    `,
    搜索: `js:
        var d = [];
        var html = JSON.parse(request(input)).data;
        html.forEach(it => {
            d.push({
                title: it.roomName,
                 desc: '👁' + it.online + '  🆙' + it.ownerName,
                pic_url: it.roomPic,
                url: it.platForm + '|' + it.roomId
            });
        })
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