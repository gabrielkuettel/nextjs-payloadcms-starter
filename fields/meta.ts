import { Field } from 'payload/types'

export const meta: Field = {
  name: 'meta',
  label: 'Meta',
  type: 'group',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea'
    },
    {
      name: 'keywords',
      label: 'Keywords',
      type: 'text'
    }
  ]
}
