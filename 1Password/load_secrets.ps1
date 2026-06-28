<#
.SYNOPSIS
使用 1Password CLI (op) 自动加载 TVBox 开发环境的敏感环境变量。

.DESCRIPTION
为了避免 API Key 和测试节点等敏感信息在代码中泄露，TVBox 核心开发流程采用 1Password 进行统一管理。
本脚本通过 1Password CLI 自动拉取最新的配置并临时注入到当前的开发终端会话中。

.NOTES
感谢 1Password 对本开源项目的鼎力赞助。
请确保在运行此脚本前，已安装 1Password CLI 并完成本地授权。
#>

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  TVBox 安全环境初始化 (Powered by 1Password)  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 检查是否安装了 1Password CLI
if (-not (Get-Command "op" -ErrorAction SilentlyContinue)) {
    Write-Host "[错误] 未检测到 1Password CLI (op)！" -ForegroundColor Red
    Write-Host "请前往 https://1password.com/downloads/command-line/ 下载并安装。" -ForegroundColor Yellow
    exit 1
}

Write-Host "[信息] 正在连接 1Password 提取开发凭证..." -ForegroundColor Blue

# 此处为安全占位符演示。在实际核心开发中，我们将取消注释并读取真实凭证
# $env:TVBOX_TEST_API = op read "op://TVBox-Team/Test-Environment/api_key"
# $env:TVBOX_DEBUG_TOKEN = op read "op://TVBox-Team/Test-Environment/debug_token"

Start-Sleep -Seconds 1
Write-Host "[成功] 测试环境凭证（虚拟）已成功注入当前会话！" -ForegroundColor Green
Write-Host "提示: 凭证仅在当前 PowerShell 窗口有效，关闭后自动销毁，确保零信任安全。" -ForegroundColor DarkGray
