let mongoose = require("mongoose");

let CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ]
});

module.exports = mongoose.model("Category", CategorySchema);
