import React, { useState } from "react";
import Person from './Person.jsx'

const App = () => {
  const [person, setperson] = useState([
    {
      name: "virendra",
      age: "25",
      city: "jaipur"
    },
    {
      name: "Tarachand",
      age: "29",
      city: "jaipur"
    },
    {
      name: "garima",
      age: "20",
      city: "jodhpur"
    },
    {
      name: "garima",
      age: "20",
      city: "jodhpur"
    },{
      name: "garima",
      age: "20",
      city: "jodhpur"
    },{
      name: "garima",
      age: "20",
      city: "jodhpur"
    },

  ])

  const display = person.map(
    (data, index) => {
      return <Person name={data.name} city={data.city} age={data.age} />
    }
  )



  return (
    <div className="container">
      {display}
    </div>


  )
}


export default App;