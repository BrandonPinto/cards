import React, {useEffect, useState} from 'react'

export default function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5001/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])


  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}


    </div>
  )
}
