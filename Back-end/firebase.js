const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Path to your service account key JSON file

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://octopus-f0874.firebaseio.com", // Replace with your Firebase project's database URL
});

const database = firebaseAdmin.database();

const getData = (req, res) => {
  // const todoId = req.params.id;

  const todoRef = database.ref("Todo");
  todoRef
    .get()
    .then(() => {
      res.status(200).json({ message: "Todo  successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

const postData = (req, res) => {
  // const todoId = req.params.id;

  const todoRef = database.ref("Todo");
  todoRef
    .post({ data: req.body })
    .then(() => {
      res.status(200).json({ message: "Todo updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = { postData, getData };
