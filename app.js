const express = require("express")
const app = express()

//Rotas
app.get("/", function(req, res){ // A barra sozinha está como a nossa página principal
    res.sendFile(__dirname + "/html/index.html") /* o __dirname vai ir para o diretorio raiz, a raiz do projeto com o "+" que é a contatenação vai adionar o camino "/html/index.html", ficaria mais ou menos assim ( /home/gabriel/Documentos/Programação/Back-end/Node/html ) */
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){ //Sempre que for criar uma rota não pode esquecer a barra antes do nome da rota
    res.send("Bem-Vindo ao Meu blog sobre...")
})

// Rotas Dinamicas | Parâmetros

app.get("/ola/:cor/:nome/:profissao", function(req, res){ // Quando se coloca uma / e depois : vai se criar um parâmetro
    res.send/*A função "send" só pode ser usada uma unica vez dentro de uma uma rota e/ou função */("Ola, <strong>"+req.params.nome+"</strong>") /* Com o (req.params) ele vai te mostrar todos os parametros digitados ou requisitados || Já o (req.params.nome) vai fazer com que um dos parametro saja exibido na tela junto com a menssagem */
})


app.listen(3000, function(){
    console.log('Servidor rodando na URL: http://localhost:3000')
}) // o app.listen deve estar na ultima linha do código para que ele funcione