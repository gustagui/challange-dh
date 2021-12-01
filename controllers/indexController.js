const indexController = {
    showHome: (req, res, next) => {
        res.render('index', { title: 'Express' });
      },
};

module.exports = indexController;