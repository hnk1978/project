import { MongoClient } from 'mongodb'

const globalForMongo = globalThis
const MONGODB_URI = process.env.MONGODB_URI || ''
const MONGODB_DB = process.env.MONGODB_DB || 'project'

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local')
}

let cached = globalForMongo._mongo
if (!cached) {
  cached = globalForMongo._mongo = { client: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.client) {
    return { client: cached.client, db: cached.client.db(MONGODB_DB) }
  }
  if (!cached.promise) {
    const client = new MongoClient(MONGODB_URI)
    cached.promise = client.connect().then((client) => client)
  }
  cached.client = await cached.promise
  return { client: cached.client, db: cached.client.db(MONGODB_DB) }
}
