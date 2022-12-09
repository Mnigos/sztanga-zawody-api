import { ConflictException, Injectable } from '@nestjs/common'

import { AttemptDocument, AttemptDto, AttemptRepository } from '~/attempts'
import { CategoryRepository } from '~/categories'
import { CompetitorRepository } from '~/competitors'

@Injectable()
export class AttemptsService {
  constructor(
    private readonly attemtRepository: AttemptRepository,
    private readonly competitorRepository: CompetitorRepository,
    private readonly categoryRepository: CategoryRepository
  ) {}

  async create(newAttempt: AttemptDto): Promise<AttemptDocument> {
    const { competitorId, categoryId, ...attempt } = newAttempt

    const foundedAttemptsFromThisCompetitor = await this.attemtRepository.find({
      competitor: { _id: competitorId },
    })

    if (foundedAttemptsFromThisCompetitor.length >= 3)
      throw new ConflictException(
        'This competitor has already took part in all 3 attempts'
      )

    const competitor = await this.competitorRepository.findOne({
      _id: competitorId,
    })

    const category = await this.categoryRepository.findOne({ _id: categoryId })

    return await this.attemtRepository.create({
      ...attempt,
      category,
      competitor,
    })
  }

  async update(_id: string, newAttempt: AttemptDto): Promise<AttemptDocument> {
    const { competitorId, ...attempt } = newAttempt

    const competitor = await this.competitorRepository.findOne({
      _id: competitorId,
    })

    return await this.attemtRepository.findOneAndUpdate(
      { _id },
      {
        ...attempt,
        competitor,
      }
    )
  }

  async delete(_id: string): Promise<boolean> {
    return await this.attemtRepository.delete({ _id })
  }

  async get(): Promise<AttemptDocument[]> {
    return await this.attemtRepository.find()
  }

  async getOne(_id: string): Promise<AttemptDocument> {
    return await this.attemtRepository.findOne({ _id })
  }
}
