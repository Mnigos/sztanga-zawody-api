import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { School } from './school.dto'
import { SchoolApi } from './school.schema'

@Injectable()
export class SchoolsService {
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<SchoolApi>
  ) {}

  async create(school: School): Promise<boolean> {
    try {
      await this.schoolModel.create(school)

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(_id: string, newSchool: School): Promise<School> {
    const foundedSchool = await this.schoolModel.findOne({ _id }).exec()

    if (!foundedSchool)
      throw new BadRequestException('Cannot find school with given id')

    await this.schoolModel.updateOne({ _id }, newSchool).exec()

    return await this.schoolModel.findOne({ _id }).exec()
  }

  async delete(_id: string): Promise<boolean> {
    const foundedSchool = await this.schoolModel.findOne({ _id }).exec()

    if (!foundedSchool)
      throw new BadRequestException('Cannot find school with given id')

    try {
      await this.schoolModel.deleteOne({ _id }).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async get(): Promise<School[]> {
    return (await this.schoolModel.find().exec()) as School[]
  }
}
