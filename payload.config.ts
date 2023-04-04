import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { FormSubmissions } from './collections/FormSubmissions'
import { Study } from './collections/Studies'
import { Users } from './collections/Users'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'

dotenv.config()

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug
  },
  collections: [
    Pages,
    Categories,
    Posts,
    Tags,
    Users,
    Media,
    FormSubmissions,
    Study
  ]
})
