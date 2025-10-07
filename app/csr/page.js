'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      const res = await fetch('/api/posts')
      const data = await res.json()
      if (mounted) setPosts(data.posts || [])
      setLoading(false)
    }
    load()
    return () => { mounted = false }
  }, [])

  return (
    <section>
      <h2 className="text-xl font-medium mb-3">CSR — Client-side rendering</h2>
      <p className="text-sm text-slate-600 mb-4">This page fetches posts from an API route after the page loads on the client.</p>
      {loading ? (
        <div className="ts">Loading...</div>
      ) : (
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
      )}
    </section>
  )
}
