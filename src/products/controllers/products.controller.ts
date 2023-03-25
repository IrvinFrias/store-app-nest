import {Body, Controller, Delete, Get, HttpCode,
    Param, Post, Put,
} from '@nestjs/common';
import { ProductsService } from "../services/products.service";
import {  ProductDto } from "../dto/product.dto";
import {ValidationProductsPipe} from "../pipes/products.pipe";

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get()
    @HttpCode(200)
    getAllProducts(): ProductDto[]{
        return this.productsService.getAllProducts();
    }

    @Post()
    @HttpCode(200)
    createProduct(@Body(new ValidationProductsPipe()) newProduct: ProductDto): any {
        this.productsService.createNewProduct(newProduct);
        return {message: "New Product added", new: newProduct}
    }

    @Get(':id')
    @HttpCode(200)
    finOneById(@Param('id') id: string): ProductDto{

        //throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)

        //throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error
        // description' })
        return this.productsService.findOneById(id);
    }

    @Put(':id')
    @HttpCode(200)
    updateOneById(@Param('id') id: string, @Body() product: ProductDto): any{
        this.productsService.updateOneById(id, product);
        return {"message": "Product updated successfully"};
    }

    @Delete(':id')
    @HttpCode(200)
    deleteOneById(@Param('id') id: string): any{
        this.productsService.deleteOnebyId(id);
        return {message: "Product deleted successfully"};
    }


}
