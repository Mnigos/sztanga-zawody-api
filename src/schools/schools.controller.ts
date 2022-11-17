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

import { School } from './school.entity'
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

  @Patch('update/:name')
  update(@Param('name') name: string, @Body() newSchool: School) {
    const isUpdated = this.schoolsService.update(name, newSchool)

    if (isUpdated) return 'School successfully updated'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:name')
  delete(@Param('name') name: string) {
    const isDeleted = this.schoolsService.delete(name)

    if (isDeleted) return 'School successfully deleted'

    throw new InternalServerErrorException()
  }

  @Get()
  get() {
    return this.schoolsService.get()
  }

  @Get(':name')
  getOne(@Param('name') name: string) {
    return this.schoolsService.get().find(school => school.name === name)
  }
}
