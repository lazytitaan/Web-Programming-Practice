const express = require('express');
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get('/', (req,res) =>{
    res.status(200);
    res.send('Hello, Node!');
});

app.listen(PORT, ()=>{
    console.log(`${PORT} 포트로 서버 실행`);
});