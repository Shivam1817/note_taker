
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  // add more env vars here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}