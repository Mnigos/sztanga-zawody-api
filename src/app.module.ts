import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import Joi from 'joi'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { Environment } from '~/config'
import { CategoriesModule } from '~/categories'
import { SchoolsModule } from '~/schools'
import { CompetitorsModule } from '~/competitors'
import { MessagesModule } from '~/messages'
import { AttemptsModule } from '~/attempts'

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
    MessagesModule,
    AttemptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
