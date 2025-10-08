import { getPosts } from '../lib/posts'

export async function getStaticProps() {
    const posts = await getPosts({ limit: 10 })

    // ✅ Convert Dates to strings for serialization
    const serializablePosts = posts.map(p => ({
        ...p,
        createdAt: p.createdAt ? p.createdAt.toISOString() : null
    }))

    return {
        props: { posts: serializablePosts },
        revalidate: 30 // ISR interval
    }
}

export default function ISRPage({ posts }) {
    return (
        <section>
            <h2 className="text-xl font-medium mb-3">ISR — getStaticProps() + revalidate</h2>
            <p className="text-sm text-slate-600 mb-4">This page regenerates in the background every 30 seconds on demand.</p>
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
