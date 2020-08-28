import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const accessTokenSecret = "secretaccesstoken!";

export class AuthController {
  public login(req: Request, res: Response) {
    const username = req.body.username;
    const password = req.body.password;

    if (username == "user" && password == "user") {
      const accessToken = jwt.sign({ username: username }, accessTokenSecret);
      res.status(200).json({
        status: true,
        message: "Successfully login",
        token: accessToken,
      });
    } else {
      res.status(500).json({
        status: false,
        message: "Username or password is incorrect",
      });
    }
  }
}
