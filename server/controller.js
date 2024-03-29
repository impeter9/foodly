const Model = require('./model.js');

module.exports = {
  getrecipe: (req, res) => {
    Model.getrecipe((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(data);
      }
    });
  },
  postrecipe: (req, res) => {
    Model.postrecipe((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.body);
  },
  postregister: (req, res) => {
    Model.postregister((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(data);
      }
    }, req.body);
  },
  checkforuser: (email) => {
    Model.checkforuser(email);
  },
  createnewuser: (req, res, userinfo) => {
    Model.createnewuser((error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send('login');
      }
    })
    Model.createnewuser(userinfo);
  }
};
