const mongoose = require("./mongoose.js");
const Schema = mongoose.Schema;

const tempSchema = mongoose.model(
    "Users",
    new Schema(
        {
            username: { type: Schema.Types.String },
            password: { type: Schema.Types.String }
        },
        {
            timestamps: true,
            strict: false
        }
    )
);
module.exports = tempSchema;
