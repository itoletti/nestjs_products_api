import { Document } from 'mongoose'; 

// en este caso los tipos van con minuscula porque son tipos de typescript
export interface Product extends Document {
    name: string,
    description: string,
    imageURL: string,
    price: number,
    createAt: Date
}