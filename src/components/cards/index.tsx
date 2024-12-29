type CardProps = {
  id: string
  imageUrl: string
  tag: string
  publishedAt: string
  title: string
  description: string
  author: {
    profileURl: string
    name: string
  }
}

export default function Card({
  id,
  imageUrl,
  tag,
  publishedAt,
  title,
  description,
  author
}: CardProps) {
  return (
    <div
      id={id}
      className="bg-white flex flex-col max-w-96 min-w-80 p-6 gap-6 rounded-3xl shadow-shadow"
    >
      <img src={imageUrl} alt={title} className="rounded-2xl" />

      <div className="flex flex-col gap-3 text-gray-950">
        <div className="bg-yellow flex items-center justify-center w-fit py-1 px-3 gap-2 rounded">
          <span className="text-sm leading-snug antialiased font-extrabold">
            {tag}
          </span>
        </div>

        <small className="text-sm leading-snug antialiased font-medium">
          Published {publishedAt}
        </small>

        <h1 className="text-2xl leading-snug antialiased font-extrabold hover:text-yellow hover:cursor-pointer">
          {title}
        </h1>

        <p className="text-base leading-snug antialiased font-medium text-gray-500">
          {description}
        </p>
      </div>

      <footer className="flex items-center gap-3">
        <img
          src={author.profileURl}
          alt={author.name}
          className="rounded-full"
        />
        <span className="text-sm leading-snug antialiased font-extrabold">
          {author.name}
        </span>
      </footer>
    </div>
  )
}
