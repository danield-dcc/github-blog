import axios from 'axios'

// const key = import.meta.env.VITE_GITHUB_KEY

export const api = axios.create({
  baseURL: 'http://api.github.com',
})
