
const express = require("express");
const app = express();
const port = 8083;

// app.get("/", (req, res) => res.send("<h1>"+dt.myDateTime()+"</h1>"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('content', {
        title: 'Pug.js Example',
        message: 'Hello, Pug.js!'
    });
});

// const PORT = 3000;
var server = app.listen(port, () => {`Server is running at http://localhost:${port}`});
