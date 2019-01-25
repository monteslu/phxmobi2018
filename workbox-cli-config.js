module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{png,html,js,json,css,svg,jpg,jpeg,gif,ttf,woff,eot}"
  ],
  "swDest": "./sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "./node_modules/**/*",
    "node_modules/**/*",
  ]
};
