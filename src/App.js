import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostQuiz from './components/PostQuiz'
import CreateQuiz from './components/CreateQuiz'
import EditQuiz from './components/EditQuiz'
import UserQuiz from './components/UserQuiz'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='teacher'
        list={PostQuiz}
        create={CreateQuiz}
        edit={EditQuiz}
      />
      <Resource
        name='student'
        list={UserQuiz}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  )
}

export default App
