import { Injectable } from '@nestjs/common'

import { SchoolDocument, SchoolDto, SchoolRepository } from '~/schools'

@Injectable()
export class SchoolsService {
  constructor(private readonly schoolRepository: SchoolRepository) {}

  async create(school: SchoolDto): Promise<SchoolDocument> {
    return await this.schoolRepository.create(school)
  }

  async update(_id: string, newSchool: SchoolDto): Promise<SchoolDocument> {
    return await this.schoolRepository.findOneAndUpdate({ _id }, newSchool)
  }

  async delete(_id: string): Promise<boolean> {
    return await this.schoolRepository.delete({ _id })
  }

  async get(): Promise<SchoolDocument[]> {
    return await this.schoolRepository.find()
  }

  async getOne(_id: string): Promise<SchoolDocument> {
    return await this.schoolRepository.findOne({ _id })
  }
}
