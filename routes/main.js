// The main.js file of your application
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index")
    });

    app.get("/search", function (req, res) {
        res.render("search");
    })

    app.get("/register", function(req, res){
        res.render("register");
    });

    app.post("/registered", function(req, res){
        // saving data in database
        res.send(req.body);
    });
}