const { Schema, model } = require("mongoose");

const statusSchema = new Schema({
    OrderComplete:{
        Type: Boolean,
        default: false,
    },
    OrderCanceled:{
        Type: Boolean,
        default: false,
    },
    Order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    },
})

module.exports = model("Status", statusSchema);