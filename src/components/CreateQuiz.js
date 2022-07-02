import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CreateQuiz = (props) => {
  return (
    <Create title='Create a Quiz' {...props}>
      <SimpleForm>
        <TextInput source='Topic' />
        <TextInput multiline source='Question' />
        <TextInput label='option' multiline source='options' />
        <DateInput label="published" source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default CreateQuiz;