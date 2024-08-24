require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const movieRoutes = require("./routes/Movies/movies");
const bookRoutes = require("./routess/Book/book");

app.use(express.json()); 

app.use("/movies", movieRoutes);
app.use("/book", bookRoutes);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});





