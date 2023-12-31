/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_USER: string
  readonly VITE_GITHUB_REPO: string
  readonly VITE_GITHUB_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
