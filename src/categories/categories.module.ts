import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessagesModule } from '../messages/messages.module'
import { DocumentName, ModelName } from '../database'

import { CategoriesService } from './categories.service'
import { CategoriesController } from './categories.controller'
import { CategorySchema } from './category.schema'
import { CategoryRepository } from './category.repository'

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
