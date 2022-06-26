const { Router } = require("express");
const { USER, ADMIN, SUPER } = require("../configs/constants");
const OrderControllers = require("../controllers/order");
const auth = require("../middlewares/auth");
const orderRouter = Router();

orderRouter.get("/user", auth(USER), OrderControllers.queryUsersOrdersList);
orderRouter.get("/", auth(ADMIN), OrderControllers.queryOrders);
orderRouter.get("/:_id", auth(USER), OrderControllers.getOneOrder);
orderRouter.get("/:_id", auth(ADMIN), OrderControllers.getOneOrder);
orderRouter.get("/:_id", auth(SUPER), OrderControllers.getOneOrder);

orderRouter.post("/", auth(USER), OrderControllers.createOrder);

orderRouter.put("/:_id", auth(ADMIN), OrderControllers.updateOrder);
orderRouter.put("/:_id", auth(USER), OrderControllers.updateOrder);
orderRouter.put("/:_id", auth(SUPER), OrderControllers.updateOrder);

orderRouter.put("/cancel-order/:_id", auth(USER), OrderControllers.cancelOrder);

orderRouter.delete("/:_id", auth(ADMIN), OrderControllers.removeOrder);

module.exports = orderRouter;
