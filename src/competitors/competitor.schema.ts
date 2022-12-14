import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Competitor } from '~/competitors'
import { ModelName } from '~/database'
import { SchoolDocument } from '~/schools'
import { CategoryDocument } from '~/categories'
import { AttemptDocument } from '~/attempts'

@Schema()
export class CompetitorApi extends Document implements Competitor {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  secondName: string

  @Prop({ type: Types.ObjectId, required: true, ref: ModelName.School })
  school: SchoolDocument

  @Prop({ type: Types.ObjectId, required: true, ref: ModelName.Category })
  category: CategoryDocument

  @Prop([{ type: Types.ObjectId, default: () => [], ref: ModelName.Attempt }])
  attempts?: AttemptDocument[]

  @Prop({ type: Number, required: true })
  weight: number
}

export const CompetitorSchema = SchemaFactory.createForClass(CompetitorApi)
