import { Module } from '@nestjs/common'

import { CompetitorsService } from './competitors.service'
import { CompetitorsController } from './competitors.controller'

@Module({
  providers: [CompetitorsService],
  controllers: [CompetitorsController],
})
export class CompetitorsModule {}
