const express = require("express");
const app = express();

app.use("/users/", require("./routes/usersRoute"));

app.get("/", (req, res, next) => {
  res.send("Express HERE!!!");
});

app.listen(8001, () => {
  console.log("8001번에서 작동중...!");
});
