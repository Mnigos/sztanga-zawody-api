import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { School } from '../schools/school.dto'

import { Competitor } from './competitor.dto'

import { SchoolApi } from '~/schools/school.schema'

@Schema()
export class CompetitorApi extends Document implements Competitor {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  secondName: string

  @Prop({ type: SchoolApi, required: true })
  school: School

  @Prop({ type: String, required: true })
  category: string

  @Prop({ type: Number, required: true })
  weight: number

  @Prop({ type: Date, required: true })
  birthDate: Date
}

export const CompetitorSchema = SchemaFactory.createForClass(CompetitorApi)
