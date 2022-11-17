import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Competitor } from './competitor.dto'
import { CompetitorApi } from './competitor.schema'

@Injectable()
export class CompetitorsService {
  constructor(
    @InjectModel('Competitor')
    private readonly competitorModel: Model<CompetitorApi>
  ) {}

  async create(competitor: Competitor): Promise<boolean> {
    try {
      await this.competitorModel.create(competitor)

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async update(_id: string, newCompetitor: Competitor): Promise<Competitor> {
    const foundedCompetitor = await this.competitorModel.findOne({ _id }).exec()

    if (!foundedCompetitor)
      throw new BadRequestException('Cannot find school with given id')

    await this.competitorModel.updateOne({ _id }, newCompetitor).exec()

    return await this.competitorModel.findOne({ _id }).exec()
  }

  async delete(_id: string) {
    const foundedCompetitor = await this.competitorModel.findOne({ _id }).exec()

    if (!foundedCompetitor)
      throw new BadRequestException('Cannot find school with given id')

    try {
      await this.competitorModel.deleteOne({ _id }).exec()

      return true
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async get(): Promise<Competitor[]> {
    return (await this.competitorModel.find().exec()) as Competitor[]
  }

  async getOne(_id: string): Promise<Competitor> {
    return (await this.competitorModel.findOne({ _id }).exec()) as Competitor
  }
}
