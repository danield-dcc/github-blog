import { useCallback, useEffect, useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { useUserBlogContext } from '../../context/UserBlogContext'
import { Container, PostBody } from './styles'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

export function Post() {
  const { issueNumber } = useParams()
  const { fetchOnePost } = useUserBlogContext()
  const [postBody, setPostBody] = useState('')
  const [createdAtDate, setCreatedAtDate] = useState('')

  const fetchPostData = useCallback(async () => {
    const postData = await fetchOnePost(Number(issueNumber))
    setCreatedAtDate(postData.data.created_at)
    setPostBody(postData.data.body)
  }, [fetchOnePost, issueNumber])

  useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

  return (
    <Container>
      <PostCard issueNumber={issueNumber} createAt={createdAtDate} />

      <PostBody>
        <ReactMarkdown
          className="line-break"
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ ...props }) => (
              <img style={{ maxWidth: '100%' }} {...props} alt="" />
            ),
          }}
        >
          {postBody}
        </ReactMarkdown>
      </PostBody>
    </Container>
  )
}
