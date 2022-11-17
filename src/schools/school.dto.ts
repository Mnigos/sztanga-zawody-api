import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MinLength } from 'class-validator'

export abstract class SchoolDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  name: string

  @ApiProperty({ required: false })
  @IsOptional()
  description?: string
}
