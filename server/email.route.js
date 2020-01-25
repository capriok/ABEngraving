const router = require("express").Router();

router.route("/joinlist").post((req, res) => {
  const email = res.body.email;
});

module.exports = router;
