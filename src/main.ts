import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

const app = await NestFactory.create(AppModule)

app.enableCors()
app.useGlobalPipes(new ValidationPipe())

const config = new DocumentBuilder()
  .setTitle('Sztanga API')
  .setVersion('1.0')
  .addTag('sztanga')
  .build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api', app, document)

await app.listen(4000)
