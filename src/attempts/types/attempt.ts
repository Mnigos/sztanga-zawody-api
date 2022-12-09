import { CompetitorDocument } from '~/competitors'
import { AttemptStatus } from '~/attempts'
import { CategoryDocument } from '~/categories'

export interface Attempt {
  competitor: CompetitorDocument
  category: CategoryDocument
  status: AttemptStatus
}
