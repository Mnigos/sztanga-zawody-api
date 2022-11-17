import { Injectable } from '@nestjs/common'

import { CompetitorDocument } from './competitor.document'
import { CompetitorDto } from './competitor.dto'
import { CompetitorRepository } from './competitor.repository'

import { SchoolRepository } from '~/schools/school.repository'
import { CategoryRepository } from '~/categories/category.repository'

@Injectable()
export class CompetitorsService {
  constructor(
    private readonly competitorRepository: CompetitorRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly schoolRepository: SchoolRepository
  ) {}

  async create(newCompetitor: CompetitorDto): Promise<CompetitorDocument> {
    const { categoryId, schoolId, ...competitor } = newCompetitor

    const category = await this.categoryRepository.findOne(categoryId)
    const school = await this.schoolRepository.findOne(schoolId)

    return await this.competitorRepository.create({
      ...competitor,
      category,
      school,
    })
  }

  async update(
    id: string,
    newCompetitor: CompetitorDto
  ): Promise<CompetitorDocument> {
    const { categoryId, schoolId, ...competitor } = newCompetitor

    const category = this.categoryRepository.findOne(categoryId)
    const school = this.schoolRepository.findOne(schoolId)

    return await this.competitorRepository.findOneAndUpdate(id, {
      ...competitor,
      category,
      school,
    })
  }

  async delete(_id: string): Promise<boolean> {
    return await this.competitorRepository.delete(_id)
  }

  async get(): Promise<CompetitorDocument[]> {
    return await this.competitorRepository.find()
  }

  async getOne(id: string): Promise<CompetitorDocument> {
    return await this.competitorRepository.findOne(id)
  }
}
