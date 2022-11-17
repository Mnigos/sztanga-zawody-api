import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { Category } from './category.dto'

@Schema()
export class CategoryApi extends Document implements Category {
  @Prop({ type: String, required: true })
  name: string
}

export const CategorySchema = SchemaFactory.createForClass(CategoryApi)
