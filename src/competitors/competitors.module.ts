import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { CompetitorsService } from './competitors.service'
import { CompetitorsController } from './competitors.controller'
import { CompetitorSchema } from './competitor.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Competitor', schema: CompetitorSchema },
    ]),
  ],
  providers: [CompetitorsService],
  controllers: [CompetitorsController],
})
export class CompetitorsModule {}
