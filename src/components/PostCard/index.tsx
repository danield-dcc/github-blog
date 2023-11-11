import {
  Container,
  Footer,
  GoBack,
  GoToGithub,
  Header,
  HeaderText,
  Tittle,
} from './styles'
import { CaretLeft, ArrowSquareOut } from 'phosphor-react'
import githubImg from '../../assets/UserProfile/github.svg'
import calendarImg from '../../assets/Post/calendar.svg'
import CommentImg from '../../assets/Post/comment.svg'

export function PostCard() {
  return (
    <Container>
      <Header>
        <GoBack>
          <CaretLeft />
          <HeaderText>VOLTAR</HeaderText>
        </GoBack>
        <GoToGithub>
          <HeaderText>VER NO GITHUB</HeaderText>
          <ArrowSquareOut />
        </GoToGithub>
      </Header>
      <Tittle>JavaScript data types and data structures</Tittle>
      <Footer>
        <span>
          <img src={githubImg} alt="" />
          <p>cameronwll</p>
        </span>
        <span>
          <img src={calendarImg} alt="" />
          <p>Há um dia</p>
        </span>
        <span>
          <img src={CommentImg} alt="" />
          <p>5 comentários</p>
        </span>
      </Footer>
    </Container>
  )
}
