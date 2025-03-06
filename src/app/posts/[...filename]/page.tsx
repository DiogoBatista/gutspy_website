import { Metadata } from 'next'
import client from '../../../../tina/__generated__/client'
import ClientPage from './client-page'

interface PostData {
  title: string
  description: string
  imageUrl?: string | null
  date: string
  author: string
  category?: string | null
}

interface PageParams {
  params: Promise<{
    filename: string[]
  }>
}

interface TinaPost {
  __typename: 'Post'
  id: string
  title: string
  description: string
  date: string
  author: string
  body?: any
  imageUrl?: string | null
  category?: string | null
  _sys: {
    breadcrumbs: string[]
  }
}

interface PostConnectionEdge {
  __typename?: 'PostConnectionEdges'
  cursor: string
  node?: TinaPost | null
}

// This is a server component that handles metadata
export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const resolvedParams = await params
  const post = await fetchPost(resolvedParams.filename)

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.imageUrl || '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.imageUrl || ''],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${resolvedParams.filename.join('/')}`,
    },
  }
}

// This is your main page component
export default async function Page({ params }: PageParams) {
  const resolvedParams = await params
  const data = await client.queries.post({
    relativePath: `${resolvedParams.filename.join('/')}.md`,
  })

  return (
    <ClientPage
      data={data.data}
      query={data.query}
      variables={{
        relativePath: `${resolvedParams.filename.join('/')}.md`,
      }}
    />
  )
}

// Helper function to fetch post data
async function fetchPost(filename: string[]): Promise<PostData> {
  const response = await client.queries.post({
    relativePath: `${filename.join('/')}.md`,
  })

  return {
    title: response.data.post.title,
    description: response.data.post.description,
    imageUrl: response.data.post.imageUrl,
    date: response.data.post.date,
    author: response.data.post.author,
    category: response.data.post.category,
  }
}

export async function generateStaticParams() {
  const pages = await client.queries.postConnection()
  return (
    pages.data?.postConnection?.edges?.map((edge) => ({
      filename: edge?.node?._sys.breadcrumbs,
    })) || []
  )
}
