"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("../dto/product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async readProducts(res) {
        const productos = await this.productService.getProducts();
        return res.status(common_1.HttpStatus.OK).json({
            productos
        });
    }
    async readProduct(productId, res) {
        console.log(productId);
        const producto = await this.productService.getProduct(productId);
        if (!producto)
            throw new common_1.NotFoundException('El producto no existe.');
        return res.status(common_1.HttpStatus.OK).json(producto);
    }
    async createProduct(productDTO, res) {
        const producto = await this.productService.createProduct(productDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto creado satisfactoriamente.',
            producto: producto
        });
    }
    async deleteProduct(productId, res) {
        const producto = await this.productService.deleteProduct(productId);
        if (!producto)
            throw new common_1.NotFoundException('El producto no existe.');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto eliminado.',
            producto
        });
    }
    async updateProduct(productId, productDTO, res) {
        const producto = await this.productService.updateProduct(productId, productDTO, res);
        if (!producto)
            throw new common_1.NotFoundException('El producto no existe.');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto modificado.',
            producto
        });
    }
    async updateProductQuery(productId, productDTO, res) {
        const producto = await this.productService.updateProduct_n(productId, productDTO);
        if (!producto)
            throw new common_1.NotFoundException('El producto no existe.');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Producto modificado.',
            producto
        });
    }
};
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "readProducts", null);
__decorate([
    common_1.Get('/:productId'),
    __param(0, common_1.Param('productId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "readProduct", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Delete(':productId'),
    __param(0, common_1.Param('productId')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    common_1.Put(':productId'),
    __param(0, common_1.Param('productId')), __param(1, common_1.Body()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Query('productId')), __param(1, common_1.Body()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductQuery", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map