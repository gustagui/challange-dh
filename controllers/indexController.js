const { Formulario } = require('../models');
const Sequelize = require('sequelize');

const indexController = {
    showHome: (req, res, next) => {
      res.render('index', { title: 'Express' });
    },
    store: async (req, res) => {
      const { name, email, message } = req.body;

      const enviado = await Formulario.create({
        name, 
        email, 
        message
      });

      console.log(enviado);

      return res.send('formulario recebido!');
    }
};

module.exports = indexController;