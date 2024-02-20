import { useState, useEffect } from "react"

const App = () => {
  const [value, setValue] = useState(null) // current user message
  const [message, setMessage] = useState(null) // current model response
  const [previousChats, setPreviousChats] = useState([]) // history of past interactions
  const [currentTitle, setCurrentTitle] = useState(null) // title of current interaction string

  // create new chat
  const createNewChat = () => {
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }

  // goes to previous message string
  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setValue("")
  }

  // allows "Enter" key press for sumbmit
  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      getMessages()
    }
  }

  // send user-inputted prompt to backend
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {

    // set title of current interaction string to first message
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
    }

    // add current interaction to the history of interactions
    if (currentTitle && value && message) {
      setPreviousChats(prevChats => (
        [...prevChats,
          {
            title: currentTitle,
            role: "user",
            content: value
          },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }
        
        ]
      ))
      setValue("")
    }
  }, [message, currentTitle])

  const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle) // current message string
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title))) // history of message strings

  // HTML UI -> attempted to very similarly replicate Open AI's ChatGPT UI
  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New Chat</button>
        <ul className="history"> 
          {uniqueTitles?.map((uniqueTitle, index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Made by Rishabh</p>
        </nav>
      </section>
      <section className="main">
        {!currentTitle && <h1>RishGPT</h1>}
        <ul className="feed"> 
          {currentChat.map((chatMessage, index) => <li key={index}>
            <p className="role">{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>)}
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input id="input" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyPress}/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            Rishabh's Chat GPT clone! Now I can use my own customized UI for my Chat messages!
          </p>
        </div>
      </section>
    </div>
  )
}

export default App;
