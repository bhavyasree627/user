const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Bhavya:Bhavya627@atlascluster.eblqk.mongodb.net/")
.then(() => {
    console.log("MongoDB Connected");
})
    .catch(() => {
        console.log("mongoDB connection FAILED");
})