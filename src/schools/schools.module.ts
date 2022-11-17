import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DocumentName, ModelName } from '~/database'
import { MessagesModule } from '~/messages'
import {
  SchoolRepository,
  SchoolSchema,
  SchoolsController,
  SchoolsService,
} from '~/schools'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ModelName.School, schema: SchoolSchema },
    ]),
    MessagesModule.register(DocumentName.School),
  ],
  providers: [SchoolsService, SchoolRepository],
  controllers: [SchoolsController],
  exports: [SchoolRepository],
})
export class SchoolsModule {}
