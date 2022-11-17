import { Document } from 'mongoose'

import { School } from '~/schools'

export interface SchoolDocument extends Document, School {}
