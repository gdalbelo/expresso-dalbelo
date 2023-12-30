const mongoose = require('mongoose');
const slug = require('slug');

const { Schema } = mongoose;

const freteSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.titulo)}
    },
    descricao: {
        type: String,
        required: true
    },
    distancia: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('frete', freteSchema);