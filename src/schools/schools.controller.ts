import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

import { School } from './school.dto'
import { SchoolsService } from './schools.service'

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post('create')
  create(@Body() school: School) {
    const isCreated = this.schoolsService.create(school)

    if (isCreated) return 'School successfully created'

    throw new InternalServerErrorException()
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newSchool: School) {
    const isUpdated = this.schoolsService.update(id, newSchool)

    if (isUpdated) return 'School successfully updated'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:id')
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
