import { ProductService } from './product.service';
import { ProductDTO } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    readProducts(res: any): Promise<Product[]>;
    readProduct(productId: string, res: any): Promise<Product>;
    createProduct(productDTO: ProductDTO, res: any): Promise<any>;
    deleteProduct(productId: string, res: any): Promise<Product>;
    updateProduct(productId: string, productDTO: ProductDTO, res: any): Promise<Product>;
    updateProductQuery(productId: string, productDTO: ProductDTO, res: any): Promise<Product>;
}
