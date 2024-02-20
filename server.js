const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = process.env.API_KEY // open ai API key

// send request to OpenAI GPT 3.5 Turbo API
app.post('/completions', async(req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // can change model to GPT 4 for better responses
            messages: [{role: "user", content: req.body.message}],
            max_tokens: 100 // token is a piece of a word -> this specifies max tokens for a response
        })

    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)

    } catch (error) {
        // log error if request to GPT 3.5 fails
        console.error(error)
    }
})

// Launch backend server
app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))
