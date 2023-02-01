[mitm]
Hostname = *.lanjiyin.com.cn

[rewrite local]
*.lanjiyin.com.cn(\/user\/account\/info|\/activity\/activity\/account) url script-response-body lanjiyin.js
