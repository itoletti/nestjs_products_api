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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const product_dto_1 = require("../dto/product.dto");
const mongoose_3 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getProducts() {
        return await this.productModel.find();
    }
    async getProduct(productId) {
        const product = await this.productModel.findById(productId);
        return product;
    }
    async createProduct(productDTO) {
        const newProduct = new this.productModel(productDTO);
        return await newProduct.save();
    }
    async deleteProduct(productId) {
        const product = await this.productModel.findByIdAndDelete(productId);
        return product;
    }
    async updateProduct(productId, productDTO, res) {
        console.log(productDTO);
        const product = await this.productModel.findByIdAndUpdate(productId, product_dto_1.ProductDTO, { new: true }, (err, procictoUpdated) => {
            if (err)
                return res.status(500).send({ message: `Error al actualizar la nota: ${err}` });
            if (!procictoUpdated)
                return res.status(500).send({ message: 'No retornó objeto actualizado' });
            res.status(200).send({ nota: procictoUpdated });
        });
        return product;
    }
    async updateProduct_n(productId, productDTO) {
        console.log(productDTO);
        const res = await this.productModel.update({
            "_Id": mongoose_3.Types.ObjectId(productId)
        }, productDTO);
        console.log(res);
        return await this.productModel.findById(mongoose_3.Types.ObjectId(productId));
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map