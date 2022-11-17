import { Document } from 'mongoose'

import { Competitor } from './competitor'

export interface CompetitorDocument extends Document, Competitor {}
