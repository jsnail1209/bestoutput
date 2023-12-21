const { response } = require('express');
const express = require('express');

const app = express();

app.get('/page/:id', (request, response) => {
    //토큰을 꺼냅니다.
    const id = request.params.id;

    //응답합니다.
    response.redirect('http://hanbit.co.kr');
    response.send(`<h1>${id} Page</h1>
    <br><h1>Hello express</h1>`);
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});