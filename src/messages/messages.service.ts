import { Injectable } from '@nestjs/common'

import { DocumentName } from '../database'

@Injectable()
export class MessagesService {
  constructor(private readonly documentName: DocumentName) {}

  notFound(): string {
    return `${this.documentName} not found`
  }

  deleted(): string {
    return `${this.documentName} successfully deleted`
  }
}
