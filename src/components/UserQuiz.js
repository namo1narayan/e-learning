import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const UserQuiz = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <EditButton basePath='/student' />
        <DeleteButton basePath='/student' />
      </Datagrid>
    </List>
  )
}

export default UserQuiz;