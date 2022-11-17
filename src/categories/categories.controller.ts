import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { MessagesService } from '~/messages'
import { CategoriesService, CategoryDto } from '~/categories'

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly messagesService: MessagesService
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() category: CategoryDto) {
    return this.categoriesService.create(category)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newCategory: CategoryDto) {
    return this.categoriesService.update(id, newCategory)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.categoriesService.delete(id)

    if (isDeleted) return this.messagesService.deleted()

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
