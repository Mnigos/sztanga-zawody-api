import { Document } from 'mongoose'

import { Category } from '~/categories'

export interface CategoryDocument extends Document, Category {}
