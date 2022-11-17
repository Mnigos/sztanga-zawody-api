import { BadRequestException, Injectable } from '@nestjs/common'

import { School } from './school.entity'

import { schools } from 'src/data/schools'

@Injectable()
export class SchoolsService {
  create(school: School) {
    if (!school) throw new BadRequestException()

    schools.push(school)

    return true
  }

  update(name: string, newSchool: School) {
    if (!name || !newSchool) throw new BadRequestException()

    const schoolIndex = schools.findIndex(school => school.name === name)

    if (!schoolIndex) throw new BadRequestException('School not found')

    schools[schoolIndex] = newSchool

    return true
  }

  delete(name: string) {
    if (!name) throw new BadRequestException()

    const newSchools = schools.filter(school => school.name !== name)

    schools.splice(0, schools.length)

    schools.push(...newSchools)

    return true
  }

  get() {
    return schools
  }
}
