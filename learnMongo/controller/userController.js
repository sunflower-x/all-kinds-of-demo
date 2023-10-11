const user = require("../model/user");
class UserController {
  async register(req, res) {
    const userObj = new user(req.query);
    // console.log(req.query, "req");
    const userInfo = await userObj.save();
    res.send({
      status: 200,
      msg: "注册成功",
      data: userInfo,
    });
  }
}

module.exports = new UserController();
