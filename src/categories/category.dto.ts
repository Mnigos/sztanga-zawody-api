import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export abstract class CategoryDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string
}
