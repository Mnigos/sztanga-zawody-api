import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { AttemptStatus } from './attempt-status.enum'
import { Attempt } from './attempt.dto'

@Schema()
export class AttemptApi extends Document implements Attempt {
  @Prop({ type: String, required: true })
  competitorId: string

  @Prop({ type: Number, required: true })
  weight: number

  @Prop({
    type: String,
    required: true,
    enum: AttemptStatus,
    default: AttemptStatus.PENDING,
  })
  status: AttemptStatus
}

export const AttemptSchema = SchemaFactory.createForClass(AttemptApi)
