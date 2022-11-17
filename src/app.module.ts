import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import Joi from 'joi'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoriesModule } from './categories/categories.module'
import { SchoolsModule } from './schools/schools.module'
import { CompetitorsModule } from './competitors/competitors.module'

@Module({
  imports: [
    CategoriesModule,
    SchoolsModule,
    CompetitorsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
