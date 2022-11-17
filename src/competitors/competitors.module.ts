import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DocumentName, ModelName } from '../database'
import { MessagesModule } from '../messages/messages.module'
import { SchoolsModule } from '../schools/schools.module'

import { CategoriesModule } from './../categories/categories.module'
import { CompetitorsService } from './competitors.service'
import { CompetitorsController } from './competitors.controller'
import { CompetitorSchema } from './competitor.schema'
import { CompetitorRepository } from './competitor.repository'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName.Competitor, schema: CompetitorSchema },
    ]),
    MessagesModule.register(DocumentName.Competitor),
    SchoolsModule,
    CategoriesModule,
  ],
  providers: [CompetitorsService, CompetitorRepository],
  controllers: [CompetitorsController],
  exports: [CompetitorsService],
})
export class CompetitorsModule {}
