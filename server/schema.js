const mongoose = require("./mongoose.js");
const Schema = mongoose.Schema;

const tempSchema = mongoose.model(
    "Temp",
    new Schema(
        {
            title: { type: Schema.Types.String }
        },
        {
            timestamps: true,
            strict: false
        }
    )
);
module.exports = tempSchema;
