import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsString } from 'class-validator'

import { AttemptStatus } from '~/attempts'

export abstract class AttemptDto {
  @ApiProperty()
  @IsString()
  competitorId: string

  @ApiProperty()
  @IsString()
  categoryId: string

  @ApiProperty()
  @IsEnum(AttemptStatus)
  status: AttemptStatus
}
