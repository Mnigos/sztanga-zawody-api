import { Document } from 'mongoose'

import { School } from './school'

export interface SchoolDocument extends Document, School {}
