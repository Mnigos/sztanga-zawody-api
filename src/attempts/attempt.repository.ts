import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AbstractRepository, DocumentName, ModelName } from '~/database'
import { MessagesService } from '~/messages'
import { Attempt, AttemptApi } from '~/attempts'

@Injectable()
export class AttemptRepository extends AbstractRepository<AttemptApi, Attempt> {
  constructor(
    @InjectModel(ModelName.Attempt)
    private readonly attemptModel: Model<AttemptApi>,
    readonly messagesService: MessagesService
  ) {
    super(attemptModel, DocumentName.Attempt, messagesService)
  }
}
