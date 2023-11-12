import {
  CardContent,
  CardHeader,
  Container,
  HeaderTime,
  HeaderTittle,
} from './styles'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

interface BlogCardProps {
  id: number
  title: string
  body: string
  createdAt: string
}

export function BlogCard({ body, createdAt, title, id }: BlogCardProps) {
  const navigate = useNavigate()
  const publishedDateFormatted = format(
    new Date(createdAt),
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })

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
          title={publishedDateFormatted}
          dateTime={new Date(createdAt).toISOString()}
        >
          <p>{publishedDateRelativeToNow}</p>
        </HeaderTime>
      </CardHeader>
      <CardContent>
        <Markdown>{handleFormatInitialContent(body)}</Markdown>
      </CardContent>
    </Container>
  )
}
