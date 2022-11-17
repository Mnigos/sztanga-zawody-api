import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator'

import { AttemptStatus } from './attempt-status.enum'

export abstract class AttemptDto {
  @ApiProperty()
  @IsString()
  competitorId: string

  @ApiProperty()
  @IsInt()
  weight: number

  @ApiProperty()
  @IsEnum(AttemptStatus)
  @IsOptional()
  status?: AttemptStatus
}
