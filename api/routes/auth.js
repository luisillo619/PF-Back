const router = require("express").Router();
const passport = require("passport");

//
router.get("/login/success", (req, res) => {
console.log(req.user)
    

	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
			pepe: "pepe"
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000/home",
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000/");
});

module.exports = router;
