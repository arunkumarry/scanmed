import express from "express";

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req, res, next) => {
  return res.status(200).send({ message: "Welcome to scanmed!!!" });
});

export default indexRouter;
