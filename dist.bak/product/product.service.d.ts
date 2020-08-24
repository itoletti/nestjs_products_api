import { Model } from 'mongoose';
import { Product } from '../interfaces/product.interface';
import { ProductDTO } from '../dto/product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productId: string): Promise<Product>;
    createProduct(productDTO: ProductDTO): Promise<Product>;
    deleteProduct(productId: string): Promise<Product>;
    updateProduct(productId: string, productDTO: ProductDTO, res: any): Promise<Product>;
    updateProduct_n(productId: string, productDTO: ProductDTO): Promise<Product>;
}
