const express = require("express");
const app = express();
const port = 8080;

const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("index.html", function(err, data) {
    if (err) {
      return;
    }

    res.set("Content-Type", "text/html");
    res.status(200).send(data);
  })

});

app.get("/:page?", (req, res) => {
  if (!req.params.page) {
    return;
  };

  fs.readFile(req.params.page + ".html", function(err, data) {
    if (err) {
      return;
    }

    res.set("Content-Type", "text/html");
    res.status(200).send(data);
  })
});


app.get("*", (req, res) => {
  fs.readFile("404.html", function(err, data) {
    if (err) {
      res.status(404).send("complete failure");
    }

    res.set("Content-Type", "text/html");
    res.status(404).send(data);
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
