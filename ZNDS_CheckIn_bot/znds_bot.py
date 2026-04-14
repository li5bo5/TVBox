import requests
import re
import time
import random

# ================= 配置区域 =================
COOKIE = "s9it_2132_connect_is_bind=1; s9it_2132_nofavfid=1; s9it_2132_visitedfid=66D386D373; s9it_2132_smile=5D1; s9it_2132_saltkey=y7G26Y9r; s9it_2132_lastvisit=1776128938; s9it_2132_ulastactivity=1776132546%7C0; s9it_2132_auth=a338fYf5wjHnfGdqQqJ9rKQvqYv0n2niO70IqL0H9tQF6konRhdQmgx5ej4OGqky%2BzKX7vhoC%2FUzr7u%2Fds7G4ybBSY2c; s9it_2132_lastcheckfeed=7125538%7C1776132546; s9it_2132_lip=120.209.20.6%2C1776132485; s9it_2132_lastact=1776134179%09plugin.php%09"

FISH_TIME = 545           # 每次摸鱼设为 9 分钟 (540秒)，
HEARTBEAT_INTERVAL = 30   # 每 30 秒发送一次心跳保活
REST_MIN = 1              # 轮次间的最短休息时间 (秒)
REST_MAX = 3              # 轮次间的最长休息时间 (秒)

# ================= 初始化 Session =================
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Cookie": COOKIE,
    "Referer": "https://www.znds.com/plugin.php?id=muanyun_053"
}

session = requests.Session()
session.headers.update(headers)
base_url = "https://www.znds.com/plugin.php?id=muanyun_053"

def get_formhash():
    """访问主页，提取 formhash 并精准抓取当前用户的摸鱼成果"""
    try:
        res = session.get(base_url, timeout=10)
        
        # 1. 提取 formhash
        match = re.search(r'name="formhash"\s+value="([^"]+)"', res.text)
        formhash = match.group(1) if match else None
        
        if formhash:
            # 2. 定位到属于你自己的数据行 (提取 <tr class="current-user"> 里面的所有内容)
            user_block_match = re.search(r'<tr class="current-user">([\s\S]*?)</tr>', res.text)
            
            if user_block_match:
                user_html = user_block_match.group(1)
                
                # 3. 仅在你的专属 HTML 块中提取各项数据
                username_match = re.search(r'muanyun-053-username[^>]*>\s*(.*?)\s*</a>', user_html)
                icon_match = re.search(r'<div class="muanyun-053-level-icon">(.*?)</div>', user_html)
                name_match = re.search(r'<div class="muanyun-053-level-name">(.*?)</div>', user_html)
                exp_match = re.search(r'muanyun-053-data-exp">(\d+)</div>', user_html)
                checkin_match = re.search(r'muanyun-053-data-checkin">(\d+)</div>', user_html)
                fishing_match = re.search(r'muanyun-053-data-fishing">([\d\.]+)</div>', user_html)
                continuous_match = re.search(r'连续 (\d+) 天', user_html)
                
                username = username_match.group(1).strip() if username_match else "我"
                icon = icon_match.group(1) if icon_match else "❓"
                name = name_match.group(1) if name_match else "未知"
                exp = exp_match.group(1) if exp_match else "0"
                checkin = checkin_match.group(1) if checkin_match else "0"
                fishing = fishing_match.group(1) if fishing_match else "0.0"
                continuous = continuous_match.group(1) if continuous_match else "0"

                print(f"\n================ [{username}] 的摸鱼档案 ================", flush=True)
                print(f" 🎖 当前等级：{icon} {name}", flush=True)
                print(f" 📈 累计经验：{exp} 点", flush=True)
                print(f" 📅 签到天数：累计 {checkin} 天", flush=True)
                print(f" 🔥 连续签到： {continuous} 天0", flush=True)
                print(f" ⏱摸鱼总长：{fishing} 小时", flush=True)
                print(f"===================================================", flush=True)
            else:
                print("\n⚠️ 未能在排行榜中找到 [current-user] 的数据行，暂时无法显示档案。", flush=True)
            
            return formhash
        else:
            print("❌ 未能获取到 formhash，可能是 Cookie 失效。")
            return None
            
    except Exception as e:
        print(f"❌ 网络请求异常: {e}")
        return None

