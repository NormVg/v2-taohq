import { listProducts } from '../../services/content.service'

export default defineEventHandler(() => listProducts())
