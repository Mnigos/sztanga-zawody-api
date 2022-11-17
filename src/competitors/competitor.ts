import { CategoryDocument } from '~/categories/category.document'
import { SchoolDocument } from '~/schools/school.document'

export interface Competitor {
  name: string
  secondName: string
  school: SchoolDocument
  category: CategoryDocument
  weight: number
  birthDate: Date
}
