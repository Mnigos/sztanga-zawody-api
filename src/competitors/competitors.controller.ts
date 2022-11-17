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

import { Competitor } from './competitor.entity'
import { CompetitorsService } from './competitors.service'

@Controller('competitors')
export class CompetitorsController {
  constructor(private readonly competitorsService: CompetitorsService) {}

  @Post('create')
  create(@Body() competitor: Competitor) {
    const isCreated = this.competitorsService.create(competitor)

    if (isCreated) return 'Competitor successfully created'

    throw new InternalServerErrorException()
  }

  @Patch('update/:name')
  update(@Param('name') name: string, @Body() newCompetitor: Competitor) {
    const isUpdated = this.competitorsService.update(name, newCompetitor)

    if (isUpdated) return 'Competitor successfully updated'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:name')
  delete(@Param('name') name: string) {
    const isDeleted = this.competitorsService.delete(name)

    if (isDeleted) return 'Competitor successfully deleted'

    throw new InternalServerErrorException()
  }

  @Get()
  get() {
    return this.competitorsService.get()
  }

  @Get(':name')
  getOne(@Param('name') name: string) {
    return this.competitorsService
      .get()
      .find(competitor => competitor.name === name)
  }
}
