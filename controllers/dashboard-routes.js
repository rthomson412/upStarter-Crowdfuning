const router = require("express").Router();
const sequelize = require("../config/connection");
const { Project, User, Comment, Donation } = require("../models");
const withAuth = require("../utils/auth");

// Route to dashboard for logged in user
router.get("/", withAuth, (req, res) => {
  Project.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "collaborators_required",
      "user_id",
      "fund_needed",
      "donation_total",
      "created_at",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Project,
          attributes: ["title"],
        },
      },
      {
        model: Donation,
        attributes: ["id", "amount", "created_at"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((dbProjectData) => {
      // Pass serialized data to template
      const projects = dbProjectData.map((project) =>
        project.get({ plain: true })
      );
      res.render("dashboard", { projects, logged_in: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit individual project route
router.get("/edit/:id", withAuth, (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "collaborators_required",
      "user_id",
      "fund_needed",
      "created_at",
    ],
    include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'created_at'],
            include: {
              model: Project,
              attributes: ['title']
            }
        },
        {
        model: Donation,
        attributes: ["id", "amount", "created_at"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project at this ID." });
        return;
      }
      // Pass serialized data to template
      const project = dbProjectData.get({ plain: true });
      res.render("editproject", { project, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
