import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PostQuiz = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='Topic' />
        <TextField source='Question'/>
        <TextField source='options' />
        <DateField source='publishedAt'/>
        <EditButton basePath='/teacher' />
        <DeleteButton basePath='/teacher' />
      </Datagrid>
    </List>
  )
}

export default PostQuiz;