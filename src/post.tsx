import {use} from 'react'

export default function Posts({ postDataPromise }: { postDataPromise: Promise<unknown> }) {
  const posts = use(postDataPromise) as Array<{
    id: string | number
    title: string
    body: string
  }>
  console.log(posts)
    return(
        <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    );
}