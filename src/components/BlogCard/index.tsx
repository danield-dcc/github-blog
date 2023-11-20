import {
  CardContent,
  CardHeader,
  Container,
  HeaderTime,
  HeaderTittle,
} from './styles'

import { useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import {
  PublishedDateFormatted,
  PublishedDateRelativeToNow,
} from '../../utils/PublishedDateFormatted'

interface BlogCardProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export function BlogCard({ body, createdAt, title, id }: BlogCardProps) {
  const navigate = useNavigate()

  function handleFormatInitialContent(body: string) {
    return body?.slice(0, 172).concat('...')
  }

  function handleSelectedPost(id: number) {
    navigate(`post/${id}`)
  }

  return (
    <Container onClick={() => handleSelectedPost(id)}>
      <CardHeader>
        <HeaderTittle>{title}</HeaderTittle>
        <HeaderTime
          title={PublishedDateFormatted(createdAt)}
          dateTime={new Date(createdAt).toISOString()}
        >
          <p>{PublishedDateRelativeToNow(createdAt)}</p>
        </HeaderTime>
      </CardHeader>
      <CardContent>
        <Markdown>{handleFormatInitialContent(body)}</Markdown>
      </CardContent>
    </Container>
  )
}
