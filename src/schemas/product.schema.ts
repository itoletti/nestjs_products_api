import { Schema } from 'mongoose'

//en este caso los tipos de datos son de Mongoose y usan mayuscula String, Number
export const productSchema = new Schema ({
    name: { type: String, required: true },
    description: String,
    imageURL: String,
    price: Number,
    createAt: { type: Date, default: Date.now }
})
