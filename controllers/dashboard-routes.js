const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Donation } = require('../models');
// redirect unauthenticated users to the login page
const withAuth = require('../utils/auth')

// RENDER DASHBOARD WHEN LOGGED IN
router.get('/', withAuth, (req, res) => {
    Project.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'description',
        'user_id',
        'fund_needed',
        'donation_total',
        'created_at'
      ],
      include: [
        {
          model: Donation,
          attributes: ['id', 'amount', 'created_at'],
          include: {
            model: User,
            attributes: ['name']
          }
        },
        {
          model: User,
          attributes: ['name']
        }
      ]
    })
      .then(dbProjectData => {
        const projects = dbProjectData.map(project => project.get({ plain: true }));
        res.render('dashboard', { projects, logged_in: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/edit/:id', withAuth, (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'title',
        'description',
        'user_id',
        'fund_needed',
        'created_at'
    ],
    include: [
      {
        model: Donation,
        attributes: ['id', 'amount', 'created_at'],
        include: {
          model: User,
          attributes: ['name']
        }
      },
      {
        model: User,
        attributes: ['name']
      }
    ]
  })
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No porject found with this id' });
        return;
      }
      const project = dbProjectData.get({ plain: true });
      res.render('editproject', { project, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edituser', withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.session.user_id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      const user = dbUserData.get({ plain: true });
      res.render('edit-user', {user, loggedIn: true});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  

module.exports = router;