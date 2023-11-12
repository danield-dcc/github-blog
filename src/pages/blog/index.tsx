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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {
  const { userPosts, searchPosts, fetchUserPosts } = useUserBlogContext()
  const { register, handleSubmit, watch } = useForm<searchFormInputs>({
    mode: 'onChange',
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: searchFormInputs) {
    if (!data.query) {
      fetchUserPosts()
      return
    }
    await searchPosts(data.query)
  }

  function debounce(func, timeout = 1000) {
    let timer: number | undefined
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  function saveInput() {
    const input = watch()
    handleSearchPosts(input)
  }

  const processChange = debounce(() => saveInput())

  return (
    <Container>
      <UserProfile />

      <InputContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <Label>
          <LabelTittle>Publicações</LabelTittle>
          <LabelPublications>{userPosts.length} Publicações</LabelPublications>
        </Label>
        <LabelInput
          placeholder="Buscar conteúdo"
          {...register('query')}
          onKeyUp={(e) => processChange(e)}
        />
      </InputContainer>

      <CardWrapper>
        {userPosts?.map(({ id, body, createdAt, title }) => (
          <BlogCard
            key={id}
            body={body}
            createdAt={createdAt}
            title={title}
            id={id}
          />
        ))}
      </CardWrapper>
    </Container>
  )
}
