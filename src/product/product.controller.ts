import { Controller, Get, Post, Put, Delete, Body, Param, Query, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service'
import { ProductDTO } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface'
import { get } from 'http';


@Controller('product')
export class ProductController {
    constructor ( private productService: ProductService) {}

    @Get('/')
    async readProducts(@Res() res): Promise <Product[]> {
        const productos = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            productos
        });
    }

    @Get('/:productId')
    async readProduct(@Param('productId') productId: string, @Res() res): Promise <Product>{
        console.log(productId);
        const producto = await this.productService.getProduct(productId);
        if (!producto) throw new NotFoundException('El producto no existe.');
        return res.status(HttpStatus.OK).json(producto);
    }

    @Post()
    async createProduct (@Body() productDTO: ProductDTO, @Res() res) {
        //console.log(productDTO);
        const producto = await this.productService.createProduct(productDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto creado satisfactoriamente.',
            producto: producto 
        })
    }

    @Delete(':productId')
    async deleteProduct (@Param('productId') productId: string, @Res() res): Promise <Product> {
        const producto = await this.productService.deleteProduct(productId);
        if(!producto) throw  new NotFoundException('El producto no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Producto eliminado.',
            producto
        });
    }

    @Put(':productId')
    async updateProduct (@Param('productId') productId: string, @Body() productDTO: ProductDTO, @Res() res): Promise <Product> {
        console.log('put con parámetro');
        const producto = await this.productService.updateProduct(productId, productDTO);
        if(!producto) throw new NotFoundException('El producto no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Producto modificado.',
            producto
        });
    }

    // @Put()
    // async updateProductQuery (@Query('productId') productId: string, @Body() productDTO: ProductDTO, @Res() res): Promise <Product> {
    //     console.log('put con query');
    //     const producto = await this.productService.updateProduct_n(productId, productDTO);
    //     if(!producto) throw new NotFoundException('El producto no existe.');
    //     return res.status(HttpStatus.OK).json({
    //         message: 'Producto modificado.',
    //         producto
    //     });
    // }

    @Put()
    async updateProductQuery (@Query('productId') productId: string, @Body() productDTO: ProductDTO, @Res() res): Promise <Product> {
    //  console.log('put con query');
        const producto = await this.productService.updateProduct_m(productId, productDTO);
        if(!producto) throw new NotFoundException('El producto no existe.');
        return res.status(HttpStatus.OK).json({
            message: 'Producto modificado.',
            producto
        });
    }
}
