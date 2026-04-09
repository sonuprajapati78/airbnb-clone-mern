const express = require("express");
const app = express();
const mongooose = require("mongoose");
const listing = require("../models/listing.js");

const MONGO_URL = "'mongodb://127.0.0.1:27017/test'";

main ().then (() => {
    console.log ("connected to database");
})
.catch ((err)=> {
    console.log (err);

});

async function main () {
    await mongoose.connect (MONGO_URL);
}

app.get ("/", (req, res)=> {
    res.send ("welcome to wanderlast");

})

app.get("/testlisting", async (req, res) => {
    let samplelisting = new listing({
        title: "My New title",
        description: "By the beach",
        price: 1500,
        location: "Goa",
        country : "India",
    })
    await samplelisting.save();
    console.log ("sample was saved to database");
    res.send("Sample listing created!");
})


app.listen(8080, () => {
    console.log ("server is running on port 8080");

})