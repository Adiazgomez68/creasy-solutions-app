const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { composeWithMongoose } = require("graphql-compose-mongoose");
constInscriptionSchema = new Schema(
    {
        id_project: mongoose.ObjectId,
        id_student: mongoose.ObjectId,
        state: String,
        entryDate: String,
        egressDate: String
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
    InscriptionSchema: mongoose.model("inscription", InscriptionSchema),
    InscriptionTC: composeWithMongoose(mongoose.model("inscription", InscriptionSchema)),
};