const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la reponse du premier serveur');


});

server.listen(process.env.PORT || 3000);