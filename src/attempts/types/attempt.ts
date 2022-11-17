import { CompetitorDocument } from '~/competitors'
import { AttemptStatus } from '~/attempts'

export interface Attempt {
  competitor: CompetitorDocument
  weight: number
  status: AttemptStatus
}
