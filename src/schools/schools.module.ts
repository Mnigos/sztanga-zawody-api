import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DocumentName, ModelName } from '../database'
import { MessagesModule } from '../messages/messages.module'

import { SchoolSchema } from './school.schema'
import { SchoolsService } from './schools.service'
import { SchoolsController } from './schools.controller'
import { SchoolRepository } from './school.repository'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName.School, schema: SchoolSchema },
    ]),
    MessagesModule.register(DocumentName.School),
  ],
  providers: [SchoolsService, SchoolRepository],
  controllers: [SchoolsController],
})
export class SchoolsModule {}
