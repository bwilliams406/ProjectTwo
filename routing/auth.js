const authController = require('../controllers/authcontroller');

module.exports = function (app, passport) {


    app.post('/signup', passport.authenticate('local-signup'), function (req, res) {
        console.log("POSTING", req.body)
        res.json({ success: true, user: req.user });
    });


    // app.get('/logout', authController.logout);


    app.post("/signin", passport.authenticate("local-signin"), function (req, res) {
        console.log('Im posted')
        res.json({ success: true, user: { id: req.user.id, firstname: req.user.firstname, lastname: req.user.lastname } });
    })
}






