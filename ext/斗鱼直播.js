//添加播放源，删除图标
var rule = {
    title:'斗鱼直播',
    host:'https://m.douyu.com',
    homeUrl:'/api/home/mix',
    url:'/api/room/list?page=fypage&type=fyfilter',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}',
    filter:{
		"Usual":[{"key":"cateId","name":"类型","value":[{"n":"炉石传说","v":"How"},{"n":"英雄联盟","v":"LOL"},{"n":"热门游戏","v":"rmyx"},{"n":"和平精英","v":"hpjy"},{"n":"LOL手游","v":"LOLM"},{"n":"JJ斗地主","v":"jj"}]}],
		"PCgame":[{"key":"cateId","name":"类型","value":[{"n":"炉石传说","v":"How"},{"n":"英雄联盟","v":"LOL"},{"n":"热门游戏","v":"rmyx"},{"n":"JJ斗地主","v":"jj"},{"n":"穿越火线","v":"CF"},{"n":"棋牌娱乐","v":"qipai"},{"n":"使命召唤","v":"COD"},{"n":"DOTA2","v":"DOTA2"},{"n":"超击突破","v":"SuperPeople"},{"n":"CFHD","v":"CFHD"},{"n":"DNF","v":"DNF"},{"n":"CS:GO","v":"CSGO"},{"n":"无畏契约","v":"VALORANT"},{"n":"lol云顶之弈","v":"ydzhy"},{"n":"魔兽争霸","v":"mszb"},{"n":"魔兽怀旧服","v":"wowclassic"},{"n":"自走棋","v":"dota2rpg"},{"n":"传奇","v":"cq"},{"n":"跑跑卡丁车","v":"Popkart"},{"n":"网易游戏","v":"wyyx"},{"n":"星际争霸","v":"SC"},{"n":"格斗游戏","v":"FTG"},{"n":"守望先锋","v":"Overwatch"},{"n":"DOTA","v":"DOTA"},{"n":"魔兽世界","v":"WOW"},{"n":"剑网3","v":"JX3"},{"n":"魔域","v":"EudemonsOnline"},{"n":"我的世界","v":"MC"},{"n":"超激斗梦境","v":"cjdmj"},{"n":"冒险岛","v":"mxd"},{"n":"三国杀","v":"sanguosha"},{"n":"梦幻西游","v":"MHXYOL"},{"n":"天涯明月刀","v":"tianya"},{"n":"街头篮球","v":"jtlq"},{"n":"NBA2KOL2","v":"NBA2KOL2"},{"n":"QQ飞车端游","v":"qqfcdy"},{"n":"战地之王","v":"AVA"},{"n":"军事游戏","v":"jsyx"},{"n":"FIFAONLINE4","v":"FOL4"},{"n":"热门网游","v":"rmwy"},{"n":"诛仙世界","v":"zxsj"},{"n":"千古风流","v":"qgflpc"},{"n":"APEX","v":"APEX"},{"n":"流放之路POE","v":"PathofExile"},{"n":"剑网3缘起","v":"JW3YQ"},{"n":"逆水寒","v":"nsh"},{"n":"风暴英雄","v":"HOTS"},{"n":"逆战","v":"NZ"},{"n":"坦克世界","v":"TKSJ"},{"n":"战舰世界","v":"wfws"},{"n":"巫师之昆特牌","v":"wszktp"},{"n":"反恐精英Online","v":"CS"},{"n":"暗黑破坏神","v":"DIABLO"},{"n":"梦三国2","v":"msg2"},{"n":"传奇世界","v":"cqsj"},{"n":"方舟：生存进化","v":"fzscjh"},{"n":"神武4电脑版","v":"swdnb"},{"n":"群雄逐鹿","v":"qxzl"},{"n":"堡垒之夜","v":"blzy"},{"n":"无限法则","v":"roe"},{"n":"问道电脑版","v":"wddnb"},{"n":"西山居游戏","v":"Seasun"},{"n":"最终幻想14","v":"FF14"},{"n":"战意","v":"WYZY"},{"n":"剑灵","v":"BladeSoul"},{"n":"星际战甲","v":"Warframe"},{"n":"龙之谷","v":"DragonNest"},{"n":"铁甲雄兵","v":"tjxb"},{"n":"古剑奇谭网络版","v":"gjqtwlb"},{"n":"轩辕传奇","v":"XYCQ"},{"n":"神途","v":"shentu"},{"n":"激战2","v":"GuildWars2"},{"n":"高达文化区","v":"gdyxq"},{"n":"忍者村大战2","v":"rzcdz2"},{"n":"RPG网游专区","v":"rpgwyzq"},{"n":"诛仙3","v":"zhuxian3"},{"n":"笑傲江湖OL","v":"xajhol"},{"n":"冒险岛2","v":"MXD2"},{"n":"无尽战区","v":"WJZQ"},{"n":"永恒之塔","v":"AION"},{"n":"竞速游戏","v":"jingsu"},{"n":"九阴真经","v":"JYZJ"},{"n":"FPS综合网游","v":"FPSOL"},{"n":"劲舞团","v":"jwt"},{"n":"天下","v":"tianxai"},{"n":"火箭联盟","v":"hjlm"},{"n":"泡泡堂","v":"ppt"},{"n":"音乐游戏","v":"MG"},{"n":"新倩女幽魂","v":"ONLINE"},{"n":"创世战车","v":"cszc"},{"n":"天谕","v":"tianyu"},{"n":"征途2","v":"zhengtu2"},{"n":"QQ炫舞","v":"qqxw"},{"n":"泰亚史诗","v":"tyss"},{"n":"大唐无双","v":"dtws"},{"n":"怪物猎人ol","v":"MHol"},{"n":"星战前夜：晨曦","v":"EVE"},{"n":"热血传奇怀旧版","v":"rxcqhjsgb"},{"n":"仙侠世界2","v":"xxsj2"},{"n":"枪火重生","v":"qhcs"},{"n":"彩虹岛","v":"CHD"},{"n":"御龙在天","v":"YLZT"},{"n":"英魂之刃","v":"YHZR"},{"n":"自由篮球","v":"ZYLQ"},{"n":"洛奇英雄传","v":"LQYXZ"},{"n":"封印者","v":"FYZ"},{"n":"合金弹头","v":"HJDT"},{"n":"新英雄年代","v":"XYXSD"},{"n":"星尘传说","v":"XCCS"},{"n":"盛趣游戏","v":"SQYX"},{"n":"新热血英豪","v":"XRXYH"},{"n":"沙盒游戏","v":"SHYX"},{"n":"我的世界：地下城","v":"MD"},{"n":"恐鬼症","v":"KGZ"},{"n":"领地人生","v":"LDRS"},{"n":"梦塔防","v":"TDOTK"},{"n":"重生边缘","v":"CSBYOL"},{"n":"大话西游2","v":"dhxy2"},{"n":"猎人","v":"lr"},{"n":"天子剑","v":"tianzijian"},{"n":"热血江湖online","v":"rxjhol"},{"n":"千年3","v":"qn3"},{"n":"天空之城","v":"tkzc"},{"n":"诺亚传说","v":"nycs"},{"n":"鹿鼎记","v":"ldj"},{"n":"新桃花源记","v":"xthyj"},{"n":"武魂2电脑版","v":"wh2pc"},{"n":"奇迹世界sun","v":"qjsjsun"},{"n":"地城之光","v":"dczg"},{"n":"剑侠世界2电脑版","v":"jxsj2pc"},{"n":"斩魂","v":"zhpc"},{"n":"大唐2","v":"dt2pc"},{"n":"幻想神域电脑版","v":"hxsypc"},{"n":"蜀山：初章","v":"ssczpc"},{"n":"狼人对决网游","v":"lrdjpc"},{"n":"武林群侠传","v":"wlqxzpc"},{"n":"卡拉彼丘","v":"klbq"},{"n":"破天一剑","v":"ptyj"},{"n":"剑雨江湖","v":"jyjh"},{"n":"四国军棋","v":"sgjq"},{"n":"命运方舟","v":"LostArk"},{"n":"新大话西游3","v":"xy3"},{"n":"暴雪游戏综合","v":"g_bliz"},{"n":"Battlebit","v":"BBR"},{"n":"长尾4部虚拟分区","v":"cw4bxnfq"},{"n":"幕后高手","v":"VEILEDEXPERTS"},{"n":"燕云十六声","v":"WHEREWINDSMEET"},{"n":"THEFINALS","v":"THEFINALS"},{"n":"NBA2KOnline","v":"NBA2KOL"}]}],
		"syxx":[{"key":"cateId","name":"类型","value":[{"n":"LOL手游","v":"LOLM"},{"n":"和平精英","v":"hpjy"},{"n":"王者荣耀","v":"wzry"},{"n":"暗区突围","v":"aqtw"},{"n":"幻塔","v":"ht"},{"n":"火影忍者","v":"hyrz"},{"n":"逆水寒手游","v":"NSHM"},{"n":"COD手游","v":"smzhsy"},{"n":"哈利波特：魔法觉醒","v":"HarryPotter"},{"n":"lol电竞经理","v":"EGAME"},{"n":"DNF手游","v":"mdnf"},{"n":"金铲铲之战","v":"JGAME"},{"n":"球球大作战","v":"qqdzz"},{"n":"英雄杀","v":"yxs"},{"n":"明日方舟","v":"mrfz"},{"n":"自由幻想手游","v":"zyhx"},{"n":"一梦江湖","v":"ymjh"},{"n":"完美世界手游","v":"wmsjsy"},{"n":"拳皇98OL","v":"kof98"},{"n":"赛尔号","v":"srh"},{"n":"崩坏：星穹铁道","v":"bhxqtd"},{"n":"猎魂觉醒","v":"lhjx"},{"n":"仙境传说","v":"xjcs"},{"n":"流星群侠传","v":"liuxinghudiejian"},{"n":"特色手游","v":"tssy"}]}],
		"djry":[{"key":"cateId","name":"类型","value":[{"n":"主机游戏","v":"TVgame"},{"n":"幻兽帕鲁","v":"Palworld"},{"n":"逃离塔科夫","v":"EFT"},{"n":"命运2","v":"MY2"},{"n":"EvilDead","v":"EvilDead"},{"n":"恐怖游戏","v":"Horror"},{"n":"荒野大镖客","v":"hydbk"},{"n":"九劫曲","v":"jjq"},{"n":"灵魂筹码","v":"lhcm"},{"n":"骑马与砍杀","v":"MountAndBlade"},{"n":"只狼","v":"ZL"},{"n":"饥荒","v":"DontStarve"},{"n":"全境封锁","v":"qjfs"},{"n":"怀旧游戏","v":"classic"},{"n":"NBA2K","v":"NBA2K"},{"n":"八方旅人","v":"OT"},{"n":"血污：夜之仪式","v":"Blood"},{"n":"人类一败涂地","v":"Human"},{"n":"挺进地牢","v":"Enter"},{"n":"环世界","v":"RimWorld"},{"n":"古墓丽影","v":"gmly"},{"n":"鬼泣","v":"DMC"},{"n":"往日不再","v":"WRBZ"},{"n":"仙剑奇侠传","v":"PAL"},{"n":"神秘海域","v":"Uncharted"},{"n":"塞尔达系列","v":"TLoZ"},{"n":"僵尸世界大战","v":"WWZ"},{"n":"足球游戏","v":"zq"},{"n":"橙光","v":"cg"},{"n":"了不起的修仙模拟器","v":"ACS"},{"n":"女神异闻录","v":"P5"},{"n":"斯普拉遁","v":"Splatoon"},{"n":"超级马里奥","v":"SMO"},{"n":"三国志系列","v":"Sangokushi"},{"n":"星际公民","v":"StarCitizen"},{"n":"最终幻想","v":"FF"},{"n":"中土世界：战争之影","v":"MiddleEarth"},{"n":"流放者柯南","v":"Conan"}]}],
		"yl":[{"key":"cateId","name":"类型","value":[{"n":"一起看","v":"yqk"},{"n":"二次元","v":"ecy"},{"n":"音乐","v":"music"},{"n":"户外","v":"HW"},{"n":"美食","v":"ms"},{"n":"原创IP","v":"ip"},{"n":"心动派对","v":"xdpd"},{"n":"音遇恋人","v":"yinyu"},{"n":"星秀","v":"xingxiu"},{"n":"趣生活","v":"QSH"},{"n":"心动FM","v":"dtxs"},{"n":"娱乐推荐","v":"yltj"}]}],
		"kjwh":[{"key":"cateId","name":"类型","value":[{"n":"文化","v":"wh"},{"n":"企鹅直播","v":"qezb"},{"n":"数码科技","v":"smkj"},{"n":"社会人文","v":"shrw"},{"n":"汽车","v":"car"},{"n":"科普","v":"kepu"},{"n":"纪录片","v":"jlp"},{"n":"成年教育","v":"jiaoyu"}]}],
		"znl":[{"key":"cateId","name":"类型","value":[{"n":"星星点灯","v":"xxdd"},{"n":"正能量","v":"znl"}]}]
    },
    filter_def:{
		Usual:{cateId:'How'},
        PCgame:{cateId:'LOL'},
        syxx:{cateId:'LOLM'},
		djry:{cateId:'TVgame'},
        yl:{cateId:'yqk'},
        kjwh:{cateId:'smkj'},
        znl:{cateId:'znl'}
    },
	class_name:'推荐&网游竞技&手游休闲&单机热游&娱乐天地&科技文化&正能量',
	class_url:'Usual&PCgame&syxx&djry&yl&kjwh&znl',
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
    搜索:'json:data.list;roomName;roomSrc;nickname;roomId',
}
