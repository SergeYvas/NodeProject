import express from "express";
import jwtVerifyer from "../midldewares/jwtverifyer";
import controller from "../controllers";
import authJWT from "../controllers/authController";

  const router = express.Router();

  router.get("/", (req, res) => {
    res.send("Hello world");
    res.end();
  });

  router.get("/api/products", jwtVerifyer, (req, res) => {
    controller.allProducts(request, response);
    // res.send("Returning ALL products");
    // res.end();
  });

  router.get("/api/products/:id", jwtVerifyer, (req, res) => {
    controller.singleProduct(req, res);

    // const { id } = req.params;
    // res.send(`Return SINGLE product with ID: ${id}`);
    // res.end();
  });

  router.get("/api/products/:id/reviews", jwtVerifyer, (req, res) => {
    const { id } = req.params;
    res.send(`Return ​ALL​ reviews for a single product with ID: ${id}`);
    res.end();
  });

  router.get("/api/users", jwtVerifyer, (req, res) => {
    controller.allUsers(req, res);
    // res.send("Return ALL users");
    // res.end();
  });
  router.post("/api/users", jwtVerifyer, (req, res) => {
    controller.addUser(req, res);
    // res.send("Return ALL users");
    // res.end();
  });


  router.post("/api/products", jwtVerifyer, (req, res) => {
    controller.addProduct(req, res);
    // res.send("Add ​NEW​ product and return it");
    // res.end();
  });

  router.post("/auth", (req, res) => {
    authJWT(req, res);
  });


export default router;
