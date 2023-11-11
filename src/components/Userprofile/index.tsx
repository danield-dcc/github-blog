import {
  CardFooter,
  CardTop,
  Container,
  Content,
  Description,
  ImageCard,
  Tittle,
  TittleLink,
} from './styled'
import linkImg from '../../assets/UserProfile/linkIcon.svg'
import githubImg from '../../assets/UserProfile/github.svg'
import locationImg from '../../assets/UserProfile/location.svg'
import followersImg from '../../assets/UserProfile/followers.svg'
import { useUserBlogContext } from '../../context/UserBlogContext'

export function UserProfile() {
  const { userData } = useUserBlogContext()
  return (
    <Container>
      <ImageCard src={userData?.avatarUrl} alt="" />
      <Content>
        <CardTop>
          <Tittle>{userData?.name}</Tittle>
          <TittleLink>
            <p>GITHUB</p>
            <img src={linkImg} alt="" />
          </TittleLink>
        </CardTop>

        <Description>
          <p>
            {userData?.bio ||
              `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            enim rem harum sint quos repudiandae neque adipisci, nostrum
            exercitationem eos. Reprehenderit, porro? Asperiores eveniet, ullam
            minima eaque fugiat earum saepe.`}
          </p>
        </Description>

        <CardFooter>
          <span>
            <img src={githubImg} alt="" />
            <p>{userData.login}</p>
          </span>
          <span>
            <img src={locationImg} alt="" />
            <p>Rocketseat</p>
          </span>
          <span>
            <img src={followersImg} alt="" />
            <p>{`${userData?.followers} seguidores`}</p>
          </span>
        </CardFooter>
      </Content>
    </Container>
  )
}
