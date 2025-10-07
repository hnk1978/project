import { createPost } from '/lib/posts'
import { revalidatePath } from 'next/cache'

export async function createPostAction(formData) {
  'use server'
  const title = formData.get('title') || 'No title'
  const content = formData.get('content') || ''
  await createPost({ title, content })
  // 💥 Immediately revalidate the ISR page
  revalidatePath('/isr')
}

export default async function Page() {
  return (
    <section>
      <h2 className="text-xl font-medium mb-3">Server Action — Create a post</h2>
      <p className="text-sm text-slate-600 mb-4">This form will call a server action (no client JS needed to submit). New posts will appear on ISR after the revalidation interval.</p>

      <form action={createPostAction} className="space-y-3 bg-white p-4 rounded-lg shadow-sm">
        <div>
          <label className="block text-xs text-slate-600">Title</label>
          <input name="title" className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-slate-200" />
        </div>
        <div>
          <label className="block text-xs text-slate-600">Content</label>
          <textarea name="content" className="w-full border rounded px-3 py-2 mt-1 h-28 focus:outline-none focus:ring-2 focus:ring-slate-200" />
        </div>
        <button type="submit" className="px-4 py-2 bg-slate-800 text-white rounded-lg shadow">Create</button>
      </form>

      <p className="mt-4 text-xs text-slate-500">After submission, check the DB or another page to confirm the new post.</p>
    </section>
  )
}
