import { InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { UpdateQuery, Model } from 'mongoose'

import { MessagesService } from '../messages/messages.service'

export abstract class AbstractRepository<TDocument, TDto> {
  constructor(
    protected readonly model: Model<TDocument>,
    protected readonly documentName: string,
    protected readonly messagesService: MessagesService
  ) {}

  async create(document: TDto): Promise<TDocument> {
    try {
      return await this.model.create(document)
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async findOneAndUpdate(
    _id: string,
    document: UpdateQuery<TDocument>
  ): Promise<TDocument> {
    const foundedDocument = await this.model
      .findOne({ _id }, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(this.messagesService.notFound())

    return await this.model
      .findOneAndUpdate({ _id }, document, { lean: true })
      .exec()
  }

  async delete(_id: string): Promise<boolean> {
    const foundedDocument = await this.model
      .findOne({ _id }, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(`${this.documentName} not found`)

    try {
      await this.model.deleteOne({ _id }).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async find(): Promise<TDocument[]> {
    return await this.model.find({}, {}, { lean: true }).exec()
  }

  async findOne(_id: string): Promise<TDocument> {
    const foundedDocument = await this.model
      .findOne({ _id }, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(`${this.documentName} not found`)

    return foundedDocument
  }
}
