const express  = require("express");
const app = express();
const initData = require("./data.js");
const mongoose =require("mongoose");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const formattedListings = require("./data.js");

main()
.then(()=>{console.log("connected to DB")})
.catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect(MONGO_URL);
}


const initDB = async ()=>{
    await Listing.deleteMany({});
    formattedListings = formattedListings.map((obj)=>({...obj,owner:"687a4330fc4285e567862f9f"}));
    await Listing.insertMany(formattedListings);
    console.log("Data was intialized");
};


initDB();
