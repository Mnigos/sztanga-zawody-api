import { Document } from 'mongoose'

import { Competitor } from '../competitors/competitor.document'

import { AttemptStatus } from './attempt-status.enum'

export interface Attempt extends Document {
  competitor: Competitor
  weight: number
  status?: AttemptStatus
}
