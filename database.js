const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

client.connect();
const db = client.db("mydb");

// async function insertdata() {
//   const sample = await db.collection("users").insertOne({
//     lastname: "Doe",
//     firstname: "John",
//     location: "Remote",
//   });
//   console.log(sample);
// }

// Form 1
// async function main() {
//   const data = await db.collection("users").findOne();
//   console.log(data);
// }

// Form 2
const main = async () => {
  const data = await db.collection("users").findOne();
  console.log(data);
};

// insertdata();
main();
