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

import { Attempt } from './attempt.dto'
import { AttemptsService } from './attempts.service'

@Controller('attempts')
export class AttemptsController {
  constructor(private readonly attemptsService: AttemptsService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() attempt: Attempt) {
    return this.attemptsService.create(attempt)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newAttempt: Attempt) {
    return this.attemptsService.update(id, newAttempt)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    return this.attemptsService.delete(id)
  }

  @Get()
  get() {
    return this.attemptsService.get()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.attemptsService.getOne(id)
  }
}
