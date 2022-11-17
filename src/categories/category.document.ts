import { Document } from 'mongoose'

import { Category } from './category'

export interface CategoryDocument extends Document, Category {}
