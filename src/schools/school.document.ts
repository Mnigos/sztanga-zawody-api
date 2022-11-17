import { Document } from 'mongoose'

export interface School extends Document {
  name: string
  description?: string
}
