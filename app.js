var express = require("express");
var app = express();

app.set("port", process.env.PORT || 5000);

app.get("/", function (request, response) {
  response.send("<h1>Hello World!</h1>");
});

app.listen(app.get("port"), function () {
  console.log("Node app is listening at port 5000");
});
