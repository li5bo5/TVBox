
var rule = {
    title:'虎牙直播',
    host:'https://www.huya.com',
    homeUrl:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=2135&tagAll=0&page=1',//用于"分类获取"和"推荐获取"
    url:'/cache.php?m=LiveList&do=getLiveListByPage&gameId=fyfilter&tagAll=0&page=fypage',
    class_name:'网游&单机&手游&娱乐',
    class_url:'1&2&3&8',
    detailUrl:'https://m.huya.com/fyid',//二级详情拼接链接(json格式用)
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter_def:{
        1:{area:'393'},
        2:{area:'7601'},
        3:{area:'2336'},
		8:{area:'2135'}
    },
    filter:{
        "1":[{"key":"area","name":"分类","value":[{"n":"炉石传说","v":"393"},{"n":"炉石战棋","v":"5751"},{"n":"英雄联盟","v":"1"},{"n":"天天吃鸡","v":"2793"},{"n":"lol云顶之弈","v":"5485"},{"n":"穿越火线","v":"4"},{"n":"暴雪专区","v":"100043"},{"n":"地下城与勇士","v":"2"},{"n":"魔兽世界","v":"8"},{"n":"DOTA2","v":"7"},{"n":"CS:GO","v":"862"},{"n":"CFHD","v":"6079"},{"n":"DOTA1","v":"6"},{"n":"QQ飞车","v":"9"},{"n":"魔兽争霸3","v":"4615"},{"n":"网游竞技","v":"100023"},{"n":"射击综合游戏","v":"100141"},{"n":"体育游戏","v":"100135"},{"n":"反恐精英Online","v":"1918"},{"n":"NBA2KOL系列","v":"3959"},{"n":"星际争霸","v":"5"},{"n":"跑跑卡丁车","v":"162"},{"n":"剑网3","v":"900"},{"n":"反恐精英","v":"863"}]}],
        "2":[{"key":"area","name":"分类","value":[{"n":"Dread Hunger","v":"7601"},{"n":"永劫无间","v":"6219"},{"n":"主机游戏","v":"100032"},{"n":"我的世界","v":"1732"},{"n":"方舟","v":"1997"},{"n":"单机热游","v":"100002"},{"n":"Apex英雄","v":"5011"},{"n":"逃离塔科夫","v":"3493"},{"n":"怀旧游戏","v":"100125"},{"n":"糖豆人：终极淘汰赛","v":"6083"},{"n":"育碧游戏","v":"100139"},{"n":"使命召唤系列","v":"100137"},{"n":"都市：天际线","v":"2201"},{"n":"任天堂专区","v":"100087"},{"n":"其他单机","v":"3069"},{"n":"微软模拟飞行2020","v":"6099"}]}],
        "3":[{"key":"area","name":"分类","value":[{"n":"英雄联盟手游","v":"6203"},{"n":"和平精英","v":"3203"},{"n":"金铲铲之战","v":"7185"},{"n":"王者荣耀","v":"2336"},{"n":"英雄联盟电竞经理","v":"7177"},{"n":"综合手游","v":"100029"},{"n":"新游广场","v":"100052"},{"n":"CF手游","v":"2413"},{"n":"欢乐麻将","v":"1751"},{"n":"中国象棋","v":"1671"},{"n":"三国杀","v":"1669"},{"n":"欢乐斗地主","v":"1749"},{"n":"手游休闲","v":"100004"},{"n":"棋牌桌游","v":"100036"},{"n":"狼人杀手游","v":"100049"},{"n":"球球大作战","v":"2411"},{"n":"DNF手游","v":"4921"},{"n":"狼人杀","v":"2785"},{"n":"天天吃鸡手机版","v":"4341"},{"n":"红警OL","v":"4413"},{"n":"腾讯桌球","v":"2444"},{"n":"虎牙吃鸡","v":"7465"}] }],
        "8":[{"key":"area","name":"分类","value":[{"n":"一起看","v":"2135"},{"n":"旅游","v":"6791"},{"n":"放映厅","v":"6245"},{"n":"原创","v":"6861"},{"n":"体育","v":"2356"},{"n":"虎牙文化","v":"4089"},{"n":"音乐","v":"3793"},{"n":"趣分享","v":"5883"},{"n":"科技","v":"2408"}]}]

    },
    searchUrl:'https://search.cdn.huya.com/?m=Search&do=getSearchContent&q=**&uid=0&v=4&typ=-5&livestate=0&rows=40&start=0',
    searchable:2,
    quickSearch:0,
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    // lazy:"js:let rid=input.match(/\\/(\\d+)/)[1];log(rid);let purl=JSON.parse(request('https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid='+rid)).data.stream.baseSteamInfoList[0].sStreamName;log(purl);let rurl='http://txtest-xp2p.p2p.huya.com/src/'+purl+'.xs?ratio=4000';input={jx:0,url:rurl,parse:0}",
    lazy:"js:let rid=input.match(/\\/(\\d+)/)[1];function getRealUrl(live_url){let[i,b]=live_url.split('?');let r=i.split('/').pop();let s=r.replace(/\.(flv|m3u8)/,'');let c_tmp=b.split('&').filter(n=>n);let n={};let c_tmp2=[];c_tmp.forEach(function(tmp,index){if(index<3){n[tmp.split('=')[0]]=tmp.split('=')[1]}else{c_tmp2.push(tmp)}});let tmp2=c_tmp2.join('&');n[tmp2.split('=')[0]]=tmp2.split('=')[1];let fm=decodeURIComponent(n.fm).split('&')[0];let u=base64Decode(fm);let p=u.split('_')[0];let f=new Date().getTime()+'0000';let ll=n.wsTime;let t='0';let h=[p,t,s,f,ll].join('_');let m=md5(h);return(i+'?wsSecret='+m+'&wsTime='+ll+'&u='+t+'&seqid='+f+'&'+c_tmp2.pop()).replace('hls','flv').replace('m3u8','flv')}let purl=JSON.parse(request('https://mp.huya.com/cache.php?m=Live&do=profileRoom&roomid='+rid)).data.stream.flv.multiLine[0].url;input={jx:0,url:getRealUrl(purl),parse:0,header:JSON.stringify({'user-agent':'Mozilla/5.0'})}",
    推荐:'*',
    一级:'json:data.datas;introduction;screenshot;nick;profileRoom',
    二级:'*',
    搜索:'json:response.3.docs;game_roomName;game_screenshot;game_nick;room_id',
}