var s = document.createElement('script');
s.src = chrome.runtime.getURL('pageInjected.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).insertBefore(s, (document.head || document.documentElement).firstChild);