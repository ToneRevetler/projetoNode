const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastrodesistema', 'root', 'EcoFlame2023',{
    host:'localhost',
    dialect:'mysql'
})

const Postagem = sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

Postagem.sync({force:true})