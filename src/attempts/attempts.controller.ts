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

import { AttemptDto, AttemptsService } from '~/attempts'
import { MessagesService } from '~/messages'

@Controller('attempts')
export class AttemptsController {
  constructor(
    private readonly attemptsService: AttemptsService,
    private readonly messagesService: MessagesService
  ) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() attempt: AttemptDto) {
    return this.attemptsService.create(attempt)
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() newAttempt: AttemptDto) {
    return this.attemptsService.update(id, newAttempt)
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    const isDeleted = this.attemptsService.delete(id)

    if (isDeleted) return this.messagesService.deleted()
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
