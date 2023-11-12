import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { AxiosResponse } from 'axios'

const username = import.meta.env.VITE_GITHUB_USER
const repo = import.meta.env.VITE_GITHUB_REPO

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
  username: string
  repo: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchOnePost: (issueNumber: number) => Promise<AxiosResponse<any, any>>
  searchPosts: (query: string) => Promise<void>
  fetchUserPosts(): Promise<void>
}

export const UserBlogContext = createContext({} as UserBlogContextType)

export function UserBlogProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<userDataType>({} as userDataType)
  const [userPosts, setUserPosts] = useState<UserPostType[]>([])

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

  async function searchPosts(query: string) {
    const queryPosts = await api.get(`/search/issues`, {
      params: {
        q: `${query} repo:${username}/${repo}`,
      },
    })

    const postsData: UserPostType[] = queryPosts?.data.items.map(
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

    console.log('queryPosts ==>', queryPosts)
    setUserPosts(postsData)
  }

  async function fetchOnePost(issueNumber: number) {
    const userPosts = await api.get(
      `/repos/${username}/${repo}/issues/${issueNumber}`,
    )

    console.log('userPosts ==>', userPosts)
    return userPosts
  }

  useEffect(() => {
    fetchUserData()
    fetchUserPosts()
  }, [])
  return (
    <UserBlogContext.Provider
      value={{
        userData,
        userPosts,
        fetchOnePost,
        username,
        repo,
        searchPosts,
        fetchUserPosts,
      }}
    >
      {children}
    </UserBlogContext.Provider>
  )
}

export const useUserBlogContext = () => useContext(UserBlogContext)
