import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface'
import { ProductDTO} from '../dto/product.dto'
import { Types } from 'mongoose'
 
@Injectable()
export class ProductService {
    constructor(@InjectModel('product') private readonly productModel: Model <Product>) {}

    async getProducts(): Promise <Product[]> {
        return await this.productModel.find();
    }
    
    async getProduct(productId: string): Promise <Product> {
        const product = await this.productModel.findById(productId);
        // const product = await this.productModel.findById(Types.ObjectId(productId));
        return product;
    }

    async createProduct(productDTO: ProductDTO): Promise<Product> {
        const newProduct = new this.productModel(productDTO); 
        return await newProduct.save();
    }

    async deleteProduct(productId: string) {
        const product = await this.productModel.findByIdAndDelete(productId);
        // const product = await this.productModel.findByIdAndDelete(Types.ObjectId(productId))
        return product;
    }

    async updateProduct(productId: string, productDTO: ProductDTO): Promise <Product> {
        console.log(productDTO)
        const product = await this.productModel.findByIdAndUpdate(productId, productDTO, {new: true});
        return product;
    }

    async updateProduct_n(productId: string, productDTO: ProductDTO): Promise <Product> {
       console.log(productDTO);
       const res = await this.productModel.update({
           "_Id":Types.ObjectId(productId)}, productDTO
       ); 
       console.log(res);
       return await this.productModel.findById(Types.ObjectId(productId))
    }

    async updateProduct_m(productId: string, productDTO: ProductDTO): Promise <Product> {
        console.log(productDTO);
        let product = await this.productModel.findById(productId);
        product.price = productDTO.price;
        return product.save();
     }
}
