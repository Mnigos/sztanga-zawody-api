import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AttemptSchema } from './attempt.schema'
import { AttemptsService } from './attempts.service'
import { AttemptsController } from './attempts.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Attempt', schema: AttemptSchema }]),
  ],
  providers: [AttemptsService],
  controllers: [AttemptsController],
})
export class AttemptsModule {}
