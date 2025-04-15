import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

// Instanciando o roteador
const router = Router();

// Usando arrow functions para preservar o contexto de 'this' automaticamente
router.post("/orders", OrderController.createOrder.bind);
router.get("/orders", OrderController.getAllOrders.bind);
router.get("/orders/:id", OrderController.getOrderById.bind);
router.put("/orders/:id", OrderController.updateOrderStatus.bind);
router.delete("/orders/:id", OrderController.deleteOrder.bind);

export default router;