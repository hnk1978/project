import { getPosts } from '../lib/posts'

export async function getServerSideProps() {
    const posts = await getPosts({ limit: 10 })

    // ✅ Convert Dates to strings for serialization
    const serializablePosts = posts.map(p => ({
        ...p,
        createdAt: p.createdAt ? p.createdAt.toISOString() : null
    }))

    return { props: { posts: serializablePosts } }
}

export default function SSRPage({ posts }) {
    return (
        <section>
            <h2 className="text-xl font-medium mb-3">SSR — getServerSideProps()</h2>
            <p className="text-sm text-slate-600 mb-4">This page fetches posts on every request from MongoDB.</p>
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
