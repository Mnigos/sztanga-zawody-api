import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

import { Attempt, AttemptStatus } from '~/attempts'
import { CompetitorDocument } from '~/competitors'
import { ModelName } from '~/database'

@Schema()
export class AttemptApi extends Document implements Attempt {
  @Prop({ type: Types.ObjectId, required: true, ref: ModelName.Competitor })
  competitor: CompetitorDocument

  @Prop({ type: Number, required: true })
  weight: number

  @Prop({
    type: String,
    required: true,
    enum: AttemptStatus,
    default: AttemptStatus.Pending,
  })
  status: AttemptStatus
}

export const AttemptSchema = SchemaFactory.createForClass(AttemptApi)
