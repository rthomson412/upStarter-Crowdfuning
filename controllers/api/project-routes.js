const router = require("express").Router();
const { Project, User, Donation } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// All projects route
router.get("/", (req, res) => {
  Project.findAll({
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
    // List in time created descending order
    order: [["created_at", "DESC"]],
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
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Individual project route
router.get("/:id", (req, res) => {
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
      "donation_total",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["name"],
      },
      {
        model: Donation,
        attributes: ["id", "amount", "created_at"],
        include: {
          model: User,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project at this ID" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Individual create new project route
router.post("/", withAuth, (req, res) => {
  console.log(req.body);
  Project.create({
    title: req.body.title,
    description: req.body.description,
    collaborators_required: req.body.collaborators_required,
    user_id: req.session.user_id,
    fund_needed: req.body.fund_needed,
    donation_total: 0,
  })
    .then((dbProjectData) => res.json(dbProjectData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Edit existing project route
router.put("/:id", withAuth, (req, res) => {
  Project.update(
    {
      title: req.body.title,
      description: req.body.description,
      collaborators_required: req.body.collaborators_required,
      fund_needed: req.session.fund_needed,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project at this ID" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete route at a given ID
router.delete("/:id", withAuth, (req, res) => {
  Project.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProjectData) => {
      if (!dbProjectData) {
        res.status(404).json({ message: "No project at this ID" });
        return;
      }
      res.json(dbProjectData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
