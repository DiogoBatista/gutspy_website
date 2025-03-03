import client from '../../../tina/__generated__/client'
import Link from 'next/link'
import Image from 'next/image'

// export default async function Page() {
//   const { data } = await client.queries.postConnection()

//   return (
//     <>
//       <h1>Posts</h1>
//       <div>
//         {data?.postConnection?.edges?.map((post) => (
//           <div key={post?.node?._sys.filename}>
//             <Link href={`/posts/${post?.node?._sys.filename}`}>
//               {post?.node?._sys.filename}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

export default async function Page() {
  const { data } = await client.queries.postConnection()

  console.log(data)

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
          {data?.postConnection?.edges?.map((post) => (
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
