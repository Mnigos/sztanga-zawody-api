import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

import { Environment } from '~/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get(ConfigService)
  const config = new DocumentBuilder()
    .setTitle('Sztanga API')
    .setVersion('1.0')
    .addTag('sztanga')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(configService.get(Environment.PORT))
}
bootstrap()
