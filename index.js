
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8083;

app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.listen(port, () => {`Server is running at http://localhost:${port}`});
