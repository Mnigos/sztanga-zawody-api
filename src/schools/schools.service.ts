import { Injectable } from '@nestjs/common'

import { School } from './school.document'
import { SchoolDto } from './school.dto'
import { SchoolRepository } from './school.repository'

@Injectable()
export class SchoolsService {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async create(school: SchoolDto): Promise<School> {
    return await this.schoolRepository.create(school)
  }

  async update(_id: string, newSchool: SchoolDto): Promise<School> {
    return await this.schoolRepository.findOneAndUpdate({ _id }, newSchool)
  }

  async delete(_id: string): Promise<boolean> {
    return await this.schoolRepository.delete({ _id })
  }

  async get(): Promise<School[]> {
    return await this.schoolRepository.find()
  }

  async getOne(_id: string): Promise<School> {
    return await this.schoolRepository.findOne({ _id })
  }
}
