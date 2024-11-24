function FindProxyForURL(url, host) {
    // 如果访问的是 ChatGPT、Google 或 GitHub 的域名，使用代理
    if (shExpMatch(host, "*.openai.com") ||        // ChatGPT (OpenAI)
        shExpMatch(host, "*.google.com") ||        // Google
        shExpMatch(host, "*.googleusercontent.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.github.com")) {        // GitHub
        return "SOCKS5 127.0.0.1:1080";  // Shadowsocks 本地 SOCKS5 代理
    }

    // 其他流量直接走本地
    return "DIRECT";
}
