import { Document } from 'mongoose'

import { Competitor } from '~/competitors'

export interface CompetitorDocument extends Document, Competitor {}
