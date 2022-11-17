import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsInt, IsString, MinLength } from 'class-validator'

import { School } from '../schools/school.dto'

export abstract class Competitor {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  name: string

  @ApiProperty()
  @IsString()
  @MinLength(4)
  secondName: string

  @ApiProperty()
  school: School

  @ApiProperty()
  @IsString()
  @MinLength(4)
  category: string

  @ApiProperty()
  @IsInt()
  weight: number

  @ApiProperty()
  @IsDateString()
  birthDate: Date
}
