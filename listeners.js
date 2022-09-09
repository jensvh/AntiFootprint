
const userAgent = "Nice try";
const httpAccept = "text/html,application/xml;q=0.9";
const encoding = "gzip, compress, br";
const language = "none";

browser.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        for (var i = details.requestHeaders.length-1; i >= 0; --i) {
            switch (details.requestHeaders[i].name.toLowerCase()) {
                case "user-agent":
                  details.requestHeaders[i].value = userAgent;
                  break;
                case "accept":
                  details.requestHeaders[i].value = httpAccept;
                  break;
                case "accept-encoding":
                  details.requestHeaders[i].value = encoding;
                  break;
                case "accept-language":
                  details.requestHeaders[i].value = language;
                  break;
                default:
            }
            // DOesn"t work !!!
            // Remove strange chrome headers
            if (details.requestHeaders[i].name.includes("sec-")) {
              details.requestHeaders.splice(i, 1);
            }
          }
          return {requestHeaders: details.requestHeaders};
    }, {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
);


browser.privacy.network.peerConnectionEnabled.set({ value: false });
browser.privacy.network.webRTCIPHandlingPolicy.set({ value: 'disable_non_proxied_udp' });