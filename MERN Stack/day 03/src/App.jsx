import React from "react";
import List from './List'

const App = () => {
  return (
    <div className="container">
      <List price="100" />
      <List price="200" />
      <List price="300" />

    </div>
  )
}

export default App;