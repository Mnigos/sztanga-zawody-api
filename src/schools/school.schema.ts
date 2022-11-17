import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { SchoolDto } from '~/schools'

@Schema()
export class SchoolApi extends Document implements SchoolDto {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String })
  description?: string
}

export const SchoolSchema = SchemaFactory.createForClass(SchoolApi)
