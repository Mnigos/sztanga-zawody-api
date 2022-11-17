import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'

import { CategoriesService } from './categories.service'

export abstract class Category {
  @ApiProperty()
  name: string
}

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  create(@Body() { name }: Category) {
    const isCreated = this.categoriesService.create(name)

    if (isCreated) return 'Category successfully created'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:name')
  delete(@Param('name') name: string) {
    const isDeleted = this.categoriesService.delete(name)

    if (isDeleted) return 'Category successfully deleted'

    throw new InternalServerErrorException()
  }

  @Get()
  get() {
    return this.categoriesService.get()
  }

  @Get(':name')
  getOne(@Param('name') name: string) {
    return this.categoriesService.get().find(element => element === name)
  }
}
