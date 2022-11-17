import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { CategoryApi } from './category.schema'
import { CategoryDto } from './category.dto'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<CategoryApi>
  ) {}

  async create(category: CategoryDto): Promise<boolean> {
    console.log(category)
    try {
      await this.categoryModel.create(category)

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async delete(_id: string): Promise<boolean> {
    const foundedCategory = await this.categoryModel.findOne({ _id }).exec()

    if (!foundedCategory)
      throw new BadRequestException('Cannot find category with given id')

    try {
      await this.categoryModel.deleteOne({ _id }).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async get(): Promise<CategoryDto[]> {
    return (await this.categoryModel.find().exec()) as CategoryDto[]
  }

  async getOne(_id: string): Promise<CategoryDto> {
    return (await this.categoryModel.findOne({ _id }).exec()) as CategoryDto
  }
}
