import { connectToDatabase } from './mongodb'

export async function getPosts({ limit = 20 } = {}) {
  const { db } = await connectToDatabase()
  const posts = await db.collection('posts').find({}).sort({ createdAt: -1 }).limit(limit).toArray()
  return posts.map(p => ({ ...p, _id: String(p._id) }))
}

export async function createPost({ title = 'Untitled', content = '' } = {}) {
  const { db } = await connectToDatabase()
  const res = await db.collection('posts').insertOne({ title, content, createdAt: new Date() })
  return { insertedId: String(res.insertedId) }
}
