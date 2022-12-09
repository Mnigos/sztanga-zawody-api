import { InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { UpdateQuery, Model, FilterQuery } from 'mongoose'

import { MessagesService } from '~/messages'

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
    filterQuery: FilterQuery<TDocument>,
    document: UpdateQuery<TDocument>
  ): Promise<TDocument> {
    const foundedDocument = await this.model
      .findOne(filterQuery, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(this.messagesService.notFound())

    return await this.model
      .findOneAndUpdate(filterQuery, document, { lean: true })
      .exec()
  }

  async delete(filterQuery: FilterQuery<TDocument>): Promise<boolean> {
    const foundedDocument = await this.model
      .findOne(filterQuery, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(`${this.documentName} not found`)

    try {
      await this.model.deleteOne(filterQuery).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async find(filterQuery: FilterQuery<TDocument> = {}): Promise<TDocument[]> {
    return await this.model.find(filterQuery, {}, { lean: true }).exec()
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const foundedDocument = await this.model
      .findOne(filterQuery, {}, { lean: true })
      .exec()

    if (!foundedDocument)
      throw new NotFoundException(`${this.documentName} not found`)

    return foundedDocument
  }
}
