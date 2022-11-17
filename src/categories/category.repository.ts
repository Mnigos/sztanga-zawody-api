import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { MessagesService } from '~/messages'
import { AbstractRepository, DocumentName, ModelName } from '~/database'
import { CategoryApi, CategoryDto } from '~/categories'

@Injectable()
export class CategoryRepository extends AbstractRepository<
  CategoryApi,
  CategoryDto
> {
  constructor(
    @InjectModel(ModelName.Category)
    private readonly categoryModel: Model<CategoryApi>,
    readonly messagesService: MessagesService
  ) {
    super(categoryModel, DocumentName.Category, messagesService)
  }
}
