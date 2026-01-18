import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CommentsSection } from './CommentSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentsSection />
  </StrictMode>,
)
