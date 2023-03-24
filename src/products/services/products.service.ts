import { Injectable} from "@nestjs/common";
import {ProductDto} from "../dto/product.dto";

@Injectable()
export class ProductsService {
    private products: ProductDto[] = [];

    firstProduct: ProductDto = {id: "1", name: "Leche", price: "25", quantity: 10}
    constructor() {this.initProducts();}
    initProducts(){this.products.push(this.firstProduct);}

    getAllProducts(): ProductDto[]{
        return this.products;
    }

    createNewProduct(newProduct: ProductDto): void{
        this.products.push(newProduct);
    }

    findOneById(id: string){
      return this.products.find((product) => product.id === id);
    }

    updateOneById(id: string, updateProduct: ProductDto): void{
        this.products = this.products.map(product => product.id === id ? {...product, ...updateProduct} : product);
    }

    deleteOnebyId(id: string){
        this.products = this.products.filter(product => product.id !== id);
    }



}