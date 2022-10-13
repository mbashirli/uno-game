express = require("express");
dontenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

app = express();

// middlewares
app.use(express.json()); //  body parser for raw json
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler); // override default error handler of express

app.listen(port, () => {
  console.log(`Server started on Port: ${port}`);
});
