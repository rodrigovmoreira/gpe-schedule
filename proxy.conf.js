const PROXY_CONFIG = {
  "/api": {
      "target": "http://127.0.0.1:1223/app-root",
      //"target": "http://10.11.79.51:3008/app-root",
      "secure": false,
      "bypass": function (req, res, proxyOptions) {
        req.headers["Authorization"] = "Basic YWRtaW46UmRnMDEyMDIz";
        //req.headers["Authorization"] = "Basic cm9kcmlnby52YXNjb25jZWxvczpSZGcwNjIwMjM=";
      }
  }
}

module.exports = PROXY_CONFIG;
