import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { UserBlogProvider } from './context/UserBlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserBlogProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserBlogProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
