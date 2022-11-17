import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { School } from './school.dto'

@Schema()
export class SchoolApi extends Document implements School {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String })
  description?: string
}

export const SchoolSchema = SchemaFactory.createForClass(SchoolApi)