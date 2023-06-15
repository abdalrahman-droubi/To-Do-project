// const express = require("express");
// const midllefireebase = require("./firebase");

// const app = express();
// app.get("/get", midllefireebase.getData,(req, res) => {
//   res.send("Hello, Express!");
// });
// app.get("/post", midllefireebase.postData,(req, res) => {
//   res.send("Hello, Express!");
// });
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
const express = require("express");
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Path to your service account key JSON file
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cors()
);
// Initialize Firebase
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://octopus-f0874-default-rtdb.firebaseio.com", // Replace with your Firebase project's database URL
});

const database = firebaseAdmin.database();

const getData = (req, res) => {
  const todoRef = database.ref("Todo");
  todoRef
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

const postData = (req, res) => {
  const todoRef = database.ref("Todo");
  todoRef
    .push(req.body)
    .then(() => {
      res.status(200).json({ message: "Todo added successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

// const deleteData = (req, res) => {
//   const todoId = req.params.id;
//   const todoRef = database.ref(`Todo}`);
//   todoRef
//     .remove()
//     .then(() => {
//       res.status(200).json({ message: "Todo deleted successfully" });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ message: "Internal server error" });
//     });
// };

app.get("/get", getData);
app.post("/post", postData);
// app.delete("/delete", deleteData);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
