import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsString, MinLength } from 'class-validator'

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
  @IsString()
  schoolId: string

  @ApiProperty()
  @IsString()
  categoryId: string

  @ApiProperty()
  @IsInt()
  weight: number
}
