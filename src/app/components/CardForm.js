import { redirect } from 'next/navigation'
import { insertCard } from '../utils/supabase-client'
import Button from './Button'
import Field from './Field'
import Input from './Input'
import Label from './Label'

async function createCard(formData) {
  'use server'
  const title = formData.get('title')
  const description = formData.get('description')
  const img = formData.get('img')
  insertCard({ title, description, img })
  redirect('/')
  // get each field out of formData
  // call supabase-client insertCard
}

export default function CardForm() {
  return (
    <form action={createCard} className="p-6 bg-white rounded-md shadow-lg">
      <Field>
        <Label label="title" />
        <Input id="title" name="title" />
      </Field>

      <Field>
        <Label label="description" />
        <Input id="description" name="description" />
      </Field>

      <Field>
        <Label label="img" />
        <Input id="img" name="img" />
      </Field>

      <Button type="submit">Add Card</Button>
    </form>
  )
}
