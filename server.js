const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
    });

    let body = [];

    req
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
      });

    const data = JSON.stringify({
        success: false,
        error: 'Not Found',
        data: null,
    })

    res.end(data);
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
