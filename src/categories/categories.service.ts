import { BadRequestException, Injectable } from '@nestjs/common'

import { categories } from 'src/data/categories'

@Injectable()
export class CategoriesService {
  create(name: string) {
    if (!name) throw new BadRequestException()

    categories.push(name)

    return true
  }

  delete(name: string) {
    if (!name) throw new BadRequestException()

    const newCategories = categories.filter(element => element !== name)

    categories.splice(0, categories.length)

    categories.push(...newCategories)

    return true
  }

  get() {
    return categories
  }
}
