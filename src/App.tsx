import Card from './components/cards'
import { BlogPosts } from './database'

export default function App() {
  return (
    <section className="flex flex-row flex-wrap gap-6 items-center justify-center min-h-screen m-6">
      {BlogPosts.map(BlogPost => (
        <Card
          id={BlogPost.id}
          imageUrl={BlogPost.imageUrl}
          tag={BlogPost.tag}
          publishedAt={BlogPost.publishedAt}
          title={BlogPost.title}
          description={BlogPost.description}
          author={{
            profileURl: BlogPost.author.profileURl,
            name: BlogPost.author.name
          }}
        />
      ))}
    </section>
  )
}
