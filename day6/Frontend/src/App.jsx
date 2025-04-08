import React from 'react'
import Registration from './Component/Registration'
import View from './Component/View'
import Delete from './Component/Delete'
import Update from './Component/Update'

const App = () => {
  return (
    <div>
      <h1> User Registration System</h1>
      <Registration/>
      <View/>
      <Delete/>
      <Update/>
    </div>
  )
}

export default App