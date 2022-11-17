import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DocumentName, ModelName } from '~/database'
import { MessagesModule } from '~/messages'
import { SchoolsModule } from '~/schools'
import { CategoriesModule } from '~/categories/'
import {
  CompetitorRepository,
  CompetitorSchema,
  CompetitorsController,
  CompetitorsService,
} from '~/competitors'

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
  exports: [CompetitorsService, CompetitorRepository],
})
export class CompetitorsModule {}
