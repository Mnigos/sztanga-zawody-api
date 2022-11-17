import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessagesModule } from '~/messages'
import { DocumentName, ModelName } from '~/database'
import {
  CategoriesController,
  CategoriesService,
  CategoryRepository,
  CategorySchema,
} from '~/categories'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName.Category, schema: CategorySchema },
    ]),
    MessagesModule.register(DocumentName.Category),
  ],
  providers: [CategoriesService, CategoryRepository],
  controllers: [CategoriesController],
  exports: [CategoriesService, CategoryRepository],
})
export class CategoriesModule {}
