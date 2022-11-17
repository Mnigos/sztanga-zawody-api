import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { DocumentName, ModelName, AbstractRepository } from '~/database'
import { MessagesService } from '~/messages'
import { SchoolApi, SchoolDto } from '~/schools'

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
