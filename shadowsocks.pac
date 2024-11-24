function FindProxyForURL(url, host) {
    // 代理规则
    if (shExpMatch(host, "*.google.com") || shExpMatch(host, "*.github.com")) {
        return "SOCKS5 127.0.0.1:1080";  // 替换为你的 Shadowsocks 代理地址
    }

    // 默认不使用代理（走本地）
    return "DIRECT";
}

