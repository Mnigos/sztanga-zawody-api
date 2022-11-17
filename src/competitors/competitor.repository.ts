import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AbstractRepository, DocumentName, ModelName } from '~/database'
import { MessagesService } from '~/messages'
import { Competitor, CompetitorApi } from '~/competitors'

@Injectable()
export class CompetitorRepository extends AbstractRepository<
  CompetitorApi,
  Competitor
> {
  constructor(
    @InjectModel(ModelName.Competitor)
    private readonly competitorModel: Model<CompetitorApi>,
    readonly messagesService: MessagesService
  ) {
    super(competitorModel, DocumentName.Competitor, messagesService)
  }
}
