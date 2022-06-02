const router = require("express").Router();
const sequelize = require("../config/connection");
const { Project, User, Donation } = require("../models");

router.get("/", async (req, res) => {
  // Pass session and data into template
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

// Login page route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Signup page route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// Create project route
router.get("/projects/create", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("createproject");
});

router.get("/projects", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render("all-projects", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route for a project by ID
router.get("/projects/:id", (req, res) => {
  Project.findByPk(req.params.id, {
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
      "donation_total",
      "created_at",
    ],
    include: [
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
      // Serialize data
      const post = dbProjectData.get({ plain: true });
      // Pass to template
      res.render("project", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
