import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'ikpeaej3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
})