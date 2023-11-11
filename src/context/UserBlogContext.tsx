import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

type UserPostType = {
  id: number
  title: string
  body: string
  createdAt: string
}

type userDataType = {
  name: string
  bio: string
  avatarUrl: string
  blog: string
  email: string
  followers: number
  following: number
  location: string
  login: string
  htmlUrl: string
}

interface UserBlogContextType {
  userData: userDataType
  userPosts: UserPostType[]
}

export const UserBlogContext = createContext({} as UserBlogContextType)

// interface BlogContextProps {
//   children: ReactNode
// }

export function UserBlogProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<userDataType>({} as userDataType)
  const [userPosts, setUserPosts] = useState<UserPostType[]>([])
  const username = 'danield-dcc'
  const repo = 'github-blog'

  async function fetchUserData() {
    const userValues = await api.get(`/users/${username}`)

    const userData: userDataType = {
      name: userValues?.data.name,
      bio: userValues?.data.bio,
      avatarUrl: userValues?.data.avatar_url,
      blog: userValues?.data.blog,
      email: userValues?.data.email,
      followers: userValues?.data.followers,
      following: userValues?.data.following,
      location: userValues?.data.location,
      login: userValues?.data.login,
      htmlUrl: userValues?.data.html_url,
    }
    setUserData(userData)
  }

  async function fetchUserPosts() {
    const userPosts = await api.get(`/search/issues`, {
      params: {
        q: `repo:${username}/${repo} is:issue`,
        // q: `repo:${repo}/issue is:issue ${searchText}`,
      },
    })

    const postsData: UserPostType[] = userPosts?.data.items.map(
      (item: {
        number: number
        title: string
        body: string
        created_at: string
      }) => {
        return {
          id: item.number,
          title: item.title,
          body: item.body,
          createdAt: item.created_at,
        }
      },
    )

    setUserPosts(postsData)
  }

  // https://api.github.com/search/issues?q=user:danield-dcc

  useEffect(() => {
    fetchUserData()
    fetchUserPosts()
  }, [])
  return (
    <UserBlogContext.Provider value={{ userData, userPosts }}>
      {children}
    </UserBlogContext.Provider>
  )
}

export const useUserBlogContext = () => useContext(UserBlogContext)
