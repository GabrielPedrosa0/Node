const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'G@br1906', {
    host: "localhost",
    dialect: 'mysql',
})

const postagem = sequelize.define('postagens', {
    //Aqui dentro das chaves vai estar a sua tebela
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

