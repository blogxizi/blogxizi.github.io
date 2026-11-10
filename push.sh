#!/bin/zsh
set -e

cd "$(dirname "$0")"

echo "===== 添加本地修改 ====="
git add -A

if git diff --cached --quiet; then
    echo "没有新的修改需要上传"
    exit 0
fi

echo "===== 提交修改 ====="
git commit -m "${1:-Update website}"

echo "===== 上传到 GitHub ====="
git push origin main

echo "===== 上传完成 ====="
