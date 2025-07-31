const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const formattedListings = require("./data.js"); // this should be the formatted file I gave you




main()
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  
  // Add a static owner ID to each listing
  const listingsWithOwner = formattedListings.map(obj => ({
    ...obj,
    owner: "687d64f1c952f7b0e34b4e25" // or a real ObjectId from your user collection
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("Data was initialized");
};

initDB();
