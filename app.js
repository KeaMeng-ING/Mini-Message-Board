// app.js
const express = require("express");
const path = require("node:path");

const app = express();
const controllers = require("./controllers/indexController");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Define the index route
app.get("/", controllers.home);
app.get("/new", controllers.getForm);
app.post("/new", controllers.postForm);
app.get("/message/:id", controllers.getMessage);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
