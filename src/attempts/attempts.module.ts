import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { CompetitorsModule } from '~/competitors'
import {
  AttemptRepository,
  AttemptSchema,
  AttemptsController,
  AttemptsService,
} from '~/attempts'
import { DocumentName, ModelName } from '~/database'
import { MessagesModule } from '~/messages'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName.Attempt, schema: AttemptSchema },
    ]),
    MessagesModule.register(DocumentName.Attempt),
    CompetitorsModule,
  ],
  providers: [AttemptsService, AttemptRepository],
  controllers: [AttemptsController],
})
export class AttemptsModule {}
