import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AbstractRepository } from '../database/abstract.repository'
import { DocumentName, ModelName } from '../database'

import { MessagesService } from './../messages/messages.service'
import { SchoolApi } from './school.schema'
import { SchoolDto } from './school.dto'

@Injectable()
export class SchoolRepository extends AbstractRepository<SchoolApi, SchoolDto> {
  constructor(
    @InjectModel(ModelName.School)
    private readonly schoolModel: Model<SchoolApi>,
    readonly messagesService: MessagesService
  ) {
    super(schoolModel, DocumentName.School, messagesService)
  }
}
