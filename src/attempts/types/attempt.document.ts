import { Document } from 'mongoose'

import { Attempt } from '~/attempts'

export interface AttemptDocument extends Document, Attempt {}
