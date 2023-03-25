import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {ProductsController} from './controllers/products.controller';
import {ProductsService} from "./services/products.service";
import {ProductsMiddleware} from "./middleware/products.middleware";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(ProductsMiddleware)
        .exclude({path: 'pipes/:id', method: RequestMethod.DELETE})
        .forRoutes(
            {path: 'products', method: RequestMethod.GET},
                  {path: 'pipes/:id', method: RequestMethod.GET}
        )

  }
}
