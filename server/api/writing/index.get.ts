import { listPosts } from '../../services/content.service'

export default defineEventHandler(() => listPosts())
