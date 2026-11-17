const http = require("http");
const fs = require("fs");
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res)=> {
    console.log('요청 생성');
    console.log(req.method);

    // res.setHeader("content-Type", "text/plain");

    // res.write("hello node");
    // res.end();
    // res.setHeader('content-Type', 'text/html');
    // const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    // readStream.pipe(res);
    const {method, url} = req;
    if (method == 'GET' && url == "/home"){
        res.statusCode = 200;
        res.end('HOME')
    } else if (method == 'GET' && url == '/about'){
        res.statusCode == 200;
        res.end('ABOUT');
    } else {
        res.statusCode = 404;
        res.end('not found');
    }
        
});

server.listen(port, "0.0.0.0", () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});