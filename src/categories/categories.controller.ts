import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common'

import { CategoriesService } from './categories.service'
import { Category } from './category.dto'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() category: Category) {
    const isCreated = this.categoriesService.create(category)

    if (isCreated) return 'Category successfully created'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.categoriesService.delete(id)

    if (isDeleted) return 'Category successfully deleted'

    throw new InternalServerErrorException()
  }

  @Get()
  get() {
    return this.categoriesService.get()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoriesService.getOne(id)
  }
}
