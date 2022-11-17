import { ApiProperty } from '@nestjs/swagger'

export abstract class School {
  @ApiProperty()
  name: string
  @ApiProperty({ required: false })
  description?: string
}
