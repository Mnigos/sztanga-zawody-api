import { Injectable } from '@nestjs/common'

import {
  CompetitorDocument,
  CompetitorDto,
  CompetitorRepository,
} from '~/competitors'
import { SchoolRepository } from '~/schools'
import { CategoryRepository } from '~/categories'

@Injectable()
export class CompetitorsService {
  constructor(
    private readonly competitorRepository: CompetitorRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly schoolRepository: SchoolRepository
  ) {}

  async create(newCompetitor: CompetitorDto): Promise<CompetitorDocument> {
    const { categoryId, schoolId, ...competitor } = newCompetitor

    const category = await this.categoryRepository.findOne({ _id: categoryId })
    const school = await this.schoolRepository.findOne({ _id: schoolId })

    return await this.competitorRepository.create({
      ...competitor,
      category,
      school,
    })
  }

  async update(
    _id: string,
    newCompetitor: CompetitorDto
  ): Promise<CompetitorDocument> {
    const { categoryId, schoolId, ...competitor } = newCompetitor

    const category = await this.categoryRepository.findOne({ _id: categoryId })
    const school = await this.schoolRepository.findOne({ _id: schoolId })

    return await this.competitorRepository.findOneAndUpdate(
      { _id },
      {
        ...competitor,
        category,
        school,
      }
    )
  }

  async delete(_id: string): Promise<boolean> {
    return await this.competitorRepository.delete({ _id })
  }

  async get(): Promise<CompetitorDocument[]> {
    return await this.competitorRepository.find()
  }

  async getOne(_id: string): Promise<CompetitorDocument> {
    return await this.competitorRepository.findOne({ _id })
  }
}
