import { Injectable } from '@nestjs/common'

import { AttemptDocument, AttemptDto, AttemptRepository } from '~/attempts'
import { CompetitorRepository } from '~/competitors'

@Injectable()
export class AttemptsService {
  constructor(
    private readonly attemtRepository: AttemptRepository,
    private readonly competitorRepository: CompetitorRepository
  ) {}

  async create(newAttempt: AttemptDto): Promise<AttemptDocument> {
    const { competitorId, ...attempt } = newAttempt

    const competitor = await this.competitorRepository.findOne({
      _id: competitorId,
    })

    return await this.attemtRepository.create({
      ...attempt,
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
