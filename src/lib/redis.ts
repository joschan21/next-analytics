import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-lucky-goose-31276.upstash.io',
  token: process.env.REDIS_KEY!,
})