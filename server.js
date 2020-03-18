const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds013926.mlab.com:13926/heroku_g18mz0b0", {
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`Now listenin on port ${PORT}!`);
});