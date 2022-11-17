import { ApiProperty } from '@nestjs/swagger'

import { School } from 'src/schools/school.entity'

export abstract class Competitor {
  @ApiProperty()
  name: string
  @ApiProperty()
  secondName: string
  @ApiProperty()
  school: School
  @ApiProperty()
  category: string
  @ApiProperty()
  weight: number
  @ApiProperty()
  birthDate: Date
}
