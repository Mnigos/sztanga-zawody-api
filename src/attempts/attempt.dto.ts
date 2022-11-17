import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsString } from 'class-validator'

import { AttemptStatus } from '~/attempts'

export abstract class AttemptDto {
  @ApiProperty()
  @IsString()
  competitorId: string

  @ApiProperty()
  @IsInt()
  weight: number

  @ApiProperty()
  @IsEnum(AttemptStatus)
  status: AttemptStatus
}
