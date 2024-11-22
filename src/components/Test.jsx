import React, { useEffect } from 'react'
import { useState } from 'react'

const test = () => {
    const [data, setData] = useState(null)

useEffect(() => {
  fetch('https://localhost/baloonGame/back-end/dashboard.php')
  .then(response => response.json())
  .then((jsonData) => {
    setData(jsonData)
  })
}, [])

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 1)}</pre>
      ) : (
        <p>ca marche pas</p>
      )    
    }
    </div>
  )
}

export default test
