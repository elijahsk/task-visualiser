const mongoose = require("../mongoose.js");
const Schema = mongoose.Schema;

const tempSchema = mongoose.model(
    "Tasks",
    new Schema(
        {
            title: { type: Schema.Types.String },
            username: { type: Schema.Types.String }
        },
        {
            timestamps: true,
            strict: false
        }
    )
);
module.exports = tempSchema;
