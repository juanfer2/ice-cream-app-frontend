import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'

function Home() {
  const [response, setResponse] = useState({})
  const [message, setMessage] = useState()
  const socket = socketIOClient('http://localhost:4000')

  useEffect(() => {
    connetSocket()
  }, [])

  const sendMessage = () => {
    console.log(message)
    socket.emit('message', { message })
    connetSocket()
  }

  function connetSocket() {
    console.log(socket)
    socket.on('message', (data) => {
      setResponse(data)
      console.log(data)
    })
    // socket.on("FromAPI", data => {
    //   setResponse(data);
    //   console.log(data);

    // }  )

    socket.on('message', (data) => {
      setResponse(data)
      console.log(data)
    })
  }

  return (
    <div>
      <h1>Ice Cream App</h1>
      <p>
        It's {JSON.stringify(response, null, 2)}
        {/* It's  {response.id} <time dateTime={response.response}>{response.response}</time> */}
      </p>

      <div className="chat-container">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          type="text"
        />
        <button onClick={() => sendMessage()}>send</button>

        <div className="chat-output"></div>
      </div>
    </div>
  )
}

export default Home
