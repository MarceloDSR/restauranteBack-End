import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const middleware = new AuthMiddleware()

// Instanciando o roteador
const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/users/', middleware.authenticateToken, UserController.getAll);

export default router;