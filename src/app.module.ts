import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import Joi from 'joi'
import { MongooseModule } from '@nestjs/mongoose'

import { Environment } from './environment.enum'
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
        PORT: Joi.number().default(4000),
      }),
      envFilePath: './.env',
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(Environment.MONGODB_URI),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
