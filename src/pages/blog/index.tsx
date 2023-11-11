import { BlogCard } from '../../components/BlogCard'
import { UserProfile } from '../../components/Userprofile'
import { useUserBlogContext } from '../../context/UserBlogContext'
import {
  CardWrapper,
  Container,
  InputContainer,
  Label,
  LabelInput,
  LabelPublications,
  LabelTittle,
} from './styles'

export function Blog() {
  const { userPosts } = useUserBlogContext()
  return (
    <Container>
      <UserProfile />

      {/* input */}
      <InputContainer>
        <Label>
          <LabelTittle>Publicações</LabelTittle>
          <LabelPublications>6 Publicações</LabelPublications>
        </Label>
        <LabelInput placeholder="Buscar conteúdo" />
      </InputContainer>

      {/* card */}
      <CardWrapper>
        {userPosts?.map(({ id, body, createdAt, title }) => (
          <BlogCard key={id} body={body} createdAt={createdAt} title={title} />
        ))}
      </CardWrapper>
    </Container>
  )
}
