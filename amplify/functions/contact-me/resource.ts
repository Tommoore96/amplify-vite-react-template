import { defineFunction } from '@aws-amplify/backend'

export const contactMe = defineFunction({
  name: 'contact-me',
  entry: './handler.ts'
})
