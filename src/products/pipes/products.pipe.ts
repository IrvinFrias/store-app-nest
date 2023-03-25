import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { ValidationError } from 'class-validator';

@Injectable()
export class ValidationProductsPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors: ValidationError[] = await validate(object);
    if (errors.length > 0) {
      const validationErrors = [];
      errors.forEach(error => {
        const constraints = error.constraints;
        for (const key in constraints) {
          if (constraints.hasOwnProperty(key)) {
            validationErrors.push(constraints[key]);
          }
        }
      });
      throw new BadRequestException(validationErrors);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
