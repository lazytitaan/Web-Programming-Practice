const http = require("http");
const fs = require("fs");
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res)=> {
    console.log('요청 생성');
    console.log(req.method);

    // res.setHeader("content-Type", "text/plain");

    // res.write("hello node");
    // res.end();
    res.setHeader('content-Type', 'text/html');
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf8");
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log(`$(PORT)번 포트에서 서버 실행 중`);
});