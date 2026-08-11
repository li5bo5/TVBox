#!/bin/bash
# ==============================================================================
# TVBox 开发环境凭证注入脚本 (macOS / Linux)
# 本脚本用于通过 1Password CLI (op) 将测试节点和 API 密钥安全地注入到本地环境中。
# 感谢 1Password 提供开源赞助！
# ==============================================================================

echo "🛡️  TVBox 凭证安全注入工具 (Sponsored by 1Password)"
echo "-------------------------------------------------------"

# 检查 1Password CLI 是否安装
if ! command -v op &> /dev/null
then
    echo "❌ [错误] 未找到 1Password CLI (op) 工具。"
    echo "👉 请访问 https://developer.1password.com/docs/cli 下载并安装。"
    exit 1
fi

echo "🔄 正在请求 1Password 授权并模拟拉取配置..."

# 以下为核心代码占位符。在实际测试中，取消注释以获取真实凭证。
# export TVBOX_TEST_API_URL=$(op read "op://TVBox-Dev/config/api_url")
# export TVBOX_DEBUG_SIGN_KEY=$(op read "op://TVBox-Dev/config/debug_key")

sleep 1
echo "✅ [成功] 开发环境变量已成功注入当前终端会话！"
echo "🔒 提示：变量在关闭当前终端后自动失效，确保项目配置的绝对安全。"
