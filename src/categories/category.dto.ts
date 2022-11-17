import { ApiProperty } from '@nestjs/swagger'
import { IsString, MinLength } from 'class-validator'

export abstract class Category {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  name: string
}
