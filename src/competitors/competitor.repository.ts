import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AbstractRepository } from '../database/abstract.repository'
import { DocumentName, ModelName } from '../database'

import { MessagesService } from './../messages/messages.service'
import { CompetitorApi } from './competitor.schema'
import { Competitor } from './competitor'

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
