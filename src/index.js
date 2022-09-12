const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
require("./db/mongoose");

const app = express();

// app.use((req, res, next) => {
//   res.status(503).send("In Maintainance!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on Port - ${port}`);
});

// const Task = require("./models/task");

// const main = async () => {
//   const task = await Task.findById("6319d86e171132b96803a47f");
//   await task.populate("owner");
//   console.log(task.owner);
// };

// main();
