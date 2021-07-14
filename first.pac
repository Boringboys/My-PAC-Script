var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)google\.com$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)github\.com$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)github\.io$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)thundercore\.com$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)trufflesuite\.com$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9";
        if (/$/.test(host)) return "DIRECT";
        return "DIRECT";
    },
    "+\u79d1\u5b66\u4e0a\u7f51\u4ee3\u7406\u9009\u62e9": "+myproxy",
    "+myproxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 127.0.0.1:4780";
    }
});