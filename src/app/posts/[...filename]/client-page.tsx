'use client'

import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import Image from 'next/image'

interface PostProps {
  data: any
  query: string
  variables: { relativePath: string }
}

export default function Post(props: PostProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <div className="relative h-[60vh] w-full">
        <Image
          src={data.post.imageUrl || ''}
          alt={data.post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-x-4 text-sm text-white/80">
              <time dateTime={data.post.date}>{data.post.date}</time>
              <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium">
                {data.post.category}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {data.post.title}
            </h1>
            {data.post.author && (
              <p className="mt-4 text-lg text-white/80">
                By {data.post.author}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <article className="prose lg:prose-xl">
          <TinaMarkdown content={data.post.body} />
        </article>
      </div>
    </>
  )
}
