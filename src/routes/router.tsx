import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../Layout/DefaultLayout'
import { Blog } from '../pages/blog'
import { Post } from '../pages/Post'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        {/* <Route path="/post/:issueNumber" element={<Post />} /> */}
      </Route>
    </Routes>
  )
}
