import { Document } from 'mongoose'

import { CompetitorDocument } from '../competitors/competitor.document'

import { AttemptStatus } from './attempt-status.enum'

export interface Attempt extends Document {
  competitor: CompetitorDocument
  weight: number
  status?: AttemptStatus
}
