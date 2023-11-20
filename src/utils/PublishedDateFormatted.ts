import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PublishedDateFormatted(createdAt: string) {
  return format(new Date(createdAt), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
}

export function PublishedDateRelativeToNow(createdAt: string) {
  return formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })
}
