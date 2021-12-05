exports.usersController = (req, res, next) => {
  res.json({
    usersList: ["user 1", "user 2"],
  });
};
