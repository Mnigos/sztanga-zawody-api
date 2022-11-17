import { BadRequestException, Injectable } from '@nestjs/common'

import { Competitor } from './competitor.entity'

import { competitors } from 'src/data/competitors'

@Injectable()
export class CompetitorsService {
  create(competitor: Competitor) {
    if (!competitor) throw new BadRequestException()

    competitors.push(competitor)

    return true
  }

  update(name: string, newCompetitor: Competitor) {
    if (!name || !newCompetitor) throw new BadRequestException()

    const competitorIndex = competitors.findIndex(
      competitor => competitor.name === name
    )

    if (!competitorIndex) throw new BadRequestException('competitor not found')

    competitors[competitorIndex] = newCompetitor

    return true
  }

  delete(name: string) {
    if (!name) throw new BadRequestException()

    const newCompetitors = competitors.filter(
      competitor => competitor.name !== name
    )

    competitors.splice(0, competitors.length)

    competitors.push(...newCompetitors)

    return true
  }

  get() {
    return competitors
  }
}
