import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const EditQuiz = (props) => {
  return (
    <Edit title='Edit Quiz' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='Topic' />
        <TextInput multiline source='Question' />
        <TextInput label='option' multiline source='options' />
        <DateInput label="published" source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default EditQuiz;