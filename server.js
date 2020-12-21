const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {
    const method = req.method;
    const headers = req.headers;
    const url = req.url;
    const httpVersion = req.httpVersion;

    const urlObj = URL.parse(url, true);
    console.log(url);
    console.log(urlObj);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');

    let list = [
        { "id": "001", "name": "易烊", "age": "18", "url": "//bpic.588ku.com/element_pic/20/11/01/242eb53fd15150cd808be2343749ba15.jpg!/fw/253/quality/90/unsharp/true/compress/true"},
        { "id": "002", "name": "baby", "age": "19", "url": "//bpic.588ku.com/element_pic/20/10/26/09465cd39a871713c1f14e589f0ebd60.jpg!/fw/253/quality/90/unsharp/true/compress/true"},
        { "id": "003", "name": "冰冰", "age": "17", "url": "//bpic.588ku.com/element_pic/20/07/01/83a86f0f67e3e82ac1575c967e55e7fa.jpg!/fw/253/quality/90/unsharp/true/compress/true"},
        { "id": "004", "name": "王杰", "age": "18", "url": "//bpic.588ku.com/element_pic/20/07/01/b95954783bac0592ef12c5a7c9b2c143.jpg!/fw/253/quality/90/unsharp/true/compress/true"},
    ]
    let obj = { list }

    if (method === 'GET') {
        if (urlObj.pathname === '/' || urlObj.pathname === '/index') {
            res.write('<head><meta charset="utf-8"/></head>');
            res.end('首页欢迎您！')
        } else if (urlObj.pathname === '/list') {
            res.end(JSON.stringify(obj));
        } else {
            res.end('404');
        }
    }
})

server.listen(3000, () => {
    console.log('ok!!!');
})