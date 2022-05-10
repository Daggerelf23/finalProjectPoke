import createError from "http-errors";
import express from "express";
import path from "path";


import { projectRouter} from "./routes/Project";
import { todoRouter } from "./routes/Todo";
import connect from "./lib/db.js";
import cors from "cors";


const app = express();
app.use(cors());


app.set("db", async (collection) => {
  const mongo = await connect();
  return mongo.db("local").collection(collection);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(path.resolve(), "public")));


app.use("/projects", projectRouter)
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: "error" });
});

export default app;
