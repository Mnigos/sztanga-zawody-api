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

import { SchoolDto } from './school.dto'
import { SchoolsService } from './schools.service'

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() school: SchoolDto) {
    const isCreated = this.schoolsService.create(school)

    if (isCreated) return 'School successfully created'

    throw new InternalServerErrorException()
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newSchool: SchoolDto) {
    const isUpdated = this.schoolsService.update(id, newSchool)

    if (isUpdated) return 'School successfully updated'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.schoolsService.delete(id)

    if (isDeleted) return 'School successfully deleted'

    throw new InternalServerErrorException()
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
