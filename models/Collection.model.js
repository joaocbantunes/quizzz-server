const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
  id: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  name: { type: String },
  difficulty: { type: String },
});

const Collection = model("Collection", collectionSchema);

module.exports = Collection;

