import client from '../../../tina/__generated__/client'
import Link from 'next/link'
import Image from 'next/image'

// Helper function to parse date strings in different formats
function parseDate(dateString: string): Date {
  // Handle format like "05-03-2025"
  if (dateString.includes('-') && dateString.split('-')[0].length === 2) {
    const [day, month, year] = dateString.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }

  // Handle format like "2025-06-15" or "2025-06-15T00:00:00.000Z"
  return new Date(dateString)
}

// Helper function to check if a post is less than 2 weeks old
function isNewPost(dateString: string): boolean {
  const postDate = parseDate(dateString)
  const twoWeeksAgo = new Date()
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)
  return postDate > twoWeeksAgo
}

export default async function Page() {
  const { data } = await client.queries.postConnection()

  // Sort posts by date (most recent first)
  const sortedPosts =
    data?.postConnection?.edges
      ?.filter((post) => post?.node?.date) // Filter out posts without dates
      ?.sort((a, b) => {
        const dateA = parseDate(a?.node?.date || '')
        const dateB = parseDate(b?.node?.date || '')
        return dateB.getTime() - dateA.getTime() // Most recent first
      }) || []

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn about the latest trends in health and nutrition.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <article
              key={post?.node?._sys.filename}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  alt=""
                  src={post?.node?.imageUrl || ''}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="rounded-2xl bg-gray-100 object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                {/* New badge for posts less than 2 weeks old */}
                {post?.node?.date && isNewPost(post.node.date) && (
                  <div className="absolute right-3 top-3">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 ring-1 ring-inset ring-green-600/20">
                      New
                    </span>
                  </div>
                )}
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post?.node?.date} className="text-gray-500">
                    {post?.node?.date}
                  </time>
                  <span className="rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-900/10">
                    {(post?.node?.category ?? 'uncategorized')
                      .charAt(0)
                      .toUpperCase() +
                      (post?.node?.category ?? 'uncategorized').slice(1)}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/posts/${post?.node?._sys.filename}`}>
                      <span className="absolute inset-0" />
                      {post?.node?.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post?.node?.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm/6">
                    <p className="text-gray-600">{post?.node?.author}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