def main_loop():
    loop_count = 1
    while True:
        print(f"\n========== 开始第 {loop_count} 轮摸鱼 ==========")
        
        # 1. 获取 formhash
        formhash = get_formhash()
        if not formhash:
            print("⚠️ 将在 60 秒后重试...")
            time.sleep(60)
            continue
            
        print(f"✅ 获取参数成功: {formhash}")
        
        # 2. 发起开始摸鱼请求
        start_payload = {
            "formhash": formhash,
            "startfishingsubmit": "1"
        }
        print("🎣 正在提交开始摸鱼请求...")
        start_res = session.post(f"{base_url}&op=start_fishing", data=start_payload, timeout=10)
        
        # 3. 进入精确摸鱼计时与心跳循环
        print(f"⏳ 摸鱼进行中，目标时长：{FISH_TIME} 秒...", flush=True)
        
        # 记录真实开始时间
        start_time = time.time()
        
        while True:
            # 计算已经过去的时间和剩余时间
            elapsed = int(time.time() - start_time)
            remaining = FISH_TIME - elapsed
            
            # 如果剩余时间小于等于 0，说明时间到了，跳出循环去结算
            if remaining <= 0:
                break
                
            # 决定这次睡多久：如果剩余时间大于30秒，就睡30秒；如果不足30秒，就睡剩下的时间（比如最后只剩5秒）
            sleep_time = min(HEARTBEAT_INTERVAL, remaining)
            time.sleep(sleep_time)
            
            # 睡眠醒来后，再次更新已过时间用于日志显示
            current_elapsed = int(time.time() - start_time)
            
            # 发送心跳包
            try:
                heartbeat_url = f"{base_url}&op=check_status&formhash={formhash}"
                hb_res = session.get(heartbeat_url, timeout=5)
                if "loggedin" in hb_res.text:
                    print(f"  [心跳正常] 已摸鱼 {current_elapsed} 秒 / 共 {FISH_TIME} 秒", flush=True)
                else:
                    print(f"  [心跳异常] 返回数据: {hb_res.text}", flush=True)
            except Exception as e:
                print(f"  [心跳超时] {e}", flush=True)
                
        # 4. 发起停止摸鱼请求，结算经验
        print("🛑 时间到，准备停止摸鱼结算经验...", flush=True)
        # 停止前最好重新获取一下最新的 formhash，确保万无一失
        current_formhash = get_formhash() or formhash
        stop_payload = {
            "formhash": current_formhash,
            "stopfishingsubmit": "1"
        }
        stop_res = session.post(f"{base_url}&op=stop_fishing", data=stop_payload, timeout=10)
        
        if stop_res.status_code == 200:
            # ==== 新增：从源码中提取本次摸鱼时间和经验值 ====
            # 匹配形如 "本次摸鱼 9 分钟，获得经验 10 点" 的文本
            result_match = re.search(r'本次摸鱼\s*(\d+)\s*分钟.*?获得经验\s*(\d+)\s*点', stop_res.text)
            if result_match:
                f_mins = result_match.group(1)
                f_exp = result_match.group(2)
                print(f"🎉 本轮结算成功！本次摸鱼 {f_mins} 分钟，获得经验: +{f_exp} 点", flush=True)
            else:
                # 如果匹配不到，尝试只抓取经验值，防备网站文案微调
                exp_only_match = re.search(r'获得经验\D*(\d+)\D*点', stop_res.text)
                if exp_only_match:
                    f_exp = exp_only_match.group(1)
                    print(f"🎉 本轮结算成功！获得经验: +{f_exp} 点 📈", flush=True)
                else:
                    print("🎉 本轮摸鱼结束！(请求成功，但未能从页面提取到具体经验数值)", flush=True)
                    # 调试用：如果抓不到，可以把网页包含的中文字符打印出来找原因
                    # text_snippet = re.sub(r'<[^>]+>', '', stop_res.text)[:200]
                    # print(f"页面返回内容片段: {text_snippet}")
        else:
            print(f"⚠️ 停止摸鱼请求可能出现问题，状态码: {stop_res.status_code}", flush=True)
            
        # 5. 随机休息，防封控
        rest_time = random.randint(REST_MIN, REST_MAX)
        print(f"💤 休息 {rest_time} 秒后开启下一轮...")
        time.sleep(rest_time)
        loop_count += 1

if __name__ == "__main__":
    print("🚀 ZNDS 自动摸鱼助手 (纯API版) 已启动！")
    print("提示：你可以随时按 Ctrl+C 终止运行。")
    try:
        main_loop()
    except KeyboardInterrupt:
        print("\n👋 收到退出指令，摸鱼助手已安全停止。")
