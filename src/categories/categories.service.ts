import { Injectable } from '@nestjs/common'

import { CategoryDto } from './category.dto'
import { CategoryRepository } from './category.repository'
import { Category } from './category.document'

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(category: CategoryDto): Promise<Category> {
    return await this.categoryRepository.create(category)
  }

  async delete(id: string): Promise<boolean> {
    return await this.categoryRepository.delete(id)
  }

  async get(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  async getOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id)
  }

  async update(id: string, newCategory: CategoryDto): Promise<Category> {
    return this.categoryRepository.findOneAndUpdate(id, newCategory)
  }
}
