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

import { Competitor } from './competitor.dto'
import { CompetitorsService } from './competitors.service'

@Controller('competitors')
export class CompetitorsController {
  constructor(private readonly competitorsService: CompetitorsService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() competitor: Competitor) {
    const isCreated = this.competitorsService.create(competitor)

    if (isCreated) return 'Competitor successfully created'

    throw new InternalServerErrorException()
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newCompetitor: Competitor) {
    const isUpdated = this.competitorsService.update(id, newCompetitor)

    if (isUpdated) return 'Competitor successfully updated'

    throw new InternalServerErrorException()
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.competitorsService.delete(id)

    if (isDeleted) return 'Competitor successfully deleted'

    throw new InternalServerErrorException()
  }

  @Get()
  get() {
    return this.competitorsService.get()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.competitorsService.getOne(id)
  }
}
