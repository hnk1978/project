export const revalidate = 30

import { getPosts } from '../../lib/posts'

export default async function Page() {
  const posts = await getPosts({ limit: 10 })
  console.log("Fetching posts at", new Date().toISOString())

  return (
    <section>
      <h2 className="text-xl font-medium mb-3">ISR — Incremental Static Regeneration</h2>
      <p className="text-sm text-slate-600 mb-4">This page is statically generated but will revalidate every 30 seconds.</p>
      <ul className="space-y-3">
        {posts.map(p => (
          <li key={p._id} className="card">
            <div className="flex justify-between items-start">
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="ts">{new Date(p.createdAt).toLocaleString()}</div>
            </div>
            <p className="mt-2 text-sm text-slate-700">{p.content}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
