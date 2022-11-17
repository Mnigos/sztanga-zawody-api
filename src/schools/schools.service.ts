import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { SchoolDto } from './school.dto'
import { SchoolApi } from './school.schema'

@Injectable()
export class SchoolsService {
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<SchoolApi>
  ) {}

  async create(school: SchoolDto): Promise<boolean> {
    try {
      await this.schoolModel.create(school)

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(_id: string, newSchool: SchoolDto): Promise<SchoolDto> {
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

  async get(): Promise<SchoolDto[]> {
    return (await this.schoolModel.find().exec()) as SchoolDto[]
  }

  async getOne(_id: string): Promise<SchoolDto> {
    return (await this.schoolModel.findOne({ _id }).exec()) as SchoolDto
  }
}
