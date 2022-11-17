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
import { CompetitorDto, CompetitorsService } from '~/competitors'

@Controller('competitors')
export class CompetitorsController {
  constructor(
    private readonly competitorsService: CompetitorsService,
    private readonly messagesService: MessagesService
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() competitor: CompetitorDto) {
    return this.competitorsService.create(competitor)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newCompetitor: CompetitorDto) {
    return this.competitorsService.update(id, newCompetitor)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.competitorsService.delete(id)

    if (isDeleted) return this.messagesService.deleted()
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
