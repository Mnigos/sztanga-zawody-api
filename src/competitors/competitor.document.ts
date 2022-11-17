import { Document } from 'mongoose'

import { Category } from '../categories/category.document'
import { School } from '../schools/school.document'

export interface Competitor extends Document {
  name: string
  secondName: string
  school: School
  category: Category
  weight: number
  birthDate: Date
}
