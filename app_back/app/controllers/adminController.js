const bcrypt = require('bcrypt');
const { User } = require('../models');

const saltRounds = 10;

const adminController = {

  notFound: async (req, res) => {
    res.status = 404;
    res.json({ error: 'page not found' });
  },

  isLogged: (req, res) => {
    console.log('>> POST /isLogged', req.session.user);
    if (req.session.user) {
      res.json({ logged: true, pseudo: req.session.user.userName });
    }
    else {
      res.json({ logged: false });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.json({ logged: false });
  },

  login: async (req, res) => {
    try {
      const { email } = req.body;
      const { password } = req.body;

      const user = await User.findOne({
        where: { email: `${email}` },
      });
      if (!user) {
        res.status(404).json({ error: 'email not found' });
      }

      console.log('password', password, 'user.password', user.password);

      await bcrypt.compare(password, user.password).then((result) => {
        console.log('in compare result', result);

        if (result) {
          req.session.user = user;
          console.log('<< 200 OK', user);
          res.json({ logged: true, pseudo: user.userName });
        }
        else {
          res.status(404).json({ error: 'wrong password' });
        }
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  updateAccount: async (req, res) => {
  // currently cannot change email address, just firstName, lastName, userName
    try {
      const userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      };

      const user = await User.findOne({
        where: { email: `${userDetails.email}` },
      });
      if (!user) {
        res.status(404).json({ error: 'email not in database' });
      }

      await bcrypt.compare(userDetails.password, user.password).then((result) => {
        console.log('in compare result', result);

        if (result) {
          user.update(
            {
              firstName: userDetails.firstName,
              lastName: userDetails.lastName,
              userName: userDetails.userName,
            },
          ).then((updatedUser) => {
            // send the details or not found
            if (updatedUser) {
              res.json(updatedUser);
            }
          }).catch((error) => {
            console.log(error);
            res.status(500).json({ error });
          });
        }
        else {
          res.status(404).json({ error: 'wrong password' });
        }
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  createAccount: async (req, res) => {
    try {
      const userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      };

      const emailCheck = await User.findOne({
        where: { email: `${userDetails.email}` },
      });
      if (emailCheck) {
        res.status(404).json({ error: 'email already in database' });
      }

      await bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userDetails.password, salt, (err, hash) => {
          userDetails.password = hash;

          User.create(
            userDetails,
          ).then((createdUser) => {
            // send the details or not found
            if (createdUser) {
              res.json(createdUser);
            }
            else {
              res.status(404).json({ error: 'wrong password' });
            }
          }).catch((error) => {
            console.log(error);
            res.status(500).json({ error });
          });
        });
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const userId = parseInt(req.params.id, 10);
      const user = await User.findByPk(userId, {

      });
      // send the details or not found
      if (user) {
        user.destroy();
        res.json({ message: 'user successfuly destroied' });
      }
      else {
        res.status(404).json({ error: 'user not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  changePassword: async (req, res) => {
    try {
      const userDetails = {
        email: req.body.email,
        oldPassword: req.body.oldPassword,
        newPassword: req.body.newPassword,
      };

      const user = await User.findOne({
        where: { email: `${userDetails.email}` },
      });
      if (!user) {
        res.status(404).json({ error: 'email not in database' });
      }

      await bcrypt.compare(userDetails.oldPassword, user.password).then((result) => {
        console.log('in compare result', result);

        if (result) {
          bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(userDetails.newPassword, salt, (err, hash) => {
              userDetails.password = hash;
              user.update(
                { password: `${userDetails.password}` },
              ).then((updatedUser) => {
                // send the details or not found
                if (updatedUser) {
                  res.json(updatedUser);
                }
              }).catch((error) => {
                console.log(error);
                res.status(500).json({ error });
              });
            });
          });
        }
        else {
          res.status(404).json({ error: 'wrong password' });
        }
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = adminController;
