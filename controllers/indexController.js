const { Formulario } = require('../models');
const Sequelize = require('sequelize');

const indexController = {
    showHome: (req, res, next) => {
      res.render('index', { title: 'Express' });
    },
    async saveForm(req, res) {
      try {
        const { name, email, message } = req.body;

        const enviado = await Formulario.create({
          name, 
          email, 
          message,
          create_at: new Date().toISOString(),
        })

        console.log(enviado);
        return res.send('formulario recebido!');
      } catch (error) {
        console.log(error)
      }
      
    }
};

module.exports = indexController;