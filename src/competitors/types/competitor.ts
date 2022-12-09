import { AttemptDocument } from '~/attempts'
import { CategoryDocument } from '~/categories'
import { SchoolDocument } from '~/schools'

export interface Competitor {
  name: string
  secondName: string
  school: SchoolDocument
  category: CategoryDocument
  attempts?: AttemptDocument[]
  weight: number
}
