const router = require("express").Router();
const { Donation } = require("../../models");
const withAuth = require("../../utils/auth");

// All donations route
router.get("/", (req, res) => {
  Donation.findAll({})
    .then((dbDonationData) => res.json(dbDonationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a donation route
router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Donation.create({
      amount: req.body.amount,
      project_id: req.body.project_id,
      user_id: req.session.user_id,
    })
      .then((dbDonationData) => res.json(dbDonationData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete a donation at a given ID
router.delete("/:id", withAuth, (req, res) => {
  Donation.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbDonationData) => {
      if (!dbDonationData) {
        res.status(404).json({ message: "No donation at this ID" });
        return;
      }
      res.json(dbDonationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
