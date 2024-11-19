const express = require("express");
const { login, protectedContent, ROTA1, ROTA2 } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);
router.get("/rota1", ROTA1);
router.get("/rota2", ROTA2);

module.exports = router;
