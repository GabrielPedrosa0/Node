let http = require('http')

http.createServer(function (req, res){
    res.end("Olá")
}).listen(3000)

console.log("Server está rodando!")