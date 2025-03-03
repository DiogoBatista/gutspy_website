import { client } from '../../tina/__generated__/client'

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const postsResponse = await client.queries.postConnection()
    return (
      postsResponse.data.postConnection.edges
        ?.map((edge) => edge?.node?._sys.filename || '')
        .filter(Boolean) || []
    )
  } catch (error) {
    console.error('Error fetching posts from Tina:', error)
    return []
  }
}
