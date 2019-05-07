import { Router } from "express";
import Users from "../models/Users";

const api = Router();

api.get("/", async (req, res) => {
  const data = await Users.findOne({ where: { ID: 1 } });
  console.log(data);

  res.json({
    route: "users",
    user: data
  });
});

api.post("/", async (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then(user => {
      res.json("User added successfully");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

export default api;
