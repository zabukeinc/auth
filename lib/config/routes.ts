import { Application, Request, Response } from "express";
import { AuthController } from "../controllers/auth.controller";

export class Routes {
  public authController: AuthController = new AuthController();

  public routes(app: Application): void {
    app.route("/api/auth/login").post(this.authController.login);

    app.all("*", function (req: Request, res: Response) {
      res.status(404).send({
        status: false,
        message: "Endpoint not found",
      });
    });
  }
}
