import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { MessagesService } from '~/messages'
import { SchoolDto, SchoolsService } from '~/schools'

@Controller('schools')
export class SchoolsController {
  constructor(
    private readonly schoolsService: SchoolsService,
    private readonly messagesService: MessagesService
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() school: SchoolDto) {
    return this.schoolsService.create(school)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newSchool: SchoolDto) {
    return this.schoolsService.update(id, newSchool)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.schoolsService.delete(id)

    if (isDeleted) return this.messagesService.deleted()
  }

  @Get()
  get() {
    return this.schoolsService.get()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.schoolsService.getOne(id)
  }
}
