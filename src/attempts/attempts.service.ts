import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Attempt } from './attempt.dto'
import { AttemptApi } from './attempt.schema'

@Injectable()
export class AttemptsService {
  constructor(
    @InjectModel('Attempt')
    private readonly attemptModel: Model<AttemptApi>
  ) {}

  async create(attempt: Attempt): Promise<boolean> {
    const { competitorId } = attempt

    const foundedAttempt = await this.attemptModel.find({ competitorId }).exec()

    if (foundedAttempt.length > 3)
      throw new ConflictException(
        'Cannot create more than 3 attempts with the same competitor'
      )

    try {
      await this.attemptModel.create(attempt)

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(_id: string, newAttempt: Attempt): Promise<Attempt> {
    const foundedAttempt = await this.attemptModel.findOne({ _id }).exec()

    if (!foundedAttempt)
      throw new BadRequestException('Cannot find attempt with given id')

    await this.attemptModel.updateOne({ _id }, newAttempt).exec()

    return await this.attemptModel.findOne({ _id }).exec()
  }

  async delete(_id: string) {
    const foundedAttempt = await this.attemptModel.findOne({ _id }).exec()

    if (!foundedAttempt)
      throw new BadRequestException('Cannot find attempt with given id')

    try {
      await this.attemptModel.deleteOne({ _id }).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async get(): Promise<Attempt[]> {
    return (await this.attemptModel.find().exec()) as Attempt[]
  }

  async getOne(_id: string): Promise<Attempt> {
    return (await this.attemptModel.findOne({ _id }).exec()) as Attempt
  }
}
