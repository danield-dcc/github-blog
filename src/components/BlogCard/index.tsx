import {
  CardContent,
  CardHeader,
  Container,
  HeaderTime,
  HeaderTittle,
} from './styles'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface BlogCardProps {
  title: string
  body: string
  createdAt: string
}

export function BlogCard({ body, createdAt, title }: BlogCardProps) {
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

  return (
    <Container>
      <CardHeader>
        <HeaderTittle>{title}</HeaderTittle>
        <HeaderTime
          title={publishedDateFormatted}
          dateTime={new Date(createdAt).toISOString()}
        >
          <p>{publishedDateRelativeToNow}</p>
        </HeaderTime>
      </CardHeader>
      <CardContent>{handleFormatInitialContent(body)}</CardContent>
    </Container>
  )
}
