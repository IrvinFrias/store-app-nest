import { IsString, IsInt} from "class-validator";

export class ProductDto {
    @IsString({message: 'El id debe ser una cadena de caracteres'})
    id: string;
    @IsString()
    name: string;
    @IsString()
    price: string;
    @IsInt()
    quantity: number;
}

