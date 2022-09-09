console.log("Injected!");

/* ------------------ Screen ---------------- */
screen = {
    availWidth: 400,
    availHeight: 200,
    width: 400,
    height: 200,
    colorDepth: 0,
    pixelDepth: 0,
    top: 0,
    left: 0,
    availTop: 0,
    availLeft: 0
};

/* ------------------- Navigator ---------------------- */
navigatorDefinitions = [
    { variable: "language", value: "abc"},
    { variable: "languages", value: ["a", "b", "c"]},
    { variable: "systemLanguage", value: "abc"},
    { variable: "plugins", value: ["N", "O", "N", "E"]},
    { variable: "platform", value: "Tor Hammer"},
    { variable: "appCodeName", value: "Mozarella"},
    { variable: "appName", value: "NetScraper"},
    { variable: "appVersion", value: "0.0"},
    { variable: "userAgent", value: "Whoop whoop, Police"},
    { variable: "buildID", value: "Stone0.0"},
    { variable: "oscpu", value: "ARM"},
    { variable: "product", value: "sold"},
    { variable: "productSub", value: "srt"},
    { variable: "vendor", value: "Vending machine"},
    { variable: "vendorSub", value: "srt"}
];

navigatorDefinitions.forEach(element => {
    console.log("Navigator: " + element.variable);
    try {
        Object.defineProperty(navigator, element.variable, {
            get: function() { return element.value}
        });
    } catch (err) {}
    try {
        Object.defineProperty(window.navigator, element.variable, {
            get: function () { return element.value; }
        });
    } catch (err) {}
});

/* ----------------------- Scanbox -----------------*/
Object.defineProperty(document,"referrer", {
    get: function () { return "past"; }
});

Object.defineProperty(document,"cookie", {
    get: function () { return "mjam mjam..."; }
});

Object.defineProperty(document,"title", {
    get: function () { return "h1"; },
    set: function (a) {}
});

Object.defineProperty(document,"domain", {
    get: function () { return "name"; }
});

Object.defineProperty(document,"characterSet", {
    get: function () { return "bit"; }
});

Object.defineProperty(document,"charset", {
    get: function () { return "byte"; }
});

Object.defineProperty(document,"ActiveXObject", {
    get: function () { return "DeactiveXObject"; }
});

