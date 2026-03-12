
### 第一步：在 1Password 中存好密钥（纯手动）

1. 打开 1Password 软件。
2. 新建一个“密码”（Password）或“安全备注”（Secure Note）类型的项目。
3. 命名为 `TVBox IPTV 鉴权密钥`（或者你喜欢的名字），把你决定使用的密钥（比如 `JoeVess_Secret_888`）存进去。

### 第二步：将密钥粘贴到本地隐藏配置文件中

为了绝对不把密钥暴露在你的公共仓库 `li5bo5/TVBox` 里，我们需要把它写在本地不会被 Git 追踪的文件中。Android 项目默认有一个 `local.properties` 文件，它专门用来存本地环境配置，且默认在 `.gitignore` 列表中。

1. 在本地电脑上，用代码编辑器打开 TVBox 项目根目录下的 `local.properties`。
2. 从 1Password 里复制出你的密钥，粘贴到文件末尾：

```properties
# 这是我存在 1Password 里的 IPTV 密钥，手动复制过来的
IPTV_AUTH_KEY=JoeVess_Secret_888

```

### 第三步：让代码能够读取这个密钥

打开项目中的 `app/build.gradle` 文件，在 `android { defaultConfig { ... } }` 里面加几行代码，把刚才的配置变成 Java 可以直接调用的常量：

```groovy
android {
    defaultConfig {
        // ... 原本的其他配置

        // 简单读取 local.properties 中的密钥
        Properties properties = new Properties()
        File localPropsFile = project.rootProject.file('local.properties')
        if (localPropsFile.exists()) {
            properties.load(localPropsFile.newDataInputStream())
        }
        def iptvKey = properties.getProperty("IPTV_AUTH_KEY", "")

        // 将读取到的密钥暴露给 Java/Kotlin 代码
        buildConfigField "String", "IPTV_AUTH_KEY", "\"${iptvKey}\""
    }
}

```

### 第四步：在 TVBox 源码里加个简单的判断

现在你的密钥已经安全地注入到本地构建中了。在 TVBox 解析播放链接、或者加载源（比如你引用 `joevess/IPTV` 链接的逻辑处），加上简单的 `if/else` 鉴权即可：

```java
// 假设 userInputKey 是你想办法获取到的输入（比如弹窗让用户输，或者接口传过来的）
String userInputKey = getUserInput(); 

// 直接用 BuildConfig 读取你存的密钥进行比对
if (BuildConfig.IPTV_AUTH_KEY.equals(userInputKey)) {
    // 密钥正确，允许加载或解析该 IPTV 链接
    loadIptvUrl("https://github.com/joevess/IPTV/..."); 
} else {
    // 密钥错误，提示并拦截
    Toast.makeText(context, "鉴权失败，未授权使用此 IPTV 列表", Toast.LENGTH_SHORT).show();
}

```
### 使用方法
以后想换密钥防盗刷了 -> 打开 1Password 生成个新的存好 -> 复制粘贴到本地的 `local.properties` 替换旧的 -> 重新打个包。简单粗暴，完全可控！

###  下一步任务

在 TVBox 的哪个具体 Java/Kotlin 文件里加这段拦截判断逻辑最合适吗？
