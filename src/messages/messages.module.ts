import { Module } from '@nestjs/common'

import { DocumentName } from '../database'

import { MessagesService } from './messages.service'

@Module({})
export class MessagesModule {
  static register(documentName: DocumentName) {
    return {
      module: MessagesModule,
      providers: [
        {
          useFactory: () => {
            return new MessagesService(documentName)
          },
          provide: MessagesService,
        },
      ],
      exports: [MessagesService],
    }
  }
}
