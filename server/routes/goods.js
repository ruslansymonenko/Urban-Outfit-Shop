import express, { Router } from "express";
import { getGoods } from "../controllers/getGoods.js";

const router = new Router();

router.get('/', (req, res) => {
  const Goods = getGoods();
  res.send(Goods);
});


export default router;