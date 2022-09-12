const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  autoIndex: true,
});

// const work = new Task({
//   Description: "      Getting the things Done       ",
// });

// work
//   .save()
//   .then(() => {
//     console.log(work);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
