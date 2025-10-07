import { NextResponse } from 'next/server'
import { getPosts, createPost } from '../../../lib/posts'

export async function GET() {
  const posts = await getPosts({ limit: 50 })
  return NextResponse.json({ posts })
}

export async function POST(request) {
  const body = await request.json()
  const { title, content } = body || {}
  const res = await createPost({ title, content })
  return NextResponse.json({ ok: true, insertedId: res.insertedId })
}
