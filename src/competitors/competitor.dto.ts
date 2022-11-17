import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsInt, IsString, MinLength } from 'class-validator'

import { SchoolDto } from '../schools/school.dto'

export abstract class CompetitorDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  name: string

  @ApiProperty()
  @IsString()
  @MinLength(4)
  secondName: string

  @ApiProperty()
  school: SchoolDto

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
