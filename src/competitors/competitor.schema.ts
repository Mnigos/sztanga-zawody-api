import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Competitor } from './competitor'

import { ModelName } from '~/database'
import { School } from '~/schools/school.document'
import { Category } from '~/categories/category.document'

@Schema()
export class CompetitorApi extends Document implements Competitor {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  secondName: string

  @Prop({ type: Types.ObjectId, required: true, ref: ModelName.School })
  school: School

  @Prop({ type: Types.ObjectId, required: true, ref: ModelName.Category })
  category: Category

  @Prop({ type: Number, required: true })
  weight: number

  @Prop({ type: Date, required: true })
  birthDate: Date
}

export const CompetitorSchema = SchemaFactory.createForClass(CompetitorApi)
