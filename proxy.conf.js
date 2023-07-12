const PROXY_CONFIG = {
  "/api": {
      "target": "http://127.0.0.1:1223/app-root",
      "secure": false,
      "bypass": function (req, res, proxyOptions) {
        req.headers["Authorization"] = "Basic YWRtaW46UmRnMDEyMDIz";
      }
  }
}

module.exports = PROXY_CONFIG;
