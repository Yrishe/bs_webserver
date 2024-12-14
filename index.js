
const express = require("express");
const app = express();
const port = 8083;

require("./routes/main")(app)

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

var server = app.listen(port, () => {`Server is running at http://localhost:${port}`});
