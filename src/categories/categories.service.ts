import { Injectable } from '@nestjs/common'

import { CategoryDto } from './category.dto'
import { CategoryRepository } from './category.repository'
import { CategoryDocument } from './category.document'

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(category: CategoryDto): Promise<CategoryDocument> {
    return await this.categoryRepository.create(category)
  }

  async delete(_id: string): Promise<boolean> {
    return await this.categoryRepository.delete({ _id })
  }

  async get(): Promise<CategoryDocument[]> {
    return this.categoryRepository.find()
  }

  async getOne(_id: string): Promise<CategoryDocument> {
    return this.categoryRepository.findOne({ _id })
  }

  async update(
    _id: string,
    newCategory: CategoryDto
  ): Promise<CategoryDocument> {
    return this.categoryRepository.findOneAndUpdate({ _id }, newCategory)
  }
}
