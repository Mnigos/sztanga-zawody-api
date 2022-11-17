import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { SchoolSchema } from './school.schema'
import { SchoolsService } from './schools.service'
import { SchoolsController } from './schools.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'School', schema: SchoolSchema }]),
  ],
  providers: [SchoolsService],
  controllers: [SchoolsController],
})
export class SchoolsModule {}
