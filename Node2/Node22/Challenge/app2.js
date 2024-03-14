const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const PORT = 3000;

const users = [
  {
    email: "arkx@gmail.com",
    password: "azert",
  },
  {
    email: "yuri@gmail.com",
    password: "yuri123",
  },
];

app.use(express.json());

const generateToken = (email) => {
  const token = jwt.sign({ email: email }, "Secret123", { expiresIn: "1000s" });
  return token;
};

const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json(" you are not authorized");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.json("token not exist");
  }
  jwt.verify(token, "Secret123", (error, user) => {
    if (error) {
      res.status(401).json(" you are not authorized");
    }
    console.log("userrrrrrrr", user);
    req.user = user;
  });
  next();
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ message: "Email not exist" });
  }
  if (user.password != password) {
    res.status(401).json({ message: "Password incorrect" });
  }
  const token = generateToken(email);
  res.status(200).json(token);
});

app.get("/", auth, (req, res) => {
  res.send(`you are authenicated as ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
